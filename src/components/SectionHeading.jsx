import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col ${alignment} mb-16`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight gradient-text pb-1">
        {title}
      </h2>
      <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan" />
      {subtitle && (
        <p className="mt-4 max-w-xl text-silver-400 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
