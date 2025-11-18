import { Radio, Music, Globe2 } from 'lucide-react'

export default function Hero({ active, total }) {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-emerald-200 border border-white/10 px-3 py-1 rounded-full mb-4">
              <Radio className="w-4 h-4" />
              <span className="text-sm">Voice of the Continent</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Radio for African Culture
            </h1>
            <p className="mt-4 text-emerald-100/90 max-w-xl">
              Stories, music, and perspectives from across Africa. Tune in live and explore our blog for features on art, history, and modern culture.
            </p>

            <div className="mt-6 flex items-center gap-6">
              <a href="#player" className="px-5 py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition">Listen Live</a>
              <a href="#blog" className="px-5 py-3 rounded-lg bg-white/10 text-white font-semibold border border-white/10 hover:bg-white/20 transition">Read the Blog</a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-emerald-100/80">
              <div className="flex items-center gap-2"><Globe2 className="w-4 h-4"/> Active listeners: <span className="font-semibold text-white">{active}</span></div>
              <div className="flex items-center gap-2"><Music className="w-4 h-4"/> Total visits: <span className="font-semibold text-white">{total}</span></div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/30">
              <iframe
                id="player"
                className="w-full h-full"
                src="https://www.youtube.com/embed/48rz8udZBmQ?si=y4C2r8tEY0T2o5qk"
                title="Afrobeats Radio"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
