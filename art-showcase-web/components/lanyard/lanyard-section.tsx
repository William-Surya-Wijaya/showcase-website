"use client";

import { useState } from "react";
import { motion, useSpring } from "framer-motion";
import LanyardBadge, { LanyardBadgeData } from "./lanyard-badge";
import LanyardStrap from "./lanyard-strap";

interface LanyardSectionProps {
  data: LanyardBadgeData;
  title?: string;
}

export default function LanyardSection({ data, title }: LanyardSectionProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [flipped, setFlipped] = useState(false);

  const strapX = useSpring(pos.x, { stiffness: 200, damping: 20 });
  const strapY = useSpring(pos.y, { stiffness: 200, damping: 20 });

  return (
    <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-3xl border bg-gradient-to-b from-background to-black/5">
      {title ? (
        <div className="absolute left-6 top-6 text-sm font-medium opacity-70">
          {title}
        </div>
      ) : null}

      <LanyardStrap x={strapX} y={strapY} />

      <motion.div
        onClick={() => setFlipped((v) => !v)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{ perspective: 1200, transformStyle: "preserve-3d" }}
        className="cursor-grab"
      >
        <LanyardBadge data={data} onPositionChange={(x, y) => setPos({ x, y })} />
      </motion.div>
    </section>
  );
}
