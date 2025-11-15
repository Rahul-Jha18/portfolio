import profilePic from '../assets/p2.jpg'; // Make sure this path is correct

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center shadow-xl overflow-hidden">
                <img 
                  src={profilePic} 
                  alt="Rahul Kumar Jha" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Hello! I'm Rahul Kumar Jha
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate hardworking IT student who always seeks to learn and grow in the tech world.
            Currently honing my skills through a hands-on internship at Nepal Life Insurance as web developer.
              I enjoy building practical, user-friendly websites and small apps using modern tools.
             
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Outside of coding, I love listening to music, playing games, sketching, and traveling to new places. 
              I enjoy exploring creative ideas, learning new things, and spending time with friends and family.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-600 mb-1">5+</p>
                <p className="text-gray-600">Projects Worked On</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-indigo-600 mb-1">Ongoing</p>
                <p className="text-gray-600">Internship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
