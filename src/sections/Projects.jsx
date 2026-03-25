import React from 'react'
import { ArrowUpRight} from "lucide-react";
import { FaGithub } from "react-icons/fa"; // react-icons
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "School Management System (MERN Stack)",
    description:
      "Developed a full-featured web application using MongoDB, Express,React, and Node.js to manage students, staff, attendance, and user profiles with secure authentication. The systemincludes application, events, and announcement management, real-time notifications, and alerts. It also supports secure file uploads for images and documents, providing a complete digital solution for school operations",
    image: "/projects/project1.jpg",
    tags: ["React", "Javascript", "Expressjs", "MongoDb"],
    link: "#",
    github:
      "https://github.com/Akimsan/SCHOOL_MANAGEMENT_SYSTEM_USING-MERN_STACK",
  },
  {
    title: "Movie-Application react with moviedb.org api",
    description:
      ",Developed a responsive web app using React, Vite, Bootstrap, and the TMDB API. Users can browse recently released movies, search for movies, view detailed ratings and reviews, and watch trailers by clicking on a movie. Implemented dynamic search, interactive UI, and real-time API integration to provide a smooth movie browsing experience.",
    image: "/projects/project2.jpg",
    tags: ["Next.js", "javascript", "moviedb.org api", "Tailwind"],
    link: "#",
    github: "https://github.com/Akimsan/Movie-Application",
  },
  {
    title: "E-commerce-Frontend",
    description:
      "A React-based online store UI with product search, category filtering, price range filtering, and a shopping cart. Fully responsive and user-friendly, this project demonstrates dynamic product display, interactive filtering, and cart management using LocalStorage.",
    image: "/projects/project03.jpg",
    tags: ["React", "CSS"],
    link: "#",
    github: "#https://github.com/Akimsan/Mini-E-Commerce-Front-End",
  },
  {
    title: "Todo App with Google Authentication",
    description:
      "Developed a mobile todo application using React Native and Firebase (Firestore) with Google Authentication for secure user login. The app allows users to add, manage, and store tasks in real-time with a simple and user-friendly interface.",
    image: "/projects/project4.jpg",
    tags: ["ReactNative", "Firebase"],
    link: "#",
    github: "#https://github.com/Akimsan/authentication_with_gooogle_auth",
  },
  {
    title: "MediCare (Final Year Group Project)",
    description:
      "Currently developing a healthcare web application using Angular andOpenAI API. The system allows users to upload prescriptions to identify required medicines and connect withavailable consultants. It also enables users to input symptoms in natural language and receive AI-based disease suggestions, providing an intelligent and user-friendly healthcare support solution. ",
    image: "/projects/project5.jpg",
    tags: ["Angular", "Python", "OpenAi"],
    alt:"Ongoing",
    link: "#",
    github: "https://github.com/Akimsan/MediCare",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
}

export default Projects;