import { useEffect } from 'react'
import logo from '../assets/SGI logo.png'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Engineering Industrial Excellence</h1>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            Since 2005, Shree Gayatri Industries (SGI) has been at the forefront of roll forming technology, delivering precision-engineered solutions across India.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="animate-fadeup">
            <h2 className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Our Legacy</h2>
            <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight">Founded on Trust & Transparency</h3>
            <p className="text-slate-600 font-medium leading-[1.8] mb-6">
              Shree Gayatri Industries was established in Ahmedabad with a singular vision: to bridge the gap between complex engineering needs and reliable manufacturing throughput. What started as a specialized workshop has evolved into a state-of-the-art facility serving global-grade infrastructure projects.
            </p>
            <p className="text-slate-600 font-medium leading-[1.8]">
              We specialize in the design, development, and fabrication of advanced Roll Forming Machines, Shutter Motors, and Custom Industrial Tooling. Our commitment to using high-grade materials and cutting-edge PLC automation ensures that every SGI machine is built to last.
            </p>
          </div>
          <div className="relative animate-fadeup animation-delay-200">
             <div className="aspect-square bg-slate-50 rounded-[4rem] border border-slate-100 p-12 flex items-center justify-center shadow-2xl shadow-blue-900/5 group">
                <img src={logo} alt="SGI About" className="w-full opacity-80 group-hover:scale-105 transition-transform duration-700 blur-[2px] group-hover:blur-0" />
                <div className="absolute inset-x-12 inset-y-12 border-2 border-dashed border-blue-200 rounded-[3rem] pointer-events-none" />
             </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="bg-[#f8fafc] rounded-[4rem] p-12 lg:p-20 border border-slate-100">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">Our Core Values</h2>
            <p className="text-3xl font-black text-slate-900">The Principles We Build On</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Quality First', desc: 'No compromises on structural integrity. We use tested raw materials and premium components from brands like Delta, Mitsubishi, and Schneider.' },
              { title: 'Customer Success', desc: 'Our relationship starts after delivery. We offer localized support, commissioning, and training for your production teams.' },
              { title: 'Innovation', desc: 'Continuous R&D in profile engineering allows us to deliver machines that reduce wastage and increase productivity.' },
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-6">
                   {i+1}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{v.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trade Info Section */}
        <div className="mt-32 border-t border-slate-100 pt-20">
           <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                 <h4 className="text-[11px] font-black text-blue-600 uppercase tracking-widest mb-6">Trade Information</h4>
                 <div className="space-y-4">
                    {[
                       { label: 'Year of Est.', value: '2005' },
                       { label: 'Business Type', value: 'Manufacturer & Exporter' },
                       { label: 'No. of Employees', value: '25-30 Professionals' },
                       { label: 'Standard Compliance', value: 'ISO 9001:2015' },
                    ].map((item, i) => (
                       <div key={i} className="flex justify-between border-b border-slate-50 py-3">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.label}</span>
                          <span className="text-sm font-black text-slate-800">{item.value}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="bg-blue-600 p-10 rounded-[2.5rem] shadow-2xl shadow-blue-200">
                 <h4 className="text-[11px] font-black text-white/60 uppercase tracking-widest mb-6">Global Reach</h4>
                 <p className="text-white text-lg font-bold mb-6 leading-relaxed">
                    SGI machines are currently operational in over 20+ Indian states and we have a growing export presence in Southeast Asia.
                 </p>
                 <div className="flex flex-wrap gap-2">
                    {['Gujarat', 'Maharashtra', 'Tamil Nadu', 'Karnataka', 'Rajasthan', 'Uttar Pradesh', 'Nepal', 'Bangladesh'].map((loc, i) => (
                       <span key={i} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] uppercase font-black tracking-widest">
                          {loc}
                       </span>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
