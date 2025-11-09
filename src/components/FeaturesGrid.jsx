import { motion, useReducedMotion } from 'framer-motion';
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
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="features" className="relative w-full bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-200 via-sky-200 to-white bg-clip-text text-transparent">
          Enterprise features with 3D motion
        </h2>
        <p className="mt-3 text-white/80 max-w-2xl">
          Scroll to reveal: cards glide in with depth, subtle tilt, and neon glows. Motion respects reduced‑motion preferences.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24, rotateX: 8 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : i * 0.05 }}
              className="group relative rounded-2xl border border-violet-400/20 bg-gradient-to-br from-sky-500/10 to-violet-600/10 p-6 transition-all shadow-[0_0_30px_rgba(99,102,241,0.12)] hover:border-violet-400/30 hover:shadow-[0_0_45px_rgba(99,102,241,0.25)]"
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
              whileHover={prefersReducedMotion ? {} : { y: -2, rotateX: 2, rotateY: -2 }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/80">{desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(200px_200px_at_20%_0%,rgba(59,130,246,0.12),transparent),radial-gradient(200px_200px_at_90%_90%,rgba(139,92,246,0.12),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
