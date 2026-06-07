import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import { trackContactSubmit } from '../utils/analytics';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mkgbwrvy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        trackContactSubmit();
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch {
      // Handle silently
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, label: 'LOCATION', value: 'Dhaka, Bangladesh' },
    { icon: <FaEnvelope />, label: 'EMAIL', value: 'raiyannasim91200@gmail.com', href: 'mailto:raiyannasim91200@gmail.com' },
    { icon: <FaPhone />, label: 'COMM', value: '+880 1537204470', href: 'tel:+8801537204470' },
  ];

  return (
    <section id="contact" className="game-section relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Section Label */}
          <div className="section-code-heading">{'// CONNECT'}</div>

          {/* Section Title */}
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            <span className="text-text-muted font-light">READY TO </span>
            <span
              className="text-neon-blue block md:inline"
              style={{ textShadow: '0 0 30px rgba(0,212,255,0.4), 0 0 60px rgba(0,212,255,0.15)' }}
            >
              CONNECT?
            </span>
          </h2>

          <p className="font-rajdhani text-lg text-text-muted mb-12 md:mb-16 max-w-2xl">
            Got a project in mind or want to collaborate? Send a transmission and let&apos;s create something amazing together.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16">
            {/* Contact Info */}
            <div
              className="lg:col-span-2 space-y-8"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.8s ease',
              }}
            >
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-neon-blue/20 text-neon-blue/60 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-text-muted tracking-[0.2em] mb-1">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-rajdhani text-text-primary hover:text-neon-blue transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="font-rajdhani text-text-primary">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div
              className="lg:col-span-3"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : 'translateX(30px)',
                transition: 'all 0.8s ease 0.2s',
              }}
            >
              {submitted ? (
                <div className="hud-panel p-8 text-center">
                  <div className="font-orbitron text-neon-green text-lg tracking-wider mb-2"
                    style={{ textShadow: '0 0 15px rgba(57,255,20,0.4)' }}
                  >
                    TRANSMISSION SENT
                  </div>
                  <p className="font-rajdhani text-text-muted">
                    Thank you! I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-mono text-[10px] text-text-muted tracking-[0.2em] block mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="> enter your name"
                      required
                      className="terminal-input"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-text-muted tracking-[0.2em] block mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="> enter your email"
                      required
                      className="terminal-input"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-text-muted tracking-[0.2em] block mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="> type your message..."
                      required
                      rows={5}
                      className="terminal-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-neon w-full sm:w-auto"
                  >
                    <FaPaperPlane className="text-xs" />
                    {isSubmitting ? 'SENDING...' : 'SEND TRANSMISSION'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;