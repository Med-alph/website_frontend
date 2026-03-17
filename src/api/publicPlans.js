import axios from 'axios';

const PLANS_URL = 'https://backend-emr.medalph.com/api/app-admin/plans';
const FEATURES_URL = 'https://backend-emr.medalph.com/api/app-admin/features';

let plansPromise = null;

/** Fetch as text first to avoid JSON parse errors when backend returns HTML (404/500) */
const safeGet = async (url) => {
    const res = await axios.get(url, { responseType: 'text' });
    const text = res.data;
    if (typeof text === 'string' && (text.trim().startsWith('<') || text.startsWith('The page'))) {
        return [];
    }
    try {
        const data = JSON.parse(text);
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
};

export const fetchPublicPlans = async () => {
    if (plansPromise) return plansPromise;

    plansPromise = (async () => {
        try {
            const [plansData, featuresData] = await Promise.all([
                safeGet(PLANS_URL),
                safeGet(FEATURES_URL),
            ]);

            const tierOrder = { starter: 1, professional: 2, enterprise: 3 };
            const plans = plansData
                .filter(p => p && p.status === 'active')
                .sort((a, b) => (tierOrder[a.tier] || 0) - (tierOrder[b.tier] || 0));

            return { plans, features: featuresData };
        } catch (error) {
            console.warn('Plans API unavailable:', error?.message || error);
            plansPromise = null;
            return { plans: [], features: [] };
        }
    })();

    return plansPromise;
};
