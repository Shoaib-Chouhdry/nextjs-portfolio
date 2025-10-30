import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import Socials from "@/components/ui/Socials";
import Photo from "@/components/ui/Photo";
// import Stats from "@/components/Stats";

export default function Header() {
  return (
    <section className="h-full">
       <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
         <div className="text-center xl:text-left order-2 xl:order-0">
            <span className="text-xl ">Software Developer</span>
            <h1>
              Hello i'm <br/> <span className="text-accent"> Shoaib</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/88">
              I am proficient in various programing languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" className="uppercase flex items-center gap-2">
                <span>Download Cv</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent 
                rounded-full flex justify-center items-center text-accent text-base hover:bg-accent 
                hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
         </div>
         <div className="order-1 xl:order-0 mb-8 xl:mb-0">
             <Photo/>
         </div>
        </div>
       </div> 
       {/* <Stats/> */}
    </section>
  );
}
