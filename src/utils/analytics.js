import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (measurementId) {
    ReactGA.initialize(measurementId, {
      gaOptions: {
        debug_mode: import.meta.env.DEV
      }
    });
    console.log('Google Analytics initialized');
  } else {
    console.warn('GA Measurement ID not found. Analytics disabled.');
  }
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

// Track custom events
export const trackEvent = (category, action, label = '', value = 0) => {
  ReactGA.event({
    category,
    action,
    label,
    value
  });
};

// Track project clicks
export const trackProjectClick = (projectTitle, linkType = 'github') => {
  trackEvent('Project', `Click_${linkType}`, projectTitle);
  console.log(`Tracked: ${linkType} click on ${projectTitle}`);
};

// Track section views
export const trackSectionView = (sectionName) => {
  trackEvent('Navigation', 'Section_View', sectionName);
};

// Track contact form submission
export const trackContactSubmit = () => {
  trackEvent('Contact', 'Form_Submit', 'Contact Form');
};

// Track downloads (e.g., resume)
export const trackDownload = (fileName) => {
  trackEvent('Download', 'File_Download', fileName);
};
