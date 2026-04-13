import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getBlogBySlug, BLOGS } from '../data/blogs'

export default function BlogDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const blog = getBlogBySlug(slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-24 text-center px-6">
        <p className="text-8xl mb-6">📰</p>
        <h1 className="text-4xl font-extrabold text-slate-800 mb-3">Blog Not Found</h1>
        <p className="text-slate-500 mb-8">This article doesn't exist or has been removed.</p>
        <Link to="/blog" className="px-8 py-3.5 rounded-full font-bold bg-blue-700 text-white hover:scale-105 transition-all shadow-md">
          Back to Blog
        </Link>
      </div>
    )
  }

  // Other blogs for sidebar (excluding current)
  const related = BLOGS.filter(b => b.id !== blog.id).slice(0, 2)

  return (
    <div className="bg-white min-h-screen pt-28 pb-24">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-slate-900">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-4xl mx-auto px-6 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-700 text-white text-xs font-bold tracking-wider uppercase mb-4 w-fit">
            <span className="w-2 h-2 bg-white block" />
            {blog.readTime}
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight mb-3">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-slate-300 text-sm font-medium">
            <span>✍ {blog.author}</span>
            <span className="w-1 h-1 rounded-full bg-slate-400" />
            <span>📅 {blog.date}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14">
        {/* Article Content */}
        <article>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest hover:text-blue-700 transition-colors mb-10"
          >
            ← Back to All Articles
          </Link>

          <div className="prose prose-slate max-w-none">
            {blog.content.split('\n').map((para, i) => {
              const trimmed = para.trim()
              if (!trimmed) return null
              return (
                <p key={i} className="text-slate-600 text-base leading-8 mb-6 font-medium">
                  {trimmed}
                </p>
              )
            })}
          </div>

          {/* Share / CTA */}
          <div className="mt-14 p-8 bg-[#f8fafc] border-l-4 border-blue-700">
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">
              Interested in our machines?
            </h3>
            <p className="text-slate-500 text-sm mb-5 font-medium">
              Contact the Shree Gayatri Industries engineering team for a consultation or custom machine quote.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-blue-700 text-white font-black uppercase tracking-widest text-sm hover:scale-105 hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Send Inquiry
              </Link>
              <a
                href="https://wa.me/918154935437"
                target="_blank" rel="noreferrer"
                className="px-8 py-3 rounded-full bg-green-600 text-white font-black uppercase tracking-widest text-sm hover:scale-105 hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside>
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-3">
            More Articles
          </h3>
          <div className="flex flex-col gap-6">
            {related.map(b => (
              <Link
                key={b.id}
                to={`/blog/${b.slug}`}
                className="group flex gap-4 p-4 border border-slate-200 hover:border-blue-700 transition-all hover:shadow-md"
              >
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-20 h-20 object-cover shrink-0 group-hover:scale-105 transition-transform duration-500"
                />
                <div>
                  <p className="text-[10px] font-black text-blue-700 uppercase tracking-widest mb-1">{b.readTime}</p>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors leading-snug line-clamp-3">
                    {b.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick contact card */}
          <div className="mt-10 bg-slate-900 p-6 text-white">
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-3">Get in touch</p>
            <p className="text-sm font-bold mb-1">📞 +91 81549 35437</p>
            <p className="text-sm font-bold mb-5">✉️ info@shreegayatriindustries.co.in</p>
            <a
              href="tel:+918154935437"
              className="block text-center px-6 py-3 rounded-full bg-blue-700 text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Call Now
            </a>
          </div>
        </aside>
      </div>
    </div>
  )
}
