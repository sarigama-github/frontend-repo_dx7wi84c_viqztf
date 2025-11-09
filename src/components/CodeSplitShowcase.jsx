import { motion } from 'framer-motion';

export default function CodeSplitShowcase() {
  const appJsSnippet = `// App.js\nimport React from 'react';\nimport DeploymentDashboard from './DeploymentDashboard';\nimport './App.css';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <DeploymentDashboard />\n    </div>\n  );\n}\n\nexport default App;`;

  const pythonSnippet = `def generate_sql_queries(timestamps):\n    print("\\n=== SAMPLE SQL QUERIES ===")\n    \n    # SQL to create a logs table\n    print("""\n-- Create a logs table\nCREATE TABLE IF NOT EXISTS logs (\n    id SERIAL PRIMARY KEY,\n    timestamp TIMESTAMP(6) NOT NULL,\n    message TEXT,\n    severity VARCHAR(10) DEFAULT 'INFO'\n);\n""")\n    \n    # SQL to insert the sample data\n    print("-- Insert sample log data")\n    for i, ts in enumerate(timestamps):\n        print(f"INSERT INTO logs (timestamp, message) VALUES ('{ts}', 'Sample log message {i+1}');")\n    \n    # SQL to query logs by date\n    print("""\n-- Query logs from a specific date\nSELECT * FROM logs \nWHERE DATE(timestamp) = '2025-06-18'\nORDER BY timestamp DESC;\n""")\n    \n    # SQL to find time gaps between logs\n    print("""\n-- Find time gaps between consecutive logs\nSELECT \n    l1.timestamp as earlier_time,\n    l2.timestamp as later_time,\n    l2.timestamp - l1.timestamp as time_gap\nFROM logs l1\nJOIN logs l2 ON l2.id = l1.id + 1\nORDER BY l1.timestamp;\n""")\n\n# Generate SQL queries\ngenerate_sql_queries(timestamps)`;

  return (
    <section className="relative w-full bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-10">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Practical, developer-first workflows</h3>
          <p className="mt-2 text-white/80 max-w-3xl">Bigger, cleaner panes for everyday work. We keep focus on real code, real queries, and smooth transitions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Python SQL generator (bigger) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-emerald-400/20 bg-neutral-950/70 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.12)] lg:min-h-[540px]"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-emerald-400/20 bg-black/40">
              <div className="text-sm text-emerald-300">generate_sql_queries.py</div>
              <div className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-rose-500/80" />
                <span className="inline-block h-2 w-2 rounded-full bg-amber-400/80" />
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80" />
              </div>
            </div>
            <pre className="p-5 text-[13px] leading-6 text-emerald-100/90 font-mono whitespace-pre overflow-auto max-h-[600px]">
{pythonSnippet}
            </pre>
          </motion.div>

          {/* Right: App.js (slightly smaller) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-emerald-400/20 bg-neutral-950/70 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.12)] lg:min-h-[480px]"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-emerald-400/20 bg-black/40">
              <div className="text-sm text-emerald-300">App.js</div>
              <div className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-rose-500/80" />
                <span className="inline-block h-2 w-2 rounded-full bg-amber-400/80" />
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80" />
              </div>
            </div>
            <pre className="p-5 text-[13px] leading-6 text-emerald-100/90 font-mono whitespace-pre overflow-auto max-h-[520px]">
{appJsSnippet}
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
