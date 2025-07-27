'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  Share2, 
  TrendingUp, 
  Code, 
  Video, 
  Palette, 
  Users,
  ArrowRight
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Services() {
  const services = [
    {
      icon: Share2,
      title: "Social Media",
      subtitle: "Experience the Aura of Impact",
      description: "We believe social media isn't just about being present — it's about being purposeful. Our approach is thoughtful, data-driven, and creatively bold.",
      features: ["Strategy Development", "Content Creation", "Community Management", "Analytics & Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      subtitle: "Unlock the Power of Omnichannel Marketing",
      description: "We create strategies that truly align with your brand goals. Our omnichannel approach ensures your message reaches the right people, through the right platforms, at the right time.",
      features: ["Meta & Google Ads", "Campaign Optimization", "ROI Tracking", "Multi-channel Strategy"]
    },
    {
      icon: Code,
      title: "Web Development UI/UX",
      subtitle: "Build a Bold Online Presence",
      description: "We craft websites that do more than just look good — they perform. Every layout we create is built with intention — tailored to reflect your brand's unique personality.",
      features: ["Custom Development", "WordPress & Shopify", "UI/UX Design", "Performance Optimization"]
    },
    {
      icon: Video,
      title: "Production",
      subtitle: "Your Vision, Brought to Life",
      description: "We turn ideas into impactful content that speaks for your brand. Whether it's scroll-stopping campaigns or captivating video productions, our creative team knows how to capture your brand's essence.",
      features: ["Video Production", "Photography", "Content Creation", "Reels & Short-form"]
    },
    {
      icon: Palette,
      title: "Creative",
      subtitle: "Bring Your Brand to Life",
      description: "We transform your ideas into bold, impactful content that truly reflects your brand. From attention-grabbing campaigns to visually stunning productions.",
      features: ["Graphic Design", "Brand Visuals", "Campaign Creatives", "Art Direction"]
    },
    {
      icon: Users,
      title: "Branding",
      subtitle: "Build a Brand That Speaks Volumes",
      description: "We don't just brand — we uncover the 'why' behind your business and bring it to life through powerful storytelling and thoughtful design.",
      features: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Identity Development"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-white light:to-gray-50 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-noise opacity-10 dark:opacity-10 light:opacity-3"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 dark:via-white/20 light:via-black/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 dark:via-white/20 light:via-black/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 backdrop-blur-sm text-white dark:text-white light:text-black border border-white/20 dark:border-white/20 light:border-black/20 mb-6">
            <span className="text-sm font-medium">SERVICES</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white light:text-black mb-6 leading-tight">
            Not Just Services —
            <span className="block bg-gradient-to-r from-white to-gray-400 dark:from-white dark:to-gray-400 light:from-black light:to-gray-600 bg-clip-text text-transparent">
              Experiences That Move Brands Forward
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group bg-black/50 dark:bg-black/50 light:bg-white/95 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-gray-200/50 hover:border-white/30 dark:hover:border-white/30 light:hover:border-gray-300/80 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5 dark:hover:shadow-white/5 light:hover:shadow-black/5 hover:transform hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-white/10 dark:bg-white/10 light:bg-black/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 dark:group-hover:bg-white/20 light:group-hover:bg-black/20 transition-all duration-300 transform group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-white dark:text-white light:text-black" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white dark:text-white light:text-black group-hover:text-gray-200 dark:group-hover:text-gray-200 light:group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <div className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 font-medium mb-3">
                    {service.subtitle}
                  </div>
                  <CardDescription className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                        <div className="w-2 h-2 bg-white/40 dark:bg-white/40 light:bg-black/40 rounded-full mr-3 group-hover:bg-white/60 dark:group-hover:bg-white/60 light:group-hover:bg-black/60 transition-colors duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-lg mb-8">
              Ready to transform your brand's digital presence? Let's create something extraordinary together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="#contact">
            <Button 
              size="lg" 
              className="bg-white cursor-pointer text-black hover:bg-gray-200 dark:bg-white dark:text-black dark:hover:bg-gray-200 light:bg-black light:text-white light:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            </Link>
            <Link href="#portfolio">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 cursor-pointer dark:border-white/30 light:border-black/30 text-white dark:text-white light:text-black hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300"
              >
              View Portfolio
            </Button>
              </Link>
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