import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Mail, MapPin, Check, ArrowRight, Factory, Users, Zap, Shield, Clock, Ruler, Target, Box, CreditCard, Scissors, Truck, ClipboardCheck, Cog, Layers } from 'lucide-react'
import solarHero from '../assets/solar_hero.png'

export default function SolarStructure() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const detailedProducts = [
    {
      title: 'C Channels',
      subtitle: 'Standard & Custom Sizes',
      desc: 'High-grade precision steel engineered for maximum load-bearing capabilities across massive solar structures.',
      specs: [
        { label: 'Thickness', value: '1.5mm to 3.0mm' },
        { label: 'Material', value: 'Pre-Galvanized, HR, CR' },
        { label: 'Lengths', value: 'Custom up to 12 meters' }
      ],
      icon: (
        <svg viewBox="0 0 120 120" className="w-full h-full max-w-[350px] group-hover:scale-[1.15] transition-transform duration-700 drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M65 25 L50 25 L50 75 L65 75 L65 65 L58 65 L58 35 L65 35 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1"/>
          <path d="M65 25 L45 45 M50 25 L30 45 M50 75 L30 95 M65 75 L45 95 M65 65 L45 85 M58 65 L38 85 M58 35 L38 55 M65 35 L45 55" stroke="#64748b" strokeWidth="1.5"/>
          <path d="M45 45 L30 45 L30 95 L45 95 L45 85 L38 85 L38 55 L45 55 Z" stroke="#334155" strokeWidth="2" fill="#f1f5f9" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Z Purlins',
      subtitle: 'Various Thickness Options',
      desc: 'Seamless overlapping Z-profiles designed to span long distances, minimizing weight while maximizing structural strength.',
      specs: [
        { label: 'Thickness', value: '1.2mm to 2.5mm' },
        { label: 'Yield Strength', value: 'Up to 350 MPa' },
        { label: 'Flange Width', value: 'Custom engineered' }
      ],
      icon: (
        <svg viewBox="0 0 120 120" className="w-full h-full max-w-[350px] group-hover:scale-[1.15] transition-transform duration-700 drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 25 L65 25 L65 35 L50 35 L50 65 L70 65 L70 75 L40 75 L40 65 L42 65 L42 35 L40 35 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1"/>
          <path d="M40 25 L20 45 M65 25 L45 45 M65 35 L45 55 M50 35 L30 55 M50 65 L30 85 M70 65 L50 85 M70 75 L50 95 M40 75 L20 95 M40 65 L20 85 M42 65 L22 85 M42 35 L22 55" stroke="#64748b" strokeWidth="1.5"/>
          <path d="M20 45 L45 45 L45 55 L30 55 L30 85 L50 85 L50 95 L20 95 L20 85 L22 85 L22 55 L20 55 Z" stroke="#334155" strokeWidth="2" fill="#f1f5f9" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Hat Sections',
      subtitle: 'Solar Mounting Systems',
      desc: 'Outstanding strength-to-weight track profiles enabling rapid installation and maximum base stability for PV modules.',
      specs: [
        { label: 'Profile Type', value: 'Omega / Hat Track' },
        { label: 'Surface', value: 'Hot Dip Galvanized' },
        { label: 'Usage', value: 'Roof & Ground Mounts' }
      ],
      icon: (
        <svg viewBox="0 0 120 120" className="w-full h-full max-w-[350px] group-hover:scale-[1.15] transition-transform duration-700 drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 75 L45 75 L45 35 L65 35 L65 75 L85 75 L85 85 L25 85 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1"/>
          <path d="M25 75 L10 90 M45 75 L30 90 M45 35 L30 50 M65 35 L50 50 M65 75 L50 90 M85 75 L70 90 M85 85 L70 100 M25 85 L10 100" stroke="#64748b" strokeWidth="1.5"/>
          <path d="M10 90 L30 90 L30 50 L50 50 L50 90 L70 90 L70 100 L10 100 Z" stroke="#334155" strokeWidth="2" fill="#f1f5f9" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Solar Mounting Rails',
      subtitle: 'Precision Profile',
      desc: 'Precision grooved channels for universal clamps and T-bolts, radically speeding up solar panel installation times.',
      specs: [
        { label: 'Compatibility', value: 'Universal Module Clamps' },
        { label: 'Material', value: 'Extruded Al / Steel' },
        { label: 'Resistance', value: '25+ Years Design' }
      ],
      icon: (
        <svg viewBox="0 0 120 120" className="w-full h-full max-w-[350px] group-hover:scale-[1.15] transition-transform duration-700 drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 25 L75 25 L75 35 L50 35 L50 45 L65 45 L65 55 L50 55 L50 75 L75 75 L75 85 L40 85 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1"/>
          <path d="M40 25 L20 45 M75 25 L55 45 M75 35 L55 55 M50 35 L30 55 M50 45 L30 65 M65 45 L45 65 M65 55 L45 75 M50 55 L30 75 M50 75 L30 95 M75 75 L55 95 M75 85 L55 105 M40 85 L20 105" stroke="#64748b" strokeWidth="1.5"/>
          <path d="M20 45 L55 45 L55 55 L30 55 L30 65 L45 65 L45 75 L30 75 L30 95 L55 95 L55 105 L20 105 Z" stroke="#334155" strokeWidth="2" fill="#f1f5f9" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Custom Roll-Formed Profiles',
      subtitle: 'As per Drawing',
      desc: 'Fully automated roll forming processing to deliver complex bends and extreme tolerances directly from your CAD designs.',
      specs: [
        { label: 'Precision', value: 'Micrometric Tolerances' },
        { label: 'Development', value: 'Fast Turnaround' },
        { label: 'Punching', value: 'In-line Automated' }
      ],
      icon: (
        <svg viewBox="0 0 120 120" className="w-full h-full max-w-[350px] group-hover:scale-[1.15] transition-transform duration-700 drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 25 L75 25 L65 40 L50 40 L50 70 L75 70 L75 80 L40 80 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1"/>
          <path d="M40 25 L20 45 M75 25 L55 45 M65 40 L45 60 M50 40 L30 60 M50 70 L30 90 M75 70 L55 90 M75 80 L55 100 M40 80 L20 100" stroke="#64748b" strokeWidth="1.5"/>
          <path d="M20 45 L55 45 L45 60 L30 60 L30 90 L55 90 L55 100 L20 100 Z" stroke="#334155" strokeWidth="2" fill="#f1f5f9" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Structural Steel Components',
      subtitle: 'High Strength',
      desc: 'Rigorously inspected base plates and anchoring frames built to secure MW-scale solar networks against extreme wind loads.',
      specs: [
        { label: 'Component Type', value: 'Base Plates & Angles' },
        { label: 'Treatment', value: 'Hot Dip Galvanized HDG' },
        { label: 'Application', value: 'Sub-structure anchoring' }
      ],
      icon: (
        <svg viewBox="0 0 120 120" className="w-full h-full max-w-[350px] group-hover:scale-[1.15] transition-transform duration-700 drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 25 L50 25 L50 65 L80 65 L80 75 L40 75 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1"/>
          <path d="M40 25 L20 45 M50 25 L30 45 M50 65 L30 85 M80 65 L60 85 M80 75 L60 95 M40 75 L20 95" stroke="#64748b" strokeWidth="1.5"/>
          <path d="M20 45 L30 45 L30 85 L60 85 L60 95 L20 95 Z" stroke="#334155" strokeWidth="2" fill="#f1f5f9" strokeLinejoin="round"/>
          <circle cx="25" cy="55" r="2.5" fill="#1e293b"/>
          <circle cx="25" cy="65" r="2.5" fill="#1e293b"/>
          <circle cx="25" cy="75" r="2.5" fill="#1e293b"/>
          <circle cx="40" cy="90" r="2.5" fill="#1e293b"/>
          <circle cx="50" cy="90" r="2.5" fill="#1e293b"/>
        </svg>
      )
    }
  ];

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

      {/* WHAT WE MANUFACTURE - COMPREHENSIVE PRODUCT SHOWCASE */}
      <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
        {/* Abstract Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/40 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase mb-4 rounded-full border border-blue-100 shadow-sm">
              <span className="w-2 h-2 bg-blue-600 block rounded-full" />
              Precision Engineering
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Manufacturing Capabilities</h3>
            <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Highly descriptive and detailed views of our complete range of steel sections, designed specifically for advanced solar structure applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {detailedProducts.map((product, index) => (
              <div key={index} className="flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden relative group transition-all duration-300">
                
                {/* Visuals Feature */}
                <div className="w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-100/50 relative h-48 sm:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="w-full h-[120%] flex flex-col items-center justify-center relative">
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-6 bg-black/15 blur-[12px] rounded-full scale-y-50 group-hover:w-56 transition-all duration-500 z-0" />
                    {product.icon}
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 p-5 sm:p-6 relative bg-white">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-2 tracking-tight">{product.title}</h4>
                    <p className="hidden md:block text-[13px] text-slate-500 font-medium mb-5 leading-relaxed flex-1">{product.desc}</p>
                    
                    <div className="flex flex-col gap-2 pt-4 border-t border-slate-100 mt-auto">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex justify-between items-end border-b border-slate-50 last:border-0 pb-1.5 last:pb-0">
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{spec.label}</p>
                          <p className="text-xs font-bold text-slate-800 text-right">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 md:py-32 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase mb-4 rounded-full shadow-sm border border-blue-50">
              <span className="w-2 h-2 bg-blue-600 block rounded-full" />
              Target Markets
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Industries We Serve</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Factory, title: 'Solar Structure Manufacturers', desc: 'Primary focus on solar mounting system fabricators with exact precision.' },
              { icon: Users, title: 'Solar EPC Companies', desc: 'Engineering, procurement, and construction partners for large solar farms.' },
              { icon: Zap, title: 'Fabricators', desc: 'Custom steel fabrication and ready-to-assemble units.' },
              { icon: Shield, title: 'Infrastructure', desc: 'Large-scale industrial, railway, and telecom infrastructure projects.' }
            ].map((industry, index) => (
              <div key={index} className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 hover:border-blue-500/30 transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-blue-600 transition-colors duration-500" />
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <industry.icon className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors duration-500 relative z-10" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{industry.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-32 px-6 bg-[#0f172a] relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-[300px] -left-[300px] w-[800px] h-[800px] bg-blue-900/40 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-blue-400 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Competitive Edge</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Why Choose Us</h3>
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Our commitment to quality, speed, and precision gives you a significant advantage in the competitive solar market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: 'Fast Delivery', desc: 'Quick turnaround time with efficient production scheduling and nationwide logistics.' },
              { icon: Ruler, title: 'Custom Sections', desc: 'Manufacture profiles as per your specific CAD drawings with extreme precision.' },
              { icon: Target, title: 'High Precision', desc: 'Advanced roll forming technology with tight tolerances and strict QC checks.' },
              { icon: Box, title: 'Bulk Capacity', desc: 'Large mass-scale production capability for mega solar project requirements.' },
              { icon: CreditCard, title: 'Cost Effective', desc: 'Highly competitive pricing structure without compromising on quality or timelines.' },
              { icon: Scissors, title: 'Precision Punching', desc: 'In-line automated CNC punching and notching for ready-to-assemble parts.' }
            ].map((feature, index) => (
              <div key={index} className="group p-8 bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:bg-slate-800/80 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] transform hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900/50 border border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <feature.icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors relative z-10" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* OUR PROCESS: A TO Z */}
      <section className="py-20 md:py-32 px-6 bg-[#f8fafc] border-y border-slate-100 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-50 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase mb-4 rounded-full shadow-sm border border-blue-100">
              <span className="w-2 h-2 bg-blue-600 block rounded-full" />
              A to Z Work Flow
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">Our Manufacturing Process</h3>
            <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              From raw coils to ready-to-assemble dispatched units. Total in-house quality control at every phase.
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting Line Desktop */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
              {[
                { icon: Layers, step: '01', title: 'Raw Material', desc: 'High-grade steel coil verification & slitting process.' },
                { icon: Cog, step: '02', title: 'Roll Forming', desc: 'Precision continuous 3D contour shaping machinery.' },
                { icon: Scissors, step: '03', title: 'Punching', desc: 'Computer-controlled precision notching and holes.' },
                { icon: ClipboardCheck, step: '04', title: 'Quality QA', desc: 'Stringent micrometric dimension and finish checks.' },
                { icon: Truck, step: '05', title: 'Dispatch', desc: 'Secure packaging and fast pan-India logistics.' }
              ].map((process, index) => (
                <div key={index} className="relative group text-center">
                  <div className="w-32 h-32 mx-auto bg-white rounded-full border-[8px] border-[#f8fafc] shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-500 group-hover:border-blue-50 group-hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] z-10">
                    <process.icon className="w-12 h-12 text-slate-400 group-hover:text-blue-600 transition-colors duration-500" strokeWidth={1.2} />
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-600 text-white font-black rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      {process.step}
                    </div>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{process.title}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[200px] mx-auto">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / CLIENT SECTION */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="pt-8 md:pt-0 group px-6">
              <div className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-500 transform-gpu">20+</div>
              <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-sm">States Served</p>
            </div>
            <div className="pt-8 md:pt-0 group px-6">
              <div className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-500 transform-gpu">500+</div>
              <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-sm">Solar Projects Powered</p>
            </div>
            <div className="pt-8 md:pt-0 group px-6">
              <div className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-500 transform-gpu">10+</div>
              <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-sm">Years of Engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* STRONG CALL TO ACTION */}
      <section className="py-24 md:py-32 px-6 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="absolute -top-[400px] -right-[200px] w-[800px] h-[800px] bg-blue-400/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
            Ready to Power Your Solar Projects?
          </h2>
          <p className="text-xl text-blue-100 font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
            Get competitive quotes, fast delivery, and custom solutions for your solar structure requirements. Contact our engineering team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918154935437" 
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-blue-600 font-black uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] rounded-full"
            >
              <Phone className="w-5 h-5" />
              Request Quote
            </a>
            <a 
              href="https://wa.me/918154935437?text=Hello,%20I%20am%20interested%20in%20solar%20structure%20components" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-green-500 text-white font-black uppercase tracking-widest text-sm hover:bg-green-400 hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] rounded-full"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-transparent text-white border-2 border-white/50 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 rounded-full"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Contact Us</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group text-center p-10 bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-200 rounded-[2rem] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.1)] hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                <MapPin className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Location</h4>
              <p className="text-slate-500 font-medium">Ahmedabad, Gujarat, India</p>
            </div>
            
            <div className="group text-center p-10 bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-200 rounded-[2rem] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.1)] hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                <Phone className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Call Now</h4>
              <a href="tel:+918154935437" className="text-slate-500 font-medium hover:text-blue-600 transition-colors text-lg">
                +91 81549 35437
              </a>
            </div>
            
            <div className="group text-center p-10 bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-200 rounded-[2rem] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.1)] hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                <MessageCircle className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">WhatsApp</h4>
              <a 
                href="https://wa.me/918154935437" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 font-medium hover:text-green-500 transition-colors text-lg"
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
