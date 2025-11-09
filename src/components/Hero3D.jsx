import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to enhance depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 flex min-h-screen items-center">
        <div className="max-w-3xl text-left">
          <h1 className="mt-2 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(99,102,241,0.25)]">CogniCode</span>
            <span className="block text-white/90">The AI Vibe Coding Platform</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
            Build, secure, and operate AI systems with confidence. CogniCode unifies model ops, data pipelines, APIs, and integrations into one live control center—designed for visibility, governance, and developer flow.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-white text-black px-5 py-3 font-semibold shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:bg-neutral-100 transition-colors"
            >
              Explore Features
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-black/50 px-5 py-3 font-semibold text-white/90 hover:bg-black/70 backdrop-blur-md"
            >
              See The Console
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
