// "use client"
// import {motion} from "framer-motion"
// import Image from "next/image"


// const Photo = () => {
//   return (
//     <div className="w-full h-full relative">
//       <motion.div 
//          initial={{opacity:0}} 
//          animate={{
//             opacity:1,
//             transition: {delay:1, duration:0.4,ease:"easeIn"}
//         }}
//       >
//         <motion.div 
//           initial={{opacity:0}} 
//           animate={{
//             opacity:1,
//             transition: {delay:1, duration:0.4,ease:"easeInOut"}
//           }}
//           className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute "
//         >
//             <Image src="/profile.jpeg" priority quality={100} fill alt="" className="object-contain rounded-full"/>
//         </motion.div>
//         <motion.div>
//             <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
//               fill="transparent"
//               viewBox="0 0 506 506"
//               xmlns="http://www.w3.org/200/svg"
//             > 
//                 <motion.circle 
//                   cx="253" 
//                   cy="253" 
//                   r="250" 
//                   stroke="#00ff99" 
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   initial={{strokeDasharray: "24 10 0 0"}}
//                   animate={{
//                      strokeDasharray:  ["15 120 25 25","16 25 92 72","4 250 22 22"],
//                      rotate: [120,360],
//                   }}
//                   transition={{
//                     duration:20,
//                     repeat:Infinity,
//                     repeatType:"reverse"

//                   }}
//                 />
//             </motion.svg>
//         </motion.div>
//       </motion.div>  
//     </div>
//   )
// }

// export default Photo

// "use client"
// import {motion} from "framer-motion"
// import Image from "next/image"


// const Photo = () => {
//   return (
//     <div className="w-full h-full relative">
//       <motion.div 
//          initial={{opacity:0}} 
//          animate={{
//             opacity:1,
//             transition: {delay:1, duration:0.4,ease:"easeIn"}
//         }}
//       >
//         <motion.div 
//           initial={{opacity:0}} 
//           animate={{
//             opacity:1,
//             transition: {delay:1, duration:0.4,ease:"easeInOut"}
//           }}
//           className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute "
//         >
//             <Image src="/profile.jpeg" priority quality={100} fill alt="" className="object-contain rounded-full"/>
//         </motion.div>
//         <motion.div>
//             <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
//               fill="transparent"
//               viewBox="0 0 506 506"
//               xmlns="http://www.w3.org/200/svg"
//             > 
//                 <motion.circle 
//                   cx="253" 
//                   cy="253" 
//                   r="250" 
//                   stroke="#00ff99" 
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   initial={{strokeDasharray: "24 10 0 0"}}
//                   animate={{
//                      strokeDasharray:  ["15 120 25 25","16 25 92 72","4 250 22 22"],
//                      rotate: [120,360],
//                   }}
//                   transition={{
//                     duration:20,
//                     repeat:Infinity,
//                     repeatType:"reverse"

//                   }}
//                 />
//             </motion.svg>
//         </motion.div>
//       </motion.div>  
//     </div>
//   )
// }

// export default Photo


"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Outer rotating ring – subtle & elegant */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-accent/40"
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Optional second ring going opposite direction for depth */}
      <motion.div
        className="absolute inset-[6px] rounded-full border border-accent/20"
        animate={{ rotate: -360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Photo with fade-in + subtle hover lift */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { delay: 0.8, duration: 1, ease: "easeOut" },
        }}
        whileHover={{ scale: 1.04, y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="relative w-[260px] h-[260px] xl:w-[380px] xl:h-[380px] rounded-full overflow-hidden shadow-xl shadow-black/30"
      >
        <Image
          src="/profile.jpeg"
          priority
          quality={100}
          fill
          alt="Shoaib - Full Stack Developer"
          className="object-cover"
        />
      </motion.div>

      {/* Very soft ambient glow */}
      <div className="absolute inset-[-20%] rounded-full bg-accent/10 blur-3xl -z-10 opacity-60 pointer-events-none" />
    </div>
  );
};

export default Photo;