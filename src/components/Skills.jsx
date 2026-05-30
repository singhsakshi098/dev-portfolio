import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss,
  SiHtml5, SiCss, SiRedux, SiFramer, SiGreensock,
  SiNodedotjs, SiExpress, SiPython, SiPostman, SiGraphql,
  SiMongodb, SiPostgresql, SiFirebase, SiRedis, SiMysql,
  SiGit, SiDocker, SiCodeblocks, SiFigma, SiVercel,
  SiGooglecloud, SiLinux, SiWebpack,
} from 'react-icons/si';
import SectionHeading from './SectionHeading';
import { skills } from '../data/portfolioData';

const iconMap = {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss,
  SiHtml5, SiCss, SiRedux, SiFramer, SiGreensock,
  SiNodedotjs, SiExpress, SiPython, SiPostman, SiGraphql,
  SiMongodb, SiPostgresql, SiFirebase, SiRedis, SiMysql,
  SiGit, SiDocker, SiCodeblocks, SiFigma, SiVercel,
  SiGooglecloud, SiLinux, SiWebpack,
};

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'databases', label: 'Databases' },
  { key: 'languages', label: 'Languages' },
  { key: 'tools', label: 'Tools' },
];

const allSkills = [...skills.frontend, ...skills.backend, ...skills.databases, ...(skills.languages || []), ...skills.tools];

export default function Skills() {
  const [active, setActive] = useState('frontend');
  const currentSkills = skills[active] || [];

  return (
    <section id="skills" className="section-padding max-w-7xl mx-auto">
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies I work with to bring ideas to life"
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              active === cat.key
                ? 'text-white'
                : 'text-silver-400 hover:text-silver-200 glass'
            }`}
          >
            {active === cat.key && (
              <motion.div
                layoutId="skill-tab"
                className="absolute inset-0 rounded-xl glow-purple"
                style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Skill Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {currentSkills.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group glass rounded-xl p-5 flex flex-col items-center gap-3 cursor-default transition-all duration-300 hover:border-white/15"
                style={{
                  animation: `float ${6 + (i % 4)}s ease-in-out ${i * 0.5}s infinite`,
                }}
              >
                {Icon && (
                  <Icon
                    className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                )}
                <span className="text-xs font-medium text-silver-300 text-center">{skill.name}</span>
                <div
                  className="w-full h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: skill.color }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Marquee */}
      <div className="mt-16 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-obsidian-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-obsidian-950 to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap gap-8 py-4">
          {[...allSkills, ...allSkills].map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <div key={i} className="flex items-center gap-2 text-silver-500">
                {Icon && <Icon className="w-5 h-5" style={{ color: skill.color }} />}
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
