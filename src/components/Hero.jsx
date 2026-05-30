import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowDown, FiExternalLink, FiFileText } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const orbs = [
  { size: 300, top: '10%', left: '15%', color: '#8b5cf6', delay: 0 },
  { size: 200, top: '60%', left: '70%', color: '#3b82f6', delay: 2 },
  { size: 250, top: '30%', left: '80%', color: '#7c3aed', delay: 4 },
  { size: 180, top: '70%', left: '20%', color: '#06b6d4', delay: 1 },
  { size: 120, top: '15%', left: '55%', color: '#a78bfa', delay: 3 },
  { size: 160, top: '50%', left: '40%', color: '#8b5cf6', delay: 5 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const socialLinks = [
  { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(59,130,246,0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(6,182,212,0.08) 0%, transparent 50%)',
        }}
      />

      {/* Floating Orbs */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            background: `radial-gradient(circle, ${orb.color}15 0%, transparent 70%)`,
            filter: 'blur(40px)',
            animation: `orb-drift ${12 + i * 2}s ease-in-out ${orb.delay}s infinite`,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Greeting Badge */}
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-silver-300">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4"
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-silver-300 mb-6 font-mono"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto text-base md:text-lg text-silver-400 leading-relaxed mb-10"
        >
          {personalInfo.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105 glow-purple"
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed, #6d28d9)' }}
          >
            <FiExternalLink className="w-4 h-4" />
            View Projects
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/10 text-silver-200 hover:bg-white/5 hover:border-neon-purple/30 transition-all duration-300 hover:scale-105"
          >
            <FiFileText className="w-4 h-4" />
            Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/10 text-silver-200 hover:bg-white/5 hover:border-neon-blue/30 transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-16">
          {socialLinks.map((social) => (
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
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeUp}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="flex flex-col items-center gap-2 text-silver-500 hover:text-neon-purple transition-colors"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
            <FiArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
