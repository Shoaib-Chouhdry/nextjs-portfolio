"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center max-w-4xl px-6"
      >
        {/* Section Title */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl xl:text-6xl font-bold mb-6"
        >
          About <span className="text-accent">Me</span>
        </motion.h2>

        {/* Animated Accent Line */}
        <motion.div
          variants={fadeUp}
          className="w-24 h-1 bg-accent mx-auto mb-10 rounded-full"
        />

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-white/80 text-lg xl:text-xl leading-relaxed"
        >
          I am a <span className="text-accent font-semibold">Computer Science graduate</span> and 
          <span className="text-accent font-semibold"> Full Stack Developer</span> with
          professional experience in the <span className="text-accent font-semibold">MERN stack</span> and  <span className="text-accent font-semibold">Next.js</span>.
          <br /><br />
          I have built scalable <span className="text-accent font-semibold">eCommerce platforms</span>, 
          <span className="text-accent font-semibold">healthcare systems</span> and <span className="text-accent font-semibold">enterprise dashboards</span>.
          My focus is on creating modern UI experiences, secure backend architectures,
          and high-performance web applications.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
