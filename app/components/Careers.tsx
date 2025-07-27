'use client';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  Lightbulb, 
  TrendingUp, 
  Award, 
  Users, 
  ArrowRight 
} from "lucide-react";

export function Careers() {
  const benefits = [
    {
      icon: Lightbulb,
      title: "A Culture of Creativity and Collaboration",
      description: "Step into an inspiring work environment where ideas flow freely, collaboration is second nature, and your creativity is truly valued.",
      number: "01"
    },
    {
      icon: TrendingUp,
      title: "Grow with Purpose",
      description: "Be part of a dynamic team that challenges and supports you. Work alongside talented professionals who help you learn, grow, and reach your full potential.",
      number: "02"
    },
    {
      icon: Award,
      title: "Make an Impact with Industry Leaders",
      description: "Your work here matters. Contribute to exciting projects with some of the most recognized brands in the industry, and see the real-world impact of what you do.",
      number: "03"
    }
  ];

  return (
    <section id="careers" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 mb-6">
            <span className="text-sm font-medium">CAREERS</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Why Join
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Team?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Hello Aura, we&apos;re not just building brands — we&apos;re building careers, 
            fostering creativity, and creating an environment where talent thrives.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="group bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 hover:transform hover:scale-105">
                <CardHeader className="relative pb-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl font-bold text-white/20 group-hover:text-white/30 transition-colors duration-300">
                      {benefit.number}
                    </div>
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 transform group-hover:rotate-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300 leading-tight">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Current Opportunities */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Current Opportunities
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            We&apos;re always looking for passionate, creative individuals to join our growing team. 
            Check out our current openings or reach out to us about future opportunities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { title: "Creative Director", department: "Creative", type: "Full-time" },
              { title: "Social Media Manager", department: "Marketing", type: "Full-time" },
              { title: "UI/UX Designer", department: "Design", type: "Full-time" },
              { title: "Content Creator", department: "Content", type: "Part-time" }
            ].map((job, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-white/5 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 group">
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
                    {job.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{job.department} • {job.type}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <Users className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Shape the Future of Brands?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our team of creative thinkers, digital strategists, and brand builders. 
              Let&apos;s create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white cursor-pointer text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                <Users className="mr-2 w-5 h-5" />
                View All Positions
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 cursor-pointer text-white hover:bg-white/10 transition-all duration-300"
              >
                Send Your Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
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