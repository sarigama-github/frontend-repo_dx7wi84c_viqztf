export default function CodeSplitShowcase() {
  const appJsSnippet = `// App.js\nimport React from 'react';\nimport DeploymentDashboard from './DeploymentDashboard';\nimport './App.css';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <DeploymentDashboard />\n    </div>\n  );\n}\n\nexport default App;`;

  const pythonSnippet = `def generate_sql_queries(timestamps):\n    print("\\n=== SAMPLE SQL QUERIES ===")\n    \n    # SQL to create a logs table\n    print("""\n-- Create a logs table\nCREATE TABLE IF NOT EXISTS logs (\n    id SERIAL PRIMARY KEY,\n    timestamp TIMESTAMP(6) NOT NULL,\n    message TEXT,\n    severity VARCHAR(10) DEFAULT 'INFO'\n);\n""")\n    \n    # SQL to insert the sample data\n    print("-- Insert sample log data")\n    for i, ts in enumerate(timestamps):\n        print(f"INSERT INTO logs (timestamp, message) VALUES ('{ts}', 'Sample log message {i+1}');")\n    \n    # SQL to query logs by date\n    print("""\n-- Query logs from a specific date\nSELECT * FROM logs \nWHERE DATE(timestamp) = '2025-06-18'\nORDER BY timestamp DESC;\n""")\n    \n    # SQL to find time gaps between logs\n    print("""\n-- Find time gaps between consecutive logs\nSELECT \n    l1.timestamp as earlier_time,\n    l2.timestamp as later_time,\n    l2.timestamp - l1.timestamp as time_gap\nFROM logs l1\nJOIN logs l2 ON l2.id = l1.id + 1\nORDER BY l1.timestamp;\n""")\n\n# Generate SQL queries\ngenerate_sql_queries(timestamps)`;

  return (
    <section className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Practical, developer-first workflows</h3>
          <p className="mt-2 text-white/80 max-w-3xl">From deployment dashboards to audit-ready SQL generation—CogniCode bridges everyday engineering tasks with governance and reliability.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: App.js */}
          <div className="rounded-2xl border border-white/10 bg-neutral-950/70 backdrop-blur-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
              <div className="text-sm text-white/80">App.js</div>
              <div className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-rose-500/80" />
                <span className="inline-block h-2 w-2 rounded-full bg-amber-400/80" />
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80" />
              </div>
            </div>
            <pre className="p-4 text-[12px] leading-5 text-white/90 font-mono whitespace-pre overflow-auto max-h-[420px]">
              {appJsSnippet}
            </pre>
          </div>

          {/* Right: Python SQL generator */}
          <div className="rounded-2xl border border-white/10 bg-neutral-950/70 backdrop-blur-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
              <div className="text-sm text-white/80">generate_sql_queries.py</div>
              <div className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-rose-500/80" />
                <span className="inline-block h-2 w-2 rounded-full bg-amber-400/80" />
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80" />
              </div>
            </div>
            <pre className="p-4 text-[12px] leading-5 text-white/90 font-mono whitespace-pre overflow-auto max-h-[420px]">
              {pythonSnippet}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
