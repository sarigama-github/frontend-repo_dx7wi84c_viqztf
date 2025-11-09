import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to enhance depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black" />

      {/* Soft green vignette for cyber look */}
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.18),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 flex min-h-screen items-center">
        <div className="max-w-3xl text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs tracking-wide">
            Live • Interactive 3D
          </p>
          <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.35)]">CogniCode</span>
            <span className="block text-white/90">Build fearless AI, beautifully</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
            A cyber‑green workspace for model ops, governance, and developer flow. Move the droplet with your mouse — it reacts in real‑time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-400 text-black px-5 py-3 font-semibold shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:bg-emerald-300 transition-colors"
            >
              Explore Features
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-400/30 bg-black/50 px-5 py-3 font-semibold text-emerald-300 hover:bg-black/70 backdrop-blur-md"
            >
              See Developer Workflows
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
