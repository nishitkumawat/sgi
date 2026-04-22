import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MessageCircle, Phone, Mail, X, ChevronRight } from 'lucide-react'

// Page-specific WhatsApp messages
function getWhatsAppMessage(pathname) {
  const base = 'https://wa.me/918154935437?text='

  if (pathname.includes('solar-structure')) {
    return base + encodeURIComponent(
      'Hello, I visited your website and I am interested in your Solar Mounting Structures. Please share product details and pricing.'
    )
  }

  if (pathname.includes('machines') || pathname.includes('product')) {
    return base + encodeURIComponent(
      'Hello, I visited your website and I am interested in your Roll Forming Machines. Please share details and pricing.'
    )
  }

  if (pathname.includes('motors')) {
    return base + encodeURIComponent(
      'Hello, I visited your website and I am interested in your Rolling Shutter Motors. Please share product details and pricing.'
    )
  }

  return base + encodeURIComponent(
    'Hello, I visited your website and would like to know more about your products. Please guide me.'
  )
}

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const location = useLocation()

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setIsOpen(false)
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const waLink = getWhatsAppMessage(location.pathname)

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2.5" ref={menuRef}>

      {/* Expanded Menu */}
      {isOpen && (
        <div className="flex flex-col gap-2.5 mb-1 origin-bottom-right"
          style={{ animation: 'floatUp 0.22s cubic-bezier(0.34,1.56,0.64,1) both' }}>

          {/* WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 pl-4 pr-3 py-3 rounded-2xl text-white text-sm font-semibold shadow-xl transition-all duration-200 hover:scale-105 hover:pr-4"
            style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', boxShadow: '0 8px 24px rgba(34,197,94,0.35)' }}
          >
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-normal opacity-80">Get instant reply</span>
              <span>WhatsApp Us</span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
          </a>

          {/* Call */}
          <a
            href="tel:+918154935437"
            className="group flex items-center gap-3 pl-4 pr-3 py-3 rounded-2xl text-white text-sm font-semibold shadow-xl transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', boxShadow: '0 8px 24px rgba(59,130,246,0.35)' }}
          >
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-normal opacity-80">Talk to our team</span>
              <span>Call Now</span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4" />
            </div>
          </a>

          {/* Enquiry Form */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3 pl-4 pr-3 py-3 rounded-2xl text-white text-sm font-semibold shadow-xl transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #475569, #0f172a)', boxShadow: '0 8px 24px rgba(15,23,42,0.35)' }}
          >
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-normal opacity-80">Send details</span>
              <span>Enquiry Form</span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-4 h-4" />
            </div>
          </Link>
        </div>
      )}

      {/* Main Toggle Button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Contact Us"
          className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-white shadow-2xl"
          style={{
            background: isOpen
              ? 'linear-gradient(135deg, #1e293b, #0f172a)'
              : 'linear-gradient(135deg, #22c55e, #16a34a)',
            boxShadow: isOpen
              ? '0 10px 30px rgba(15,23,42,0.4)'
              : '0 10px 30px rgba(34,197,94,0.5)',
          }}
        >
          {isOpen
            ? <X className="w-5 h-5 text-white" />
            : <MessageCircle className="w-6 h-6 text-white" />
          }
        </button>
      </div>

      <style>{`
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(16px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
      `}</style>
    </div>
  )
}
