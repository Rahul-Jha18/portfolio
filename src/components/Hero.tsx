
import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const roles = useMemo(
    () => ['Web Developer', 'React Developer', 'UI/UX Learner', 'Lifelong Learner'],
    []
  );

  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect (no library)
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(current.slice(0, typedText.length + 1));
        if (typedText.length + 1 === current.length) {
          // pause before deleting
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        setTypedText(current.slice(0, typedText.length - 1));
        if (typedText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex, roles]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />

      {/* Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/30 blur-3xl rounded-full animate-pulse" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 backdrop-blur-md mb-8 animate-[fadeUp_700ms_ease-out]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for Hiring / projects
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white animate-[fadeUp_900ms_ease-out]">
          Hi, I’m{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
            Rahul Kumar Jha
          </span>
        </h1>

        {/* Typing line */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/80 animate-[fadeUp_1100ms_ease-out]">
          I build modern web apps •{' '}
          <span className="text-white font-semibold">
            {typedText}
            <span className="inline-block w-[2px] h-6 align-middle bg-white ml-1 animate-pulse" />
          </span>
        </p>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed animate-[fadeUp_1300ms_ease-out]">
          A dedicated web developer focused on creating clean, responsive, and user-friendly applications.
          Currently learning and building real projects during my internship.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeUp_1500ms_ease-out]">
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full text-base sm:text-lg font-semibold
                       hover:scale-105 transition-all duration-200 shadow-lg shadow-black/30"
          >
            Get In Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Put your CV in public folder as: public/Rahul_Kumar_Jha_CV.pdf */}
          <a
            href="/Rahul_Kumar_Jha_CV.pdf"
            download
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-base sm:text-lg font-semibold
                       bg-white/10 text-white border border-white/20 backdrop-blur-md
                       hover:bg-white/15 hover:scale-105 transition-all duration-200"
          >
            Download CV
            <Download size={20} className="group-hover:translate-y-[1px] transition-transform" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
