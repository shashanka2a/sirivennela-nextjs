import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-5xl md:text-6xl text-amber-100 mb-6 bg-gradient-to-r from-amber-200 via-violet-300 to-amber-200 bg-clip-text text-transparent font-serif leading-tight">
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
                src="/moonlight-mic-illustration.svg"
                alt="Custom moonlight illustration with microphone - representing Sirivennela's music under the moonlight"
                className="w-full h-[500px] object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
