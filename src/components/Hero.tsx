"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Typewriter from "@/components/Typewriter";

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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter min-h-[80px] lg:min-h-auto">
            I am a{" "}
            <span className="text-primary">
              <Typewriter />
            </span>
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
              className="rounded-full cursor-pointer transition-all duration-300 border border-black dark:border-white shadow-[0_0_20px_hsl(var(--foreground)/0.5)] hover:-translate-y-1 bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90"
            >
              <Link href="/Alexandros-Langidis-CV-new.pdf" target="_blank">
                <FileText className="mr-2 h-5 w-5" /> Resume / CV
              </Link>
            </Button>
          </div>

          <div className="pt-8 flex flex-col items-center lg:items-start gap-4">
            <p className="text-lg font-semibold border-b-2 border-primary pb-1">
              Tech Stack
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center">
              <Image
                src="https://skillicons.dev/icons?i=html,css,js,ts,react,nextjs,tailwind&theme=light"
                alt="Tech Stack"
                width={350}
                height={56}
                className="h-12 md:h-14 w-auto dark:hidden"
                unoptimized
              />
              <Image
                src="https://skillicons.dev/icons?i=html,css,js,ts,react,nextjs,tailwind&theme=dark"
                alt="Tech Stack"
                width={350}
                height={56}
                className="h-12 md:h-14 w-auto hidden dark:block"
                unoptimized
              />
              {/* Shadcn UI Logo - Light Mode */}
              <svg
                viewBox="0 0 256 256"
                className="-ml-2 h-10 md:h-14 w-10 md:w-14 dark:hidden"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="256" height="256" rx="60" fill="#000000" />
                <path
                  d="M191.867 126.65L126.65 191.867C124.106 194.411 124.106 198.542 126.65 201.092C129.194 203.636 133.325 203.636 135.875 201.092L201.092 135.875C203.636 133.325 203.636 129.194 201.092 126.65C198.542 124.106 194.411 124.106 191.867 126.65ZM178.824 54.9078L54.9078 178.824C52.3641 181.368 52.3641 185.499 54.9078 188.049C57.4577 190.592 61.5889 190.592 64.1326 188.049L188.049 64.1326C190.592 61.5889 190.592 57.4577 188.049 54.9078C185.499 52.3641 181.368 52.3641 178.824 54.9078Z"
                  fill="#FFFFFF"
                />
              </svg>
              {/* Shadcn UI Logo - Dark Mode */}
              <svg
                viewBox="0 0 256 256"
                className="-ml-2 h-10 md:h-14 w-10 md:w-14 hidden dark:block"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="256" height="256" rx="60" fill="#FFFFFF" />
                <path
                  d="M191.867 126.65L126.65 191.867C124.106 194.411 124.106 198.542 126.65 201.092C129.194 203.636 133.325 203.636 135.875 201.092L201.092 135.875C203.636 133.325 203.636 129.194 201.092 126.65C198.542 124.106 194.411 124.106 191.867 126.65ZM178.824 54.9078L54.9078 178.824C52.3641 181.368 52.3641 185.499 54.9078 188.049C57.4577 190.592 61.5889 190.592 64.1326 188.049L188.049 64.1326C190.592 61.5889 190.592 57.4577 188.049 54.9078C185.499 52.3641 181.368 52.3641 178.824 54.9078Z"
                  fill="#000000"
                />
              </svg>
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
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
