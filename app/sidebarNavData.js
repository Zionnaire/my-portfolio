import { AiFillHome} from "react-icons/ai"
 import  {BsFillPersonFill} from "react-icons/bs"
 import {SiSkillshare} from "react-icons/si" 
 import {MdWorkHistory} from "react-icons/md" 
 import {FcContacts} from "react-icons/fc"  
 import {FaBlog } from "react-icons/fa"


export const nav = [
    {
        title: "Home",
        bg: "red",
        Icon: AiFillHome
    },
    {
        title: "Profile",
        bg: "#ff6",
        Icon: BsFillPersonFill
    },
    {
        title: "My Stacks",
        bg: "green",
        Icon: SiSkillshare
    },
    {
        title: "Projects",
        bg: "blue",
        Icon: MdWorkHistory
    },
    {
        title: "Hire Me",
        bg: "pink",
        Icon: FcContacts
    },
    {
        title: "Blogs",
        bg: "tomato",
        Icon: FaBlog
    },
]