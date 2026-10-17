import React from 'react';
import Projects from '../components/Projects';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';

const page = () => {
  return (
    <div>
      
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
    </div>
  );
};

export default page;