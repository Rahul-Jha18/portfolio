// src/components/About.tsx
import { useEffect, useMemo, useState } from "react";
import profilePic from "../assets/p2.jpg";
import { GraduationCap, Briefcase, Heart, Code2, MapPin, Target, Sparkles } from "lucide-react";

const cx = (...a: (string | false | null | undefined)[]) => a.filter(Boolean).join(" ");

const About = () => {
  const [projectsCount, setProjectsCount] = useState(0);

  // counter animation
  useEffect(() => {
    let start = 0;
    const end = 7; // change if you want
    const interval = setInterval(() => {
      start += 1;
      setProjectsCount(start);
      if (start >= end) clearInterval(interval);
    }, 160);
    return () => clearInterval(interval);
  }, []);

  const quickFacts = useMemo(
    () => [
      {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "Study",
        value: "IT Student",
        sub: "Learning, building, improving",
      },
      {
        icon: <Briefcase className="w-6 h-6" />,
        title: "Current",
        value: "Web Developer Intern",
        sub: "Nepal Life Insurance",
      },
      {
        icon: <Code2 className="w-6 h-6" />,
        title: "Projects",
        value: `${projectsCount}+`,
        sub: "Real systems + UI work",
      },
    ],
    [projectsCount]
  );

  return (
    <section id="about" className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden">
      {/* Background (premium, neutral, subtle red) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50" />
      <div className="absolute -top-24 right-16 w-80 h-80 bg-black/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-red-500/10 blur-3xl rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[55rem] bg-black/5 blur-[110px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-16 animate-[fadeUp_800ms_ease-out]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white/60 backdrop-blur shadow-sm">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-gray-800">Get to know me</span>
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-28 h-[3px] bg-gradient-to-r from-black/70 via-red-600 to-black/70 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* image */}
          <div className="flex justify-center animate-[fadeUp_1000ms_ease-out]">
            <div className="relative">
              {/* glow + ring */}
              <div className="absolute -inset-3 rounded-full bg-red-500/10 blur-2xl" />
              <div className="absolute inset-0 rounded-full ring-1 ring-black/10" />
              <img
                src={profilePic}
                alt="Rahul Kumar Jha"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-[0_30px_70px_rgba(0,0,0,0.22)]"
              />

              {/* small badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-black text-white font-bold text-sm shadow-lg border border-white/10">
                Rahul Kumar Jha
              </div>
            </div>
          </div>

          {/* content */}
          <div className="space-y-6 animate-[fadeUp_1200ms_ease-out]">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900">
              Hello, I’m Rahul 👋
            </h3>

            {/* upgraded paragraphs */}
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                I’m <span className="font-bold text-gray-900">Rahul Kumar Jha</span>, an{" "}
                <span className="font-semibold">IT student</span> who loves building modern web
                applications that feel fast, clean, and easy to use.
              </p>

              <p>
                Right now, I’m working as a{" "}
                <span className="font-bold text-gray-900">Web Developer Intern</span> at{" "}
                <span className="font-semibold">Nepal Life Insurance</span>, where I get hands-on
                experience creating real features—dashboards, modules, and systems that solve real
                problems.
              </p>

              <p>
                My goal is to become a{" "}
                <span className="font-bold text-gray-900">Full Stack Developer</span> and build
                complete products—from UI to backend APIs and databases. I care about good UX,
                clear code, and building things that are actually useful.
              </p>
            </div>

            {/* hobby + future plan chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { icon: <Heart className="w-4 h-4" />, text: "Music" },
                { icon: <Heart className="w-4 h-4" />, text: "Sketching" },
                { icon: <Heart className="w-4 h-4" />, text: "Gaming" },
                { icon: <MapPin className="w-4 h-4" />, text: "Exploring new places" },
                { icon: <Target className="w-4 h-4" />, text: "Full Stack Career" },
              ].map((x, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white/70 backdrop-blur text-sm font-semibold text-gray-800 shadow-sm"
                >
                  <span className="text-red-600">{x.icon}</span>
                  {x.text}
                </span>
              ))}
            </div>

            {/* info cards (premium style) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {quickFacts.map((card, idx) => (
                <div
                  key={idx}
                  className={cx(
                    "group rounded-2xl p-5",
                    "border border-black/10 bg-white/70 backdrop-blur",
                    "shadow-[0_14px_35px_rgba(0,0,0,0.08)]",
                    "hover:shadow-[0_22px_55px_rgba(239,68,68,0.12)]",
                    "transition-all duration-500 hover:-translate-y-1"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-red-600">
                      {card.icon}
                    </div>
                    <span className="text-xs font-extrabold text-gray-600 uppercase tracking-wider">
                      {card.title}
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="text-lg font-black text-gray-900">{card.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{card.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* small closing line */}
            <div className="pt-2 text-gray-700">
              <span className="font-bold text-gray-900">Currently focusing on:</span>{" "}
              React + TypeScript, clean UI, backend APIs, and building full-stack projects end-to-end.
            </div>
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default About;