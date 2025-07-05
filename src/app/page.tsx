// src/app/page.tsx
"use client";

import Hero from '@/app/hero/page';
import About from '@/app/about/page';
import Projects from '@/app/projects/page';
import Skills from '@/app/skills/page';
import Education from '@/app/education/page';
import Contact from '@/app/contact/page';

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
