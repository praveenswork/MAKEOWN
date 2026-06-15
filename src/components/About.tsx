import React from 'react';
import { motion } from 'motion/react';
import { Compass, Lightbulb, Shield, Eye, Flame, Award, Heart, CheckCircle2 } from 'lucide-react';
import { TeamMember } from '../types';

export const About: React.FC = () => {
  const founders: TeamMember[] = [
    {
      name: 'Simeon',
      role: 'Co-Founder & Head of Web Systems',
      bio: 'Simeon specializes in designing high-speed, enterprise-grade architecture. He turns complex business specifications into robust, light-weight backends.',
      phone: '+91 95002 10870',
      email: 'simeoncse52@gmail.com',
      avatarSeed: 'Simeon',
    },
    {
      name: 'Vengadesh',
      role: 'Co-Founder & App Architect',
      bio: 'Vengadesh leads mobile product strategy. He maintains deep knowledge in Flutter and custom responsive layouts, aiming for pristine animations across iOS & Android.',
      phone: '+91 87547 01732',
      email: 'm.vengadesh2019@gmail.com',
      avatarSeed: 'Vengadesh',
    },
    {
      name: 'Subramani',
      role: 'Co-Founder & UI/UX Specialist',
      bio: 'Subramani coordinates UI development pipelines and user experience strategy. He has a refined eye for typography, interaction, and responsive grids.',
      phone: '+91 90255 68008',
      email: 'subramanidev2003@gmail.com',
      avatarSeed: 'Subramani',
    },
    {
      name: 'Perumal',
      role: 'Co-Founder & Head of Support',
      bio: 'Perumal maintains support channels and client relations infrastructures. He coordinates post-deployment workflows, ensuring continuous operational uptime.',
      phone: '+91 63815 62597',
      email: 'p6381562@gmail.com',
      avatarSeed: 'Perumal',
    },
  ];

  const coreValues = [
    { title: 'Innovation', desc: 'Pioneering custom technology patterns instead of standard cookie-cutter layouts.', icon: <Lightbulb className="w-5 h-5 text-amber-500" /> },
    { title: 'Quality', desc: 'Obsessing over milliseconds, pixel ratios, and smooth tactile micro-interactions.', icon: <Award className="w-5 h-5 text-blue-500" /> },
    { title: 'Trust', desc: 'Nurturing lifelong product partnerships with pristine security and strict transparency.', icon: <Shield className="w-5 h-5 text-emerald-500" /> },
    { title: 'Transparency', desc: 'Fostering precise, clear, and open communication lanes throughout the workflow.', icon: <Compass className="w-5 h-5 text-indigo-500" /> },
    { title: 'Customer Success', desc: 'Directly correlating our engineering goals with your real-world business gains.', icon: <Heart className="w-5 h-5 text-pink-500" /> },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle background glow */}
        <div className="absolute -top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/5 filter blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full space-y-24">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400"
          >
            Our Legacy & Philosophy
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Engineering What is Next.
          </motion.h2>
          <div className="h-1 w-12 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mt-2" />
        </div>

        {/* Story, Mission, Vision Bento Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Story - Large panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-12 p-8 rounded-3xl bg-slate-50 dark:bg-neutral-900/40 border border-black/5 dark:border-white/5 shadow-sm space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-450">
                <Flame className="w-5 h-5" />
              </span>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Our Origin Story</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              <strong>MakeOwn Technologies</strong> was formed under a shared obsession: to abolish the friction between complex technology systems and elegant user experiences. As a forward-thinking software development house, we focus on planning, engineering, and launching state-of-the-art enterprise websites, bespoke SaaS applications, POS software, and performance-tuned mobile tools. We prioritize structural design, robust codebases, and seamless performance milestones above all.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 p-8 rounded-3xl bg-slate-50 dark:bg-neutral-900/40 border border-black/5 dark:border-white/5 shadow-sm space-y-4 relative overflow-hidden"
          >
            <div className="absolute right-4 bottom-4 opacity-5 text-slate-950 dark:text-white pointer-events-none">
              <CheckCircle2 className="w-32 h-32" />
            </div>
            
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Our Mission</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              To build robust, pixel-perfect digital ecosystems that alleviate technical strain, optimize work efficiency, and directly accelerate operational growth for ambitious startups and global enterprises.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 p-8 rounded-3xl bg-slate-50 dark:bg-neutral-900/40 border border-black/5 dark:border-white/5 shadow-sm space-y-4 relative overflow-hidden"
          >
            <div className="absolute right-4 bottom-4 opacity-5 text-slate-950 dark:text-white pointer-events-none">
              <Eye className="w-32 h-32" />
            </div>

            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Eye className="w-5 h-5" />
              </span>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Our Vision</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              To be recognized as the premier global engineering firm for businesses that refuse to settle. We envision a digital landscape where every device hosts software that is fast, resilient, and masterfully tailored.
            </p>
          </motion.div>
        </div>

        {/* The Founders (Team Cards) */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">The Founders</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">The engineers orchestrating MakeOwn Technologies’ core frameworks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {founders.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-neutral-900 shadow-sm border border-black/5 dark:border-white/5 hover:border-blue-500/20 dark:hover:border-blue-400/20 hover:shadow-xl hover:shadow-blue-500/5 duration-300 relative overflow-hidden"
              >
                {/* Visual Avatar representative card */}
                <div className="space-y-4">
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-750 dark:from-neutral-850 dark:to-neutral-700 flex items-center justify-center text-white font-display font-bold text-2xl shadow-md border border-white/5 cursor-default pointer-events-none">
                    {member.name.charAt(0)}
                    {/* Tiny neon dot */}
                    <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#30b0c7] border-2 border-white dark:border-neutral-900" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-display font-extrabold text-lg text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {member.name}
                    </h4>
                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest">
                      {member.role}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>

                {/* Secure fast details */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 space-y-2 text-xs font-mono">
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 text-slate-500 dark:text-slate-400 transition-colors"
                  >
                    <span className="font-sans font-semibold text-slate-450 dark:text-slate-500">P:</span> {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 text-slate-500 dark:text-slate-400 transition-colors truncate"
                  >
                    <span className="font-sans font-semibold text-slate-450 dark:text-slate-500">E:</span> {member.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-neutral-900/20 border border-black/5 dark:border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            
            <div className="lg:col-span-2 space-y-4 pr-4">
              <h4 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white leading-tight">
                Unified Under Strict Core Standards.
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                We believe exceptional technology products are not built by accident. Every line of code, grid margin, and system query must be guided by clean principles.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-5">
              {coreValues.map((val) => (
                <div key={val.title} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-black/[0.03] dark:border-white/[0.03] shadow-sm hover:border-blue-500/10 dark:hover:border-blue-400/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-neutral-800/80 flex items-center justify-center shrink-0 shadow-inner">
                    {val.icon}
                  </div>
                  <div>
                    <h5 className="font-display font-extrabold text-sm text-slate-900 dark:text-white">{val.title}</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-medium leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
