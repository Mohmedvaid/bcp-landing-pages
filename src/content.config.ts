import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Mohmed'),
    category: z.enum([
      'interior',
      'exterior',
      'cabinets',
      'color',
      'process',
      'cost',
      'general',
    ]),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
})

const areasCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/areas' }),
  schema: z.object({
    suburb: z.string(),
    region: z.enum(['north-shore', 'chicago', 'west-suburbs', 'northwest-suburbs']),
    state: z.string().default('IL'),
    zipCodes: z.array(z.string()),
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    architecturalStyles: z.array(z.string()).default([]),
    neighborhoods: z.array(z.string()).default([]),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    draft: z.boolean().default(false),
  }),
})

export const collections = {
  blog: blogCollection,
  areas: areasCollection,
}
