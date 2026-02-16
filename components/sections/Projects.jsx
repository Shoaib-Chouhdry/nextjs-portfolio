"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

const projects = [
  {
    title: "Turquoise Food Ordering Website",
    shortDesc:
      "Modern food ordering platform with interactive UI & real-time features",
    fullDesc: `
Developed the frontend using React.js, implementing reusable components and animations with Framer Motion.
Integrated Redux Toolkit for state management to handle user interactions and cart functionalities.
Styled the entire application using Tailwind CSS for a modern, mobile-friendly UI.
Connected the frontend with a Node.js/Express backend and MongoDB database for persistent storage.
Features include dynamic menu display, order tracking, promotions, and a responsive interactive interface.
    `,
    link: "#",
    tags: ["React", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "MERN"],
    image: "/restaurant.PNG",
  },
  {
    title: "Tele Health ",
    shortDesc:
      "Healthcare platform with patient registration & appointment management",
    fullDesc: `
Designed and developed three dashboards for patients, doctors, and admin.
Implemented patient registration, appointment scheduling, and medical record tracking.
Built using React with reusable components and responsive UI.
Handled complex state management for dashboards, forms, and scheduling logic.
    `,
    link: "#",
    tags: ["React", "Dashboard", "Healthcare", "Tailwind CSS"],
    image: "/telihealth.PNG",
  },
    {
    title: "MERN Stack eCommerce Application",
    shortDesc: "Full-featured eCommerce platform with role-based auth, payments & admin panel",
    fullDesc: "Role-based authentication, Stripe payments, Cloudinary image uploads, admin and user dashboards built with MERN stack (MongoDB, Express, React, Node.js). Features include product filtering, cart management, order tracking, and secure checkout.",
    link: "https://github.com/Shoaib-Chouhdry/MERN-ecommerce-app",
    tags: ["MERN", "Stripe", "Redux", "Cloudinary"],
    image: "/ecom.PNG",
  },
  {
    title: "Healthcare Web Application (SNF)",
    shortDesc: "Next.js powered healthcare platform with real-time features",
    fullDesc: "Next.js based healthcare platform with real-time APIs, optimized routing, responsive design, secure authentication, patient dashboards, appointment scheduling, and performance optimizations.",
    link: "https://nextjs-portfolio-ashy-theta.vercel.app/",
    tags: ["Next.js", "React", "Tailwind", "Real-time API"],
    image: "/snf.PNG",
  },
  {
    title: "React Landing Page",
    shortDesc: "Modern, responsive landing page with smooth animations",
    fullDesc: "Fully responsive landing page built with React and Tailwind CSS. Includes hero section, features showcase, testimonials, pricing cards, and contact form — optimized for performance and mobile-first design.",
    link: "https://mern-ecom-frontend-five.vercel.app/",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/landing.PNG",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-accent/10 rounded-full blur-[120px] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight"
        >
          Featured <span className="text-accent">Projects</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 30px 70px -12px rgba(0, 255, 153, 0.22)",
                transition: { duration: 0.4 },
              }}
              className="
                group relative
                bg-black/20 backdrop-blur-md
                border border-white/10 rounded-2xl
                overflow-hidden
                shadow-lg
                hover:border-accent/40
                transition-all duration-500
              "
            >
              {/* Project Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
              </div>

              <div className="p-7 md:p-8">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-white/80 mb-5 text-base leading-relaxed">
                  {project.shortDesc}
                </p>

                <AnimatePresence>
                  {expanded === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mb-6"
                    >
                      <p className="text-white/75 leading-relaxed text-[15.5px] whitespace-pre-line">
                        {project.fullDesc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent/90 border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="
                      flex items-center gap-2
                      text-accent/80 hover:text-accent
                      text-sm font-medium
                      transition-colors duration-300
                    "
                  >
                    {expanded === index ? "Show Less" : "Read More"}
                    {expanded === index ? <FiChevronUp /> : <FiChevronDown />}
                  </button>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      text-accent/80 hover:text-accent
                      text-sm font-medium
                      transition-all duration-300
                      hover:translate-x-1
                    "
                  >
                    View Project
                    <FiExternalLink className="text-lg" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
