import { motion, useReducedMotion } from 'framer-motion';

export default function CodeSplitShowcase() {
  const prefersReducedMotion = useReducedMotion();

  const appJsSnippet = `// App.js\nimport React from 'react';\nimport AgentRunner from './AgentRunner';\n\nexport default function App() {\n  return (\n    <div className=\"min-h-screen bg-[#0a0a0b] text-white\">\n      <header className=\"border-b border-white/10 bg-black/40 backdrop-blur\">\n        <div className=\"max-w-7xl mx-auto px-6 h-14 flex items-center justify-between\">\n          <strong>CogniCode</strong>\n          <nav>Agentic • Workflows • Console</nav>\n        </div>\n      </header>\n      <main className=\"max-w-7xl mx-auto p-6\">\n        <AgentRunner />\n      </main>\n    </div>\n  );\n}`;

  const pythonSnippet = `def generate_sql_queries(timestamps):\n    # Create table if not exists\n    print(\"\n-- Create a logs table\nCREATE TABLE IF NOT EXISTS logs (\n  id SERIAL PRIMARY KEY,\n  timestamp TIMESTAMP(6) NOT NULL,\n  message TEXT,\n  severity VARCHAR(10) DEFAULT 'INFO'\n);\n\")\n\n    # Insert data\n    print(\"-- Insert sample log data\")\n    for i, ts in enumerate(timestamps):\n        print(f\"INSERT INTO logs (timestamp, message) VALUES ('{ts}', 'Sample log message {i+1}');\")\n\n    # Query by date\n    print(\"\n-- Query logs from a specific date\nSELECT * FROM logs\nWHERE DATE(timestamp) = '2025-06-18'\nORDER BY timestamp DESC;\n\")\n\n    # Time gaps between logs\n    print(\"\n-- Find time gaps between consecutive logs\nSELECT\n  l1.timestamp as earlier_time,\n  l2.timestamp as later_time,\n  l2.timestamp - l1.timestamp as time_gap\nFROM logs l1\nJOIN logs l2 ON l2.id = l1.id + 1\nORDER BY l1.timestamp;\n\")\n\n# Generate SQL queries\ngenerate_sql_queries(timestamps)`;

  return (
    <section className="relative w-full bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-10">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Split code showcase</h3>
          <p className="mt-2 text-white/80 max-w-3xl">Focus the App.js flow front-and-center. Supporting SQL generation sits just beneath, left-aligned. Smooth, efficient animations keep performance snappy.</p>
        </div>

        {/* Top: App.js (HUGE) */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-2xl border border-violet-400/25 bg-neutral-950/70 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.18)] mb-8"
        >
          <div className="flex items-center justify-between px-4 py-2 border-b border-violet-400/20 bg-black/40">
            <div className="text-sm text-violet-200">App.js</div>
            <div className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-rose-500/80" />
              <span className="inline-block h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80" />
            </div>
          </div>
          <pre className="p-6 text-[13.5px] leading-6 text-sky-100/90 font-mono whitespace-pre overflow-auto min-h-[520px]">{appJsSnippet}</pre>
        </motion.div>

        {/* Bottom row: left small Python panel, right spacer/info */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-8 items-stretch">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-violet-400/25 bg-neutral-950/70 backdrop-blur-xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.16)]"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-violet-400/20 bg-black/40">
              <div className="text-sm text-violet-200">generate_sql_queries.py</div>
              <div className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-rose-500/80" />
                <span className="inline-block h-2 w-2 rounded-full bg-amber-400/80" />
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80" />
              </div>
            </div>
            <pre className="p-5 text-[13px] leading-6 text-sky-100/90 font-mono whitespace-pre overflow-auto max-h-[420px]">{pythonSnippet}</pre>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-violet-600/10 p-6"
          >
            <h4 className="text-white font-semibold">How it comes together</h4>
            <p className="mt-2 text-white/80 text-sm">App.js orchestrates agent execution and UI rendering, while the SQL helper sits just below to support analytics and logging pipelines.</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Hover depth and subtle perspective for a 3D feel</li>
              <li>• Reduced-motion aware animations for speed</li>
              <li>• Consistent purple/blue accents across components</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
