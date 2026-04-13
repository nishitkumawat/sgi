import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PLACEHOLDER } from '../data/products'

const IMG_MAP = {
  'rolling-shutter-guide':  'https://5.imimg.com/data5/SELLER/Default/2021/3/GO/ZH/MG/10097291/rolling-shutter-guide-machine-500x500.jpg',
  'corrugated-sheet':       'https://5.imimg.com/data5/SELLER/Default/2021/3/UY/XH/US/10097291/corrugated-sheet-roll-forming-machine-500x500.jpg',
  'c-purlin':               'https://5.imimg.com/data5/ECOM/Default/2023/10/356394154/ST/YJ/RE/10097291/whatsappimage2023-10-09at1-31-01pm-500x500.jpg',
  'auto-shutter-patti':     'https://5.imimg.com/data5/ANDROID/Default/2021/3/TQ/RS/LS/10097291/product-500x500.jpg',
  'elevator-door':          'https://5.imimg.com/data5/SELLER/Default/2022/3/KS/SM/SX/10097291/elevator-door-section-machine-500x500.jpg',
  'corrugated-silo':        'https://5.imimg.com/data5/ANDROID/Default/2021/3/KE/XG/YB/10097291/product-500x500.jpg',
  'solar-heater-tank':      'https://5.imimg.com/data5/ANDROID/Default/2021/3/TM/HE/EX/10097291/product-500x500.jpg',
  'c-channel':              'https://5.imimg.com/data5/SELLER/Default/2021/3/MF/MA/TX/10097291/c-channel-roll-forming-machine-500x500.jpg',
  'solar-bracket':          'https://5.imimg.com/data5/ANDROID/Default/2021/3/WG/PS/OK/10097291/product-500x500.jpg',
  'customised':             'https://5.imimg.com/data5/SELLER/Default/2021/3/WO/OD/QR/10097291/customised-roll-forming-machine-500x500.jpg',
  'auto-gear-motor':        'https://5.imimg.com/data5/ANDROID/Default/2021/3/YF/IU/WW/10097291/product-500x500.jpg',
  'motorized-shutter':      'https://5.imimg.com/data5/SELLER/Default/2021/3/RW/OZ/ZA/10097291/motorized-rolling-shutter-motor-500x500.jpg',
  'single-phase-side':      'https://5.imimg.com/data5/SELLER/Default/2021/3/MT/VX/ZI/10097291/single-phase-rolling-shutter-side-motor-500x500.jpg',
  'electric-shutter':       'https://5.imimg.com/data5/SELLER/Default/2021/3/QI/ZN/OL/10097291/electric-rolling-shutter-motor-500x500.jpg',
  'mcb-channel-machine':    'https://5.imimg.com/data5/SELLER/Default/2021/3/AW/KU/DG/10097291/mcb-channel-roll-forming-machine-500x500.jpg',
  'din-rail':               'https://5.imimg.com/data5/SELLER/Default/2022/2/SO/PJ/RO/10097291/din-rail-channel-machines-500x500.jpg',
  'ladder-strip':           'https://5.imimg.com/data5/SELLER/Default/2021/3/JH/VX/ZM/10097291/ladder-strip-roll-forming-machine-500x500.jpg',
  'metal-door-frame':       'https://5.imimg.com/data5/SELLER/Default/2021/3/BR/VT/BY/10097291/metal-door-frame-roll-forming-machine-500x500.jpg',
  'roofing-sheet':          'https://5.imimg.com/data5/SELLER/Default/2021/3/RP/MT/PQ/10097291/automatic-roofing-sheet-machine-500x500.jpg',
  'elevator-header':        'https://5.imimg.com/data5/SELLER/Default/2022/2/YF/IN/SN/10097291/cold-rollformed-metal-header-track-for-elevator-500x500.jpg',
  'roofing-crimping':       'https://5.imimg.com/data5/SELLER/Default/2021/3/AB/CB/LV/10097291/roofing-sheets-crimping-machine-500x500.jpg',
}

export default function ProductCard({ product }) {
  const [imgErr, setImgErr] = useState(false)
  const src = imgErr ? PLACEHOLDER : (IMG_MAP[product.id] || PLACEHOLDER)

  return (
    <div
      className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:border-blue-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
    >
      {/* Image area */}
      <Link to={`/product/${product.slug}`} className="relative bg-[#f8fafc] h-52 overflow-hidden border-b border-slate-50 block">
        <img
          src={src}
          alt={product.name}
          onError={() => setImgErr(true)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 bg-blue-700 text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm z-10">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </Link>

      {/* Text area */}
      <div className="p-6 flex flex-col flex-1">
        <Link to={`/product/${product.slug}`}>
          <h3 className="text-slate-900 font-extrabold text-[15px] leading-tight group-hover:text-blue-700 transition-colors mb-2 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-slate-500 text-[13px] leading-relaxed flex-1 mb-5 line-clamp-2">
          {product.tagline}
        </p>

        <div className="pt-4 border-t border-slate-50 mt-auto">
          <Link 
            to={`/product/${product.slug}`} 
            className="w-full bg-blue-700 hover:bg-blue-800 text-white text-center py-3 text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 rounded-full hover:scale-[1.03] shadow-md hover:shadow-xl block"
          >
            Send Inquiry
          </Link>
        </div>
      </div>
    </div>
  )
}
