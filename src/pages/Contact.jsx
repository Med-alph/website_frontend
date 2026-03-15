import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { usePageTitle } from '@/hooks/usePageTitle';

import { submitContactForm } from '@/api/contactApi';

const Contact = () => {
  usePageTitle(
    'Request a Demo | MedAlph Medical Software',
    'Get in touch with the MedAlph team to schedule a personalized demo of our EMR platform and clinical operating system.'
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error("Submission failed", error);
      alert("Something went wrong. Please try again or email us directly at support@medalph.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 pt-24 pb-24 md:pt-32">
      <Helmet>
        <title>Contact Us - Medalph</title>
        <meta name="description" content="Get in touch with the Medalph team. We are here to help you set up your clinic management software." />
        <link rel="canonical" href="https://www.medalph.com/contact" />
      </Helmet>
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider"
              >
                Contact Us
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight"
              >
                Let's talk about the <br />
                <span className="text-primary italic">future of your clinic.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed italic max-w-[500px]"
              >
                Whether you're a single-doctor practice or a multi-specialty hospital, we're here to help you scale.
              </motion.p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email us", value: "support@medalph.com" },
                { icon: Phone, label: "Call our team", value: "+91 63695 45178" },
                { icon: MapPin, label: "Visit us", value: "Coimbatore, TN, India" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-border shadow-sm flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{item.label}</div>
                    <div className="text-muted-foreground dark:text-slate-400 text-sm">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-8 bg-primary/5 rounded-[2rem] border border-primary/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="font-bold text-primary">Live Demo Available</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Our clinical experts can walk you through the platform in 15 minutes.
                No commitment required.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="border shadow-2xl rounded-[2.5rem] bg-background overflow-hidden border-slate-200 dark:border-slate-800">
              <CardContent className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-4"
                    >
                      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Demo Request Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. Our clinical experts will contact you within 24 hours to schedule your tour.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setSubmitted(false)}
                        className="mt-4 rounded-xl"
                      >
                        Send another message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="Enter your full name"
                            className="h-14 rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Clinic Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter clinic email address"
                            className="h-14 rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter 10-digit mobile number"
                          className="h-14 rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary placeholder:text-slate-400 dark:placeholder:text-slate-500"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">How can we help?</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your clinic size and specific needs..."
                          className="min-h-[120px] rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary resize-none p-4 text-base placeholder:text-slate-400 dark:placeholder:text-slate-500"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <Button type="submit" className="w-full h-14 rounded-2xl text-lg font-bold group" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <>
                            Request a Demo
                            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
