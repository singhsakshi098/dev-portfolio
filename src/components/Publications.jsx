import { motion } from 'framer-motion';
import { FiExternalLink, FiAward, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolioData';

const publication = {
  title:
    'Majdoor Digital Trust-Ledger (MDTL): A Decentralized Framework for Bridging Informal Labor to Formal Economic Inclusion',
  conference: '2026 International Conference on Smart Futuristic Technology (ICSFT)',
  year: '2026',
  indexing: 'Scopus Indexed',
  status: 'Paper Presented',
  ieeeLink: 'https://ieeexplore.ieee.org/document/11506696',
  certificateLink: '#',
  meta: [
    { icon: FiCalendar, label: 'Jan 2026' },
    { icon: FiAward, label: 'IEEE' },
    { icon: FiCheckCircle, label: 'Peer Reviewed' },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Publications() {
  return (
    <section id="publications" className="section-padding max-w-5xl mx-auto">
      <SectionHeading
        title="Research & Publications"
        subtitle="Published research contributing to the advancement of technology and society."
      />

      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="pub-card relative rounded-2xl p-px overflow-hidden"
      >
        {/* Animated neon border wrapper */}
        <div className="pub-card-border absolute inset-0 rounded-2xl pointer-events-none" />

        {/* Inner content */}
        <div className="relative rounded-2xl p-8 md:p-10 pub-card-inner">
          {/* Published badge */}
          <div className="absolute top-5 right-5 z-10">
            <span className="pub-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="pub-badge-dot w-2 h-2 rounded-full bg-green-400" />
              Published
            </span>
          </div>

          {/* Paper title */}
          <h3 className="text-xl md:text-2xl font-bold text-silver-100 pr-28 mb-4 leading-snug font-display">
            {publication.title}
          </h3>

          {/* Conference name */}
          <p className="text-sm md:text-base text-neon-violet font-medium mb-2">
            {publication.conference}
          </p>

          {/* Indexing label */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
              {publication.indexing}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
              {publication.status}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href={publication.ieeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pub-btn-ieee inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
            >
              <FiExternalLink className="w-4 h-4" />
              View on IEEE →
            </a>
            <a
              href={publication.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pub-btn-cert inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
            >
              📜 Certificate
            </a>
          </div>

          {/* Meta info row */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/5">
            {publication.meta.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 text-xs text-silver-400"
              >
                <item.icon className="w-3.5 h-3.5 text-neon-purple" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
