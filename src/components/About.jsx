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
          <div className="profile-photo-wrapper relative">
            {/* Rotating gradient border */}
            <div className="profile-glow-ring absolute inset-[-4px] rounded-full z-0" />
            {/* Photo */}
            <div className="profile-photo-inner relative z-10 rounded-full overflow-hidden w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <img
                src={profileImg}
                alt="Sakshi Singh"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
            {/* Background accent orb */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-neon-cyan/8 rounded-full blur-2xl pointer-events-none" />
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
