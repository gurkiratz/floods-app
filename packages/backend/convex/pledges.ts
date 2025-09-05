import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

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
	returns: v.id("pledges"),
	handler: async (ctx, args) => {
		const pledgeId = await ctx.db.insert("pledges", {
			name: args.name,
			email: args.email,
			phone: args.phone,
			housesToSponsor: args.housesToSponsor,
			message: args.message,
		});
		
		return pledgeId;
	},
});

/**
 * Get all pledges (for admin purposes).
 */
export const getAllPledges = query({
	args: {},
	returns: v.array(v.object({
		_id: v.id("pledges"),
		_creationTime: v.number(),
		name: v.string(),
		email: v.string(),
		phone: v.optional(v.string()),
		housesToSponsor: v.number(),
		message: v.optional(v.string()),
	})),
	handler: async (ctx) => {
		return await ctx.db.query("pledges").order("desc").collect();
	},
});