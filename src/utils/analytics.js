import ReactGA from 'react-ga4';

let isInitialized = false;

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (measurementId) {
    ReactGA.initialize(measurementId, {
      gtagOptions: {
        debug_mode: import.meta.env.DEV
      }
    });
    isInitialized = true;
    console.log('Google Analytics initialized');
  } else {
    console.warn('GA Measurement ID not found. Analytics disabled.');
  }
};

// Track page views
export const trackPageView = (path) => {
  if (!isInitialized) return;
  ReactGA.send({ hitType: 'pageview', page: path });
  console.log(`[GA PageView] Path: ${path}`);
};

// Track custom events
export const trackEvent = (category, action, label = '', value = 0) => {
  if (!isInitialized) return;
  ReactGA.event({
    category,
    action,
    label,
    value
  });
  console.log(`[GA Event] Category: ${category} | Action: ${action} | Label: ${label} | Value: ${value}`);
};

// Track project clicks
export const trackProjectClick = (projectTitle, linkType = 'github') => {
  if (!isInitialized) return;
  trackEvent('Project', `Click_${linkType}`, projectTitle);
  console.log(`Tracked: ${linkType} click on ${projectTitle}`);
};

// Track section views
export const trackSectionView = (sectionName) => {
  if (!isInitialized) return;
  trackEvent('Navigation', 'Section_View', sectionName);
};

// Track contact form submission
export const trackContactSubmit = () => {
  if (!isInitialized) return;
  trackEvent('Contact', 'Form_Submit', 'Contact Form');
};

// Track downloads (e.g., resume)
export const trackDownload = (fileName) => {
  if (!isInitialized) return;
  trackEvent('Download', 'File_Download', fileName);
};
