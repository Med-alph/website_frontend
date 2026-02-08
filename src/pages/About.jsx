import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Shield, Users, Target, Heart, ArrowRight, Database, Building2, Stethoscope, Microscope, Tablet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { usePageTitle } from '@/hooks/usePageTitle';

const About = () => {
  const navigate = useNavigate();
  usePageTitle(
    'About MedAlph | Our Mission & Clinical Philosophy',
    'Learn how MedAlph is redefining EMR software with a focus on clinician experience, data integrity, and patient outcomes.'
  );

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered",
      desc: "Every line of code we write is aimed at improving the human interaction between a doctor and a patient."
    },
    {
      icon: Shield,
      title: "Clinical Trust",
      desc: "We treat data privacy as a medical requirement, ensuring HIPAA-ready security at every layer."
    },
    {
      icon: Target,
      title: "Technical Excellence",
      desc: "We use modern, scalable technologies to ensure 99.9% uptime for critical healthcare operations."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background pt-24 pb-24 md:pt-32">
      {/* Hero Section */}
      <section className="container px-4 md:px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider"
            >
              Our Story
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight"
            >
              Reimagining the <br />
              <span className="text-primary italic">Clinical Operating System.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed italic"
            >
              MedAlph was founded on a simple realization: medical software shouldn't get in the way of medicine.
              We're building tools that work as hard as the clinicians who use them.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl" />
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
              <img src="/src/assets/Team.jpg" alt="MedAlph Team" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800"
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-[800px] mb-16 space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Our Core Philosophy
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              We believe that great healthcare software must be invisible, secure, and deeply integrated.
              Our values guide every capability we implement.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                className="space-y-4 p-8 bg-background border border-border rounded-3xl shadow-sm hover:shadow-md transition-shadow dark:bg-slate-950"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Deep Mission */}
      <section className="container px-4 md:px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative w-full h-full rounded-full border-2 border-dashed border-primary/20 p-8 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 shadow-inner flex items-center justify-center overflow-hidden border-4 border-white dark:border-slate-700">
                <img
                  src="/src/assets/about.jpg"
                  alt="MedAlph Mission"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
          <div className="order-1 lg:order-2 space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
            >
              Empowering the <br />
              <span className="text-primary italic">Backbone of Healthcare.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              From rural polyclinics to urban tertiary hospitals, MedAlph is designed to bridge the gap between
              clinical data and patient care. We're not just a software vendor—we're an operational partner
              to thousands of healthcare providers.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-1"
              >
                <div className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-tighter">Clinical Excellence</div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest text-primary">Patient First</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-1"
              >
                <div className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-tighter">Technical Integrity</div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest text-primary">Secure by Design</div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <Button className="h-14 px-10 text-lg font-bold group" onClick={() => navigate('/contact')}>
                Join our Mission
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default About;
