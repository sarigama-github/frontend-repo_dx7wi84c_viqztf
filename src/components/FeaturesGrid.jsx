import { Shield, Activity, FileSearch, ServerCog, Layers, Lock, Cpu, FileStack } from 'lucide-react';

const features = [
  { icon: Layers, title: 'Indexed Codebase Integrations', desc: 'Connect private repos for context-aware engineering with semantic search and embeddings.' },
  { icon: FileStack, title: 'Custom File Management', desc: 'Onboard documents and architecture files per project to accelerate ramp-up.' },
  { icon: Lock, title: 'Enterprise SSO (SAML)', desc: 'Integrate with identity providers to enforce role-based access controls.' },
  { icon: Shield, title: 'Zero Data Retention', desc: 'Session data remains ephemeral for maximum privacy and compliance.' },
  { icon: Activity, title: 'Real-Time Incident Response', desc: 'Detect, communicate, and resolve incidents with integrated runbooks.' },
  { icon: Cpu, title: 'Developer Productivity Tools', desc: 'Team onboarding, incident management, cost tracking, and automation.' },
  { icon: FileSearch, title: 'Audit & Evidence', desc: 'Generate audit-ready evidence from logs, inventories, and tickets.' },
  { icon: ServerCog, title: 'Custom AI Credits', desc: 'Monthly credits with transparent pay-as-you-go overage options.' },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative w-full bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-200 via-sky-200 to-white bg-clip-text text-transparent">
          Enterprise capabilities, built-in
        </h2>
        <p className="mt-3 text-white/80 max-w-2xl">
          A cohesive purple/blue palette, consistent across every section. Performance-first animations and thoughtful depth cues reinforce the 3D vibe.
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
