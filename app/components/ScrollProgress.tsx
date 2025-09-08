"use client";

import { motion, useScroll } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-200 to-white dark:from-white dark:via-gray-200 dark:to-white light:from-black light:via-gray-800 light:to-black transform-origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
