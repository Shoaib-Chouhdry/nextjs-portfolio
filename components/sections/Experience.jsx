"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react"; // ← add lucide-react icons

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "IIFA Tech – Lahore",
    duration: "1/2025 –3/2025 ",
    description:
      "Developed responsive web applications, integrated Stripe payments, implemented Redux Toolkit for state management, and built RESTful APIs using Node.js and Express.",
  },
  {
    role: "React / Next.js Developer",
    company: "AnchorsTech – Lahore",
    duration: "2025 – 2026",
    description:
      "Built a healthcare web application using React and Next.js with real-time API integration, optimized routing, and ensured a seamless user experience across devices.",
  },
  {
    role: "WordPress Developer",
    company: "JK Media – Islamabad",
    duration: "2023 – 2024",
    description:
      "Created reusable Elementor templates, optimized eCommerce websites, and reduced project setup time by 50% while maintaining consistent UI.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.3 },
  },
};

const itemVariants = (index) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -60 : 60, scale: 0.92 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20 bg-gradient-to-r from-white to-accent/70 bg-clip-text text-transparent"
        >
          Work Experience
        </motion.h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/30 via-accent/20 to-transparent md:mx-auto" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 md:space-y-16"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                variants={itemVariants(index)}
                whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.3 } }}
                className={`
                  relative flex flex-col md:flex-row gap-6 md:gap-10 items-start
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                {/* Timeline dot + year badge */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-accent/80 border-4 border-black/60 shadow-lg z-10" />
                  <div className="mt-2 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-accent/90 border border-accent/30">
                    {exp.duration}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`
                    relative w-full md:w-5/12
                    bg-gradient-to-br from-black/25 via-black/15 to-black/5
                    backdrop-blur-xl border border-white/10 rounded-2xl
                    p-7 md:p-9
                    shadow-[0_15px_40px_rgba(0,0,0,0.4)]
                    hover:shadow-[0_25px_60px_rgba(0,255,153,0.18)]
                    hover:border-accent/40
                    transition-all duration-400
                    ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                  `}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Briefcase className="w-7 h-7 text-accent/80" />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-accent/80 font-medium text-sm md:text-base">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed text-base">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;