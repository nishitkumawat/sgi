import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { CATEGORY_CONTENT } from '../data/categoryContent'
import ProductCard from '../components/ProductCard'
import IndustrialSection from '../components/category/IndustrialSection'
import ApplicationsGrid from '../components/category/ApplicationsGrid'
import SubsectionGrid from '../components/category/SubsectionGrid'
import FacilityShowcase from '../components/category/FacilityShowcase'
import TechnicalFAQs from '../components/category/TechnicalFAQs'
import { Download, ShieldCheck, Trophy, Users, Zap } from 'lucide-react'
import SEO from '../components/SEO'
import { SEO_CONFIG, getBreadcrumbSchema, getFAQSchema } from '../data/seoConfig'

export default function CategoryLanding({ title, description, filterType, filterValue, image }) {
  useEffect(() => { window.scrollTo(0, 0) }, [filterValue])

  const filteredProducts = PRODUCTS.filter(p => {
    if (filterType === 'category') {
      return Array.isArray(filterValue) ? filterValue.includes(p.category) : p.category === filterValue
    }
    if (filterType === 'solar') {
      return p.badge === 'Solar Sector' || p.name.toLowerCase().includes('solar')
    }
    return true
  })

  const equipmentProducts = filteredProducts.filter(p => !p.category.includes('accessories'))
  const accessoryProducts = filteredProducts.filter(p => p.category.includes('accessories'))

  const getCategoryKey = () => {
    if (filterType === 'solar') return 'solar'
    
    const primaryFilter = Array.isArray(filterValue) ? filterValue[0] : filterValue

    if (primaryFilter === 'roll-forming') return 'roll-forming'
    if (primaryFilter === 'shutter-motors') return 'shutter-motors'
    if (primaryFilter === 'motor-accessories') return 'motor-accessories'
    return 'roll-forming'
  }

  const content = CATEGORY_CONTENT[getCategoryKey()]

  const categoryKey = getCategoryKey()
  const seo = categoryKey === 'shutter-motors' || categoryKey === 'motor-accessories' 
    ? SEO_CONFIG.pages.motors 
    : SEO_CONFIG.pages.machines
  const slug = categoryKey === 'shutter-motors' || categoryKey === 'motor-accessories' ? '/motors' : '/machines'

  return (
    <div className="bg-white min-h-screen pt-28 pb-24">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        schemas={[
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: title, url: slug },
          ]),
          ...(content?.faqs ? [getFAQSchema(content.faqs)].filter(Boolean) : []),
        ]}
      />
      {/* Category Header */}
      <div className="bg-slate-900 py-32 px-6 relative overflow-hidden group">
        {image && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000" 
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-700 text-white text-[10px] font-black tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-white block" />
            Specialized Division
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 max-w-3xl">
            {title}
          </h1>
          <p className="text-lg text-slate-400 font-medium max-w-2xl border-l-2 border-blue-700 pl-6 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Equipment Catalog Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pb-12">
        <div className="flex items-center justify-between mb-12 pb-6 border-b border-slate-100">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Equipment Catalog ({equipmentProducts.length} Items)</h2>
            <div className="hidden md:flex gap-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Filters Active</span>
            </div>
        </div>

        {equipmentProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {equipmentProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-slate-50 border border-dashed border-slate-200">
            <p className="text-4xl mb-4">📭</p>
            <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">Coming Soon</h3>
            <p className="text-slate-500 font-medium">We are currently cataloging more equipment for this division.</p>
          </div>
        )}
      </div>

      {/* Accessories Section */}
      {accessoryProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="flex items-center justify-between mb-12 pb-6 border-b border-slate-100">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Accessories ({accessoryProducts.length} Items)</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {accessoryProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* 1. Applications & Industries */}
      <IndustrialSection 
        subtitle="Industrial Applications" 
        title="Engineering Impact Across Sectors"
        gradient
      >
        <ApplicationsGrid applications={content?.applications} />
      </IndustrialSection>

      {/* 2. Product Subsections */}
      <IndustrialSection 
        subtitle="Technical Portfolio" 
        title="Specialized Rolled Sections & Range"
      >
        <SubsectionGrid subsections={content?.subsections} />
      </IndustrialSection>

      {/* 3. Manufacturing Facility & Infrastructure */}
      <IndustrialSection 
        subtitle="Infrastructure" 
        title="Our Manufacturing Facility"
        dark
      >
        <FacilityShowcase facility={content?.facility} />
      </IndustrialSection>

      {/* 4. Quality & Why Choose Us */}
      <IndustrialSection 
        subtitle="The SGI Advantage" 
        title="Why Global Leaders Choose Us"
        gradient
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
                { icon: ShieldCheck, title: 'Hardened Precision', desc: 'Rollers hardened to 58-62 HRC for 10,000+ hours of operation.' },
                { icon: Zap, title: 'Energy Efficient', desc: 'PLC-optimized drive systems reducing power consumption by 15%.' },
                { icon: Trophy, title: 'ISO Certified', desc: 'Manufacturing excellence compliant with ISO 9001:2015 standards.' },
                { icon: Users, title: 'On-Site Support', desc: 'Rapid deployment engineers for commissioning and maintenance.' },
            ].map((item, i) => (
                <div key={i} className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <item.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-black text-slate-900 tracking-tight leading-tight">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </IndustrialSection>

      {/* 5. Downloads & Resources */}
      <div className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
                <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">Resource Center</h2>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4">Technical Catalog & Specifications</h3>
                <p className="text-slate-500 font-medium">Download high-definition catalogs featuring detailed drawings, throughput speeds, and power requirements for all equipment in this division.</p>
            </div>
            <button className="flex items-center gap-4 px-10 py-5 bg-white border border-slate-200 rounded-3xl group hover:border-blue-600 transition-all shadow-sm">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Download className="w-6 h-6" />
                </div>
                <div className="text-left">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Digital PDF</p>
                    <p className="text-sm font-black text-slate-900">Download Division Catalog</p>
                </div>
            </button>
        </div>
      </div>

      {/* 6. FAQs */}
      <IndustrialSection 
        subtitle="Common Inquiries" 
        title="Technical FAQs"
      >
        <TechnicalFAQs faqs={content?.faqs} />
      </IndustrialSection>

      {/* Global CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-32 mb-32">
        <div className="p-12 bg-slate-900 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-200/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-blue-600/20 transition-colors" />
            <div className="text-center md:text-left relative z-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Discuss Your Engineering Requirement</h3>
                <p className="text-slate-400 font-medium">Connect with our specialized division engineers for a consultative proposal.</p>
            </div>
            <div className="flex gap-4 relative z-10">
                <Link to="/contact" className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] hover:bg-blue-500 transition-all rounded-full shadow-xl shadow-blue-500/20">
                    Connect With Us
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
