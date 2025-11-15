import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Rahul Kumar Jha
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 max-w-3xl mx-auto">
            A Passionate Web Developer & Lifelong Learner
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            A dedicated web developer with a knack for creating dynamic and responsive web applications.
           
          </p>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get In Touch
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-gray-400"
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
    </section>
  );
};

export default Hero;
