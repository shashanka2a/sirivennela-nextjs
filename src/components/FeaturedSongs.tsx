'use client';

import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const songs = [
  {
    title: 'Swagatham Krishna',
    subtitle: '(Reimagined)',
    gradient: 'from-indigo-600 to-violet-600',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmlzaG5hJTIwaW5kaWFuJTIwY2xhc3NpY2FsJTIwbXVzaWN8ZW58MXx8fHwxNzYxMDQ1NjIxfDA&ixlib=rb-4.1.0&q=80&w=800',
    alt: 'Krishna with Indian classical music instruments'
  },
  {
    title: 'Telisene Naa Nuvve',
    subtitle: '(English Version)',
    gradient: 'from-violet-600 to-amber-600',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGluZGlhbiUyMG11c2ljJTIwbG92ZSUyMHNvbmclMjBzaW5nZXJ8ZW58MXx8fHwxNzYxMDQ1NjIxfDA&ixlib=rb-4.1.0&q=80&w=800',
    alt: 'Romantic Indian music singer'
  },
  {
    title: 'Samajavaragamana',
    subtitle: '(Cover)',
    gradient: 'from-amber-600 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtb3ZpZSUyMG11c2ljJTIwY2xhc3NpY2FsJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzYxMDQ1NjIxfDA&ixlib=rb-4.1.0&q=80&w=800',
    alt: 'Classic Indian movie music performance'
  },
];

export function FeaturedSongs() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-center mb-4 bg-gradient-to-r from-amber-200 via-violet-300 to-amber-200 bg-clip-text text-transparent font-serif leading-tight">
          Featured Songs
        </h2>
        <p className="text-xl text-amber-100/60 text-center mb-16">
          Melodies reborn in moonlight
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {songs.map((song, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="relative overflow-hidden rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                {/* Background Image */}
                <div className="h-80 relative">
                  <ImageWithFallback
                    src={song.image}
                    alt={song.alt}
                    className="w-full h-full object-cover"
                    width={800}
                    height={320}
                  />
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${song.gradient} opacity-60`} />
                  
                  {/* Blur overlay for album art effect */}
                  <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${song.gradient} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <h3 className="text-3xl text-amber-50 mb-2 drop-shadow-lg font-serif">
                      {song.title}
                    </h3>
                    <p className="text-xl text-amber-100/80 mb-6">
                      {song.subtitle}
                    </p>
                    <span className="px-6 py-2 bg-amber-100/20 backdrop-blur-md rounded-full text-amber-100 border border-amber-200/30 shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
