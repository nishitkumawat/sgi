import machineVector from '../assets/machine_vector.png'

// Import new Motor & Accessory Images
import shutterMotorImg from '../assets/shutter_motor.png'
import shutterMotor1Img from '../assets/shutter_motor1.jpeg'
import remoteControllerImg from '../assets/remote_controller_2.png'
import keySelectorImg from '../assets/key_selector.jpg'
import pushButtonImg from '../assets/push_button.png'
import ezrunControllerImg from '../assets/ezrun_controller.jpeg'

// Import Roll Forming Machine Images
import cpurlinImg1 from '../assets/cpurlin_1.png'
import cpurlinImg2 from '../assets/cpurlin_2.png'
import cpurlinImg3 from '../assets/cpurlin_3.png'
import decoilerImg from '../assets/decoiler.png'
import punchingMachineImg from '../assets/punching_machine.png'
import punchingMachine2Img from '../assets/punching_machine_2.png'
import hatSection1Img from '../assets/hat_section_1.png'
import hatSection2Img from '../assets/hat_section_2.png'
import hatSection3Img from '../assets/hat_4.png'
import hatSection4Img from '../assets/hat_5.png'
import cuttingSystemImg from '../assets/cutting_system.png'
import controlPanelImg from '../assets/control_panel.png'
import controlPanel2Img from '../assets/plc2.jpeg'
import hydraulicPowerPackImg from '../assets/hydraulic-power-pack.png'
import machine1Img from '../assets/machine.jpeg'
import machine2Img from '../assets/machine2.jpeg'


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
  'single-phase-motor1':     shutterMotor1Img,
  'three-phase-motor1':      shutterMotor1Img,
  'remote-controller':       remoteControllerImg,
  'key-lock-controller':     keySelectorImg,
  'push-buttons':            pushButtonImg,
  'keypad-controller':       ezrunControllerImg,

  // Roll Forming Machine Images
  'cpurlin-1':               cpurlinImg1,
  'cpurlin-2':               cpurlinImg2,
  'cpurlin-3':               cpurlinImg3,
  'decoiler':                decoilerImg,
  'punching-machine':        punchingMachineImg,
  'punching-machine-2':      punchingMachine2Img,
  'hat-section-1':           hatSection1Img,
  'hat-section-2':           hatSection2Img,
  'hat-section-3':           hatSection3Img,
  'hat-section-4':           hatSection4Img,
  'machine1':                machine1Img,
  'machine2':                machine2Img,
  'cutting-system':          cuttingSystemImg,
  'control-panel':           controlPanelImg,
  'control-panel2':           controlPanel2Img,
  'hydraulic-power-pack':    hydraulicPowerPackImg,
}

export const PLACEHOLDER = machineVector

export const CATEGORIES = [
  { id: 'shutter-motors', label: 'Motors',  icon: '⚡',  color: '#1e3a8a' },
  { id: 'motor-accessories', label: 'Motor Accessories', icon: '🎛️', color: '#1e40af' },
  { id: 'roll-forming',   label: 'Roll Forming Machines', icon: '⚙️',  color: '#1e40af' },  
]

