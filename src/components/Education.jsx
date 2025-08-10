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
        <section id="education" className="section bg-gray-50 dark:bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                <Title level={2} className="text-center text-gray-800 dark:text-white mb-16">
                    Education Journey
                </Title>

                <div ref={ref} className="max-w-4xl mx-auto">
                    <Timeline
                        mode="alternate"
                        items={education.map((edu, index) => ({
                            key: index,
                            dot: (
                                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800" />
                            ),
                            children: (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <MotionCard
                                        className="backdrop-blur-sm bg-white/90 dark:bg-gray-800/90"
                                        variant="outlined"
                                        hoverable
                                    >
                                        <Text className="text-blue-500 font-medium block mb-2">
                                            {edu.period}
                                        </Text>
                                        <Title level={4} className="!mt-0 !mb-2">
                                            {edu.degree}
                                        </Title>
                                        <div className="mb-4">
                                            <Button 
                                                type="link" 
                                                href={edu.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                icon={<ExportOutlined />}
                                                className="!p-0 !h-auto hover:!text-blue-600"
                                            >
                                                {edu.institution}
                                            </Button>
                                        </div>
                                        <Paragraph className="!mb-0 text-gray-600 dark:text-gray-300">
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