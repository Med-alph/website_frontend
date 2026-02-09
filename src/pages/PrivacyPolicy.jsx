import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, Lock, Eye, Database, UserCheck } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

const PrivacyPolicy = () => {
    usePageTitle(
        'Privacy Policy | MedAlph',
        'Learn how MedAlph protects your data and respects your privacy. Our commitment to security and transparency.'
    );

    const sections = [
        {
            icon: Database,
            title: "Information We Collect",
            content: [
                {
                    subtitle: "Personal Information",
                    text: "We collect information you provide directly to us, including name, email address, phone number, and professional credentials when you register for our services or request a demo."
                },
                {
                    subtitle: "Health Information",
                    text: "As a healthcare platform, we process protected health information (PHI) on behalf of healthcare providers. This includes patient medical records, clinical notes, diagnostic results, and treatment plans."
                },
                {
                    subtitle: "Usage Data",
                    text: "We automatically collect information about how you interact with our platform, including access times, pages viewed, IP addresses, and device information."
                }
            ]
        },
        {
            icon: Lock,
            title: "How We Use Your Information",
            content: [
                {
                    subtitle: "Service Delivery",
                    text: "We use your information to provide, maintain, and improve our EMR platform, process transactions, and deliver customer support."
                },
                {
                    subtitle: "Security & Compliance",
                    text: "Your data helps us maintain security, prevent fraud, and comply with legal obligations including HIPAA and other healthcare regulations."
                },
                {
                    subtitle: "Communication",
                    text: "We may use your contact information to send service updates, security alerts, and respond to your inquiries."
                }
            ]
        },
        {
            icon: Shield,
            title: "Data Security",
            content: [
                {
                    subtitle: "Encryption",
                    text: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We employ industry-standard security measures to protect your information."
                },
                {
                    subtitle: "Access Controls",
                    text: "We implement strict role-based access controls (RBAC) and maintain comprehensive audit logs of all system access and data modifications."
                },
                {
                    subtitle: "Infrastructure",
                    text: "Our platform is hosted on Tier-4 data centers with 99.9% uptime SLA, regular security audits, and disaster recovery protocols."
                }
            ]
        },
        {
            icon: Eye,
            title: "Data Sharing & Disclosure",
            content: [
                {
                    subtitle: "Third-Party Service Providers",
                    text: "We may share data with trusted service providers who assist in operating our platform, such as cloud hosting providers and payment processors. All providers are bound by strict confidentiality agreements."
                },
                {
                    subtitle: "Legal Requirements",
                    text: "We may disclose information when required by law, court order, or to protect the rights, property, or safety of MedAlph, our users, or others."
                },
                {
                    subtitle: "Business Transfers",
                    text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
                }
            ]
        },
        {
            icon: UserCheck,
            title: "Your Rights & Choices",
            content: [
                {
                    subtitle: "Access & Correction",
                    text: "You have the right to access, update, or correct your personal information at any time through your account settings or by contacting us."
                },
                {
                    subtitle: "Data Portability",
                    text: "You can request a copy of your data in a structured, machine-readable format for transfer to another service provider."
                },
                {
                    subtitle: "Deletion",
                    text: "You may request deletion of your personal information, subject to legal retention requirements and legitimate business needs."
                }
            ]
        }
    ];

    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
                <div className="container px-4 md:px-6">
                    <div className="max-w-[900px] mx-auto text-center space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider"
                        >
                            <Shield className="w-4 h-4" />
                            Privacy Policy
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
                        >
                            Your Privacy is <br />
                            <span className="text-primary italic">Our Priority.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-muted-foreground max-w-[700px] mx-auto leading-relaxed"
                        >
                            Last updated: February 8, 2026
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 border-b border-slate-100 dark:border-slate-800">
                <div className="container px-4 md:px-6">
                    <div className="max-w-[800px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="prose prose-slate dark:prose-invert max-w-none"
                        >
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At MedAlph Healthcare Solutions, we understand the critical importance of protecting health information.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use
                                our electronic medical records (EMR) platform and related services.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                                We are committed to maintaining the highest standards of data protection and comply with all applicable
                                healthcare privacy regulations, including HIPAA (Health Insurance Portability and Accountability Act)
                                and other relevant data protection laws.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content Sections */}
            <section className="py-24">
                <div className="container px-4 md:px-6">
                    <div className="max-w-[900px] mx-auto space-y-16">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <section.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                                        {section.title}
                                    </h2>
                                </div>

                                <div className="space-y-6 pl-16">
                                    {section.content.map((item, idx) => (
                                        <div key={idx} className="space-y-2">
                                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                                {item.subtitle}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-[800px] mx-auto text-center space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Questions About Privacy?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            If you have any questions about this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <div className="flex flex-col items-center gap-2 text-muted-foreground">
                            <p className="font-semibold text-slate-900 dark:text-white">MedAlph Healthcare Solutions</p>
                            <p>Email: privacy@medalph.com</p>
                            <p>Phone: +91 63695 45178</p>
                            <p>Address: Coimbatore, Tamil Nadu, India</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
