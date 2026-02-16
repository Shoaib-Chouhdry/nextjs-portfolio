

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/ui/Socials";
import Photo from "@/components/ui/Photo";

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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Header = () => {
  return (
    <header className="relative py-8 xl:py-12 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] -z-10" />

      {/* NAVBAR */}
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Shoaib<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        <MobileNav />
      </div>

      {/* HERO */}
      <section className="container mx-auto pt-16 sm:pt-20 xl:pt-28 px-4 sm:px-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col xl:flex-row items-center justify-between"
        >
          {/* TEXT */}
          <div className="text-center xl:text-left order-2 xl:order-1 max-w-2xl px-4 sm:px-0">
            <motion.span
              variants={fadeUp}
              className="text-lg uppercase tracking-widest text-accent"
            >
              Software Engineer
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-bold leading-tight text-[clamp(2.2rem,6vw,4.5rem)]"
            >
             <span className="typewriter">
                 Hello I'm <span className="text-accent">Shoaib</span>
             </span>
            </motion.h1>
      

            <motion.p
              variants={fadeUp}
              className="mt-8 text-white/80 leading-relaxed text-[clamp(1rem,2.5vw,1.125rem)]"
            >
              Full Stack MERN & Next.js Developer focused on building
              scalable, performance-driven web applications including
              healthcare systems and modern eCommerce platforms.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col xl:flex-row items-center gap-8"
            >
              <a href="/cv/Shoaib.pdf" download target="_blank">
              
                <Button
                  variant="outline"
                  className="uppercase flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <Socials
                containerStyles="flex gap-6"
                iconStyles="
                  w-10 h-10 border border-accent rounded-full
                  flex justify-center items-center text-accent
                  hover:bg-accent hover:text-primary
                  hover:scale-110 transition-all duration-300
                "
              />
            </motion.div>
          </div>

          {/* PHOTO */}
          <motion.div
            variants={fadeUp}
            className="order-1 xl:order-2 mb-12 xl:mb-0 relative w-64 sm:w-72 xl:w-80 aspect-square mx-auto xl:mx-0"
          >
            {/* Optional soft glow behind (kept very light - you can delete this div if you want zero glow) */}
            <div className="absolute inset-0 bg-accent/15 rounded-full blur-3xl -z-10 opacity-70" />

            <div className="rounded-full overflow-hidden border border-accent/30 bg-black/20 backdrop-blur-sm p-1">
              <Photo
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </header>
  );
};

export default Header;


