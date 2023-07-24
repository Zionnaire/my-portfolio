import React from 'react';
// import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Hi, I'm{' '}
         
            Zionnaire
      
        </h1>
        <p>A passionate Full-Stack web developer</p>
        <p>
          Come, {' '}
         
            let go on a journey...
          
            </p>
      </div>
    <div className='secBtn'>
    <Link href="/project"><button className="heroBtn">My Works</button></Link>
           <a href="emailto:zionnaire2018@gmail.com"><button className="heroBtn">Hire Me</button></a>
    </div>
    </section>
  );
};

export default HeroSection;
