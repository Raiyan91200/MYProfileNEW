import React from 'react';
import { Typography, Card, Row, Col, Statistic } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BugOutlined, SafetyCertificateOutlined, ToolOutlined } from '@ant-design/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const { Title, Paragraph } = Typography;

const About = () => {
    const sectionRef = useScrollAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        { number: '10+', label: 'Projects Completed' },
        { number: '5+', label: 'Programming Languages' },
        { number: '0+', label: 'Years of Experience' },
    ];

    const icons = [<SafetyCertificateOutlined />, <BugOutlined />, <ToolOutlined />];

    return (
                <section ref={sectionRef} id="about" className="section py-12 md:py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-12 md:mb-16">
                        <Title level={2} className="cyber-title-primary !text-4xl !font-bold !mb-4 relative inline-block group">
                            About Me
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                        </Title>
                        <Paragraph className="cyber-text-body !text-lg max-w-3xl mx-auto">
                            Ensuring Quality in Every Line of Code
                        </Paragraph>
                    </div>

                    <Card 
                        className="cyber-card shadow-2xl backdrop-blur-sm bg-gray-800/90 mb-12 md:mb-16 hover:transform hover:scale-[1.02] transition-all duration-300" 
                        bordered={false}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <Row gutter={[24, 24]}>
                                <Col xs={24} lg={16}>
                                    <Paragraph className="!text-lg !text-gray-300 mb-4 md:mb-6 !leading-relaxed">
                                        I am a Computer Science student with a strong focus on Software Quality Assurance. Skilled in manual testing, test case design, and agile methodologies, I aim to ensure reliable and user-friendly software.
                                    </Paragraph>
                                    <Paragraph className="!text-lg !text-gray-300 !leading-relaxed">
                                        Currently expanding my skills in automation tools like Selenium and Postman, I bring problem-solving, collaboration, and attention to detail to every project, with the goal of growing into a well-rounded SQA professional.
                                    </Paragraph>

                                </Col>
                                <Col xs={24} lg={8} className="flex items-center justify-center">
                                    <div className="relative group w-full max-w-sm">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                                        <Card
                                            className="cyber-card relative bg-gray-800 border-none w-full"
                                            bordered={false}
                                        >
                                            <div className="text-center p-2 md:p-4">
                                                <Title level={4} className="!text-blue-400 !mb-2 !text-lg sm:!text-xl">Testing Expertise</Title>
                                                <ul className="space-y-1 md:space-y-2 text-sm sm:text-base text-gray-300">
                                                    <li>Manual & Automation Testing</li>
                                                    <li>Test Case Design & Execution</li>
                                                    <li>Performance & Functional Testing</li>
                                                    <li>CI/CD Pipeline Integration</li>
                                                    <li>Bug Tracking & Reporting</li>
                                                    <li>Test Documentation & Reporting</li>
                                                </ul>
                                            </div>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </motion.div>
                    </Card>

                    <Row gutter={[16, 16]} justify="center">
                        {stats.map((stat, index) => (
                            <Col xs={24} sm={12} md={8} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Card 
                                        className="cyber-card text-center h-full backdrop-blur-sm bg-gray-800/90 hover:shadow-2xl transition-all duration-300"
                                        bordered={false}
                                    >
                                        <div className="text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-3 md:mb-4">
                                            {icons[index]}
                                        </div>
                                        <Statistic
                                            value={stat.number}
                                            valueStyle={{ 
                                                fontSize: window.innerWidth < 640 ? '1.5rem' : '2.5rem',
                                                color: 'var(--color-primary)',
                                                background: 'linear-gradient(to right, #3B82F6, #10B981)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent'
                                            }}
                                            title={
                                                <span className="text-sm sm:text-base md:text-lg font-medium text-gray-600 dark:text-gray-400">
                                                    {stat.label}
                                                </span>
                                            }
                                        />
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </div>
        </section>
    );
};

export default About;