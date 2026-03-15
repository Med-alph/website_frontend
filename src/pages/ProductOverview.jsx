import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Activity,
    ArrowRight,
    CheckCircle2,
    Shield,
    Zap,
    Users,
    TrendingUp,
    Database,
    Layers,
    MousePointer2,
    Clock,
    Cpu,
    Mic,
    Image as ImageIcon,
    LayoutDashboard,
    Bell,
    Lock,
    Video,
    MessageSquare,
    Key,
    FileJson,
    CreditCard,
    PieChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { usePageTitle } from '@/hooks/usePageTitle';

const ProductOverview = () => {
    const navigate = useNavigate();
    usePageTitle(
        'Platform Overview | MedAlph EMR Suite',
        'Deep dive into the MedAlph EMR platform: clinical documentation, unified workflows, and scalable data layers designed for practitioners.'
    );
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 bg-slate-50 dark:bg-slate-950">
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="container relative z-10 px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider"
                            >
                                The Next-Gen EMR Platform
                            </motion.div>

                            <motion.h1
                                {...fadeInUp}
                                className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
                            >
                                A clinical operating system <br />
                                <span className="text-primary italic font-serif">refined</span> for modern care.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-muted-foreground leading-relaxed italic"
                            >
                                MedAlph isn't just a database. It's an intelligent workspace that adapts
                                to your clinical workflow, whether you're a single-doctor clinic or a multi-specialty hospital.
                            </motion.p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button size="lg" className="h-12 px-8 text-base font-semibold group" onClick={() => navigate('/contact')}>
                                    Request a Demo
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>

                        {/* Visual Dashboard Mockup */}
                        {/* Visual Dashboard Slider */}
                        <div className="relative block mt-12 lg:mt-0 h-[300px] md:h-[400px] lg:h-[500px] w-full max-w-[600px] mx-auto perspective-1000">
                            {(() => {
                                const [index, setIndex] = React.useState(0);
                                const images = [
                                    { src: "/images/docdash.png", alt: "Doctor Dashboard" },
                                    { src: "/images/analytics.png", alt: "Analytics Suite" },
                                    { src: "/images/patientportal.png", alt: "Patient Portal" }
                                ];

                                React.useEffect(() => {
                                    const timer = setInterval(() => {
                                        setIndex((prev) => (prev + 1) % images.length);
                                    }, 4000);
                                    return () => clearInterval(timer);
                                }, []);

                                return (
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-500/30 rounded-2xl blur-3xl opacity-40" />

                                        {/* Main Image Slider */}
                                        <div className="relative w-full aspect-[4/3]">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                                    exit={{ opacity: 0, x: -20, scale: 1.05 }}
                                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                                    className="absolute inset-0"
                                                >
                                                    <img
                                                        src={images[index].src}
                                                        alt={images[index].alt}
                                                        className="w-full h-full object-contain rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                                                        loading="lazy"
                                                    />

                                                    {/* Floating Label */}
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.3 }}
                                                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-lg"
                                                    >
                                                        <span className="text-sm font-semibold text-primary">{images[index].alt}</span>
                                                    </motion.div>
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>

                                        {/* Slider Indicators */}
                                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                                            {images.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setIndex(i)}
                                                    className={cn(
                                                        "w-2 h-2 rounded-full transition-all duration-300",
                                                        i === index ? "w-8 bg-primary" : "bg-slate-300 dark:bg-slate-700 hover:bg-primary/50"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Solver Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="py-24 md:py-32"
            >
                <div className="container px-4 md:px-6">
                    <div className="container px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {[
                                        {
                                            icon: Database,
                                            title: "Comprehensive EMR",
                                            desc: "Secure, cloud-based storage for all patient medical records, histories, and clinical notes.",
                                            color: "text-blue-600"
                                        },
                                        {
                                            icon: Clock,
                                            title: "Smart Scheduling",
                                            desc: "Seamless online booking flow with real-time availability and automated queue management.",
                                            color: "text-emerald-600"
                                        },
                                        {
                                            icon: TrendingUp,
                                            title: "Integrated Billing",
                                            desc: "Hassle-free invoicing with multi-channel payment support including Razorpay.",
                                            color: "text-indigo-600"
                                        },
                                        {
                                            icon: Zap,
                                            title: "Digital Prescriptions",
                                            desc: "Generate and share prescriptions directly via SMS or WhatsApp.",
                                            color: "text-rose-600"
                                        }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                            className="space-y-4 group"
                                        >
                                            <div className={cn("p-3 rounded-xl bg-slate-50 dark:bg-slate-900 w-fit group-hover:bg-primary/5 transition-colors")}>
                                                <item.icon className={cn("w-6 h-6", item.color)} />
                                            </div>
                                            <h3 className="text-xl font-bold">{item.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="order-1 lg:order-2 space-y-8">
                                <motion.h2
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="text-3xl md:text-5xl font-bold tracking-tight"
                                >
                                    Stop fighting software. <br />
                                    <span className="text-primary italic">Start healing faster.</span>
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-lg text-muted-foreground leading-relaxed"
                                >
                                    Legacy EMR systems are built for billing, not for doctors. MedAlph shifts the focus back to the patient.
                                    Our interface is designed to be invisible—letting you document while you talk, and manage while you heal.
                                </motion.p>
                                <div className="space-y-4 pt-4">
                                    {[
                                        "Optimized for high-volume OPD environments",
                                        "Cross-platform access: Web, Tablet, Mobile",
                                        "Integrated telemedicine for remote consults",
                                        "Auto-sync with national health registry"
                                    ].map((point, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                                            className="flex items-center gap-3"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="font-semibold text-slate-700 dark:text-slate-300">{point}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Module Overview (Layered Detail) */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="py-24 md:py-32 bg-slate-900 text-white"
            >
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-[800px] mx-auto space-y-6 mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl font-bold tracking-tight font-serif italic"
                        >
                            High-Tech Clinical Edge.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg text-slate-400"
                        >
                            MedAlph uses advanced AI to simplify complex clinical workflows, giving you more time for what matters: your patients.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Clinical Copilot",
                                subtitle: "Clinical Intelligence",
                                desc: "An AI-powered assistant that helps doctors during consultations with real-time insights.",
                                features: ["Automated Documentation", "Voice-to-SOAP Transcription", "Advanced Image Analysis"],
                                icon: Cpu
                            },
                            {
                                title: "Hospital Admin",
                                subtitle: "Operations Control",
                                desc: "Manage multiple branches, staff permissions, and inventory from one dashboard.",
                                features: ["Advanced RBAC", "Real-time Inventory", "Staff Attendance Tracking"],
                                icon: LayoutDashboard
                            },
                            {
                                title: "Patient Experience",
                                subtitle: "Engagement Suite",
                                desc: "High-quality video consults and a dedicated portal for patient engagement.",
                                features: ["Telehealth Module", "Automated Reminders", "Secure OTP Login"],
                                icon: Users
                            }
                        ].map((module, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-primary/50 transition-colors group"
                            >
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                                            <module.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-primary text-xs font-bold uppercase tracking-tighter">{module.subtitle}</span>
                                        <h3 className="text-2xl font-bold">{module.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{module.desc}</p>
                                    </div>
                                    <div className="space-y-3 pt-4 border-t border-slate-700/50">
                                        {module.features.map((f, j) => (
                                            <div key={j} className="flex items-center gap-2 text-sm font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {f}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Integration Section (The "Round thing" visual) */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="py-24 md:py-32"
            >
                <div className="container px-4 md:px-6">
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] p-8 md:p-20 overflow-hidden relative">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="text-3xl md:text-4xl font-bold tracking-tight dark:text-white"
                                >
                                    Connected clinical <br />
                                    <span className="text-primary italic">intelligence.</span>
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-lg text-muted-foreground leading-relaxed"
                                >
                                    MedAlph brings all your clinical modules together in one unified platform.
                                    From patient management to billing, AI copilot to telemedicine—everything works
                                    seamlessly to power your healthcare operations.
                                </motion.p>
                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="space-y-2"
                                    >
                                        <div className="text-3xl font-bold text-slate-900 dark:text-white">Unified</div>
                                        <div className="text-sm text-muted-foreground dark:text-slate-400">Data Standards</div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="space-y-2"
                                    >
                                        <div className="text-3xl font-bold text-slate-900 dark:text-white">15+</div>
                                        <div className="text-sm text-muted-foreground dark:text-slate-400">Integrated Modules</div>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="flex justify-center lg:justify-end">
                                <motion.div
                                    initial={{ opacity: 0, rotate: -10 }}
                                    whileInView={{ opacity: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="relative w-[300px] h-[300px] flex items-center justify-center"
                                >
                                    <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
                                    <div className="absolute inset-8 border border-slate-200 dark:border-slate-800 rounded-full" />

                                    {/* Center Icon */}
                                    <div className="z-10 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800">
                                        <Cpu className="w-12 h-12 text-primary" />
                                    </div>

                                    {/* Orbiting Module Icons */}
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700"
                                    >
                                        <Users className="w-5 h-5 text-blue-600" />
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700"
                                    >
                                        <CreditCard className="w-5 h-5 text-emerald-600" />
                                    </motion.div>

                                    <motion.div
                                        animate={{ x: [0, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                        className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700"
                                    >
                                        <Database className="w-5 h-5 text-rose-600" />
                                    </motion.div>

                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                        className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700"
                                    >
                                        <Video className="w-5 h-5 text-indigo-600" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Product CTA */}
            <section className="py-24">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Ready to see it in action?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-[600px]">
                            Discover how MedAlph's clinical operating system can transform your
                            productivity and patient satisfaction.
                        </p>
                        <div className="flex justify-center">
                            <Button size="xl" className="h-14 px-10 text-lg font-bold" onClick={() => navigate('/contact')}>
                                Schedule a Product Tour
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductOverview;
