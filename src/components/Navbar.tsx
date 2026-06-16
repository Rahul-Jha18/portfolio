import { useEffect, useMemo, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const navLinks = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 130;
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (!section) continue;
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(link.id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0a0f1e]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 group"
            >
              <span className="text-base font-black tracking-tight text-white">
              <span className="text-2xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Rahul Kumar Jha</span>
              </span>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-2 py-1.5 backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`relative px-4 py-1.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-white/50 hover:text-white/80'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30" />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-sm font-bold shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.55)] hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen((p) => !p)}
              className="md:hidden w-9 h-9 rounded-xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white hover:bg-white/[0.12] transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#0d1224]/95 backdrop-blur-2xl border-l border-white/[0.08] p-6 flex flex-col transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="text-white font-black text-lg">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-white border border-violet-500/30'
                      : 'text-white/50 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
          <div className="mt-auto">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold hover:opacity-90 transition"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;