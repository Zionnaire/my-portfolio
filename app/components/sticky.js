import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedIn, FaGithub } from 'react-icons/fa';
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import {MdAttachEmail} from 'react-icons/md'
const StickyNavbar = () => {
  return (
    <nav className="sticky-navbar">
      <ul>
        <li>
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/zionnaire1">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://wa.me/2347067036335?text=Hi, I am Zionnaire and thanks for contacting. Please tell me how I may be of help today">
            <BsWhatsapp />
          </a>
        </li>
        <li>
          <a href="mailto:zionnaire2018@gmail.com">
            <MdAttachEmail />
          </a>
        </li>
        
        <li>
          <a href="https://www.linkedin.com/in/ademola-abraham-488557120/">
        <BsLinkedin/>
          </a>
        </li>
        <li>
          <a href="https://github.com/Zionnaire">
            <FaGithub />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default StickyNavbar;
