import Link from "next/link";
import { getFeaturedArtworks } from "@/lib/data/artworks";
import ArtworkGrid from "@/components/gallery/artwork-grid";
import LanyardSection from "@/components/lanyard/lanyard-section";

const badgeData = {
  name: "Your Friend",
  role: "Digital Artist",
  avatarUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop",
  backText: "Focused on cyberpunk illustration, 3D worlds, and experimental typography."
};


export default function HomePage() {
  const featured = getFeaturedArtworks();

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Digital Art Showcase
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Selected works, collections, and prints.
        </p>
        <div className="flex gap-3">
          <Link
            href="/gallery"
            className="rounded-xl bg-foreground px-4 py-2 text-background"
          >
            Explore Gallery
          </Link>
          <Link
            href="/about"
            className="rounded-xl border px-4 py-2"
          >
            About the Artist
          </Link>
          <LanyardSection data={badgeData} />
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured</h2>
          <Link href="/gallery" className="text-sm opacity-70 hover:opacity-100">
            View all
          </Link>
        </div>
        <ArtworkGrid artworks={featured} />
      </section>
    </div>
  );
}
