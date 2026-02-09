import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Zap, TrendingUp, Users, Activity, Cpu, Mic, Image as ImageIcon, Clock, LayoutDashboard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { usePageTitle } from '@/hooks/usePageTitle';
import { cn } from "@/lib/utils";

const Home = () => {
  const navigate = useNavigate();
  usePageTitle(
    'MedAlph | Modern EMR for Faster Clinics & Smarter Hospitals',
    'Experience a clinically trustworthy and technically powerful EMR built for the Indian healthcare ecosystem. Manage patients, billing, and clinical records in one platform.'
  );
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            >
              <Zap className="w-4 h-4" />
              <span>Built for modern healthcare</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white max-w-[1000px]"
            >
              Modern EMR built for <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">faster</span> clinics and <span className="text-primary italic">smarter</span> hospitals.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-[750px] leading-relaxed"
            >
              Manage patients, records, billing, and analytics
              — securely, in one platform. Designed for excellence in the Indian healthcare ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="h-12 px-8 text-base font-semibold group" onClick={() => navigate('/contact')}>
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold" onClick={() => navigate('/services')}>
                View Product
              </Button>
            </motion.div>

            {/* Tech Standards bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-16 border-t border-slate-100 dark:border-slate-800 w-full mt-12"
            >
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {[
                  { icon: Shield, label: "HIPAA Ready Architecture" },
                  { icon: Activity, label: "Unified Clinical Workflows" },
                  { icon: Zap, label: "99.9% Uptime SLA" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-muted-foreground">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Snapshot Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-24 md:py-32 bg-slate-50/80 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800"
      >
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider"
              >
                Our Dashboard
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
              >
                Everything you need <br />
                <span className="text-primary">in one single pane.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed italic"
              >
                "We transformed our operational efficiency by 40% in just 3 months after switching to MedAlph."
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Smart Scheduling", desc: "Reduce no-shows by 25% with automated reminders." },
                  { title: "Unified EHR", desc: "Instant access to patient history from any device." },
                  { title: "Direct Billing", desc: "Generate invoices and collect payments instantly." },
                  { title: "Clinical Insights", desc: "Real-time analytics for hospital management." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {item.title}
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-blue-400/10 to-transparent rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden aspect-[4/3]">
                <img
                  src="/images/dashboard.png"
                  alt="MedAlph Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Modules Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-24 md:py-32"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-[600px] space-y-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold tracking-tight"
              >
                Designed for clinical <br />
                <span className="text-primary">outcomes.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed italic"
              >
                Our modular approach allows you to scale from a single clinic to a multi-city hospital chain without friction.
              </motion.p>
            </div>
            <Button variant="link" className="text-primary font-bold group p-0" onClick={() => navigate('/modules')}>
              Explore all 15 modules
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Medical Copilot", desc: "AI-powered clinical insights and automated documentation assistant during consultations.", icon: Cpu, color: "bg-blue-600" },
              { title: "Voice-to-SOAP", desc: "Transcribe spoken consultations into structured SOAP notes using AI-powered technology.", icon: Mic, color: "bg-emerald-600" },
              { title: "Integrated Billing", desc: "Hassle-free invoicing with Razorpay and multi-branch revenue tracking.", icon: TrendingUp, color: "bg-indigo-600" },
              { title: "Dermatology Suite", desc: "AI-powered clinical image analysis and progress comparison tools.", icon: ImageIcon, color: "bg-rose-600" },
              { title: "Smart Scheduling", desc: "Real-time booking and automated queue management to reduce wait times.", icon: Clock, color: "bg-amber-600" },
              { title: "Inventory & HIMS", desc: "Track medical supplies, pharmacy stock, and staff check-ins across locations.", icon: LayoutDashboard, color: "bg-cyan-600" },
            ].map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="group hover:border-primary/20 transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
                  <CardContent className="pt-10 pb-8 px-8">
                    <div className={cn(
                      "mb-6 w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:rotate-6",
                      "bg-slate-50 dark:bg-slate-800 group-hover:bg-primary/10"
                    )}>
                      <module.icon className="w-7 h-7 text-slate-700 group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 dark:text-white">{module.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {module.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Trust Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 md:py-32 bg-slate-950 relative overflow-hidden text-white border-b border-slate-900"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-0" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-12">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-6"
              >
                <div className="p-4 bg-primary/20 rounded-full">
                  <Shield className="w-12 h-12 text-primary" />
                </div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold tracking-tight"
              >
                Clinically Trustworthy. <br />
                <span className="text-primary italic">Technically Powerful.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-slate-400 max-w-[750px] leading-relaxed"
              >
                Healthcare requires zero compromise on security. We build with the world's most
                stringent data protection protocols as our baseline.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {[
                { label: "Privacy Focused", detail: "Built with privacy-by-design principles to protect patient confidentiality.", icon: Shield },
                { label: "Data Encryption", detail: "End-to-end encryption for all patient and clinical data.", icon: Shield },
                { label: "99.9% Uptime", detail: "Tier-4 data centers ensuring your clinic never stops.", icon: Zap },
                { label: "Role-Based Access", detail: "Strict audit logs for every interaction with patient files.", icon: Users },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl space-y-4 text-left group hover:bg-slate-900 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{item.label}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 md:py-32 overflow-hidden"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold tracking-tight"
            >
              Trusted by the world's <br />
              <span className="text-primary">best clinicians.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The transition to MedAlph was seamless. Our doctors spend less time on screens and more time with patients now.",
                author: "Dr. Rajesh Kumar",
                role: "Medical Director, City Hospital"
              },
              {
                text: "Finally an EMR that understands Indian clinical workflows. The billing module alone saved us hours of manual work.",
                author: "Dr. Ananya Sharma",
                role: "Founder, Sharma Clinics"
              },
              {
                text: "Security was our biggest concern. MedAlph's HIPAA-ready architecture gave us the confidence to go 100% digital.",
                author: "Amit Verma",
                role: "IT Head, Vital Labs"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-none p-8 relative h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Activity className="w-6 h-6" />
                  </div>
                  <CardContent className="space-y-6 pt-4 px-0">
                    <p className="text-lg font-medium leading-relaxed">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700" />
                      <div>
                        <div className="font-bold dark:text-white">{t.author}</div>
                        <div className="text-xs text-muted-foreground uppercase font-semibold">{t.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary rounded-[3rem] p-12 md:p-24 text-primary-foreground text-center space-y-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-[0.03] rotate-12 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Ready to modernize <br /> your healthcare practice?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl opacity-90 max-w-[700px] mx-auto leading-relaxed"
            >
              Join forward-thinking healthcare providers across India who trust MedAlph for their clinical operations.
              Schedule a personalized tour today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center"
            >
              <Button size="xl" variant="secondary" className="h-14 px-10 text-lg font-bold group" onClick={() => navigate('/contact')}>
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
