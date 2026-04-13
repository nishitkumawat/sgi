import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductBySlug, PRODUCTS, PLACEHOLDER } from '../data/products'

// Modal Component
function InquiryModal({ product, isOpen, onClose }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-lg rounded-sm shadow-2xl p-8 md:p-10 animate-fadeup border-t-4 border-blue-700">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 transition-colors">
          <svg className="w-5 h-5 text-slate-400 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-black text-slate-900 mb-2">Request Information</h2>
        <p className="text-slate-500 font-medium mb-8">Send an inquiry for <span className="text-blue-600 underline underline-offset-4 font-bold">{product.name}</span></p>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Inquiry Sent Successfully!'); onClose(); }}>
          <div>
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Your Full Name</label>
            <input required type="text" className="w-full px-5 py-4 rounded-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white text-sm font-medium transition-all" placeholder="Enter name..." />
          </div>
          <div>
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Mobile Number</label>
            <input required type="tel" className="w-full px-5 py-4 rounded-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white text-sm font-medium transition-all" placeholder="+91..." />
          </div>
          <div>
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Requirements / Message</label>
            <textarea className="w-full px-5 py-4 rounded-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white text-sm font-medium transition-all h-32" placeholder="Describe your requirement..."></textarea>
          </div>
          <button type="submit" className="w-full py-4.5 rounded-full bg-blue-700 text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [activeTab, setActiveTab] = useState('specs')
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)
  const [imgErr, setImgErr] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!product) return <div className="py-40 text-center font-black text-2xl text-slate-900">Product not found</div>

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <InquiryModal product={product} isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <span>/</span>
          <span className="text-slate-900">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Gallery area */}
          <div className="bg-slate-50 border border-slate-200 rounded-sm flex items-center justify-center min-h-[500px] shadow-sm overflow-hidden group/detail">
            <img 
               src={imgErr ? PLACEHOLDER : `https://5.imimg.com/data5/SELLER/Default/2021/3/GO/ZH/MG/10097291/${product.id}-500x500.jpg`} 
               alt={product.name}
               onError={() => setImgErr(true)}
               className="w-full h-full object-cover group-hover/detail:scale-105 transition-transform duration-1000" 
            />
             {product.badge && (
              <span className="absolute top-8 left-8 bg-blue-700 text-white text-[11px] font-black px-4 py-1.5 rounded-sm uppercase tracking-widest shadow-sm">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details area */}
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
              {product.name}
            </h1>
            <p className="text-lg text-blue-600 font-bold mb-8 uppercase tracking-widest text-[13px]">
              {product.categoryId === 'shutter-motors' ? '⚙️ Shutter Motor' : '🏭 Roll Forming Line'}
            </p>
            
            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button 
                onClick={() => setIsInquiryOpen(true)}
                className="px-10 py-4.5 rounded-full bg-blue-700 text-white font-black uppercase tracking-widest text-sm hover:scale-105 hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Send Inquiry
              </button>
              <a 
                href={`https://wa.me/918154935437?text=Hello,%20I%20am%20interested%20in%20your%20${encodeURIComponent(product.name)}`}
                target="_blank" rel="noreferrer"
                className="px-10 py-4.5 rounded-full bg-green-600 text-white font-black uppercase tracking-widest text-sm hover:scale-105 hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2"
              >
                WhatsApp Inquiry
              </a>
            </div>

            {/* Tabs */}
            <div className="border-b border-slate-100 flex gap-10 mb-8">
              {['specs', 'features'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${
                    activeTab === tab ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab === 'specs' ? 'Specifications' : 'Key Features'}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full" />}
                </button>
              ))}
            </div>

            <div className="animate-fadeup">
              {activeTab === 'specs' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specs?.map((s, i) => (
                    <div key={i} className="flex justify-between bg-slate-50/50 p-4 rounded-sm border border-slate-200">
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">{s.label}</span>
                      <span className="text-sm font-bold text-slate-900">{s.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {product.features?.map((f, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-sm border border-slate-200 bg-white shadow-sm">
                      <div className="w-8 h-8 bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 text-xs">✓</div>
                      <span className="text-sm font-bold text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Quick Info */}
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
               <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2">Lead Time</p>
                  <p className="text-sm font-bold text-slate-900">{product.deliveryDays || 'As per order'}</p>
               </div>
               <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2">Min. Order</p>
                  <p className="text-sm font-bold text-slate-900">{product.minOrder || '1 Unit'}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
