import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Zap,
  Lock,
  GitBranch,
  Smartphone,
  Cloud,
  Headset,
  Repeat,
  Search,
  Layout,
  CheckCircle
} from 'lucide-react';
import { FeatureItem } from '../types';

export const Features: React.FC = () => {
  const featuresList = [
    {
      id: 'ui-design',
      title: 'Modern UI Design',
      description: 'Interfaces matching Apple HIG conventions. We prioritize high backdrop blurs, balanced dark/light contrasts, and sleek geometric sizing.',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    },
    {
      id: 'fast-perf',
      title: 'Fast Performance',
      description: 'Optimization covering Web Vitals. Compiling assets with high-velocity bundles, tree shaking, and lean client-state managers.',
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
    },
    {
      id: 'security',
      title: 'Secure Applications',
      description: 'Implementing sanitized parameters, strict CORS headers, encrypted transport tunnels, and encrypted token architectures.',
      icon: <Lock className="w-5 h-5 text-emerald-500" />,
    },
    {
      id: 'scalable',
      title: 'Scalable Architecture',
      description: 'Clean coding patterns mapping SOLID paradigms. Separating components to withstand sudden data load spikes and high storage demands.',
      icon: <GitBranch className="w-5 h-5 text-blue-500" />,
    },
    {
      id: 'cross-plat',
      title: 'Cross Platform Development',
      description: 'Creating portable application interfaces. Native platform triggers bound across Android, iOS, tablet devices, and web viewport sizes.',
      icon: <Smartphone className="w-5 h-5 text-purple-500" />,
    },
    {
      id: 'cloud-int',
      title: 'Cloud Integration',
      description: 'Seamless cloud environments spanning GCP and lightweight deployment runtimes. Instant serverless pipelines routing data.',
      icon: <Cloud className="w-5 h-5 text-cyan-500" />,
    },
    {
      id: 'support',
      title: 'Dedicated Support',
      description: 'Committed response channels. Direct communication lines to our engineering team ensuring minor issues are addressed before they scale.',
      icon: <Headset className="w-5 h-5 text-pink-500" />,
    },
    {
      id: 'agile',
      title: 'Agile Development',
      description: 'Weekly incremental review links and rapid feedback cycles. No lengthy surprises; you test every element as it gets programmed.',
      icon: <Repeat className="w-5 h-5 text-indigo-500" />,
    },
    {
      id: 'seo-friendly',
      title: 'SEO Friendly Solutions',
      description: 'Pristine structured semantic templates, fast loading speeds, meta-tag systems, and robot routing blueprints for high search visibility.',
      icon: <Search className="w-5 h-5 text-sky-500" />,
    },
    {
      id: 'responsive',
      title: 'Responsive Design',
      description: 'Dynamic device layout fluidly adapting from ultra-wide multi-monitors down to portable portrait mobile screens in milliseconds.',
      icon: <Layout className="w-5 h-5 text-rose-500" />,
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 filter blur-[90px]" />
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
            Engineering Milestones
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Built With Precision Standards.
          </motion.h2>
          <div className="h-1 w-12 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mt-2" />
        </div>

        {/* Features list grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuresList.map((feat, idx) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-neutral-900/30 border border-black/5 dark:border-white/5 flex flex-col justify-between hover:border-blue-500/10 dark:hover:border-blue-400/10 hover:bg-white dark:hover:bg-neutral-900 duration-200 lg:col-span-1 md:col-span-1 h-[270px] group cursor-default"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm border border-black/[0.02] dark:border-white/[0.04] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {feat.icon}
                </div>
                <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {feat.description}
                </p>
              </div>

              {/* Verified pill indicator bottom */}
              <div className="flex items-center gap-1.5 mt-4 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                <CheckCircle className="w-3 h-3" />
                <span>Verified Spec</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
