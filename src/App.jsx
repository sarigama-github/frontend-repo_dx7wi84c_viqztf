import Hero3D from './components/Hero3D';
import FeaturesGrid from './components/FeaturesGrid';
import CodeSplitShowcase from './components/CodeSplitShowcase';
import ShowcaseConsole from './components/ShowcaseConsole';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-black/40 border-b border-emerald-400/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight">
            <span className="text-white">Neon</span>
            <span className="text-emerald-300">Systems</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-emerald-300 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-emerald-300 transition-colors">Explore</a>
            <a href="#enterprise" className="hover:text-emerald-300 transition-colors">Enterprise</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden sm:inline-flex rounded-lg border border-emerald-400/30 bg-black/50 px-3 py-1.5 text-white/80 hover:bg-black/70 hover:text-white transition-colors">Sign in</a>
            <a href="#features" className="inline-flex rounded-lg bg-emerald-400 px-3 py-1.5 font-semibold text-black shadow-[0_0_24px_rgba(16,185,129,0.35)] hover:bg-emerald-300 transition-colors">Get started</a>
          </div>
        </div>
      </header>

      <main>
        <Hero3D />
        <section id="features">
          <FeaturesGrid />
        </section>
        <section id="showcase">
          <CodeSplitShowcase />
        </section>
        <section id="enterprise" className="bg-black">
          <ShowcaseConsole />
        </section>
      </main>

      <footer className="bg-black border-t border-emerald-400/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} Neon Systems. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-emerald-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-300 transition-colors">Security</a>
            <a href="#" className="hover:text-emerald-300 transition-colors">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
