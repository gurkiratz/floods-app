import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

// Constants
const HOUSE_PRICE = 600000 // ₹6,00,000 per house

/**
 * Create a new pledge with the provided information.
 */
export const createPledge = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    pledgeAmount: v.number(), // Amount in rupees
    message: v.optional(v.string()),
  },
  returns: v.id('pledges'),
  handler: async (ctx, args) => {
    // Calculate houses from amount
    const rawHouses = args.pledgeAmount / HOUSE_PRICE
    // Round to 2 decimal places if it's a decimal, otherwise keep as whole number
    const housesToSponsor =
      rawHouses % 1 === 0 ? rawHouses : Math.round(rawHouses * 100) / 100

    const pledgeId = await ctx.db.insert('pledges', {
      name: args.name,
      email: args.email,
      phone: args.phone,
      pledgeAmount: args.pledgeAmount,
      housesToSponsor: housesToSponsor,
      message: args.message,
    })

    return pledgeId
  },
})

/**
 * Get all pledges (for admin purposes).
 */
export const getAllPledges = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id('pledges'),
      _creationTime: v.number(),
      name: v.string(),
      email: v.string(),
      phone: v.optional(v.string()),
      pledgeAmount: v.number(),
      housesToSponsor: v.number(),
      message: v.optional(v.string()),
    })
  ),
  handler: async (ctx) => {
    return await ctx.db.query('pledges').order('desc').collect()
  },
})

/**
 * Get the total number of houses pledged.
 */
export const getTotalHousesCount = query({
  args: {},
  returns: v.number(),
  handler: async (ctx) => {
    const pledges = await ctx.db.query('pledges').collect()
    return pledges.reduce((total, pledge) => total + pledge.housesToSponsor, 0)
  },
})

/**
 * Get the total amount pledged.
 */
export const getTotalAmountPledged = query({
  args: {},
  returns: v.number(),
  handler: async (ctx) => {
    const pledges = await ctx.db.query('pledges').collect()
    return pledges.reduce((total, pledge) => total + pledge.pledgeAmount, 0)
  },
})

/**
 * Get top pledgers by amount pledged.
 */
export const getTopPledgers = query({
  args: {
    limit: v.optional(v.number()),
  },
  returns: v.array(
    v.object({
      _id: v.id('pledges'),
      _creationTime: v.number(),
      name: v.string(),
      email: v.string(),
      phone: v.optional(v.string()),
      pledgeAmount: v.number(),
      housesToSponsor: v.number(),
      message: v.optional(v.string()),
    })
  ),
  handler: async (ctx, args) => {
    const limit = args.limit || 5
    return await ctx.db
      .query('pledges')
      .order('desc')
      .collect()
      .then((pledges) =>
        pledges.sort((a, b) => b.pledgeAmount - a.pledgeAmount).slice(0, limit)
      )
  },
})

/**
 * Get recent pledges for notifications.
 */
export const getRecentPledges = query({
  args: {
    limit: v.optional(v.number()),
  },
  returns: v.array(
    v.object({
      _id: v.id('pledges'),
      _creationTime: v.number(),
      name: v.string(),
      email: v.string(),
      phone: v.optional(v.string()),
      pledgeAmount: v.number(),
      housesToSponsor: v.number(),
      message: v.optional(v.string()),
    })
  ),
  handler: async (ctx, args) => {
    const limit = args.limit || 5
    return await ctx.db.query('pledges').order('desc').take(limit)
  },
})

/**
 * Get pledge statistics.
 */
export const getPledgeStats = query({
  args: {},
  returns: v.object({
    totalPledges: v.number(),
    totalAmount: v.number(),
    totalHouses: v.number(),
    averageAmount: v.number(),
    averageHouses: v.number(),
  }),
  handler: async (ctx) => {
    const pledges = await ctx.db.query('pledges').collect()
    const totalPledges = pledges.length
    const totalAmount = pledges.reduce(
      (sum, pledge) => sum + pledge.pledgeAmount,
      0
    )
    const totalHouses = pledges.reduce(
      (sum, pledge) => sum + pledge.housesToSponsor,
      0
    )

    return {
      totalPledges,
      totalAmount,
      totalHouses,
      averageAmount: totalPledges > 0 ? totalAmount / totalPledges : 0,
      averageHouses: totalPledges > 0 ? totalHouses / totalPledges : 0,
    }
  },
})
