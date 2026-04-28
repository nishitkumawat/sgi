import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CATEGORIES, PRODUCTS } from '../data/products'
import ProductCard from '../components/ProductCard'
import SEO from '../components/SEO'
import { SEO_CONFIG, getBreadcrumbSchema } from '../data/seoConfig'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryId = searchParams.get('category') || 'all'
  const [search, setSearch] = useState('')
  const seo = SEO_CONFIG.pages.products

  useEffect(() => {
     window.scrollTo(0, 0)
  }, [])

  const filtered = PRODUCTS.filter(p => {
    if (p.category.includes('accessories')) return false
    const matchesCat = categoryId === 'all' || p.category === categoryId
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchesCat && matchesSearch
  })

  const machines = filtered.filter(p => p.category === 'roll-forming')
  const motors = filtered.filter(p => p.category === 'shutter-motors')

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        schemas={[
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Products', url: '/products' },
          ]),
        ]}
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Our Product Catalog</h1>
          <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
            From high-speed roll forming lines to precision shutter motors, explore our full range of industrial manufacturing solutions.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between mb-12 py-8 border-y border-slate-100">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSearchParams({})}
              className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                categoryId === 'all' 
                ? 'bg-blue-700 text-white shadow-lg shadow-blue-200 hover:scale-105' 
                : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'
              }`}
            >
              All Machines
            </button>
            {CATEGORIES.filter(cat => !cat.id.includes('accessories')).map(cat => (
              <button
                key={cat.id}
                onClick={() => setSearchParams({ category: cat.id })}
                className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  categoryId === cat.id 
                  ? 'bg-blue-700 text-white shadow-lg shadow-blue-200 hover:scale-105' 
                  : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96 group">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white text-sm font-medium transition-all"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="space-y-16">
            {machines.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-xl shrink-0">⚙️</div>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Roll Forming Machines</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                  {machines.map(p => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            )}
            
            {motors.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-xl shrink-0">⚡</div>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Shutter Motors</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                  {motors.map(p => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="py-32 text-center rounded-sm bg-slate-50 border border-dashed border-slate-200">
            <p className="text-3xl mb-4">🔍</p>
            <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">No products found</h3>
            <p className="text-slate-500 font-medium italic">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
