import React from 'react';
import Projects from '../components/Projects';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div>
      
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default page;