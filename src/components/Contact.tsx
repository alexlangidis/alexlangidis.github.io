"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Contact Me
          </h2>
          <p className="text-muted-foreground max-w-[600px]">
            Feel free to reach out if you want to collaborate on a project or
            just say hi!
          </p>

          <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl justify-center">
            <div className="flex flex-col items-center p-6 bg-background rounded-xl shadow-sm border w-full md:w-64 hover:border-primary transition-colors">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Athens, Greece</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-background rounded-xl shadow-sm border w-full md:w-64 hover:border-primary transition-colors">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:alexlag.dev@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                alexlag.dev@gmail.com
              </a>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              href="https://github.com/alexlangidis"
              target="_blank"
              className="p-2 rounded-full border border-muted-foreground/20 text-muted-foreground hover:text-white hover:bg-black hover:border-black dark:hover:text-black dark:hover:bg-white dark:hover:border-white transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alex-langidis"
              target="_blank"
              className="p-2 rounded-full border border-muted-foreground/20 text-muted-foreground hover:text-white hover:bg-black hover:border-black dark:hover:text-black dark:hover:bg-white dark:hover:border-white transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
