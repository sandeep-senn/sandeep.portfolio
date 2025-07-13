"use client";

const projects = [
  {
    title: "AI Mentor Platform",
    description: "Personalized AI for Code Debugging, Code Converting with AI chatBOT",
    image: "/Mentor.png",
    link: "https://github.com/sandeep-senn/AI-Powered-Mentor-Platform",
    live: "https://ai-powered-mentor-platform-bven.vercel.app/",
  },
  {
    title: "Fashify",
    description: "Landing page for a fashion store.",
    image: "/gold.png",
    link: "https://github.com/sandeep-senn/Fashify",
    live: "https://e-commerce-sandeep-sen.vercel.app/",
  },
  {
    title: "GoldLace",
    description: "E commerce platform for digital jewellery products.",
    image: "/goldlace.png",
    link: "https://github.com/sandeep-senn/GoldLace",
    live: "https://gold-lace.vercel.app/",
  },
  {
    title: "Be Productive",
    description: "A productivity app to manage tasks and goals.",
    image: "/prod.png",
    link: "https://github.com/sandeep-senn/Be-Productive",
    live: "https://be-productive-one.vercel.app/",
  },
  {
    title: "Jarvis AI",
    description: "A personalized voice assistant for daily tasks.",
    image: "/jarvis.png",
    link: "https://github.com/sandeep-senn/Jarvis-AI",
    live: "https://jarvis-ai-plum.vercel.app/",
  },
  {
    title: "User Authentication System",
    description: "Secure user authentication with JWT.",
    image: "/auth.png",
    link: "https://github.com/sandeep-senn/user-authentication-system",
    live: "https://user-authentication-system-sand.vercel.app/",
  },
  {
    title: "CarFix Website",
    description: "Modern garage service site with UI polish.",
    image: "/carfix.png",
    link: "https://github.com/sandeep-senn/CarFix",
    live: "https://car-fix.vercel.app/",
  },
  {
    title: "Notes App",
    description: "Basic Notes Management app for you!",
    image: "/goodnotes.png",
    link: "https://github.com/sandeep-senn/notes-management-system",
    live: "https://notes-management-app-pg69.vercel.app/",
  },
  {
    title: "User Management System",
    description: "User Management system to store user data.",
    image: "/user.png",
    link: "https://github.com/sandeep-senn/User-Management-System",
    live: "https://user-management-system-lilac.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-white text-black px-6 py-20 rounded-b-[80px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-blue-600 text-center mb-16 animate-bounce">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, index) => (
            <div
              key={index}
              className="bg-[#f8f9fa] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-blue-700">{p.title}</h3>
                <p className="text-gray-700 text-sm">{p.description}</p>
                <div className="mt-4 flex gap-4">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all"
                  >
                    Live
                  </a>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition-all"
                  >
                    GitHub
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
