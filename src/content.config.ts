// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: ({ image }) => z.object ({
  title: z.string(),
  description: z.string(),
  contents: z.array(z.string()),
  author: z.string(),
  role: z.string().optional(),
  // authorImage: image(),
  // authorImageAlt: z.string(),
  pubDate: z.date(),
  // cardImage: image().nullable(),
  // cardImageAlt: z.string(),
  readTime: z.number(),
  tags: z.array(z.string()).optional(),
  }),
});

// const insightsCollection = defineCollection({
//   loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/insights" }),
//   schema: ({ image }) => z.object ({
//   title: z.string(),
//   description: z.string(),
//   // contents: z.array(z.string()),
//   // cardImage: image().nullable(),
//   // cardImageAlt: z.string(),
//   }),
// });

export const collections = {
  'blog': blogCollection,
  // 'insights': insightsCollection,
};