import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered zoom animations
 * Adds zoom-in effect when elements enter viewport
 */
export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state - add animation class first
    element.classList.add('zoom-animation');

    // Check if element is already in viewport on mount
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInViewport) {
      // If already visible, animate in immediately
      setTimeout(() => {
        element.classList.add('zoom-in-active');
      }, 100);
    }

    // Use Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class when element enters viewport
            entry.target.classList.add('zoom-in-active');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return elementRef;
};
