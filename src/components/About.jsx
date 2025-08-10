import React from 'react';
import { Typography, Button, Space, Card, Row, Col, Statistic } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BugOutlined, SafetyCertificateOutlined, ToolOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const MotionDiv = motion.div;

const About = () => {
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
        <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <Title level={2} className="!text-4xl !font-bold !mb-4 dark:!text-white relative inline-block group">
                            About Me
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 dark:from-blue-400 dark:to-green-400"></div>
                        </Title>
                        <Paragraph className="!text-lg !text-gray-600 dark:!text-gray-300">
                            Ensuring Quality in Every Line of Code
                        </Paragraph>
                    </div>

                    <Card 
                        className="shadow-2xl backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 mb-16 hover:transform hover:scale-[1.02] transition-all duration-300" 
                        bordered={false}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <Row gutter={[24, 24]}>
                                <Col xs={24} md={16}>
                                    <Paragraph className="!text-lg !text-gray-600 dark:!text-gray-300 mb-6">
                                        I am a dedicated Software Quality Assurance (SQA) enthusiast with a strong foundation in Computer Science and Engineering. My passion lies in ensuring software reliability, performance, and user satisfaction through comprehensive testing methodologies.
                                    </Paragraph>
                                    <Paragraph className="!text-lg !text-gray-600 dark:!text-gray-300 mb-6">
                                        My journey in QA began with manual testing and has evolved to embrace automation testing, continuous integration, and advanced testing frameworks. I specialize in creating robust test cases, implementing automation solutions, and maintaining high quality standards throughout the development lifecycle.
                                    </Paragraph>
                                    <Paragraph className="!text-lg !text-gray-600 dark:!text-gray-300">
                                        Beyond testing, I'm passionate about improving development processes, conducting thorough code reviews, and implementing best practices for quality assurance. I believe that quality is not just about finding bugs, but about preventing them through systematic approaches and proactive measures.
                                    </Paragraph>
                                </Col>
                                <Col xs={24} md={8} className="flex items-center justify-center">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                                        <Card
                                            className="relative bg-white dark:bg-gray-800 border-none"
                                            bordered={false}
                                        >
                                            <div className="text-center">
                                                <Title level={4} className="!text-blue-500 dark:!text-blue-400 !mb-2">Testing Expertise</Title>
                                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                                    <li>Automation Testing</li>
                                                    <li>Test Case Design</li>
                                                    <li>Performance Testing</li>
                                                    <li>CI/CD Integration</li>
                                                    <li>Bug Tracking</li>
                                                    <li>Test Documentation</li>
                                                </ul>
                                            </div>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </motion.div>
                    </Card>

                    <Row gutter={[24, 24]} justify="center">
                        {stats.map((stat, index) => (
                            <Col xs={24} sm={8} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Card 
                                        className="text-center h-full backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 hover:shadow-2xl transition-all duration-300"
                                        bordered={false}
                                    >
                                        <div className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-4">
                                            {icons[index]}
                                        </div>
                                        <Statistic
                                            value={stat.number}
                                            valueStyle={{ 
                                                fontSize: '2.5rem',
                                                color: 'var(--color-primary)',
                                                background: 'linear-gradient(to right, #3B82F6, #10B981)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent'
                                            }}
                                            title={
                                                <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
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