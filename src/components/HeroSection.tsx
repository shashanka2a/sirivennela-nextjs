'use client';

import { Moon, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-violet-900 to-amber-900">
      {/* Drifting moonlight particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-200/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated halo behind text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-[800px] h-[800px] bg-gradient-to-r from-amber-500/20 via-violet-500/20 to-indigo-500/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <Moon className="w-16 h-16 text-amber-200 drop-shadow-[0_0_25px_rgba(251,191,36,0.6)]" />
            <Music className="w-7 h-7 text-amber-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <span className="text-5xl text-amber-100 drop-shadow-[0_0_25px_rgba(251,191,36,0.4)] font-serif italic">
            Sirivennela
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl text-amber-50 mb-6 drop-shadow-[0_0_30px_rgba(251,191,36,0.3)] font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where Words Glow & Tunes Breathe
        </motion.h1>

        {/* Subline */}
        <motion.p
          className="text-xl md:text-2xl text-amber-100/80 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From Swagatham Krishna to Samajavaragamana — Telugu melodies in moonlight.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-amber-100 text-indigo-950 hover:bg-amber-200 px-8 py-6 text-lg rounded-full shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] transition-all duration-300"
          >
            Listen on Instagram
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}
