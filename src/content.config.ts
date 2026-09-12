import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const timeline = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/timeline' }),
	schema: z.object({
		year: z.string(),
		title: z.string(),
		order: z.number(),
	}),
});

const experience = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
	schema: z.object({
		org: z.string(),
		role: z.string(),
		dates: z.string(),
		category: z.enum(['finance', 'other']),
		bullets: z.array(z.string()),
		order: z.number(),
		placeholder: z.boolean().default(false),
	}),
});

const leadership = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/leadership' }),
	schema: z.object({
		title: z.string(),
		org: z.string(),
		dates: z.string(),
		featured: z.boolean().default(false),
		stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
		order: z.number(),
	}),
});

const research = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
	schema: z.object({
		company: z.string(),
		ticker: z.string(),
		position: z.enum(['LONG', 'SHORT']),
		upside: z.number().nullable().default(null),
		question: z.string(),
		thesis: z.string(),
		whyNow: z.array(z.string()).default([]),
		valuation: z.string(),
		bull: z.string(),
		base: z.string(),
		bear: z.string(),
		risks: z.array(z.string()).default([]),
		conclusion: z.string(),
		order: z.number(),
		placeholder: z.boolean().default(false),
	}),
});

const journal = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
	schema: z.object({
		title: z.string(),
		tag: z.string(),
		date: z.string(),
		excerpt: z.string(),
		order: z.number(),
	}),
});

export const collections = { timeline, experience, leadership, research, journal };
