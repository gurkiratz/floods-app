import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	todos: defineTable({
		text: v.string(),
		completed: v.boolean(),
	}),
	pledges: defineTable({
		name: v.string(),
		email: v.string(),
		phone: v.optional(v.string()),
		housesToSponsor: v.number(),
		message: v.optional(v.string()),
	}),
});
