import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Activity,
    ArrowRight,
    Calendar,
    Clock,
    Cpu,
    CreditCard,
    Database,
    FileText,
    Image as ImageIcon,
    LayoutDashboard,
    Mail,
    MessageSquare,
    Mic,
    Package,
    Phone,
    PieChart,
    Shield,
    Smartphone,
    TrendingUp,
    Users,
    Video,
    Zap,
    ClipboardList,
    Stethoscope,
    FileBarChart,
    Bell,
    UserCheck,
    CalendarClock,
    Settings,
    Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { usePageTitle } from '@/hooks/usePageTitle';

const Modules = () => {
    const navigate = useNavigate();
    usePageTitle(
        'All Modules | MedAlph EMR Platform',
        'Explore all 15 modules of the MedAlph EMR platform: clinical documentation, billing, scheduling, AI copilot, telemedicine, and more.'
    );

    const moduleCategories = [
        {
            category: "AI-Powered Clinical Intelligence",
            description: "Advanced AI tools for clinical decision-making and documentation",
            modules: [
                {
                    title: "Medical Copilot",
                    desc: "AI-powered clinical insights and automated documentation assistant with real-time chat assistance and context-aware medical suggestions.",
                    icon: Cpu,
                    color: "bg-blue-600"
                },
                {
                    title: "Dermatology Suite",
                    desc: "AI-powered clinical image analysis with patient image gallery, before/after comparison, and session-based progress monitoring.",
                    icon: ImageIcon,
                    color: "bg-rose-600"
                }
            ]
        },
        {
            category: "Patient & Appointment Management",
            description: "Complete patient lifecycle management from registration to consultation",
            modules: [
                {
                    title: "Patient Management",
                    desc: "Comprehensive patient record management with registration, medical history tracking, demographics, and advanced search capabilities.",
                    icon: Users,
                    color: "bg-indigo-600"
                },
                {
                    title: "Appointment Management",
                    desc: "Smart scheduling with real-time booking, automated queue management, doctor availability tracking, and cancellation handling.",
                    icon: Calendar,
                    color: "bg-amber-600"
                },
                {
                    title: "Doctor Management",
                    desc: "Healthcare provider management with profiles, specializations, schedule management, and consultation tracking.",
                    icon: Stethoscope,
                    color: "bg-cyan-600"
                },
                {
                    title: "Patient Portal",
                    desc: "Self-service portal with patient registration, online booking, appointment history, OTP verification, and profile management.",
                    icon: Smartphone,
                    color: "bg-purple-600"
                }
            ]
        },
        {
            category: "Billing & Financial Operations",
            description: "Streamlined revenue management and payment processing",
            modules: [
                {
                    title: "Billing & Payments",
                    desc: "Integrated billing with Razorpay, invoice generation, payment processing, cashier dashboard, and multi-branch revenue tracking.",
                    icon: CreditCard,
                    color: "bg-green-600"
                },
                {
                    title: "Reports & Analytics",
                    desc: "Business intelligence dashboards with invoice reports, performance metrics, and real-time analytics for data-driven decisions.",
                    icon: FileBarChart,
                    color: "bg-violet-600"
                }
            ]
        },
        {
            category: "Hospital Operations & Staff Management",
            description: "End-to-end operational management for healthcare facilities",
            modules: [
                {
                    title: "Inventory & Stock Management",
                    desc: "Track medical supplies and pharmacy stock with item management, expiry alerts, low stock notifications, and multi-location tracking.",
                    icon: Package,
                    color: "bg-orange-600"
                },
                {
                    title: "Staff Management",
                    desc: "Comprehensive staff administration with profiles, role-based access control (RBAC), permission management, and staff assignment.",
                    icon: UserCheck,
                    color: "bg-teal-600"
                },
                {
                    title: "Leave Management",
                    desc: "Employee leave tracking with request submission, approval workflow, leave balance tracking, and complete leave history.",
                    icon: CalendarClock,
                    color: "bg-pink-600"
                },
                {
                    title: "Attendance Management",
                    desc: "Staff check-ins and attendance tracking with doctor and staff attendance, calendar view, and check-in/check-out monitoring.",
                    icon: Clock,
                    color: "bg-blue-500"
                },
                {
                    title: "Multi-Tenant Administration",
                    desc: "Tenant and hospital management with multi-branch support, hospital settings, consent management, and email templates.",
                    icon: Building2,
                    color: "bg-slate-600"
                }
            ]
        },
        {
            category: "Communication & Telemedicine",
            description: "Remote care and automated patient engagement tools",
            modules: [
                {
                    title: "Video Consultations",
                    desc: "Telemedicine capabilities with video call support for remote consultations and virtual patient care.",
                    icon: Video,
                    color: "bg-red-600"
                },
                {
                    title: "Reminders & Notifications",
                    desc: "Automated system with appointment reminders, custom notifications, real-time alerts for leave requests and image uploads.",
                    icon: Bell,
                    color: "bg-emerald-600"
                }
            ]
        }
    ];

    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
                <div className="container px-4 md:px-6">
                    <div className="max-w-[900px] mx-auto text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider"
                        >
                            <Zap className="w-4 h-4" />
                            Complete Platform
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white"
                        >
                            15 Powerful Modules for <br />
                            <span className="text-primary italic">Complete Clinical Control.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed"
                        >
                            From AI-powered clinical intelligence to seamless billing and telemedicine—everything you need to run a modern healthcare practice.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Button size="lg" className="h-12 px-8 text-base font-semibold group" onClick={() => navigate('/contact')}>
                                Request Demo
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold" onClick={() => navigate('/pricing')}>
                                View Pricing
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Modules Grid by Category */}
            <section className="py-24 md:py-32">
                <div className="container px-4 md:px-6">
                    <div className="space-y-24">
                        {moduleCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-12"
                            >
                                {/* Category Header */}
                                <div className="text-center max-w-[700px] mx-auto space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                                        {category.category}
                                    </h2>
                                    <p className="text-lg text-muted-foreground">
                                        {category.description}
                                    </p>
                                </div>

                                {/* Modules Grid */}
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {category.modules.map((module, moduleIndex) => (
                                        <motion.div
                                            key={moduleIndex}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: moduleIndex * 0.05 }}
                                        >
                                            <Card className="group hover:border-primary/20 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 h-full">
                                                <CardContent className="pt-8 pb-6 px-6 space-y-4">
                                                    <div className={cn(
                                                        "w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110",
                                                        "bg-slate-50 dark:bg-slate-800 group-hover:bg-primary/10"
                                                    )}>
                                                        <module.icon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors" />
                                                    </div>
                                                    <h3 className="text-lg font-bold dark:text-white">
                                                        {module.title}
                                                    </h3>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                                        {module.desc}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-[800px] mx-auto text-center space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Ready to transform your <br />
                            <span className="text-primary italic">clinical operations?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Join hundreds of healthcare providers who trust MedAlph for their complete clinical workflow.
                        </p>
                        <Button size="xl" className="h-14 px-10 text-lg font-bold group" onClick={() => navigate('/contact')}>
                            Schedule a Demo
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Modules;
