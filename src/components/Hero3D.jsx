import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
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
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-violet-200 text-xs tracking-wide">
            Live • Interactive 3D
          </p>
          <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-violet-300 via-sky-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(99,102,241,0.35)]">CogniCode</span>
            <span className="block text-white/90">Futuristic IDE for agentic engineering</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
            A bold purple/blue workspace for model ops, safety, and developer flow. Move the scene with your mouse — it reacts in real‑time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-violet-400 text-black px-5 py-3 font-semibold shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:bg-violet-300 transition-colors"
            >
              Explore Features
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center rounded-lg border border-violet-400/40 bg-black/50 px-5 py-3 font-semibold text-violet-200 hover:bg-black/70 backdrop-blur-md"
            >
              See Developer Workflows
            </a>
          </div>
        </div>

        {/* Subtle 3D-ish floating chips for depth */}
        <div className="hidden lg:block relative ml-auto">
          <div className="pointer-events-none perspective-[1200px]">
            <div className="absolute right-8 top-20 rotate-6 [transform:rotateX(12deg)_rotateY(-18deg)] select-none">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-violet-600/10 px-5 py-4 shadow-[0_20px_60px_-20px_rgba(59,130,246,0.35)] backdrop-blur-md">
                <div className="text-xs text-sky-200/90">Latency (p95)</div>
                <div className="text-3xl font-bold text-white mt-1">142ms</div>
              </div>
            </div>
            <div className="absolute right-0 bottom-20 -rotate-3 [transform:rotateX(10deg)_rotateY(14deg)] select-none">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/10 to-sky-500/10 px-5 py-4 shadow-[0_20px_60px_-20px_rgba(139,92,246,0.35)] backdrop-blur-md">
                <div className="text-xs text-violet-200/90">Token usage</div>
                <div className="text-3xl font-bold text-white mt-1">-23%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
