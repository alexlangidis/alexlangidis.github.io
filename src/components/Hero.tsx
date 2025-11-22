"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Front-End <span className="text-primary">Developer</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            Hi, I&apos;m Alex Langidis. A passionate Front-end Developer based
            in Athens, Greece. I craft dynamic interfaces with clean code.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300"
            >
              <Link href="https://github.com/alexlangidis" target="_blank">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300"
            >
              <Link
                href="https://www.linkedin.com/in/alex-langidis"
                target="_blank"
              >
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 dark:border dark:border-white/20 dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:dark:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <Link href="/Alexandros-Langidis-cv.pdf" target="_blank">
                <FileText className="mr-2 h-5 w-5" /> Resume / CV
              </Link>
            </Button>
          </div>

          <div className="pt-8 flex flex-col items-center lg:items-start gap-4">
            <p className="text-lg font-semibold border-b-2 border-primary pb-1">
              Tech Stack
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Image
                src="https://skillicons.dev/icons?i=html,css,js,react,nextjs,tailwind,ts&theme=light"
                alt="Tech Stack"
                width={350}
                height={56}
                className="h-12 md:h-14 w-auto hover:scale-105 transition-transform cursor-pointer dark:hidden"
                unoptimized
              />
              <Image
                src="https://skillicons.dev/icons?i=html,css,js,react,nextjs,tailwind,ts&theme=dark"
                alt="Tech Stack"
                width={350}
                height={56}
                className="h-12 md:h-14 w-auto hover:scale-105 transition-transform cursor-pointer hidden dark:block"
                unoptimized
              />
            </div>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/profile-pic.png"
              alt="Alex Langidis"
              fill
              className="object-cover rounded-full border-4 border-primary/20 shadow-2xl animate-blob"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
