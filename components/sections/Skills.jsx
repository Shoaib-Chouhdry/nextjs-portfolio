"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiStripe,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, rotate: true },
  { name: "Next.js", icon: SiNextdotjs, rotate: true },
  { name: "TypeScript", icon: SiTypescript, rotate: false },
  { name: "JavaScript", icon: SiJavascript, rotate: false },
  { name: "Node.js", icon: SiNodedotjs, rotate: false },
  { name: "Express.js", icon: SiExpress, rotate: false },
  { name: "Redux Toolkit", icon: SiRedux, rotate: true },
  { name: "MongoDB", icon: SiMongodb, rotate: false },
  { name: "MySQL", icon: SiMysql, rotate: false },
  { name: "Tailwind CSS", icon: SiTailwindcss, rotate: true },
  { name: "Stripe", icon: SiStripe, rotate: false },
  { name: "REST API", icon: null, rotate: false },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background glow - slightly smaller */}
      <div className="absolute w-[450px] md:w-[700px] h-[450px] md:h-[700px] bg-accent/10 rounded-full blur-[120px] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-5 md:px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16"
        >
          Technical <span className="text-accent">Skills</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.07, y: -5, transition: { duration: 0.3 } }}
                className="group relative flex flex-col items-center justify-center py-6 px-4 md:py-7 md:px-5 rounded-xl bg-black/20 backdrop-blur-md border border-white/8 hover:border-accent/40 transition-all duration-400 shadow-lg hover:shadow-xl"
              >
                <div className="relative mb-4 w-16 h-16 md:w-18 md:h-18 flex items-center justify-center">
                  {Icon ? (
                    <motion.div
                      animate={skill.rotate ? { rotate: 360 } : {}}
                      transition={
                        skill.rotate
                          ? { duration: 18, repeat: Infinity, ease: "linear" }
                          : {}
                      }
                    >
                      <Icon className="w-12 h-12 md:w-14 md:h-14 text-accent/80 group-hover:text-accent transition-colors duration-500" />
                    </motion.div>
                  ) : (
                    // Fallback for REST API
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-accent/80 font-bold text-2xl md:text-3xl group-hover:text-accent transition-colors">
                      API
                    </div>
                  )}
                </div>

                {/* Text – completely static */}
                <span className="text-base md:text-lg font-medium text-white/90 pointer-events-none text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
