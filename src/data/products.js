import machineVector from '../assets/machine_vector.png'

// Import new Motor & Accessory Images
import shutterMotorImg from '../assets/shutter_motor.png'
import remoteControllerImg from '../assets/remote_controller.jpeg'
import keySelectorImg from '../assets/key_selector.jpg'
import pushButtonImg from '../assets/push_button.png'
import ezrunControllerImg from '../assets/ezrun_controller.jpeg'

const BASE = 'https://5.imimg.com/data5'

export const PRODUCT_IMAGES = {
  'rolling-shutter-guide':   `${BASE}/SELLER/Default/2021/3/GO/ZH/MG/10097291/rolling-shutter-guide-machine-500x500.jpg`,
  'corrugated-sheet':        `${BASE}/SELLER/Default/2021/3/UY/XH/US/10097291/corrugated-sheet-roll-forming-machine-500x500.jpg`,
  'c-purlin':                `${BASE}/ECOM/Default/2023/10/356394154/ST/YJ/RE/10097291/whatsappimage2023-10-09at1-31-01pm-500x500.jpg`,
  'auto-shutter-patti':      `${BASE}/ANDROID/Default/2021/3/TQ/RS/LS/10097291/product-500x500.jpg`,
  'elevator-door':           `${BASE}/SELLER/Default/2022/3/KS/SM/SX/10097291/elevator-door-section-machine-500x500.jpg`,
  'corrugated-silo':         `${BASE}/ANDROID/Default/2021/3/KE/XG/YB/10097291/product-500x500.jpg`,
  'c-channel':               `${BASE}/SELLER/Default/2021/3/MF/MA/TX/10097291/c-channel-roll-forming-machine-500x500.jpg`,
  'customised':              `${BASE}/SELLER/Default/2021/3/WO/OD/QR/10097291/customised-roll-forming-machine-500x500.jpg`,
  'mcb-channel-machine':     `${BASE}/SELLER/Default/2021/3/AW/KU/DG/10097291/mcb-channel-roll-forming-machine-500x500.jpg`,
  'din-rail':                `${BASE}/SELLER/Default/2022/2/SO/PJ/RO/10097291/din-rail-channel-machines-500x500.jpg`,
  'ladder-strip':            `${BASE}/SELLER/Default/2021/3/JH/VX/ZM/10097291/ladder-strip-roll-forming-machine-500x500.jpg`,
  'metal-door-frame':        `${BASE}/SELLER/Default/2021/3/BR/VT/BY/10097291/metal-door-frame-roll-forming-machine-500x500.jpg`,
  'roofing-sheet':           `${BASE}/SELLER/Default/2021/3/RP/MT/PQ/10097291/automatic-roofing-sheet-machine-500x500.jpg`,
  'elevator-header':         `${BASE}/SELLER/Default/2022/2/YF/IN/SN/10097291/cold-rollformed-metal-header-track-for-elevator-500x500.jpg`,
  'roofing-crimping':        `${BASE}/SELLER/Default/2021/3/AB/CB/LV/10097291/roofing-sheets-crimping-machine-500x500.jpg`,

  // New Motors & Accessories
  'single-phase-motor':      shutterMotorImg,
  'three-phase-motor':       shutterMotorImg,
  'remote-controller':       remoteControllerImg,
  'key-lock-controller':     keySelectorImg,
  'push-buttons':            pushButtonImg,
  'keypad-controller':       ezrunControllerImg
}

export const PLACEHOLDER = machineVector

export const CATEGORIES = [
  { id: 'shutter-motors', label: 'Motors',  icon: '⚡',  color: '#1e3a8a' },
  { id: 'motor-accessories', label: 'Motor Accessories', icon: '🎛️', color: '#1e40af' },
  { id: 'roll-forming',   label: 'Roll Forming Machines', icon: '⚙️',  color: '#1e40af' },
  { id: 'mcb-channel',    label: 'MCB Channel Machines',  icon: '🔌',  color: '#1e3a5f' },
  { id: 'special',        label: 'Special Machines',      icon: '🏭',  color: '#172554' },
]

