import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.png';

export default function About() {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <SectionHeading title="About Me" subtitle="A glimpse into who I am and what drives me" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        {/* Left — Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-2 flex justify-center"
        >
          <div className="cyber-photo-container relative">
            {/* Floating glow orb behind */}
            <div className="cyber-glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

            {/* Gradient border wrapper with clip-path */}
            <div className="cyber-border-wrap relative z-10 p-[3px]">
              {/* Photo */}
              <div className="cyber-photo-inner overflow-hidden">
                <img
                  src={profileImg}
                  alt="Sakshi Singh"
                  className="cyber-photo-img w-full h-full"
                />
              </div>
            </div>

            {/* Floating IBM Intern pill */}
            <div className="cyber-pill absolute -right-4 top-1/2 -translate-y-1/2 z-20">
              <span className="cyber-pill-inner inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
                IBM Intern ✦
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right — Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-3"
        >
          <div className="space-y-5">
            {personalInfo.about.paragraphs.map((p, i) => (
              <p key={i} className="text-silver-300 leading-relaxed text-base md:text-lg">
                {p}
              </p>
            ))}
          </div>

          {/* Highlight Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {personalInfo.about.highlights.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-4 text-center hover:glow transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-extrabold gradient-text">{stat.value}</div>
                <div className="text-xs text-silver-400 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
