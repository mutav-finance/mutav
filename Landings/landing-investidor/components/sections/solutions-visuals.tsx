"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Lock, LockOpen } from "lucide-react";

// ── useCycle: remounts children every `ms` to replay animations ───────────────
function useCycle(ms: number) {
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), ms);
    return () => clearInterval(id);
  }, [ms]);
  return cycle;
}

// ── Visual 01: blockchain blocks → lock opens (loops) ────────────────────────
const BLOCK_COUNT = 3;

export function OnChainVisual() {
  const cycle = useCycle(3800);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(false);
    const t = setTimeout(() => setUnlocked(true), BLOCK_COUNT * 280 + 600);
    return () => clearTimeout(t);
  }, [cycle]);

  return (
    <div className="w-full h-full flex items-center justify-center gap-2">
      {Array.from({ length: BLOCK_COUNT }).map((_, i) => (
        <div key={`${cycle}-${i}`} className="flex items-center gap-2">
          <motion.div
            className="border border-border bg-surface-2"
            style={{ width: 40, height: 40 }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.28 + 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
          {i < BLOCK_COUNT - 1 && (
            <motion.div
              className="bg-border"
              style={{ width: 22, height: 1 }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.28 + 0.38, duration: 0.2 }}
            />
          )}
        </div>
      ))}

      <motion.div
        key={`conn-${cycle}`}
        className="bg-border"
        style={{ width: 22, height: 1 }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: BLOCK_COUNT * 0.28 + 0.1, duration: 0.2 }}
      />

      <motion.div
        key={`lock-${cycle}`}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: BLOCK_COUNT * 0.28 + 0.25, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
        style={{ width: 40, height: 40 }}
      >
        <AnimatePresence mode="wait">
          {unlocked ? (
            <motion.div
              key="open"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 flex items-center justify-center text-accent"
            >
              <LockOpen size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="closed"
              exit={{ opacity: 0, y: 4 }}
              className="absolute inset-0 flex items-center justify-center text-text-3"
            >
              <Lock size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// ── Visual 02: steady yield chart + counter (loops) ───────────────────────────
const YIELD_PTS: [number, number][] = [
  [0, 72], [28, 66], [56, 60], [80, 55], [104, 50],
  [128, 44], [152, 38], [176, 32], [200, 26],
];
const YIELD_LINE = `M ${YIELD_PTS.map(([x, y]) => `${x},${y}`).join(" L ")}`;
const YIELD_FILL = `M 0,80 L ${YIELD_PTS.map(([x, y]) => `${x},${y}`).join(" L ")} L 200,80 Z`;

export function YieldVisual() {
  const cycle = useCycle(4200);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    setPct(0);
    const start = Date.now();
    const duration = 2600;
    const target = 8.24;
    let raf: number;
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setPct(parseFloat((target * progress).toFixed(2)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cycle]);

  return (
    <div className="w-full h-full flex flex-col justify-center gap-3">
      <p className="font-mono text-2xs uppercase tracking-[0.05em] text-text-3 text-center">Rental yield</p>
      <svg key={cycle} viewBox="0 0 200 80" className="w-full overflow-visible" style={{ height: "88px" }} aria-hidden>
        <defs>
          <linearGradient id={`yf-${cycle}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={YIELD_FILL}
          fill={`url(#yf-${cycle})`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
        <motion.path
          d={YIELD_LINE}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
      </svg>
      <p className="font-mono text-base font-bold tracking-widest text-center" style={{ color: "var(--accent)" }}>
        +{pct.toFixed(2)}%
      </p>
    </div>
  );
}

// ── Visual 03: contract lines → signed (loops) ────────────────────────────────
const CONTRACT_LINES = [100, 80, 95, 65, 85, 55];

export function LegalVisual() {
  const cycle = useCycle(3600);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    setSigned(false);
    const t = setTimeout(() => setSigned(true), CONTRACT_LINES.length * 150 + 400);
    return () => clearTimeout(t);
  }, [cycle]);

  return (
    <div className="w-full h-full flex flex-col justify-center gap-3 px-2">
      <div className="flex flex-col gap-2">
        {CONTRACT_LINES.map((w, i) => (
          <motion.div
            key={`${cycle}-${i}`}
            className="bg-border rounded-full"
            style={{ height: 2 }}
            initial={{ width: 0 }}
            animate={{ width: `${w}%` }}
            transition={{ delay: i * 0.15 + 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {signed && (
          <motion.div
            key={`signed-${cycle}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 pt-1"
          >
            <span className="font-mono text-sm font-bold text-accent tracking-[0.06em]">
              ✓ SIGNED
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────
const VISUALS = [OnChainVisual, YieldVisual, LegalVisual];

export function SolutionVisual({ index }: { index: number }) {
  const V = VISUALS[index];
  return V ? <V /> : null;
}
