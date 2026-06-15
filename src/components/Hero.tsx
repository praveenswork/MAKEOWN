import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  Sparkles,
  CheckCircle,
  ShieldCheck,
  Users,
  Milestone,
} from "lucide-react";

export const Hero: React.FC = () => {
  const handleScrollToSegment = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const statistics = [
    {
      value: "12+",
      label: "Digital Core Modalities",
      icon: <Milestone className="w-4 h-4 text-emerald-500" />,
    },
    {
      value: "99%",
      label: "Client Satisfaction Index",
      icon: <CheckCircle className="w-4 h-4 text-blue-500" />,
    },
    {
      value: "24/7",
      label: "Premium Level Support",
      icon: <ShieldCheck className="w-4 h-4 text-indigo-500" />,
    },
    {
      value: "50+",
      label: "Delivered Deployments",
      icon: <Users className="w-4 h-4 text-violet-500" />,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden transition-colors duration-300"
    >
      {/* Background Decorative Mesh Blobs - Extremely sleek iOS glass backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full mesh-gradient-1 filter blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full mesh-gradient-2 filter blur-[100px]" />
        <div className="absolute top-1/2 left-2/3 w-[300px] h-[300px] rounded-full mesh-gradient-3 filter blur-[70px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero text information column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/10 dark:border-blue-400/10 bg-blue-500/5 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md"
            >
              <Sparkles
                className="w-3.5 h-3.5 animate-spin"
                style={{ animationDuration: "6s" }}
              />
              <span>Next Generation Digital Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Exquisite Engineering.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071e3] to-[#30b0c7] dark:from-[#2997ff] dark:to-[#00d2ff]">
                Crafted For Growth.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              At <strong>MakeOwn Technologies</strong>, we design and
              orchestrate world-class digital applications. By blending Apple’s
              design philosophy with ultra-scalable architectures, we turn bold
              concepts into immersive operational realities.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                onClick={(e) => handleScrollToSegment(e, "contact")}
                className="px-6 py-3 rounded-full text-xs font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white dark:bg-white dark:hover:bg-slate-100 dark:text-black transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group shadow-sm"
              >
                Launch Your Project
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#services"
                onClick={(e) => handleScrollToSegment(e, "services")}
                className="px-6 py-3 rounded-full text-xs font-semibold bg-transparent text-[#1d1d1f] dark:text-[#f5f5f7] border border-black/10 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all duration-200 flex items-center justify-center"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Email Anchor Highlight - Specific request item */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex justify-center lg:justify-start"
            >
              <a
                href="mailto:makeown.support@gmail.com"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-slate-50 dark:bg-neutral-900/50 backdrop-blur-lg border border-black/5 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-blue-400/40 hover:scale-[1.02] transition-all group cursor-pointer"
                id="hero-email-anchor"
              >
                <div className="w-7 h-7 rounded-full bg-blue-500/10 dark:bg-blue-400/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Mail className="w-3.5 h-3.5 group-hover:animate-bounce" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-extrabold font-sans">
                    Direct Corporate Line
                  </p>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono">
                    makeown.support@gmail.com
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Interactive Floating glass cards Column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Visual Centerpiece resembling Apple design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[400px] mx-auto rounded-3xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl glass-panel glass-panel-light dark:glass-panel-dark"
            >
              {/* Internal subtle light overlay */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500">
                    System Dashboard
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    MakeOwn Engine
                  </h3>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Dynamic abstract grid representation of capabilities */}
              <div className="my-8 flex-1 flex flex-col justify-center space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-slate-450 dark:text-slate-300">
                    <span>Performance Matrix</span>
                    <span className="text-blue-800 dark:text-blue-300">
                      99.9% Efficiency
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "99.9%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-slate-450 dark:text-slate-300">
                    <span>Deployment Integrity</span>
                    <span className="text-emerald-500">Active SecOps</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-slate-450 dark:text-slate-300">
                    <span>Clean Architecture Coverage</span>
                    <span className="text-violet-400 dark:text-violet-600">
                      Perfect Grade
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 1.6, delay: 0.9 }}
                      className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 dark:from-violet-500 dark:to-fuchsia-400"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200/50 dark:border-white/5 pt-4 flex items-center justify-between text-xs font-mono text-slate-800">
                <span>Core: TSC + VITE + REACT</span>
                <span className="text-slate-600 dark:text-slate-300 font-semibold">
                  ONLINE
                </span>
              </div>
            </motion.div>

            {/* Circular highlight overlays */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-blue-500/10 blur-md pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-indigo-500/10 blur-lg pointer-events-none" />
          </div>
        </div>

        {/* Statistics block */}
        <div className="mt-20 pt-10 border-t border-slate-200/50 dark:border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white/20 dark:bg-neutral-900/20 shadow-sm border border-black/5 dark:border-white/5 flex flex-col justify-between h-32 hover:border-blue-500/20 hover:bg-white/30 dark:hover:bg-neutral-900/30 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-neutral-800/80 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-3xl font-display font-extrabold text-slate-900 dark:text-white leading-none">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
