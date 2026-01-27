import { useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 12);

      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(link.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  setIsOpen(false);
};

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-2xl shadow-lg border-b border-white/40'
          : 'bg-gradient-to-r  from-purple-900/40 via-indigo-900/70 via-blue-400/40 to-purple-400/20 backdrop-blur-lg text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
         <button
            onClick={() => scrollToSection('home')}
            className={`text-lg sm:text-xl font-extrabold tracking-tight transition-all duration-300 hover:scale-105 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            Rahul Kumar{' '}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isScrolled
                  ? 'from-blue-600 via-indigo-600 to-purple-600'
                  : 'from-cyan-300 via-sky-300 to-indigo-300'
              }`}
            >
              Jha
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
  {navLinks.map((link) => {
    const isActive = activeSection === link.id;
    return (
      <button
        key={link.id}
        onClick={() => scrollToSection(link.id)}
        className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 group ${
          isActive
            ? isScrolled
              ? 'text-blue-700 bg-blue-50'
              : 'text-white bg-white/10' 
            : 'text-black hover:text-blue-200 hover:bg-white/10'
        }`}
      >
        {link.label}

        {/* underline animation */}
        <span
          className={`absolute left-1/2 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ${
            isActive
              ? 'w-10 -translate-x-1/2 opacity-100'
              : 'w-0 -translate-x-1/2 opacity-0 group-hover:w-8 group-hover:opacity-100'
          }`}
        />
      </button>
    );
  })}
</div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 backdrop-blur border border-white/50 shadow text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[360px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
      <div className="mx-4 mb-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/60 shadow-xl p-3">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                isActive
                  ? isScrolled
                    ? 'bg-blue-50 text-blue-700 shadow'
                    : 'bg-white/10 text-white'
                  : isScrolled
                  ? 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                  : 'text-white hover:text-blue-200 hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
