import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    Shield,
    Lock,
    Eye,
    FileText,
    Server,
    UserCheck,
    CheckCircle2,
    Award,
    Globe,
    ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { usePageTitle } from '@/hooks/usePageTitle';

const Security = () => {
    usePageTitle(
        'Security & Clinical Integrity | MedAlph',
        'Learn about our HIPAA-ready architecture, AES-256 encryption, and operational privacy protocols that keep patient data safe.'
    );
    const securityFeatures = [
        {
            title: "Data Encryption",
            desc: "All patient data is encrypted at rest using AES-256 and in transit using TLS 1.3. We ensure your clinical records never leak.",
            icon: Lock,
            color: "bg-blue-500"
        },
        {
            title: "Indian Health Standards",
            desc: "Built from the ground up to comply with digital healthcare data privacy laws in India.",
            icon: Shield,
            color: "bg-indigo-500"
        },
        {
            title: "Strict Audit Logs",
            desc: "Every single interaction with a patient record is logged with a timestamp and user ID. Know exactly who saw what.",
            icon: Eye,
            color: "bg-emerald-500"
        },
        {
            title: "Role-Based Access",
            desc: "Granular permissions for doctors, nurses, and admin staff. Ensure employees only see the data they need.",
            icon: UserCheck,
            color: "bg-rose-500"
        },
        {
            title: "Tier-IV Data Centers",
            desc: "Hosted on enterprise infrastructure with 99.9% uptime guarantee and automatic regional failover.",
            icon: Server,
            color: "bg-amber-500"
        },
        {
            title: "Regulatory Compliance",
            desc: "Regular 3rd party audits and automated vulnerability scanning to keep the system robust.",
            icon: FileText,
            color: "bg-cyan-500"
        }
    ];

    return (
        <div className="flex flex-col w-full bg-background pt-24 pb-24 md:pt-32">
            <Helmet>
                <title>Security - Medalph Medical Software</title>
                <meta name="description" content="Medalph takes data security seriously. Learn how we protect your clinic and patient data with enterprise-grade security." />
                <link rel="canonical" href="https://www.medalph.com/security" />
            </Helmet>
            {/* Hero */}
            <section className="container px-4 md:px-6 mb-24">
                <div className="flex flex-col items-center text-center space-y-6 max-w-[900px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-primary/10 rounded-full"
                    >
                        <Shield className="w-12 h-12 text-primary" />
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                        Security that honors the <br />
                        <span className="text-primary italic">Hippocratic Oath.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                        "First, do no harm" applies to data too. We treat patient privacy as a clinical requirement, not just a technical one.
                    </p>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {securityFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group space-y-4"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center transition-all group-hover:bg-primary/5">
                                <feature.icon className="w-7 h-7 text-slate-700 group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold dark:text-white">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Compliance Certificates Placeholder */}
            <section className="mt-32 border-t border-slate-100 dark:border-slate-800 pt-24">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-slate-950 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px]" />
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-3xl md:text-4xl font-bold tracking-tight leading-tight"
                                >
                                    Beyond code: <br />
                                    Operational Clinical Trust.
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-slate-400 text-lg leading-relaxed"
                                >
                                    Our commitment to security extends beyond the app. We train our entire engineering
                                    team on healthcare-specific privacy protocols and maintain strict internal access controls.
                                </motion.p>
                                <div className="space-y-4 pt-4">
                                    {[
                                        "Annual 3rd party penetration tests",
                                        "Automated SOC2-aligned monitoring",
                                        "Encrypted daily off-site backups",
                                        "Strict employee data handling training"
                                    ].map((point, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                                            className="flex items-center gap-3"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="font-semibold text-slate-300">{point}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Access Control", subtitle: "Role-Based", icon: UserCheck },
                                    { label: "Data Privacy", subtitle: "Strict", icon: Shield },
                                    { label: "SOC 2", subtitle: "Type II", icon: FileText },
                                    { label: "99.9% Uptime", subtitle: "Guaranteed", icon: Server }
                                ].map((cert, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                                        className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center hover:bg-white/10 transition-all cursor-default"
                                    >
                                        <cert.icon className="w-10 h-10 text-primary mb-2" />
                                        <div className="text-center">
                                            <div className="text-white font-bold text-lg">{cert.label}</div>
                                            <div className="text-slate-400 text-xs">{cert.subtitle}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Compliance & Standards */}
            <section className="mt-32 py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center space-y-8 max-w-[900px] mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Compliance & Security Standards
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            MedAlph is built to meet the highest standards of healthcare data security and privacy.
                            Our platform undergoes regular third-party audits and maintains compliance with international
                            healthcare regulations.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 pt-8 text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="space-y-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Privacy Standards</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Privacy-first architecture with strict data isolation policies
                                    and adherence to Indian healthcare data protection regulations.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Lock className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Data Protection</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Comprehensive information security management with strict data access controls
                                    and regular security audits.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="space-y-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Globe className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Patient Control</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Full support for patient consent management, data portability,
                                    and transparent privacy policies.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="space-y-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Award className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Continuous Monitoring</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    24/7 security monitoring, automated vulnerability scanning, and annual penetration
                                    testing by certified third-party security firms.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Security;
