"use client"; // This is a client component 👈🏽
import React, { useState } from 'react';
import styles from './page.module.css';
import MySideBar from './components/myside';
import StickyNavbar from './components/sticky';
import HeroSection from './components/MyHeroSection';
import Projects from './components/project';

export default function Home() {
  
  return (
    <>
    <MySideBar />
    <main className={styles.main}>
 <div className={styles.background}>
        <HeroSection />
        <StickyNavbar />
      </div>
      <Projects/>
    </main></>
  )
}
