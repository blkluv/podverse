/**
 * This file contains type definitions shared between the different packages.
 */

/** Represents metadata for a podcast. */
export type Podcast = {
  slug: string;
  title: string;
  description?: string;
  url?: string;
  rssUrl?: string;
  imageUrl?: string;
  corpusId?: string;
  episodes?: Episode[];
};

/** Represents metadata for a single episode. */
export type Episode = {
  title: string;
  description?: string;
  url?: string;
  pubDate?: string;
  audioUrl?: string;
  transcriptUrl?: string;
};
