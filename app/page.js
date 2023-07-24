"use client"; // This is a client component 👈🏽
import React, { useState } from 'react';
import styles from './page.module.css';
import MySideBar from './components/myside';
import StickyNavbar from './components/sticky';
import HeroSection from './components/MyHeroSection';
import Projects from './components/project';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <>
    <MySideBar router = {router}/>
    <main className={styles.main}>
 <div className={styles.background}>
        <HeroSection />
        <StickyNavbar />
      </div>
      <Projects/>
    </main></>
  )
}
