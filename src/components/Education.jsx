import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Typography, Timeline, Card, Button } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;
const education = [
    {
        period: '2022 - Present',
        degree: 'B.Sc. in Computer Science and Engineering',
        institution: 'Green University Bangladesh',
        link: 'https://www.green.edu.bd/',
        description: 'Currently pursuing a bachelor\'s degree focused on software development, software quality assurance, and project management.'
    },
    {
        period: '2018 - 2020',
        degree: 'Higher Secondary School Certificate (H.S.C)',
        institution: 'Banophool Adibashi Green Heart College',
        link: 'https://baghc.edu.bd/',
        description: 'Science - Graduated'
    },
    {
        period: '2018',
        degree: 'Secondary School Certificate (S.S.C)',
        institution: 'Shaheed Police Smrity College',
        link: 'https://www.spsc.edu.bd/',
        description: 'Science - Graduated'
    },
];

const Education = () => {
    const sectionRef = useScrollAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const MotionCard = motion(Card);

    return (
        <section ref={sectionRef} id="education" className="section py-12 md:py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <Title level={2} className="cyber-title-primary !text-4xl !font-bold !mb-4 relative inline-block group">
                        Education Journey
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                    </Title>
                </div>

                <div ref={ref} className="max-w-5xl mx-auto">
                    <Timeline
                        mode={typeof window !== 'undefined' && window.innerWidth >= 768 ? "alternate" : "left"}
                        className="custom-timeline"
                        items={education.map((edu, index) => ({
                            key: index,
                            dot: (
                                <div className="relative w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
                                </div>
                            ),
                            children: (
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                                    className="timeline-card-wrapper"
                                >
                                    <MotionCard
                                        className="cyber-card relative overflow-hidden group"
                                        bordered={false}
                                        hoverable
                                        style={{
                                            background: 'rgba(17, 24, 39, 0.6)',
                                            backdropFilter: 'blur(16px)',
                                            border: '1px solid rgba(59, 130, 246, 0.2)',
                                        }}
                                    >
                                        {/* Gradient Border Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Period Badge */}
                                            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                                <Text className="text-blue-400 font-semibold text-xs sm:text-sm">
                                                    {edu.period}
                                                </Text>
                                            </div>
                                            
                                            {/* Degree Title */}
                                            <Title level={3} className="!mt-0 !mb-3 sm:!mb-4 !text-lg sm:!text-xl md:!text-2xl !text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                                                {edu.degree}
                                            </Title>
                                            
                                            {/* Institution */}
                                            <div className="mb-3 sm:mb-4">
                                                <Button 
                                                    type="link" 
                                                    href={edu.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cyber-btn-ghost !p-0 !h-auto !text-sm sm:!text-base !text-left !flex !items-center !gap-2"
                                                >
                                                    <span>{edu.institution}</span>
                                                    <ExportOutlined className="text-blue-400" />
                                                </Button>
                                            </div>
                                            
                                            {/* Description */}
                                            <Paragraph className="!mb-0 text-gray-400 !text-sm sm:!text-base !leading-relaxed">
                                                {edu.description}
                                            </Paragraph>
                                        </div>
                                        
                                        {/* Corner Accent */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </MotionCard>
                                </motion.div>
                            )
                        }))}
                    />
                </div>
            </div>
        </section>
    );
};

export default Education;