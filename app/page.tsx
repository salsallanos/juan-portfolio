"use client";

import { FloatingNav } from '@/components/ui/FloatingNav';
import Hero from '../components/hero'
import Grid from '@/components/Grid';
import { navItems } from '@/data';
import RecentProjects from '@/components/RecentProjects';
import { TimelineDemo } from '@/components/TimelineExperience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <TimelineDemo />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
