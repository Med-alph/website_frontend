import axios from 'axios';

const BASE_URL = 'https://backend-emr.medalph.com/api';

export const submitContactForm = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/public/contact`, {
            ...formData,
            subject: `MedAlph Demo Request from ${formData.name}`,
            source: 'website_contact_form'
        });
        return response.data;
    } catch (error) {
        console.error('Error submitting contact form:', error);
        throw error;
    }
};
