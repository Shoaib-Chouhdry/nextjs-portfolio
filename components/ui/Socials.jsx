import Link from "next/link"
import {FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa"

const social = [
    { icon: <FaGithub/>, path: "https://github.com/Shoaib-Chouhdry" },
    { icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/muhammad-shoaib-b92433248" },
   
];
const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      { social.map((social,index)=>{
         return <Link href={social.path} key={index} className={iconStyles}>
                   {social.icon}
                </Link>
      })}
    </div>
  )
}

export default Socials