import { Moon, Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-slate-950 border-t border-amber-900/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="relative">
            <Moon className="w-10 h-10 text-amber-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
            <Music className="w-5 h-5 text-amber-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <span className="text-3xl text-amber-100 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] font-serif italic">
            Sirivennela
          </span>
        </div>

        {/* Tagline */}
        <p className="text-xl text-amber-200/60 mb-8">
          The light of Telugu music, reimagined
        </p>

        {/* Copyright */}
        <p className="text-amber-300/40">
          © 2025 Sirivennela. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
