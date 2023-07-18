import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedIn, FaGithub } from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs'
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
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com">
        <BsLinkedin/>
          </a>
        </li>
        <li>
          <a href="https://www.github.com">
            <FaGithub />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default StickyNavbar;
