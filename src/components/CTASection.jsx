export default function CTASection() {
  return (
    <section className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="rounded-3xl border border-emerald-400/25 bg-gradient-to-r from-emerald-900/30 via-black to-emerald-900/30 p-10 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Secure. Compliant. Lightning Fast.</h3>
          <p className="mt-3 text-emerald-100/80 max-w-2xl mx-auto">
            Deploy the CogniCode platform and get a unified view of posture, risks, and audit readiness—all with a neon-black vibe.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="#" className="rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-black shadow-[0_0_30px_#34d399] hover:shadow-[0_0_45px_#34d399] transition-shadow">Get a Demo</a>
            <a href="#" className="rounded-lg border border-emerald-400/50 bg-black/50 px-5 py-3 font-semibold text-emerald-200 hover:bg-black/70 backdrop-blur-md">Read Docs</a>
          </div>
        </div>
      </div>
    </section>
  );
}
