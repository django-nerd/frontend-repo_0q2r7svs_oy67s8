import { useEffect, useState } from 'react'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/blogs`)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        console.error('Failed to load blogs', e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="blog" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Latest Stories</h2>
        {loading ? (
          <p className="text-emerald-100/80">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-emerald-100/80">No posts yet. Be the first to publish!</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.id} className="bg-white/5 border border-white/10 rounded-xl p-5 text-emerald-50">
                {p.cover_image && (
                  <img src={p.cover_image} alt="cover" className="w-full h-40 object-cover rounded-lg mb-4" />
                )}
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="text-sm opacity-80 mt-1">By {p.author}</p>
                <p className="mt-3 text-sm opacity-90 line-clamp-3">{p.content}</p>
                {p.tags?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs bg-white/10 border border-white/10 px-2 py-1 rounded-full">#{t}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
