import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolioData';

const filterTabs = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const featured = filtered.filter((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      <SectionHeading
        title="Projects"
        subtitle="A showcase of my recent work and side projects"
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeFilter === tab
                ? 'text-white'
                : 'text-silver-400 hover:text-silver-200 glass'
            }`}
          >
            {activeFilter === tab && (
              <motion.div
                layoutId="project-tab"
                className="absolute inset-0 rounded-xl glow-purple"
                style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Featured Projects */}
          {featured.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {featured.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} featured />
              ))}
            </div>
          )}

          {/* Regular Projects */}
          {regular.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regular.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-silver-500 py-16">
              No projects found in this category yet.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:border-neon-purple/20 hover:shadow-lg hover:shadow-neon-purple/5 ${
        featured ? 'p-6 md:p-8' : 'p-5 md:p-6'
      }`}
    >
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Featured Badge */}
      {featured && (
        <div className="flex items-center gap-1.5 mb-4">
          <FiStar className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">Featured</span>
        </div>
      )}

      {/* Category */}
      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-neon-purple bg-neon-purple/10 mb-4">
        {project.category}
      </span>

      {/* Title */}
      <h3 className={`font-bold text-silver-100 mb-3 ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-silver-400 text-sm leading-relaxed mb-5">
        {featured ? project.longDescription || project.description : project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-[11px] font-medium text-silver-300 bg-white/5 border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold glass text-silver-300 hover:text-white hover:border-neon-purple/30 transition-all duration-300"
        >
          <FiGithub className="w-3.5 h-3.5" />
          Source
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}
          >
            <FiExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
