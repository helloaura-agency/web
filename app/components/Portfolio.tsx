'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, TrendingUp, Eye, Users } from "lucide-react";

export function Portfolio() {
  const portfolioItems = [
    {
      title: "TechStart Revolution",
      industry: "Technology",
      service: "Complete Brand Overhaul",
      outcome: "500% ROI Increase",
      description: "Complete rebranding and digital strategy for emerging tech startup",
      metrics: ["1M+ Reach", "350% Engagement", "200+ Leads"]
    },
    {
      title: "Fashion Forward Collective",
      industry: "Fashion",
      service: "Social Media & Influencer Marketing",
      outcome: "2M+ Social Reach",
      description: "Multi-platform campaign showcasing sustainable fashion trends",
      metrics: ["85% Engagement Rate", "50K New Followers", "300% Sales Growth"]
    },
    {
      title: "EduTech Solutions",
      industry: "Education",
      service: "SEO & Content Strategy",
      outcome: "400% Organic Traffic",
      description: "Comprehensive digital marketing strategy for online learning platform",
      metrics: ["Top 3 Rankings", "60% Conversion Rate", "500+ Daily Users"]
    },
    {
      title: "Green Energy Initiative",
      industry: "Sustainability",
      service: "Brand Identity & Web Development",
      outcome: "250% Lead Generation",
      description: "Complete digital presence creation for renewable energy company",
      metrics: ["Award-winning Design", "45% Bounce Rate", "180% ROI"]
    },
    {
      title: "Local Food Network",
      industry: "F&B",
      service: "Social Media Management",
      outcome: "300% Local Engagement",
      description: "Community-focused campaign celebrating local cuisine and culture",
      metrics: ["95% Local Reach", "40K Video Views", "150% Store Visits"]
    },
    {
      title: "FinTech Innovators",
      industry: "Finance",
      service: "Performance Marketing",
      outcome: "600% User Acquisition",
      description: "Data-driven campaign targeting young professionals and entrepreneurs",
      metrics: ["25% CTR", "8% Conversion", "1500+ App Downloads"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-black dark:bg-black light:bg-gradient-to-b light:from-gray-50 light:to-white relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-noise opacity-10 dark:opacity-10 light:opacity-3"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 mb-6">
            <span className="text-sm font-medium">PORTFOLIO</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our Creative
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Hello Aura, we bring ideas to life with strategy, creativity, and precision. 
            Our portfolio reflects the diverse range of clients we've worked with and the 
            impactful solutions we've delivered.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 hover:transform hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-xs text-white border-white/30">
                    {item.industry}
                  </Badge>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-300 mb-3">
                  {item.description}
                </CardDescription>
                <div className="text-sm text-gray-400 mb-3">
                  <span className="font-medium">Service:</span> {item.service}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Key Outcome */}
                <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
                  <TrendingUp className="w-5 h-5 text-white mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Key Result</div>
                    <div className="text-white font-semibold">{item.outcome}</div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-2">
                  <div className="text-sm text-gray-400 font-medium">Metrics</div>
                  <div className="grid grid-cols-1 gap-2">
                    {item.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Study CTA */}
        {/* <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to See Detailed Case Studies?
            </h3>
            <p className="text-gray-300 text-lg">
              Dive deeper into our process, strategy, and results with comprehensive case studies 
              that showcase our approach to brand transformation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white cursor-pointer text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              <Eye className="mr-2 w-5 h-5" />
              View Case Studies
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 cursor-pointer text-white hover:bg-white/10 transition-all duration-300"
            >
              <Users className="mr-2 w-5 h-5" />
              Start Your Project
            </Button>
          </div>
        </div> */}
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