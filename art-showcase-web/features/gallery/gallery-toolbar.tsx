"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import type { ArtworkMedia } from "@/types/artwork";

type SortKey = "newest" | "oldest" | "title";

const mediaOptions: Array<{ value: ArtworkMedia | "all"; label: string }> = [
  { value: "all", label: "All media" },
  { value: "illustration", label: "Illustration" },
  { value: "3d", label: "3D" },
  { value: "motion", label: "Motion" },
  { value: "typography", label: "Typography" },
  { value: "other", label: "Other" }
];

const sortOptions: Array<{ value: SortKey; label: string }> = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "title", label: "Title A-Z" }
];

interface GalleryToolbarProps {
  media: ArtworkMedia | "all";
  sort: SortKey;
  query: string;
  onMediaChange: (v: ArtworkMedia | "all") => void;
  onSortChange: (v: SortKey) => void;
  onQueryChange: (v: string) => void;
}

export default function GalleryToolbar({
  media,
  sort,
  query,
  onMediaChange,
  onSortChange,
  onQueryChange
}: GalleryToolbarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Input
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search title or tags"
        className="sm:max-w-xs"
      />

      <div className="flex gap-3">
        <Select value={media} onValueChange={(v) => onMediaChange(v as ArtworkMedia | "all")}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Media" />
          </SelectTrigger>
          <SelectContent>
            {mediaOptions.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sort} onValueChange={(v) => onSortChange(v as SortKey)}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
