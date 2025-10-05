"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Parallax } from "./Parallax";

export function Hero() {
  return (
    <section id="home" title="Home" className="relative min-h-screen flex items-center justify-center bg-black dark:bg-black light:bg-white overflow-hidden transition-colors duration-300">
      {/* Grainy gradient background */}
      <div className="absolute inset-0">
        <Parallax speed={0.3}>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-gray-900 dark:via-black dark:to-gray-800 light:from-gray-50 light:via-white light:to-gray-100 opacity-80"></div>
          <div className="absolute inset-0 bg-noise opacity-20 dark:opacity-20 light:opacity-5"></div>
        </Parallax>
      </div>

      {/* 3D floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Parallax speed={0.4}>
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 dark:bg-white/5 light:bg-black/5 rounded-full blur-3xl transform rotate-45"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </Parallax>

        <Parallax speed={0.6}>
          <motion.div
            className="absolute top-1/3 right-1/4 w-72 h-72 bg-white/3 dark:bg-white/3 light:bg-black/3 rounded-full blur-3xl transform -rotate-12"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            }}
          />
        </Parallax>

        <Parallax speed={0.2}>
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-white/4 dark:bg-white/4 light:bg-black/4 rounded-full blur-3xl transform rotate-12"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </Parallax>

        {/* 3D geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 border border-white/20 dark:border-white/20 light:border-black/20 rotate-45"
          animate={{
            rotate: [45, 405],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-12 h-12 border-2 border-white/30 dark:border-white/30 light:border-black/30 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-8 w-8 h-8 bg-white/10 dark:bg-white/10 light:bg-black/10 rotate-45"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          {/* Badge */}
          <AnimatedSection delay={0.2} direction="fade">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 backdrop-blur-sm text-white dark:text-white light:text-black border border-white/20 dark:border-white/20 light:border-black/20 mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Where Stories Come to Life</span>
            </div>
          </AnimatedSection>

          {/* Main Headline */}
          <AnimatedSection delay={0.4} direction="up" duration={0.8}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white light:text-black mb-8 leading-tight">
              Every Brand Has a
              <span className="block bg-gradient-to-r from-white to-gray-400 dark:from-white dark:to-gray-400 light:from-black light:to-gray-600 bg-clip-text text-transparent">
                Story Worth Telling
              </span>
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection delay={0.6} direction="up" duration={0.8}>
            <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              We&apos;re not your typical marketing agency. We&apos;re a collective of creative thinkers,
              digital strategists, and brand builders who understand that real connections matter
              more than just clicks and impressions.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.8} direction="up" duration={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="#contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="lg"
                    className="bg-white cursor-pointer text-black hover:bg-gray-200 dark:bg-white dark:text-black dark:hover:bg-gray-200 light:bg-black light:text-white light:hover:bg-gray-800 text-lg px-8 py-4 transition-all duration-300 hover:shadow-2xl"
                  >
                    Start Your Story
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="#portfolio">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 cursor-pointer py-4 border-white/30 dark:border-white/30 light:border-black/30 text-white dark:text-white light:text-black hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300"
                  >
                    View Our Work
                  </Button>
                </motion.div>
              </Link>
            </div>
          </AnimatedSection>

          {/* Philosophy statement */}
          <AnimatedSection delay={1.0} direction="fade" duration={0.8}>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg italic">
                &ldquo;We don&apos;t follow trends — we set them. We don&apos;t settle for good enough —
                we dig deeper, think sharper, and create smarter.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .bg-noise {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}