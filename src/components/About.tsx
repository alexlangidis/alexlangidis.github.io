"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-12 md:flex-row"
        >
          <div className="flex-1 w-full">
            <div className="relative w-full h-64 overflow-hidden shadow-xl md:h-96 rounded-2xl">
              <Image
                src="/images/giphy.gif"
                alt="Coding GIF"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              About Me
            </h2>
            <h3 className="text-xl font-semibold text-primary">
              A dedicated Front-end Developer based in Athens, Greece
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I’m a junior front-end developer passionate about building
              user-friendly and visually engaging web applications. I specialize
              in HTML, CSS, and JavaScript, with a strong focus on responsive
              design, clean code, and seamless user experiences. Currently, I’m
              deepening my expertise in React, TypeScript, and Next.js, building
              modern, scalable, and high-performance interfaces. Alongside
              front-end development, I’m exploring databases and SQL to better
              understand how data drives applications. I also enjoy leveraging
              AI tools and automation to streamline workflows and improve
              project efficiency. Always eager to learn and collaborate within
              dynamic teams, I’m motivated to continuously grow my skill set and
              contribute to innovative, impactful digital products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
