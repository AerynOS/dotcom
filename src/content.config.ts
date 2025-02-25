// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection, type SchemaContext } from 'astro:content'
import { glob } from 'astro/loaders'
import { blogSchema } from 'starlight-blog/schema'
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';


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
  // blog: blogCollection,
  edition: editionCollection,
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: (context) => extendDocsSchema(context).merge(blogSchema(context))
    })
  }),

}

function extendDocsSchema(context: SchemaContext)  {
  return z.object({
    hideTitle: z.boolean().optional(),
  })
}