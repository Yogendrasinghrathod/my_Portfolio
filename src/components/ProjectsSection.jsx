import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EduMa - Online Learning Platform",
    description:
      "A comprehensive, full-stack Coursera-style Learning Management System (LMS) enabling instructors to create and sell courses, while providing students with a secure and intuitive learning experience. Features include robust user authentication (custom JWT and Firebase), secure payment integration with Razorpay, efficient media handling via Cloudinary for video lectures and profile images, and a highly responsive UI built with React.js, Tailwind CSS, and ShadCN, supporting both light/dark modes and optimized for all device sizes.",
    image: "/projects/eduMa.jpg",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Cloudinary",
      "Razorpay",
      "JWT",
      "Firebase Auth",
      "Tailwind CSS",
      "ShadCN",
      "Responsive Design",
      "LMS",
    ],
    demoUrl: "https://edu-ma.netlify.app/",
    githubUrl: "https://github.com/Yogendrasinghrathod/Edu-Ma",
  },
  {
    id: 2,
    title: "VideoCon - Video Chat Application",
    description:
      "A robust, real-time video chat application enabling one-to-one calls and secure communication. Built with React.js for a responsive frontend and Node.js/Express.js for the backend, it leverages WebRTC for direct peer-to-peer video streaming and Socket.IO for real-time signaling and integrated chat functionality. The application includes a comprehensive user authentication system, a friend request management feature, and stores user data, connections, and chat history in MongoDB.",
    image: "/projects/videoCon.png",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebRTC",
      "Socket.IO",
      "Real-time Communication",
      "User Authentication",
      "Chat Functionality",
      "Responsive Design",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Yogendrasinghrathod/VideoCon",
  },
  {
    id: 3,
    title: "AI Medical Voice Agent",
    description:
      "An intelligent AI-powered medical voice assistant that enables users to interact through real-time voice conversations for symptom checking and basic health guidance. Built with Next.js and React for a modern responsive UI, it integrates Vapi AI for voice calling and OpenAI for generating human-like medical responses. The system supports multiple doctor personas (like General Physician, Dermatologist, Pediatrician, etc.), session-based conversation history, and generates structured medical reports after each call. It includes secure authentication, role-based access, and stores user sessions and reports in PostgreSQL using Prisma ORM for reliable data management.",
    image: "/projects/aiMedicalVoiceAgent.png",
    tags: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Vapi AI",
      "OpenAI",
      "Real-time Voice Calling",
      "AI Doctor Agents",
      "Medical Report Generation",
      "Authentication",
      "Clerk",
      "PostgreSQL",
    ],
    demoUrl: "https://medicalassist.netlify.app/dashboard",
    githubUrl: "https://github.com/Yogendrasinghrathod",
  },
  {
    id: 4,
    title: "LinkedIn DM GPT Reply Helper",
    description:
      "A Chrome extension that intelligently generates professional reply suggestions for LinkedIn messages using Google Gemini AI. The extension automatically extracts the last message from active LinkedIn conversations and provides 5 contextually appropriate, polite, and professional reply options. Built with vanilla JavaScript, it features a clean popup interface, robust message extraction using multiple DOM parsing strategies, and seamless integration with Google's Gemini API. The extension includes intelligent content script injection, retry mechanisms for reliable message extraction, and one-click copy-to-clipboard functionality for quick responses. It handles LinkedIn's dynamic content loading, supports multiple message format variations, and includes comprehensive error handling for API failures, network issues, and content extraction challenges.",
    image: "/projects/linkedinExtension.png",
    tags: [
      "Chrome Extension",
      "JavaScript",
      "Google Gemini AI",
      "LinkedIn Integration",
      "Content Scripts",
      "Background Scripts",
      "DOM Parsing",
      "API Integration",
      "Message Extraction",
      "Natural Language Processing",
      "Professional Communication",
      "Manifest V3",
    ],
    demoUrl: "https://github.com/Yogendrasinghrathod/LinkedIn_Extension",
    githubUrl: "https://github.com/Yogendrasinghrathod/LinkedIn_Extension",
  },
  {
    id: 5,
    title: "Todo Monolithic Architecture App",
    description:
      "A full-stack TODO application built with a monolithic architecture, featuring React frontend and Node.js/Express backend served from a single Docker container. The application includes user authentication with JWT tokens, CRUD operations for todos, and MongoDB database integration. Built with modern tech stack including React, Express.js, MongoDB, and Docker, it supports multiple deployment configurations (development, production, and EC2). The monolithic setup bundles the React build directly into the Node.js server image, allowing both frontend and backend to be served from the same port and origin. Features include secure cookie-based authentication, RESTful API endpoints, responsive UI with Tailwind CSS, and comprehensive Docker Compose configurations for different environments. The EC2 deployment setup includes automated build processes, environment variable management, and persistent MongoDB data storage.",
    image: "/projects/todoMonolithic.png",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Docker Compose",
      "JWT Authentication",
      "RESTful API",
      "Monolithic Architecture",
      "EC2 Deployment",
      "Tailwind CSS",
      "Full-Stack Development",
      "Multi-Stage Docker Build",
      "Environment Configuration",
    ],
    demoUrl:
      "https://github.com/Yogendrasinghrathod/Todo_monolithic_architecture",
    githubUrl:
      "https://github.com/Yogendrasinghrathod/Todo_monolithic_architecture",
  },
  {
    id: 6,
    title: "Todo Microservices Architecture App",
    description:
      "A full-stack TODO application built with a microservices architecture using the Moleculer framework. The application features a distributed system with multiple independent services including API Gateway, Authentication, Todo Management, Products, and Greeter services. Built with modern microservices patterns including service discovery, message-based communication via NATS transporter, and RESTful API endpoints. The architecture supports horizontal scaling, fault tolerance, and independent service deployment. Features include JWT-based authentication with secure cookie handling, CRUD operations for todos with authentication middleware, MongoDB database integration with Mongoose, and comprehensive containerization with Docker and Docker Compose. The project includes Kubernetes deployment configurations for production environments, Traefik reverse proxy for load balancing, and service health monitoring. Each microservice can be independently scaled and deployed, following best practices for microservices architecture including service isolation, API gateway pattern, and message queue communication.",
    image: "/projects/todoMicroservices.png",
    tags: [
      "Moleculer",
      "Microservices Architecture",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "NATS",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "JWT Authentication",
      "RESTful API",
      "API Gateway",
      "Service Discovery",
      "Message Queue",
      "Traefik",
      "Horizontal Scaling",
      "Fault Tolerance",
      "Distributed Systems",
      "Containerization",
      "Full-Stack Development",
    ],
    demoUrl:
      "https://github.com/Yogendrasinghrathod/Todo_microservice_architecture",
    githubUrl:
      "https://github.com/Yogendrasinghrathod/Todo_microservice_architecture",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here&#39;s a look at my recent projects, each meticulously crafted for
          optimal performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-36">
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
                    // eslint-disable-next-line react/jsx-key
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
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


export default ProjectsSection;