export const PRODUCTS = [

  // ─── ROLL FORMING MACHINES ──────────────────────────────────────────
  {
    id: 'c-purlin',
    slug: 'c-purlin-roll-forming-machine',
    category: 'roll-forming',
    name: 'C Purlin Roll Forming Machine',
    tagline: 'Auto-adjustable C-purlins for steel frame construction',
    badge: 'Popular',
    image: PRODUCT_IMAGES['machine1'],
    images: [PRODUCT_IMAGES['cpurlin-1'], PRODUCT_IMAGES['cpurlin-2'],PRODUCT_IMAGES['machine1'], PRODUCT_IMAGES['cpurlin-3']],
    description: 'High-performance C Purlin Roll Forming Machine with auto size adjustment for PEB buildings, industrial sheds and solar structures. Features 19-station forming, servo motor drive, and PLC-controlled automatic cutting.',
    specs: [
      { label: 'Suitable Material', value: 'M.S., G.P., H.R., Galvanium' },
      { label: 'Thickness', value: '1.60 mm to 2.50 mm' },
      { label: 'Web (A) Size', value: '60 to 250 mm (Auto Adjust)' },
      { label: 'Flange (B) Size', value: '40 to 80 mm (Auto Adjust)' },
      { label: 'Lip (C) Size', value: '10 to 20 mm' },
      { label: 'Max Coil Input', value: '450 mm (max width 250 mm)' },
      { label: 'Min Coil Input', value: '130 mm (min width 50 mm)' },
      { label: 'Roller Material', value: 'EN-31 (Hard with hard chrome)' },
      { label: 'Productivity', value: '41 mtr/min (without punching)' },
      { label: 'With Punching', value: '6 to 12 mtr/min' },
      { label: 'Forming Station', value: '19 Station' },
      { label: 'Transmission', value: 'Chain drive + 9 Gear box' },
      { label: 'Motor Power', value: '22 KW Servo' },
      { label: 'Cutting System', value: 'Automatic on PLC' },
      { label: 'Section Tolerance', value: '± 1 to 2 mm' },
    ],
    features: ['Auto size adjustment for web & flange', '19-station precision forming', '22 KW Servo motor drive', 'Hardened EN-31 rollers with hard chrome', 'PLC automatic cutting system', 'Chain drive + 9 gear box transmission']
  },
    {
    id: 'hat-section-machine',
    slug: 'hat-section-roll-forming-machine',
    category: 'roll-forming',
    name: 'Hat Section Roll Forming Machine',
    tagline: 'Solar mounting hat profiles with auto PLC cutting',
    badge: 'Popular',
    image: PRODUCT_IMAGES['hat-section-2'],
    images: [PRODUCT_IMAGES['hat-section-1'], PRODUCT_IMAGES['hat-section-2'],PRODUCT_IMAGES['machine1'], PRODUCT_IMAGES['hat-section-3'], PRODUCT_IMAGES['hat-section-4']],
    description: 'High-productivity Hat Section Roll Forming Machine for solar mounting structures. Features 16-station forming, servo motor drive, and automatic PLC cutting. Produces 8-10 tons per day with punching.',
    specs: [
      { label: 'Suitable Material', value: 'G.I. Sheet' },
      { label: 'Thickness', value: '0.80 to 1.20 mm' },
      { label: 'Lip of Material', value: 'Max. 25 mm' },
      { label: 'Web of Material', value: '40 mm (Fixed)' },
      { label: 'Height', value: '60 to 120 mm (Manual Change)' },
      { label: 'Shaft Diameter', value: '75 mm' },
      { label: 'Roller Material', value: 'EN-31 (Hard)' },
      { label: 'Productivity', value: '8 to 10 Ton/Day (With Punching)' },
      { label: 'Forming Station', value: '16 Station' },
      { label: 'Transmission', value: 'Chain / Gear Drive' },
      { label: 'Motor Power', value: '11 to 15 KW Servo Motor' },
      { label: 'Cutting System', value: 'Automatic on PLC' },
      { label: 'Tolerance', value: '± 1 to 2 mm' },
    ],
    features: ['16-station precision forming', '8-10 ton/day productivity', 'Servo motor 11-15 KW drive', 'EN-31 hardened rollers', 'PLC automatic cutting', 'Manually adjustable height 60-120 mm']
  },
  {
    id: 'manual-hydraulic-decoiler',
    slug: 'manual-hydraulic-decoiler',
    category: 'roll-forming',
    name: 'Manual Hydraulic De-coiler',
    tagline: 'Heavy-duty unpowered coil feeding system',
    badge: '',
    image: PRODUCT_IMAGES['decoiler'],
    images: [PRODUCT_IMAGES['decoiler']],
    description: 'Robust manual hydraulic de-coiler with 5-ton capacity and hydraulic mandrel expansion. Designed for reliable coil feeding in roll forming production lines with adjustable drum expansion range.',
    specs: [
      { label: 'Type', value: 'Unpowered' },
      { label: 'Weight Capacity', value: 'Max. 5 Ton' },
      { label: 'Max Feeding Width', value: '600 mm' },
      { label: 'Mandrel Expansion', value: 'Hydraulic Cylinder' },
      { label: 'Drum Nominal Dia', value: '500 mm' },
      { label: 'Drum Expansion Range', value: '425 mm to 525 mm' },
    ],
    features: ['5-ton weight capacity', 'Hydraulic cylinder mandrel expansion', '600 mm max feeding width', 'Adjustable drum expansion range', 'Heavy-duty construction']
  },
  {
    id: 'punching-straightening-machine',
    slug: 'punching-and-straightening-machine',
    category: 'roll-forming',
    name: 'Punching Machine & Straightening Machine',
    tagline: 'Multi-cylinder CNC punching with integrated straightening',
    badge: '',
    image: PRODUCT_IMAGES['punching-machine'],
    images: [PRODUCT_IMAGES['punching-machine'], PRODUCT_IMAGES['punching-machine-2']],
    description: 'Advanced 4-cylinder punching machine with integrated 7-roller straightening system. Features WPS punch & die material, multiple punch size configurations, and hard chrome EN-31 straightening rollers.',
    specs: [
      { label: 'Punch & Die Material', value: 'WPS' },
      { label: 'No. of Cylinders', value: '4 Nos' },
      { label: 'Cyl A (2 Holes)', value: '10 × 40 mm' },
      { label: 'Cyl B (2 Holes)', value: '12 × 35 mm' },
      { label: 'Cyl C (2 Holes)', value: '10 × 35 mm' },
      { label: 'Cyl D (2 Holes)', value: '12 × 40 mm' },
      { label: 'Straightening Rollers', value: '7 Nos' },
      { label: 'Roller Dia', value: '80 mm (Hard Chrome)' },
      { label: 'Roller Material', value: 'EN-31 (Hard)' },
      { label: 'Punch Set', value: 'Extra (interchangeable)' },
    ],
    features: ['4-cylinder multi-punch system', 'WPS grade punch & die', '7-roller integrated straightening', '80 mm hard chrome EN-31 rollers', 'Multiple interchangeable punch sets', 'Precise hole positioning']
  },

  {
    id: 'automatic-cutting-system',
    slug: 'automatic-cutting-system',
    category: 'roll-forming',
    name: 'Automatic Cutting System',
    tagline: 'Hydraulic high-speed precision cutting press',
    badge: '',
    image: PRODUCT_IMAGES['cutting-system'],
    images: [PRODUCT_IMAGES['cutting-system'], PRODUCT_IMAGES['machine2']],
    description: 'Heavy-duty automatic cutting system with hydraulic-operated cutting press and anti-friction guide way. Features high-speed operation with sensor-controlled precision for roll forming production lines.',
    specs: [
      { label: 'Base Frame', value: 'Fabricated Heavy Duty' },
      { label: 'Operation', value: 'High Speed Hydraulic' },
      { label: 'Guide Way', value: 'Anti-friction' },
      { label: 'Hydraulic Cylinders', value: '01 No' },
      { label: 'Sensors', value: '02 Nos' },
      { label: 'Solenoid Valve', value: '01 No' },
      { label: 'Pressure Control Switch', value: '01 No' },
    ],
    features: ['Heavy-duty fabricated base frame', 'High-speed hydraulic operation', 'Anti-friction guide way', 'Dual sensor precision', 'Solenoid valve control']
  },
  {
    id: 'control-panel',
    slug: 'plc-control-panel-system',
    category: 'roll-forming',
    name: 'Control Panel',
    tagline: 'PLC-controlled precision length management system',
    badge: '',
    image: PRODUCT_IMAGES['control-panel2'],
    images: [PRODUCT_IMAGES['control-panel'], PRODUCT_IMAGES['control-panel2']],
    description: 'Advanced PLC control panel with high-accuracy length control in both MM and inch. Features auto single piece system, auto braking, and automatic machine length counting from front to back shear.',
    specs: [
      { label: 'Control Type', value: 'PLC Control Mechanism' },
      { label: 'Length Unit', value: 'MM & Inch' },
      { label: 'Operation Mode', value: 'Auto Single Piece System' },
      { label: 'Braking', value: 'Auto Braking System' },
      { label: 'Length Counting', value: 'Front Shear to Back Shear' },
      { label: 'DC Supply', value: '24VDC, SMPS (AC-DC)' },
    ],
    features: ['PLC high-accuracy length control', 'MM & inch measurement', 'Auto single piece system', 'Auto braking system', 'Auto machine length counting', '24VDC SMPS power supply']
  },
  {
    id: 'hydraulic-power-pack',
    slug: 'hydraulic-power-pack-system',
    category: 'roll-forming',
    name: 'Hydraulic Power Pack System',
    tagline: 'Multi-function hydraulic power for complete production line',
    badge: '',
    image: hydraulicPowerPackImg,
    images: [hydraulicPowerPackImg],
    description: 'Complete hydraulic power pack system powering 4 punches, 2 shearing units and 1 de-coiler. Features 150-litre tank capacity with solenoid direction control valves and 7.5 HP motor.',
    specs: [
      { label: 'Working', value: '4 Punches, 2 Shearing, 1 De-coiler' },
      { label: 'Tank Capacity', value: '150 Litres' },
      { label: 'Direction Control', value: 'Solenoid Valves' },
      { label: 'Motor', value: '7.5 HP' },
    ],
    features: ['Powers complete production line', '150-litre hydraulic tank', 'Solenoid direction control valves', '7.5 HP heavy-duty motor', 'Supports 4 punches + 2 shearing + de-coiler']
  },
    // ─── MOTORS & ACCESSORIES ──────────────────────────────────────────
  {
    id: 'single-phase-motor',
    slug: 'single-phase-rolling-shutter-motor',
    category: 'shutter-motors',
    name: 'Single Phase Rolling Shutter Gear Motor',
    tagline: 'High-efficiency motor for rolling shutters',
    badge: 'Popular',
    image: PRODUCT_IMAGES['single-phase-motor'],
    images: [PRODUCT_IMAGES['single-phase-motor'],PRODUCT_IMAGES['single-phase-motor1']],
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
    images: [PRODUCT_IMAGES['three-phase-motor'],PRODUCT_IMAGES['three-phase-motor1']],
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
  {
    id: 'remote-controller',
    slug: 'motor-remote-controller',
    category: 'motor-accessories',
    name: 'Remote Controller',
    tagline: 'Wireless access for your Rolling Shutter Gear Motors',
    badge: '',
    image: PRODUCT_IMAGES['remote-controller'],
    images: [PRODUCT_IMAGES['remote-controller']],
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
    images: [PRODUCT_IMAGES['keypad-controller']],
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
    images: [PRODUCT_IMAGES['key-lock-controller']],
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
    images: [PRODUCT_IMAGES['push-buttons']],
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
