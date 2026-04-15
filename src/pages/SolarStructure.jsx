import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Mail, MapPin, Check, ArrowRight, Factory, Users, Zap, Shield } from 'lucide-react'
import solarHero from '../assets/solar_hero.png'

export default function SolarStructure() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 overflow-hidden" style={{ backgroundImage: `url(${solarHero})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-slate-900/90" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white text-[10px] font-black tracking-widest uppercase mb-6 rounded-full">
              <span className="w-2 h-2 bg-white block rounded-full" />
              Solar Structure Manufacturing
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Precision Roll-Formed Steel Sections for Solar Structures
            </h1>
            <p className="text-lg md:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-3xl">
              High-quality C Channels, Z Purlins, Hat Sections & Solar Mounting Rails with custom punching, fast delivery, and competitive pricing for solar structure manufacturers across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+918154935437" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-xl rounded-full"
              >
                <Phone className="w-5 h-5" />
                Get Quote Now
              </a>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-xl rounded-full"
              >
                <Mail className="w-5 h-5" />
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE MANUFACTURE */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Our Products</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">What We Manufacture</h3>
            <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">
              Complete range of roll-formed steel sections designed specifically for solar structure applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'C Channels - Standard & Custom Sizes',
              'Z Purlins - Various Thickness Options', 
              'Hat Sections - Solar Mounting Systems',
              'Solar Mounting Rails - Precision Profile',
              'Custom Roll-Formed Profiles - As per Drawing',
              'Structural Steel Components - High Strength'
            ].map((product, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-600 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-colors">
                  <Check className="w-6 h-6" />
                </div>
                <p className="text-slate-800 font-bold text-sm leading-tight">{product}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-16 md:py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Target Markets</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Industries We Serve</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Factory, title: 'Solar Structure Manufacturers', desc: 'Primary focus on solar mounting system fabricators' },
              { icon: Users, title: 'Solar EPC Companies', desc: 'Engineering, procurement, and construction partners' },
              { icon: Zap, title: 'Fabricators', desc: 'Custom steel fabrication and assembly units' },
              { icon: Shield, title: 'Infrastructure', desc: 'Large-scale industrial and infrastructure projects' }
            ].map((industry, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-105">
                  <industry.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-3">{industry.title}</h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Competitive Edge</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Why Choose Us</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Fast Delivery', desc: 'Quick turnaround time with efficient production scheduling and logistics support across India' },
              { title: 'Custom Sections', desc: 'Manufacture profiles as per your specific drawings and requirements with precision engineering' },
              { title: 'High Precision', desc: 'Advanced roll forming technology with tight tolerances and consistent quality control' },
              { title: 'Bulk Capacity', desc: 'Large-scale production capability to handle major solar project requirements efficiently' },
              { title: 'Competitive Pricing', desc: 'Cost-effective solutions without compromising on quality or delivery timelines' },
              { title: 'Precision Punching', desc: 'In-line punching and notching capabilities for ready-to-assemble components' }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300 group">
                <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="py-16 md:py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Product Range</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Key Products</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'C Channels',
                material: 'High-grade steel with galvanized coating',
                usage: 'Solar panel mounting frames, structural support',
                specs: 'Custom sizes available, thickness 1.5-3.0mm'
              },
              {
                name: 'Z Purlins', 
                material: 'Cold-rolled steel with protective finish',
                usage: 'Roofing systems, solar structure support',
                specs: 'Standard Z sections, customized dimensions'
              },
              {
                name: 'Hat Sections',
                material: 'Pre-galvanized steel for outdoor use',
                usage: 'Solar rail systems, mounting brackets',
                specs: 'Various profiles, precision punching options'
              },
              {
                name: 'Solar Mounting Rails',
                material: 'Aluminum or steel with corrosion resistance',
                usage: 'Panel mounting, tracking systems',
                specs: 'Custom lengths, integrated mounting points'
              },
              {
                name: 'Custom Profiles',
                material: 'As per specification - steel/aluminum',
                usage: 'Specialized solar applications',
                specs: 'Manufactured as per client drawings'
              },
              {
                name: 'Structural Components',
                material: 'High-strength structural steel',
                usage: 'Complete solar structure assembly',
                specs: 'Ready-to-assemble punched components'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{product.name}</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Material</p>
                      <p className="text-sm font-medium text-slate-700">{product.material}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Usage</p>
                      <p className="text-sm font-medium text-slate-700">{product.usage}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Specifications</p>
                      <p className="text-sm font-medium text-slate-700">{product.specs}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Manufacturing</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Our Process</h3>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4 md:gap-8">
            {[
              { step: '01', title: 'Raw Material', desc: 'Quality steel selection and inspection' },
              { step: '02', title: 'Roll Forming', desc: 'Precision forming with advanced machinery' },
              { step: '03', title: 'Punching', desc: 'Custom holes and notching as per design' },
              { step: '04', title: 'Quality Check', desc: 'Dimensional accuracy and surface inspection' },
              { step: '05', title: 'Dispatch', desc: 'Secure packaging and timely delivery' }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-black">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-3">{process.title}</h4>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">{process.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / CLIENT SECTION */}
      <section className="py-16 md:py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Client Trust</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Trusted Across India</h3>
            <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">
              Serving solar structure manufacturers and industrial clients with reliable steel solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-white rounded-xl shadow-md border border-slate-100">
              <div className="text-4xl font-black text-blue-600 mb-4">20+</div>
              <p className="text-slate-700 font-bold uppercase tracking-wider text-sm">States Served</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-md border border-slate-100">
              <div className="text-4xl font-black text-blue-600 mb-4">500+</div>
              <p className="text-slate-700 font-bold uppercase tracking-wider text-sm">Solar Projects</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-md border border-slate-100">
              <div className="text-4xl font-black text-blue-600 mb-4">10+</div>
              <p className="text-slate-700 font-bold uppercase tracking-wider text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* STRONG CALL TO ACTION */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Ready to Power Your Solar Projects?
          </h2>
          <p className="text-xl text-blue-100 font-medium mb-12 leading-relaxed">
            Get competitive quotes, fast delivery, and custom solutions for your solar structure requirements. Contact our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918154935437" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-xl rounded-full"
            >
              <Phone className="w-5 h-5" />
              Request Quote
            </a>
            <a 
              href="https://wa.me/918154935437?text=Hello,%20I%20am%20interested%20in%20solar%20structure%20components" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white font-black uppercase tracking-widest text-sm hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-xl rounded-full"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white font-black uppercase tracking-widest text-sm hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 rounded-full"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Contact Us</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-slate-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-3">Location</h4>
              <p className="text-slate-600 font-medium">Ahmedabad, Gujarat, India</p>
            </div>
            
            <div className="text-center p-8 bg-slate-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-3">Call Now</h4>
              <a href="tel:+918154935437" className="text-slate-600 font-medium hover:text-blue-600 transition-colors">
                +91 81549 35437
              </a>
            </div>
            
            <div className="text-center p-8 bg-slate-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-3">WhatsApp</h4>
              <a 
                href="https://wa.me/918154935437" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 font-medium hover:text-green-600 transition-colors"
              >
                +91 81549 35437
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
