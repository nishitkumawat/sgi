import { Link } from 'react-router-dom'
import logo from '../assets/SGI logo.png'

const FOOTER_PRODUCTS = [
  { name: 'Rolling Shutter Guide Machine',          slug: 'rolling-shutter-guide-machine' },
  { name: 'Corrugated Sheet Roll Forming Machine',  slug: 'corrugated-sheet-roll-forming-machine' },
  { name: 'C Purlin Roll Forming Machine',          slug: 'c-purlin-roll-forming-machine' },
  { name: 'Auto Shutter Patti Machine',             slug: 'automatic-shutter-patti-roll-forming-machine' },
  { name: 'Corrugated Silo Tank Machine',           slug: 'corrugated-silo-tank-roll-forming-machine' },
  { name: 'Automatic Rolling Shutter Gear Motor',   slug: 'automatic-rolling-shutter-gear-motor' },
  { name: 'MCB Channel Roll Forming Machine',       slug: 'mcb-channel-roll-forming-machine' },
]

export default function Footer() {
  return (
    <footer className="bg-[#060f1e] text-slate-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="Shree Gayatri Industries" className="h-14 w-auto mb-4 brightness-110 rounded-md" />
            <p className="text-sm leading-relaxed mb-5">
              Ahmedabad-based manufacturer of roll forming machines and rolling shutter motors since 2005. Trusted across 20+ Indian states.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-900/30 rounded-sm px-3 py-2 border border-blue-800/40">
              <span className="text-xs text-blue-300 font-semibold">GST: 24BDMPM9420Q1ZV</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home',        to: '/' },
                { label: 'Products',    to: '/products' },
                { label: 'About Us',    to: '/about' },
                { label: 'Contact Us',  to: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm hover:text-blue-300 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Our Products</h4>
            <ul className="space-y-2.5">
              {FOOTER_PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link to={`/product/${p.slug}`} className="text-sm hover:text-blue-300 transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-blue-300 font-semibold mb-1">Address</p>
                <p className="text-sm leading-relaxed">
                  Plot No. 43, Satvabhumi Industrial Estate,<br />
                  Bakrol, Ahmedabad – 382 430,<br />
                  Gujarat, India
                </p>
              </div>
              <div>
                <p className="text-xs text-blue-300 font-semibold mb-1">Phone</p>
                <a href="tel:+918154935437" className="text-sm hover:text-white transition-colors block">+91 81549 35437</a>
                <a href="tel:+919712905437" className="text-sm hover:text-white transition-colors block">+91 97129 05437</a>
              </div>
              <div>
                <p className="text-xs text-blue-300 font-semibold mb-1">Email</p>
                <a href="mailto:info@shreegayatriindustries.co.in" className="text-sm hover:text-white transition-colors break-all">
                  info@shreegayatriindustries.co.in
                </a>
              </div>
              <div>
                <p className="text-xs text-blue-300 font-semibold mb-1">Hours</p>
                <p className="text-sm">Mon – Sat: 9:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Shree Gayatri Industries. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="tel:+918154935437"
              className="px-5 py-2.5 rounded-full bg-blue-700 text-white text-xs font-bold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl uppercase tracking-widest"
            >
              📞 Call Now
            </a>
            <a href="https://wa.me/918154935437" target="_blank" rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-green-600 text-white text-xs font-bold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl uppercase tracking-widest"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
