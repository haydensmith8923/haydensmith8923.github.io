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

const movies = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/movies' }),
	schema: z.object({
		title: z.string(),
		rating: z.number().min(1).max(5),
		verdict: z.string(),
	}),
});

const teams = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/teams' }),
	schema: z.object({
		name: z.string(),
		league: z.string(),
		sinceWhen: z.string(),
		blurb: z.string(),
	}),
});

export const collections = { timeline, movies, teams };
