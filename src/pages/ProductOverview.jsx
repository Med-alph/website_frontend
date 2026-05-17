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
    PieChart,
    Sparkles,
    ShieldAlert,
    FlaskConical
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import SEO from '@/components/SEO';
import { getBreadcrumbSchema, getCanonicalUrl } from '@/config/seo';

const FeatureImageMockup = ({ src, alt, fallbackBg }) => {
    const [imageError, setImageError] = React.useState(false);

    return (
        <div className="relative group w-full aspect-[16/10] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/10">
            {/* Browser Top Bar */}
            <div className="h-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 px-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <span className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="mx-auto w-1/2 h-5 rounded bg-slate-200/50 dark:bg-slate-800/50 flex items-center justify-center">
                    <span className="text-[10px] text-muted-foreground select-none truncate">medalph.com/{alt.toLowerCase().replace(/\s+/g, '-')}</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="relative w-full h-[calc(100%-2rem)] bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
                {!imageError ? (
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-contain p-2 bg-slate-50 dark:bg-slate-950 transition-transform duration-300 group-hover:scale-[1.01]"
                        onError={() => setImageError(true)}
                        loading="lazy"
                    />
                ) : (
                    /* Elegant placeholder if screenshot is not yet uploaded */
                    <div className={cn("absolute inset-0 flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-gradient-to-br", fallbackBg)}>
                        {/* Abstract floating circles for high-end look */}
                        <div className="absolute w-40 h-40 rounded-full bg-primary/10 blur-2xl -top-10 -right-10 animate-pulse" />
                        <div className="absolute w-40 h-40 rounded-full bg-blue-500/10 blur-2xl -bottom-10 -left-10 animate-pulse" style={{ animationDelay: '1s' }} />

                        <div className="z-10 space-y-4 max-w-xs">
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-white/80 dark:bg-slate-800/80 shadow-md flex items-center justify-center border border-white/20">
                                <ImageIcon className="w-8 h-8 text-primary/80" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">{alt} Dashboard</h4>
                                <p className="text-[11px] text-muted-foreground leading-relaxed">
                                    Display screenshot by adding <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-[10px] text-primary">{src}</code> to your public images folder.
                                </p>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-semibold text-primary">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                                Custom Screenshot Placeholder
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const ProductOverview = () => {
    const navigate = useNavigate();
    const jsonLd = getBreadcrumbSchema([
        { name: 'Home', url: getCanonicalUrl('/') },
        { name: 'Services', url: getCanonicalUrl('/services') },
    ]);
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="flex flex-col w-full overflow-hidden">
            <SEO
                title="Services | Medalph"
                description="Explore Medalph services: appointment scheduling, patient record management, billing, EHR, clinical documentation, and more. Built for modern clinics."
                canonicalPath="/services"
                jsonLd={jsonLd}
            />
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
                                    { src: "/images/doctor-dashboard.png", alt: "Doctor Dashboard" },
                                    { src: "/images/admin-dash.png", alt: "Analytics Suite" },
                                    { src: "/images/patientportal.png", alt: "Patient Portal" },
                                    { src: "/images/billing.png", alt: "Billing" },
                                    { src: "/images/admin-revenue-dash.png", alt: "Revenue Dashboard" },
                                    { src: "/images/inventory.png", alt: "Inventory Management" },
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
                                            desc: "Seamless online booking flow with real-time availability and intelligent queue management.",
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

            {/* Advanced Intelligent Features alternating section */}
            <section className="py-24 md:py-32 bg-slate-50/50 dark:bg-slate-900/10 border-y border-slate-100 dark:border-slate-800/80">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-[800px] mx-auto space-y-6 mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider animate-pulse"
                        >
                            Next-Gen Clinical Features
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
                        >
                            Supercharge your practice with <br />
                            <span className="text-primary italic font-serif">clinical intelligence.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            Equip your clinicians and administrative teams with advanced machine-learning assets and visual clinical records built to fit naturally within active health operations.
                        </motion.p>
                    </div>

                    <div className="space-y-32">
                        {[
                            {
                                badge: "AI Clinical Copilot",
                                title: "AI Clinical Copilot",
                                description: "A stateless, secure clinical assistant designed to streamline documentation tasks and summarize patient trends at the point of care.",
                                points: [
                                    "SOAP Documentation Review: Semantic validation that audits clinical notes on the fly for consistency and completeness before they are finalized.",
                                    "Visit-to-Visit Trend Tracking: Compares current notes with the patient's past visits, highlighting differences in symptoms, vitals, and medications.",
                                    "Discharge Summaries: Generates structured discharge notes and patient-friendly instructions directly from consult files in seconds."
                                ],
                                image: "/images/ai-copilot.png",
                                fallbackBg: "from-indigo-500/10 via-purple-500/5 to-pink-500/10 dark:from-indigo-950/30 dark:via-purple-950/20 dark:to-pink-950/30",
                                icon: Sparkles,
                                colorClass: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50"
                            },
                            {
                                badge: "AI Prescription Check",
                                title: "AI Allergy & Conflict Identifier",
                                description: "A real-time safety screen that runs in the background to protect patients from harmful drug conflicts.",
                                points: [
                                    "Point-of-Care Check: Cross-references proposed prescriptions against patient allergies, medical history, and past surgeries instantly.",
                                    "Safety Status Warnings: Displays visual safety levels (Safe, Caution, High Risk) with detailed descriptions of potential contraindications.",
                                    "Alternative Considerations: Suggests clinical alternative parameters for the physician to review before confirming orders."
                                ],
                                image: "/images/allergy-ai.png",
                                fallbackBg: "from-rose-500/10 via-orange-500/5 to-red-500/10 dark:from-rose-950/30 dark:via-orange-950/20 dark:to-red-950/30",
                                icon: ShieldAlert,
                                colorClass: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border border-rose-100 dark:border-rose-900/50"
                            },
                            {
                                badge: "Billing & Ledger",
                                title: "Revenue Summary & Cashier Ledger",
                                description: "A centralized billing and payment collection dashboard that tracks all hospital income channels.",
                                points: [
                                    "Unified Cashier Queue: Lists all pending payments from clinical consults, lab orders, procedures, and pharmacies in one place.",
                                    "Flexible Settlements: Supports manual settlement tracking (Cash, UPI, Credit limit deductions) alongside online Razorpay and Stripe checkouts.",
                                    "Financial Auditing: Features account receivables tracking and high-fidelity CSV/Excel financial exports for simple bookkeeping."
                                ],
                                image: "/images/admin-revenue-dash.png",
                                fallbackBg: "from-emerald-500/10 via-teal-500/5 to-cyan-500/10 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-cyan-950/30",
                                icon: TrendingUp,
                                colorClass: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/50"
                            },
                            {
                                badge: "Diagnostic Portal",
                                title: "Digital Laboratory Records",
                                description: "A connected diagnostic portal that streamlines lab order creation and patient result tracking.",
                                points: [
                                    "Direct Lab Ordering: Allows doctors to order blood panels, diagnostic tests, or imaging directly inside the patient consultation view.",
                                    "Order Workflow Tracking: Monitors the status of every test through its lifecycle (Pending, Processing, Completed) to ensure no order is missed.",
                                    "Integrated Patient History: Stores all completed diagnostic results directly under the patient's secure timeline for instant historical review."
                                ],
                                image: "/images/lab-records.png",
                                fallbackBg: "from-blue-500/10 via-sky-500/5 to-cyan-500/10 dark:from-blue-950/30 dark:via-sky-950/20 dark:to-cyan-950/30",
                                icon: FlaskConical,
                                colorClass: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50"
                            }
                        ].map((feature, i) => {
                            const IconComponent = feature.icon;
                            const isEven = i % 2 === 1;

                            return (
                                <div key={i} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                                    {/* Text Content */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6 }}
                                        className={cn("space-y-6", isEven ? "lg:order-last" : "")}
                                    >
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className={cn("p-2 rounded-xl border flex items-center justify-center", feature.colorClass)}>
                                                    <IconComponent className="w-5 h-5 animate-pulse" />
                                                </div>
                                                <span className="text-xs font-extrabold uppercase tracking-widest text-primary/80">
                                                    {feature.badge}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                                                {feature.title}
                                            </h3>
                                            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-normal">
                                                {feature.description}
                                            </p>
                                        </div>

                                        <div className="space-y-3.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                                            {feature.points.map((point, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-snug">
                                                        {point}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Visual Mockup */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6 }}
                                        className={isEven ? "lg:order-first" : ""}
                                    >
                                        <FeatureImageMockup 
                                            src={feature.image} 
                                            alt={feature.title} 
                                            fallbackBg={feature.fallbackBg} 
                                        />
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

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
                                features: ["Smart Documentation", "Voice-to-SOAP Transcription", "Advanced Image Analysis"],
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
                                features: ["Telehealth Module", "Smart Reminders", "Secure OTP Login"],
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
