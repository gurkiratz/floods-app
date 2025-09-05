import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

/**
 * Create a new pledge with the provided information.
 */
export const createPledge = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    housesToSponsor: v.number(),
    message: v.optional(v.string()),
  },
  returns: v.id('pledges'),
  handler: async (ctx, args) => {
    const pledgeId = await ctx.db.insert('pledges', {
      name: args.name,
      email: args.email,
      phone: args.phone,
      housesToSponsor: args.housesToSponsor,
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
 * Get top pledgers by number of houses sponsored.
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
        pledges
          .sort((a, b) => b.housesToSponsor - a.housesToSponsor)
          .slice(0, limit)
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
      housesToSponsor: v.number(),
      message: v.optional(v.string()),
    })
  ),
  handler: async (ctx, args) => {
    const limit = args.limit || 5
    return await ctx.db.query('pledges').order('desc').take(limit)
  },
})
