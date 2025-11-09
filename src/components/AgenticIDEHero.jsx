import React from "react";

// A single-file React component that recreates the UI/hero vibe in the screenshot:
// - Dark, glassy hero with headline & subhead
// - Large IDE-like mock window with sidebar, center diff, right inspector
// - Subtle grid & glow accents
// Drop this into a React + Tailwind app and render <AgenticIDEHero />

const Dot = ({ className = "" }) => (
  <span
    className={`inline-block h-2.5 w-2.5 rounded-full ${className}`}
  />
);

const SectionTitle = () => (
  <div className="mb-6 text-left">
    <p className="tracking-wide uppercase text-xs text-neutral-400 mb-2">Code</p>
    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
      Agentic workflows
      <span className="block text-neutral-300 font-normal">for understanding your codebase, writing code, and debugging</span>
    </h1>
  </div>
);

const WindowChrome = () => (
  <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-neutral-900/60 backdrop-blur-sm rounded-t-xl">
    <Dot className="bg-red-500/90" />
    <Dot className="bg-yellow-400/90" />
    <Dot className="bg-green-500/90" />
    <div className="ml-3 text-xs text-neutral-400">~/Repos/co-researcher</div>
    <div className="ml-auto flex items-center gap-2 text-xs text-neutral-400">
      <span className="px-2 py-1 rounded bg-white/5">main</span>
      <span className="px-2 py-1 rounded bg-white/5">2▲ · 3▼</span>
    </div>
  </div>
);

const Sidebar = () => (
  <aside className="hidden lg:flex lg:w-72 flex-col gap-3 p-3 border-r border-white/10">
    <div className="rounded-lg bg-white/5 p-3">
      <p className="text-xs font-medium text-neutral-300 mb-2">Find results</p>
      <div className="space-y-2 text-xs text-neutral-400">
        {[
          "web/src/app/layout.tsx",
          "web/src/app/*.tsx",
          "web/src/app/page.tsx",
          "web/src/components/**/*.tsx",
        ].map((line, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400/80" />
            <span className="truncate">{line}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="rounded-lg bg-white/5 p-3">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-medium text-neutral-300">Tasks</p>
        <span className="text-[10px] text-neutral-500">▼</span>
      </div>
      <ul className="space-y-2 text-xs text-neutral-300">
        {[
          "Update base color to slate in shadcn config",
          "Default the app to dark mode",
          "Swap dark theme tokens to Slate palette",
        ].map((t, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 h-3 w-3 rounded border border-white/20" />
            <span className="flex-1 leading-snug text-neutral-400">{t}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 text-[11px] text-neutral-500 leading-relaxed">
        I will update your shadcn config and styles to use the Slate palette in dark mode, and set dark mode as the default. Then I’ll edit the HTML root to apply the .dark class so the theme is active without a theme provider.
      </div>
    </div>
  </aside>
);

const Line = ({ n, type = "context", children }) => {
  const color =
    type === "add" ? "text-emerald-300/90 bg-emerald-500/10 border-emerald-500/20" :
    type === "del" ? "text-rose-300/90 bg-rose-500/10 border-rose-500/20" :
    "text-neutral-300/90";
  return (
    <div className={`grid grid-cols-[48px_1fr] items-start gap-3 px-3 py-1 rounded border ${color} border-transparent`}> 
      <div className="text-right text-[10px] text-neutral-500 tabular-nums">{n}</div>
      <pre className={`whitespace-pre-wrap text-xs leading-5 ${color}`}>{children}</pre>
    </div>
  );
};

const DiffPane = () => (
  <div className="rounded-lg bg-white/5 p-0.5 overflow-hidden">
    <div className="px-3 py-2 text-xs text-neutral-400 border-b border-white/10 flex items-center gap-2">
      <span className="px-1.5 py-0.5 rounded bg-white/5">server/index.ts</span>
      <span className="px-1.5 py-0.5 rounded bg-white/5">+2 · -2</span>
      <span className="ml-auto">Reviewing open changes</span>
    </div>
    <div className="p-2 space-y-1 max-h-[420px] overflow-auto">
      <Line n={179} type="del">const command = `warp-dev agent run --prompt \"${"${prompt}"}.replace...\"`</Line>
      <Line n={185} type="add">const command = `warp-preview agent run --prompt \"${"${prompt}"}.replace...\"`</Line>
      <Line n={201}>try {'{'} const {'{'} stdout, stderr {'}'} = await execPromise(command) {'}'}</Line>
      <Line n={283} type="del">// Call Warp SDK — old path</Line>
      <Line n={285} type="add">// Call Warp SDK — new path</Line>
      <Line n={289}>await execPromise(command, {'{'} maxBuffer: 10 * 1024 * 1024 {'}'})</Line>
      {Array.from({ length: 28 }).map((_, i) => (
        <Line key={i} n={300 + i}>// …more context lines…</Line>
      ))}
    </div>
  </div>
);

const RightPane = () => (
  <div className="hidden xl:flex xl:w-80 flex-col gap-3 p-3 border-l border-white/10">
    <div className="rounded-lg bg-white/5 p-3">
      <p className="text-xs font-medium text-neutral-300 mb-1">web/src/components/ProjectPicker.tsx</p>
      <div className="text-[11px] text-neutral-400">&lt;Select /&gt;</div>
      <div className="mt-3 text-xs text-neutral-300">Notes</div>
      <ul className="mt-1 space-y-2 text-[11px] text-neutral-500">
        <li>Swap tokens to Slate palette</li>
        <li>Ensure contrast ratios &gt; 4.5</li>
        <li>Add keyboard nav hints</li>
      </ul>
    </div>
    <div className="rounded-lg bg-white/5 p-3 text-[11px] text-neutral-400">
      <p className="text-xs text-neutral-300 mb-2">Commit message</p>
      use slate palette in dark mode; default to .dark; bump buffer for large responses
    </div>
  </div>
);

const IDEMock = () => (
  <div className="rounded-2xl border border-white/10 bg-neutral-950/60 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
    <WindowChrome />
    <div className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] xl:grid-cols-[18rem_1fr_20rem]">
      <Sidebar />
      <main className="p-3 space-y-3">
        <DiffPane />
        <div className="rounded-lg bg-white/5 p-3 text-[11px] text-neutral-500">
          <span className="px-1.5 py-0.5 rounded bg-white/5 mr-2">status</span>
          1 file changed, 2 insertions(+), 2 deletions(-) · Uncommitted changes
        </div>
      </main>
      <RightPane />
    </div>
  </div>
);

export default function AgenticIDEHero() {
  return (
    <div className="relative w-full overflow-hidden bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.20),transparent),radial-gradient(40%_30%_at_100%_10%,rgba(59,130,246,0.15),transparent)]">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 [background:linear-gradient(to_right,transparent_0,_transparent_31px,_rgba(255,255,255,0.03)_32px),linear-gradient(to_bottom,transparent_0,_transparent_31px,_rgba(255,255,255,0.03)_32px)] bg-[length:32px_32px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <SectionTitle />
        <IDEMock />
      </div>
    </div>
  );
}
