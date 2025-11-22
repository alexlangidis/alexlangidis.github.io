"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function GridBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Grid Pattern - Light Mode (Black) */}
      <div
        className="absolute inset-0 dark:hidden bg-[linear-gradient(to_right,#00000025_1px,transparent_1px),linear-gradient(to_bottom,#00000025_1px,transparent_1px)] bg-size-[24px_24px]"
        style={{
          maskImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      />

      {/* Grid Pattern - Dark Mode (Yellowgreen) */}
      <div
        className="absolute inset-0 hidden dark:block bg-[linear-gradient(to_right,#9acd3225_1px,transparent_1px),linear-gradient(to_bottom,#9acd3225_1px,transparent_1px)] bg-size-[24px_24px]"
        style={{
          maskImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      />

      {/* Base Grid - Light Mode (Black) */}
      <div className="absolute inset-0 dark:hidden bg-[linear-gradient(to_right,#9acd3210_1px,transparent_1px),linear-gradient(to_bottom,#9acd3210_1px,transparent_1px)] bg-size-[24px_24px]" />

      {/* Base Grid - Dark Mode (Yellowgreen) */}
      <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(to_right,#9acd3210_1px,transparent_1px),linear-gradient(to_bottom,#9acd3210_1px,transparent_1px)] bg-size-[24px_24px]" />
    </div>
  );
}
