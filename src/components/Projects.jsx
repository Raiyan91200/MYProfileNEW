import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, Button, Typography, Tag, Image, Row, Col } from 'antd';
import { GithubOutlined, LinkOutlined, EyeOutlined } from '@ant-design/icons';
import { AnimatePresence } from 'framer-motion';

const { Title, Paragraph } = Typography;

const projects = [
    {
        title: 'Desh Explorer – Travel Platform',
        description: 'A full-stack travel platform to explore curated and customizable tour packages, share stories, and plan trips with secure authentication, reviews, and real-time community features.',
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Firebase', 'Stripe'],
        link: 'https://github.com/jibon49/desh-explorer-client',
        image: '/project-images/desh-explorer.jpg',
        demo: 'https://desh-explorer.web.app/',
        features: [
            'User authentication and authorization',
            'Real-time booking system',
            'Payment integration with Stripe',
            'Interactive tour package customization'
        ]
    },
    {
        title: 'Sorting Algorithms Visualizer',
        description: 'An interactive Java application that visualizes sorting algorithms in real-time, helping users understand how different sorting methods work through animated demonstrations.',
        tech: ['Java', 'Swing'],
        link: 'https://github.com/Raiyan91200/SortingAlgorithmsVisualizer-master',
        features: [
            'Real-time visualization of sorting algorithms',
            'Support for multiple sorting methods (Bubble, Quick, Merge, etc.)',
            'Adjustable array size and sorting speed',
            'Step-by-step algorithm execution view'
        ]
    },
    {
        title: 'Employee Management System 1.0',
        description: 'A console-based C application for managing employee records with secure access control, file-based storage, and advanced sorting capabilities.',
        tech: ['C', 'File I/O'],
        link: 'https://github.com/Raiyan91200/EMS1.0',
        features: [
            'Secure file-based data persistence',
            'Employee record CRUD operations',
            'Role-based access control system',
            'Advanced record sorting and filtering'
        ]
    },
    {
        title: 'Employee Management System 2.0',
        description: 'A feature-rich Java desktop application with MySQL integration for comprehensive employee data management. Built with Java Swing, this system offers secure authentication, CRUD operations, advanced search, and reporting capabilities.',
        tech: ['Java', 'MySQL', 'JDBC', 'Swing'],
        link: 'https://github.com/Raiyan91200/EMS_2.0',
        features: [
            'MySQL database integration with JDBC',
            'Modern Swing-based GUI interface',
            'Advanced employee data reporting',
            'Secure user authentication and authorization'
        ]
    },
    {
        title: 'Shell-based File Manager',
        description: 'A command-line utility built with Shell script that provides comprehensive file system operations through an interactive menu interface. Features include file manipulation, directory management, and content operations.',
        tech: ['Shell Script', 'Bash', 'Linux'],
        link: 'https://github.com/Raiyan91200/File-manager',
        features: [
            'Interactive command-line interface',
            'Comprehensive file system operations',
            'Batch file processing capabilities',
            'File permission management'
        ]
    },
    {
        title: 'ATM Machine',
        description: 'A low-level ATM simulator built in Assembly language that implements core banking operations with secure authentication and transaction processing. Features include balance inquiry, deposits, withdrawals, and account validation.',
        tech: ['Assembly', 'x86'],
        link: 'https://github.com/Raiyan91200/ATM-Machine',
        features: [
            'Low-level x86 Assembly implementation',
            'Secure PIN authentication system',
            'Core banking transaction processing',
            'Account balance management'
        ]
    },
    {
        title: 'Encrypted Chat Application',
        description: 'A secure messaging application built with Java that features end-to-end encryption using a hybrid cryptographic system. Implements real-time communication through socket programming and provides a modern GUI interface.',
        tech: ['Java', 'Socket Programming', 'Cryptography', 'Swing'],
        link: 'https://github.com/Raiyan91200/Chatapplicationjava',
        features: [
            'End-to-end message encryption',
            'Real-time socket communication',
            'Modern Swing-based chat interface',
            'Hybrid cryptographic system'
        ]
    },
    {
        title: 'BoiBazar - Online Bookstore',
        description: 'A full-stack e-commerce platform built with PHP and MySQL that provides comprehensive book shopping functionality with secure user authentication and admin management capabilities.',
        tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
        link: 'https://github.com/Raiyan91200/BoiBazar',
        features: [
            'Complete e-commerce functionality',
            'User authentication system',
            'Admin dashboard for inventory management',
            'Book search and filtering capabilities'
        ]
    }
];

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card
            hoverable
            className="w-full overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-gray-200 dark:border-gray-700 [&_.ant-card-actions]:dark:bg-gray-800/90 [&_.ant-card-actions]:dark:border-gray-700"
            cover={
                <div className="relative group">
                    <Image
                        alt={project.title}
                        src={project.image || 'https://placehold.co/400x250/png?text=Project+Preview'}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{ height: '250px' }}
                        preview={{
                            mask: (
                                <div className="flex items-center justify-center space-x-2">
                                    <EyeOutlined />
                                    <span>Preview</span>
                                </div>
                            )
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            }
            actions={[
                <Button
                    key="github"
                    type="text"
                    icon={<GithubOutlined />}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:!text-white [&_.anticon]:!text-white dark:hover:!text-blue-400 dark:!bg-transparent dark:hover:!bg-gray-700/50"
                >
                    Code
                </Button>,
                project.demo && (
                    <Button
                        key="demo"
                        type="text"
                        icon={<LinkOutlined />}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:!text-white [&_.anticon]:!text-white dark:hover:!text-blue-400 dark:!bg-transparent dark:hover:!bg-gray-700/50"
                    >
                        Demo
                    </Button>
                )
            ].filter(Boolean)}
        >
            <div onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer' }}>
                <Title level={4} className="!mb-3 !text-gray-800 dark:!text-white">
                    {project.title}
                </Title>

                <Paragraph
                    className="!text-gray-600 dark:!text-gray-300"
                    ellipsis={{ rows: isExpanded ? 0 : 2, expandable: false }}
                >
                    {project.description}
                </Paragraph>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 space-y-4 overflow-hidden"
                        >
                            <div className="border-t dark:border-gray-700 pt-4">
                                <Title level={5} className="!mb-2 !text-gray-800 dark:!text-white">
                                    Key Features:
                                </Title>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                                    {project.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, i) => (
                        <Tag
                            key={i}
                            color="blue"
                            className="!text-xs !px-3 !py-1 !rounded-full"
                        >
                            {tech}
                        </Tag>
                    ))}
                </div>
            </div>
        </Card>
    );
};

const Projects = () => {
    const [ref] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="projects" className="section bg-gray-50 dark:bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                <Title level={2} className="text-center text-gray-800 dark:text-white mb-16">
                    Featured Projects
                </Title>

                <Row gutter={[24, 24]} ref={ref}>
                    {projects.map((project, index) => (
                        <Col key={index} xs={24} sm={12} lg={8}>
                            <ProjectCard project={project} />
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Projects;