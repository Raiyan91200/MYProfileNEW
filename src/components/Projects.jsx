import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, Button, Typography, Tag, Image, Row, Col } from 'antd';
import { GithubOutlined, LinkOutlined, EyeOutlined } from '@ant-design/icons';
import { AnimatePresence } from 'framer-motion';

const { Title, Paragraph } = Typography;

const projects = [
    {
        title: 'EverShop API Testing Suite',
        description: 'Automated API tests for key e-commerce workflows on EverShop.io — search, cart operations, and product management.',
        tech: ['Postman', 'Newman', 'JavaScript'],
        link: 'https://github.com/Raiyan91200/Api_Testing-First-evershop.io-with-automation-scripts-',
        image: '',
        demo: '',
        features: [
            'Search & cart validation via API',
            'Response structure and status code checks',
            'Automated test reports generation'
        ]
    },

    {
        title: 'OrderUP! – Cafeteria Ordering App',
        description: 'A mobile app for seamless cafeteria ordering with quick menu browsing, QR-based payments, and order tracking.',
        tech: ['Android', 'Firebase', 'Java'],
        link: 'https://github.com/Raiyan91200/OrderUP3',
        image: '',
        demo: '',
        features: [
            'User-friendly mobile ordering',
            'Secure Firebase authentication',
            'Real-time order management',
            'QR code payment support'
        ]
    },
    {
        title: 'Restaurant Recommendation System',
        description: 'A machine learning-based system that analyzes the FoodPanda Bangladesh dataset to provide personalized restaurant recommendations using sentiment analysis and content-based filtering.',
        tech: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'NLTK', 'Matplotlib'],
        link: 'https://github.com/Raiyan91200/Restaurant-Recommendation-using-food-Panda-Dataset',
        image: '',
        demo: '',
        features: [
            'Sentiment analysis on customer reviews (Bengali and English)',
            'Content-based restaurant recommendation engine',
            'Data preprocessing and feature engineering for mixed-language text',
            'Visualization of review insights and recommendation trends'
        ]
    }, 
    

    {
        title: 'Desh Explorer – Travel Platform',
        description: 'A full-stack travel platform to explore curated and customizable tour packages, share stories, and plan trips with secure authentication, reviews, and real-time community features.',
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Firebase', 'Stripe'],
        link: 'https://github.com/jibon49/desh-explorer-client',
        image: '',
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
        image: '',
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
        image: '',
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
        image: '',
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
        image: '',
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
        image: '',
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
        image: '',
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
        image: '',
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
            className="cyber-card w-full overflow-hidden backdrop-blur-sm bg-gray-800/90 border-gray-700 [&_.ant-card-actions]:bg-gray-800/90 [&_.ant-card-actions]:border-gray-700 h-full flex flex-col"
            cover={
                <div className="relative group">
                    {/* <Image
                        alt={project.title}
                        src={project.image || 'https://placehold.co/400x250/png?text=Project+Preview'}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{ height: '200px' }}
                        preview={{
                            mask: (
                                <div className="flex items-center justify-center space-x-2">
                                    <EyeOutlined />
                                    <span>Preview</span>
                                </div>
                            )
                        }}
                    />*/}
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
                    className="cyber-btn-ghost text-xs sm:text-sm "
                    size="small"
                >
                    <span className="hidden sm:inline">Code</span>
                    <span className="sm:hidden">View</span>
                </Button>,
                project.demo && (
                    <Button
                        key="demo"
                        type="text"
                        icon={<LinkOutlined />}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-btn-secondary text-xs sm:text-sm"
                        size="small"
                    >
                        Demo
                    </Button>
                )
            ].filter(Boolean)}
        >
            <div onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer' }} className="flex-1">
                <Title level={4} className="!mb-2 sm:!mb-3 !text-white !text-lg sm:!text-xl">
                    {project.title}
                </Title>

                <Paragraph
                    className="!text-gray-300 !text-sm sm:!text-base !leading-relaxed"
                    ellipsis={{ rows: isExpanded ? 0 : 3, expandable: false }}
                >
                    {project.description}
                </Paragraph>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 overflow-hidden"
                        >
                            <div className="border-t border-gray-700 pt-3 sm:pt-4">
                                <Title level={5} className="!mb-2 !text-white !text-sm sm:!text-base">
                                    Key Features:
                                </Title>
                                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
                                    {project.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
                    {project.tech.map((tech, i) => (
                        <Tag
                            key={i}
                            color="blue"
                            className="!text-xs !px-2 sm:!px-3 !py-1 !rounded-full !mb-1"
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
        <section id="projects" className="section bg-gray-900 py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <Title level={2} className="text-center text-white !text-4xl !font-bold !mb-4">
                        Featured Projects
                    </Title>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
                </div>

                <Row gutter={[16, 24]} ref={ref} className="max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <Col key={index} xs={24} sm={24} md={12} lg={8}>
                            <ProjectCard project={project} />
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Projects;