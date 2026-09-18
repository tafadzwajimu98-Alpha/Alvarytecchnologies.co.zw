import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  Cookie, 
  Lock, 
  CheckCircle2, 
  Search, 
  Printer, 
  Phone, 
  Mail, 
  ExternalLink,
  Scale,
  Car,
  AlertTriangle,
  Radio
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export type LegalDocType = 'privacy' | 'terms' | 'cookies';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoc?: LegalDocType;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialDoc = 'privacy'
}) => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<LegalDocType>(initialDoc);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (initialDoc) {
      setActiveTab(initialDoc);
    }
  }, [initialDoc]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className={`fixed inset-0 backdrop-blur-md ${isDark ? 'bg-[#000814]/85' : 'bg-slate-900/60'}`}
        />

        {/* Modal Dialog Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`relative w-full max-w-6xl max-h-[92vh] shadow-2xl flex flex-col z-10 overflow-hidden border ${
            isDark 
              ? 'bg-[#0A192F] border-[#233554] text-white' 
              : 'bg-white border-slate-200 text-[#0A192F]'
          }`}
        >
          {/* Top Header Bar */}
          <div className={`p-6 md:p-8 border-b flex flex-col md:flex-row md:items-center justify-between gap-6 ${
            isDark ? 'bg-[#0A192F] border-[#233554]' : 'bg-white border-slate-200'
          }`}>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-[10px] font-mono uppercase tracking-[0.25em] px-2.5 py-1 border ${
                  isDark ? 'bg-[#112240] border-[#233554] text-blue-200' : 'bg-slate-100 border-slate-300 text-slate-700'
                }`}>
                  Legal & Compliance Documentation
                </span>
                <span className={`text-[10px] font-mono uppercase tracking-widest ${isDark ? 'text-white' : 'text-[#0A192F] font-bold'}`}>
                  Zimbabwe Regulatory Framework 2026
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                {activeTab === 'privacy' && 'Customer Privacy & Data Protection Policy'}
                {activeTab === 'terms' && 'Master Terms of Service & Telematics SLA'}
                {activeTab === 'cookies' && 'Cookie & Digital Telemetry Policy'}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className={`hidden sm:inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest border px-4 py-3 transition-colors ${
                  isDark 
                    ? 'border-[#233554] hover:border-white bg-[#112240] text-blue-100 hover:text-white' 
                    : 'border-slate-300 hover:border-[#0A192F] bg-slate-100 text-slate-800 hover:text-black font-semibold'
                }`}
                title="Print or Save as PDF"
              >
                <Printer size={14} /> Print Document
              </button>
              <button
                onClick={onClose}
                aria-label="Close legal modal"
                className={`w-11 h-11 border flex items-center justify-center transition-colors cursor-pointer ${
                  isDark 
                    ? 'bg-[#112240] border-[#233554] hover:border-white text-white' 
                    : 'bg-white border-slate-300 hover:border-black text-slate-800'
                }`}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Document Navigation Tabs Bar */}
          <div className={`p-4 md:px-8 border-b flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 ${
            isDark ? 'bg-[#112240] border-[#233554]' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
              <button
                onClick={() => { setActiveTab('privacy'); setSearchQuery(''); }}
                className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-4 py-2.5 whitespace-nowrap transition-all border cursor-pointer ${
                  activeTab === 'privacy'
                    ? (isDark 
                        ? 'bg-white text-[#0A192F] border-white font-bold shadow-sm' 
                        : 'bg-[#0A192F] text-white border-[#0A192F] font-bold shadow-sm')
                    : (isDark 
                        ? 'bg-[#0A192F] text-blue-100 border-[#233554] hover:border-blue-200' 
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500')
                }`}
              >
                <Lock size={14} /> Privacy Policy
              </button>

              <button
                onClick={() => { setActiveTab('terms'); setSearchQuery(''); }}
                className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-4 py-2.5 whitespace-nowrap transition-all border cursor-pointer ${
                  activeTab === 'terms'
                    ? (isDark 
                        ? 'bg-white text-[#0A192F] border-white font-bold shadow-sm' 
                        : 'bg-[#0A192F] text-white border-[#0A192F] font-bold shadow-sm')
                    : (isDark 
                        ? 'bg-[#0A192F] text-blue-100 border-[#233554] hover:border-blue-200' 
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500')
                }`}
              >
                <Scale size={14} /> Terms of Service
              </button>

              <button
                onClick={() => { setActiveTab('cookies'); setSearchQuery(''); }}
                className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-4 py-2.5 whitespace-nowrap transition-all border cursor-pointer ${
                  activeTab === 'cookies'
                    ? (isDark 
                        ? 'bg-white text-[#0A192F] border-white font-bold shadow-sm' 
                        : 'bg-[#0A192F] text-white border-[#0A192F] font-bold shadow-sm')
                    : (isDark 
                        ? 'bg-[#0A192F] text-blue-100 border-[#233554] hover:border-blue-200' 
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500')
                }`}
              >
                <Cookie size={14} /> Cookie Policy
              </button>
            </div>

            {/* In-Document Search */}
            <div className="relative min-w-[240px]">
              <Search size={14} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                isDark ? 'text-blue-200' : 'text-slate-400'
              }`} />
              <input
                type="text"
                placeholder="Search clause or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full text-xs pl-9 pr-4 py-2 focus:outline-none transition-colors font-sans border ${
                  isDark 
                    ? 'bg-[#0A192F] border-[#233554] text-white placeholder:text-blue-200 focus:border-white' 
                    : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#0A192F]'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs cursor-pointer ${
                    isDark ? 'text-blue-200 hover:text-white' : 'text-slate-500 hover:text-black'
                  }`}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className={`px-6 md:px-8 py-2.5 border-b flex items-center justify-between text-xs font-mono ${
            isDark ? 'bg-[#0A192F] border-[#233554] text-blue-200' : 'bg-slate-100 border-slate-200 text-slate-600'
          }`}>
            <span>
              Last Updated: <strong className={isDark ? 'text-white' : 'text-[#0A192F]'}>March 2026</strong> | Applicable in Zimbabwe & Cross-Border SADC Corridor
            </span>
            <span className="hidden sm:inline">
              POTRAZ Certified & Cyber and Data Protection Act [Chapter 11:22] Compliant
            </span>
          </div>

          {/* Scrollable Content Body */}
          <div className={`flex-1 overflow-y-auto p-6 md:p-10 space-y-8 text-sm leading-relaxed ${
            isDark 
              ? 'bg-[#0A192F] text-blue-50 scrollbar-thin scrollbar-thumb-[#233554] scrollbar-track-[#0A192F]' 
              : 'bg-white text-slate-700 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100'
          }`}>
            {/* PRIVACY POLICY CONTENT */}
            {activeTab === 'privacy' && (
              <div className="space-y-8 max-w-4xl mx-auto">
                <div className={`p-5 border ${
                  isDark ? 'bg-[#112240] border-[#233554]' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={22} className={isDark ? 'text-emerald-400' : 'text-emerald-600'} />
                    <div>
                      <h3 className={`font-bold text-base uppercase tracking-tight mb-1 ${
                        isDark ? 'text-white' : 'text-[#0A192F]'
                      }`}>
                        Commitment to Data Privacy & Telematics Governance
                      </h3>
                      <p className={`text-xs ${isDark ? 'text-blue-100' : 'text-slate-600'}`}>
                        Alvary Technologies (Pvt) Ltd ("Alvary", "we", "us", or "our") operates vehicle tracking, remote telemetry, engine immobilization, and fleet intelligence platforms. We strictly safeguard all client telematics data under the laws of the Republic of Zimbabwe, specifically the <strong>Cyber & Data Protection Act [Chapter 11:22]</strong> and regulations stipulated by the Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 1 */}
                <section className="space-y-3">
                  <h4 className={`text-lg font-black uppercase tracking-tight flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    <span className="font-mono text-xs px-2 py-0.5 border border-current">01</span>
                    Scope and Categories of Information Collected
                  </h4>
                  <p>
                    When our certified technicians install an Alvary GPS hardware module (such as the Alvary ProTrack 4G, OBD-II Plug & Play, or EcoAsset Solar unit) or when you access the Alvary Cloud Portal, we process the following telemetry datasets:
                  </p>
                  <div className={`grid sm:grid-cols-2 gap-3 p-4 border ${
                    isDark ? 'bg-[#112240]/60 border-[#233554]' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div>
                      <strong className={`block text-xs font-mono uppercase mb-1 ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>
                        A. Vehicle Telemetry & Geolocation
                      </strong>
                      <ul className="list-disc pl-4 text-xs space-y-1">
                        <li>High-precision GNSS coordinates (latitude, longitude, elevation).</li>
                        <li>Vehicle heading, ground speed, and harsh braking / acceleration metrics.</li>
                        <li>Engine ignition state (ON/OFF) and idle telemetry.</li>
                        <li>CAN-bus engine diagnostics and error codes (OBD-II units).</li>
                      </ul>
                    </div>
                    <div>
                      <strong className={`block text-xs font-mono uppercase mb-1 ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>
                        B. Account & Fleet Identification
                      </strong>
                      <ul className="list-disc pl-4 text-xs space-y-1">
                        <li>Client registration name, authorized representative email, and phone numbers.</li>
                        <li>Vehicle Registration Number (VRN), chassis/VIN number, make and model.</li>
                        <li>Designated emergency contacts for 24/7 security dispatch.</li>
                        <li>Custom defined geofence boundary coordinates and speed thresholds.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section className="space-y-3">
                  <h4 className={`text-lg font-black uppercase tracking-tight flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    <span className="font-mono text-xs px-2 py-0.5 border border-current">02</span>
                    Lawful Basis and Purposes of Processing
                  </h4>
                  <p>
                    All telematics data is processed exclusively for explicit, legitimate business purposes contracted by the client:
                  </p>
                  <ul className="space-y-2 list-none pl-0">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className={`flex-shrink-0 mt-0.5 ${isDark ? 'text-blue-300' : 'text-[#0A192F]'}`} />
                      <span><strong>Asset Protection & Anti-Theft:</strong> Tracking stolen or hijacked vehicles and executing safe remote immobilization upon verified customer authorization.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className={`flex-shrink-0 mt-0.5 ${isDark ? 'text-blue-300' : 'text-[#0A192F]'}`} />
                      <span><strong>Automated Geofence Compliance:</strong> Triggering real-time SMS, WhatsApp, and email alerts when vehicles cross predefined municipal, national, or custom geographic perimeter zones.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className={`flex-shrink-0 mt-0.5 ${isDark ? 'text-blue-300' : 'text-[#0A192F]'}`} />
                      <span><strong>Fuel Optimization & Mileage Verification:</strong> Preventing fuel siphoning, unauthorized vehicle detours, and calculating route efficiency.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className={`flex-shrink-0 mt-0.5 ${isDark ? 'text-blue-300' : 'text-[#0A192F]'}`} />
                      <span><strong>Regulatory & Police Assistance:</strong> Generating certified GPS incident logs for insurance verification or Zimbabwe Republic Police (ZRP) investigations with verified court orders or owner consent.</span>
                    </li>
                  </ul>
                </section>

                {/* Section 3 */}
                <section className="space-y-3">
                  <h4 className={`text-lg font-black uppercase tracking-tight flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    <span className="font-mono text-xs px-2 py-0.5 border border-current">03</span>
                    Data Retention and Encryption Architecture
                  </h4>
                  <p>
                    All telemetry transmitted over cellular networks (Econet, NetOne, Telecel) is protected using TLS 1.3 protocol encryption in transit and AES-256 encryption at rest.
                  </p>
                  <div className={`p-4 border font-mono text-xs space-y-2 ${
                    isDark ? 'bg-[#0A192F] border-[#233554]' : 'bg-slate-100 border-slate-200'
                  }`}>
                    <div className="flex justify-between items-center py-1 border-b border-current/10">
                      <span>Live GPS Track Stream:</span>
                      <strong>Retained 90 Days Online</strong>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-current/10">
                      <span>Aggregated Fleet Trip & Mileage Summaries:</span>
                      <strong>Retained 12 Months</strong>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-current/10">
                      <span>Emergency Incident & Cut-off Logs:</span>
                      <strong>Retained 36 Months</strong>
                    </div>
                  </div>
                </section>

                {/* Section 4 */}
                <section className="space-y-3">
                  <h4 className={`text-lg font-black uppercase tracking-tight flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    <span className="font-mono text-xs px-2 py-0.5 border border-current">04</span>
                    Driver Privacy & Corporate Fleet Disclosures
                  </h4>
                  <p>
                    In accordance with workplace privacy guidelines in Zimbabwe, commercial fleet operators deploying Alvary hardware are required to inform their employed drivers that the vehicle is equipped with telematics and location recording hardware. Alvary Technologies is not responsible for any failure by a fleet employer to notify internal personnel of installed tracking equipment.
                  </p>
                </section>

                {/* Section 5 */}
                <section className="space-y-3">
                  <h4 className={`text-lg font-black uppercase tracking-tight flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    <span className="font-mono text-xs px-2 py-0.5 border border-current">05</span>
                    Your Rights Under Data Protection Law
                  </h4>
                  <p>
                    As an authorized account holder, you have the right to request an export of your historical GPS coordinate logs, update authorized control contacts, or request permanent deletion of vehicle records upon termination of your tracking service agreement.
                  </p>
                </section>
              </div>
            )}

            {/* TERMS OF SERVICE CONTENT */}
            {activeTab === 'terms' && (
              <div className="space-y-8 max-w-4xl mx-auto">
                <div className={`p-5 border ${
                  isDark ? 'bg-[#112240] border-[#233554]' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-start gap-3">
                    <Scale size={22} className={isDark ? 'text-blue-300' : 'text-[#0A192F]'} />
                    <div>
                      <h3 className={`font-bold text-base uppercase tracking-tight mb-1 ${
                        isDark ? 'text-white' : 'text-[#0A192F]'
                      }`}>
                        Terms of Service & Telematics Agreement
                      </h3>
                      <p className={`text-xs ${isDark ? 'text-blue-100' : 'text-slate-600'}`}>
                        These Master Terms of Service govern all hardware supply, professional fitment, cellular SIM connectivity, and cloud software licensing provided by Alvary Technologies (Pvt) Ltd to individuals and commercial fleet operators across Zimbabwe and the SADC region.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms Section 1 */}
                <section className="space-y-3">
                  <h4 className={`text-lg font-black uppercase tracking-tight flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    <span className="font-mono text-xs px-2 py-0.5 border border-current">01</span>
                    Hardware Fitment, Mobile Installation & Warranties
                  </h4>
                  <p>
                    All Alvary tracking devices (wired 4G modules, fuel level sensors, and remote relays) must be fitted by a certified Alvary technician or an authorized partner installer.
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Warranty Period:</strong> We provide a <strong>12-Month Replacement Warranty</strong> on all tracking hardware against manufacturing or component defects.</li>
                    <li><strong>Anti-Tamper Provision:</strong> Any unauthorized opening of the device enclosure, cutting of device tamper seals, or third-party electrical modifications voids the warranty immediately.</li>
                    <li><strong>Mobile Installation Guarantee:</strong> We offer 24 to 48-hour mobile fitment at your designated home, office, depot, or mine site across Harare, Bulawayo, Mutare, Gweru, and major regional corridors.</li>
                  </ul>
                </section>

                {/* Terms Section 2 */}
                <section className="space-y-3">
                  <h4 className={`text-lg font-black uppercase tracking-tight flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    <span className="font-mono text-xs px-2 py-0.5 border border-current">02</span>
                    Remote Engine Immobilization & Safe Deceleration Protocol
                  </h4>
                  <div className={`p-4 border ${
                    isDark ? 'bg-[#0A192F] border-amber-500/40 text-amber-200' : 'bg-amber-50 border-amber-300 text-amber-900'
                  }`}>
                    <div className="flex items-start gap-3">
                      <AlertTriangle size={18} className="flex-shrink-0 mt-0.5 text-amber-500" />
                      <div className="text-xs space-y-1">
                        <strong className="block uppercase tracking-wider font-mono">Critical Safety Protocol Notice</strong>
                        <p>
                          Remote fuel or starter cut-off relays are engineered with an intelligent safe-speed inhibitor. The command executes only when vehicle speed drops below 20 km/h or at ignition stop, preventing dangerous loss of power steering or brakes at highway speeds.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p>
                    Execution of an engine cut-off command is the sole operational responsibility of the verified account holder. Alvary Technologies is not liable for traffic infractions or mechanical consequences resulting from authorized client immobilization requests.
                  </p>
                </section>

                {/* Terms Section 3 */}
                <section className="space-y-3">
                  <h4 className={`text-lg font-black uppercase tracking-tight flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    <span className="font-mono text-xs px-2 py-0.5 border border-current">03</span>
                    Cellular Coverage & Cross-Border Roaming
                  </h4>
                  <p>
                    Alvary units utilize industrial multi-network M2M SIM cards configured with automatic roaming between Econet, NetOne, and regional SADC GSM carriers (South Africa, Mozambique, Zambia, Botswana):
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>In blackspot areas with zero GSM coverage, internal tracking hardware caches up to 100,000 GPS points in offline flash memory and auto-uploads the complete chronological route upon signal restoration.</li>
                    <li>Cross-border roaming plans must be selected during onboarding for fleets regularly operating on transport corridors outside Zimbabwe.</li>
                  </ul>
                </section>

                {/* Terms Section 4 */}
                <section className="space-y-3">
                  <h4 className={`text-lg font-black uppercase tracking-tight flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    <span className="font-mono text-xs px-2 py-0.5 border border-current">04</span>
                    Emergency Stolen Vehicle Recovery Protocol
                  </h4>
                  <p>
                    In the event of vehicle theft or hijacking:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1.5">
                    <li>The client must promptly notify our 24/7 emergency control room at <strong>+263 781 899 027</strong> and register a Police Incident / RRB Number with the Zimbabwe Republic Police (ZRP).</li>
                    <li>Our operations dispatch desk assists law enforcement and armed response units with live telemetry feeds, heading vectors, and remote immobilization coordination.</li>
                  </ol>
                </section>

                {/* Terms Section 5 */}
                <section className="space-y-3">
                  <h4 className={`text-lg font-black uppercase tracking-tight flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    <span className="font-mono text-xs px-2 py-0.5 border border-current">05</span>
                    Billing, Subscriptions & Service Termination
                  </h4>
                  <p>
                    Tracking service fees are billed monthly, quarterly, or annually. Accounts in arrears for more than 30 days may experience temporary cloud access suspension, though internal emergency tracking remains preserved. Cancellation of services requires thirty (30) days written notice.
                  </p>
                </section>
              </div>
            )}

            {/* COOKIE POLICY CONTENT */}
            {activeTab === 'cookies' && (
              <div className="space-y-8 max-w-4xl mx-auto">
                <div className={`p-5 border ${
                  isDark ? 'bg-[#112240] border-[#233554]' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-start gap-3">
                    <Cookie size={22} className={isDark ? 'text-amber-400' : 'text-amber-600'} />
                    <div>
                      <h3 className={`font-bold text-base uppercase tracking-tight mb-1 ${
                        isDark ? 'text-white' : 'text-[#0A192F]'
                      }`}>
                        Cookie & Telematics Diagnostic Policy
                      </h3>
                      <p className={`text-xs ${isDark ? 'text-blue-100' : 'text-slate-600'}`}>
                        This policy outlines how the Alvary Technologies web platform, tracking dashboard, and mobile portals utilize local storage, cookies, and session tokens to maintain real-time vehicle monitoring sessions.
                      </p>
                    </div>
                  </div>
                </div>

                <section className="space-y-3">
                  <h4 className={`text-lg font-black uppercase tracking-tight flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    <span className="font-mono text-xs px-2 py-0.5 border border-current">01</span>
                    Essential Operational Tokens
                  </h4>
                  <p>
                    These items are strictly necessary for the application to function securely:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Authentication Token:</strong> Keeps your fleet manager session safely authenticated without demanding repeated logins during continuous route monitoring.</li>
                    <li><strong>Theme & Display Preferences:</strong> Remembers your chosen UI aesthetic (High-Contrast Light Mode or Night Dark Mode).</li>
                    <li><strong>Map Viewport Cache:</strong> Stores your recent zoom level, center coordinates (e.g. Harare, Bulawayo), and layer settings (Satellite vs Street).</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h4 className={`text-lg font-black uppercase tracking-tight flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    <span className="font-mono text-xs px-2 py-0.5 border border-current">02</span>
                    Managing Your Preferences
                  </h4>
                  <p>
                    You can adjust or revoke your cookie choices at any time by clicking the "Cookie Preferences" button in the footer or utilizing your web browser's cookie clearance tools. Note that disabling essential session tokens will log you out of the live vehicle tracking console.
                  </p>
                </section>
              </div>
            )}
          </div>

          {/* Modal Bottom Action Footer */}
          <div className={`p-4 md:px-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
            isDark ? 'bg-[#112240] border-[#233554] text-blue-200' : 'bg-slate-50 border-slate-200 text-slate-600'
          }`}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Direct Legal Compliance Desk:</span>
              <a 
                href="mailto:alvarytechnologies@gmail.com?subject=Legal%20and%20Compliance%20Inquiry" 
                className={`font-bold underline ${isDark ? 'text-white' : 'text-[#0A192F]'}`}
              >
                alvarytechnologies@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/263781899027?text=Hi%20Alvary%20Technologies,%20I%20have%20a%20legal/compliance%20question%20regarding%20the%20telematics%20service%20agreement."
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2 border flex items-center gap-1.5 transition-colors font-bold uppercase tracking-wider ${
                  isDark 
                    ? 'border-white/30 hover:border-white bg-[#0A192F] text-white' 
                    : 'border-slate-300 hover:border-[#0A192F] bg-white text-[#0A192F]'
                }`}
              >
                <Phone size={12} /> WhatsApp Operations
              </a>
              <button
                onClick={onClose}
                className={`px-5 py-2 font-bold uppercase tracking-wider transition-colors ${
                  isDark ? 'bg-white text-[#0A192F] hover:bg-blue-50' : 'bg-[#0A192F] text-white hover:bg-[#112240]'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
