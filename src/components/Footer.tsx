import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </p>

        <div className="flex gap-4">
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
      </div>
    </footer>
  );
}
