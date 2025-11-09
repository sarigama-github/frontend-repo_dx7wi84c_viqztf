import Spline from '@splinetool/react-spline';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero3D() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Full-width cover background (Spline) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Depth overlays - do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_10%,rgba(34,197,94,0.18),transparent)]" />

      {/* RAM-like glowing structures (decorative, non-interactive) */}
      {!prefersReducedMotion && (
        <div className="pointer-events-none absolute inset-0">
          {/* Left cluster */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="absolute left-6 sm:left-12 top-[22%] rotate-[-6deg]"
          >
            <RamStrip glow="emerald" segments={6} />
            <div className="h-3" />
            <RamStrip glow="emerald" segments={5} thin />
          </motion.div>
          {/* Right cluster */}
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="absolute right-6 sm:right-16 bottom-[18%] rotate-[7deg]"
          >
            <RamStrip glow="lime" segments={7} />
            <div className="h-3" />
            <RamStrip glow="emerald" segments={4} thin />
          </motion.div>
        </div>
      )}

      {/* Floating green orbs for added depth */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 0.6, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            className="pointer-events-none absolute top-[12%] left-[8%] h-24 w-24 rounded-full"
            style={{
              background:
                'radial-gradient(closest-side, rgba(16,185,129,0.6), rgba(16,185,129,0.05))',
              filter: 'blur(1px)',
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 0.55, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.35, ease: 'easeOut' }}
            className="pointer-events-none absolute bottom-[18%] right-[10%] h-28 w-28 rounded-full"
            style={{
              background:
                'radial-gradient(closest-side, rgba(34,197,94,0.55), rgba(34,197,94,0.04))',
              filter: 'blur(1px)',
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 flex min-h-screen items-center">
        <div className="max-w-3xl text-left">
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-2 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-emerald-300 via-lime-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(16,185,129,0.35)]">
              Neon Systems
            </span>
            <span className="block text-white/90">Green-lit performance for builders and enterprises</span>
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl"
          >
            A black-on-green interface with a living, metallic grid. Subtle pulses and luminous accents echo high-performance memory and precision engineering.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-400 text-black px-5 py-3 font-semibold shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:bg-emerald-300 transition-colors"
            >
              Get started
            </a>
            <a
              href="#enterprise"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-400/40 bg-black/50 px-5 py-3 font-semibold text-emerald-200 hover:bg-black/70 backdrop-blur-md"
            >
              Enterprise options
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RamStrip({ glow = 'emerald', segments = 6, thin = false }) {
  const barHeight = thin ? 'h-3' : 'h-4';
  const barWidth = thin ? 'w-[240px]' : 'w-[300px]';
  const borderColor = glow === 'lime' ? 'border-lime-400/50' : 'border-emerald-400/50';
  const bgMetal = 'bg-gradient-to-b from-neutral-900 via-neutral-950 to-black';
  const rimGlow = glow === 'lime' ? 'shadow-[0_0_30px_rgba(163,230,53,0.25)]' : 'shadow-[0_0_30px_rgba(16,185,129,0.25)]';
  const ledOn = glow === 'lime' ? 'bg-lime-400/90' : 'bg-emerald-400/90';
  const ledOff = glow === 'lime' ? 'bg-lime-500/20' : 'bg-emerald-500/20';

  return (
    <div className={`pointer-events-none relative ${barWidth} ${barHeight} rounded-md border ${borderColor} ${bgMetal} ${rimGlow} overflow-hidden`}
      style={{ backdropFilter: 'blur(0.5px)' }}
    >
      {/* top copper contacts */}
      <div className="absolute -top-1 left-3 right-3 h-1 grid grid-cols-8 gap-1 opacity-70">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-full bg-yellow-500/40 rounded-sm" />
        ))}
      </div>
      {/* LED segments */}
      <div className="absolute inset-0 flex items-center gap-1 px-2">
        {Array.from({ length: segments }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.25, 1, 0.25] }}
            transition={{ duration: 2 + i * 0.12, repeat: Infinity }}
            className={`h-2 w-8 rounded-sm ${i % 2 === 0 ? ledOn : ledOff} shadow-[0_0_12px_currentColor]`}
          />)
        )}
      </div>
      {/* bottom cutouts */}
      <div className="absolute -bottom-1 left-6 right-6 h-1 grid grid-cols-6 gap-1 opacity-50">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-full bg-black/60 rounded-sm" />
        ))}
      </div>
    </div>
  );
}
