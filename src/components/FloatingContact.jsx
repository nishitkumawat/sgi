import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Phone, Mail, X } from 'lucide-react'

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" ref={menuRef}>
      {/* Menu Options */}
      {isOpen && (
        <div className="flex flex-col gap-3 mb-2 origin-bottom animate-in slide-in-from-bottom-2 fade-in duration-200">
          <a
            href="https://wa.me/918154935437?text=Hello,%20I%20came%20from%20your%20website..."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-green-500 text-white justify-between px-4 py-3 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all text-sm font-bold shadow-[0_10px_20px_rgba(34,197,94,0.3)] w-[140px]"
          >
            <span>WhatsApp</span>
            <MessageCircle className="w-4 h-4" />
          </a>
          
          <a
            href="tel:+918154935437"
            className="flex items-center gap-3 bg-blue-600 text-white justify-between px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all text-sm font-bold shadow-[0_10px_20px_rgba(37,99,235,0.3)] w-[140px]"
          >
            <span>Call Us</span>
            <Phone className="w-4 h-4" />
          </a>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 bg-slate-800 text-white justify-between px-4 py-3 rounded-full shadow-lg hover:bg-slate-900 hover:scale-105 transition-all text-sm font-bold shadow-[0_10px_20px_rgba(15,23,42,0.3)] w-[140px]"
          >
            <span>Contact</span>
            <Mail className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.6)] hover:scale-110 transition-all duration-300 z-50 border-2 border-white/50 ${isOpen ? 'bg-slate-800 text-white' : 'bg-blue-600 text-white'}`}
        aria-label="Contact Us Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  )
}
