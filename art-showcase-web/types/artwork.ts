export type ArtworkMedia = "illustration" | "3d" | "motion" | "typography" | "other";

export interface Artwork {
  id: string;
  slug: string;
  title: string;
  year: number;
  media: ArtworkMedia;
  tags: string[];
  description: string;
  thumbnailUrl: string;
  imageUrl: string;
  width: number;
  height: number;
  featured?: boolean;
  collectionId?: string;
}
