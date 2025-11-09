import { Plug, Coins, Layers, FileText, Lock, Shield, User, Wrench } from 'lucide-react';

const features = [
  { icon: Plug, title: 'Bring Your Own LLM/API', desc: 'Integrate your preferred AI models or third‑party APIs for maximum flexibility and compliance.' },
  { icon: Coins, title: 'Custom AI Credits', desc: 'Monthly credits tailored to your usage scale with transparent pay‑as‑you‑go overage options.' },
  { icon: Layers, title: 'Indexed Codebase Integrations', desc: 'Connect company repos for context‑aware engineering with embeddings and semantic search.' },
  { icon: FileText, title: 'Custom File Management', desc: 'Onboard documents and architecture files per project to accelerate developer ramp‑up.' },
  { icon: Lock, title: 'Enterprise SSO (SAML)', desc: 'Integrate with corporate identity providers to enforce secure, role‑based access control.' },
  { icon: Shield, title: 'Zero Data Retention', desc: 'All session data is ephemeral and never stored for top‑tier privacy guarantees.' },
  { icon: User, title: 'Dedicated Account Manager', desc: 'Personalized enterprise support and rapid issue resolution with a single point of contact.' },
  { icon: Wrench, title: 'Developer Productivity Tools', desc: 'Onboarding, incident workflows, cost tracking, and standardized automation out of the box.' },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative w-full bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-200 via-sky-200 to-white bg-clip-text text-transparent">
          Enterprise capabilities, built-in
        </h2>
        <p className="mt-3 text-white/80 max-w-2xl">
          A cohesive purple/blue palette with subtle depth glows. Motion is performance‑aware and respectful of reduced‑motion preferences.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-violet-400/20 bg-gradient-to-br from-sky-500/10 to-violet-600/10 p-6 hover:border-violet-400/30 transition-colors shadow-[0_0_30px_rgba(99,102,241,0.12)]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/80">{desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
