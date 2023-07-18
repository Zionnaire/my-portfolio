import { useState } from "react";
import styles from "./side.module.css";



const SidebarNav = ({bg, title, Icon}) => {
    const [active, setActive] = useState(false)
    

    return (
        <li 
        style={{ '--bg': bg }}
        className={active ? styles.active : ""}
        onClick={() => setActive(!active)}>
        <a href="#">
            <div className={styles.icon}>
            <Icon />
            </div>
            <div className={styles.text}>{title}</div>
        </a>
        </li>
    )
}



export default SidebarNav