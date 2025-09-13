import React from 'react';
import { useInView } from 'react-intersection-observer';
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
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const MotionCard = motion(Card);

    return (
        <section id="education" className="section bg-gray-900 py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <Title level={2} className="text-center text-white !text-4xl !font-bold !mb-4">
                        Education Journey
                    </Title>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
                </div>

                <div ref={ref} className="max-w-4xl mx-auto">
                    <Timeline
                        mode={typeof window !== 'undefined' && window.innerWidth >= 768 ? "alternate" : "left"}
                        items={education.map((edu, index) => ({
                            key: index,
                            dot: (
                                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full border-2 sm:border-4 border-gray-800 shadow-lg shadow-blue-500/50" />
                            ),
                            children: (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <MotionCard
                                        className="cyber-card backdrop-blur-sm bg-gray-800/90 p-3 sm:p-4 md:p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                                        variant="outlined"
                                        hoverable
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(17, 24, 39, 0.9) 100%)',
                                            backdropFilter: 'blur(10px)',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <Text className="text-blue-500 font-medium block mb-2 text-sm sm:text-base">
                                            {edu.period}
                                        </Text>
                                        <Title level={4} className="!mt-0 !mb-2 !text-base sm:!text-lg md:!text-xl">
                                            {edu.degree}
                                        </Title>
                                        <div className="mb-3 sm:mb-4">
                                            <Button 
                                                type="link" 
                                                href={edu.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cyber-btn-ghost !p-0 !h-auto !text-sm sm:!text-base !text-left !flex !items-center !gap-2 !w-full !max-w-full "
                                                style={{ 
                                                    justifyContent: 'flex-start',
                                                    textAlign: 'left',
                                                    wordBreak: 'break-word',
                                                    whiteSpace: 'normal',
                                                    maxWidth: '100%',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                }}
                                            >
                                                <span className="truncate flex-1">{edu.institution}</span>
                                                <ExportOutlined className="flex-shrink-0 text-blue-400" />
                                            </Button>
                                        </div>
                                        <Paragraph className="!mb-0 text-gray-300 !text-sm sm:!text-base !leading-relaxed">
                                            {edu.description}
                                        </Paragraph>
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