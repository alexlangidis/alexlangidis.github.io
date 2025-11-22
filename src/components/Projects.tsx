"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Real World", "Clone", "Mini Projects"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-[600px]">
            Here are some of the projects I&apos;ve worked on.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className={`rounded-full cursor-pointer transition-all duration-300 border ${
                  filter === cat
                    ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-[0_0_20px_hsl(var(--foreground)/0.5)] scale-105 hover:bg-black/90 dark:hover:bg-white/90"
                    : "hover:bg-secondary/80 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 border-muted-foreground/20">
                <div className="relative w-full h-48 overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="font-semibold cursor-pointer border-white/20 bg-black/50 text-white hover:bg-black/70 hover:border-white hover:text-white transition-all duration-300"
                      >
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3 pt-4 border-t">
                  {project.codeUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 cursor-pointer hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300 border-primary/20 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:-translate-y-1"
                    >
                      <Link href={project.codeUrl} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      asChild
                      className="flex-1 cursor-pointer transition-all duration-300 border border-black dark:border-white shadow-[0_0_20px_hsl(var(--foreground)/0.5)] hover:-translate-y-1 bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90"
                    >
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
