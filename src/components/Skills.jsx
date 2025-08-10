import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, Progress, Typography, Tag, Row, Col } from 'antd';
import { 
    CodeOutlined,
    GithubOutlined,
    Html5Outlined,
    NodeIndexOutlined,
    DatabaseOutlined,
    ApiOutlined,
    CodepenOutlined,
    CloudServerOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const MotionDiv = motion.div;
const skills = [
    { 
        name: 'Python',
        icon: <CodepenOutlined />,
        level: 90,
        color: '#3776AB',
        tags: ['Problem Solving','Automation']
    },
    { 
        name: 'C',
        icon: <CodeOutlined />,
        level: 85,
        color: '#A8B9CC',
        tags: ['Data Structures', 'Algorithms']
    },
    { 
        name: 'Java',
        icon: <CloudServerOutlined />,
        level: 80,
        color: '#007396',
        tags: ['Java Swing','Android Development']
    },
    { 
        name: 'JavaScript',
        icon: <Html5Outlined />,
        level: 85,
        color: '#F7DF1E',
        tags: ['ES6+', 'React', 'Node.js']
    },
    { 
        name: 'Git',
        icon: <GithubOutlined />,
        level: 80,
        color: '#F05032',
        tags: ['GitHub']
    },
    { 
        name: 'React',
        icon: <NodeIndexOutlined />,
        level: 75,
        color: '#61DAFB',
        tags: ['Hooks']
    },
    { 
        name: 'SQL',
        icon: <DatabaseOutlined />,
        level: 85,
        color: '#4479A1',
        tags: ['MySQL', 'MongoDB']
    },
    { 
        name: 'Node.js',
        icon: <ApiOutlined />,
        level: 70,
        color: '#339933',
        tags: ['Express', 'REST API']
    },
];

const SkillCard = ({ name, icon, level, color, tags, controls }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <Card
                className="h-full backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 hover:shadow-xl transition-all duration-300"
                bordered={false}
                style={{ overflow: 'hidden' }}
            >
                <div className="relative">
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5" style={{
                        background: color,
                        borderRadius: '0 0 0 100%',
                        transform: 'scale(2)'
                    }}></div>
                    
                    <div className="text-center mb-4">
                        <span className="text-4xl dark:text-opacity-90" style={{ color: color }}>
                            {icon}
                        </span>
                    </div>

                    <Title level={4} className="text-center mb-4 dark:!text-white">
                        {name}
                    </Title>

                    <Progress
                        percent={level}
                        strokeColor={color}
                        trailColor="rgba(0,0,0,0.1)"
                        size="small"
                        className="mb-4"
                    />

                    <div className="flex flex-wrap gap-2 justify-center">
                        {tags.map((tag, index) => (
                            <Tag
                                key={index}
                                color={color}
                                style={{ opacity: 0.8 }}
                            >
                                {tag}
                            </Tag>
                        ))}
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};

const Skills = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16">
                    <div className="relative group mb-6">
                        <Title level={2} className="!text-4xl !font-bold dark:!text-white text-center">
                            Technical Skills
                        </Title>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <Text className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl block">
                        Proficient in various programming languages and technologies
                    </Text>
                </div>

                <Row
                    ref={ref}
                    gutter={[24, 24]}
                >
                    {skills.map((skill, index) => (
                        <Col xs={24} sm={12} lg={6} key={index}>
                            <SkillCard
                                name={skill.name}
                                icon={skill.icon}
                                level={skill.level}
                                color={skill.color}
                                tags={skill.tags}
                                controls={controls}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Skills;