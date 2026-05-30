import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiBookOpen, FiAward, FiCheckCircle, FiUsers } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { experience } from '../data/portfolioData';

const typeConfig = {
  internship: { icon: FiBriefcase, color: '#8b5cf6', label: 'Internship' },
  research: { icon: FiBookOpen, color: '#3b82f6', label: 'Research' },
  achievement: { icon: FiAward, color: '#f59e0b', label: 'Achievement' },
  certification: { icon: FiCheckCircle, color: '#10b981', label: 'Certification' },
  community: { icon: FiUsers, color: '#06b6d4', label: 'Community' },
};

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="section-padding max-w-5xl mx-auto">
      <SectionHeading
        title="Experience & Achievements"
        subtitle="My journey in tech — milestones, roles, and recognitions"
      />

      <div ref={containerRef} className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-[2px] bg-obsidian-700">
          <motion.div
            className="w-full bg-gradient-to-b from-neon-purple via-neon-blue to-neon-cyan rounded-full"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {experience.map((item, i) => {
            const config = typeConfig[item.type] || typeConfig.achievement;
            const Icon = config.icon;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10"
                  style={{
                    borderColor: config.color,
                    backgroundColor: '#0a0a0f',
                    boxShadow: `0 0 12px ${config.color}60`,
                  }}
                />

                {/* Content Card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass rounded-xl p-5 md:p-6 hover:border-white/10 transition-all duration-300 group">
                    {/* Type Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          color: config.color,
                          backgroundColor: `${config.color}15`,
                        }}
                      >
                        <Icon className="w-3 h-3" />
                        {config.label}
                      </div>
                      <span className="text-xs text-silver-500 font-mono">{item.duration}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-silver-100 mb-1">{item.title}</h3>
                    <p className="text-sm text-neon-violet font-medium mb-3">{item.organization}</p>

                    {/* Description */}
                    <p className="text-sm text-silver-400 leading-relaxed mb-4">{item.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium text-silver-400 bg-white/5 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
