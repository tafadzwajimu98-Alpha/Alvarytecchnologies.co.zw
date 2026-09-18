import { CatalogProduct } from '../types';

export const CATALOG_CATEGORIES = [
  { id: 'all', label: 'All Equipment' },
  { id: 'obd', label: 'OBD Trackers' },
  { id: 'tracking', label: 'Hardwired GPS' },
  { id: 'fuel', label: 'Fuel Telematics' },
  { id: 'security', label: 'Security & Alarms' },
  { id: 'safety', label: 'Safety & Compliance' },
] as const;

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: 'alv-obd-500',
    model: 'AT-OBD-500 Pro',
    name: 'Plug & Play OBD-II Vehicle GPS Tracker',
    category: 'obd',
    categoryLabel: 'OBD-II Telematics',
    tagline: 'Instant 10-second port fitment with live CAN diagnostics & unplug alarm',
    description: 'Commercial-grade plug-and-play GPS telematics terminal that connects straight into standard 16-pin OBD-II ports. Reads real-time ECU engine diagnostic trouble codes (DTC), live RPM, vehicle speed, and fuel consumption with zero wire cutting, preserving 100% of factory vehicle warranties.',
    specs: [
      { label: 'Port Interface', value: 'Standard 16-Pin OBD-II (SAE J1962)' },
      { label: 'CAN-Bus Telemetry', value: 'RPM, Speed, DTC Codes, Fuel Level' },
      { label: 'Network', value: '4G LTE Cat-1 with 2G Fallback' },
      { label: 'Unplug Security', value: 'Instant Disconnect Tamper Alarm' },
      { label: 'Internal Battery', value: '140mAh Li-Po Backup' },
      { label: 'Voltage Range', value: '9V - 36V DC Passenger & Commercial' }
    ],
    features: [
      'Zero wire cutting or splicing — preserves vehicle manufacturer warranty',
      'Instant tamper / unplug alarm alerts dispatch if removed from port',
      'Real-time vehicle health diagnostics & check-engine DTC code warnings',
      'Driver behavior analytics: harsh braking, rapid acceleration, and cornering',
      'Seamless swap between fleet vehicles in under 10 seconds'
    ],
    installTime: '10 Seconds (Plug & Play)',
    warranty: '24 Months Replacement',
    badge: 'Plug & Play Best Seller',
    inStock: true
  },
  {
    id: 'alv-obd-200',
    model: 'AT-OBD-200 Mini',
    name: 'Concealed Micro OBD Tracker',
    category: 'obd',
    categoryLabel: 'OBD-II Telematics',
    tagline: 'Ultra low-profile flush OBD tracker for rentals & executive vehicles',
    description: 'Low-profile micro OBD tracking device engineered to sit flush inside tight dashboard fuse compartments and knee panels. Provides high-precision real-time location streaming and vehicle battery discharge protection.',
    specs: [
      { label: 'Form Factor', value: 'Ultra Slim Flush-Mount Design' },
      { label: 'Positioning', value: 'GPS + BDS + GLONASS (<2m accuracy)' },
      { label: 'Network', value: 'Multi-Band 4G LTE-M' },
      { label: 'Battery Guard', value: 'Automatic Low Voltage Protection' },
      { label: 'Firmware Support', value: 'Over-The-Air (OTA) Updates' }
    ],
    features: [
      'Ultra-compact body prevents accidental knee strikes and driver tampering',
      'Automated trip logging, idle time detection, and virtual geofences',
      'Low battery consumption with intelligent ultra-sleep mode (<3mA)',
      'Ideal for rental fleets, lease vehicles, and executive company cars'
    ],
    installTime: '10 Seconds',
    warranty: '12 Months',
    badge: 'Rental & Fleet',
    inStock: true
  },
  {
    id: 'alv-gps-401',
    model: 'AT-401 Ultra Pro',
    name: 'Heavy-Duty 4G Vehicle Tracker',
    category: 'tracking',
    categoryLabel: 'GPS Tracking',
    tagline: 'Industrial-grade tracking with remote ignition kill & high-precision GNSS',
    description: 'Our premier commercial telematics terminal designed for heavy trucks, buses, commercial fleets, and light vehicles. Features military-grade GNSS accuracy, multi-network 4G LTE-M roaming, and integrated battery backup.',
    specs: [
      { label: 'Network', value: '4G LTE-M / 2G GSM Fallback' },
      { label: 'Voltage Input', value: '9V - 90V DC Wide Range' },
      { label: 'Accuracy', value: '< 2.0m CEP Real-time' },
      { label: 'Backup Battery', value: '450mAh Li-Po (12h standby)' },
      { label: 'Ingress Protection', value: 'IP67 Dust & Waterproof' },
      { label: 'Telemetry Inputs', value: 'Ignition, SOS, Fuel Sensor, RFID' }
    ],
    features: [
      'Remote engine immobilization via mobile app or SMS',
      'Continuous 5-second interval location streaming',
      'Towing, crash, rollover, and vibration alerts',
      'Internal antenna anti-jamming & tampering logic'
    ],
    installTime: '45 - 60 Mins',
    warranty: '24 Months Replacement',
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 'alv-gps-200',
    model: 'AT-200 Stealth',
    name: 'Concealed Micro GPS Tracker',
    category: 'tracking',
    categoryLabel: 'GPS Tracking',
    tagline: 'Ultra-compact covert tracker for executive cars and high-risk assets',
    description: 'A miniature telematics device engineered specifically for covert vehicle tracking, private car rentals, and executive motor fleets. Easily hidden inside dashboards, door panels, or engine bays.',
    specs: [
      { label: 'Network', value: 'Multi-Band GSM / GPRS' },
      { label: 'Power Draw', value: '< 2.5mA in Ultra Sleep' },
      { label: 'Dimensions', value: '72mm x 30mm x 12mm' },
      { label: 'Voltage Input', value: '9V - 36V DC' },
      { label: 'Positioning', value: 'GPS + LBS Hybrid Assist' }
    ],
    features: [
      'Concealed covert installation locations',
      'Geofence exit and curfew breach alarms',
      'Movement detection while ignition is off',
      'Automated power disconnection alerts'
    ],
    installTime: '45 Mins',
    warranty: '12 Months',
    inStock: true
  },
  {
    id: 'alv-fls-900',
    model: 'US-900 Precision',
    name: 'Ultrasonic Fuel Level Sensor',
    category: 'fuel',
    categoryLabel: 'Fuel Telematics',
    tagline: 'Non-invasive external bottom mount tank sensor with 99.5% accuracy',
    description: 'State-of-the-art ultrasonic fuel monitoring without drilling or cutting the fuel tank. The sensor attaches externally to the underside of the tank, transmitting ultrasonic pulses through the metal or plastic wall to gauge exact fuel volume.',
    specs: [
      { label: 'Measurement Type', value: 'External Ultrasonic (No Drilling)' },
      { label: 'Accuracy', value: '99.5% Volume Precision' },
      { label: 'Measurement Range', value: '50mm - 1200mm Tank Height' },
      { label: 'Output Protocol', value: 'RS232 / RS485 / 0-5V Analog' },
      { label: 'Operating Temp', value: '-40°C to +85°C' },
      { label: 'Protection', value: 'IP68 Submersible' }
    ],
    features: [
      'Eliminates tank perforation risk & maintains tank structural warranty',
      'Instant fuel theft, siphon, and rapid drain alerts',
      'Automated fuel refill volume detection and audit reports',
      'Compatible with diesel, petrol, and bio-fuels'
    ],
    installTime: '90 - 120 Mins',
    warranty: '24 Months',
    badge: 'High Accuracy',
    inStock: true
  },
  {
    id: 'alv-fls-500',
    model: 'DF-500 CapLevel',
    name: 'Capacitive Fuel Probe Sensor',
    category: 'fuel',
    categoryLabel: 'Fuel Telematics',
    tagline: 'Custom-calibrated immersion rod for industrial tanks and heavy machinery',
    description: 'High-end capacitive fuel level rod sensor engineered for long-haul trucks, earthmovers, construction vehicles, and stationary generator diesel tanks with extreme vibration tolerances.',
    specs: [
      { label: 'Probe Length', value: '300mm - 1500mm (Custom Trimmable)' },
      { label: 'Resolution', value: '0.1mm (<0.5% error)' },
      { label: 'Mounting', value: 'Standard SAE 5-Hole Flange' },
      { label: 'Signal Output', value: 'Digital RS485 / Voltage 0.5-4.5V' }
    ],
    features: [
      'Continuous linear output calibrated to tank volume geometry',
      'Temperature compensation filter eliminates fuel expansion errors',
      'Heavy-duty aluminum alloy housing withstands high vibrations',
      'Tamper-evident sealing wire prevents unauthorized extraction'
    ],
    installTime: '2 Hours',
    warranty: '24 Months',
    inStock: true
  },
  {
    id: 'alv-sec-100',
    model: 'CentraLock Pro',
    name: 'Integrated Central Lock & Siren Alarm',
    category: 'security',
    categoryLabel: 'Security & Alarms',
    tagline: 'Complete vehicle access control with heavy-duty siren & door actuation',
    description: 'Comprehensive physical vehicle security kit that pairs central door lock actuators with a high-decibel weather-sealed alarm siren, impact sensors, and encrypted rolling-code keyfobs.',
    specs: [
      { label: 'Siren Output', value: '120dB Multi-tone High Output' },
      { label: 'Actuator Force', value: 'Up to 5.5kg Push/Pull Capacity' },
      { label: 'Remote Frequency', value: '433.92MHz Rolling Code' },
      { label: 'System Voltage', value: '12V / 24V Systems' }
    ],
    features: [
      'Central locking integration on 2-door or 4-door vehicle cabins',
      'Dual-stage shock sensor triggers warning chirps or full alarm',
      'Emergency anti-hijack mode and ignition lockout',
      'Silent arming / disarming feature for discrete fleet operations'
    ],
    installTime: '60 - 90 Mins',
    warranty: '12 Months',
    badge: 'Popular',
    inStock: true
  },
  {
    id: 'alv-cam-400',
    model: 'MDVR-4CH AI Vision',
    name: '4-Channel AI Video Telematics Kit',
    category: 'safety',
    categoryLabel: 'Safety & Compliance',
    tagline: 'Live 1080P fleet video streaming with ADAS & Driver Fatigue detection',
    description: 'Commercial Mobile Digital Video Recorder supporting 4 high-definition cameras (Forward road, Driver cabin DSM, Cargo/Saloon, and Blind Spot/Reverse). Uploads live footage and incident clips to the cloud in real time.',
    specs: [
      { label: 'Video Channels', value: '4x 1080P AHD Waterproof Cameras' },
      { label: 'Connectivity', value: '4G LTE + GPS + Wi-Fi Hotspot' },
      { label: 'Storage', value: 'Dual 256GB SD Cards or 2TB SSD' },
      { label: 'AI Features', value: 'ADAS (Forward Collision) + DSM (Fatigue)' }
    ],
    features: [
      'Detects driver yawning, smoking, phone usage, and distraction',
      'Automatic cloud upload on harsh brake, impact, or SOS press',
      'Live streaming and 2-way voice intercom from central dispatch',
      'Tamper-proof lockable storage box with encryption key'
    ],
    installTime: '3 - 4 Hours',
    warranty: '24 Months',
    badge: 'AI Telematics',
    inStock: true
  },
  {
    id: 'alv-spd-300',
    model: 'SpeedGuard Pro',
    name: 'Dual-Mode Speed Limiter & Governor',
    category: 'safety',
    categoryLabel: 'Safety & Compliance',
    tagline: 'Standard road-compliant throttle governor with tamper alerts',
    description: 'Certified vehicle speed limitation equipment compliant with national road safety regulations and cross-border transport mandates. Smoothly restricts vehicle acceleration once preset maximum speeds are reached without engine stalling.',
    specs: [
      { label: 'Actuation', value: 'Electronic Drive-by-Wire & Mechanical Cable' },
      { label: 'Speed Limit Preset', value: 'Configurable (e.g., 80km/h, 100km/h)' },
      { label: 'Certification', value: 'National Standards & Road Transport Compliant' },
      { label: 'Power Supply', value: '10V - 32V DC' }
    ],
    features: [
      'Prevents high-speed accidents and excessive highway wear',
      'Noticeable 15-20% reduction in long-distance fleet fuel usage',
      'Tamper-evident casing with instantaneous sabotage detection',
      'Includes official calibration certificate for vehicle inspection'
    ],
    installTime: '90 Mins',
    warranty: '24 Months',
    badge: 'Certified',
    inStock: true
  },
  {
    id: 'alv-id-50',
    model: 'DriverKey RFID',
    name: 'RFID Driver Identification System',
    category: 'security',
    categoryLabel: 'Security & Alarms',
    tagline: 'Driver authorization reader with starter lockout & shift logging',
    description: 'Prevents unauthorized vehicle startup by requiring assigned drivers to scan their personalized RFID tag or iButton key before the starter motor will engage.',
    specs: [
      { label: 'Reader Standard', value: '125kHz RFID / Dallas iButton' },
      { label: 'Indicators', value: 'High-visibility Dual LED + Warning Buzzer' },
      { label: 'Relay Load', value: '40A Starter Motor Cut-Off' },
      { label: 'Interface', value: '1-Wire Digital / Wiegand' }
    ],
    features: [
      'Unlocks starter relay solely upon authorized tag recognition',
      'Automated driver trip and shift logging in fleet dashboard',
      'Buzzer sounds continuously if ignition turned without valid scan',
      'Assign multiple authorized driver tags per vehicle'
    ],
    installTime: '45 Mins',
    warranty: '12 Months',
    inStock: true
  },
  {
    id: 'alv-sos-10',
    model: 'Emergency SOS Pro',
    name: 'Silent Panic Button Switch',
    category: 'security',
    categoryLabel: 'Security & Alarms',
    tagline: 'Concealed momentary switch for instant control room dispatch',
    description: 'Discreet, heavy-duty mechanical emergency panic switch designed for concealed mounting under the vehicle steering column, footwell, or seat base for driver personal safety.',
    specs: [
      { label: 'Activation', value: 'Silent Spring-Return Heavy Duty Push' },
      { label: 'Mounting', value: 'Under-dash / Footwell Bracket' },
      { label: 'Wiring', value: 'Hardwired 3-wire Anti-tamper Line' }
    ],
    features: [
      'Zero audible noise or indicator light to avoid endangering driver',
      'Instant SMS, call, and priority dispatch alert broadcast',
      'Direct integration with Alvary 24/7 monitoring center'
    ],
    installTime: '30 Mins',
    warranty: 'Lifetime Warranty',
    inStock: true
  },
  {
    id: 'alv-tmp-80',
    model: 'ColdGuard BLE',
    name: 'Wireless Bluetooth Cargo Temperature Sensor',
    category: 'tracking',
    categoryLabel: 'GPS Tracking',
    tagline: 'Refrigerated container sensor for cold-chain compliance',
    description: 'Wireless Bluetooth Low Energy (BLE 5.0) sensor for refrigerated trucks, pharmaceuticals, dairy, and perishables transport. Communicates wirelessly with the vehicle tracker.',
    specs: [
      { label: 'Temperature Range', value: '-40°C to +85°C (±0.3°C accuracy)' },
      { label: 'Battery Life', value: 'Up to 5 Years Built-in Li-MnO2' },
      { label: 'Wireless Range', value: 'Up to 80m Open Air (BLE 5.0)' },
      { label: 'Enclosure', value: 'Food-grade IP67 Waterproof' }
    ],
    features: [
      'Zero cabling required through refrigerated trailer walls',
      'Instant alert if temperature breaches threshold range',
      'Generates automated HACCP temperature log sheets for clients'
    ],
    installTime: '15 Mins (Wireless)',
    warranty: '12 Months',
    inStock: true
  }
];
