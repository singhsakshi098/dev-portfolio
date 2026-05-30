import { FiGithub, FiLinkedin, FiHeart, FiArrowUp } from 'react-icons/fi';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Logo & Tagline */}
          <div>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="text-xl font-extrabold tracking-tight">
              <span className="gradient-text">{'<'}{personalInfo.name.split(' ')[0]}</span>
              <span className="text-silver-200">{' />'}</span>
            </a>
            <p className="mt-3 text-sm text-silver-500 max-w-xs leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-center">
            <h4 className="text-sm font-semibold text-silver-200 mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-silver-500 hover:text-neon-purple transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Back to Top */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-3">
              {[
                { icon: FiGithub, href: personalInfo.social.github },
                { icon: FiLinkedin, href: personalInfo.social.linkedin },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass text-silver-400 hover:text-neon-purple hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-xs font-medium text-silver-400 hover:text-neon-purple transition-all duration-300 hover:scale-105"
            >
              <FiArrowUp className="w-3.5 h-3.5" />
              Back to top
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-silver-500 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}. Built with
            <FiHeart className="w-3 h-3 text-red-400 fill-red-400" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
