// ThemeProvider.jsx
import React, { useEffect } from 'react';
import ThemeContext from './ThemeContext';

export const ThemeProvider = ({ children }) => {
    // Permanently set to dark mode
    const darkMode = true;

    useEffect(() => {
        // Always enable dark mode
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    }, []);

    // No toggle function needed since it's permanently dark
    const toggleTheme = () => {
        // Do nothing - theme is permanently dark
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
