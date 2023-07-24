"use client"; // This is a client component 👈🏽
import { useState } from 'react';
import { AiFillApple, AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { SiSkillshare } from 'react-icons/si';
import { MdWork, MdHistory } from 'react-icons/md';
import { FcContacts } from 'react-icons/fc';
import { FaBlog } from 'react-icons/fa';
import Link from 'next/link';

export default function MySideBar() {
  const [isActive, setIsActive] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = (text) => {
    setActiveItem(text);
  };

  return (
    <>
      <div className={`menuToggle ${isActive ? 'active' : ''}`} onClick={handleMenuToggle}></div>
      <div className={`sidebar ${isActive ? 'active' : ''}`}>
        <ul>
          <div>
            <li style={{ '--bg': '#383F51' }} className="logo">
              <div className='a'>
                <div className="icon">
                  <div className="image">
                    <img src="./zionnaire.jpeg" alt="" />
                  </div>
                </div>
                <div className="text">Zionnaire Concepts</div>
              </div>
            </li>
          </div>
          <div className="Menulist">
            <li style={{ '--bg': '#FF5F5F' }} className={activeItem === 'Home' ? 'active' : ''}>
              <Link href="/" onClick={() => handleLinkClick('Home')}>
                <div className='a'>
                  <div className="icon"><AiFillHome /></div>
                  <div className="text">Home</div>
                </div>
              </Link>
            </li>
            <li style={{ '--bg': '#FFC371' }} className={activeItem === 'Profile' ? 'active' : ''}>
              <Link href="/" onClick={() => handleLinkClick('Profile')}>
                <div className='a'>
                  <div className="icon"><BsFillPersonFill /></div>
                  <div className="text">Profile</div>
                </div>
              </Link>
            </li>

            <li style={{ '--bg': '#5199E4' }} className={activeItem === 'Projects' ? 'active' : ''}>
              <Link href="/project" onClick={() => handleLinkClick('Projects')}>
                <div className='a'>
                  <div className="icon"><MdWork /></div>
                  <div className="text">Projects</div>
                </div>
              </Link>
            </li>

            <li style={{ '--bg': '#70C37F' }} className={activeItem === 'My Stacks' ? 'active' : ''}>
              <Link href="#" onClick={() => handleLinkClick('My Stacks')}>
                <div className='a'>
                  <div className="icon"><SiSkillshare /></div>
                  <div className="text">My Stacks</div>
                </div>
              </Link>
            </li>
          
            <li style={{ '--bg': '#FF6BA2' }} className={activeItem === 'Hire Me' ? 'active' : ''}>
              <Link href="/contact" onClick={() => handleLinkClick('Hire Me')}>
                <div className='a'>
                  <div className="icon"><FcContacts /></div>
                  <div className="text">Hire Me</div>
                </div>
              </Link>
            </li>
            <li style={{ '--bg': '#FF6BA2' }} className={activeItem === 'Blogs' ? 'active' : ''}>
              <Link href="/" onClick={() => handleLinkClick('Blogs')}>
                <div className='a'>
                  <div className="icon"><FaBlog /></div>
                  <div className="text">Blogs</div>
                </div>
              </Link>
            </li>
          </div>
          <div className="bottom">
            <li style={{ '--bg': '#383F51' }}>
              <Link href="/contact">
                <div className='a'>
                  <div className="icon">
                    <div className="image">
                      <img src="./myPic.jpeg" alt="" />
                    </div>
                  </div>
                  <div className="text">Zionnaire</div>
                </div>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}



// export default function MySideBar() {
//   const [isActive, setIsActive] = useState(false);
//   const router = useRouter();

//   const handleMenuToggle = () => {
//     setIsActive(!isActive);
//   };

//   const handleLinkClick = (href) => {
//     setIsActive(false);
//     router.push(href);
//   };

//   return (
//     <>
//       <div className={`menuToggle ${isActive ? 'active' : ''}`} onClick={handleMenuToggle}></div>
//       <div className={`sidebar ${isActive ? 'active' : ''}`}>
//         <ul>
//           <div>
//             <li style={{ '--bg': '#383F51' }} className="logo">
//               <Link href="#">
//                 <div className="icon">
//                   <div className="image">
//                     <img src="./zionnaire.jpeg" alt="" />
//                   </div>
//                 </div>
//                 <div className="text">Zionnaire Concepts</div>
//               </Link>
//             </li>
//           </div>
//           <div className="Menulist">
//             <li style={{ '--bg': '#FF5F5F' }} className={router.pathname === '/' ? 'active' : ''}>
//               <div className="icon">
//                 <AiFillHome />
//               </div>
//               <div className="text" onClick={() => handleLinkClick('/')}>Home</div>
//             </li>
//             <li style={{ '--bg': '#FFC371' }} className={router.pathname === '/profile' ? 'active' : ''}>
//               <div className="icon">
//                 <BsFillPersonFill />
//               </div>
//               <div className="text" onClick={() => handleLinkClick('/profile')}>Profile</div>
//             </li>
//             <li style={{ '--bg': '#70C37F' }} className={router.pathname === '/mystacks' ? 'active' : ''}>
//               <div className="icon">
//                 <SiSkillshare />
//               </div>
//               <div className="text" onClick={() => handleLinkClick('/mystacks')}>My Stacks</div>
//             </li>
//             <li style={{ '--bg': '#5199E4' }} className={router.pathname === '/project' ? 'active' : ''}>
//               <div className="icon">
//                 <MdWork />
//               </div>
//               <div className="text" onClick={() => handleLinkClick('/project')}>Projects</div>
//             </li>
//             <li style={{ '--bg': '#FF6BA2' }} className={router.pathname === '/contact' ? 'active' : ''}>
//               <div className="icon">
//                 <FcContacts />
//               </div>
//               <div className="text" onClick={() => handleLinkClick('/contact')}>Hire Me</div>
//             </li>
//             <li style={{ '--bg': '#FF6BA2' }} className={router.pathname === '/blog' ? 'active' : ''}>
//               <div className="icon">
//                 <FaBlog />
//               </div>
//               <div className="text" onClick={() => handleLinkClick('/blog')}>Blogs</div>
//             </li>
//           </div>
//           <div className="bottom">
//             <li style={{ '--bg': '#383F51' }}>
//               <div className="icon">
//                 <div className="image">
//                   <img src="./myPic.jpeg" alt="" />
//                 </div>
//               </div>
//               <div className="text" onClick={() => handleLinkClick('/profile')}>Zionnaire</div>
//             </li>
//           </div>
//         </ul>
//       </div>
//     </>
//   );
// }