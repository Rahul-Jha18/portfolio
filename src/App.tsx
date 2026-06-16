import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Github, Linkedin, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#050810]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="relative bg-[#030609] border-t border-white/[0.06] py-10 overflow-hidden">
        {/* Subtle footer glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white/30 text-sm">© {new Date().getFullYear()}</span>
              <span className="text-white/60 text-sm font-bold">Rahul Kumar Jha</span>
              <span className="text-white/20 text-sm">· All rights reserved</span>
            </div>

            <div className="flex items-center gap-1 text-white/30 text-xs">
              Built with
              <Heart size={11} className="text-red-400 mx-1 animate-pulse" />
              using React + TypeScript + Tailwind
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Rahul-Jha18"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <Github size={14} />
              </a>
              <a
                href="https://linkedin.com/in/rjha8563"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-[#0077b5] hover:border-[#0077b5]/30 transition-all duration-200"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;