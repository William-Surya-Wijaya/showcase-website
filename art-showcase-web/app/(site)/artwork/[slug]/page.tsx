import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArtworkDetail from "@/features/artwork/artwork-detail";
import { getArtworkBySlug } from "@/lib/data/artworks";

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const art = getArtworkBySlug(params.slug);
  if (!art) return { title: "Artwork not found" };

  const title = `${art.title} (${art.year})`;
  const description = art.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: art.imageUrl }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [art.imageUrl]
    }
  };
}

export default function ArtworkPage({ params }: PageProps) {
  const art = getArtworkBySlug(params.slug);
  if (!art) notFound();
  return <ArtworkDetail artwork={art} />;
}
