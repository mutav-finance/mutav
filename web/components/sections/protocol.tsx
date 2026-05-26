"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { User, Building2 } from "lucide-react";

// ── Visual 01: tenant → agency → mutav flow ───────────────────────────────────
const FLOW_NODES = [
  { label: "Tenant", icon: <User size={18} /> },
  { label: "Agency", icon: <Building2 size={18} /> },
  { label: "Mutav",  icon: null },
] as const;

function FeeDisplay() {
  return (
    <div className="w-full flex items-center justify-center gap-3">
      {FLOW_NODES.map(({ label, icon }, i) => (
        <div key={label} className="flex items-center gap-3">
          {i > 0 && (
            <div className="relative w-8 h-px bg-border overflow-hidden">
              <motion.div
                className="absolute inset-y-0 w-3 bg-accent"
                style={{ height: "2px", top: "-0.5px" }}
                animate={{ x: ["-150%", "350%"] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1.2,
                  delay: (i - 1) * 0.9,
                }}
              />
            </div>
          )}
          <div
            className={`border px-4 py-3 flex flex-col items-center gap-1.5 ${
              i === 2 ? "border-accent" : "border-border"
            }`}
          >
            {icon ? (
              <span className={i === 2 ? "text-accent" : "text-text-2"}>
                {icon}
              </span>
            ) : (
              <span className="font-mono text-xs uppercase tracking-[0.06em] font-bold text-accent">
                {label}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Visual 02: treasury ops bars ──────────────────────────────────────────────────
const OPS = ["MINT", "REDEEM", "YIELD", "DEFAULT"] as const;
const WIDTHS = [
  [72, 44, 85, 28],
  [38, 76, 58, 18],
  [88, 32, 70, 52],
  [55, 60, 90, 14],
];

function FundOps() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % WIDTHS.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center gap-4">
      {OPS.map((op, i) => (
        <div key={op} className="flex items-center gap-3">
          <p className="font-mono text-2xs uppercase tracking-[0.05em] text-text-3 w-14 shrink-0">
            {op}
          </p>
          <div className="flex-1 h-px bg-border relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-accent"
              style={{ height: "2px", top: "-0.5px" }}
              animate={{ width: `${WIDTHS[tick][i]}%` }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Visual 03: animated rising NAV chart ──────────────────────────────────────
const NAV_PTS: [number, number][] = [
  [0, 74], [18, 66], [36, 61], [52, 56], [68, 49],
  [84, 43], [100, 37], [118, 40], [136, 29], [154, 20],
  [170, 13], [186, 7], [200, 4],
];

const NAV_LINE = `M ${NAV_PTS.map(([x, y]) => `${x},${y}`).join(" L ")}`;
const NAV_FILL = `M 0,80 L ${NAV_PTS.map(([x, y]) => `${x},${y}`).join(" L ")} L 200,80 Z`;
const [endX, endY] = NAV_PTS[NAV_PTS.length - 1];

function NavChart() {
  return (
    <div className="w-full flex flex-col gap-2">
      <svg
        viewBox="0 0 200 80"
        className="w-full overflow-visible"
        style={{ height: "96px" }}
        aria-hidden
      >
        <defs>
          <linearGradient id="navFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* gradient fill */}
        <motion.path
          d={NAV_FILL}
          fill="url(#navFill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        />

        {/* rising line */}
        <motion.path
          d={NAV_LINE}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />

        {/* endpoint dot */}
        <motion.circle
          cx={endX}
          cy={endY}
          r={2.5}
          fill="var(--accent)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, duration: 0.25 }}
        />

        {/* pulse ring */}
        <motion.circle
          cx={endX}
          cy={endY}
          r={2.5}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: [0, 0.5, 0], scale: [1, 2.8, 3.2] }}
          transition={{
            delay: 2.7,
            duration: 1.6,
            repeat: Infinity,
            repeatDelay: 0.4,
          }}
        />
      </svg>

    </div>
  );
}

// ── Cards ─────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    number: "01",
    Visual: FeeDisplay,
    title: "The Guarantee\nLayer",
    body: "Tenants pay a monthly guarantee fee through partner agencies. 80% flows directly into the treasury.",
  },
  {
    number: "02",
    Visual: FundOps,
    title: "Treasury\nManagement",
    body: "Mints, redeems, Brazilian treasury yield, fees and defaults. All managed by Mutav.",
  },
  {
    number: "03",
    Visual: NavChart,
    title: "NAV grows,\nyou earn",
    body: "Capital is deployed into Mutav treasury. Returns compound directly into the NAV.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Protocol() {
  return (
    <section
      id="protocol"
      aria-label="How the protocol works"
      className="relative border-b border-border overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 flex items-center pointer-events-none" aria-hidden>
        <div className="w-full mx-auto max-w-[1440px] px-6 lg:px-8 translate-x-[10%]">
          <div className="relative w-[800px] h-[1050px]">
            <Image
              src="/img/5.jpg"
              alt=""
              fill
              className="object-cover grayscale opacity-15"
            />
            <div className="absolute inset-0 bg-canvas opacity-30 mix-blend-multiply" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, var(--canvas) 0%, transparent 25%, transparent 75%, var(--canvas) 100%)" }}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-8 py-24">

        {/* Section title */}
        <div className="mb-16 flex justify-center">
          <div className="max-w-2xl w-full text-center">
            <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-3 mb-3 flex items-center gap-3">
              <span className="block w-px h-3 bg-accent shrink-0" aria-hidden />
              PROTOCOL
            </p>
            <h2
              id="protocol-h2"
              className="font-display font-bold text-text text-3xl lg:text-5xl leading-[1.05] tracking-[-0.02em] uppercase"
            >
              Your only adversary is the{" "}
              <span className="text-accent">default rate</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {STEPS.map(({ number, Visual, title, body }, i) => (
            <motion.div
              key={number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 280, damping: 28 } }}
              className="border border-border bg-surface p-6 flex flex-col gap-6 items-center text-center"
            >
              <div className="min-h-[120px] w-full flex items-center justify-center">
                <Visual />
              </div>

              <div className="border-t border-border pt-5 w-full flex flex-col gap-2 items-center">
                <h3 className="font-display font-bold text-lg leading-[1.15] tracking-[-0.01em] uppercase text-text whitespace-pre-line">
                  {title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-text-2">
                  {body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

