import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-obsidian-950"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Animated Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-neon-blue/10 rounded-full blur-[80px] animate-pulse delay-500" />
      </div>

      {/* Logo Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="gradient-text">{'<Dev'}</span>
          <span className="text-silver-200">{'/>'}</span>
        </h1>
      </motion.div>

      {/* Loading Bar */}
      <div className="relative z-10 w-48 h-1 rounded-full bg-obsidian-700 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4)',
          }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative z-10 mt-4 text-sm text-silver-400 font-mono tracking-widest uppercase"
      >
        Loading Portfolio
      </motion.p>
    </motion.div>
  );
}
