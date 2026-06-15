import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  ShoppingBag,
  Monitor,
  Smartphone,
  Tablet,
  Layers,
  Terminal,
  CreditCard,
  Briefcase,
  Users2,
  Cpu,
  Palette,
  ArrowRight,
  Plus
} from 'lucide-react';
import { ServiceCard } from '../types';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  const servicesData: (ServiceCard & { icon: React.ReactNode; color: string; tech: string[] })[] = [
    {
      id: 'web-dev',
      title: 'Website Development',
      description: 'Stunning marketing presences, business sites, and promotional portals boasting high-speed load vectors and structural SEO optimization.',
      category: 'Web',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-400',
      tech: ['React', 'Astro', 'TypeScript', 'SEO Engine'],
    },
    {
      id: 'e-com',
      title: 'E-Commerce',
      description: 'Frictionless virtual storefronts featuring premium checkout layouts, automated invoicing, secure payment gateways, and client dashboards.',
      category: 'Commerce',
      icon: <ShoppingBag className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-400',
      tech: ['Stripe', 'Node.js', 'Redis', 'Cart Engine'],
    },
    {
      id: 'web-app',
      title: 'Web Application',
      description: 'Interactive portals, cloud-backed utilities, and cloud platform consoles compiled with strict type safety and responsive components.',
      category: 'Web',
      icon: <Monitor className="w-5 h-5" />,
      color: 'from-indigo-500 to-blue-600',
      tech: ['Next.js', 'Vite', 'Server Actions', 'PostgreSQL'],
    },
    {
      id: 'android-dev',
      title: 'Android Development',
      description: 'Highly responsive custom Android products. Optimized for hardware integration, fast processing, and material UI interfaces.',
      category: 'Mobile',
      icon: <Smartphone className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-400',
      tech: ['Kotlin', 'Compose', 'Coroutines', 'SQL Server'],
    },
    {
      id: 'ios-dev',
      title: 'iOS App Development',
      description: 'Masterfully built iOS utilities sticking strictly to Apple’s Human Interface Guidelines. Premium typography, tactile haptics, and rich widgets.',
      category: 'Mobile',
      icon: <Tablet className="w-5 h-5" />,
      color: 'from-violet-500 to-fuchsia-500',
      tech: ['Swift', 'SwiftUI', 'CoreData', 'Combine'],
    },
    {
      id: 'cross-plat',
      title: 'Cross Platform Mobile',
      description: 'Dual-target mobile configurations compiled from unified codebases. Fast time-to-market with beautiful native feel.',
      category: 'Mobile',
      icon: <Layers className="w-5 h-5" />,
      color: 'from-cyan-500 to-blue-500',
      tech: ['Flutter', 'React Native', 'Dart', 'Expo'],
    },
    {
      id: 'custom-soft',
      title: 'Custom Software',
      description: 'Bespoke tools and private utility layers designed to digitize complex legacy routines and centralize internal company files.',
      category: 'Enterprise',
      icon: <Terminal className="w-5 h-5" />,
      color: 'from-rose-500 to-orange-500',
      tech: ['Rust', 'Java', 'Docker', 'REST API'],
    },
    {
      id: 'pos-sys',
      title: 'POS (Point of Sale) System',
      description: 'Modern, multi-terminal checkout, live sales analysis pipelines, inventory triggers, receipt format modules, and local database sync.',
      category: 'Retail',
      icon: <CreditCard className="w-5 h-5" />,
      color: 'from-amber-500 to-orange-400',
      tech: ['Offline-Sync', 'Thermal Print', 'Barcode API', 'Electron'],
    },
    {
      id: 'erp',
      title: 'ERP',
      description: 'Enterprise Resource Planning software orchestrating logistics, manufacturing pipelines, employee timesheets, and accounting matrices.',
      category: 'Enterprise',
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-blue-600 to-indigo-700',
      tech: ['SQL Databases', 'Role Access', 'Audit Logs', 'Reports'],
    },
    {
      id: 'crm',
      title: 'CRM',
      description: 'Robust Client Relationship Management systems with real-time analytics, sales funnel automations, leads pipelines, and call logging.',
      category: 'Enterprise',
      icon: <Users2 className="w-5 h-5" />,
      color: 'from-purple-600 to-pink-500',
      tech: ['Lead Pipeline', 'Notification Hub', 'Metrics', 'Calendar'],
    },
    {
      id: 'ai-auto',
      title: 'AI Automation',
      description: 'Model integrations, language-processing tasks, automated text categorization, and intelligent digital agents that streamline back-office overhead.',
      category: 'Intelligence',
      icon: <Cpu className="w-5 h-5" />,
      color: 'from-violet-600 to-blue-500',
      tech: ['Gemini SDK', 'NLP Tunnels', 'Agent Workflows', 'Retrievals'],
    },
    {
      id: 'ui-ux',
      title: 'UI / UX Design',
      description: 'Immersive layouts, high-fidelity prototypes, balanced typography styles, visual consistency libraries, and user journey optimization.',
      category: 'Design',
      icon: <Palette className="w-5 h-5" />,
      color: 'from-pink-500 to-rose-400',
      tech: ['Figma Pro', 'Visual Identity', 'Hi-Fi Framing', 'Animations'],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-violet-500/5 filter blur-[70px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400"
          >
            Sectors & Practices
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Digital Capabilities. Multiplied.
          </motion.h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
            Explore our specialized service modules. Perfect for pioneering firms and tech-enabled businesses.
          </p>
          <div className="h-1 w-12 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mt-2" />
        </div>

        {/* 4 columns x 3 rows Grid configuration strictly for services (12 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedService(service)}
              className="group flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 shadow-sm hover:border-blue-500/30 dark:hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/[0.04] transition-all duration-300 relative overflow-hidden cursor-pointer h-[260px]"
            >
              {/* Subtle top decoration corner border */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

              <div>
                {/* Floating Category Tag */}
                <div className="flex justify-between items-center mb-4">
                  <div className={`p-2.5 rounded-2xl bg-gradient-to-tr ${service.color} text-white shadow-md shadow-blue-500/5`}>
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase bg-slate-50 dark:bg-neutral-800 px-2.5 py-1 rounded-full border border-black/[0.02] dark:border-white/[0.02]">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>

              {/* Technologies / interactive action indicators bottom */}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex gap-1.5 overflow-hidden">
                  {service.tech.slice(0, 2).map((t, i) => (
                    <span key={i} className="text-[9px] font-mono font-semibold text-slate-450 dark:text-slate-500">
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="p-1 rounded-lg bg-slate-50 dark:bg-neutral-800 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-450 group-hover:bg-blue-500/5 duration-200">
                  <Plus className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Detail Overlay Dialog for premium feel */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="w-full max-w-lg p-8 rounded-3xl bg-white dark:bg-neutral-950 border border-black/10 dark:border-white/10 shadow-2xl relative overflow-hidden space-y-6"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Visual side gradient bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500" />
                
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Services Suite</span>
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 rounded-full hover:bg-slate-150 dark:hover:bg-neutral-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    aria-label="Close dialog"
                  >
                    <Plus className="w-5 h-5 rotate-45" />
                  </button>
                </div>

                <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed font-normal">
                  {selectedService.description}
                </p>

                {/* Extended Tech stack specs details */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Integrated Core Stacks</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.tech.map((t) => (
                      <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-neutral-900 border border-black/[0.04] dark:border-white/[0.04] text-slate-700 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                    <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-blue-500/5 dark:bg-blue-400/5 text-blue-600 dark:text-blue-400 border border-blue-500/10">Type-Safe</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex gap-4">
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedService(null);
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        const offset = 80;
                        const targetPosition = contactSection.getBoundingClientRect().top + window.scrollY - offset;
                        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                      }
                    }}
                    className="flex-1 py-3 text-center rounded-2xl text-xs font-semibold bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md active:scale-95 transition-all"
                  >
                    Discuss This Service
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-3 rounded-2xl text-xs font-semibold border border-black/5 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:text-slate-450 dark:hover:text-white transition-all"
                  >
                    Dismiss
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
