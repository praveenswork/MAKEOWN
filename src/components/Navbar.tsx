import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, Cpu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
      
      // Delay the scroll slightly to allow the mobile drawer to begin transitioning to shut,
      // preventing any visual coordinate jump or layout shift conflicts.
      setTimeout(() => {
        const offset = 80; // height of the sticky navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const targetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }, 60);
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-black/5 dark:border-white/10 shadow-sm'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo with micro-hover accent */}
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
          id="navbar-brand-logo"
        >
          <div className="p-2 rounded-xl bg-[#0071e3] flex items-center justify-center text-white shadow-sm shadow-blue-500/10 group-hover:scale-105 transition-transform duration-200">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white transition-colors">
            MakeOwn
            <span className="text-blue-600 dark:text-blue-400"> Technologies</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/60 dark:bg-neutral-900/60 p-1 rounded-full border border-black/5 dark:border-white/10 shadow-inner">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full tracking-wide transition-all duration-300 relative ${
                activeSection === item.id
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-full shadow-sm z-[-1] border border-black/5 dark:border-white/5"
                  transition={{ type: 'spring', damping: 20, stiffness: 220 }}
                />
              )}
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Nav-Actions: Theme Toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full cursor-pointer bg-slate-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-400 transition-colors shrink-0 text-slate-800 dark:text-slate-200"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-slate-700 animate-pulse" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </motion.button>

          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white dark:bg-white dark:hover:bg-slate-100 dark:text-black transition-all duration-200 cursor-pointer shadow-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu toggle + Theme Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-neutral-900 border border-black/5 dark:border-white/14 text-slate-800 dark:text-slate-200"
            aria-label="Toggle Theme Mobil"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-slate-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 text-slate-900 dark:text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur-xl overflow-hidden shadow-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`py-3 text-sm font-semibold border-b border-black/[0.03] dark:border-white/[0.03] last:border-b-0 cursor-pointer block select-none transition-colors duration-150 ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 pl-2 border-l-2 border-blue-500'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-450'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="mt-2 w-full py-2.5 rounded-full text-center text-xs font-semibold bg-[#0071e3] dark:bg-white text-white dark:text-black shadow-sm cursor-pointer"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
