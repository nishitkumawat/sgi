import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PLACEHOLDER } from '../data/products'

export default function ProductCard({ product }) {
  const [imgErr, setImgErr] = useState(false)
  const src = imgErr ? PLACEHOLDER : (product.image || PLACEHOLDER)

  const innerContent = (
    <>
      <div className="relative bg-white aspect-square w-full overflow-hidden border-b border-slate-50 flex items-center justify-center">
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
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-slate-900 font-extrabold text-[15px] leading-tight group-hover:text-blue-700 transition-colors mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-slate-500 text-[13px] leading-relaxed flex-1 mb-5 line-clamp-2">
          {product.tagline}
        </p>

        <div className="pt-4 border-t border-slate-50 mt-auto">
          <div className="w-full bg-blue-700 hover:bg-blue-800 text-white text-center py-3 text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 rounded-full group-hover:scale-[1.03] shadow-md group-hover:shadow-xl block">
            {product.externalLink ? 'View on EzRun' : 'Send Inquiry'}
          </div>
        </div>
      </div>
    </>
  )

  if (product.externalLink) {
    return (
      <a href={product.externalLink} target="_blank" rel="noreferrer" className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:border-blue-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full text-left">
        {innerContent}
      </a>
    )
  }

  return (
    <Link to={`/product/${product.slug}`} className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:border-blue-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full text-left">
      {innerContent}
    </Link>
  )
}
