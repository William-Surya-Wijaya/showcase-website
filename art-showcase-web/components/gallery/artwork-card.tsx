import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/types/artwork";
import { Card } from "@/components/ui/card";

export default function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <Link href={`/artwork/${artwork.slug}`}>
      <Card className="group overflow-hidden rounded-2xl">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={artwork.thumbnailUrl}
            alt={artwork.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 33vw"
            placeholder="blur"
            blurDataURL={`${artwork.thumbnailUrl}&w=24&q=10`}
          />
        </div>
        <div className="space-y-1 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{artwork.title}</h3>
            <span className="text-xs opacity-60">{artwork.year}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {artwork.description}
          </p>
        </div>
      </Card>
    </Link>
  );
}
