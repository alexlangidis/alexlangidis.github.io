"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 w-full">
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
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
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m a Junior Front-End Developer with strong skills in HTML,
              CSS, JavaScript, Tailwind, and SCSS. I specialize in creating and
              maintaining responsive websites for a seamless user experience. I
              love crafting dynamic interfaces with clean and optimized code,
              using the latest development tools. I enjoy working in teams and
              collaborating across different functions to deliver exceptional
              web applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
