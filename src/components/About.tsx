import { useState, useEffect } from 'react';
import profilePic from '../assets/p2.jpg';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';

const About = () => {
  const [projects, setProjects] = useState(0);

  // simple counter animation
  useEffect(() => {
    let start = 0;
    const end = 7;
    const interval = setInterval(() => {
      start += 1;
      setProjects(start);
      if (start === end) clearInterval(interval);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-indigo-50 to-blue-100" />

      {/* subtle glow */}
      <div className="absolute -top-20 right-20 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-400/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-16 animate-[fadeUp_800ms_ease-out]">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* image */}
          <div className="flex justify-center animate-[fadeUp_1000ms_ease-out]">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 blur-xl opacity-40" />
              <img
                src={profilePic}
                alt="Rahul Kumar Jha"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </div>

          {/* content */}
          <div className="space-y-6 animate-[fadeUp_1200ms_ease-out]">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Hello, I’m Rahul Kumar Jha 👋
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed">
              I’m a passionate and hardworking IT student who enjoys building modern,
              responsive web applications. Currently, I’m gaining hands-on experience
              as a <span className="font-semibold text-blue-600">Web Developer Intern</span> at
              Nepal Life Insurance.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              I love turning ideas into real projects using clean UI, good UX, and
              efficient code. Outside tech, I enjoy music, sketching, gaming,
              and exploring new places.
            </p>

            {/* info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="bg-white/70 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-xl transition">
                <GraduationCap className="text-blue-600 mb-2" />
                <p className="font-semibold text-gray-900">IT Student</p>
                <p className="text-sm text-gray-600">Learning & Growing</p>
              </div>

              <div className="bg-white/70 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-xl transition">
                <Briefcase className="text-indigo-600 mb-2" />
                <p className="font-semibold text-gray-900">{projects}+</p>
                <p className="text-sm text-gray-600">Projects Built</p>
              </div>

              <div className="bg-white/70 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-xl transition">
                <Heart className="text-pink-600 mb-2" />
                <p className="font-semibold text-gray-900">Passionate</p>
                <p className="text-sm text-gray-600">About Full Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default About;
