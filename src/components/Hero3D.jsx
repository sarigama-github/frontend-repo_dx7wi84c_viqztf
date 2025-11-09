import Spline from '@splinetool/react-spline';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero3D() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays to enhance depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black" />
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_10%,rgba(59,130,246,0.20),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 flex min-h-screen items-center">
        <div className="max-w-3xl text-left">
          {/* Removed caption pill per request */}
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-2 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-violet-300 via-sky-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(99,102,241,0.35)]">CogniCode</span>
            <span className="block text-white/90">Futuristic IDE for agentic engineering</span>
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl"
          >
            A bold purple/blue workspace for model ops, safety, and developer flow. Move the scene with your mouse — it reacts in real‑time.
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
