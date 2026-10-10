"use client";

import { useEffect, useState } from "react";

const W = 700;
const H = 120;

// Fixed starting data, so the server and client render the same HTML
const INITIAL_MASKED = [
  30, 34, 38, 45, 52, 50, 58, 64, 60, 68, 72, 70, 76, 82, 78, 84, 88, 85, 90,
  86, 92, 89, 94, 91,
];
const INITIAL_FLAGGED = [
  4, 5, 4, 6, 5, 7, 6, 5, 8, 6, 5, 7, 9, 6, 5, 6, 8, 7, 5, 6, 10, 7, 6, 5,
];

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

const yFor = (v: number) => 110 - v * 0.9;

function toPath(values: number[]) {
  const step = W / (values.length - 1);
  const pts = values.map((v, i) => ({ x: i * step, y: yFor(v) }));
  let d = `M${pts[0].x},${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const cx = (pts[i - 1].x + pts[i].x) / 2;
    const cy = (pts[i - 1].y + pts[i].y) / 2;
    d += ` Q${pts[i - 1].x},${pts[i - 1].y} ${cx},${cy}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L${last.x},${last.y}`;
}

const TIME_LABELS = ["00:00 UTC", "04:00", "08:00", "12:00", "16:00", "20:00"];

export default function ThroughputChart() {
  const [masked, setMasked] = useState(INITIAL_MASKED);
  const [flagged, setFlagged] = useState(INITIAL_FLAGGED);

  useEffect(() => {
    // TODO: replace this simulation with real data (polling, SSE or WebSocket)
    const id = setInterval(() => {
      setMasked((prev) => {
        const next = clamp(
          prev[prev.length - 1] + (Math.random() - 0.45) * 12,
          20,
          98,
        );
        return [...prev.slice(1), next];
      });
      setFlagged((prev) => {
        const next = clamp(
          prev[prev.length - 1] + (Math.random() - 0.5) * 4,
          1,
          15,
        );
        return [...prev.slice(1), next];
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const maskedLine = toPath(masked);
  const flaggedLine = toPath(flagged);
  const liveTop = (yFor(masked[masked.length - 1]) / H) * 100;
  const pagesPerMin = Math.round(masked[masked.length - 1] * 12);

  return (
    <div className="flex h-full min-w-0 flex-col justify-between rounded-xl bg-surface-container-lowest p-4 shadow-sm sm:p-space-lg">
      {/* Header */}
      <div className="mb-space-md flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            Real-Time Ingestion &amp; Redaction Throughput
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Avg redaction latency: 42ms per page across Nitro workers.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-space-md gap-y-1 font-label-sm text-label-sm text-on-surface-variant">
          <span className="flex items-center gap-1">
            <span className="h-3 w-3 rounded bg-secondary" /> PII Masked
          </span>
          <span className="flex items-center gap-1">
            <span className="h-3 w-3 rounded bg-primary" /> Flagged Policy
          </span>
        </div>
      </div>

      {/* Live stat */}
      <div className="mb-space-sm flex items-baseline gap-2">
        <span className="font-headline-lg text-headline-lg text-on-surface">
          {pagesPerMin.toLocaleString()}
        </span>
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          pages / min
        </span>
      </div>

      {/* Chart */}
      <div className="relative h-40 w-full sm:h-48">
        <svg
          className="h-full w-full overflow-visible"
          fill="none"
          preserveAspectRatio="none"
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label="Line chart of PII masked and flagged policy events over the last 24 hours"
        >
          <defs>
            <linearGradient id="tp-masked" x1="0" x2="0" y1="0" y2="1">
              <stop className="text-secondary" stopColor="currentColor" stopOpacity="0.25" offset="0%" />
              <stop className="text-secondary" stopColor="currentColor" stopOpacity="0" offset="100%" />
            </linearGradient>
            <linearGradient id="tp-flagged" x1="0" x2="0" y1="0" y2="1">
              <stop className="text-primary" stopColor="currentColor" stopOpacity="0.2" offset="0%" />
              <stop className="text-primary" stopColor="currentColor" stopOpacity="0" offset="100%" />
            </linearGradient>
          </defs>

          {[20, 60, 100].map((y) => (
            <line
              key={y}
              x1="0"
              x2={W}
              y1={y}
              y2={y}
              className="stroke-surface-container-high"
              strokeDasharray="4 4"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          <path d={`${maskedLine} L${W},${H} L0,${H} Z`} fill="url(#tp-masked)" />
          <path
            d={maskedLine}
            className="stroke-secondary"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />

          <path d={`${flaggedLine} L${W},${H} L0,${H} Z`} fill="url(#tp-flagged)" />
          <path
            d={flaggedLine}
            className="stroke-primary"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Live dot (HTML, so the stretched SVG doesn't squash it) */}
        <span
          className="absolute right-0 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-secondary bg-surface transition-[top] duration-700"
          style={{ top: `${liveTop}%` }}
        />
      </div>

      {/* Time axis */}
      <div className="mt-space-sm flex items-center justify-between pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
        {TIME_LABELS.map((t, i) => (
          <span key={t} className={i % 2 === 1 ? "hidden sm:inline" : ""}>
            {t}
          </span>
        ))}
        <span className="flex items-center gap-1 font-semibold text-secondary">
          <span className="h-2 w-2 animate-pulse rounded-full bg-secondary motion-reduce:animate-none" />
          Live
        </span>
      </div>
    </div>
  );
}