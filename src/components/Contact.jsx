import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Typography, Form, Input, Button, Card, message, Tooltip } from 'antd';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, SendOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const Contact = () => {
    const [ref] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [form] = Form.useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (values) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/mkgbwrvy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                message.success({
                    content: 'Thank you for your message! I will get back to you soon.',
                    className: 'dark:bg-gray-800 dark:text-white'
                });
                form.resetFields();
            } else {
                message.error({
                    content: 'Oops! Something went wrong. Please try again later.',
                    className: 'dark:bg-gray-800 dark:text-white'
                });
            }
        } catch {
            message.error({
                content: 'Network error. Please try again later.',
                className: 'dark:bg-gray-800 dark:text-white'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section bg-gray-900 py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <Title level={2} className="text-center text-white !text-4xl !font-bold !mb-4">
                        Get In Touch
                    </Title>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
                </div>

                <div
                    ref={ref}
                    className="flex flex-col lg:flex-row gap-6 md:gap-10 max-w-6xl mx-auto"
                >
                    <Card className="cyber-card w-full lg:w-2/5 backdrop-blur-sm bg-gray-800/90 border-gray-700" variant="outlined">
                        <Paragraph className="text-gray-300 mb-6 md:mb-8 text-sm sm:text-base">
                            Feel free to reach out to me via social links or send a message below.
                        </Paragraph>

                        <div className="space-y-6 md:space-y-8">
                            <div className="flex items-start gap-3 md:gap-4">
                                <Tooltip title="My Location" className="text-white">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-all duration-300 shadow-blue-500/20 flex-shrink-0">
                                        <EnvironmentOutlined className="text-lg md:text-xl" />
                                    </div>
                                </Tooltip>
                                <div className="min-w-0 flex-1">
                                    <Title level={5} className="!mb-1 !text-white !text-sm sm:!text-base">Location</Title>
                                    <Text className="text-gray-300 text-sm sm:text-base">Dhaka, Bangladesh</Text>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4">
                                <Tooltip title="Email Me" className="text-white">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-all duration-300 shadow-blue-500/20 flex-shrink-0">
                                        <MailOutlined className="text-lg md:text-xl" />
                                    </div>
                                </Tooltip>
                                <div className="min-w-0 flex-1">
                                    <Title level={5} className="!mb-1 !text-white !text-sm sm:!text-base">Email</Title>
                                    <Text className="text-gray-300 text-sm sm:text-base break-all">
                                        <a href="mailto:raiyannasim91200@gmail.com" className="hover:text-blue-400 transition-colors">
                                            raiyannasim91200@gmail.com
                                        </a>
                                    </Text>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4">
                                <Tooltip title="Call Me" className="text-white">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-all duration-300 shadow-blue-500/20 flex-shrink-0">
                                        <PhoneOutlined className="text-lg md:text-xl" />
                                    </div>
                                </Tooltip>
                                <div className="min-w-0 flex-1">
                                    <Title level={5} className="!mb-1 !text-white !text-sm sm:!text-base">Phone</Title>
                                    <Text className="text-gray-300 text-sm sm:text-base">
                                        <a href="tel:+8801537204470" className="hover:text-blue-400 transition-colors">
                                            +880 1537204470
                                        </a>
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="w-full lg:w-3/5 backdrop-blur-sm bg-gray-800/90 border-gray-700" variant="outlined">
                        <Form
                            form={form}
                            onFinish={handleSubmit}
                            layout="vertical"
                            size="large"
                            className="[&_.ant-form-item-label>label]:!text-gray-700 [&_.ant-form-item-label>label]:dark:!text-gray-300 
                                     [&_.ant-input]:!bg-white [&_.ant-input]:dark:!bg-gray-700 
                                     [&_.ant-input]:!border-gray-200 [&_.ant-input]:dark:!border-gray-600
                                     [&_.ant-input]:!text-gray-800 [&_.ant-input]:dark:!text-gray-200
                                     [&_.ant-input::placeholder]:!text-gray-400 [&_.ant-input::placeholder]:dark:!text-gray-500
                                     [&_.ant-input:hover]:!border-blue-500 [&_.ant-input:focus]:!border-blue-500
                                     [&_.ant-input-textarea-show-count::after]:!text-gray-500 [&_.ant-input-textarea-show-count::after]:dark:!text-gray-400"
                        >
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: 'Please enter your name' }]}
                                className="mb-4 md:mb-6"
                            >
                                <Input placeholder="Your Name" className="!h-10 sm:!h-12" />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    { required: true, message: 'Please enter your email' },
                                    { type: 'email', message: 'Please enter a valid email' }
                                ]}
                                className="mb-4 md:mb-6"
                            >
                                <Input placeholder="Your Email" className="!h-10 sm:!h-12" />
                            </Form.Item>

                            <Form.Item
                                name="message"
                                label="Message"
                                rules={[{ required: true, message: 'Please enter your message' }]}
                                className="mb-4 md:mb-6"
                            >
                                <Input.TextArea 
                                    rows={4} 
                                    placeholder="Your Message"
                                    className="resize-none !text-sm sm:!text-base"
                                    showCount
                                    maxLength={500}
                                />
                            </Form.Item>

                            <Form.Item className="mb-0">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={isSubmitting}
                                    icon={<SendOutlined />}
                                    className="cyber-btn-primary w-full h-10 sm:h-12 text-sm sm:text-base"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;