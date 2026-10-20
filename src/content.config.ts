import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    an: z.string(),
    order: z.number(),
    title: z.string(),
    short: z.string(),
    domain: z.string(),
    org: z.string(),
    role: z.string(),
    dates: z.string(),
    status: z.enum(['complete', 'ongoing', 'preliminary', 'advance']),
    statusNote: z.string().optional(),
    lead: z.string(),
    indexSpec: z.string(),
    stack: z.array(z.string()),
    hardware: z.string().optional(),
    keySpecs: z.array(
      z.object({ param: z.string(), value: z.string(), cond: z.string().optional() }),
    ),
  }),
});

export const collections = { projects };
