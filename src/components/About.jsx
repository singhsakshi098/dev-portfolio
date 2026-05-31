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
          <div className="hud-photo-container relative">
            {/* Floating glow orb behind photo */}
            <div className="hud-glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none z-0" />

            {/* Rotating gradient border wrapper */}
            <div className="hud-border-wrap relative z-10 rounded-[20px] p-[3px]">
              {/* HUD Corner Accents */}
              <div className="hud-corner hud-corner-tl" />
              <div className="hud-corner hud-corner-tr" />
              <div className="hud-corner hud-corner-bl" />
              <div className="hud-corner hud-corner-br" />

              {/* Photo container */}
              <div className="hud-photo-inner relative rounded-[18px] overflow-hidden" style={{ width: '280px', height: '320px' }}>
                <img
                  src={profileImg}
                  alt="Sakshi Singh"
                  className="profile-image w-full h-full"
                />
                {/* Scanline overlay */}
                <div className="hud-scanline absolute inset-0 pointer-events-none z-20" />
              </div>
            </div>

            {/* Available for Work badge */}
            <div className="hud-badge absolute -bottom-3 -right-3 z-30">
              <span className="hud-badge-inner inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold">
                <span className="hud-badge-ring" />
                ✦ Available for Work
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
