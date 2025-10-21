import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-5xl md:text-6xl text-amber-100 mb-6 bg-gradient-to-r from-amber-200 via-violet-300 to-amber-200 bg-clip-text text-transparent font-serif">
              Our Light
            </h2>
            <p className="text-xl text-amber-100/70 leading-relaxed">
              Sirivennela celebrates the poetry and purity of Telugu music. From classical 
              devotionals to modern cinema, from pure Telugu lyrics to Telugu-English fusions — 
              we reimagine melodies that defined generations under the moonlight.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-violet-600 rounded-3xl blur-2xl opacity-20" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nZXIlMjBpbmRpYW4lMjBtdXNpY2lhbCUyMGNsYXNzaWNhbCUyMGluc3RydW1lbnR8ZW58MXx8fHwxNzYxMDQ1NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Indian classical music singer with traditional instrument"
                className="w-full h-[500px] object-cover"
                width={1080}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
