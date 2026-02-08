import axios from 'axios';
let plansPromise = null;

export const fetchPublicPlans = async () => {
    if (plansPromise) return plansPromise;

    plansPromise = (async () => {
        try {
            const [plansRes, featuresRes] = await Promise.all([
                axios.get('https://backend-emr.medalph.com/api/app-admin/plans'),
                axios.get('https://backend-emr.medalph.com/api/app-admin/features')
            ]);

            const tierOrder = { starter: 1, professional: 2, enterprise: 3 };
            const plans = plansRes.data
                .filter(p => p.status === 'active')
                .sort((a, b) => (tierOrder[a.tier] || 0) - (tierOrder[b.tier] || 0));

            return { plans, features: featuresRes.data };
        } catch (error) {
            console.error('Error fetching plans:', error);
            plansPromise = null;
            throw error;
        }
    })();

    return plansPromise;
};
