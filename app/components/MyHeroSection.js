import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Hi, I'm{' '}
          <motion.span
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            Zionnaire
          </motion.span>
        </h1>
        <p>A passionate Full-Stack web developer</p>
        <p>
          Come, {' '}
          <motion.span
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            let go on a journey...
            </motion.span>
            </p>
            <button className="heroBtn">My Works</button>
            <button className="heroBtn">Hire Me</button>
      </div>
    </section>
  );
};

export default HeroSection;
