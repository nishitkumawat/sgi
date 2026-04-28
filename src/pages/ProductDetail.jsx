import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductBySlug, PRODUCTS, PLACEHOLDER } from '../data/products'
import ProductCard from '../components/ProductCard'
import SEO from '../components/SEO'
import { SEO_CONFIG, getBreadcrumbSchema, getProductSchema } from '../data/seoConfig'

// Modal Component
function InquiryModal({ product, isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target);
    const payload = {
      full_name: formData.get('fullName'),
      company_name: formData.get('companyName') || "Not provided",
      email: formData.get('email') || "Not provided",
      contact_number: formData.get('contactNumber'),
      requirement: `Product Inquiry: ${product.name}\n\n${formData.get('requirement')}`,
      ezrun_api_key: import.meta.env.VITE_EZRUN_API_KEY,
    };

    try {
      const response = await fetch("https://api.ezrun.in/iot/sgi/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Inquiry Sent Successfully! We'll get back to you soon.");
        e.target.reset();
        onClose();
      } else {
        alert("Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Your Full Name</label>
              <input name="fullName" required type="text" className="w-full px-5 py-4 rounded-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white text-[13px] font-medium transition-all" placeholder="Enter name..." />
            </div>
            <div>
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Company Name</label>
              <input name="companyName" type="text" className="w-full px-5 py-4 rounded-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white text-[13px] font-medium transition-all" placeholder="Industry Ltd." />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
              <input name="email" type="email" className="w-full px-5 py-4 rounded-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white text-[13px] font-medium transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Mobile Number</label>
              <input name="contactNumber" required type="tel" className="w-full px-5 py-4 rounded-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white text-[13px] font-medium transition-all" placeholder="+91..." />
            </div>
          </div>
          <div>
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Requirements / Message</label>
            <textarea name="requirement" className="w-full px-5 py-4 rounded-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white text-[13px] font-medium transition-all h-28" placeholder="Describe your requirement..."></textarea>
          </div>
          <div className="pt-2">
            <button disabled={loading} type="submit" className="w-full py-4 rounded-full bg-blue-700 text-white font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-75 disabled:hover:scale-100 disabled:cursor-not-allowed">
              {loading ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </div>
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
  const [imgErr, setImgErr] = useState({})

  // Slideshow state
  const productImages = product?.images?.length > 0 ? product.images : [product?.image || PLACEHOLDER]
  const [currentSlide, setCurrentSlide] = useState(0)
  const hasMultiple = productImages.length > 1

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % productImages.length)
  }, [productImages.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + productImages.length) % productImages.length)
  }, [productImages.length])

  // Auto-play slideshow (5 seconds)
  useEffect(() => {
    if (!hasMultiple) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide, hasMultiple])

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentSlide(0)
    setImgErr({})
  }, [slug])

  if (!product) return (
    <div className="py-40 text-center font-black text-2xl text-slate-900">
      <SEO title={`Product Not Found | ${SEO_CONFIG.brandName}`} description="The requested product was not found." noindex={true} />
      Product not found
    </div>
  )

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32 pb-16 md:pb-24">
      <SEO
        title={`${product.name} – ${product.tagline} | ${SEO_CONFIG.brandName}`}
        description={product.description}
        keywords={`${product.name.toLowerCase()}, ${product.category === 'roll-forming' ? 'roll forming machine' : product.category === 'shutter-motors' ? 'rolling shutter motor' : 'motor accessories'}, ${product.tagline?.toLowerCase()}, shree gayatri industries, ahmedabad, india`}
        canonical={`${SEO_CONFIG.siteUrl}/product/${product.slug}`}
        ogImage={typeof product.image === 'string' && product.image.startsWith('http') ? product.image : SEO_CONFIG.ogImage}
        schemas={[
          getProductSchema(product),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Products', url: '/products' },
            { name: product.name },
          ]),
        ]}
      />
      <InquiryModal product={product} isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 md:mb-10">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <span>/</span>
          <span className="text-slate-900">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* ===== IMAGE SLIDESHOW GALLERY ===== */}
          <div className="relative group/gallery">
            <div className="bg-slate-50 border border-slate-200 rounded-sm aspect-[4/3] max-w-[340px] mx-auto md:max-w-none shadow-sm overflow-hidden relative w-full">
              
              {/* Slides */}
              {productImages.map((imgSrc, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-0 scale-105 z-0'
                  }`}
                >
                  <img
                    src={imgErr[index] ? PLACEHOLDER : (imgSrc || PLACEHOLDER)}
                    alt={`${product.name} - Image ${index + 1}`}
                    onError={() => setImgErr(prev => ({ ...prev, [index]: true }))}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover/gallery:scale-[1.03] p-2 md:p-4"
                  />
                </div>
              ))}

              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 md:top-8 md:left-8 bg-blue-700 text-white text-[10px] md:text-[11px] font-black px-3 py-1 md:px-4 md:py-1.5 rounded-sm uppercase tracking-widest shadow-sm z-20">
                  {product.badge}
                </span>
              )}

              {/* Navigation Arrows (only if multiple images) */}
              {hasMultiple && (
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 px-2 md:px-4 flex justify-between pointer-events-none opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all pointer-events-auto shadow-lg active:scale-95"
                    aria-label="Previous image"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all pointer-events-auto shadow-lg active:scale-95"
                    aria-label="Next image"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              )}

              {/* Image Counter */}
              {hasMultiple && (
                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-black/50 backdrop-blur-sm text-white text-[10px] font-black px-2.5 py-1 rounded-full tracking-wider">
                  {currentSlide + 1} / {productImages.length}
                </div>
              )}
            </div>

            {/* Thumbnail Dots / Strip */}
            {hasMultiple && (
              <div className="flex items-center justify-center gap-2 mt-4">
                {productImages.map((imgSrc, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-sm overflow-hidden border-2 ${
                      currentSlide === index 
                        ? 'border-blue-600 shadow-md scale-105' 
                        : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-400'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={imgErr[index] ? PLACEHOLDER : (imgSrc || PLACEHOLDER)}
                      alt={`Thumbnail ${index + 1}`}
                      onError={() => setImgErr(prev => ({ ...prev, [index]: true }))}
                      className="w-12 h-12 md:w-14 md:h-14 object-contain bg-slate-50 p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details area */}
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 md:mb-4 leading-tight tracking-tight">
              {product.name}
            </h1>
            <p className="text-sm md:text-lg text-blue-600 font-bold mb-6 md:mb-8 uppercase tracking-widest text-[11px] md:text-[13px]">
              {(product.category === 'shutter-motors' || product.category === 'motor-accessories') ? '⚙️ Shutter Motor' : '🏭 Roll Forming Line'}
            </p>

            <div className="flex flex-row items-center gap-3 mb-10 w-full">
              {product.externalLink ? (
                <a 
                  href={product.externalLink}
                  target="_blank" rel="noreferrer"
                  className="flex-1 min-w-0 px-2 py-3.5 rounded-full bg-blue-700 text-white font-black uppercase tracking-widest text-[9px] md:text-xs text-center hover:scale-[1.02] transition-all duration-300 shadow-md whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  View on EzRun
                </a>
              ) : (
                <button 
                  onClick={() => setIsInquiryOpen(true)}
                  className="flex-1 min-w-0 px-2 py-3.5 rounded-full bg-blue-700 text-white font-black uppercase tracking-widest text-[10px] md:text-xs text-center hover:scale-[1.02] transition-all duration-300 shadow-md whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  Send Inquiry
                </button>
              )}
              <a 
                href={`https://wa.me/918154935437?text=Hello,%20I%20am%20interested%20in%20your%20${encodeURIComponent(product.name)}`}
                target="_blank" rel="noreferrer"
                className="flex-1 min-w-0 px-2 py-3.5 rounded-full bg-green-600 text-white font-black uppercase tracking-widest text-[10px] md:text-xs text-center hover:scale-[1.02] transition-all duration-300 shadow-md whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center gap-1"
              >
                WhatsApp
              </a>
            </div>

            <p className="text-slate-600 text-sm md:text-lg font-medium leading-relaxed mb-8 md:mb-10">
              {product.description}
            </p>

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 py-2">
                  {product.specs?.map((s, i) => (
                    <div key={i} className="flex items-start justify-between py-2 border-b border-slate-100 last:border-0 md:last:border-b">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider shrink-0 max-w-[45%] pt-0.5 leading-tight">{s.label}</span>
                      <span className="text-[13px] font-bold text-slate-900 text-right leading-tight">{s.value}</span>
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

      {/* Compatible Accessories Section */}
      {(product.category === 'shutter-motors' || product.category === 'roll-forming') && (
        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-16 md:mt-24 border-t border-slate-100 pt-12 md:pt-20 mb-12 md:mb-20">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">
            {product.category === 'shutter-motors' ? 'Motor Accessories' : 'Comes along with the machine'}
          </h2>
          <p className="text-slate-500 font-medium mb-10">
            {product.category === 'shutter-motors' 
              ? 'Compatible controllers and modular add-ons for this motor system.'
              : 'Compatible equipment and modular add-ons for this roll forming line.'}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {PRODUCTS.filter(p => 
              p.category === (product.category === 'shutter-motors' ? 'motor-accessories' : 'machine-accessories')
            ).map(accessory => (
              <ProductCard key={accessory.id} product={accessory} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
