import { defineCollection, z } from "astro:content";

const postCollections = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      author: z.string(),
      image: image(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  post: postCollections,
};
