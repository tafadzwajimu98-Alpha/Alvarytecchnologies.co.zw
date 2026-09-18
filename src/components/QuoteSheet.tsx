import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, CheckCircle2, Car, Send, MessageSquare, 
  Mail, Building2, ShieldCheck, ArrowRight, Phone, Hash
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface QuoteSheetProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

const INDUSTRIES = [
  'Logistics & Long-Distance Haulage',
  'Public Transport, Commuter & Buses',
  'Mining, Construction & Heavy Plant',
  'Car Rental, Leasing & Chauffeur',
  'FMCG, Courier & Route Distribution',
  'Agriculture & Farm Machinery',
  'Corporate & Executive Fleet',
  'Personal / Family Vehicles',
  'Other Commercial Operations'
];

const VEHICLE_COUNT_PRESETS = ['1', '2 - 5', '6 - 15', '16 - 50', '50+'];

export const QuoteSheet: React.FC<QuoteSheetProps> = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicles, setVehicles] = useState('');
  const [industry, setIndustry] = useState('');
  const [interestedSolutions, setInterestedSolutions] = useState<string[]>([
    'GPS Real-time Tracking'
  ]);
  const [additionalNotes, setAdditionalNotes] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const toggleSolution = (solution: string) => {
    setInterestedSolutions(prev => 
      prev.includes(solution) 
        ? prev.filter(s => s !== solution)
        : [...prev, solution]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setValidationError('Please provide your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setValidationError('Please provide a valid email address.');
      return;
    }
    if (!vehicles.trim()) {
      setValidationError('Please specify the number of vehicles you own or operate.');
      return;
    }
    if (!industry) {
      setValidationError('Please select your industry sector.');
      return;
    }

    setValidationError('');
    setIsSubmitting(true);

    // Simulate reliable quote calculation & dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Save submission locally for persistence
      try {
        const lead = {
          name,
          email,
          phone,
          vehicles,
          industry,
          interestedSolutions,
          additionalNotes,
          timestamp: new Date().toISOString()
        };
        const existing = JSON.parse(localStorage.getItem('alvary_quote_requests') || '[]');
        localStorage.setItem('alvary_quote_requests', JSON.stringify([lead, ...existing]));
      } catch (err) {
        console.error('Failed to save quote request locally:', err);
      }
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Alvary Technologies team, I would like to request an official quote:\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone || 'N/A'}\n` +
      `*Fleet Size:* ${vehicles} vehicle(s)\n` +
      `*Industry:* ${industry}\n` +
      `*Solutions Needed:* ${interestedSolutions.join(', ')}\n` +
      (additionalNotes ? `*Notes:* ${additionalNotes}\n` : '')
    );
    window.open(`https://wa.me/263781899027?text=${text}`, '_blank');
  };

  const resetForm = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setVehicles('');
    setIndustry('');
    setAdditionalNotes('');
    setValidationError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`absolute inset-0 backdrop-blur-sm ${
              isDark ? 'bg-[#0A192F]/80' : 'bg-slate-900/60'
            }`}
          />

          {/* Right-aligned Sheet Drawer */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className={`w-screen max-w-xl shadow-2xl flex flex-col justify-between ${
                isDark 
                  ? 'bg-[#0A192F] border-l border-[#233554] text-white' 
                  : 'bg-white border-l border-slate-200 text-[#0A192F]'
              }`}
            >
              {/* Sheet Header */}
              <div className={`p-6 md:p-8 border-b flex items-start justify-between gap-4 ${
                isDark 
                  ? 'bg-[#0A192F] border-[#233554]' 
                  : 'bg-slate-50 border-slate-200'
              }`}>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 border flex items-center gap-1.5 ${
                      isDark 
                        ? 'bg-[#112240] text-blue-200 border-[#233554]' 
                        : 'bg-white text-slate-800 border-slate-300 font-bold'
                    }`}>
                      <ShieldCheck size={12} className={isDark ? 'text-white' : 'text-[#0A192F]'} /> Rapid Telematics Proposal
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 border ${
                      isDark 
                        ? 'text-emerald-400 bg-emerald-950/40 border-emerald-800/50' 
                        : 'text-emerald-700 bg-emerald-50 border-emerald-200 font-bold'
                    }`}>
                      24h Response
                    </span>
                  </div>
                  <h2 className={`text-2xl md:text-3xl font-black uppercase tracking-tight ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    Request a Fleet Quote
                  </h2>
                  <p className={`text-xs md:text-sm font-light mt-1 ${
                    isDark ? 'text-blue-100' : 'text-slate-600'
                  }`}>
                    Provide your fleet details below for a tailored equipment & subscription breakdown.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className={`w-10 h-10 border flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer ${
                    isDark 
                      ? 'bg-[#112240] hover:bg-white hover:text-[#0A192F] border-[#233554] text-white' 
                      : 'bg-white hover:bg-[#0A192F] hover:text-white border-slate-300 text-slate-700'
                  }`}
                  aria-label="Close quote sheet"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Sheet Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center flex flex-col items-center justify-center space-y-6"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl ${
                      isDark ? 'bg-white text-[#0A192F]' : 'bg-[#0A192F] text-white'
                    }`}>
                      <CheckCircle2 size={36} className="stroke-[2.5]" />
                    </div>
                    <div className="space-y-2 max-w-md">
                      <h3 className={`text-2xl font-black uppercase tracking-tight ${
                        isDark ? 'text-white' : 'text-[#0A192F]'
                      }`}>
                        Quote Request Received
                      </h3>
                      <p className={`text-sm leading-relaxed font-light ${
                        isDark ? 'text-blue-100' : 'text-slate-600'
                      }`}>
                        Thank you, <span className={`font-bold ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>{name}</span>! Our telematics engineering team is preparing your custom proposal for <span className={`font-bold ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>{vehicles} vehicle(s)</span> in the <span className={`font-bold ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>{industry}</span> sector.
                      </p>
                    </div>

                    <div className={`w-full border p-5 text-left text-xs font-mono space-y-2 ${
                      isDark 
                        ? 'bg-[#112240] border-[#233554] text-blue-100' 
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}>
                      <div className={`flex justify-between border-b pb-2 ${
                        isDark ? 'border-[#233554]' : 'border-slate-200'
                      }`}>
                        <span className={isDark ? 'text-blue-200' : 'text-slate-500'}>Reference ID:</span>
                        <span className={`font-bold ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>ALV-QT-{Math.floor(100000 + Math.random() * 900000)}</span>
                      </div>
                      <div className={`flex justify-between border-b pb-2 ${
                        isDark ? 'border-[#233554]' : 'border-slate-200'
                      }`}>
                        <span className={isDark ? 'text-blue-200' : 'text-slate-500'}>Official Dispatch Email:</span>
                        <span className={isDark ? 'text-white' : 'text-[#0A192F] font-bold'}>{email}</span>
                      </div>
                      <div className={`flex justify-between border-b pb-2 ${
                        isDark ? 'border-[#233554]' : 'border-slate-200'
                      }`}>
                        <span className={isDark ? 'text-blue-200' : 'text-slate-500'}>On-site Fitment Guarantee:</span>
                        <span className={isDark ? 'text-emerald-400' : 'text-emerald-700 font-bold'}>24 / 48h Nationwide</span>
                      </div>
                    </div>

                    <div className="w-full space-y-3 pt-2">
                      <button
                        onClick={handleWhatsAppSend}
                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-4 px-6 uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-colors shadow-lg cursor-pointer"
                      >
                        <MessageSquare size={18} /> Send Instantly via WhatsApp
                      </button>
                      <button
                        onClick={resetForm}
                        className={`w-full border font-bold py-3.5 px-6 uppercase tracking-widest text-xs transition-colors cursor-pointer ${
                          isDark 
                            ? 'bg-[#112240] hover:bg-white hover:text-[#0A192F] text-white border-[#233554]' 
                            : 'bg-slate-100 hover:bg-[#0A192F] hover:text-white text-slate-800 border-slate-300'
                        }`}
                      >
                        Close & Back to Site
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {validationError && (
                      <div className={`p-3 border text-xs font-medium ${
                        isDark ? 'bg-red-950/60 border-red-500/50 text-red-200' : 'bg-red-50 border-red-300 text-red-800'
                      }`}>
                        {validationError}
                      </div>
                    )}

                    {/* Number of Vehicles */}
                    <div className="space-y-2.5">
                      <label className="block text-xs font-mono uppercase tracking-widest flex items-center justify-between">
                        <span className={`flex items-center gap-2 font-bold ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>
                          <Car size={14} className={isDark ? 'text-white' : 'text-[#0A192F]'} /> Number of Vehicles Owned / Operated *
                        </span>
                        <span className={`text-[10px] font-mono ${isDark ? 'text-blue-200' : 'text-slate-500'}`}>Required</span>
                      </label>
                      <div className="grid grid-cols-5 gap-2 mb-2">
                        {VEHICLE_COUNT_PRESETS.map(preset => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => setVehicles(preset)}
                            className={`py-2 text-xs font-bold font-mono transition-all border cursor-pointer ${
                              vehicles === preset
                                ? (isDark 
                                    ? 'bg-white text-[#0A192F] border-white shadow-md' 
                                    : 'bg-[#0A192F] text-white border-[#0A192F] shadow-sm')
                                : (isDark 
                                    ? 'bg-[#112240] text-blue-100 border-[#233554] hover:border-white/50' 
                                    : 'bg-slate-100 text-slate-700 border-slate-300 hover:border-slate-500')
                            }`}
                          >
                            {preset}
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none ${
                          isDark ? 'text-blue-200' : 'text-slate-400'
                        }`}>
                          <Hash size={16} />
                        </div>
                        <input
                          type="text"
                          value={vehicles}
                          onChange={e => setVehicles(e.target.value)}
                          placeholder="Or type exact number of vehicles (e.g. 8)"
                          className={`w-full border pl-10 pr-4 py-3 text-sm transition-colors focus:outline-none ${
                            isDark 
                              ? 'bg-[#112240] border-[#233554] text-white focus:border-white' 
                              : 'bg-slate-50 border-slate-300 text-[#0A192F] focus:border-[#0A192F] focus:bg-white'
                          }`}
                          required
                        />
                      </div>
                    </div>

                    {/* Contact Name */}
                    <div className="space-y-2">
                      <label className={`block text-xs font-mono uppercase tracking-widest font-bold ${
                        isDark ? 'text-white' : 'text-[#0A192F]'
                      }`}>
                        Full Name / Contact Person *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="e.g. Tendai Moyo"
                        className={`w-full border px-4 py-3 text-sm transition-colors focus:outline-none ${
                          isDark 
                            ? 'bg-[#112240] border-[#233554] text-white focus:border-white' 
                            : 'bg-slate-50 border-slate-300 text-[#0A192F] focus:border-[#0A192F] focus:bg-white'
                        }`}
                        required
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label className={`block text-xs font-mono uppercase tracking-widest font-bold flex items-center justify-between ${
                        isDark ? 'text-white' : 'text-[#0A192F]'
                      }`}>
                        <span className="flex items-center gap-2">
                          <Mail size={14} className={isDark ? 'text-white' : 'text-[#0A192F]'} /> Email Address *
                        </span>
                        <span className={`text-[10px] font-mono ${isDark ? 'text-blue-200' : 'text-slate-500'}`}>Formal quote destination</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="e.g. tmoyo@transport.co.zw"
                        className={`w-full border px-4 py-3 text-sm transition-colors focus:outline-none ${
                          isDark 
                            ? 'bg-[#112240] border-[#233554] text-white focus:border-white' 
                            : 'bg-slate-50 border-slate-300 text-[#0A192F] focus:border-[#0A192F] focus:bg-white'
                        }`}
                        required
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="space-y-2">
                      <label className={`block text-xs font-mono uppercase tracking-widest font-bold flex items-center justify-between ${
                        isDark ? 'text-white' : 'text-[#0A192F]'
                      }`}>
                        <span className="flex items-center gap-2">
                          <Phone size={14} className={isDark ? 'text-white' : 'text-[#0A192F]'} /> Phone / WhatsApp Number
                        </span>
                        <span className={`text-[10px] font-mono ${isDark ? 'text-blue-200' : 'text-slate-500'}`}>Fast dispatch</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="+263 781 899 027"
                        className={`w-full border px-4 py-3 text-sm transition-colors focus:outline-none ${
                          isDark 
                            ? 'bg-[#112240] border-[#233554] text-white focus:border-white' 
                            : 'bg-slate-50 border-slate-300 text-[#0A192F] focus:border-[#0A192F] focus:bg-white'
                        }`}
                      />
                    </div>

                    {/* Industry Sector */}
                    <div className="space-y-2">
                      <label className={`block text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-2 ${
                        isDark ? 'text-white' : 'text-[#0A192F]'
                      }`}>
                        <Building2 size={14} className={isDark ? 'text-white' : 'text-[#0A192F]'} /> Industry Sector *
                      </label>
                      <select
                        value={industry}
                        onChange={e => setIndustry(e.target.value)}
                        className={`w-full border px-4 py-3 text-sm transition-colors cursor-pointer focus:outline-none ${
                          isDark 
                            ? 'bg-[#112240] border-[#233554] text-white focus:border-white' 
                            : 'bg-slate-50 border-slate-300 text-[#0A192F] focus:border-[#0A192F] focus:bg-white'
                        }`}
                        required
                      >
                        <option value="" disabled className={isDark ? 'bg-[#0A192F] text-blue-200' : 'bg-white text-slate-500'}>
                          Select your industry...
                        </option>
                        {INDUSTRIES.map((ind, idx) => (
                          <option key={idx} value={ind} className={isDark ? 'bg-[#0A192F] text-white' : 'bg-white text-[#0A192F]'}>
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Solutions Desired */}
                    <div className="space-y-2.5">
                      <label className={`block text-xs font-mono uppercase tracking-widest ${
                        isDark ? 'text-blue-200' : 'text-slate-600 font-bold'
                      }`}>
                        Primary Telematics Requirements
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          'GPS Real-time Tracking',
                          'OBD-II Plug & Play',
                          'Precision Fuel Probes',
                          'Speed Limiters (SABS)',
                          'AI Dashcams & MDVR',
                          'Remote Engine Cut-Off'
                        ].map(sol => (
                          <button
                            key={sol}
                            type="button"
                            onClick={() => toggleSolution(sol)}
                            className={`p-2.5 text-left text-xs font-medium border flex items-center justify-between transition-colors cursor-pointer ${
                              interestedSolutions.includes(sol)
                                ? (isDark 
                                    ? 'bg-[#112240] text-white border-white' 
                                    : 'bg-slate-100 text-[#0A192F] border-[#0A192F] font-bold')
                                : (isDark 
                                    ? 'bg-[#0A192F] text-blue-200 border-[#233554] hover:border-white/40' 
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400')
                            }`}
                          >
                            <span>{sol}</span>
                            <span className={`w-3.5 h-3.5 border flex items-center justify-center ${
                              interestedSolutions.includes(sol)
                                ? (isDark ? 'bg-white border-white text-[#0A192F]' : 'bg-[#0A192F] border-[#0A192F] text-white')
                                : (isDark ? 'border-[#233554]' : 'border-slate-300')
                            }`}>
                              {interestedSolutions.includes(sol) && (
                                <span className={`w-1.5 h-1.5 ${isDark ? 'bg-[#0A192F]' : 'bg-white'}`} />
                              )}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="space-y-2">
                      <label className={`block text-xs font-mono uppercase tracking-widest ${
                        isDark ? 'text-blue-200' : 'text-slate-600 font-bold'
                      }`}>
                        Special Fleet Requirements or Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={additionalNotes}
                        onChange={e => setAdditionalNotes(e.target.value)}
                        placeholder="e.g. Trucks operate cross-border into Mozambique and South Africa..."
                        className={`w-full border p-3 text-sm transition-colors focus:outline-none ${
                          isDark 
                            ? 'bg-[#112240] border-[#233554] text-white focus:border-white' 
                            : 'bg-slate-50 border-slate-300 text-[#0A192F] focus:border-[#0A192F] focus:bg-white'
                        }`}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full font-black py-4 px-6 uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-colors shadow-lg cursor-pointer disabled:opacity-50 ${
                          isDark 
                            ? 'bg-white hover:bg-[#E6F1FF] text-[#0A192F]' 
                            : 'bg-[#0A192F] hover:bg-[#112240] text-white'
                        }`}
                      >
                        {isSubmitting ? (
                          <span>Processing Fleet Proposal...</span>
                        ) : (
                          <>
                            Generate My Fleet Proposal <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Trust Badges */}
                    <div className={`pt-2 border-t flex items-center justify-between text-[10px] font-mono ${
                      isDark ? 'border-[#233554] text-blue-200' : 'border-slate-200 text-slate-600 font-bold'
                    }`}>
                      <span>✓ 100% Confidential</span>
                      <span>✓ Zero Obligation</span>
                      <span>✓ Harare & Bulawayo Teams</span>
                    </div>
                  </form>
                )}
              </div>

              {/* Sheet Footer */}
              <div className={`p-4 md:px-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs ${
                isDark 
                  ? 'bg-[#112240] border-[#233554] text-blue-200' 
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}>
                <span className="font-mono text-[11px]">
                  Direct Inquiries: <strong className={isDark ? 'text-white' : 'text-[#0A192F]'}>+263 781 899 027</strong>
                </span>
                <span className={`font-mono text-[11px] ${isDark ? 'text-blue-200' : 'text-slate-600'}`}>
                  alvarytechnologies@gmail.com
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
