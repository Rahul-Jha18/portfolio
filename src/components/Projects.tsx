import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  shortDetails: string;
  image: string;
  tags: string[];
  githubLink: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Asset Management System (Nepal Life Insurance)",
      description:
        "A full-stack system developed during my internship to manage and track organizational assets.",
      shortDetails:
        "Internship project at Nepal Life Insurance. Includes asset tracking, role-based access, reporting, and secure CRUD operations.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Node.js", "Express", "MySQL"],
      githubLink: "https://github.com/Rahul-Jha18/Asset-Management-System",
    },
    {
      title: "AI Interview Coach",
      description:
        "An AI-powered interview practice platform simulating real interview flows.",
      shortDetails:
        "AI-based interview preparation tool with dynamic questions, feedback generation, and real interview simulation.",
      image:
        "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["JavaScript", "AI", "Node.js"],
      githubLink: "https://github.com/Rahul-Jha18/AI-Interview-Coach",
    },
    {
      title: "SportHub – E-commerce Platform",
      description:
        "A full-stack e-commerce platform for sports items with cart and backend APIs.",
      shortDetails:
        "E-commerce system with product listing, cart, checkout flow, admin management, and REST APIs.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Node.js", "Express", "MySQL"],
      githubLink: "https://github.com/Rahul-Jha18/SportHub-E-commerce-",
    },
    {
      title: "BizSewa – Digital Business Renewal",
      description:
        "An e-governance system to register and renew business licenses digitally.",
      shortDetails:
        "Government-focused digital platform for business registration and renewal, reducing paperwork and delays.",
      image:
        "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["JavaScript", "E-Governance"],
      githubLink:
        "https://github.com/Rahul-Jha18/BizSewa---Digital-Business-Renewal-System",
    },
    {
      title: "FitNep – Fitness Platform",
      description:
        "A fitness platform offering workouts, diet plans, and trainer appointments.",
      shortDetails:
        "Fitness web app with personalized workout plans, diet routines, and premium trainer booking system.",
      image:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["HTML", "CSS", "Node.js", "MySQL"],
      githubLink: "https://github.com/Rahul-Jha18/FitNep-5th-sem-project",
    },
    {
      title: "MeroPalika",
      description:
        "A municipal service portal providing access to local government services.",
      shortDetails:
        "Municipal portal that helps citizens access local government information and public services online.",
      image:
        "https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["HTML", "Django", "Bootstrap"],
      githubLink: "https://github.com/Rahul-Jha18/MeroPalika",
    },
  ];

  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];
  const [activeTag, setActiveTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of academic, internship, and personal projects showcasing
            my full-stack skills.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${
                activeTag === tag
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-blue-50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    <Github size={18} /> Code
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={18} /> Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILS MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
              
              {/* Header Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur rounded-full p-2 text-gray-700 hover:bg-white hover:scale-105 transition"
              >
                ✕
              </button>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedProject.shortDetails}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                  >
                    <Github size={18} /> View Code
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-lg text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

    </section>
  );
};

export default Projects;
