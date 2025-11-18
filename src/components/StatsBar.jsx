import { useEffect, useRef, useState } from 'react'
import { Users } from 'lucide-react'

export default function StatsBar({ onUpdate }) {
  const [active, setActive] = useState(0)
  const [total, setTotal] = useState(0)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const vidRef = useRef(localStorage.getItem('visitor_id') || crypto.randomUUID())

  useEffect(() => {
    localStorage.setItem('visitor_id', vidRef.current)

    const ping = async () => {
      try {
        await fetch(`${baseUrl}/api/heartbeat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ visitor_id: vidRef.current }),
        })
      } catch {}
    }

    const fetchStats = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/stats`)
        const data = await res.json()
        setActive(data.active || 0)
        setTotal(data.total || 0)
        onUpdate?.(data)
      } catch {}
    }

    // initial
    ping()
    fetchStats()

    // intervals
    const pingId = setInterval(ping, 20000)
    const statId = setInterval(fetchStats, 20000)

    return () => {
      clearInterval(pingId)
      clearInterval(statId)
    }
  }, [])

  return (
    <div className="sticky top-0 z-40 bg-slate-900/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-emerald-100">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span className="text-sm">Active listeners: <span className="text-white font-semibold">{active}</span></span>
        </div>
        <div className="text-sm">Total visits: <span className="text-white font-semibold">{total}</span></div>
      </div>
    </div>
  )
}
