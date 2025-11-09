import { Play, ShieldAlert, BarChart3, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ShowcaseConsole() {
  return (
    <section id="showcase" className="relative w-full bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Cognitive Risk Console</h2>
            <p className="mt-3 text-emerald-100/80">
              Real-time behavioral analytics, anomaly detection, and guided remediation. Batch tasks and keep budgets in check with usage telemetry.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-200 ring-1 ring-emerald-400/30 px-3 py-1 text-sm"><Play className="h-4 w-4"/>Automated Remediation</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-200 ring-1 ring-emerald-400/30 px-3 py-1 text-sm"><ShieldAlert className="h-4 w-4"/>Threat Detection</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-200 ring-1 ring-emerald-400/30 px-3 py-1 text-sm"><BarChart3 className="h-4 w-4"/>Risk Scoring</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-black to-emerald-950/20 p-4">
              <div className="flex items-center gap-2 text-emerald-300/80 text-sm mb-3">
                <Terminal className="h-4 w-4" />
                live-scan: prod-cluster
              </div>
              <div className="grid grid-cols-3 gap-4">
                {["Models", "Pipelines", "APIs"].map((label, idx) => (
                  <div key={label} className="rounded-xl border border-emerald-400/20 bg-black/60 p-4">
                    <div className="text-emerald-300 text-sm">{label}</div>
                    <div className="mt-1 text-2xl font-bold text-white">{[12, 28, 17][idx]}</div>
                    <div className="mt-2 h-1.5 rounded bg-emerald-400/20">
                      <div className="h-1.5 rounded bg-emerald-400" style={{ width: `${[72, 46, 88][idx]}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-emerald-400/20 bg-black/60 p-4">
                  <div className="text-emerald-300 text-sm">Active Alerts</div>
                  <ul className="mt-2 space-y-2 text-emerald-100/80 text-sm">
                    <li>• SOC2 policy drift detected in model-serving role</li>
                    <li>• Unused API key with write scope</li>
                    <li>• GDPR data export job running over SLA</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-emerald-400/20 bg-black/60 p-4">
                  <div className="text-emerald-300 text-sm">Suggested Remediations</div>
                  <ul className="mt-2 space-y-2 text-emerald-100/80 text-sm">
                    <li>• Restrict service account to least-privilege</li>
                    <li>• Rotate API credentials and enable IP allowlist</li>
                    <li>• Split export job and enable checkpointing</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
