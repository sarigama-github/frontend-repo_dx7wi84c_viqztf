import { Shield, Activity, FileSearch, ServerCog } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Automated Compliance Mapping',
    desc: 'Continuously aligns controls to NIST, HIPAA, GDPR, ISO 42001, and SOC 2 while tracking policy drift in real time.'
  },
  {
    icon: Activity,
    title: 'Real-Time Risk & Threats',
    desc: 'Behavioral analytics and anomaly detection with immediate guidance for misconfigurations and access anomalies.'
  },
  {
    icon: FileSearch,
    title: 'Evidence & Audit Readiness',
    desc: 'Integrates with logs, inventories, and tickets to generate audit-ready reports on demand.'
  },
  {
    icon: ServerCog,
    title: 'CI/CD + Access Governance',
    desc: 'Works with enterprise SSO and RBAC, centralizing telemetry for incident response and troubleshooting.'
  }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative w-full bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          End-to-end visibility for AI systems
        </h2>
        <p className="mt-3 text-white/80 max-w-2xl">
          Dashboards that connect models, data pipelines, APIs, and integrations so teams can ship securely—without slowing down.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/5 to-fuchsia-400/5 p-6 hover:border-white/20 transition-colors"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/20">
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
