import React, { useContext } from 'react';
import { Menu, Button, Dropdown } from 'antd';
import { BulbOutlined, BulbFilled, MenuOutlined } from '@ant-design/icons';
import ThemeContext from '../context/ThemeContext';

const Navbar = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    const navLinks = [
        { label: <a href="#hero">Home</a>, key: 'Home' },
        { label: <a href="#about">About</a>, key: 'About' },
        { label: <a href="#skills">Skills</a>, key: 'Skills' },
        { label: <a href="#projects">Projects</a>, key: 'Projects' },
        { label: <a href="#education">Education</a>, key: 'Education' },
        { label: <a href="#contact">Contact</a>, key: 'Contact' },
    ];

    // Removed unused dropdownMenu variable

    const mobileMenu = (
        <Menu className="w-48 dark:bg-gray-800 dark:text-white">
            {navLinks.map(link => (
                <Menu.Item key={link.key} className="dark:hover:bg-gray-700">
                    <a
                        href={link.label.props.href}
                        className={
                            darkMode
                                ? "text-gray-200 hover:text-primary-dark"
                                : "text-gray-900 hover:text-primary"
                        }
                    >
                        {link.label.props.children}
                    </a>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
                <a href="#hero" className="flex items-center">
                    <img
                        src="https://i.ibb.co/6cXBHLyn/a3f9eed3-fe8e-4878-8e24-3c0cda0e408c.jpg"
                        alt="Logo"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a
                            key={link.key}
                            href={link.label.props.href}
                            className={
                                darkMode
                                    ? "text-gray-200 hover:text-primary-dark transition"
                                    : "text-gray-900 hover:text-primary transition"
                            }
                        >
                            {link.label.props.children}
                        </a>
                    ))}
                    <Button
                        type="default"
                        shape="circle"
                        onClick={toggleTheme}
                        icon={darkMode ? <BulbFilled style={{ color: '#FFD700' }} /> : <BulbOutlined />}
                        aria-label="Toggle theme"
                        className={darkMode ? "bg-gray-800 text-gray-100 border-gray-600" : "bg-gray-200 text-gray-900 border-gray-300"}
                        style={{ borderRadius: '0.375rem', borderWidth: 1, borderStyle: 'solid' }}
                    />
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center gap-4">
                    <Button
                        type="default"
                        shape="circle"
                        onClick={toggleTheme}
                        icon={darkMode ? <BulbFilled style={{ color: '#FFD700' }} /> : <BulbOutlined />}
                        aria-label="Toggle theme"
                        className={darkMode ? "bg-gray-800 text-gray-100 border-gray-600" : "bg-gray-200 text-gray-900 border-gray-300"}
                        style={{ borderRadius: '0.375rem', borderWidth: 1, borderStyle: 'solid' }}
                    />
                    <Dropdown 
                        overlay={mobileMenu} 
                        trigger={['click']}
                        overlayClassName="dark:bg-gray-800"
                    >
                        <Button
                            type="default"
                            icon={<MenuOutlined />}
                            className={darkMode ? "bg-gray-800 text-gray-100 border-gray-600" : "bg-gray-200 text-gray-900 border-gray-300"}
                        />
                    </Dropdown>
                </div>
            </div>
        </header>
    );
};

export default Navbar;