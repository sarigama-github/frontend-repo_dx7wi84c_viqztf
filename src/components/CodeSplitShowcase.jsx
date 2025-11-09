import { motion, useReducedMotion } from 'framer-motion';

export default function CodeSplitShowcase() {
  const prefersReducedMotion = useReducedMotion();

  const appJsSnippet = `// Orchestrate agents with clarity\nimport React from 'react';\n\nexport default function AgentPlan() {\n  return (\n    <section>\n      <h2>Agent graph</h2>\n      {/* nodes, tools, evaluators */}\n    </section>\n  );\n}`;

  const pythonSnippet = `# generate_sql.py\nfrom datetime import datetime\n\n# Generate SQL that is production-ready\ndef generate_sql(timestamps):\n    print(\"\n-- Create a logs table\nCREATE TABLE IF NOT EXISTS logs (\n  id SERIAL PRIMARY KEY,\n  timestamp TIMESTAMP(6) NOT NULL,\n  message TEXT,\n  severity VARCHAR(10) DEFAULT 'INFO'\n);\n\")\n\n    print(\"-- Insert sample data\")\n    for i, ts in enumerate(timestamps):\n        print(f\"INSERT INTO logs (timestamp, message) VALUES ('{ts}', 'Sample log message {i+1}');\")\n\n    print(\"\n-- Query logs from a specific date\nSELECT * FROM logs\nWHERE DATE(timestamp) = '2025-06-18'\nORDER BY timestamp DESC;\n\")\n\n    print(\"\n-- Find time gaps between consecutive logs\nSELECT\n  l1.timestamp as earlier_time,\n  l2.timestamp as later_time,\n  l2.timestamp - l1.timestamp as time_gap\nFROM logs l1\nJOIN logs l2 ON l2.id = l1.id + 1\nORDER BY l1.timestamp;\n\")\n\n# Example usage\n# generate_sql(timestamps)`;

  return (
    <section className="relative w-full bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-10">
          <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-200 via-sky-200 to-white bg-clip-text text-transparent">Built for builders</h3>
          <p className="mt-2 text-white/80 max-w-3xl">A concise, developer-first preview. Top: the agent plan. Bottom: production-grade SQL generation. Minimal chrome, maximum clarity.</p>
        </div>

        {/* Top: Agent plan (renamed) */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-2xl border border-violet-400/25 bg-neutral-950/70 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.18)] mb-8"
        >
          <div className="flex items-center justify-between px-4 py-2 border-b border-violet-400/20 bg-black/40">
            <div className="text-sm text-violet-200">AgentPlan.jsx</div>
            <div className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-rose-500/80" />
              <span className="inline-block h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80" />
            </div>
          </div>
          <pre className="p-6 text-[13.5px] leading-6 text-sky-100/90 font-mono whitespace-pre overflow-auto min-h-[420px]">{appJsSnippet}</pre>
        </motion.div>

        {/* Bottom row: Python SQL (full) */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-2xl border border-violet-400/25 bg-neutral-950/70 backdrop-blur-xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.16)]"
        >
          <div className="flex items-center justify-between px-4 py-2 border-b border-violet-400/20 bg-black/40">
            <div className="text-sm text-violet-200">generate_sql.py</div>
            <div className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-rose-500/80" />
              <span className="inline-block h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80" />
            </div>
          </div>
          <pre className="p-5 text-[13px] leading-6 text-sky-100/90 font-mono whitespace-pre overflow-auto min-h-[520px]">{pythonSnippet}</pre>
        </motion.div>
      </div>
    </section>
  );
}
