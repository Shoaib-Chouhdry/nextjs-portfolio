import Link from "next/link"
import {FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa"

const social = [
    { icon: <FaGithub/>, path: "" },
    { icon: <FaLinkedin/>, path: "" },
    { icon: <FaTwitter/>, path: "" }
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