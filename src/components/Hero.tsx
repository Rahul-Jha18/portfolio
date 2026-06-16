import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Download, Sparkles, Code2, Zap } from 'lucide-react';

const Hero = () => {
  const roles = useMemo(
    () => ['Full Stack Developer', 'React Developer', 'UI/UX Enthusiast', 'Problem Solver'],
    []
  );

  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(current.slice(0, typedText.length + 1));
        if (typedText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setTypedText(current.slice(0, typedText.length - 1));
        if (typedText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((p) => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex, roles]);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  const stats = [
    { label: 'Projects Built', value: '8+', icon: <Code2 size={14} /> },
    { label: 'Technologies', value: '12+', icon: <Zap size={14} /> },
    { label: 'Months Exp.', value: '6+', icon: <Sparkles size={14} /> },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050810]">
      <div className="absolute inset-0">
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-[120px] opacity-20 transition-transform duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, #7c3aed, transparent)',
            top: '5%',
            left: '10%',
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-15 transition-transform duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, #06b6d4, transparent)',
            bottom: '10%',
            right: '5%',
            transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-10"
          style={{
            background: 'radial-gradient(circle, #10b981, transparent)',
            top: '40%',
            left: '40%',
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20 animate-float"
          style={{
            width: `${4 + i * 2}px`,
            height: `${4 + i * 2}px`,
            background: ['#7c3aed', '#06b6d4', '#10b981', '#f59e0b', '#ec4899', '#7c3aed'][i],
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-400 text-sm font-medium mb-8 animate-[fadeUp_600ms_ease-out_both]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Open to opportunities & collaboration
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-6 animate-[fadeUp_800ms_ease-out_both]">
          Hi, I'm{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Rahul
            </span>
            <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
              <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="url(#ul)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <defs>
                <linearGradient id="ul" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="50%" stopColor="#e879f9" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6 animate-[fadeUp_1000ms_ease-out_both]">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-white/20" />
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white/70">
            <span className="text-white">{typedText}</span>
            <span className="inline-block w-[2px] h-7 align-middle bg-violet-400 ml-1 animate-pulse rounded-full" />
          </p>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-white/20" />
        </div>

        <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-10 animate-[fadeUp_1200ms_ease-out_both]">
          IT student & Web Developer Intern at Nepal Life Insurance. I craft fast, clean, and user-focused web experiences — from pixel-perfect UI to solid backend APIs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-[fadeUp_1400ms_ease-out_both]">
          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold text-base overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Get In Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={scrollToProjects}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/[0.12] bg-white/[0.04] text-white font-bold text-base hover:bg-white/[0.08] hover:border-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            View Projects
          </button>

          <a
            href="/Rahul_Kumar_Jha_CV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-400 font-bold text-base hover:bg-emerald-500/[0.15] hover:scale-105 transition-all duration-300"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        <div className="inline-flex flex-wrap justify-center gap-8 animate-[fadeUp_1600ms_ease-out_both]">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1.5 text-white/40 text-xs font-medium uppercase tracking-wider mb-0.5">
                <span className="text-violet-400">{s.icon}</span>
                {s.label}
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float { animation: float linear infinite; }
      `}</style>
    </section>
  );
};

export default Hero;