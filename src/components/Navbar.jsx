import React from 'react';
import { Menu, Button, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
    const navLinks = [
        { label: <a href="#hero">Home</a>, key: 'Home' },
        { label: <a href="#about">About</a>, key: 'About' },
        { label: <a href="#skills">Skills</a>, key: 'Skills' },
        { label: <a href="#projects">Projects</a>, key: 'Projects' },
        { label: <a href="#certificates">Certificates</a>, key: 'Certificates' },
        { label: <a href="#education">Education</a>, key: 'Education' },
        { label: <a href="#contact">Contact</a>, key: 'Contact' },
    ];

    const mobileMenu = (
        <Menu className="w-48 bg-gray-800/95 backdrop-blur-md border border-gray-700/50">
            {navLinks.map(link => (
                <Menu.Item key={link.key} className="hover:bg-gray-700/70 transition-colors duration-300">
                    <a
                        href={link.label.props.href}
                        className="text-gray-200 hover:text-blue-400 transition-colors duration-300 flex items-center py-2"
                    >
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3 opacity-70"></span>
                        {link.label.props.children}
                    </a>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/30 backdrop-blur-xl border-b border-white/10 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <a href="#hero" className="flex items-center group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                        <img
                            src="https://i.ibb.co/6cXBHLyn/a3f9eed3-fe8e-4878-8e24-3c0cda0e408c.jpg"
                            alt="Logo"
                            className="h-10 w-10 rounded-full object-cover border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300 relative z-10"
                        />
                    </div>
                    <span className="ml-3 text-xl font-bold text-white hidden sm:block group-hover:text-blue-400 transition-colors duration-300">
                       Syed Raiyan Nasim
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a
                            key={link.key}
                            href={link.label.props.href}
                            className="relative text-gray-200 hover:text-blue-400 transition-all duration-300 px-3 py-2 rounded-md group"
                        >
                            <span className="relative z-10">{link.label.props.children}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 group-hover:w-full transition-all duration-300"></div>
                        </a>
                    ))}
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center">
                    <Dropdown 
                        overlay={mobileMenu} 
                        trigger={['click']}
                        overlayClassName="bg-gray-800/95 backdrop-blur-md border border-gray-700/50"
                        placement="bottomRight"
                    >
                        <Button
                            type="default"
                            icon={<MenuOutlined />}
                            className="cyber-btn-ghost border-gray-600 hover:border-blue-500 hover:bg-blue-500/10"
                        />
                    </Dropdown>
                </div>
            </div>
        </header>
    );
};

export default Navbar;