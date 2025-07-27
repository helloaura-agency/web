'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import { CheckCircle, MapPin, Users, Award, ArrowRight } from "lucide-react";

export function About() {
  const locations = [
    { city: "Calicut", country: "India" },
    { city: "Dubai", country: "UAE" }
  ];

  const values = [
    {
      icon: Users,
      title: "Creative Thinking",
      description: "We're a collective of creative thinkers who understand that real connections matter more than just clicks and impressions."
    },
    {
      icon: Award,
      title: "Authentic Impact",
      description: "Our work is guided by one principle: authentic impact. We create marketing that's mindful, meaningful, and made to last."
    },
    {
      icon: CheckCircle,
      title: "Partnership Approach",
      description: "We're more than just a service provider. We're your partner, your creative ally, and your biggest believer."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black light:from-gray-50 light:to-white relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-noise opacity-10 dark:opacity-10 light:opacity-3"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 dark:via-white/20 light:via-black/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 dark:via-white/20 light:via-black/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 mb-6">
            <span className="text-sm font-medium">ABOUT US</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Every Brand Has a Story,
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              We Make Sure the World Hears It
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text Content */}
          <div>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We&apos;re not your typical marketing agency. We&apos;re a collective of creative thinkers, 
                digital strategists, and brand builders who understand that real connections matter 
                more than just clicks and impressions.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Hello Aura was founded on the idea that marketing should be mindful, meaningful, 
                and made to last. From bold startups to established enterprises, we help brands 
                find their voice, own their identity, and shine in crowded markets.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Whether it&apos;s digital campaigns, social media strategy, content creation, or 
                complete brand overhauls, our work is guided by one principle: authentic impact.
              </p>
            </div>

            {/* Locations */}
            <div className="flex flex-wrap gap-4 mb-8">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20">
                  <MapPin className="w-4 h-4 text-white mr-2" />
                  <span className="text-white text-sm">{location.city}, {location.country}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              {[
                "We don't follow trends — we set them",
                "We don't settle for good enough — we dig deeper",
                "We think sharper and create smarter",
                "We're your partner, creative ally, and biggest believer"
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>
            <Link href="#about">
            <Button
              size="lg"
              className="bg-white text-black cursor-pointer hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Learn Our Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-12 backdrop-blur-sm border border-white/20 min-h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To help brands find their authentic voice and create meaningful connections 
                  that drive real results in the digital world.
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center transform rotate-12">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <MapPin className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              What Sets Us Apart
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our core values guide every project and define how we approach brand building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 transform group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-noise {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}