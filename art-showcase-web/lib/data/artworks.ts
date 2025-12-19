import type { Artwork } from "@/types/artwork";

const artworks: Artwork[] = [
  {
    id: "a1",
    slug: "neon-samurai",
    title: "Neon Samurai",
    year: 2025,
    media: "illustration",
    tags: ["cyberpunk", "character"],
    description: "A lone samurai under neon rain.",
    thumbnailUrl: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=2400&auto=format&fit=crop",
    width: 2400,
    height: 1600,
    featured: true
  },
  {
    id: "a2",
    slug: "silent-dunes",
    title: "Silent Dunes",
    year: 2024,
    media: "3d",
    tags: ["landscape", "desert"],
    description: "Soft dunes and long shadows.",
    thumbnailUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2400&auto=format&fit=crop",
    width: 2400,
    height: 1600
  }
];

export function getArtworks(): Artwork[] {
  return artworks;
}

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((a) => a.featured);
}
