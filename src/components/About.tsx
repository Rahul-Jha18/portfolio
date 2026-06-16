import { useEffect, useMemo, useState } from 'react';
import profilePic from '../assets/p2.jpg';
import {
  GraduationCap,
  Briefcase,
  Code2,
  Music,
  Gamepad2,
  MapPin,
  Target,
  Pencil,
  User,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = 7;

    const interval = setInterval(() => {
      start += 1;
      setProjectsCount(start);

      if (start >= end) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, [isVisible]);

  const quickFacts = useMemo(
    () => [
      {
        icon: <GraduationCap size={20} />,
        title: 'Education',
        value: 'IT Student',
        sub: 'Learning, building, growing',
        color: 'from-violet-500 to-purple-600',
        glow: 'rgba(139,92,246,0.3)',
      },
      {
        icon: <Briefcase size={20} />,
        title: 'Experience',
        value: 'Software Web Developer',
        sub: 'Full-time at Nepal Life Insurance',
        color: 'from-cyan-500 to-blue-600',
        glow: 'rgba(6,182,212,0.3)',
      },
      {
        icon: <Code2 size={20} />,
        title: 'Projects',
        value: `${projectsCount}+`,
        sub: 'Real systems & UI work',
        color: 'from-emerald-500 to-teal-600',
        glow: 'rgba(16,185,129,0.3)',
      },
    ],
    [projectsCount]
  );

  const hobbies = [
    { icon: <Music size={14} />, text: 'Music' },
    { icon: <Pencil size={14} />, text: 'Sketching' },
    { icon: <Gamepad2 size={14} />, text: 'Gaming' },
    { icon: <MapPin size={14} />, text: 'Exploring' },
    { icon: <Target size={14} />, text: 'Full Stack Goal' },
  ];

  const hobbyColors = [
    'border-violet-500/30 bg-violet-500/[0.08] text-violet-300',
    'border-cyan-500/30 bg-cyan-500/[0.08] text-cyan-300',
    'border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-300',
    'border-fuchsia-500/30 bg-fuchsia-500/[0.08] text-fuchsia-300',
    'border-amber-500/30 bg-amber-500/[0.08] text-amber-300',
  ];

  return (
    <section id="about" className="relative py-28 bg-[#070c1a] overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div ref={elementRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/[0.08] text-violet-300 text-xs font-semibold uppercase tracking-widest mb-5">
            <User size={12} />
            About Me
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            The person{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              behind the code
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div
            className={`flex justify-center transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Rotating ring */}
              <div
                className="absolute -inset-4 rounded-full border border-dashed border-violet-500/20 animate-spin"
                style={{ animationDuration: '20s' }}
              />
              <div
                className="absolute -inset-8 rounded-full border border-dashed border-cyan-500/10 animate-spin"
                style={{
                  animationDuration: '35s',
                  animationDirection: 'reverse',
                }}
              />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl" />

              {/* Image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden ring-2 ring-white/10 shadow-[0_0_80px_rgba(139,92,246,0.3)]">
                <img
                  src={profilePic}
                  alt="Rahul Kumar Jha"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070c1a]/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-black text-sm shadow-[0_8px_32px_rgba(139,92,246,0.5)] whitespace-nowrap">
                Rahul Kumar Jha ✦
              </div>

              {/* Side tags */}
              <div className="absolute -left-6 top-1/4 px-3 py-1.5 rounded-xl bg-[#0d1224] border border-white/[0.08] text-white/60 text-xs font-semibold shadow-lg rotate-[-6deg]">
                React ⚛️
              </div>
              <div className="absolute -right-6 top-2/3 px-3 py-1.5 rounded-xl bg-[#0d1224] border border-white/[0.08] text-white/60 text-xs font-semibold shadow-lg rotate-[6deg]">
                TypeScript 💙
              </div>
            </div>
          </div>

          {/* Content column */}
          <div
            className={`space-y-7 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
              Hello! I'm Rahul 👋
            </h3>

            <div className="space-y-4 text-[#94a3b8] text-base leading-relaxed">
              <p>
                I'm <span className="text-white font-bold">Rahul Kumar Jha</span>, an IT
                student and  web developer passionate about building modern, fast,
                and user-first web applications.
              </p>

              <p>
                I completed my{' '}
                <span className="text-cyan-400 font-bold">
                  Web Development Internship at Nepal Life Insurance
                </span>{' '}
                on <span className="text-white font-bold">February</span>, and I am now
                working there as a{' '}
                <span className="text-cyan-400 font-bold">
                  full-time Software Web Developer at Contractual Position
                </span>
                .
              </p>

              <p>
                My work focuses on building real production features, including dashboards,
                digital library modules, asset modules, APIs, and database-driven systems
                that solve real business problems.
              </p>

              <p>
                My mission is to grow as a{' '}
                <span className="text-violet-400 font-bold">Full Stack Developer</span> and
                ship complete products from the ground up — beautiful UI, robust APIs, and
                solid databases. I care deeply about clean code, learning consistently, and
                building systems that create real value.
              </p>
            </div>

            {/* Hobby chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {hobbies.map((h, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all duration-200 hover:scale-105 ${hobbyColors[i]}`}
                >
                  {h.icon} {h.text}
                </span>
              ))}
            </div>

            {/* Quick fact cards */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {quickFacts.map((card, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-2xl p-4 border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 overflow-hidden cursor-default"
                  style={{ boxShadow: `0 0 0 0 ${card.glow}` }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${card.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${card.glow}`;
                  }}
                >
                  <div
                    className={`w-9 h-9 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-3 shadow-lg`}
                  >
                    {card.icon}
                  </div>

                  <div className="text-lg font-black text-white leading-none mb-1">
                    {card.value}
                  </div>

                  <div className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">
                    {card.title}
                  </div>

                  <div className="text-[11px] text-white/30 mt-0.5">{card.sub}</div>
                </div>
              ))}
            </div>

            {/* Currently focusing */}
            <div className="flex items-start gap-3 p-4 rounded-2xl border border-amber-500/20 bg-amber-500/[0.05]">
              <span className="text-amber-400 mt-0.5">⚡</span>
              <div>
                <span className="text-amber-300 font-bold text-sm">
                  Currently focused on:{' '}
                </span>
                <span className="text-white/50 text-sm">
                  Building a Digital Library System using React 18 and ASP.NET 10, while
                  learning ASP.NET and Entity Framework day by day with senior guidance and
                  determination.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;