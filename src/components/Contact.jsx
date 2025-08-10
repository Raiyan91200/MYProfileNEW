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
        <section id="contact" className="section bg-gray-50 dark:bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                <Title level={2} className="text-center text-gray-800 dark:text-white mb-16">
                    Get In Touch
                </Title>

                <div
                    ref={ref}
                    className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto"
                >
                    <Card className="lg:w-2/5 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-gray-200 dark:border-gray-700" variant="outlined">
                        <Paragraph className="text-gray-600 dark:text-gray-300 mb-8">
                            Feel free to reach out to me via social links or send a message below.
                        </Paragraph>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <Tooltip title="My Location" className="dark:text-white">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-all duration-300 dark:shadow-blue-500/20">
                                        <EnvironmentOutlined className="text-xl" />
                                    </div>
                                </Tooltip>
                                <div>
                                    <Title level={5} className="!mb-1 !text-gray-800 dark:!text-white">Location</Title>
                                    <Text className="text-gray-600 dark:text-gray-300">Dhaka, Bangladesh</Text>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Tooltip title="Email Me" className="dark:text-white">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-all duration-300 dark:shadow-blue-500/20">
                                        <MailOutlined className="text-xl" />
                                    </div>
                                </Tooltip>
                                <div>
                                    <Title level={5} className="!mb-1 !text-gray-800 dark:!text-white">Email</Title>
                                    <Text className="text-gray-600 dark:text-gray-300">
                                        <a href="mailto:raiyannasim91200@gmail.com" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                            raiyannasim91200@gmail.com
                                        </a>
                                    </Text>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Tooltip title="Call Me" className="dark:text-white">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-all duration-300 dark:shadow-blue-500/20">
                                        <PhoneOutlined className="text-xl" />
                                    </div>
                                </Tooltip>
                                <div>
                                    <Title level={5} className="!mb-1 !text-gray-800 dark:!text-white">Phone</Title>
                                    <Text className="text-gray-600 dark:text-gray-300">
                                        <a href="tel:+8801537204470" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                            +880 1537204470
                                        </a>
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="lg:w-3/5 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-gray-200 dark:border-gray-700" variant="outlined">
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
                            >
                                <Input placeholder="Your Name" />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    { required: true, message: 'Please enter your email' },
                                    { type: 'email', message: 'Please enter a valid email' }
                                ]}
                            >
                                <Input placeholder="Your Email" />
                            </Form.Item>

                            <Form.Item
                                name="message"
                                label="Message"
                                rules={[{ required: true, message: 'Please enter your message' }]}
                            >
                                <Input.TextArea 
                                    rows={5} 
                                    placeholder="Your Message"
                                    className="resize-none"
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
                                    className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 border-0 shadow-lg hover:shadow-xl transition-all 
                                             dark:from-blue-600 dark:to-blue-700 dark:shadow-blue-500/20
                                             hover:scale-[1.02] active:scale-[0.98]"
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