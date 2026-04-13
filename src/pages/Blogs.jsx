import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BLOGS } from '../data/blogs'

export default function Blogs() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="bg-white min-h-screen pt-28 pb-24">
      {/* Page Header */}
      <div className="bg-[#f8fafc] border-b border-slate-200 py-16 px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold tracking-wider uppercase mb-5">
            <span className="w-2 h-2 bg-blue-600 block" />
            Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tight mb-4">
            Industry Insights
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl border-l-2 border-slate-300 pl-4">
            Expert articles on roll forming, industrial machinery, and manufacturing best practices from the Shree Gayatri Industries technical team.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white border border-slate-200 hover:border-blue-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden"
            >
              {/* Thumbnail */}
              <Link to={`/blog/${blog.slug}`} className="block overflow-hidden h-52 bg-slate-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </Link>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest bg-blue-50 border border-blue-100 px-2.5 py-1">
                    {blog.readTime}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">{blog.date}</span>
                </div>

                <Link to={`/blog/${blog.slug}`}>
                  <h2 className="text-slate-900 font-extrabold text-[16px] leading-snug group-hover:text-blue-700 transition-colors mb-3 line-clamp-2">
                    {blog.title}
                  </h2>
                </Link>

                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    {blog.author}
                  </span>
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="text-xs font-black text-blue-700 uppercase tracking-widest hover:text-slate-900 transition-colors group-hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-slate-900 p-12 text-center relative overflow-hidden border-b-4 border-blue-700">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
              Have a technical question?
            </h3>
            <p className="text-slate-400 mb-8 font-medium">
              Contact our engineering team directly for expert advice on your manufacturing requirements.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 rounded-full bg-blue-700 text-white font-black uppercase tracking-widest text-sm hover:scale-105 hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
