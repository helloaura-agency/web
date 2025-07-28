'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "What services does Hello Aura offer?",
      answer: "We provide complete digital marketing and creative solutions, including: Branding & Identity Design, Social Media Marketing (SMM), Meta & Google Ad Campaigns, Search Engine Optimization (SEO), Influencer & Affiliate Marketing, Website Design & Development (WordPress, Shopify, etc.), Video Production & Reels Creation, Photography & Product Shoots, Email Marketing & Automation, and Event Marketing & Offline Promotions."
    },
    {
      question: "What makes Hello Aura different from other agencies?",
      answer: "We combine creative storytelling with data-driven strategies. Our team works closely with you to build custom campaigns that are both aesthetically strong and performance-focused. Every project is backed by insights, transparency, and measurable results. We&apos;re not just a service provider - we&apos;re your creative partner and biggest believer."
    },
    {
      question: "How do I get started with Hello Aura?",
      answer: "Start by reaching out via our contact form, email, or WhatsApp. We'll schedule a discovery session to understand your brand goals. Based on that, we'll create a detailed proposal outlining services, timelines, and pricing. Our process is collaborative from day one."
    },
    {
      question: "Do you offer packages or custom plans?",
      answer: "We offer both! You can choose from our pre-designed packages (ideal for startups and small businesses) or request a custom plan tailored to your specific goals and budget. We believe in flexibility and creating solutions that work for your unique needs."
    },
    {
      question: "Can you manage my social media completely?",
      answer: "Yes, we offer end-to-end social media management, which includes strategy development, content creation, posting schedules, community management, influencer collaborations, and detailed analytics reporting. We become an extension of your team."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with diverse industries including technology, fashion, education, healthcare, finance, food & beverage, real estate, and more. Our approach is to understand each industry's unique challenges and opportunities to create tailored strategies."
    },
    {
      question: "How do you measure success?",
      answer: "Success is measured through various KPIs depending on your goals: brand awareness (reach, impressions), engagement (likes, shares, comments), conversions (leads, sales), website traffic, ROI, and long-term brand growth. We provide transparent reporting and regular performance reviews."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! With offices in India and UAE, we serve clients globally. We understand different market dynamics and cultural nuances, allowing us to create campaigns that resonate across various regions and demographics."
    }
  ];

  return (
    <section title="FAQ" id="faq" className="py-24 bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-gray-50 light:to-white relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-noise opacity-10 dark:opacity-10 light:opacity-3"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 mb-6">
            <span className="text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about working with Hello Aura
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-6 hover:border-white/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-white hover:text-gray-200 text-left py-6 hover:no-underline">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help you with any questions about our services, process, or how we can help your brand grow.
            </p>
            <a
              href="https://wa.me/971543097783"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
              size="lg" 
              className="bg-white cursor-pointer text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
              <MessageCircle className="mr-2 w-5 h-5" />
              Get in Touch
              </Button>
            </a>
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