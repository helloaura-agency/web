'use client';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useForm } from "@formspree/react";
import { useState, useEffect } from "react";

export function Contact() {
  const [state, handleSubmit] = useForm("mvoezpyj");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    firstName: false,
    email: false,
    company: false,
    service: false,
    message: false
  });

  // Clear form when submission succeeds
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
      setErrors({
        firstName: false,
        email: false,
        company: false,
        service: false,
        message: false
      });
    }
  }, [state.succeeded]);

  const validateForm = () => {
    const newErrors = {
      firstName: !formData.firstName.trim(),
      email: !formData.email.trim() || !formData.email.includes('@'),
      company: !formData.company.trim(),
      service: !formData.service.trim(),
      message: !formData.message.trim()
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      await handleSubmit(e);
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@helloaura.agency",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+971 54 309 7783",
      description: "Available 24/7 for urgent inquiries"
    },
    {
      icon: MapPin,
      title: "Our Locations",
      content: "Calicut, India & Dubai, UAE",
      description: "Two offices, global reach"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 4 hours",
      description: "Quick turnaround guaranteed"
    }
  ];

  return (
    <section id="contact" title="Contact Us" className="py-24 bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-white light:to-gray-50 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-noise opacity-10 dark:opacity-10 light:opacity-3"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 dark:via-white/20 light:via-black/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 dark:via-white/20 light:via-black/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}

        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 backdrop-blur-sm text-white dark:text-white light:text-black border border-white/20 dark:border-white/20 light:border-black/20 mb-6">
            <span className="text-sm font-medium">CONTACT</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white light:text-black mb-6 leading-tight">
            Let&apos;s Create Something
            <span className="block bg-gradient-to-r from-white to-gray-400 dark:from-white dark:to-gray-400 light:from-black light:to-gray-600 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your brand&apos;s story? Get in touch with us today
            and let&apos;s discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-gradient-to-b from-white/10 to-white/5 light:from-black/10 light:to-black/5 backdrop-blur-sm border border-white/20 light:border-black/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white light:text-black">
                Start Your Brand Journey
              </CardTitle>
              <CardDescription className="text-lg text-gray-300 light:text-gray-500">
                Tell us about your project and we&apos;ll get back to you within 4 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {state.succeeded && (
                <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 border border-green-300 dark:bg-gray-800 dark:text-green-400" role="alert">
                  <span className="font-medium">Success!</span> Thank you for contacting us! We&apos;ll get back to you within 4 hours.
                </div>
              )}
              
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="light:text-gray-400 text-gray-300">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`bg-white/10 border-white/20 light:border-black/20 text-white light:text-black placeholder-gray-400 focus:border-white/40 light:focus:border-black/40 ${errors.firstName ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.firstName && <p className="text-xs text-red-500">First name is required</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="light:text-gray-400 text-gray-300">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="bg-white/10 border-white/20 light:border-black/20 text-white light:text-black placeholder-gray-400 focus:border-white/40 light:focus:border-black/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="light:text-gray-400 text-gray-300">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`bg-white/10 border-white/20 light:border-black/20 text-white light:text-black placeholder-gray-400 focus:border-white/40 light:focus:border-black/40 ${errors.email ? 'border-red-500' : ''}`}
                    required
                  />
                  {errors.email && <p className="text-xs text-red-500">Valid email is required</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="light:text-gray-400 text-gray-300">
                    Company <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className={`bg-white/10 border-white/20 light:border-black/20 text-white light:text-black placeholder-gray-400 focus:border-white/40 light:focus:border-black/40 ${errors.company ? 'border-red-500' : ''}`}
                    required
                  />
                  {errors.company && <p className="text-xs text-red-500">Company is required</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="light:text-gray-400 text-gray-300">
                    Service Needed <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    name="service"
                    value={formData.service}
                    onValueChange={(value) => handleInputChange('service', value)}
                    required
                  >
                    <SelectTrigger className={`bg-white/10 border-white/20 light:border-black/20 text-white light:text-black ${errors.service ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="border-white/20 light:border-black/20">
                      <SelectItem value="social-media">Social Media Marketing</SelectItem>
                      <SelectItem value="performance-marketing">Performance Marketing</SelectItem>
                      <SelectItem value="web-development">Web Development UI/UX</SelectItem>
                      <SelectItem value="production">Production</SelectItem>
                      <SelectItem value="creative">Creative</SelectItem>
                      <SelectItem value="branding">Branding</SelectItem>
                      <SelectItem value="complete-package">Complete Package</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-xs text-red-500">Service selection is required</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="light:text-gray-400 text-gray-300">
                    Tell Us Your Story <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="What&apos;s your brand story? What are your goals? How can we help you make an impact?"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`min-h-[120px] bg-white/10 border-white/20 light:border-black/20 text-white light:text-black placeholder-gray-400 focus:border-white/40 light:focus:border-black/40 ${errors.message ? 'border-red-500' : ''}`}
                    required
                  />
                  {errors.message && <p className="text-xs text-red-500">Message is required</p>}
                </div>

                <Button 
                  type="submit"
                  disabled={state.submitting}
                  className="w-full cursor-pointer bg-white light:bg-black text-black light:text-white hover:bg-gray-200 text-lg py-6 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                  {!state.submitting && <Send className="ml-2 w-5 h-5" />}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white light:text-black mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-gray-300 light:text-gray-400 mb-8 leading-relaxed">
                We&apos;re here to help you succeed. Whether you have a specific project in mind
                or just want to explore possibilities, we&apos;d love to hear from you and learn about your brand story.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl border border-white/20 light:border-black/20 hover:border-white/30 light:hover:border-black/30  transition-all duration-300 hover:bg-white/10">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300">
                        <Icon className="w-6 h-6 text-white light:text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white light:text-black mb-1 group-hover:text-gray-200 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-white light:text-black mb-1">{info.content}</p>
                        <p className="text-sm text-gray-400">{info.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 light:border-black/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-8 h-8 text-white light:text-black mr-4" />
                  <h4 className="text-xl font-bold text-white light:text-black">
                    Prefer WhatsApp?
                  </h4>
                </div>
                <p className="text-gray-300 light:text-gray-400 mb-6">
                  For immediate assistance or quick questions, reach out to us on WhatsApp.
                  We&apos;re available for quick consultations and project discussions.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 light:border-black/30 cursor-pointer text-white light:text-black hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300"
                >
                  <a
                    href="https://wa.me/971543097783"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="mr-2 w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Partnership CTA */}
            <div className="text-center p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 light:border-black/20">
              <h4 className="text-xl font-bold text-white light:text-black mb-4">
                Ready to Transform Your Brand?
              </h4>
              <p className="text-gray-300 light:text-gray-400 mb-6">
                Let&apos;s turn your vision into reality. We&apos;re not just a service provider —
                we&apos;re your partner, creative ally, and biggest believer.
              </p>
              <p className="text-sm text-gray-400 light:text-gray-500 italic">
                &ldquo;At Hello Aura, we&apos;re more than just a service provider.
                We&apos;re your partner, your creative ally, and your biggest believer.&rdquo;
              </p>
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