import { Code, Database, Globe, Layers, Smartphone, GitBranch } from 'lucide-react';

const Skills = () => {
  const skills = [
    { icon: <Code size={28} />, title: 'HTML', level: 85, bar: 'bg-red-600' },
    { icon: <Code size={28} />, title: 'CSS', level: 80, bar: 'bg-blue-600' },
    { icon: <Code size={28} />, title: 'JavaScript', level: 75, bar: 'bg-yellow-500' },
    { icon: <Database size={28} />, title: 'Database', level: 70, bar: 'bg-green-600' },
    { icon: <GitBranch size={28} />, title: 'Git', level: 80, bar: 'bg-purple-600' },
    { icon: <Smartphone size={28} />, title: 'Responsive Design', level: 75, bar: 'bg-pink-600' },
    { icon: <Globe size={28} />, title: 'Web Development', level: 75, bar: 'bg-blue-600' },
    { icon: <Layers size={28} />, title: 'UI/UX Design', level: 60, bar: 'bg-green-600' },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <div className="w-full flex justify-center px-4">

        {/* Skill Chart Box - 66% width */}
        <div className="w-full md:w-2/3 bg-white p-10 rounded-2xl shadow-xl border">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-3">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 text-center mb-10">
            A visual overview of my technical skills and tools I work with.
          </p>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index}>
                
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3 text-gray-800">
                    {skill.icon}
                    <span className="text-lg font-semibold">{skill.title}</span>
                  </div>
                  <span className="text-gray-700 font-medium">{skill.level}%</span>
                </div>

                <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                  <div
                    className={`${skill.bar} h-4`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
