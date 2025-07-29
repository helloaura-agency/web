'use client';
import { Separator } from "./ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  // Facebook, 
  // Twitter, 
  Instagram,
  Linkedin,
  ArrowUp
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  const footerLinks = {
    Services: [
      { label: "Social Media Marketing", href: "#services" },
      { label: "Performance Marketing", href: "#services" },
      { label: "Web Development UI/UX", href: "#services" },
      { label: "Production & Video", href: "#services" },
      { label: "Creative & Design", href: "#services" },
      { label: "Branding & Identity", href: "#services" }
    ],
    Company: [
      { label: "About Us", href: "#about" },
      // { label: "Our Story", href: "#our-story" },
      // { label: "Careers", href: "#careers" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "FAQ", href: "#faq" },
      // { label: "Case Studies", href: "#case-studies" },
      // { label: "Blog", href: "#blog" }
    ],
    // Resources: [
    // { label: "Privacy Policy", href: "#privacy" },
    // { label: "Terms of Service", href: "#terms" },
    // { label: "Cookie Policy", href: "#cookies" },
    // { label: "Sitemap", href: "#sitemap" },
    // { label: "Support", href: "#support" }
    // ]
  };

  const socialLinks = [
    // { icon: Facebook, href: "#", label: "Facebook" },
    // { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/helloaura.ae", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/helloaura/", label: "LinkedIn" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black dark:bg-black light:bg-gradient-to-t light:from-gray-50 light:to-white relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-noise opacity-5 dark:opacity-5 light:opacity-2"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image src="/logo.png" alt="Hello Aura Logo" className="h-8 w-auto mb-6" width={120} height={32} priority />
              <p className="text-gray-400 light:text-gray-600 mb-6 leading-relaxed">
                We create digital experiences that inspire, engage, and drive authentic impact.
                Your brand story is our passion.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 light:text-gray-600 hover:text-white light:hover:text-black transition-colors duration-200">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">hello@helloaura.agency</span>
              </div>
              <div className="flex items-center text-gray-400 light:text-gray-600 hover:text-white light:hover:text-black transition-colors duration-200">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">+971 54 309 7783</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-white light:text-black mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-400 light:text-gray-600 hover:text-white light:hover:text-black transition-colors duration-200 text-sm block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-lg font-semibold text-white light:text-black mb-6">Our Offices</h4>
            <ul className="space-y-3">
              <li className="">
                <div className="space-y-3 border border-white/20 light:border-black/20 p-2 rounded-lg">
                  <div className="flex items-center text-gray-400 light:text-gray-600 hover:text-white light:hover:text-black transition-colors duration-200">
                    <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-sm">210, Sarah Building, Al Garhoud, Dubai, UAE</span>
                  </div>
                  <div className="flex items-center text-gray-400 light:text-gray-600 hover:text-white light:hover:text-black transition-colors duration-200">
                    <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-sm">+971 54 309 7783</span>
                  </div>
                </div>
              </li>
              <li className="">
                <div className="space-y-3 border border-white/20 light:border-black/20 p-2 rounded-lg  ">
                  <div className="flex items-center text-gray-400 light:text-gray-600 hover:text-white light:hover:text-black transition-colors duration-200">
                    <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-sm">HiLITE Business Park Calicut, Kerala, India</span>
                  </div>
                  <div className="flex items-center text-gray-400 light:text-gray-600 hover:text-white light:hover:text-black transition-colors duration-200">
                    <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-sm">+91 6282 605 720</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-12">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-white mb-2">
              Stay Connected with Our Story
            </h4>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest insights, creative inspiration, and brand building tips.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40"
            />
            <Button className="bg-white cursor-pointer text-black hover:bg-gray-200 px-6 py-3 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </Button>
          </div>
        </div> */}

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Hello Aura. All rights reserved. Where stories come to life.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 light:bg-black/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 border border-white/20 hover:border-white/40"
                >
                  <Icon className="w-5 h-5 text-white light:text-black" />
                </a>
              );
            })}

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 cursor-pointer bg-white/10 light:bg-black/10 hover:bg-white text-black rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 border border-white/20 hover:border-white ml-4"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Brand Statement */}
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm italic">
            &ldquo;We don&apos;t follow trends — we set them. We don&apos;t settle for good enough — we dig deeper, think sharper, and create smarter.&rdquo;
          </p>
        </div>
      </div>

      <style jsx>{`
        .bg-noise {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </footer>
  );
}