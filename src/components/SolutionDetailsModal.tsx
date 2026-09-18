import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, CheckCircle2, ShieldCheck, Wrench, Clock, FileText, 
  Cpu, AlertTriangle, ArrowRight, Phone, MessageSquare, 
  MapPin, Droplet, Siren, Gauge, ChevronRight, Check
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export interface SolutionDetail {
  id: string;
  number: string;
  title: string;
  tagline: string;
  overview: string;
  icon: React.ReactNode;
  installTime: string;
  warranty: string;
  clientRequirements: {
    category: string;
    items: string[];
  }[];
  hardwareRequired: {
    item: string;
    description: string;
    badge?: string;
  }[];
  installationSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  specs: {
    label: string;
    value: string;
  }[];
}

export const SOLUTION_DETAILS: Record<string, SolutionDetail> = {
  '01': {
    id: '01',
    number: 'SOLUTION 01',
    title: 'Vehicle Tracking & Fleet Telematics',
    tagline: 'Precision 4G GNSS tracking with sub-2m accuracy, remote ignition cut-off, and automated geofence alarms.',
    overview: 'Our premier commercial tracking system delivers second-by-second vehicle telemetry, route history playback, driver behavior auditing, and anti-theft immobilization across Southern Africa.',
    icon: <MapPin className="text-white" size={24} />,
    installTime: '45 - 60 Minutes per Vehicle',
    warranty: '24 Months Replacement Warranty',
    clientRequirements: [
      {
        category: 'Vehicle Documentation & Identification',
        items: [
          'Vehicle Registration Number, Make, Model, and Year of Manufacture',
          'Vehicle Identification Number (VIN) / Chassis Number for certificate registration',
          'Vehicle Electrical Architecture (12V DC Passenger vs 24V DC Heavy Commercial/Truck)'
        ]
      },
      {
        category: 'Operational & Dispatch Contacts',
        items: [
          'Designated primary dispatcher & fleet supervisor mobile numbers (for instant emergency SMS alerts)',
          'List of authorized drivers and mobile access users to assign app credentials',
          'Preferred physical installation location (Harare, Bulawayo, or on-site fleet depot)'
        ]
      },
      {
        category: 'Security Protocols Required',
        items: [
          'Authorization for remote engine kill relay wiring on vehicle ignition circuit',
          'Placement preference for covert SOS emergency panic button inside driver cabin'
        ]
      }
    ],
    hardwareRequired: [
      { item: 'AT-401 Ultra 4G Telematics Terminal', description: 'Dual-module GNSS/GPS positioning with internal 450mAh backup battery & tamper sensor', badge: 'Core Unit' },
      { item: 'IP67 Waterproof Wiring Harness', description: 'Flame-retardant automotive grade cabling with integrated 5A in-line blade safety fuse', badge: 'Safety' },
      { item: 'Automotive Immobilization Relay (40A)', description: 'Solid-state 12V/24V cut-off relay allowing safe, remote engine shutdown via app or SMS' },
      { item: 'Multi-Network Roaming M2M SIM', description: 'Pre-activated telemetry data SIM offering automated roaming across NetOne, Econet, and Telecel' },
      { item: 'Covert SOS Emergency Button', description: 'Micro tactile switch mounted concealed within driver reach for priority SOS panic alerts' }
    ],
    installationSteps: [
      { step: '01', title: 'Pre-Fitment Electrical Diagnostic', description: 'Technician tests battery terminal voltage, alternator charging output, and identifies factory wiring schematics.' },
      { step: '02', title: 'Concealed Unit Mounting', description: 'Hardware is secured behind vehicle dashboard / instrument cluster with covert anti-vibration damping.' },
      { step: '03', title: 'Immobilizer Circuit Integration', description: 'Starter cut-off relay is safely spliced into ignition starter feed, preserving factory ECU safeguards.' },
      { step: '04', title: 'Live Satellite & Server Testing', description: 'Real-time telemetry verification on Alvary cloud servers confirming sub-2m positioning and signal health.' },
      { step: '05', title: 'Client Handover & App Setup', description: 'Driver credentials provisioned, geofences demarcated, and user guided through web/mobile tracking apps.' }
    ],
    specs: [
      { label: 'Positioning Accuracy', value: '< 2.0 meters CEP GNSS' },
      { label: 'Location Frequency', value: '5 - 10s Continuous Streaming' },
      { label: 'Network Support', value: '4G LTE-M / NB-IoT / 2G GSM' },
      { label: 'Operating Voltage', value: '9V - 90V DC Wide Range' },
      { label: 'Internal Backup', value: '12h Standby Battery Backup' },
      { label: 'Enclosure Rating', value: 'IP67 Dust & Water Protected' }
    ]
  },
  '02': {
    id: '02',
    number: 'SOLUTION 02',
    title: 'Fuel Telematics & Anti-Theft Shield',
    tagline: 'Ultrasonic & capacitive fuel monitoring calibrated to ±0.5% precision to eliminate siphoning and fuel theft.',
    overview: 'High-precision fuel sensors provide total visibility over fuel levels, consumption rates per 100km, refueling validation, and immediate alerts for unauthorized tank draining or siphoning.',
    icon: <Droplet className="text-white" size={24} />,
    installTime: '90 - 120 Minutes per Tank',
    warranty: '24 Months Replacement Warranty',
    clientRequirements: [
      {
        category: 'Fuel Tank Specifications',
        items: [
          'Tank Geometry: Rectangular, Cylindrical, D-Shape, or Custom fabricated tank',
          'Accurate Tank Dimensions: Height, Width, and Total Length measured in millimeters',
          'Total Fuel Capacity (e.g. 200L, 400L, 600L, or Dual-Tank interlinked system)'
        ]
      },
      {
        category: 'Fuel & Fluid Characteristics',
        items: [
          'Fuel Type: Diesel, Bio-Diesel, Petrol, or Aviation Kerosene',
          'Tank Material: Mild Steel, Aluminum Alloy, or Heavy High-Density Composite Polyethylene',
          'Existing tank clearance: Access to tank bottom (for non-invasive ultrasonic sensor) or top access'
        ]
      },
      {
        category: 'Calibration Preparation',
        items: [
          'Vehicle must arrive with low fuel level (ideally under 15% capacity) for multi-stage volumetric calibration',
          'Access to fuel dispenser or calibrated fuel bowser for incremental step measurements during fitment'
        ]
      }
    ],
    hardwareRequired: [
      { item: 'High-Frequency Ultrasonic Fuel Probe', description: 'Non-invasive external bottom probe. Zero drilling, zero fire hazard, leaves tank intact', badge: 'Non-Invasive' },
      { item: 'Calibrated Top Capacitive Probe (Optional)', description: 'Precision multi-point sensor rod cut to millimeter depth for irregular deep tanks', badge: 'Dual-Option' },
      { item: 'Digital RS485 Signal Isolator', description: 'Industrial noise filter preventing engine alternator surges from affecting fuel readings' },
      { item: 'Corrugated Armored Shield Conduit', description: 'Heavy-duty steel-braided conduit protecting wiring from heat, rocks, and physical tampering' },
      { item: 'Mechanical Anti-Siphon Neck Trap', description: 'High-flow aluminum fuel port basket blocking hose insertion into filler neck' }
    ],
    installationSteps: [
      { step: '01', title: 'Tank Profiling & Acoustic Coupling', description: 'External tank surface is cleaned and sonographically checked for resonance and internal baffling.' },
      { step: '02', title: 'Sensor Bonding', description: 'Ultrasonic transducer bonded to tank bottom with acoustic couplant and reinforced industrial structural epoxy.' },
      { step: '03', title: 'Conduit Armor Routing', description: 'Cabling routed through heat-resistant armored conduit along vehicle chassis to telematics module.' },
      { step: '04', title: 'Multi-Point Step Calibration', description: 'Tank is filled in measured increments (e.g. 20L steps) to generate a precise 10-point volumetric calibration curve.' },
      { step: '05', title: 'Siphon Simulation & Alarm Test', description: 'A rapid volume drop is simulated to verify emergency SMS and push alerts trigger within 3 seconds.' }
    ],
    specs: [
      { label: 'Measurement Accuracy', value: '±0.5% of Total Tank Volume' },
      { label: 'Detection Resolution', value: '0.1 Liter / 0.5mm Liquid Depth' },
      { label: 'Siphon Alert Time', value: '< 3 Seconds from Drainage' },
      { label: 'Operating Temp', value: '-40°C to +85°C Engine Safe' },
      { label: 'Signal Interface', value: 'RS485 / RS232 Digital Telemetry' },
      { label: 'Intrinsically Safe', value: 'ATEX Explosion-Proof Certified' }
    ]
  },
  '03': {
    id: '03',
    number: 'SOLUTION 03',
    title: 'Fleet Security, Alarms & Speed Governors',
    tagline: 'Multi-layered fleet safety architecture integrating SABS speed limiters, 120dB alarms, and RFID driver tags.',
    overview: 'Ensure strict driver accountability, enforce national road safety speed limits, and protect assets against hijacking with central door locking, audible alarms, and contactless RFID driver authorization.',
    icon: <ShieldCheck className="text-white" size={24} />,
    installTime: '60 - 90 Minutes per Vehicle',
    warranty: '24 Months Replacement Warranty',
    clientRequirements: [
      {
        category: 'Vehicle Engine & Throttle Type',
        items: [
          'Engine Management: Electronic Accelerator Pedal (Drive-by-Wire) vs Mechanical Throttle Cable',
          'Fuel Injection Setup: Common Rail Electronic vs In-line Mechanical Diesel Pump',
          'Central Door Locking Status: Existing factory actuators or new heavy-duty solenoids required'
        ]
      },
      {
        category: 'Compliance & Speed Settings',
        items: [
          'Mandated Governing Speed Limit: e.g. 80 km/h for Public Service Buses, 100 km/h for Cargo Haulage',
          'Official compliance certification details required for vehicle roadworthiness inspection',
          'Harsh driving thresholds: G-force parameters for harsh braking, cornering, and rapid acceleration'
        ]
      },
      {
        category: 'Driver Authorization Protocols',
        items: [
          'List of authorized drivers requiring RFID identity key fobs or smart proximity cards',
          'No-ID engine start prohibition policy: Whether vehicle should be locked from starting without RFID badge'
        ]
      }
    ],
    hardwareRequired: [
      { item: 'SABS Road-Compliant Speed Governor Unit', description: 'Tamper-evident electronic speed limiter restricting velocity without loss of engine torque', badge: 'Certified' },
      { item: 'High-Decibel Siren & Pulse Strobe (120dB)', description: 'Weatherproof exterior security siren triggered on unauthorized tampering or geofence breaches', badge: 'Loud Deterrent' },
      { item: 'RFID Wireless Driver ID Reader', description: 'In-cabin contactless card reader with dual-color LED and audio authorization beeper' },
      { item: 'Driver RFID Encrypted Key Tags', description: 'Durable contactless RFID fobs assigned to individual fleet operators for shift tracking' },
      { item: 'Central Locking Master Actuator Kit', description: 'Heavy-duty 2-wire/5-wire door lock solenoids for automatic remote vehicle lockdown' }
    ],
    installationSteps: [
      { step: '01', title: 'Throttle & Accelerator Intercept', description: 'Governor harness connects to accelerator pedal position sensor (APPS) or fuel shut-off solenoid.' },
      { step: '02', title: 'Tamper-Evident Security Sealing', description: 'Numbered tamper seals applied to wire connections to prevent driver tampering or bypassing.' },
      { step: '03', title: 'RFID Reader & Siren Placement', description: 'RFID reader mounted cleanly on dashboard; 120dB alarm siren mounted in engine bay away from heat.' },
      { step: '04', title: 'Road Speed Calibration Test', description: 'Vehicle tested on road / dyno using GPS reference to calibrate smooth, non-jerking speed governing.' },
      { step: '05', title: 'Certificate Issuance', description: 'Official calibration and road compliance inspection certificate issued for vehicle records.' }
    ],
    specs: [
      { label: 'Speed Limit Precision', value: '±1.5 km/h at Governed Velocity' },
      { label: 'Siren Acoustic Output', value: '120dB @ 1 meter distance' },
      { label: 'Driver ID Reader', value: '13.56MHz RFID / MIFARE Protocol' },
      { label: 'Engine Compatibility', value: '12V / 24V Diesel & Petrol' },
      { label: 'Tamper Protection', value: 'Auto Limp-Mode on Cable Cut' },
      { label: 'Certification', value: 'SABS & Southern Africa Standards' }
    ]
  }
};

