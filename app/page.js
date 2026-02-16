import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import Socials from "@/components/ui/Socials";
import Photo from "@/components/ui/Photo";
import Header from "./header/page";
import MultiStepForm from "./contact/page";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import ContactFooter from "./contact/page";

// import Stats from "@/components/Stats";

export default function Home() {
  return (
     <>
      <main className="container mx-auto px-4">
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ContactFooter/>
      </main>
     </>
  );
}
