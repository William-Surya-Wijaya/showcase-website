"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

export interface LanyardBadgeData {
  name: string;
  role: string;
  avatarUrl: string;
  backText: string;
}

interface LanyardBadgeProps {
  data: LanyardBadgeData;
  onPositionChange?: (x: number, y: number) => void;
}

export default function LanyardBadge({ data, onPositionChange }: LanyardBadgeProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  const rotate = useTransform([sx, sy], ([lx, ly]) => lx * 0.06 + ly * -0.03);
  const tilt = useTransform(sy, [-120, 120], [8, -8]);

  const handleUpdate = useMemo(() => {
    if (!onPositionChange) return undefined;
    return () => onPositionChange(x.get(), y.get());
  }, [onPositionChange, x, y]);

  return (
    <motion.div
      drag
      dragElastic={0.35}
      dragMomentum={false}
      style={{ x: sx, y: sy, rotateZ: rotate, rotateX: tilt }}
      whileDrag={{ scale: 1.02, cursor: "grabbing" }}
      onUpdate={handleUpdate}
      onDragEnd={() => {
        x.set(0);
        y.set(0);
      }}
      className="relative h-[320px] w-[220px] select-none"
    >
      <div className="relative h-full w-full rounded-2xl bg-background shadow-xl [transform-style:preserve-3d]">
        <div className="absolute inset-0 rounded-2xl border bg-background p-4 [backface-visibility:hidden]">
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-24 w-24 overflow-hidden rounded-full">
              <Image src={data.avatarUrl} alt={data.name} fill className="object-cover" />
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">{data.name}</div>
              <div className="text-sm text-muted-foreground">{data.role}</div>
            </div>
            <div className="mt-auto w-full rounded-xl border px-3 py-2 text-center text-xs text-muted-foreground">
              Tap to flip
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl border bg-background p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
            <div className="text-sm text-muted-foreground">About</div>
            <div className="text-sm leading-relaxed">{data.backText}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
