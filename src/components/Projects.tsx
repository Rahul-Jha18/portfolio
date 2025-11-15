import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FitNep',
      description: 'A fitness platform offering personalized workouts, diet routines, and trainer appointments with a premium subscription model.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800', // Dumbbell image
      tags: ['HTML', 'CSS', 'Node.js', 'MySQL'],
      githubLink: 'https://github.com/Rahul-Jha18/FitNep-5th-sem-project',
    },
    {
      title: 'MeroPalika',
      description: 'A municipal services platform providing citizens with easy access to local government information and online services.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML','Django','Bootstrap', 'MySQL'],
      githubLink: 'https://github.com/Rahul-Jha18/MeroPalika',
    },
    {
      title: 'E-commerce SportHub',
      description: 'A full-stack e-commerce platform for sports products with payment integration, product management, and shopping cart features. Still under development.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      githubLink: 'https://github.com/Rahul-Jha18/SportZone',
    },
    {
      title: 'IMS (Inventory Management System)',
      description: 'A web-based inventory management system for tracking and keeping records of assets and other data of organization. Still under development.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'Express', 'MySQL'],
      githubLink: 'https://github.com/Rahul-Jha18/Project-IMS',
    },
    {
      title: 'Calculator App',
      description: 'A simple, user-friendly calculator application built using JavaScript for quick calculations and responsive design on all devices.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/Rahul-Jha18/Calculator-page-using-Js',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects demonstrating my skills and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
