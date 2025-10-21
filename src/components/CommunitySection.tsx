'use client';

import { Instagram, Youtube, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';

const platforms = [
  {
    name: 'Instagram',
    icon: Instagram,
    gradient: 'from-violet-500 to-amber-500',
    text: 'Follow on Instagram',
    url: 'https://instagram.com/sirivennela.music',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    gradient: 'from-amber-500 to-violet-500',
    text: 'Watch on YouTube',
    url: 'https://youtube.com/@sirivennela.music',
  },
  {
    name: 'Spotify',
    icon: Music2,
    gradient: 'from-violet-500 to-amber-500',
    text: 'Stream on Spotify',
    url: 'https://open.spotify.com/artist/sirivennela.music',
  },
];

export function CommunitySection() {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-center mb-4 bg-gradient-to-r from-amber-200 via-violet-300 to-amber-200 bg-clip-text text-transparent font-serif">
          Join Our Community
        </h2>
        <p className="text-xl text-amber-100/60 text-center mb-16">
          Follow the light of Telugu music
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                  <Card className="relative overflow-hidden rounded-3xl border-0 bg-slate-900/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                    <div className="p-10 text-center">
                      {/* Icon with gradient glow */}
                      <div className="relative inline-block mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:shadow-amber-500/50`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Text */}
                      <h3 className="text-2xl text-amber-100 mb-2">
                        {platform.text}
                      </h3>
                      <p className="text-amber-200/50">
                        @sirivennela.music
                      </p>
                    </div>

                    {/* Hover gradient border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl`} />
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
