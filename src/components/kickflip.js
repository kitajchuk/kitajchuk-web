"use client";

import Canvas from "@/components/canvas";
import { useDarkMode } from "@/components/hooks";

export default function Kickflip() {
  useDarkMode();

  return (
    <Canvas source="retro" />
  );
}
