"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black dark:bg-black light:bg-white overflow-hidden transition-colors duration-300">
      {/* Grainy gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-gray-900 dark:via-black dark:to-gray-800 light:from-gray-50 light:via-white light:to-gray-100 opacity-80"></div>
        <div className="absolute inset-0 bg-noise opacity-20 dark:opacity-20 light:opacity-5"></div>
      </div>

      {/* 3D floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 dark:bg-white/5 light:bg-black/5 rounded-full blur-3xl animate-pulse transform rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-white/3 dark:bg-white/3 light:bg-black/3 rounded-full blur-3xl animate-pulse delay-700 transform -rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-white/4 dark:bg-white/4 light:bg-black/4 rounded-full blur-3xl animate-pulse delay-1000 transform rotate-12"></div>

        {/* 3D geometric shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 dark:border-white/20 light:border-black/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 border-2 border-white/30 dark:border-white/30 light:border-black/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/10 dark:bg-white/10 light:bg-black/10 rotate-45 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 backdrop-blur-sm text-white dark:text-white light:text-black border border-white/20 dark:border-white/20 light:border-black/20 mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Where Stories Come to Life</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white light:text-black mb-8 leading-tight">
            Every Brand Has a
            <span className="block bg-gradient-to-r from-white to-gray-400 dark:from-white dark:to-gray-400 light:from-black light:to-gray-600 bg-clip-text text-transparent">
              Story Worth Telling
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            We're not your typical marketing agency. We're a collective of creative thinkers,
            digital strategists, and brand builders who understand that real connections matter
            more than just clicks and impressions.
          </p>

          {/* Location badge */}
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 dark:bg-white/5 light:bg-black/5 text-gray-400 dark:text-gray-400 light:text-gray-600 border border-white/10 dark:border-white/10 light:border-black/10 mb-12">
            <span className="text-sm">Based in Calicut & Dubai</span>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-white cursor-pointer text-black hover:bg-gray-200 dark:bg-white dark:text-black dark:hover:bg-gray-200 light:bg-black light:text-white light:hover:bg-gray-800 text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Start Your Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link href="#portfolio">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 cursor-pointer py-4 border-white/30 dark:border-white/30 light:border-black/30 text-white dark:text-white light:text-black hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
              </Button></Link>
          </div>

          {/* Philosophy statement */}
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg italic">
              "We don't follow trends — we set them. We don't settle for good enough —
              we dig deeper, think sharper, and create smarter."
            </p>
          </div>
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