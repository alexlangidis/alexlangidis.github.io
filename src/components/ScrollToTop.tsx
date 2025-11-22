"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomPosition, setBottomPosition] = useState(32); // 8 * 4 = 32px (bottom-8)

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide button based on scroll position
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate footer position to avoid overlap
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // If footer is visible in viewport
        if (footerRect.top < windowHeight) {
          // Calculate how much to move button up
          const overlap = windowHeight - footerRect.top;
          const newBottom = 32 + overlap; // 32px base + overlap
          setBottomPosition(newBottom);
        } else {
          setBottomPosition(32); // Reset to default
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, bottom: bottomPosition }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed right-8 z-50"
          style={{ bottom: `${bottomPosition}px` }}
        >
          <Button
            size="icon"
            onClick={scrollToTop}
            className="rounded-full h-12 w-12 shadow-lg border border-primary/20 transition-all duration-300 cursor-pointer bg-white dark:bg-black hover:bg-white dark:hover:bg-black hover:border-primary"
          >
            <ArrowUp className="h-6 w-6" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
