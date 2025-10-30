import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import Socials from "@/components/ui/Socials";
import Photo from "@/components/ui/Photo";
import Header from "./header/page";
import MultiStepForm from "./contact/page";
// import Stats from "@/components/Stats";

export default function Home() {
  return (
     <>
     <Header/>
     <MultiStepForm/>
     </>
  );
}
