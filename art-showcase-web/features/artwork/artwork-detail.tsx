"use client";

import Image from "next/image";
import type { Artwork } from "@/types/artwork";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useMemo } from "react";

function buildWatermark(title: string): string {
  return `${title} • © Artist`;
}

export default function ArtworkDetail({ artwork }: { artwork: Artwork }) {
  const watermark = useMemo(() => buildWatermark(artwork.title), [artwork.title]);

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{artwork.title}</h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>{artwork.year}</span>
          <span>•</span>
          <span className="capitalize">{artwork.media}</span>
        </div>
      </section>

      <section
        className="relative overflow-hidden rounded-2xl border bg-black/5"
        onContextMenu={(e) => e.preventDefault()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="relative aspect-[4/3] w-full"
        >
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />

          <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -25deg,
                  transparent 0px,
                  transparent 140px,
                  rgba(255,255,255,0.9) 140px,
                  rgba(255,255,255,0.9) 160px
                )`
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold tracking-wide">
              {watermark}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="space-y-3">
        <p className="max-w-3xl text-base leading-relaxed text-foreground/90">
          {artwork.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {artwork.tags.map((t) => (
            <Badge key={t} variant="secondary" className="rounded-xl">
              #{t}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
