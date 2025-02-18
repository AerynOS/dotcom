// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    contents: z.array(z.string()),
    author: z.string(),
    role: z.string().optional(),
    pubDate: z.date(),
    readTime: z.number(),
    tags: z.array(z.string()).optional(),
  }),
})


const editionCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/edition" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    screenshot: image(),
    screenshot_desc: z.string(),
    version: z.string(),
    url: z.string(),
    checksum_url: z.string(),
  }),
})


export const collections = {
  'blog': blogCollection,
  'edition': editionCollection,
}