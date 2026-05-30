import { motion } from 'framer-motion';
import { FiCode, FiTerminal, FiLayers } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolioData';

const codeLines = [
  { text: 'const developer = {', indent: 0 },
  { text: "  passion: 'Building the Web',", indent: 0 },
  { text: "  focus: 'UI/UX & Performance',", indent: 0 },
  { text: "  mindset: 'Always Learning',", indent: 0 },
  { text: '};', indent: 0 },
];

export default function About() {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <SectionHeading title="About Me" subtitle="A glimpse into who I am and what drives me" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — Decorative Code Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative p-1 rounded-2xl bg-gradient-to-br from-neon-purple/40 via-neon-blue/20 to-neon-cyan/30">
            <div className="rounded-2xl bg-obsidian-900 p-6 md:p-8">
              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-silver-500 font-mono">about.js</span>
              </div>
              {/* Code Lines */}
              <div className="font-mono text-sm md:text-base space-y-2">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-silver-500 text-xs w-5 text-right select-none">{i + 1}</span>
                    <span className="text-silver-300">{line.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats Icons */}
              <div className="mt-8 flex gap-4">
                {[
                  { icon: FiCode, label: 'Clean Code' },
                  { icon: FiTerminal, label: 'Full Stack' },
                  { icon: FiLayers, label: 'Scalable' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-xs text-silver-400">
                    <item.icon className="w-3.5 h-3.5 text-neon-purple" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Floating accent orb */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-neon-purple/10 rounded-full blur-2xl" />
        </motion.div>

        {/* Right — Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
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
