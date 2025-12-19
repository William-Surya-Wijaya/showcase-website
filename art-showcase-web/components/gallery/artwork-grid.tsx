import type { Artwork } from "@/types/artwork";
import ArtworkCard from "./artwork-card";

export default function ArtworkGrid({ artworks }: { artworks: Artwork[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {artworks.map((art) => (
        <ArtworkCard key={art.id} artwork={art} />
      ))}
    </div>
  );
}
