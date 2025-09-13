import React from 'react';
import { Typography, Button, Space, Card, Avatar } from 'antd';
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { ArrowRightOutlined, MessageOutlined, DownloadOutlined } from '@ant-design/icons';

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
        <section id="hero" className="cyber-data-stream min-h-screen flex items-center bg-gradient-to-br from-gray-800 to-gray-900 pt-16 md:pt-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    <div className="w-full md:w-1/2 text-center md:text-left animate-fadeInLeft">
                        <Title level={1} className="cyber-glitch !text-[32px] md:!text-6xl !font-bold !mb-4 !text-white !leading-tight" data-text="Syed Raiyan Nasim">
                            Syed Raiyan Nasim
                        </Title>
                        <Title level={2} className="!text-2xl !text-blue-400 !font-normal !mt-0 !mb-6 !leading-relaxed">
                            Computer Science & Engineering Student
                        </Title>
                        <Paragraph className="!text-lg !text-gray-300 !mb-6 md:!mb-8 !leading-relaxed">
                            Passionate about creating innovative software solutions and exploring the world of technology.
                        </Paragraph>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8 md:mb-12">
                            <Button 
                                type="primary" 
                                size="large" 
                                icon={<MessageOutlined />} 
                                href="#contact" 
                                className="cyber-btn-primary w-full sm:w-auto"
                            >
                                Contact Me
                            </Button>
                            <Button 
                                size="large" 
                                icon={<ArrowRightOutlined />} 
                                href="#projects" 
                                className="cyber-btn-secondary w-full sm:w-auto"
                            >
                                View Projects
                            </Button>
                            
                            <Button
                                size="large"
                                icon={<DownloadOutlined />}
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = 'https://drive.usercontent.google.com/download?id=1Hvbg-fMQLeQDp-9dx4KQhiEm6O8yKxw6&export=download&authuser=0&confirm=t&uuid=0cb85ba1-9151-4b83-87d9-9e87cb482f13&at=AN8xHorOpQA-OkIGhh601eRKRFPs:1757779144506';
                                    link.download = 'Syed_Raiyan_Nasim_Resume.pdf';
                                    link.target = '_blank';
                                    link.click();
                                }}
                                className="cyber-btn-accent w-full sm:w-auto"
                            >
                                Download Resume
                            </Button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center animate-fadeInRight order-first md:order-last">
                        <div className="relative group">
                            <Avatar
                                src="https://i.ibb.co.com/fdPC1hLx/ddry.png"
                                alt="Syed Raiyan Nasim"
                                size={300}
                                className="cyber-avatar border-4 border-gray-800 transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8 md:mt-12">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
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
                                className="cyber-social-btn !flex !items-center !justify-center"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;