interface SolutionDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSolutionId: string;
  onSelectSolution: (id: string) => void;
  onRequestQuote: (solutionTitle: string) => void;
}

export const SolutionDetailsModal: React.FC<SolutionDetailsModalProps> = ({
  isOpen,
  onClose,
  selectedSolutionId,
  onSelectSolution,
  onRequestQuote
}) => {
  const { isDark } = useTheme();
  const currentSolution = SOLUTION_DETAILS[selectedSolutionId] || SOLUTION_DETAILS['01'];
  const [activeTab, setActiveTab] = useState<'requirements' | 'hardware' | 'installation' | 'specs'>('requirements');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className={`fixed inset-0 z-50 overflow-y-auto backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 ${
        isDark ? 'bg-[#0A192F]/85' : 'bg-slate-900/60'
      }`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className={`relative w-full max-w-5xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden ${
            isDark 
              ? 'bg-[#0A192F] border-2 border-[#233554] text-white' 
              : 'bg-white border border-slate-200 text-[#0A192F]'
          }`}
        >
          {/* Top Bar: Solution Switcher & Close */}
          <div className={`p-4 sm:p-6 border-b flex flex-col md:flex-row md:items-center justify-between gap-4 ${
            isDark ? 'bg-[#112240] border-[#233554]' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {Object.values(SOLUTION_DETAILS).map((sol) => {
                const isActive = sol.id === currentSolution.id;
                return (
                  <button
                    key={sol.id}
                    onClick={() => onSelectSolution(sol.id)}
                    className={`px-3.5 py-2 text-xs font-bold font-mono uppercase tracking-wider transition-all whitespace-nowrap border flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? (isDark 
                            ? 'bg-white text-[#0A192F] border-white shadow-md' 
                            : 'bg-[#0A192F] text-white border-[#0A192F] shadow-sm')
                        : (isDark 
                            ? 'bg-[#0A192F] text-blue-200 border-[#233554] hover:border-white/60' 
                            : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500')
                    }`}
                  >
                    <span>{sol.id}</span>
                    <span className="hidden sm:inline">{sol.title.split('&')[0].trim()}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3 self-end md:self-auto">
              <button
                onClick={() => onRequestQuote(currentSolution.title)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm ${
                  isDark 
                    ? 'bg-white hover:bg-blue-50 text-[#0A192F]' 
                    : 'bg-[#0A192F] hover:bg-[#112240] text-white'
                }`}
              >
                Request Fitment Quote <ArrowRight size={14} />
              </button>
              <button
                onClick={onClose}
                className={`w-9 h-9 border flex items-center justify-center transition-colors cursor-pointer ${
                  isDark 
                    ? 'bg-[#0A192F] hover:bg-white hover:text-[#0A192F] border-[#233554] text-white' 
                    : 'bg-white hover:bg-[#0A192F] hover:text-white border-slate-300 text-slate-700'
                }`}
                aria-label="Close solution details modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Solution Banner Heading */}
          <div className={`p-6 md:p-8 border-b ${
            isDark ? 'bg-[#0A192F] border-[#233554]' : 'bg-white border-slate-200'
          }`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 border ${
                    isDark 
                      ? 'bg-[#112240] text-blue-100 border-[#233554]' 
                      : 'bg-slate-100 text-[#0A192F] border-slate-300'
                  }`}>
                    {currentSolution.number}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 border flex items-center gap-1 ${
                    isDark 
                      ? 'text-emerald-400 bg-emerald-950/40 border-emerald-800/50' 
                      : 'text-emerald-700 bg-emerald-50 border-emerald-200 font-bold'
                  }`}>
                    <Clock size={11} /> {currentSolution.installTime}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 border flex items-center gap-1 ${
                    isDark 
                      ? 'text-blue-200 bg-[#112240] border-[#233554]' 
                      : 'text-slate-600 bg-slate-100 border-slate-200 font-bold'
                  }`}>
                    <ShieldCheck size={11} /> {currentSolution.warranty}
                  </span>
                </div>
                <h2 className={`text-2xl md:text-4xl font-black uppercase tracking-tight ${
                  isDark ? 'text-white' : 'text-[#0A192F]'
                }`}>
                  {currentSolution.title}
                </h2>
              </div>
            </div>
            <p className={`text-sm md:text-base max-w-3xl leading-relaxed font-light ${
              isDark ? 'text-blue-100' : 'text-slate-600'
            }`}>
              {currentSolution.tagline}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className={`flex border-b px-4 md:px-8 overflow-x-auto scrollbar-none ${
            isDark ? 'border-[#233554] bg-[#112240]' : 'border-slate-200 bg-slate-50'
          }`}>
            <button
              onClick={() => setActiveTab('requirements')}
              className={`py-3.5 px-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'requirements'
                  ? (isDark ? 'border-white text-white' : 'border-[#0A192F] text-[#0A192F]')
                  : (isDark ? 'border-transparent text-blue-200 hover:text-white' : 'border-transparent text-slate-500 hover:text-[#0A192F]')
              }`}
            >
              <FileText size={14} /> Details Required from Client
            </button>
            <button
              onClick={() => setActiveTab('hardware')}
              className={`py-3.5 px-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'hardware'
                  ? (isDark ? 'border-white text-white' : 'border-[#0A192F] text-[#0A192F]')
                  : (isDark ? 'border-transparent text-blue-200 hover:text-white' : 'border-transparent text-slate-500 hover:text-[#0A192F]')
              }`}
            >
              <Cpu size={14} /> Hardware & Components Fitted
            </button>
            <button
              onClick={() => setActiveTab('installation')}
              className={`py-3.5 px-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'installation'
                  ? (isDark ? 'border-white text-white' : 'border-[#0A192F] text-[#0A192F]')
                  : (isDark ? 'border-transparent text-blue-200 hover:text-white' : 'border-transparent text-slate-500 hover:text-[#0A192F]')
              }`}
            >
              <Wrench size={14} /> Fitment & Calibration Procedure
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-3.5 px-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'specs'
                  ? (isDark ? 'border-white text-white' : 'border-[#0A192F] text-[#0A192F]')
                  : (isDark ? 'border-transparent text-blue-200 hover:text-white' : 'border-transparent text-slate-500 hover:text-[#0A192F]')
              }`}
            >
              <Gauge size={14} /> Technical Specifications
            </button>
          </div>

          {/* Tab Content Body */}
          <div className={`flex-1 overflow-y-auto p-6 md:p-8 space-y-6 ${
            isDark 
              ? 'scrollbar-thin scrollbar-thumb-[#233554] scrollbar-track-[#0A192F]' 
              : 'scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100'
          }`}>
            {/* TAB 1: DETAILS REQUIRED FROM CLIENT */}
            {activeTab === 'requirements' && (
              <div className="space-y-6">
                <div className={`border p-5 flex items-start gap-4 ${
                  isDark ? 'bg-[#112240] border-[#233554]' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 ${
                    isDark ? 'bg-white text-[#0A192F]' : 'bg-[#0A192F] text-white'
                  }`}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className={`text-base font-black uppercase tracking-tight mb-1 ${
                      isDark ? 'text-white' : 'text-[#0A192F]'
                    }`}>
                      Pre-Fitment Checklist: Details Needed for Rapid On-Site Deployment
                    </h3>
                    <p className={`text-xs leading-relaxed font-light ${
                      isDark ? 'text-blue-100' : 'text-slate-600'
                    }`}>
                      To guarantee our 24/48-hour on-site fitment turnaround time across Zimbabwe, our mobile telematics engineers require the following vehicle and operational parameters prior to arrival.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentSolution.clientRequirements.map((req, rIdx) => (
                    <div key={rIdx} className={`border p-6 flex flex-col justify-between ${
                      isDark ? 'bg-[#112240] border-[#233554]' : 'bg-white border-slate-200 shadow-sm'
                    }`}>
                      <div>
                        <div className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${
                          isDark ? 'text-blue-200' : 'text-slate-500 font-bold'
                        }`}>
                          Category 0{rIdx + 1}
                        </div>
                        <h4 className={`text-sm font-black uppercase tracking-tight mb-4 pb-2 border-b ${
                          isDark ? 'text-white border-[#233554]' : 'text-[#0A192F] border-slate-100'
                        }`}>
                          {req.category}
                        </h4>
                        <ul className="space-y-3">
                          {req.items.map((item, itemIdx) => (
                            <li key={itemIdx} className={`flex items-start gap-2.5 text-xs leading-relaxed ${
                              isDark ? 'text-blue-100' : 'text-slate-700'
                            }`}>
                              <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${
                                isDark ? 'text-white' : 'text-emerald-600'
                              }`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`mt-6 pt-3 border-t text-[10px] font-mono font-bold ${
                        isDark ? 'border-[#233554]/60 text-emerald-400' : 'border-slate-100 text-emerald-600'
                      }`}>
                        ✓ Verified prior to dispatch
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`border p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isDark ? 'bg-[#112240]/60 border-[#233554]' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`flex items-center gap-3 text-xs ${
                    isDark ? 'text-blue-100' : 'text-slate-700'
                  }`}>
                    <AlertTriangle size={18} className={isDark ? 'text-white flex-shrink-0' : 'text-amber-600 flex-shrink-0'} />
                    <span>Have multiple vehicles or a mixed commercial fleet? We handle bulk VIN registrations simultaneously.</span>
                  </div>
                  <button
                    onClick={() => onRequestQuote(currentSolution.title)}
                    className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors flex-shrink-0 whitespace-nowrap cursor-pointer shadow-sm ${
                      isDark 
                        ? 'bg-white text-[#0A192F] hover:bg-blue-50' 
                        : 'bg-[#0A192F] text-white hover:bg-[#112240]'
                    }`}
                  >
                    Submit Vehicle Details
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: HARDWARE & COMPONENTS */}
            {activeTab === 'hardware' && (
              <div className="space-y-6">
                <div className={`border p-5 flex items-start gap-4 ${
                  isDark ? 'bg-[#112240] border-[#233554]' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 ${
                    isDark ? 'bg-white text-[#0A192F]' : 'bg-[#0A192F] text-white'
                  }`}>
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h3 className={`text-base font-black uppercase tracking-tight mb-1 ${
                      isDark ? 'text-white' : 'text-[#0A192F]'
                    }`}>
                      Industrial Hardware & Equipment Architecture
                    </h3>
                    <p className={`text-xs leading-relaxed font-light ${
                      isDark ? 'text-blue-100' : 'text-slate-600'
                    }`}>
                      Every component is tested for high heat, rough terrain, vibration, and dust common to Southern African logistics corridors.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentSolution.hardwareRequired.map((item, idx) => (
                    <div key={idx} className={`border p-5 transition-colors ${
                      isDark 
                        ? 'bg-[#112240] border-[#233554] hover:border-white/50' 
                        : 'bg-white border-slate-200 hover:border-[#0A192F] shadow-sm'
                    }`}>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className={`text-sm font-bold uppercase tracking-tight ${
                          isDark ? 'text-white' : 'text-[#0A192F]'
                        }`}>
                          {item.item}
                        </h4>
                        {item.badge && (
                          <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 font-bold ${
                            isDark ? 'bg-white text-[#0A192F]' : 'bg-[#0A192F] text-white'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className={`text-xs leading-relaxed font-light ${
                        isDark ? 'text-blue-100' : 'text-slate-600'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: INSTALLATION PROCEDURE */}
            {activeTab === 'installation' && (
              <div className="space-y-6">
                <div className={`border p-5 flex items-start gap-4 ${
                  isDark ? 'bg-[#112240] border-[#233554]' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 ${
                    isDark ? 'bg-white text-[#0A192F]' : 'bg-[#0A192F] text-white'
                  }`}>
                    <Wrench size={20} />
                  </div>
                  <div>
                    <h3 className={`text-base font-black uppercase tracking-tight mb-1 ${
                      isDark ? 'text-white' : 'text-[#0A192F]'
                    }`}>
                      Standard Operating Fitment & Handover Procedure
                    </h3>
                    <p className={`text-xs leading-relaxed font-light ${
                      isDark ? 'text-blue-100' : 'text-slate-600'
                    }`}>
                      Certified mobile technicians perform seamless, non-destructive installations preserving your factory warranty.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {currentSolution.installationSteps.map((step, sIdx) => (
                    <div key={sIdx} className={`border p-5 flex items-start gap-4 transition-colors ${
                      isDark 
                        ? 'bg-[#112240] border-[#233554] hover:border-white/50' 
                        : 'bg-white border-slate-200 hover:border-[#0A192F] shadow-sm'
                    }`}>
                      <div className={`text-2xl font-black font-mono flex-shrink-0 w-10 ${
                        isDark ? 'text-blue-200' : 'text-slate-400'
                      }`}>
                        {step.step}
                      </div>
                      <div>
                        <h4 className={`text-sm font-bold uppercase tracking-tight mb-1 ${
                          isDark ? 'text-white' : 'text-[#0A192F]'
                        }`}>
                          {step.title}
                        </h4>
                        <p className={`text-xs leading-relaxed font-light ${
                          isDark ? 'text-blue-100' : 'text-slate-600'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: TECHNICAL SPECIFICATIONS */}
            {activeTab === 'specs' && (
              <div className="space-y-6">
                <div className={`border p-5 flex items-start gap-4 ${
                  isDark ? 'bg-[#112240] border-[#233554]' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 ${
                    isDark ? 'bg-white text-[#0A192F]' : 'bg-[#0A192F] text-white'
                  }`}>
                    <Gauge size={20} />
                  </div>
                  <div>
                    <h3 className={`text-base font-black uppercase tracking-tight mb-1 ${
                      isDark ? 'text-white' : 'text-[#0A192F]'
                    }`}>
                      Verified Technical & Engineering Parameters
                    </h3>
                    <p className={`text-xs leading-relaxed font-light ${
                      isDark ? 'text-blue-100' : 'text-slate-600'
                    }`}>
                      Benchmarked against SABS, European telematics, and African cross-border road transit requirements.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {currentSolution.specs.map((spec, spIdx) => (
                    <div key={spIdx} className={`border p-4 ${
                      isDark ? 'bg-[#112240] border-[#233554]' : 'bg-white border-slate-200 shadow-sm'
                    }`}>
                      <div className={`text-[10px] font-mono uppercase tracking-widest mb-1.5 ${
                        isDark ? 'text-blue-200' : 'text-slate-500 font-bold'
                      }`}>
                        {spec.label}
                      </div>
                      <div className={`text-sm font-bold leading-tight ${
                        isDark ? 'text-white' : 'text-[#0A192F]'
                      }`}>
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className={`p-4 md:px-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDark ? 'bg-[#112240] border-[#233554]' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className={`flex items-center gap-4 text-xs font-mono ${
              isDark ? 'text-blue-200' : 'text-slate-600'
            }`}>
              <span className={`flex items-center gap-1.5 font-bold ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>
                <Clock size={13} /> {currentSolution.installTime}
              </span>
              <span className="hidden sm:inline">|</span>
              <span className={`flex items-center gap-1.5 font-bold ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>
                <ShieldCheck size={13} /> Nationwide Mobile Fitment
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/263781899027"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-2.5 px-4 text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare size={15} /> WhatsApp Inquiries
              </a>
              <button
                onClick={() => onRequestQuote(currentSolution.title)}
                className={`flex-1 sm:flex-none font-black py-2.5 px-5 text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md ${
                  isDark 
                    ? 'bg-white hover:bg-blue-50 text-[#0A192F]' 
                    : 'bg-[#0A192F] hover:bg-[#112240] text-white'
                }`}
              >
                Book On-Site Fitment <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
