"use client";

import { useMemo, useState } from "react";
import ArtworkGrid from "@/components/gallery/artwork-grid";
import { getArtworks } from "@/lib/data/artworks";
import type { Artwork, ArtworkMedia } from "@/types/artwork";
import GalleryToolbar from "./gallery-toolbar";

type SortKey = "newest" | "oldest" | "title";

function sortArtworks(items: Artwork[], sort: SortKey): Artwork[] {
  const arr = [...items];
  if (sort === "newest") return arr.sort((a, b) => b.year - a.year);
  if (sort === "oldest") return arr.sort((a, b) => a.year - b.year);
  return arr.sort((a, b) => a.title.localeCompare(b.title));
}

function filterArtworks(items: Artwork[], media: ArtworkMedia | "all", q: string): Artwork[] {
  const qn = q.trim().toLowerCase();
  return items.filter((a) => {
    const mediaOk = media === "all" ? true : a.media === media;
    const textOk = !qn
      ? true
      : a.title.toLowerCase().includes(qn) ||
        a.tags.some((t) => t.toLowerCase().includes(qn));
    return mediaOk && textOk;
  });
}

export default function GalleryView() {
  const all = useMemo(() => getArtworks(), []);
  const [media, setMedia] = useState<ArtworkMedia | "all">("all");
  const [sort, setSort] = useState<SortKey>("newest");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const f = filterArtworks(all, media, query);
    return sortArtworks(f, sort);
  }, [all, media, query, sort]);

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Gallery</h1>
        <p className="text-sm text-muted-foreground">
          Browse all works. Filter by medium or search by tags.
        </p>
      </div>

      <GalleryToolbar
        media={media}
        sort={sort}
        query={query}
        onMediaChange={setMedia}
        onSortChange={setSort}
        onQueryChange={setQuery}
      />

      <ArtworkGrid artworks={filtered} />
    </div>
  );
}
