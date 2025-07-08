import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
  "id": 1,
  "title": "EduMa - Online Learning Platform",
  "description": "A comprehensive, full-stack Coursera-style Learning Management System (LMS) enabling instructors to create and sell courses, while providing students with a secure and intuitive learning experience. Features include robust user authentication (custom JWT and Firebase), secure payment integration with Razorpay, efficient media handling via Cloudinary for video lectures and profile images, and a highly responsive UI built with React.js, Tailwind CSS, and ShadCN, supporting both light/dark modes and optimized for all device sizes.",
  "image": "/projects/eduMa.jpg",
  "tags": ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Cloudinary", "Razorpay", "JWT", "Firebase Auth", "Tailwind CSS", "ShadCN", "Responsive Design", "LMS"],
  "demoUrl": "https://edu-ma.netlify.app/",
  "githubUrl": "https://github.com/Yogendrasinghrathod/Edu-Ma"
},
  {
  "id": 2,
  "title": "VideoCon - Video Chat Application",
  "description": "A robust, real-time video chat application enabling one-to-one calls and secure communication. Built with React.js for a responsive frontend and Node.js/Express.js for the backend, it leverages WebRTC for direct peer-to-peer video streaming and Socket.IO for real-time signaling and integrated chat functionality. The application includes a comprehensive user authentication system, a friend request management feature, and stores user data, connections, and chat history in MongoDB.",
  "image": "",
  "tags": ["React.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "Socket.IO", "Real-time Communication", "User Authentication", "Chat Functionality", "Responsive Design"],
  "demoUrl": "#",
  "githubUrl": "https://github.com/Yogendrasinghrathod/VideoCon"
},
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here's a look at my recent projects, each meticulously crafted for optimal performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Yogendrasinghrathod"
          >
            My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
