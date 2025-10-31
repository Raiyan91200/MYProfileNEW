import React, { useEffect, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const socialLinks = [
        { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/raiyannasim91200', label: 'LinkedIn' },
        { icon: <FaGithub />, url: 'https://github.com/Raiyan91200', label: 'GitHub' },
        { icon: <FaTwitter />, url: 'https://x.com/nasim_raiyan', label: 'Twitter' },
        { icon: <FaFacebookF />, url: 'https://www.facebook.com/Raiyan.91200', label: 'Facebook' },
        { icon: <FaInstagram />, url: 'https://www.instagram.com/raiyannasim91200/', label: 'Instagram' },
    ];

    const footerLinks = [
        {
            title: 'Quick Links',
            links: [
                { name: 'Home', href: '#hero' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Education', href: '#education' },
                { name: 'Contact', href: '#contact' },
                { name: 'GitHub', href: 'https://github.com/Raiyan91200', external: true },
                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/raiyannasim91200', external: true },
            ]
        }
    ];

    return (
        <footer className="relative bg-gray-900/30 backdrop-blur-xl border-t border-white/10 text-gray-300 pt-12 md:pt-16 pb-6 md:pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10 mb-8 md:mb-12">
                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center mb-4">
                            <img
                                src="https://i.ibb.co.com/fdPC1hLx/ddry.png"
                                alt="Logo"
                                className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover mb-3 sm:mb-0 sm:mr-4"
                            />
                            <div className="text-center sm:text-left">
                                <h3 className="text-lg sm:text-xl font-bold">Syed Raiyan Nasim</h3>
                                <p className="text-gray-400 text-sm sm:text-base">Computer Science & Engineering Student</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4 md:mb-6 text-sm sm:text-base leading-relaxed">
                            Passionate about creating innovative software solutions and exploring the world of technology.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 hover:bg-blue-500 flex items-center justify-center transition-colors text-sm sm:text-base"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 sm:after:w-10 after:h-0.5 after:bg-blue-500">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2 sm:space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                target={link.external ? "_blank" : "_self"}
                                                rel={link.external ? "noopener noreferrer" : ""}
                                                className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-6 md:pt-8 border-t border-gray-700 text-center">
                    <p className="text-sm sm:text-base">© {year} Syed Raiyan Nasim. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;