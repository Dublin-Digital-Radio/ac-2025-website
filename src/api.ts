import { z } from "zod";

export const artistSchema = z.object({
  id: z.number().transform((val) => val.toString()),
  name: z.string(),
  description: z.string(),
  image: z
    .object({
      formats: z.object({
        thumbnail: z
          .object({
            url: z.string(),
          })
          .optional(),
        small: z
          .object({
            url: z.string(),
          })
          .optional(),
        medium: z
          .object({
            url: z.string(),
          })
          .optional(),
      }),
    })
    .nullish(),
});

export type Artist = z.infer<typeof artistSchema>;

export const artistListSchema = z.array(artistSchema);

const venueSchema = z.object({
  order: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  googleMapsUrl: z.string().nullish(),
});

export type Venue = z.infer<typeof venueSchema>;

export const venueListSchema = z.array(venueSchema);

const eventSchema = z.object({
  id: z.number().transform((val) => val.toString()),
  name: z.string(),
  artists: artistListSchema,
  venue: venueSchema.nullish(),
  description: z.string().nullable(),
  startsAt: z.string().nullable(),
  endsAt: z.string().nullable(),
});

export type Event = z.infer<typeof eventSchema>;

export const eventListSchema = z.array(eventSchema);

export const radioCultScheduleSchema = z.object({
  schedules: z.array(
    z.object({
      title: z.string(),
      start: z.string(),
      end: z.string(),
    })
  ),
});
