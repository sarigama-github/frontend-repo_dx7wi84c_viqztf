import Hero3D from './components/Hero3D';
import FeaturesGrid from './components/FeaturesGrid';
import CodeSplitShowcase from './components/CodeSplitShowcase';
import ShowcaseConsole from './components/ShowcaseConsole';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight">
            <span className="text-white">Cogni</span>
            <span className="text-white/80">Code</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#showcase" className="hover:text-white">Showcase</a>
            <a href="#enterprise" className="hover:text-white">Enterprise</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden sm:inline-flex rounded-lg border border-white/20 bg-black/50 px-3 py-1.5 text-white/80 hover:bg-black/70">Sign in</a>
            <a href="#" className="inline-flex rounded-lg bg-white px-3 py-1.5 font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-neutral-100">Get a demo</a>
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

      <footer className="bg-black border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} CogniCode. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
