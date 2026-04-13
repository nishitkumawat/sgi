import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProductsByCategory } from '../data/products'
import ProductCard from '../components/ProductCard'
import HeroSlideshow from '../components/HeroSlideshow'
import IndiaNetworkMap from '../components/IndiaNetworkMap'
import logo from '../assets/SGI logo.png'

export default function Home() {
  const topProducts = getProductsByCategory('roll-forming').slice(0, 4)
  const motors = getProductsByCategory('shutter-motors').slice(0, 4)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white min-h-screen">
      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <HeroSlideshow />

      {/* ─── MARQUEE ────────────────────────────────────────────── */}
      <div className="bg-white border-y border-slate-100 py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center mx-10 text-slate-400 font-black uppercase tracking-widest text-xs">
              <span className="text-slate-800">Roll Forming Machines</span>
              <span className="mx-10 w-2 h-2 rounded-full bg-blue-500/20" />
              <span className="text-slate-800">Shutter Motors</span>
              <span className="mx-10 w-2 h-2 rounded-full bg-blue-500/20" />
              <span className="text-slate-800">Electrical Channels</span>
              <span className="mx-10 w-2 h-2 rounded-full bg-blue-500/20" />
              <span className="text-slate-800">Special Purpose Machines</span>
              <span className="mx-10 w-2 h-2 rounded-full bg-blue-500/20" />
            </div>
          ))}
        </div>
      </div>


      {/* ─── CATALOG PREVIEW ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f8fafc] border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Our Machines</h2>
              <p className="text-3xl md:text-5xl font-black text-slate-900">High-Precision Catalog</p>
            </div>
            <Link to="/products" className="inline-flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-widest group hover:text-blue-600 transition-colors">
              Explore Full Catalog
              <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                →
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>

          <div className="mt-28">
            <div className="flex items-center gap-6 mb-12">
               <h3 className="text-2xl font-black text-slate-900 shrink-0">Shutter Motors</h3>
               <div className="h-px bg-slate-200 w-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {motors.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ─── NATIONAL FOOTPRINT ───────────────────────────────────── */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Nationwide Presence</h2>
                <p className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Delivering Engineering Excellence Across India</p>
                <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed mb-10">
                   <p>From the industrial hubs of Gujarat to the growing infrastructure projects in the North and South, our machines power production lines in 20+ states.</p>
                   <p>Each blue point represents a thriving partnership where Shree Gayatri Industries has commissioned high-performance roll forming lines and automated motor systems.</p>
                </div>
                <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
                   <div>
                      <p className="text-2xl font-black text-slate-900 leading-none">25+</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Delivery Hubs</p>
                   </div>
                   <div>
                      <p className="text-2xl font-black text-slate-900 leading-none">Pan-India</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Surface Logistics</p>
                   </div>
                </div>
             </div>
             <div className="relative min-w-0 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-blue-50/20 rounded-full blur-3xl -z-10" />
                <IndiaNetworkMap />
             </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Core Strengths</h2>
            <p className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Advanced Engineering Solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏗️', title: 'Robust Fabrication', desc: 'Heavy-duty machine structures designed using high-grade structural steel for vibration-free operations.' },
              { icon: '⚙️', title: 'PLC Automation', desc: 'Advanced control systems with high-speed MCU and user-friendly touch interface (HMI).' },
              { icon: '📐', title: 'Precision Components', desc: 'Rollers and toolings are CNC machined and heat-treated for long life and profile consistency.' },
            ].map((f, i) => (
              <div key={i} className="bg-white p-10 border-l-4 border-slate-200 hover:border-blue-700 transition-all duration-200 group shadow-sm hover:shadow-md">
                <div className="w-16 h-16 bg-slate-100 border border-slate-200 flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 shadow-sm rounded-sm">
                  {f.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ─── ABOUT / VISION ───────────────────────────────────────── */}
      <section className="py-32 px-6 bg-[#f0f4f8] border-t border-slate-200 overflow-hidden relative">
        {/* Removed blue blurred circle, added a subtle industrial grid pattern instead */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10 bg-white p-16 shadow-xl border-t-4 border-blue-700">
          <img src={logo} alt="Shree Gayatri Industries Logo" className="w-20 mx-auto mb-10 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight uppercase">
            Engineering Excellence
          </h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed font-medium">
            Based in Ahmedabad, Shree Gayatri Industries is a leader in the design and manufacture of high-productivity roll forming lines. We build heavy-duty machines and form partnerships based on industrial performance and trust.
          </p>
          <Link to="/about" className="inline-flex items-center gap-4 px-10 py-4 font-black bg-blue-700 text-white hover:bg-slate-900 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl rounded-full text-sm uppercase tracking-widest">
            Our Legacy Story
          </Link>
        </div>
      </section>

      {/* ─── CALL TO ACTION ──────────────────────────────────────── */}
      <section className="mx-6 mb-12 mt-12">
        <div className="max-w-7xl mx-auto py-24 px-8 bg-slate-900 relative overflow-hidden text-center shadow-2xl border-b-8 border-blue-700">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">Need a custom machine?</h2>
            <p className="text-slate-300 mb-10 text-lg font-medium">Share your profile drawings with our technical team today and get a specialized engineering consultation.</p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link to="/contact" className="px-10 py-4 font-extrabold bg-blue-700 text-white hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl rounded-full text-sm uppercase tracking-widest">
                Start Consultation
              </Link>
              <a href="tel:+918154935437" className="px-10 py-4 font-extrabold border-2 border-slate-600 text-white hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl rounded-full text-sm uppercase tracking-widest flex items-center gap-3">
                📞 Call Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
