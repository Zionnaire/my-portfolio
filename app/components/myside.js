"use client"; // This is a client component 👈🏽
import { useState } from 'react';
import { AiFillApple, AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { SiSkillshare } from 'react-icons/si';
import { MdWork, MdHistory } from 'react-icons/md';
import { FcContacts } from 'react-icons/fc';
import { FaBlog } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = (e) => {
    const menuItems = Array.from(document.querySelectorAll('.Menulist li'));
    menuItems.forEach((item) => item.classList.remove('active'));
    e.target.parentNode.classList.add('active');
  };

  return (
    <>
      <div className={`menuToggle ${isActive ? 'active' : ''}`} onClick={handleMenuToggle}></div>
      <div className={`sidebar ${isActive ? 'active' : ''}`}>
        <ul>
          <div>
            <li style={{ '--bg': '#383F51' }} className="logo">
              <a href="#">
              <div className="icon">
                  <div className="image">
                    <img src="./zionnaire.jpeg" alt="" />
                  </div>
                </div>
                <div className="text">Zionnaire Concepts</div>
              </a>
            </li>
          </div>
          <div className="Menulist">
            <li style={{ '--bg': '#FF5F5F' }} className="active">
              <a href="#" onClick={handleLinkClick}>
                <div className="icon"><AiFillHome /></div>
                <div className="text">Home</div>
              </a>
            </li>
            <li style={{ '--bg': '#FFC371' }}>
              <Link href="/profile" onClick={handleLinkClick}>
                <div className="icon"><BsFillPersonFill /></div>
                <div className="text">Profile</div>
              </Link>
            </li>
            <li style={{ '--bg': '#70C37F' }}>
              <a href="#" onClick={handleLinkClick}>
                <div className="icon"><SiSkillshare /></div>
                <div className="text">My Stacks</div>
              </a>
            </li>
            <li style={{ '--bg': '#5199E4' }}>
              <a href="#" onClick={handleLinkClick}>
                <div className="icon"><MdWork /></div>
                <div className="text">Projects</div>
              </a>
            </li>
            <li style={{ '--bg': '#FF6BA2' }}>
              <a href="#" onClick={handleLinkClick}>
                <div className="icon"><FcContacts /></div>
                <div className="text">Hire Me</div>
              </a>
            </li>
            <li style={{ '--bg': '#FF6BA2' }}>
              <a href="#" onClick={handleLinkClick}>
                <div className="icon"><FaBlog /></div>
                <div className="text">Blogs</div>
              </a>
            </li>
          </div>
          <div className="bottom">
            <li style={{ '--bg': '#383F51' }}>
              <a href="#">
                <div className="icon">
                  <div className="image">
                    <img src="./myPic.jpeg" alt="" />
                  </div>
                </div>
                <div className="text">Zionnaire</div>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}


// function SidebarMenu({ isMenuActive, handleMenuToggle }) {
  
//   return (
//     <><div class={styles.menuToggle} onClick={handleMenuToggle}></div>
//     <div className={styles.sidebar  + (isMenuActive ? ' ' + styles.active : '')}>
//       <ul>
//         <div>
//           <li style={{ '--bg': '#333' }} className="logo" >
//             <a href="#">
//               <div className={styles.icon}>
//                 <AiFillApple />
//               </div>
//               <div className={styles.text}>Website logo</div>
//             </a>
//           </li>
//         </div>
//         <div className={styles.Menulist}>
//           {
//             nav.map( ({title, bg, Icon}) => (
//               <SidebarNav title={title} bg={bg} Icon={Icon} />
//             )  )
//           }
//         </div>
//         <div className={styles.bottom}>
//           <li style={{ '--bg': '#333' }}>
//             <a href="#">
//               <div className={styles.icon}>
//                 <div className={styles.image}>
//                   <img src="/myPic.jpeg" alt="my-pic" />
//                 </div>
//               </div>
//               <div className={styles.text}>Zionnaire Concepts</div>
//             </a>
//           </li>
//           <li style={{ '--bg': '#333' }}>
//             <a href="#">
//               <div className={styles.icon}>
//                 <BiLogOutCircle />
//               </div>
//               <div className={styles.text}>Log Out</div>
//             </a>
//           </li>
//         </div>
//       </ul>
//     </div></>
//   );
// }
