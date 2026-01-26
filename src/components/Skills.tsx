

import { Code, Database, Globe, Layers, Smartphone, GitBranch, Server } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type Skill = {
  title: string;
  level: number;
  icon: JSX.Element;
  gradient: string;
};

type Category = {
  name: string;
  description: string;
  skills: Skill[];
};

const Skills = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const categories: Category[] = [
    {
      name: 'Frontend',
      description: 'Building clean, responsive, modern UI',
      skills: [
        { icon: <Code size={22} />, title: 'HTML', level: 85, gradient: 'from-orange-500 to-red-500' },
        { icon: <Code size={22} />, title: 'CSS', level: 80, gradient: 'from-sky-500 to-blue-600' },
        { icon: <Code size={22} />, title: 'JavaScript', level: 75, gradient: 'from-yellow-400 to-amber-500' },
        { icon: <Code size={22} />, title: 'TypeScript', level: 70, gradient: 'from-blue-500 to-blue-700' },
        { icon: <Layers size={22} />, title: 'React', level: 75, gradient: 'from-cyan-500 to-blue-600' },
        { icon: <Layers size={22} />, title: 'Tailwind CSS', level: 80, gradient: 'from-teal-400 to-cyan-500' },
        { icon: <Smartphone size={22} />, title: 'Responsive Design', level: 75, gradient: 'from-pink-500 to-rose-500' },
        { icon: <Layers size={22} />, title: 'UI/UX Design', level: 60, gradient: 'from-teal-500 to-cyan-600' },
      ],
    },
    {
      name: 'Backend',
      description: 'APIs, server-side logic, and databases',
      skills: [
        { icon: <Server size={22} />, title: 'Node.js', level: 70, gradient: 'from-emerald-500 to-green-600' },
        { icon: <Server size={22} />, title: 'Express.js', level: 65, gradient: 'from-slate-600 to-slate-900' },
        { icon: <Database size={22} />, title: 'MySQL / Database', level: 70, gradient: 'from-emerald-500 to-green-700' },
      ],
    },
    {
      name: 'Tools & Other',
      description: 'Developer tools & web fundamentals',
      skills: [
        { icon: <GitBranch size={22} />, title: 'Git', level: 80, gradient: 'from-violet-500 to-purple-600' },
        { icon: <Globe size={22} />, title: 'RESTful APIs', level: 70, gradient: 'from-yellow-500 to-yellow-600' },
        { icon: <Server size={22} />, title: 'Vite', level: 75, gradient: 'from-purple-500 to-indigo-600' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-indigo-50 to-blue-50" />
      <div className="absolute -top-24 left-10 w-80 h-80 bg-indigo-400/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 right-10 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full" />

      <div ref={elementRef} className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-5" />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Frontend, backend, and tools I use to build fast and modern web applications.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((cat, catIndex) => (
            <div
              key={catIndex}
              className={`bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-6 sm:p-10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Category header */}
              <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900">{cat.name}</h3>
                  <p className="text-gray-600">{cat.description}</p>
                </div>

                <span className="text-sm font-semibold text-blue-700 bg-blue-50 px-4 py-2 rounded-full w-fit">
                  {cat.skills.length} Skills
                </span>
              </div>

              {/* Skill grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {cat.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl p-5 border border-gray-100 bg-white hover:shadow-xl transition-all duration-200"
                  >
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-xl bg-gradient-to-r ${skill.gradient} text-white shadow-md`}
                        >
                          {skill.icon}
                        </div>
                        <div>
                          <p className="text-lg font-bold text-gray-900">{skill.title}</p>
                          <p className="text-sm text-gray-600">Proficiency</p>
                        </div>
                      </div>

                      <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.gradient} transition-all duration-1000 ease-out`}
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      />
                    </div>

                    <p className="mt-3 text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                      Working with {skill.title} in real projects.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
