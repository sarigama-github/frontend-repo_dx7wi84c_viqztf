import { motion, useReducedMotion } from 'framer-motion';
import { Plug, Coins, Layers, FileText, Lock, Shield, User, Wrench, Sparkles } from 'lucide-react';

const items = [
  { icon: Plug, title: 'Bring Your Own LLM/API', desc: 'Allow enterprise clients to integrate their chosen AI models or APIs for maximum flexibility and compliance.' },
  { icon: Coins, title: 'Custom AI Credits', desc: 'Offer monthly credits tailored to the client’s usage scale, with transparent pay-as-you-go overage options.' },
  { icon: Layers, title: 'Indexed Codebase Integrations', desc: 'Enable seamless connection to company-specific codebases for advanced, context-aware engineering support.' },
  { icon: FileText, title: 'Custom File Management', desc: 'Support onboarding documents and architecture files per project to improve developer onboarding.' },
  { icon: Lock, title: 'Enterprise SSO (SAML)', desc: 'Integrate with corporate identity management systems for secure, role-based access control.' },
  { icon: Shield, title: 'Zero Data Retention', desc: 'Guarantee that all session data is ephemeral and never stored, ensuring top-tier privacy.' },
  { icon: User, title: 'Dedicated Account Manager', desc: 'Provide personalized enterprise support and rapid issue resolution.' },
  { icon: Wrench, title: 'Developer Productivity Tools', desc: 'Features for team onboarding, incident management, cost tracking, and standardized workflow automation.' },
];

export default function ShowcaseConsole() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="enterprise" className="relative w-full bg-black py-24 overflow-hidden">
      {/* subtle 3D grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_10%,rgba(59,130,246,0.12),transparent),radial-gradient(40%_40%_at_90%_80%,rgba(139,92,246,0.12),transparent)]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-200 via-sky-200 to-white bg-clip-text text-transparent">Enterprise options</h2>
            <p className="mt-2 text-white/80 max-w-3xl">Security, flexibility, and control — with motion-polished UI that feels alive.</p>
          </div>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-2 rounded-lg border border-violet-400/30 bg-black/40 px-3 py-1.5 text-violet-200"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm">Now with advanced transitions</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18, rotateX: 6 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : i * 0.04 }}
              className="relative rounded-2xl border border-violet-400/25 bg-gradient-to-br from-sky-500/10 to-violet-700/10 p-5 shadow-[0_0_40px_rgba(99,102,241,0.14)] hover:border-violet-400/35 transition-all"
              whileHover={prefersReducedMotion ? {} : { y: -3, rotateY: 2 }}
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-white/80">{desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(180px_180px_at_20%_0%,rgba(59,130,246,0.12),transparent),radial-gradient(180px_180px_at_95%_90%,rgba(139,92,246,0.12),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
