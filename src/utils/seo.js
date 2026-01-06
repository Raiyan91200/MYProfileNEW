import { useEffect } from 'react';

/**
 * Custom hook to manage document head meta tags dynamically
 * @param {Object} params - Meta tag parameters
 * @param {string} params.title - Page title
 * @param {string} params.description - Page description
 * @param {string} params.keywords - SEO keywords
 * @param {string} params.image - Social media image URL
 * @param {string} params.url - Canonical URL
 */
export const useMetaTags = ({
  title = 'Syed Raiyan Nasim - Computer Science & Engineering Student | Portfolio',
  description = 'Passionate Computer Science & Engineering student specializing in web development, software engineering, and innovative technology solutions.',
  keywords = 'Syed Raiyan Nasim, Computer Science, Software Engineer, Web Developer, Portfolio',
    image = 'https://raiyan91200-new.vercel.app/og-image.jpg',
  url = 'https://raiyan91200-new.vercel.app/'
} = {}) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let metaTag = document.querySelector(selector);
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (isProperty) {
          metaTag.setAttribute('property', property);
        } else {
          metaTag.setAttribute('name', property);
        }
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    };

    // Update standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);

    // Update Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);
  }, [title, description, keywords, image, url]);
};

/**
 * Component to add structured data (JSON-LD) to the page
 * @param {Object} data - Structured data object
 */
export const StructuredData = ({ data }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = 'structured-data';
    
    // Remove existing structured data script if present
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data]);

  return null;
};
