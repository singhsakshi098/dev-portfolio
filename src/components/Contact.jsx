import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolioData';

const socialIcons = [
  { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.name.trim() || !form.email.trim() || !form.message.trim() || !emailRegex.test(form.email.trim())) {
      setStatus('error');
      setTimeout(() => setStatus(null), 3000);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...form,
        }).toString(),
      });
      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
    }
    setLoading(false);
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind or just want to chat? I'd love to hear from you."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h3 className="text-xl font-bold text-silver-100 mb-2">Let&apos;s connect</h3>
            <p className="text-silver-400 text-sm leading-relaxed">
              Whether you have a question, a proposal, or just want to say hi — my inbox is always open.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: null },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 glass rounded-xl group hover:border-neon-purple/20 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-neon-purple/10">
                  <item.icon className="w-4 h-4 text-neon-purple" />
                </div>
                <div>
                  <p className="text-xs text-silver-500 font-medium mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-silver-200 hover:text-neon-purple transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-silver-200">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-xl glass text-silver-400 hover:text-neon-purple hover:glow transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-silver-400 mb-2">
                  Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl glass text-silver-200 text-sm placeholder:text-silver-600 outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/30 transition-all duration-300 bg-transparent"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-silver-400 mb-2">
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl glass text-silver-200 text-sm placeholder:text-silver-600 outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/30 transition-all duration-300 bg-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-medium text-silver-400 mb-2">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-xl glass text-silver-200 text-sm placeholder:text-silver-600 outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/30 transition-all duration-300 bg-transparent"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-silver-400 mb-2">
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project or idea..."
                className="w-full px-4 py-3 rounded-xl glass text-silver-200 text-sm placeholder:text-silver-600 outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/30 transition-all duration-300 bg-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-purple/20 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed, #6d28d9)' }}
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <FiSend className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              )}
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Toast Messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
            >
              <FiCheckCircle className="w-4 h-4" />
              Message sent successfully! ✓
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
            >
              <FiAlertCircle className="w-4 h-4" />
              Please fill in all required fields.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