export const PRODUCTS = [
  // ─── MOTORS & ACCESSORIES ──────────────────────────────────────────
  {
    id: 'single-phase-motor',
    slug: 'single-phase-rolling-shutter-motor',
    category: 'shutter-motors',
    name: 'Single Phase Rolling Shutter Gear Motor',
    tagline: 'High-efficiency motor for rolling shutters',
    badge: 'Popular',
    image: PRODUCT_IMAGES['single-phase-motor'],
    description: 'Reliable and efficient single-phase rolling Rolling Shutter Gear Motor. Perfect for standard commercial and residential rolling shutters. Built with robust materials for extended lifespan.',
    specs: [
      { label: 'Capacity', value: '750 kg.' },
      { label: 'Supply Input', value: '230 V (Single phase)' },
      { label: 'Output Speed', value: '42 rpm' },
      { label: 'Motor Speed', value: '1440 rpm' },
      { label: 'Motor HP', value: '½' },
      { label: 'Operating Speed', value: '7.5 ft/m' },
      { label: 'IP Rating', value: 'IP 44' },
      { label: 'Temperature Alert', value: 'Above 130⁰c Motor Will Trip Down' },
      { label: 'Max Height', value: '25 Ft' },
      { label: 'Limit Control Type', value: 'Limit Switch' },
      { label: 'Body Material', value: 'Aluminium' },
      { label: 'Lubrication', value: 'Gear Box Internal Greasing' },
      { label: 'Attachment', value: 'Handle, Key Selector or Push Button' },
      { label: 'Extra Payable Attachment', value: 'Remote Control' },
      { label: 'Extra Payable Operating', value: 'Double Side Operate' },
    ],
    features: ['High durability', 'Compact size', 'Low noise operation', 'Easy installation']
  },
  {
    id: 'three-phase-motor',
    slug: 'three-phase-rolling-shutter-motor',
    category: 'shutter-motors',
    name: 'Three Phase Rolling Shutter Gear Motor',
    tagline: 'Heavy-duty industrial motor',
    badge: 'Heavy Duty',
    image: PRODUCT_IMAGES['three-phase-motor'],
    description: 'Powerful three-phase motor designed for large industrial and heavy commercial rolling shutters. Delivers superior torque and continuous operational capacity.',
    specs: [
      { label: 'Capacity', value: '1500 kg.' },
      { label: 'Supply Input', value: '440 V (Three Phase)' },
      { label: 'Output Speed', value: '42 rpm' },
      { label: 'Motor Speed', value: '1440 rpm' },
      { label: 'Motor HP', value: '½' },
      { label: 'Operating Speed', value: '7.5 ft/m' },
      { label: 'IP Rating', value: 'IP 44' },
      { label: 'Temperature Alert', value: 'Above 130⁰c Motor Will Trip Down' },
      { label: 'Max Height', value: '25 Ft' },
      { label: 'Limit Control Type', value: 'Limit Switch' },
      { label: 'Body Material', value: 'Aluminium' },
      { label: 'Lubrication', value: 'Gear Box Internal Greasing' },
      { label: 'Attachment', value: 'Control Panel' },
      { label: 'Extra Payable Attachment', value: 'N/A' },
      { label: 'Extra Payable Operating', value: 'Double Side Operate' },
    ],
    features: ['Industrial grade', 'High torque output', 'Thermal overload protection', 'Built for heavy shutters']
  },

  // ─── ROLL FORMING MACHINES ──────────────────────────────────────────
  {
    id: 'rolling-shutter-guide',
    slug: 'rolling-shutter-guide-machine',
    category: 'roll-forming',
    name: 'Rolling Shutter Guide Machine',
    tagline: 'Semi-automatic guide rail forming for rolling shutters',
    badge: 'Best Seller',
    image: PRODUCT_IMAGES['rolling-shutter-guide'],
    description: 'Our Rolling Shutter Guide Machine is engineered for high-speed, precision roll forming of shutter guide channels. Built with heavy-duty steel frames and hardened rollers, ensuring consistent profiles with minimal material waste.',
    specs: [
      { label: 'Material', value: 'Galvanised Steel' },
      { label: 'Automatic Grade', value: 'Semi-Automatic' },
    ],
    features: ['Heavy-duty MS fabricated body', 'Automatic cutting with servo motor', 'Hardened & ground rollers']
  },
  {
    id: 'corrugated-sheet',
    slug: 'corrugated-sheet-roll-forming-machine',
    category: 'roll-forming',
    name: 'Corrugated Sheet Roll Forming Machine',
    tagline: 'Heavy-duty corrugated sheets for roofing and cladding',
    badge: '',
    image: PRODUCT_IMAGES['corrugated-sheet'],
    description: 'High-performance machine for producing corrugated metal sheets used in roofing and wall cladding. Features robust construction with precision-machined rollers for consistent corrugation profiles.',
    specs: [
      { label: 'Material', value: 'Galvanised Steel' },
      { label: 'Automatic Grade', value: 'Semi-Automatic' },
    ],
    features: ['Multiple corrugation profiles', 'Servo-controlled auto cutting', 'Precision-ground hardened rollers']
  },
  {
    id: 'c-purlin',
    slug: 'c-purlin-roll-forming-machine',
    category: 'roll-forming',
    name: 'C Purlin Roll Forming Machine',
    tagline: 'Structural C-purlins for steel frame construction',
    badge: 'Popular',
    image: PRODUCT_IMAGES['c-purlin'],
    description: 'Designed for manufacturing C-purlins for pre-engineered buildings and industrial sheds. Features PLC-controlled operation, hydraulic cutting, and adjustable profile sizes from C100–C300mm.',
    specs: [
      { label: 'Material', value: 'High-grade Steel' },
      { label: 'Control System', value: 'PLC Control' },
    ],
    features: ['Adjustable C100–C300 profiles', 'Hydraulic servo cutting', 'H-Beam welded main frame']
  },
  {
    id: 'auto-shutter-patti',
    slug: 'automatic-shutter-patti-roll-forming-machine',
    category: 'roll-forming',
    name: 'Auto Shutter Patti Roll Forming Machine',
    tagline: 'High-speed shutter lath forming for mass production',
    badge: 'Best Seller',
    image: PRODUCT_IMAGES['auto-shutter-patti'],
    description: 'Produces interlocking shutter laths (patti) at high speed with exceptional dimensional accuracy. Designed for large-scale rolling shutter manufacturers with PLC automation and automatic cut-to-length.',
    specs: [
      { label: 'Material', value: 'GI / Aluminium Sheet' },
      { label: 'Control System', value: 'HMI' },
    ],
    features: ['Auto feed & straightener', 'High-speed hydraulic cutting', 'Touch screen HMI']
  },
  {
    id: 'elevator-door',
    slug: 'elevator-door-section-machine',
    category: 'roll-forming',
    name: 'Elevator Door Section Machine',
    tagline: 'Precision door frame sections for elevator cabins',
    badge: '',
    image: PRODUCT_IMAGES['elevator-door'],
    description: 'Engineered for producing elevator door frame sections with high dimensional precision. Features hardened forming rollers ensuring burr-free edges and consistent cross-sections.',
    specs: [
      { label: 'Automatic Grade', value: 'Automatic' },
      { label: 'Control System', value: 'PLC Control' },
    ],
    features: ['Burr-free precision cutting', 'PLC-controlled', 'Servo-driven cut-to-length']
  },
  {
    id: 'corrugated-silo',
    slug: 'corrugated-silo-tank-roll-forming-machine',
    category: 'roll-forming',
    name: 'Corrugated Silo Tank Roll Forming Machine',
    tagline: 'Corrugated panels for grain silo and storage tanks',
    badge: '',
    image: PRODUCT_IMAGES['corrugated-silo'],
    description: 'Specialised machine for roll forming corrugated panels used in grain silos, water tanks, and industrial storage containers. Produces high-strength corrugated panels with precise curvature.',
    specs: [
      { label: 'Material', value: 'Galvanised Steel' },
      { label: 'Control System', value: 'HMI' },
    ],
    features: ['Arc and straight corrugation', 'Consistent profile accuracy', 'Export-quality construction']
  },
  {
    id: 'c-channel',
    slug: 'c-channel-roll-forming-machine',
    category: 'roll-forming',
    name: 'C Channel Roll Forming Machine',
    tagline: 'Standard C-channels for structural and framing use',
    badge: '',
    image: PRODUCT_IMAGES['c-channel'],
    description: 'Produces standard C-channels used in rack framing, cable trays, and structural support systems. Available in multiple sizes with auto cutting and PLC control.',
    specs: [
      { label: 'Material', value: 'Galvanised Steel' },
      { label: 'Automatic Grade', value: 'Semi-Automatic' },
    ],
    features: ['Multiple size range', 'Servo-driven auto cut', 'Precision hardened rollers']
  },
  {
    id: 'customised',
    slug: 'customised-roll-forming-machine',
    category: 'roll-forming',
    name: 'Customised Roll Forming Machine',
    tagline: 'Bespoke machines engineered to your exact profile',
    badge: 'Custom Order',
    image: PRODUCT_IMAGES['customised'],
    description: 'Fully customised roll forming machines for unique and non-standard profile requirements. Provide your cross-section drawing — our engineers design, build, and test the perfect machine.',
    specs: [
      { label: 'Profile', value: 'Any custom section' },
      { label: 'Automatic Grade', value: 'Auto / Semi-Auto' },
    ],
    features: ['Custom profile engineering', 'Full turnkey solution', 'CAD/CAM design']
  },

  // ─── MCB CHANNEL ──────────────────────────────────────────
  {
    id: 'mcb-channel-machine',
    slug: 'mcb-channel-roll-forming-machine',
    category: 'mcb-channel',
    name: 'MCB Channel Roll Forming Machine',
    tagline: 'Precision MCB mounting channels for electrical panels',
    badge: '',
    image: PRODUCT_IMAGES['mcb-channel-machine'],
    description: 'Manufactures standardised MCB mounting channels used in electrical distribution boards and control panels. High-speed operation ensures compatibility with all major MCB brands.',
    specs: [
      { label: 'Material', value: 'MS / GI Sheet' },
      { label: 'Channel Width', value: '35 mm (DIN standard)' },
    ],
    features: ['DIN 35 standard profile', 'High-speed production', 'Servo auto cutting']
  },
  {
    id: 'din-rail',
    slug: 'din-rail-channel-machines',
    category: 'mcb-channel',
    name: 'DIN Rail Channel Machine',
    tagline: 'Standard DIN rail channels for panel board manufacturing',
    badge: '',
    image: PRODUCT_IMAGES['din-rail'],
    description: 'Produces both DIN 35 and DIN 15 standard rail channels used in electrical panel construction. Manufactured with high-precision hardened rollers meeting international standards.',
    specs: [
      { label: 'Profile', value: 'DIN 35 / DIN 15' },
      { label: 'Control', value: 'PLC Automatic' },
    ],
    features: ['DIN 35 and DIN 15 profiles', 'Stainless steel option', 'Auto cut-to-length']
  },

  // ─── SPECIAL MACHINES ──────────────────────────────────────────
  {
    id: 'ladder-strip',
    slug: 'ladder-strip-roll-forming-machine',
    category: 'special',
    name: 'Ladder Strip Roll Forming Machine',
    tagline: 'Cable tray ladder strips for electrical cable management',
    badge: '',
    image: PRODUCT_IMAGES['ladder-strip'],
    description: 'Produces perforated and solid ladder strip sections used in cable tray systems for electrical cable management in industrial facilities.',
    specs: [
      { label: 'Material', value: 'MS / GI Sheet' },
      { label: 'Control', value: 'PLC Automatic' },
    ],
    features: ['Perforated & solid variants', 'Multiple width options', 'Servo-driven cut']
  },
  {
    id: 'metal-door-frame',
    slug: 'metal-door-frame-roll-forming-machine',
    category: 'special',
    name: 'Metal Door Frame Roll Forming Machine',
    tagline: 'Rolled steel door frames for commercial construction',
    badge: '',
    image: PRODUCT_IMAGES['metal-door-frame'],
    description: 'Manufactures steel door frames used in commercial and residential construction. Produces consistent profiles with precise corner angles and smooth surface finish.',
    specs: [
      { label: 'Material', value: 'MS Sheet' },
      { label: 'Automatic Grade', value: 'Automatic' },
    ],
    features: ['Consistent 90° corner angles', 'Smooth surface profile', 'Custom frame size tooling']
  },
  {
    id: 'roofing-sheet',
    slug: 'automatic-roofing-sheet-machine',
    category: 'special',
    name: 'Automatic Roofing Sheet Machine',
    tagline: 'High-speed trapezoidal and corrugated roofing sheets',
    badge: 'High Speed',
    image: PRODUCT_IMAGES['roofing-sheet'],
    description: 'Produces trapezoidal and corrugated roofing sheets at high speed for residential and industrial roofing applications. Heavy-duty construction with automatic servo cutting.',
    specs: [
      { label: 'Speed', value: '20–25 m/min' },
      { label: 'Control', value: 'PLC + Touch Screen' },
    ],
    features: ['Multiple profile options', 'High-speed servo cutting', 'Touch screen HMI']
  },
  {
    id: 'elevator-header',
    slug: 'cold-rollformed-metal-header-track-for-elevator',
    category: 'special',
    name: 'Elevator Door Header Track Machine',
    tagline: 'Cold roll-formed header tracks for elevator cabin doors',
    badge: '',
    image: PRODUCT_IMAGES['elevator-header'],
    description: 'Cold roll-formed metal header tracks used in elevator door openings. Produced with tight tolerances to ensure smooth door sliding and long service life.',
    specs: [
      { label: 'Material', value: 'MS / SS 304' },
      { label: 'Control', value: 'PLC Automatic' },
    ],
    features: ['Tight dimensional tolerances', 'Stainless steel option', 'Custom profile engineering']
  },
  {
    id: 'roofing-crimping',
    slug: 'roofing-sheets-crimping-machine',
    category: 'special',
    name: 'Roofing Sheets Crimping Machine',
    tagline: 'Crimp and curve roofing sheets with precision',
    badge: '',
    image: PRODUCT_IMAGES['roofing-crimping'],
    description: 'Used to crimp or curve metal roofing sheets to create arched or curved roof profiles. Widely used for curved industrial roofing, canopies, and architectural roof elements.',
    specs: [
      { label: 'Sheet Width', value: 'Up to 1000 mm' },
      { label: 'Radius', value: 'Adjustable' },
    ],
    features: ['Adjustable crimp radius', 'Works with pre-coated sheets', 'Low power consumption']
  },
  {
    id: 'remote-controller',
    slug: 'motor-remote-controller',
    category: 'motor-accessories',
    name: 'Remote Controller',
    tagline: 'Wireless access for your Rolling Shutter Gear Motors',
    badge: '',
    image: PRODUCT_IMAGES['remote-controller'],
    description: 'Convenient wireless remote control system compatible with our single and three-phase motors. Provides secure and long-range operational control.',
    specs: [
      { label: 'Type', value: 'Wireless Remote' },
      { label: 'Range', value: 'Long Range' },
    ],
    features: ['Secure RF communication', 'Compact remote fob', 'Easy pairing', 'Durable buttons']
  },
  {
    id: 'keypad-controller',
    slug: 'ezrun-keypad-mobile-controller',
    category: 'motor-accessories',
    name: 'Keypad Integrated mobile controller',
    tagline: 'Next-gen smart IoT internet control',
    badge: 'Smart IoT',
    image: PRODUCT_IMAGES['keypad-controller'],
    externalLink: 'https://www.ezrun.in/product/shutter',
    description: 'EzRun Smart Keypad Controller. Integrate your rolling shutter into a modern smart building ecosystem. Control directly via mobile app from anywhere in the world.',
    specs: [
      { label: 'Connectivity', value: 'WiFi / Internet' },
      { label: 'Features', value: 'Mobile App Control' },
    ],
    features: ['EzRun App Integration', 'Global remote access', 'Pin code access', 'Access Logs']
  },
  {
    id: 'key-lock-controller',
    slug: 'key-lock-selector',
    category: 'motor-accessories',
    name: 'Key Lock Controller',
    tagline: 'Secure physical access control',
    badge: '',
    image: PRODUCT_IMAGES['key-lock-controller'],
    description: 'High-security physical key lock selector for manual operation override. Ensures only authorized personnel can open or close the automated shutter.',
    specs: [
      { label: 'Type', value: 'Physical Key Access' },
      { label: 'Install', value: 'Wall Mounted' },
    ],
    features: ['Anti-tamper design', 'Industrial key cylinder', 'Weather resistant cover']
  },
  {
    id: 'push-buttons',
    slug: 'push-button-station',
    category: 'motor-accessories',
    name: 'Push Buttons',
    tagline: 'Wall mounted control station',
    badge: '',
    image: PRODUCT_IMAGES['push-buttons'],
    description: 'Standard Up/Down/Stop push button station for hardwired manual control of rolling Rolling Shutter Gear Motors. Highly durable industrial enclosure.',
    specs: [
      { label: 'Type', value: 'Wired Control' },
      { label: 'Buttons', value: 'UP / STOP / DOWN' },
    ],
    features: ['Highly tactile buttons', 'Clear visual indicators', 'Rugged housing']
  },
]

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null
}

export function getProductsByCategory(categoryId) {
  return PRODUCTS.filter((p) => p.category === categoryId)
}
