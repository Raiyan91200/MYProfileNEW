import React from 'react';
import { Typography, Button, Space, Card, Avatar } from 'antd';
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { ArrowRightOutlined, MessageOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const Hero = () => {
    const socialLinks = [
        { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/raiyannasim91200', label: 'LinkedIn' },
        { icon: <FaGithub />, url: 'https://github.com/Raiyan91200', label: 'GitHub' },
        { icon: <FaTwitter />, url: 'https://x.com/nasim_raiyan', label: 'Twitter' },
        { icon: <FaFacebookF />, url: 'https://www.facebook.com/Raiyan.91200', label: 'Facebook' },
        { icon: <FaInstagram />, url: 'https://www.instagram.com/raiyannasim91200/', label: 'Instagram' },
        { icon: <FaEnvelope />, url: 'mailto:raiyannasim91200@gmail.com', label: 'Email' },
    ];

    return (
        <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2 animate-fadeInLeft">
                        <Title level={1} className="!text-5xl md:!text-6xl !font-bold !mb-4 dark:!text-white">
                            Syed Raiyan Nasim
                        </Title>
                        <Title level={2} className="!text-2xl !text-blue-600 dark:!text-blue-400 !font-normal !mt-0 !mb-6">
                            Computer Science & Engineering Student
                        </Title>
                        <Paragraph className="!text-lg !text-gray-600 dark:!text-gray-300 !mb-8">
                            Passionate about creating innovative software solutions and exploring the world of technology.
                        </Paragraph>
                        <Space size="large" className="mb-12">
                            <Button type="primary" size="large" icon={<MessageOutlined />} href="#contact" className="dark:bg-blue-600 dark:hover:bg-blue-700 dark:border-blue-600">
                                Contact Me
                            </Button>
                            <Button size="large" icon={<ArrowRightOutlined />} href="#projects" className="dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                                View Projects
                            </Button>
                        </Space>
                    </div>

                    <div className="md:w-1/2 flex justify-center animate-fadeInRight">
                            <div className="relative group">
                                <Avatar
                                    src="https://i.ibb.co.com/fdPC1hLx/ddry.png"
                                    alt="Syed Raiyan Nasim"
                                    size={300}
                                    className="border-4 border-white dark:border-gray-800 transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </div>
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <Space size="middle">
                        {socialLinks.map((social, index) => (
                            <Button
                                key={index}
                                type="ghost"
                                shape="circle"
                                size="large"
                                icon={social.icon}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="!flex !items-center !justify-center hover:!text-blue-500 hover:!border-blue-500 !transition-all dark:!text-gray-300 dark:!border-gray-700 dark:hover:!text-blue-400 dark:hover:!border-blue-400"
                            />
                        ))}
                    </Space>
                </div>
            </div>
        </section>
    );
};

export default Hero;