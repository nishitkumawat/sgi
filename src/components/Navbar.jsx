import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../data/products'
import logo from '../assets/SGI logo.png'
import { Tabs } from './ui/vercel-tabs'

const CategoriesDropdown = () => (
  <div className="group flex items-center h-full relative py-4 -my-4">
    <span className="flex items-center gap-1">
      Categories
      <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </span>
    {/* Dropdown Menu */}
    <div className="absolute top-[100%] pt-4 left-1/2 -translate-x-1/2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
      <div className="bg-white border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col overflow-hidden ring-1 ring-black/5">
        <Link to="/machines" className="px-5 py-4 text-slate-600 hover:bg-slate-50 hover:text-blue-700 flex items-center gap-4 border-b border-slate-50 last:border-0 transition-all">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-xl shrink-0">⚙️</div>
          <div>
            <div className="font-bold text-sm text-slate-800">Roll Forming</div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5">Industrial Machinery</div>
          </div>
        </Link>
        <Link to="/solar-structure" className="px-5 py-4 text-slate-600 hover:bg-slate-50 hover:text-orange-600 flex items-center gap-4 border-b border-slate-50 last:border-0 transition-all">
          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-xl shrink-0">☀️</div>
          <div>
            <div className="font-bold text-sm text-slate-800">Solar Structure</div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5">Mounting Solutions</div>
          </div>
        </Link>
        <Link to="/motors" className="px-5 py-4 text-slate-600 hover:bg-slate-50 hover:text-amber-600 flex items-center gap-4 transition-all">
          <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-xl shrink-0">⚡</div>
          <div>
            <div className="font-bold text-sm text-slate-800">Shutter Motors</div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5">Automated Drives</div>
          </div>
        </Link>
      </div>
    </div>
  </div>
)

const navItems = [
  { label: 'Home',     to: '/' },
  { label: <CategoriesDropdown />, to: '#categories' },
  { label: 'Products', to: '/products' },
  // { label: 'Blog',     to: '/blog' },
  { label: 'About',    to: '/about' },
  { label: 'Contact',  to: '/contact' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Check if we're on solar structure page
  const isSolarPage = location.pathname === '/solar-structure'

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
      isSolarPage
        ? 'bg-white shadow-lg border-b border-slate-200'
        : scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200'
          : 'bg-white/30 backdrop-blur-md'
    }`}>
      {/* Top info bar */}
      <div className="bg-[#1e3a8a] text-blue-50 text-[11px] py-1.5 px-6 text-center hidden md:block font-medium">
        &nbsp; ✉️ shreegayatriindustries2099@gmail.com &nbsp;|&nbsp; 📍 Bakrol, Ahmedabad – 382 430, Gujarat
      </div>

      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Shree Gayatri Industries" className="h-12 w-auto rounded-md" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center">
          <Tabs
            tabs={navItems.map((item) => ({ id: item.to, label: item.label }))}
            activeTab={
              ['/machines', '/solar-structure', '/motors'].some(p => location.pathname.startsWith(p))
                ? '#categories'
                : location.pathname === '/' 
                  ? '/' 
                  : navItems.find(item => item.to !== '/' && item.to !== '#categories' && location.pathname.startsWith(item.to))?.to || '/'
            }
            onTabChange={(id) => {
              if (id !== '#categories') navigate(id)
            }}
          />
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* <a
            href="tel:+918154935437"
            className="text-xs text-slate-500 hover:text-blue-700 transition-colors font-bold uppercase tracking-wider"
          >
            📞 +91 81549 35437
          </a> */}
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-full text-sm font-bold bg-blue-700 text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl uppercase tracking-widest"
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
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-6 flex flex-col gap-4 shadow-2xl max-h-[85vh] overflow-y-auto">
          {navItems.map((item, idx) => {
            if (item.to === '#categories') {
              return (
                <div key="categories-mobile" className="text-sm font-bold py-2 border-b border-slate-50 text-slate-700">
                  Categories
                  <div className="grid grid-cols-1 gap-2 mt-3 ml-2">
                    <Link to="/machines" className="text-xs text-slate-500 font-medium py-2 pl-3 hover:text-blue-600 hover:bg-blue-50 rounded-lg flex items-center gap-3 transition-colors">
                      <span className="text-lg">⚙️</span> Roll Forming Machines
                    </Link>
                    <Link to="/solar-structure" className="text-xs text-slate-500 font-medium py-2 pl-3 hover:text-orange-600 hover:bg-orange-50 rounded-lg flex items-center gap-3 transition-colors">
                      <span className="text-lg">☀️</span> Solar Structure
                    </Link>
                    <Link to="/motors" className="text-xs text-slate-500 font-medium py-2 pl-3 hover:text-amber-600 hover:bg-amber-50 rounded-lg flex items-center gap-3 transition-colors">
                      <span className="text-lg">⚡</span> Shutter Motors
                    </Link>
                  </div>
                </div>
              )
            }
            
            return (
              <Link
                key={idx}
                to={item.to}
                className={`text-sm font-bold py-2 border-b border-slate-50 ${active(item.to) ? 'text-blue-600' : 'text-slate-700'}`}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            to="/contact"
            className="mt-4 px-6 py-3.5 rounded-full text-sm font-bold bg-blue-700 text-white text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-widest"
          >
            Request Inquiry
          </Link>
        </div>
      )}
    </nav>
  )
}
