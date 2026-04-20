import React from 'react';

export const CATEGORY_CONTENT = {
  'roll-forming': {
    applications: [
      { 
        title: 'Structural Purlins', 
        desc: 'Heavy-duty C and Z purlins for pre-engineered steel buildings (PEB).',
        image: '/images/structural_purlins.png'
      },
      { 
        title: 'Roofing & Cladding', 
        desc: 'Precision trapezoidal and corrugated sheets for industrial warehouses.',
        image: '/images/roofing_cladding.png'
      },
      { 
        title: 'Elevator Sections', 
        desc: 'High-precision door frames and headers for global elevator OEMs.',
        image: '/images/elevator_sections.png'
      },
      { 
        title: 'Electrical Railings', 
        desc: 'Standardized MCB channels and DIN rails for power distribution.',
        image: '/images/electrical_railings.png'
      },
      { 
        title: 'Automotive Frames', 
        desc: 'Custom rolled sections for chassis and heavy vehicle infrastructure.',
        image: '/images/automotive_frames.png'
      },
      { 
        title: 'Storage Silos', 
        desc: 'Curved corrugated panels for agricultural and liquid storage tanks.',
        image: '/images/storage_silos.png'
      }
    ],
    facility: {
      location: 'Ahmedabad, Gujarat',
      size: '25,000+ sq. ft. Hub',
      equipment: ['CNC Machining Centers', 'Hardened Roller Grinding Shop', 'PLC Testing Bay', 'Precision Assembly Line'],
      description: 'Our state-of-the-art facility in Ahmedabad is equipped with advanced CNC technology to ensure roller precision within 0.05mm tolerances.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
    },
    subsections: [
      { 
        title: 'C Channels', icon: 'metric', 
        customSvg: (
          <svg viewBox="0 0 120 120" className="w-full h-full max-w-[350px] group-hover:scale-[1.15] transition-transform duration-700 drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M65 25 L50 25 L50 75 L65 75 L65 65 L58 65 L58 35 L65 35 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1"/>
            <path d="M65 25 L45 45 M50 25 L30 45 M50 75 L30 95 M65 75 L45 95 M65 65 L45 85 M58 65 L38 85 M58 35 L38 55 M65 35 L45 55" stroke="#64748b" strokeWidth="1.5"/>
            <path d="M45 45 L30 45 L30 95 L45 95 L45 85 L38 85 L38 55 L45 55 Z" stroke="#334155" strokeWidth="2" fill="#f1f5f9" strokeLinejoin="round"/>
          </svg>
        )
      },
      { 
        title: 'Z Purlins', icon: 'metric', 
        customSvg: (
          <svg viewBox="0 0 120 120" className="w-full h-full max-w-[350px] group-hover:scale-[1.15] transition-transform duration-700 drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 25 L65 25 L65 35 L50 35 L50 65 L70 65 L70 75 L40 75 L40 65 L42 65 L42 35 L40 35 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1"/>
            <path d="M40 25 L20 45 M65 25 L45 45 M65 35 L45 55 M50 35 L30 55 M50 65 L30 85 M70 65 L50 85 M70 75 L50 95 M40 75 L20 95 M40 65 L20 85 M42 65 L22 85 M42 35 L22 55" stroke="#64748b" strokeWidth="1.5"/>
            <path d="M20 45 L45 45 L45 55 L30 55 L30 85 L50 85 L50 95 L20 95 L20 85 L22 85 L22 55 L20 55 Z" stroke="#334155" strokeWidth="2" fill="#f1f5f9" strokeLinejoin="round"/>
          </svg>
        )
      },
      { 
        title: 'Solar Mounting Rails', icon: 'solar', 
        customSvg: (
          <svg viewBox="0 0 120 120" className="w-full h-full max-w-[350px] group-hover:scale-[1.15] transition-transform duration-700 drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 25 L75 25 L75 35 L50 35 L50 45 L65 45 L65 55 L50 55 L50 75 L75 75 L75 85 L40 85 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1"/>
            <path d="M40 25 L20 45 M75 25 L55 45 M75 35 L55 55 M50 35 L30 55 M50 45 L30 65 M65 45 L45 65 M65 55 L45 75 M50 55 L30 75 M50 75 L30 95 M75 75 L55 95 M75 85 L55 105 M40 85 L20 105" stroke="#64748b" strokeWidth="1.5"/>
            <path d="M20 45 L55 45 L55 55 L30 55 L30 65 L45 65 L45 75 L30 75 L30 95 L55 95 L55 105 L20 105 Z" stroke="#334155" strokeWidth="2" fill="#f1f5f9" strokeLinejoin="round"/>
          </svg>
        )
      },
      { 
        title: 'Strut Channels', icon: 'structural', 
        customSvg: (
          <svg viewBox="0 0 120 120" className="w-full h-full max-w-[350px] group-hover:scale-[1.15] transition-transform duration-700 drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 75 L45 75 L45 35 L65 35 L65 75 L85 75 L85 85 L25 85 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1"/>
            <path d="M25 75 L10 90 M45 75 L30 90 M45 35 L30 50 M65 35 L50 50 M65 75 L50 90 M85 75 L70 90 M85 85 L70 100 M25 85 L10 100" stroke="#64748b" strokeWidth="1.5"/>
            <path d="M10 90 L30 90 L30 50 L50 50 L50 90 L70 90 L70 100 L10 100 Z" stroke="#334155" strokeWidth="2" fill="#f1f5f9" strokeLinejoin="round"/>
          </svg>
        )
      },
      { 
        title: 'Custom Roll Formed Sections', icon: 'custom', 
        customSvg: (
          <svg viewBox="0 0 120 120" className="w-full h-full max-w-[350px] group-hover:scale-[1.15] transition-transform duration-700 drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 25 L75 25 L65 40 L50 40 L50 70 L75 70 L75 80 L40 80 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1"/>
            <path d="M40 25 L20 45 M75 25 L55 45 M65 40 L45 60 M50 40 L30 60 M50 70 L30 90 M75 70 L55 90 M75 80 L55 100 M40 80 L20 100" stroke="#64748b" strokeWidth="1.5"/>
            <path d="M20 45 L55 45 L45 60 L30 60 L30 90 L55 90 L55 100 L20 100 Z" stroke="#334155" strokeWidth="2" fill="#f1f5f9" strokeLinejoin="round"/>
          </svg>
        )
      }
    ],
    quality: [
      { label: 'Raw Material', value: 'High-Grade Tool Steel (HCHCR)' },
      { label: 'Processing', value: 'Hardened to 58-62 HRC' },
      { label: 'Testing', value: '100-Hour Continuous Run Test' },
      { label: 'Standard', value: 'ISO 9001:2015 Compliant' }
    ],
    faqs: [
      { q: 'What is the maximum thickness your machines can handle?', a: 'Our heavy-duty purlin machines can handle up to 4.0mm GI/MS sheet thickness.' },
      { q: 'Do you provide on-site commissioning?', a: 'Yes, our engineering team provides full on-site installation, commissioning, and operator training.' },
      { q: 'Can the profiles be customized?', a: 'Absolutely. We specialize in custom-profile engineering based on your technical drawings.' }
    ],
    industries: ['Construction', 'Renewable Energy', 'Automotive', 'Real Estate', 'Logistics']
  },
  'solar': {
    applications: [
      { 
        title: 'Rooftop Mounts', 
        desc: 'Lightweight and durable galvanized structures for residential solar.',
        image: 'https://images.unsplash.com/photo-1508514177221-18d1ad645e7f?auto=format&fit=crop&q=80&w=800'
      },
      { 
        title: 'Solar Farms', 
        desc: 'Large-scale mounting systems for ground-mount utility projects.',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800'
      },
      { 
        title: 'Panel Frames', 
        desc: 'Precision-rolled frames for solar panel encapsulation and support.',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800'
      },
      { 
        title: 'Tracker Rails', 
        desc: 'High-tolerance rails for solar tracking systems and actuators.',
        image: 'https://images.unsplash.com/photo-1466611653911-95281773ad90?auto=format&fit=crop&q=80&w=800'
      }
    ],
    facility: {
      location: 'Ahmedabad - Specialized Solar Unit',
      size: '15,000 sq. ft.',
      equipment: ['Multi-Station Forming Line', 'High-Speed Perforation Press', 'Galvanization Testing'],
      description: 'Dedicated production line for high-volume solar mounting structures with automated hole-punching capabilities.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200'
    },
    subsections: [
      { title: 'Solar Mounting Rails', icon: 'solar', image: 'https://images.unsplash.com/photo-1508514177221-18d1ad645e7f?auto=format&fit=crop&q=80&w=800' },
      { title: 'Mounting Brackets', icon: 'structural', image: 'https://images.unsplash.com/photo-1621905252507-b354bcadc0e9?auto=format&fit=crop&q=80&w=500' }, // roofing used as ref
      { title: 'Panel Frame Machinery', icon: 'metric', image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800' }
    ],
    quality: [
      { label: 'Coating', value: 'Hot-Dip Galvanized / Pre-Galvanized' },
      { label: 'Wind Load', value: 'Certified up to 180 km/h' },
      { label: 'Lifespan', value: '25-Year Corrosion Resistance' }
    ],
    faqs: [
      { q: 'What material is best for solar structures?', a: 'We highly recommend Hot-Dip Galvanized or high-grade Zinc-Aluminium coated steel for maximum longevity.' },
      { q: 'Are your designs certified for wind loads?', a: 'Yes, our structures are engineered to withstand extreme wind conditions common in coastal and open-field zones.' }
    ],
    industries: ['Solar Energy', 'Electric Vehicle (EV) Infrastructure', 'Off-grid Housing']
  },
  'shutter-motors': {
    applications: [
      { 
        title: 'Industrial Warehouses', 
        desc: 'High-torque motors for massive warehouse entrance shutters.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
      },
      { 
        title: 'Retail Showrooms', 
        desc: 'Quiet and reliable automation for commercial storefronts.',
        image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800'
      },
      { 
        title: 'Garage Automation', 
        desc: 'Compact single-phase motors for residential garage doors.',
        image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&q=80&w=800'
      }
    ],
    facility: {
      location: 'Ahmedabad',
      size: '10,000 sq. ft.',
      equipment: ['Torque Testing Rig', 'Noise Measurement Chamber', 'Electric Safety Lab'],
      description: 'Our motor testing facility ensures every unit meets rigorous torque and thermal protection standards before dispatch.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
    },
    subsections: [
      { title: 'Single Phase Side Motors', icon: 'electric' },
      { title: 'High Torque Geared Motors', icon: 'gear' },
      { title: 'Remote Control Systems', icon: 'remote' }
    ],
    quality: [
      { label: 'Protection', value: 'IP44 Weather Resistance' },
      { label: 'Safety', value: 'Overload Thermal Cut-off' },
      { label: 'Duty Cycle', value: 'Industrial Grade - S2 Standard' }
    ],
    faqs: [
      { q: 'Can these motors be operated during power failures?', a: 'Yes, all our motors come with a manual chain override system for manual operation.' },
      { q: 'How do I choose the right motor capacity?', a: 'Motor capacity depends on the weight and width of your shutter. Our experts can calculate this for you.' }
    ],
    industries: ['Warehousing', 'Retail', 'Residential Automation', 'Industrial Safety']
  },
  'motor-accessories': {
    applications: [
      { 
        title: 'Wireless Operation', 
        desc: 'Long-range remotes for heavy industrial shutters.',
        image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800'
      },
      { 
        title: 'Smart Phone Access', 
        desc: 'IoT-enabled keypads controlled via mobile app.',
        image: 'https://images.unsplash.com/photo-1558385554-4fb9401dd484?auto=format&fit=crop&q=80&w=800'
      },
      { 
        title: 'Factory Automation', 
        desc: 'Industrial-grade push button stations.',
        image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=800'
      },
      { 
        title: 'Secure Access', 
        desc: 'Physical key-selector switches for high security.',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800'
      }
    ],
    facility: {
      location: 'Electronics & Controllers Lab',
      size: 'Specialized Lab',
      equipment: ['Signal Range Tester', 'IoT Calibration Bay', 'Water Resistance Chamber'],
      description: 'Our electronics division constantly innovates to provide the most secure and long-reaching remote controllers for the industrial automation space.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
    },
    subsections: [
      { title: 'Smart Controllers', icon: 'electric' },
      { title: 'Remote Systems', icon: 'remote' }
    ],
    quality: [
      { label: 'Technology', value: 'Smart IoT / High-Range RF' },
      { label: 'Security', value: 'Encrypted Signals' },
      { label: 'Integration', value: 'Plug & Play with SGI Motors' }
    ],
    faqs: [
      { q: 'Can I connect the smart keypad to my existing shutter?', a: 'Yes, our controllers integrate smoothly with almost any standard AC shutter motor.' },
      { q: 'Is the remote range sufficient for large factories?', a: 'Our remotes feature long-range RF receivers specifically tuned for large industrial spaces.' }
    ],
    industries: ['Smart Warehousing', 'Security Control', 'Home Automation', 'Retail']
  }
};
