import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, UserX, CreditCard, Shield } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

const TermsOfService = () => {
    usePageTitle(
        'Terms of Service | MedAlph',
        'Read the terms and conditions for using MedAlph EMR platform. Our commitment to fair and transparent service.'
    );

    const sections = [
        {
            icon: FileText,
            title: "Acceptance of Terms",
            content: [
                {
                    text: "By accessing or using the MedAlph EMR platform ('Service'), you agree to be bound by these Terms of Service ('Terms'). If you disagree with any part of these terms, you may not access the Service."
                },
                {
                    text: "These Terms apply to all users of the Service, including healthcare providers, administrators, staff members, and patients accessing the patient portal."
                }
            ]
        },
        {
            icon: UserX,
            title: "User Accounts & Responsibilities",
            content: [
                {
                    subtitle: "Account Registration",
                    text: "You must provide accurate, complete, and current information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
                },
                {
                    subtitle: "Professional Use",
                    text: "Healthcare providers using this Service must maintain valid professional licenses and credentials. You agree to use the Service in compliance with all applicable healthcare regulations, including HIPAA."
                },
                {
                    subtitle: "Prohibited Activities",
                    text: "You may not use the Service for any unlawful purpose, to transmit malicious code, to attempt unauthorized access, or to interfere with the proper functioning of the platform."
                }
            ]
        },
        {
            icon: Shield,
            title: "Data Ownership & Usage",
            content: [
                {
                    subtitle: "Your Data",
                    text: "You retain all rights to the data you input into the Service, including patient records and clinical information. MedAlph acts as a data processor on your behalf."
                },
                {
                    subtitle: "License to MedAlph",
                    text: "You grant MedAlph a limited license to host, store, and process your data solely for the purpose of providing the Service to you."
                },
                {
                    subtitle: "Aggregated Data",
                    text: "MedAlph may use anonymized, aggregated data for analytics, research, and service improvement, provided such data cannot identify individual patients or users."
                }
            ]
        },
        {
            icon: CreditCard,
            title: "Billing & Payment",
            content: [
                {
                    subtitle: "Subscription Fees",
                    text: "Access to the Service requires payment of subscription fees as outlined in your selected pricing plan. Fees are billed in advance on a monthly or annual basis."
                },
                {
                    subtitle: "Payment Terms",
                    text: "You agree to provide valid payment information and authorize MedAlph to charge your payment method for all fees incurred. Failure to pay may result in suspension or termination of your account."
                },
                {
                    subtitle: "Refunds",
                    text: "Subscription fees are non-refundable except as required by law or as explicitly stated in your service agreement. You may cancel your subscription at any time, effective at the end of the current billing period."
                }
            ]
        },
        {
            icon: Scale,
            title: "Intellectual Property",
            content: [
                {
                    subtitle: "MedAlph Property",
                    text: "The Service, including its software, design, features, and content, is owned by MedAlph and protected by copyright, trademark, and other intellectual property laws."
                },
                {
                    subtitle: "Restrictions",
                    text: "You may not copy, modify, distribute, sell, or lease any part of our Service or included software, nor may you reverse engineer or attempt to extract the source code."
                },
                {
                    subtitle: "Feedback",
                    text: "Any feedback, suggestions, or ideas you provide about the Service may be used by MedAlph without obligation or compensation to you."
                }
            ]
        },
        {
            icon: AlertCircle,
            title: "Disclaimers & Limitations",
            content: [
                {
                    subtitle: "Service Availability",
                    text: "While we strive for 99.9% uptime, the Service is provided 'as is' without warranties of any kind. We do not guarantee uninterrupted or error-free operation."
                },
                {
                    subtitle: "Medical Decisions",
                    text: "MedAlph is a tool to assist healthcare providers. Final medical decisions and patient care remain the sole responsibility of licensed healthcare professionals."
                },
                {
                    subtitle: "Limitation of Liability",
                    text: "To the maximum extent permitted by law, MedAlph shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service."
                },
                {
                    subtitle: "Indemnification",
                    text: "You agree to indemnify and hold MedAlph harmless from any claims, damages, or expenses arising from your use of the Service or violation of these Terms."
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
                            <Scale className="w-4 h-4" />
                            Terms of Service
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
                        >
                            Clear Terms for <br />
                            <span className="text-primary italic">Fair Service.</span>
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
                                Welcome to MedAlph Healthcare Solutions. These Terms of Service govern your use of our
                                electronic medical records platform and related services. Please read these terms carefully
                                before using our Service.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                                By using MedAlph, you acknowledge that you have read, understood, and agree to be bound by
                                these Terms. We reserve the right to modify these Terms at any time, and will notify you of
                                significant changes via email or through the platform.
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
                                            {item.subtitle && (
                                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                                    {item.subtitle}
                                                </h3>
                                            )}
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

            {/* Additional Important Terms */}
            <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
                <div className="container px-4 md:px-6">
                    <div className="max-w-[900px] mx-auto space-y-8">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Additional Terms
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-3"
                            >
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                    Termination
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Either party may terminate the service agreement with 30 days written notice.
                                    Upon termination, you will have 90 days to export your data before it is permanently deleted.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="space-y-3"
                            >
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                    Governing Law
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    These Terms shall be governed by the laws of India. Any disputes shall be resolved
                                    through arbitration in Coimbatore, Tamil Nadu.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-3"
                            >
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                    Changes to Service
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We reserve the right to modify, suspend, or discontinue any part of the Service
                                    with reasonable notice to users.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="space-y-3"
                            >
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                    Severability
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    If any provision of these Terms is found to be unenforceable, the remaining
                                    provisions will continue in full force and effect.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-[800px] mx-auto text-center space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Questions About These Terms?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <div className="flex flex-col items-center gap-2 text-muted-foreground">
                            <p className="font-semibold text-slate-900 dark:text-white">MedAlph Healthcare Solutions</p>
                            <p>Email: legal@medalph.com</p>
                            <p>Phone: +91 12345 67890</p>
                            <p>Address: Coimbatore, Tamil Nadu, India</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TermsOfService;
