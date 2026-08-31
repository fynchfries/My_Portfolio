"use client";

import { useEffect, useRef } from "react";

type HalftoneImageProps = {
  src: string;
  alt: string;
  resolution?: number;
  className?: string;
};

export default function HalftoneImage({
  src,
  alt,
  resolution = 64,
  className,
}: HalftoneImageProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const luminanceRef = useRef<{ data: Float32Array; cols: number; rows: number } | null>(null);

  function getInkColor() {
    const v = getComputedStyle(document.documentElement).getPropertyValue("--text");
    return v.trim() || "#ededed";
  }

  function draw() {
    const canvas = canvasRef.current;
    const lum = luminanceRef.current;
    if (!canvas || !lum) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = getInkColor();

    const cellW = rect.width / lum.cols;
    const cellH = rect.height / lum.rows;
    const maxRadius = Math.max(cellW, cellH) * 0.62;

    for (let y = 0; y < lum.rows; y++) {
      for (let x = 0; x < lum.cols; x++) {
        const brightness = lum.data[y * lum.cols + x];
        const darkness = 1 - brightness;
        const radius = darkness * maxRadius;
        if (radius < 0.4) continue;
        const cx = x * cellW + cellW / 2;
        const cy = y * cellH + cellH / 2;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const cols = resolution;
      const rows = Math.round(resolution * (img.height / img.width));

      const sampleCanvas = document.createElement("canvas");
      sampleCanvas.width = cols;
      sampleCanvas.height = rows;
      const sctx = sampleCanvas.getContext("2d");
      if (!sctx) return;
      sctx.drawImage(img, 0, 0, cols, rows);

      const { data } = sctx.getImageData(0, 0, cols, rows);
      const lumData = new Float32Array(cols * rows);
      for (let i = 0; i < cols * rows; i++) {
        const r = data[i * 4];
        const g = data[i * 4 + 1];
        const b = data[i * 4 + 2];
        lumData[i] = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      }

      luminanceRef.current = { data: lumData, cols, rows };
      draw();
    };
    img.src = src;

    function handleResize() {
      draw();
    }
    function handleThemeChange() {
      draw();
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("themechange", handleThemeChange);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("themechange", handleThemeChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, resolution]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={alt}
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}