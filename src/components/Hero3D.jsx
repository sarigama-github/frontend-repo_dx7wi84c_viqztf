import Spline from '@splinetool/react-spline';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero3D() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* New Hero 3D Animation (Spline) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Depth overlays - do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_10%,rgba(59,130,246,0.20),transparent)]" />

      {/* Floating neon orbs for added 3D feel (lightweight, CSS 3D) */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 0.7, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            className="pointer-events-none absolute top-[15%] left-[8%] h-24 w-24 rounded-full"
            style={{
              background:
                'radial-gradient(closest-side, rgba(99,102,241,0.65), rgba(99,102,241,0.05))',
              filter: 'blur(1px)',
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 0.6, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.35, ease: 'easeOut' }}
            className="pointer-events-none absolute bottom-[18%] right-[10%] h-28 w-28 rounded-full"
            style={{
              background:
                'radial-gradient(closest-side, rgba(56,189,248,0.6), rgba(56,189,248,0.04))',
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
            <span className="bg-gradient-to-r from-violet-300 via-cyan-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(99,102,241,0.35)]">
              Neon Systems
            </span>
            <span className="block text-white/90">Futuristic engine for builders and enterprises</span>
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl"
          >
            Dive into a black‑on‑neon interface powered by smooth motion and 3D. The hero animates in real time while the UI glows with cyberpunk energy.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-violet-400 text-black px-5 py-3 font-semibold shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:bg-violet-300 transition-colors"
            >
              Get started
            </a>
            <a
              href="#enterprise"
              className="inline-flex items-center justify-center rounded-lg border border-violet-400/40 bg-black/50 px-5 py-3 font-semibold text-violet-200 hover:bg-black/70 backdrop-blur-md"
            >
              Enterprise options
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
