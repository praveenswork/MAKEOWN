import React from "react";
import { Instagram, Linkedin, Cpu } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/50 dark:border-white/5 pt-16 pb-24 md:pb-28 relative overflow-hidden transition-colors duration-300 bg-white/40 dark:bg-black/40">
      {/* Huge Slanted Blended Text Background */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none z-0 flex items-center justify-center overflow-hidden">
        <span className="text-[14vw] sm:text-[15vw] font-display font-black tracking-tighter uppercase translate-y-[35%] select-none pointer-events-none whitespace-nowrap transform -rotate-[4deg] opacity-[0.4] dark:opacity-[0.2] bg-clip-text text-transparent bg-gradient-to-r from-[#0071e3] via-[#30b0c7] to-[#bf5af2]">
          MAKE OWN
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 w-full">
        {/* Left branding */}
        <div className="flex items-center gap-2 text-slate-900 dark:text-white pointer-events-none">
          <div className="p-1.5 rounded-lg bg-blue-600 text-white shadow-sm flex items-center justify-center">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="font-display font-extrabold text-sm tracking-tight">
            MakeOwn{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Technologies
            </span>
          </span>
        </div>

        {/* Middle Copyright */}
        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium font-sans">
          &copy; {new Date().getFullYear()} MakeOwn Technologies. All rights
          reserved.
        </p>

        {/* Right social handles - Specifically ONLY Instagram and LinkedIn as strictly requested */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-full bg-slate-50 dark:bg-neutral-900 border border-black/5 dark:border-white/5 hover:border-pink-500/40 hover:text-pink-600 dark:hover:text-pink-400 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-105 transition-all"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-full bg-slate-50 dark:bg-neutral-900 border border-black/5 dark:border-white/5 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-105 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
