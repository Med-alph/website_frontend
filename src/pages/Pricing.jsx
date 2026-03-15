import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Activity, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { usePageTitle } from '@/hooks/usePageTitle';

import { useState, useEffect } from 'react';
import { fetchPublicPlans } from '@/api/publicPlans';

const Pricing = () => {
    const navigate = useNavigate();
    usePageTitle(
        'Transparent Pricing | MedAlph Healthcare Platform',
        'Choose the EMR plan that fits your practice scale. From single-doctor clinics to full-size enterprise hospital chains.'
    );

    const [loading, setLoading] = useState(true);
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const getPlans = async () => {
            try {
                const data = await fetchPublicPlans();
                if (isMounted) {
                    setPlans(data.plans);
                }
            } catch (error) {
                console.error("Failed to load plans", error);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };
        getPlans();
        return () => { isMounted = false; };
    }, []);

    const getTierStyles = (tier) => {
        switch (tier) {
            case 'starter':
                return {
                    gradient: "from-blue-600 to-blue-400",
                    border: "border-blue-100 dark:border-blue-900/30",
                    highlight: false
                };
            case 'professional':
                return {
                    gradient: "from-emerald-600 to-teal-400",
                    border: "border-emerald-100 dark:border-emerald-900/30",
                    highlight: true
                };
            case 'enterprise':
                return {
                    gradient: "from-amber-500 to-orange-400",
                    border: "border-amber-100 dark:border-amber-900/30",
                    highlight: false
                };
            default:
                return {
                    gradient: "from-slate-600 to-slate-400",
                    border: "border-slate-100 dark:border-slate-800",
                    highlight: false
                };
        }
    };

    const PricingSkeleton = () => (
        <div className="grid lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto w-full">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col h-[600px] rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-10 space-y-8 animate-pulse">
                    <div className="space-y-4">
                        <div className="w-12 h-1 rounded-full bg-slate-200 dark:bg-slate-800" />
                        <div className="w-32 h-8 bg-slate-200 dark:bg-slate-800 rounded-lg" />
                        <div className="w-48 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg" />
                    </div>
                    <div className="flex-grow space-y-4 pt-8">
                        {[1, 2, 3, 4, 5].map((j) => (
                            <div key={j} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800" />
                                <div className="w-full h-4 bg-slate-100 dark:bg-slate-800 rounded" />
                            </div>
                        ))}
                    </div>
                    <div className="w-full h-14 bg-slate-200 dark:bg-slate-800 rounded-2xl mt-auto" />
                </div>
            ))}
        </div>
    );

    return (
        <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 pt-24 pb-24 md:pt-32">
            <Helmet>
                <title>Pricing - Medalph Medical Software</title>
                <meta name="description" content="Simple, transparent pricing for Medalph clinic management software. Find the right plan for your healthcare practice." />
                <link rel="canonical" href="https://www.medalph.com/pricing" />
            </Helmet>
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider"
                    >
                        Transparent Pricing
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
                    >
                        Simple plans for <span className="text-primary italic">every scale.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-[700px]"
                    >
                        No hidden fees. No complex contracts. Choose the plan that fits clinical needs perfectly.
                    </motion.p>
                </div>

                {loading ? <PricingSkeleton /> : (
                    <div className="grid lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                        {plans.map((plan, i) => {
                            const styles = getTierStyles(plan.tier);
                            return (
                                <motion.div
                                    key={plan.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                                    className="flex"
                                >
                                    <Card className={cn(
                                        "relative flex flex-col border-none shadow-xl transition-all duration-300 hover:-translate-y-2 w-full",
                                        styles.highlight ? "bg-slate-950 dark:bg-slate-900 text-white ring-2 ring-primary scale-105 z-10" : "bg-white dark:bg-slate-900/50"
                                    )}>
                                        {styles.highlight && (
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                                Most Popular
                                            </div>
                                        )}
                                        <CardHeader className="space-y-4 pt-10 px-8">
                                            <div className={cn("w-12 h-1 rounded-full bg-gradient-to-r mb-2", styles.gradient)} />
                                            <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl md:text-5xl font-bold tracking-tight">₹{Number(plan.price).toLocaleString('en-IN')}</span>
                                                <span className={cn("text-sm capitalize", styles.highlight ? "text-slate-400" : "text-muted-foreground")}>
                                                    / {plan.billing_cycle === 'monthly' ? 'mo' : 'yr'}
                                                </span>
                                            </div>
                                            <p className={cn("text-sm leading-relaxed", styles.highlight ? "text-slate-400" : "text-muted-foreground")}>
                                                {plan.description}
                                            </p>
                                        </CardHeader>
                                        <CardContent className="flex-grow space-y-6 pt-6 px-8">
                                            <div className="space-y-4">
                                                {plan.planFeatures.map((pf) => (
                                                    <div key={pf.id} className="flex items-center gap-3">
                                                        <CheckCircle2 className={cn("w-5 h-5 shrink-0", styles.highlight ? "text-primary" : "text-primary")} />
                                                        <span className="text-sm font-medium">
                                                            {pf.feature?.name}
                                                            {pf.limit_value && pf.limit_value !== "unlimited" && ` (up to ${pf.limit_value})`}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <CardFooter className="pb-10 px-8">
                                            <Button
                                                className={cn(
                                                    "w-full h-12 text-base font-bold transition-all duration-300",
                                                    styles.highlight ? "bg-primary hover:bg-primary/90 text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 shadow-none"
                                                )}
                                                variant={styles.highlight ? "default" : "secondary"}
                                                onClick={() => navigate(`/contact?plan=${plan.id}`)}
                                            >
                                                {plan.tier === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-24 max-w-[800px] mx-auto grid md:grid-cols-2 gap-12"
                >
                    <div className="flex gap-4">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Shield className="w-5 h-5 text-primary" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg">Secure & Compliant</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                All plans include HIPAA-ready architecture and end-to-end encryption by default.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Zap className="w-5 h-5 text-primary" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg">Instant Deployment</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Get started in under 30 minutes. Our migration team helps you transfer data for free.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Pricing;
