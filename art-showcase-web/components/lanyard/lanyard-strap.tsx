"use client";

import { MotionValue, useMotionValueEvent } from "framer-motion";
import { useMemo, useState } from "react";

interface LanyardStrapProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

function buildPath(x: number, y: number): string {
  const startX = 0;
  const startY = -180;
  const endX = x;
  const endY = y - 40;
  const midX = x * 0.2;
  const midY = -80 + y * 0.15;
  return `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
}

export default function LanyardStrap({ x, y }: LanyardStrapProps) {
  const [p, setP] = useState({ x: 0, y: 0 });

  useMotionValueEvent(x, "change", (vx) => setP((s) => ({ ...s, x: vx })));
  useMotionValueEvent(y, "change", (vy) => setP((s) => ({ ...s, y: vy })));

  const d = useMemo(() => buildPath(p.x, p.y), [p.x, p.y]);

  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2"
      viewBox="-300 -220 600 700"
      fill="none"
    >
      <path d={d} stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.25" />
      <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <circle cx="0" cy="-180" r="8" fill="currentColor" opacity="0.8" />
    </svg>
  );
}
