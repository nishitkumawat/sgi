import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../data/products'
import logo from '../assets/SGI logo.png'
import { Tabs } from './ui/vercel-tabs'

const NAV = [
  { label: 'Home',     to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About',    to: '/about' },
  { label: 'Contact',  to: '/contact' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const active = (path) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path)

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200'
        : 'bg-transparent'
    }`}>
      {/* Top info bar */}
      <div className="bg-[#1e3a8a] text-blue-50 text-[11px] py-1.5 px-6 text-center hidden md:block font-medium">
        📞 +91 98254 35437 &nbsp;|&nbsp; ✉️ info@shreegayatriindustries.co.in &nbsp;|&nbsp; 📍 Bakrol, Ahmedabad – 382 430, Gujarat
      </div>

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Shree Gayatri Industries" className="h-12 w-auto" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center">
          <Tabs
            tabs={NAV.map(item => ({ id: item.to, label: item.label }))}
            activeTab={
              location.pathname === '/' 
                ? '/' 
                : NAV.find(item => item.to !== '/' && location.pathname.startsWith(item.to))?.to || '/'
            }
            onTabChange={(id) => navigate(id)}
          />
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919825435437"
            className="text-xs text-slate-500 hover:text-blue-700 transition-colors font-bold uppercase tracking-wider"
          >
            📞 +91 98254 35437
          </a>
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-sm text-sm font-bold bg-blue-700 hover:bg-blue-800 text-white transition-all hover:-translate-y-0.5 uppercase tracking-widest"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-sm text-slate-600 hover:bg-slate-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-6 flex flex-col gap-4 shadow-2xl">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`text-sm font-bold py-2 border-b border-slate-50 ${active(item.to) ? 'text-blue-600' : 'text-slate-700'}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="grid grid-cols-1 gap-2 mt-2">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="text-xs text-slate-500 font-medium py-1.5 pl-4 hover:text-blue-600"
              >
                {cat.icon} {cat.label}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-4 px-6 py-3.5 rounded-sm text-sm font-bold bg-blue-700 text-white text-center uppercase tracking-widest"
          >
            Request Inquiry
          </Link>
        </div>
      )}
    </nav>
  )
}
