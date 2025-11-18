import { useState } from 'react'
import Hero from './components/Hero'
import Blog from './components/Blog'
import StatsBar from './components/StatsBar'

function App() {
  const [stats, setStats] = useState({ active: 0, total: 0 })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-emerald-50">
      <StatsBar onUpdate={(s) => setStats(s)} />
      <Hero active={stats.active} total={stats.total} />

      <main>
        <Blog />
      </main>

      <footer className="mt-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-emerald-100/80">
          <p>© {new Date().getFullYear()} Radio Africa. Celebrating culture, rhythm, and stories.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
