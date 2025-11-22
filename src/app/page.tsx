import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
