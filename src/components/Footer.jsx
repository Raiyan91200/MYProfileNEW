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
        <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
                    <div className="md:w-1/3 text-center md:text-left">
                        <div className="flex justify-center md:justify-start items-center mb-4">
                            <img
                                src="https://i.ibb.co.com/fdPC1hLx/ddry.png"
                                alt="Logo"
                                className="h-16 w-16 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h3 className="text-xl font-bold">Syed Raiyan Nasim</h3>
                                <p className="text-gray-400">Computer Science & Engineering Student</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Passionate about creating innovative software solutions and exploring the world of technology.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-500 flex items-center justify-center transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <h4 className="text-lg font-bold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500">
                                    {section.title}
                                </h4>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                target={link.external ? "_blank" : "_self"}
                                                rel={link.external ? "noopener noreferrer" : ""}
                                                className="text-gray-400 hover:text-blue-400 transition-colors"
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

                <div className="pt-8 border-t border-gray-700 text-center">
                    <p>© {year} Syed Raiyan Nasim. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;