import { useEffect } from 'react'
import logo from '../assets/SGI logo.png'
import IndiaNetworkMap from '../components/IndiaNetworkMap'
import { PricingCard } from '../components/blocks/pricing-card'
import SEO from '../components/SEO'
import { SEO_CONFIG, getBreadcrumbSchema } from '../data/seoConfig'

export default function About() {
  const seo = SEO_CONFIG.pages.about

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        schemas={[
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About Us', url: '/about' },
          ]),
        ]}
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">Shree Gayatri Industries</h1>
          <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed italic">
            "Delivering Precision-Engineered Industrial Solutions Since 2007"
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-32">
          <div className="animate-fadeup">
            <h2 className="text-blue-600 text-[9px] md:text-[11px] font-black tracking-[0.2em] uppercase mb-4">Company Profile</h2>
            <h3 className="text-xl md:text-3xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">Industrial Excellence in Ahmedabad</h3>
            <div className="space-y-4 md:space-y-6 text-slate-600 text-sm md:text-base font-medium leading-[1.6] md:leading-[1.8] text-justify">
              <p>
                <strong>Shree Gayatri Industries</strong> was incepted in 2007, in Ahmedabad, Gujarat, India. Our expertise lies in the manufacturing and supply of Wire Stripping Machines, Hydraulic C Frame Machines, Roofing Sheet Machines, Elevator Door Section Machines, Crimping Machines, and more.
              </p>
              <p>
                In order to fully satisfy our clients, we offer these goods and services in a variety of specifications. Additionally, the prompt delivery of these products is ensured by our robust support network.
              </p>
              <p>
                Under the strategic direction of <strong>Mr. Ketan Dodiya (CEO & Proprietor)</strong>, we have greatly expanded our clientele within the nation, maintaining a reputation for reliability and engineering precision.
              </p>
            </div>
            
            <div className="mt-6 md:mt-10">
              <div className="inline-flex px-4 py-2 md:px-8 md:py-4 bg-slate-50 rounded-xl md:rounded-2xl border border-slate-100 items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[10px] md:text-xs uppercase">
                  KD
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">CEO & Proprietor</p>
                  <p className="text-sm md:text-base font-black text-slate-900 tracking-tight">Mr. Ketan Dodiya</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative animate-fadeup animation-delay-200">
             <div className="aspect-square bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 p-6 md:p-12 flex items-center justify-center shadow-xl group">
                <img src={logo} alt="Shree Gayatri Industries" className="w-full opacity-80 group-hover:scale-105 transition-transform duration-700 contrast-125" />
                <div className="absolute inset-x-4 md:inset-x-8 inset-y-4 md:inset-y-8 border-2 border-dashed border-blue-200 rounded-2xl md:rounded-3xl pointer-events-none" />
             </div>
          </div>
        </div>

        {/* Corporate Identity Card */}
        <div className="mb-16 md:mb-32">
          <PricingCard
            title="Shree Gayatri Industries"
            description="Official industrial credentials and management profile of Shree Gayatri Industries."
            price="24BDMPM9420Q1ZV"
            features={[
              {
                title: "Business Logistics",
                items: [
                  { label: "Nature of Business", value: "Manufacturer, Supplier" },
                  { label: "Location", value: "Ahmedabad, Gujarat, India" },
                  { label: "Establishment", value: "2007" },
                  { label: "Market Reach", value: "Pan-India Coverage" },
                ],
              },
              {
                title: "Management Profile",
                items: [
                  { label: "Lead Executive", value: "Mr. Ketan Dodiya" },
                  { label: "Role", value: "CEO & Proprietor" },
                  { label: "Direct Inquiries", value: "+91 98254 35437" },
                  { label: "Compliance", value: "Standard Industrial Movers" },
                ],
              },
            ]}
            buttonText="Verify Credentials"
            onButtonClick={() => window.open('https://services.gst.gov.in/services/searchtp', '_blank')}
          />
        </div>

        {/* Values Grid */}
        <div className="bg-[#f8fafc] rounded-sm p-6 md:p-12 lg:p-20 border border-slate-100">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-blue-600 text-[9px] md:text-[11px] font-black tracking-[0.2em] uppercase mb-4">Our Core Values</h2>
            <p className="text-xl md:text-3xl font-black text-slate-900">The Principles We Build On</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
             {[
               { title: 'Quality First', desc: 'No compromises on structural integrity. We use tested raw materials and premium components from brands like Delta, Mitsubishi, and Schneider.' },
               { title: 'Customer Success', desc: 'Our relationship starts after delivery. We offer localized support, commissioning, and training for your production teams.' },
               { title: 'Innovation', desc: 'Continuous R&D in profile engineering allows us to deliver machines that reduce wastage and increase productivity.' },
             ].map((v, i) => (
               <div key={i} className="bg-white p-4 md:p-8 rounded-sm shadow-xl shadow-slate-200/50 border border-slate-100">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-blue-600 text-white flex items-center justify-center text-lg md:text-xl font-bold mb-4 md:mb-6">
                    {i+1}
                 </div>
                <h4 className="text-lg md:text-xl font-black text-slate-900 mb-2 md:mb-3 tracking-tight">{v.title}</h4>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: National Network & Map */}
        <div className="mt-16 md:mt-32 w-full bg-[#f8fafc] py-12 md:py-24 px-4 md:px-6 border-y border-slate-100">
           <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                 <div>
                    <h2 className="text-blue-600 text-[9px] md:text-[11px] font-black tracking-[0.2em] uppercase mb-4">Industrial Coverage</h2>
                    <p className="text-xl md:text-3xl font-black text-slate-900 mb-4 md:mb-8 tracking-tight">Expanding National Footprint</p>
                    <div className="space-y-4 md:space-y-6 text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                       <p>With over 1000+ installations, Shree Gayatri Industries machines are currently operational in over 20+ Indian states. We have built 25+ primary delivery hubs to ensure rapid support.</p>
                       <div className="grid grid-cols-2 gap-4 md:gap-8 pt-4 md:pt-8">
                          <div>
                             <p className="text-[9px] md:text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">States Served</p>
                             <p className="text-xl md:text-2xl font-black text-slate-900 leading-none">20+</p>
                          </div>
                          <div>
                             <p className="text-[9px] md:text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Delivery Hubs</p>
                             <p className="text-xl md:text-2xl font-black text-slate-900 leading-none">25+</p>
                          </div>
                       </div>
                       <div className="pt-4 md:pt-8 space-y-2">
                           <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Support Nodes</p>
                           <p className="text-xs md:text-sm font-bold text-slate-900 uppercase tracking-tight">Ahmedabad • Mumbai • Delhi • Bangalore • Chennai</p>
                       </div>
                    </div>
                 </div>
                 <div className="bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40">
                    <IndiaNetworkMap />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
