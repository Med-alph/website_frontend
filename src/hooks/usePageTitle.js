import { useEffect } from 'react';

/**
 * Hook to update page title and meta description for SEO
 * 
 * SEO Improvement: Dynamic page titles and meta descriptions
 * for better SEO and user experience
 */
export const usePageTitle = (title, description) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Cleanup function (optional - could restore original)
    return () => {
      // Could restore default title if needed
    };
  }, [title, description]);
};


