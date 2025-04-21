import { z } from "zod";

const artistSchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z
    .object({
      formats: z.object({
        small: z.object({
          url: z.string(),
        }),
        medium: z.object({
          url: z.string(),
        }),
      }),
    })
    .nullish(),
});

export type Artist = z.infer<typeof artistSchema>;

export const artistListSchema = z.array(artistSchema);

const venueSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
  googleMapsUrl: z.string().nullish(),
});

export const venueListSchema = z.array(venueSchema);

export const eventListSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    artists: artistListSchema,
    venue: venueSchema,
    description: z.string().nullable(),
    startsAt: z.string(),
    endsAt: z.string(),
  })
);
