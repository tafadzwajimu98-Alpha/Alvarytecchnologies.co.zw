/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  MapPin, 
  Key, 
  History, 
  Smartphone, 
  Truck, 
  Phone, 
  Mail, 
  Map, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Lock, 
  Unlock,
  Activity,
  Menu,
  X,
  CreditCard,
  Target,
  Zap,
  ChevronDown,
  HelpCircle,
  Cpu,
  RefreshCw,
  AlertTriangle,
  Radio,
  Copy,
  Check,
  Info,
  ArrowLeft,
  Wifi,
  Laptop
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ShowcaseImg4 from './assets/images/regenerated_image_1778503906343.jpg';
import HowItWorksImg from './assets/images/regenerated_image_1778504127387.jpg';
import LogoIcon from './assets/images/regenerated_image_1778504701095.jpg';

// Types
type SectionId = 'home' | 'services' | 'app-sync' | 'why-us' | 'about' | 'pricing' | 'contact' | 'how-it-works';

const HERO_IMAGE = "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=2070";

const Logo = ({ scrolled, light = false }: { scrolled?: boolean, light?: boolean }) => {
  const textPrimaryClass = light ? 'text-white' : (scrolled ? 'text-slate-900' : 'text-white');
  const textSecondaryClass = light ? 'text-brand-500' : (scrolled ? 'text-brand-600' : 'text-brand-400');

  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-lg shadow-brand-600/20">
        <img 
          src={LogoIcon} 
          alt="Alvary Icon" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col">
        <span className={`text-2xl font-bold tracking-tight leading-none ${textPrimaryClass}`}>
          ALVARY
        </span>
        <span className={`text-[10px] font-bold tracking-[0.3em] uppercase leading-none mt-1 ${textSecondaryClass}`}>
          TECHNOLOGIES
        </span>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex w-full items-center justify-between text-left focus:outline-none group"
      >
        <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors pr-6">{question}</h4>
        <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-brand-600' : 'text-slate-400 group-hover:text-brand-600'}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const comparisonFeatures = [
  { name: "Real-Time Monitoring", starter: true, elite: true, desc: "Instant high-precision location updates via web & mobile portals" },
  { name: "Route Playback", starter: true, elite: true, desc: "Review 3-month detailed historical replay of traveling routes" },
  { name: "Geofencing Boundaries", starter: true, elite: true, desc: "Establish virtual borders with automated entry and exit alerts" },
  { name: "Overspeeding Alerts", starter: true, elite: true, desc: "Immediate driver speed limit violation mobile/SMS notifications" },
  { name: "Ignition Detection", starter: true, elite: true, desc: "Continuous live engine status monitoring (On, Idle, Off)" },
  { name: "SOS Panic Button", starter: false, elite: true, desc: "Dedicated physical dashboard console button for safety emergencies" },
  { name: "Voice Cabin Monitoring", starter: false, elite: true, desc: "Equipped with a high-gain live audio listening microphone" },
  { name: "Remote Engine Cutoff Relay", starter: false, elite: true, desc: "Instantly halt the engine/fuel pump securely from the remote app and system limits" },
  { name: "FREE SIM Card", starter: true, elite: true, desc: "Pre-provisioned local GSM SIM card included in the telemetry package" },
  { name: "2 Months Complimentary Data", starter: true, elite: true, desc: "Fully funded active network cellular data plan for the first 60 days" },
  { name: "Onboard Backup Battery Protection", starter: true, elite: true, desc: "Internal lithium cell security backup continues tracking if the vehicle battery is cut" }
];

interface HelpTopic {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  iconName: 'device-reset' | 'troubleshoot-gps' | 'engine-cutoff' | 'sync-issue';
  steps: { text: string; details?: string }[];
  commandToCopy?: string;
  recommendation?: string;
}

const HELP_TOPICS: HelpTopic[] = [
  {
    id: "device-reset",
    title: "Device Reset Instructions",
    shortDesc: "Reboot your Alvary GPS tracker to clear temporary connectivity errors.",
    category: "Hardware",
    iconName: "device-reset",
    commandToCopy: "RESET#",
    recommendation: "Perform a backup battery cycle only if the soft reset command fails to respond.",
    steps: [
      { text: "Option A: SMS Soft Reset Command", details: "If the SIM card inside your tracker is active, you can reboot the device remotely. Copy the SMS command 'RESET#' below, send it to your vehicle's tracker phone number from your registered master phone number, and wait 60 seconds." },
      { text: "Option B: Physical Hard Reset", details: "Locate the GPS tracker device (typically installed securely behind the glovebox or under the steering console). Locate the tiny pinhole on the side. Insert a thin paperclip/SIM ejector tool and hold it down for 10 seconds until the red and green LEDs flash in unison." },
      { text: "Confirming Device Status After Reboot", details: "Within 2-3 minutes of resetting, both Cellular (green) and GPS (blue/orange) light indicators should start flashing slowly, signaling a stable system reconnect." }
    ]
  },
  {
    id: "troubleshoot-gps",
    title: "Troubleshooting Bad GPS Signals",
    shortDesc: "Fix inaccurate location readings or offline/stale vehicle positions.",
    category: "Telemetry",
    iconName: "troubleshoot-gps",
    commandToCopy: "WHERE#",
    recommendation: "Always ensure the vehicle has an unobstructed, direct line of sight to the outdoor sky.",
    steps: [
      { text: "Check Physical Vehicle Environment", details: "GPS signals require line-of-sight satellite reception. If your vehicle is inside an underground parking garage, under a dense concrete canopy, or deep in heavy steel-constructed warehouses, GPS tracking may pause or fall back to Cell-Tower triangulation." },
      { text: "Query Current GPS Coordinates Directly", details: "You can force-query the locator module to respond with its raw parameters. Copy the SMS command 'WHERE#' below and send it to your tracker's phone number. The device will reply back with its raw latitude and longitude coordinates in a Google Maps link if it has a signal." },
      { text: "Verify Ignition Power & 'Sleep Mode' Active", details: "Our trackers auto-enter a battery-saver Sleep Mode 10 minutes after the engine is turned off. Start the car and drive a short distance (more than 20 meters) to trigger the high-precision G-sensor accelerometer and force real-time updates." }
    ]
  },
  {
    id: "engine-cutoff",
    title: "Immobilizer & Engine Cut-Off Help",
    shortDesc: "Steps to safely diagnose and verify the remote engine shutdown relay.",
    category: "Security",
    iconName: "engine-cutoff",
    commandToCopy: "STOPENGINE#1234",
    recommendation: "For active driver safety, Alvary restricts remote engine halts when traveling above 15 km/h.",
    steps: [
      { text: "Understand the Speed Safety Guard", details: "To prevent sudden highway lockups and serious road accidents, the smart control system holds the engine shutdown signal in queue if the tracker detects active motion speed above 15 km/h. The relay will securely lock the fuel pump the moment the car slows down or comes to an idle stop." },
      { text: "Validate Security PIN Validation", details: "Copy and customize the template command below: 'STOPENGINE#[Your4DigitPIN]'. Re-send it via the app control panel or encrypted SMS gateway using your authorized master phone number registered with Alvary." },
      { text: "Physical Relay Inspection & Bypass", details: "If the engine completely fails to crank even after sending a start command ('STARTENGINE#'), check the wiring harness fuse under the steering column to guarantee the heavy-duty automotive relay has not blown or shaken loose on rugged gravel roads." }
    ]
  },
  {
    id: "sync-issue",
    title: "Portal & Mobile App Synchronization",
    shortDesc: "Fix issues where vehicle metrics or offline status are delayed in the app.",
    category: "Software",
    iconName: "sync-issue",
    commandToCopy: "STATUS#",
    recommendation: "Ensure your annual or monthly telemetry subscription rate has been fully credited for active SIM cellular service.",
    steps: [
      { text: "Force-Refresh Dashboard App State", details: "Slide down from the top on the Alvary Fleet Mobile dashboard to perform a hard data re-fetch, or clear the mobile web portal's storage cookies and log back in to renew your secure API session token." },
      { text: "Diagnose Device SIM Signal Status", details: "Copy and send the 'STATUS#' diagnostic query command via SMS to check cellular latency, signal decibels, and connection packet success. If the return SMS states 'GPRS: Link Down', the onboard network plan requires top-up or the local Econet/NetOne cellular tower is experiencing temporary outage." },
      { text: "Subscription & Account Lock Checks", details: "Confirm that your account tracking subscription is fully active. Accounts that are overdue past the 14-day formal grace period are automatically queued for network suspension, resulting in continuous offline status in the tracking logs." }
    ]
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);

  // Authentication states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('admin@alvary.co.zw');
  const [password, setPassword] = useState('admin9904');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginStep, setLoginStep] = useState('');
  const [loginStepIndex, setLoginStepIndex] = useState(0);
  const [loginError, setLoginError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Quick Help state variables
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState('device-reset');
  const [mobileView, setMobileView] = useState<'list' | 'detail'>('list');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Mobile App Integration Simulator states
  const [syncPlate, setSyncPlate] = useState('AEG-9904');
  const [simulatedVehicle, setSimulatedVehicle] = useState('Toyota Hilux GD6');
  const [simulatedSpeed, setSimulatedSpeed] = useState(0);
  const [isEngineOn, setIsEngineOn] = useState(true);
  const [isFuelRelayLocked, setIsFuelRelayLocked] = useState(false);
  const [mockNotification, setMockNotification] = useState<{ title: string; body: string; type: 'info' | 'danger' | 'success' } | null>(null);
  const [showPairingQR, setShowPairingQR] = useState(false);
  const [pairingToken, setPairingToken] = useState('ALV-9904-SYNC');
  const [showPairingSuccess, setShowPairingSuccess] = useState(false);

  const handleCopyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedText(command);
    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  const getTopicIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'device-reset':
        return <RefreshCw className={className} />;
      case 'troubleshoot-gps':
        return <Radio className={className} />;
      case 'engine-cutoff':
        return <Zap className={className} />;
      case 'sync-issue':
        return <Smartphone className={className} />;
      default:
        return <HelpCircle className={className} />;
    }
  };

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleCookieAction = (action: 'accept' | 'reject') => {
    localStorage.setItem('cookie-consent', action);
    setShowCookieConsent(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (!isLoggedIn) {
    const handleLoginSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!email.trim() || !password.trim()) {
        setLoginError('Please enter your email and password credentials.');
        return;
      }
      setLoginError('');
      setIsLoggingIn(true);
      
      const steps = [
        "Initializing terminal handshake protocol...",
        "Querying Harare cloud node gateways...",
        "Authenticating RSA secure credentials...",
        "Syncing Alvary Zimbabwe telematics database...",
        "Establishing persistent GPRS server stream..."
      ];
      
      let stepIdx = 0;
      setLoginStep(steps[0]);
      setLoginStepIndex(0);
      
      const interval = setInterval(() => {
        stepIdx++;
        if (stepIdx < steps.length) {
          setLoginStep(steps[stepIdx]);
          setLoginStepIndex(stepIdx);
        } else {
          clearInterval(interval);
          setIsLoggingIn(false);
          setIsLoggedIn(true);
        }
      }, 400);
    };

    return (
      <div className="min-h-screen bg-slate-950 flex flex-col lg:flex-row relative overflow-hidden font-sans text-slate-100 select-none">
        {/* Dynamic Grid Background Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Left Module: Live Workstation Visualizer Dashboard */}
        <div className="hidden lg:flex lg:w-1/2 p-16 flex-col justify-between relative bg-slate-950 border-r border-slate-900/50 z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center overflow-hidden shadow-lg shadow-brand-600/20">
              <img src={LogoIcon} alt="Alvary" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight leading-none text-white block">ALVARY CENTRAL</span>
              <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-brand-400 block mt-0.5">TELEMATICS GATEWAY</span>
            </div>
          </div>

          <div className="max-w-xl space-y-6 relative my-auto">
            <span className="text-[10px] font-black uppercase bg-brand-500/10 text-brand-400 px-3.5 py-1.5 rounded-full border border-brand-500/20 inline-block tracking-widest">
              ⚡ LIVE WORKSTATION MATRIX
            </span>
            <h1 className="text-4xl xl:text-5xl font-black text-white font-sans tracking-tight leading-tight">
              Secure Vehicle Tracking & <span className="text-brand-500">Fleet Dispatch Portal</span>
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Zimbabwe's premiere real-time tracking console. Monitor remote Solenoid engine cut-offs, analyze highway speed zones, manage geofencing safety boundaries, and sync directly with user smartphones.
            </p>

            {/* Simulated Live telemetry card */}
            <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-400 tracking-wider uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Gateway Operations Status
                </span>
                <span className="text-[10px] uppercase font-bold text-emerald-400 font-mono">100% SECURE</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block font-mono">Harare Node</span>
                  <span className="text-sm font-black text-white block mt-0.5">🟢 ACTIVE</span>
                  <span className="text-[8px] text-slate-500 block leading-none mt-1">2.4ms latency</span>
                </div>
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block font-mono">Bulawayo Node</span>
                  <span className="text-sm font-black text-white block mt-0.5">🟢 ONLINE</span>
                  <span className="text-[8px] text-slate-500 block leading-none mt-1">4.1ms latency</span>
                </div>
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block font-mono">Gweru Node</span>
                  <span className="text-sm font-black text-white block mt-0.5">🟢 STANDBY</span>
                  <span className="text-[8px] text-slate-500 block leading-none mt-1">Ready</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-slate-500 text-xs border-t border-slate-900/60 pt-6">
            <span>© 2026 Alvary Technologies Zimbabwe</span>
            <span className="font-mono text-[10px]">v4.8 - Harare Central Hub</span>
          </div>
        </div>

        {/* Right Module: Safe Secure Login Card Frame */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-16 relative z-10 bg-slate-900/10 backdrop-blur-md min-h-screen">
          <div className="w-full max-w-md bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-slate-800 p-8 md:p-10 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-8 space-y-2">
              <div className="lg:hidden flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center overflow-hidden">
                  <img src={LogoIcon} alt="Alvary" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-black tracking-tight text-white leading-none uppercase">ALVARY TECHNOLOGIES</span>
              </div>
              
              <span className="text-[10px] uppercase font-black bg-slate-950 border border-slate-850 px-3 py-1.5 rounded-md inline-block tracking-widest text-brand-400 font-mono">
                🔒 SECURITY COMPLIANT GATEWAY
              </span>
              <h2 className="text-2xl font-black text-white font-sans tracking-tight">Client Hub Sign In</h2>
              <p className="text-slate-400 text-xs leading-relaxed">
                Connect your master terminal account parameters to access active telemetry dispatch panels.
              </p>
            </div>

            {/* Instant Demo Autoload Banner */}
            <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="text-left font-sans">
                <span className="text-[9px] font-black uppercase text-slate-500 leading-tight block tracking-wider">Access Node</span>
                <span className="text-xs font-bold text-slate-300 block mt-0.5 leading-snug">Demo account preloaded</span>
                <span className="text-[10px] text-brand-400 block leading-tight font-mono mt-0.5">admin@alvary.co.zw</span>
              </div>
              <button 
                type="button"
                onClick={() => {
                  setEmail('admin@alvary.co.zw');
                  setPassword('admin9904');
                  setLoginError('');
                }}
                className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-bold text-xs px-3 py-2 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer shrink-0"
              >
                <Key size={12} />
                Instant Autofill
              </button>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {loginError && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium">
                  ⚠️ {loginError}
                </div>
              )}

              <div className="space-y-1">
                <label className="block text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                    <Mail size={16} />
                  </span>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="operator@alvary.co.zw"
                    disabled={isLoggingIn}
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-10 pr-4 py-2.5 placeholder-slate-650 text-xs focus:outline-none focus:border-brand-500 transition-all font-medium disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="block text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Security Key</label>
                  <button 
                    type="button"
                    onClick={() => {
                      setLoginError("Demo accounts passwords are pre-secured. Click Instant Autofill to restore defaults.");
                    }}
                    className="text-[9px] font-bold text-brand-500 hover:text-brand-400 transition-colors uppercase tracking-wide cursor-pointer"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                    <Lock size={16} />
                  </span>
                  <input 
                    type={passwordVisible ? "text" : "password"} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    disabled={isLoggingIn}
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-10 pr-16 py-2.5 placeholder-slate-650 text-xs focus:outline-none focus:border-brand-500 transition-all font-mono disabled:opacity-50"
                  />
                  <button 
                    type="button" 
                    disabled={isLoggingIn}
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-[10px] font-bold text-slate-500 hover:text-slate-300 transition-colors cursor-pointer select-none uppercase tracking-widest"
                  >
                    {passwordVisible ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="flex items-center pt-1">
                <input 
                  id="remember" 
                  type="checkbox" 
                  defaultChecked
                  className="w-3.5 h-3.5 rounded text-brand-500 bg-slate-950 border-slate-800 focus:ring-brand-500 border-none cursor-pointer" 
                />
                <label htmlFor="remember" className="ml-2 text-xs text-slate-400 leading-none select-none cursor-pointer">
                  Remember terminal parameters
                </label>
              </div>

              {/* Login Submit Command */}
              {isLoggingIn ? (
                <div className="space-y-3 pt-2">
                  <button 
                    type="button" 
                    disabled
                    className="w-full bg-brand-600/50 text-slate-300 font-bold py-2.5 rounded-xl cursor-not-allowed text-xs flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw size={14} className="animate-spin text-white" />
                    Connecting...
                  </button>
                  <div className="space-y-1.5 font-mono">
                    <div className="flex items-center justify-between text-[8px] font-black uppercase text-slate-400">
                      <span>Gateway handshake</span>
                      <span className="text-brand-400">{Math.round((loginStepIndex + 1) * 20)}%</span>
                    </div>
                    {/* Progress Bar visual indicator */}
                    <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                      <motion.div 
                        initial={{ width: '0%' }}
                        animate={{ width: `${(loginStepIndex + 1) * 20}%` }}
                        transition={{ duration: 0.3 }}
                        className="h-full bg-brand-500"
                      />
                    </div>
                    <p className="text-[9px] text-brand-400 italic text-center leading-none mt-1 animate-pulse">
                      {loginStep}
                    </p>
                  </div>
                </div>
              ) : (
                <button 
                  type="submit" 
                  className="w-full bg-brand-600 hover:bg-brand-700 active:scale-98 text-white font-bold py-2.5 rounded-xl transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-brand-600/10"
                >
                  <Shield size={14} />
                  Establish Dispatch Connection
                </button>
              )}
            </form>

            <div className="border-t border-slate-800/60 pt-4 mt-6 flex flex-col text-center space-y-1 select-none">
              <span className="text-[8px] text-slate-500 uppercase font-black">Authorized Personnel Only</span>
              <p className="text-[9px] text-slate-500 leading-normal max-w-xs mx-auto">
                System activities are logged securely under Zimbabwe cyber security directives.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => scrollToSection('home')}>
            <Logo scrolled={scrolled} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'App Sync', 'Why Us', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                  scrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {item}
              </button>
            ))}
            <a 
              href="https://wa.me/263781899027" 
              className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-brand-600/20"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>

            {/* Operator Session & Logout options */}
            <div className={`flex items-center gap-3 border-l ${scrolled ? 'border-slate-200 text-slate-850' : 'border-white/20 text-white'} pl-5 ml-1 select-none`}>
              <div className="flex flex-col text-right">
                <span className={`text-[9px] font-black uppercase tracking-wider ${scrolled ? 'text-brand-600' : 'text-brand-400 font-bold'}`}>CONSOLE SESSION</span>
                <span className={`text-[11px] font-bold ${scrolled ? 'text-slate-500' : 'text-slate-300'}`}>admin@alvary.co.zw</span>
              </div>
              <button 
                onClick={() => {
                  setIsLoggedIn(false);
                  setIsLoggingIn(false);
                }} 
                className={`p-2 rounded-xl transition-all flex items-center justify-center cursor-pointer ${
                  scrolled 
                    ? 'bg-rose-50 hover:bg-rose-105 hover:bg-rose-100 text-rose-600 border border-rose-100' 
                    : 'bg-white/10 hover:bg-white/15 text-rose-400 border border-white/5 shadow-inner'
                }`}
                title="Disconnect Terminal Session"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {['Home', 'Services', 'App Sync', 'Why Us', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-2xl font-bold text-slate-800"
                >
                  {item}
                </button>
              ))}
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-4">
                <a href="tel:+263781899027" className="flex items-center justify-center gap-2 text-brand-600 font-bold text-lg">
                  <Phone size={20} /> Call Now
                </a>
                <a href="https://wa.me/263781899027" className="bg-brand-600 text-white py-4 rounded-xl font-bold text-lg">
                  WhatsApp Us
                </a>
                <button 
                  onClick={() => {
                    setIsLoggedIn(false);
                    setIsLoggingIn(false);
                    setIsMenuOpen(false);
                  }}
                  className="bg-rose-50 text-rose-600 border border-rose-100 py-3.5 rounded-xl font-bold text-lg cursor-pointer transition-all hover:bg-rose-100/50 flex items-center justify-center gap-2"
                >
                  <Lock size={18} />
                  Disconnect Session
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            src="https://assets.mixkit.co/videos/preview/mixkit-car-driving-on-a-highway-at-sunset-41484-large.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster={HERO_IMAGE}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
                Smart Vehicle Tracking & <span className="text-brand-500">Fleet Management</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-100/90 mb-10 max-w-2xl leading-relaxed">
                Real-time tracking, engine cut-off, geofencing, and fleet monitoring for individuals and businesses in Zimbabwe. Protect what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contact')} className="bg-white text-brand-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-50 transition-colors flex items-center justify-center gap-2">
                  <Key size={20} /> Get Installation
                </button>
                <a href="tel:+263781899027" className="border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Phone size={20} /> Call Now
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-900 bg-brand-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${i === 1 ? '1535713875002-d1d0cf377fde' : i === 2 ? '1494790108377-be9c29b29330' : i === 3 ? '1599566150163-29194dcaad36' : '1580489944761-15a19d654956'}?auto=format&fit=crop&q=80&w=100`} alt="Customer" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-white/80">
                <p className="font-bold text-white">500+ Vehicles Tracked</p>
                <div className="flex items-center gap-1 text-yellow-400">
                  {"★".repeat(5)} <span className="text-sm ml-1 text-white/60">Professional Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats / Features Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: <Activity className="text-brand-600" />, label: "Live Tracking", desc: "Real-time precision" },
              { icon: <Lock className="text-brand-600" />, label: "Anti-Theft", desc: "Engine cut-off tech" },
              { icon: <Target className="text-brand-600" />, label: "Geofencing", desc: "Virtual border alerts" },
              { icon: <Users className="text-brand-600" />, label: "Fleet Ready", desc: "Business optimization" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="mb-4 bg-brand-50 p-4 rounded-2xl">
                  {stat.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{stat.label}</h3>
                <p className="text-sm text-slate-500">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive Tracking Solutions</h3>
            <p className="text-slate-600 text-lg">Whether you're an individual owner or a large logistics firm, we have the tools to keep you in control.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Tracking */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-xl transition-all group">
              <div className="bg-brand-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Smartphone size={28} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Personal Vehicle Tracking</h4>
              <p className="text-slate-600 mb-8 flex-grow">
                Keep your private car, SUV, or motorcycle safe. Monitor location 24/7 and immobilize the engine if theft is suspected.
              </p>
              <ul className="space-y-3 mb-8">
                {["Live Tracking App", "Anti-Theft Features", "Route History", "Mobile Alerts"].map(f => (
                  <li key={f} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 size={18} className="text-brand-600" /> {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full py-4 border-2 border-brand-600 text-brand-600 font-bold rounded-xl hover:bg-brand-600 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight size={18} />
              </button>
            </div>

            {/* Fleet Management */}
            <div className="bg-brand-900 p-10 rounded-3xl shadow-xl border border-brand-800 flex flex-col h-full text-white scale-105 relative z-10">
              <div className="absolute top-0 right-0 p-6">
                <span className="bg-brand-500 text-white text-[10px] uppercase font-black px-3 py-1 rounded-full">POPULAR</span>
              </div>
              <div className="bg-brand-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <Truck size={28} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Fleet Management</h4>
              <p className="text-brand-100/80 mb-8 flex-grow">
                Professional monitoring for trucks, delivery vans, and company fleets. Optimize routes and monitor driver behavior.
              </p>
              <ul className="space-y-3 mb-8">
                {["Fuel Management", "Driver Performance", "Maintenance Reminders", "Bulk Monitoring Dashboard"].map(f => (
                  <li key={f} className="flex items-center gap-3 text-brand-50">
                    <CheckCircle2 size={18} className="text-brand-400" /> {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full py-4 bg-brand-500 text-white font-bold rounded-xl hover:bg-brand-400 transition-all flex items-center justify-center gap-2"
              >
                Request Quote <ArrowRight size={18} />
              </button>
            </div>

            {/* Security Solutions */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-xl transition-all group">
              <div className="bg-brand-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Lock size={28} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Security Solutions</h4>
              <p className="text-slate-600 mb-8 flex-grow">
                Advanced security configurations including voice monitoring, SOS buttons, and heavy-duty tamper detection.
              </p>
              <ul className="space-y-3 mb-8">
                {["Engine Immobilization", "Voice Monitoring", "SOS Emergency Alerts", "Tamper Proof Hardware"].map(f => (
                  <li key={f} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 size={18} className="text-brand-600" /> {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full py-4 border-2 border-brand-600 text-brand-600 font-bold rounded-xl hover:bg-brand-600 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications & Feature Comparison Section */}
      <section className="py-24 bg-white border-t border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Compare Features</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 font-sans">Side-by-Side Package Comparison</h3>
            <p className="text-slate-600 text-lg">
              Compare the features of our Starter and Elite tracking packages to find the perfect solution for your vehicle or logistics fleet.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-100/50">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-6 px-6 font-bold text-slate-900 border-r border-slate-100 w-2/5">
                    <span className="text-sm uppercase tracking-wider text-slate-500 font-bold">Package Features</span>
                  </th>
                  <th className="py-6 px-6 border-r border-slate-100 w-[30%] text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Standard Option</span>
                      <span className="text-xl font-extrabold text-slate-900">Starter Plan</span>
                      <span className="text-xs text-slate-500 font-normal mt-1">Excellent Vehicle Security</span>
                    </div>
                  </th>
                  <th className="py-6 px-6 bg-brand-50/40 relative w-[30%] text-center">
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-[10px] uppercase font-black px-4 py-1 rounded-full shadow-md shadow-brand-600/20 tracking-wider">
                      RECOMMENDED
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brand-600 mb-1">Advanced Control</span>
                      <span className="text-xl font-extrabold text-brand-900">Elite Plan</span>
                      <span className="text-xs text-brand-700/80 font-normal mt-1">Ultimate Security & Immobilizer</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-slate-100 hover:bg-slate-50/50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50/10'
                    }`}
                  >
                    <td className="py-5 px-6 border-r border-slate-100">
                      <div className="font-bold text-sm text-slate-900">{feature.name}</div>
                      <div className="text-xs text-slate-400 mt-1 leading-relaxed font-normal">{feature.desc}</div>
                    </td>
                    <td className="py-5 px-6 border-r border-slate-100 text-center">
                      <div className="flex justify-center items-center">
                        {feature.starter ? (
                          <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-sm">
                            <Check className="w-4 h-4 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-500/80 flex items-center justify-center border border-rose-100/50">
                            <X className="w-4 h-4 stroke-[3]" />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-5 px-6 bg-brand-50/10 text-center">
                      <div className="flex justify-center items-center">
                        {feature.elite ? (
                          <div className="w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-md shadow-brand-600/20">
                            <Check className="w-5 h-5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-500/80 flex items-center justify-center border border-rose-100/50">
                            <X className="w-4 h-4 stroke-[3]" />
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 mb-6">
              Need assistance selecting the right package? Our expert sales agents in Harare are here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-brand-600/15 flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
              >
                Get a Free Quote <ArrowRight size={18} />
              </button>
              <a 
                href="https://wa.me/263781899027" 
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-emerald-600/15 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">How It Works</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">3 Simple Steps to Complete Security</h3>
              
              <div className="space-y-10">
                {[
                  { step: "01", title: "Contact Us", desc: "Reach out via call, WhatsApp, or our form. We'll consult you on the best package for your needs." },
                  { step: "02", title: "Professional Installation", desc: "Our technicians will discreetly install the tracking hardware in your vehicle at your location." },
                  { step: "03", title: "Monitor From Phone", desc: "Get access to our mobile app and web dashboard. Start monitoring your assets instantly." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-brand-100 font-mono flex-shrink-0">{s.step}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-brand-600 rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src={HowItWorksImg} 
                  alt="Monitoring App" 
                  className="w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-full border border-white/20">
                    <Smartphone size={64} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-100 rounded-3xl -z-10 bg-brand-50/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section: How Tracking Works */}
      <section id="how-tracking-works" className="py-24 bg-brand-950 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-400 font-bold uppercase tracking-widest text-sm mb-4">Educational</h2>
            <h3 className="text-4xl font-bold mb-6">How GPS Tracking Works</h3>
            <p className="text-brand-100/70">Demystifying the technology that keeps your assets safe.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "What is GPS?", desc: "GPS (Global Positioning System) uses satellites to pinpoint your vehicle's exact coordinates anywhere on Earth." },
              { title: "Engine Cut-off", desc: "Our hardware connects to the fuel pump or ignition, allowing you to stop the vehicle remotely via your phone." },
              { title: "Geofencing", desc: "Set virtual boundaries on the map. If the vehicle leaves or enters these areas, you get an instant alert." },
              { title: "GSM Connectivity", desc: "The device uses local mobile networks to transmit data to our servers, ensuring constant updates." }
            ].map((info, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <h4 className="text-xl font-bold mb-4 text-brand-400">{info.title}</h4>
                <p className="text-brand-100/60 text-sm leading-relaxed">{info.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Demo Section */}
      <section className="py-24 bg-brand-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] border border-brand-100 shadow-xl overflow-hidden flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                <Truck size={14} /> 5+ Vehicles Fleet Offer
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
                Request a <span className="text-brand-600">Free Live Demo</span> or Trial
              </h3>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Managing a large fleet? We offer specialized on-site demonstrations and a 7-day free trial for businesses with 5 or more vehicles. See exactly how our system saves you fuel and time.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-slate-800">On-site Demo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-slate-800">Free 7-Day Trial</span>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-brand-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-700 transition-all flex items-center justify-center lg:justify-start gap-2 self-start group w-full lg:w-auto"
              >
                Claim Free Trial <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="lg:w-1/2 relative bg-brand-900 min-h-[400px] overflow-hidden">
              <video 
                src="https://assets.mixkit.co/videos/preview/mixkit-cargo-truck-driving-on-highway-41452-large.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                poster="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=2070"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center lg:text-left">
                <div className="max-w-md">
                  <div className="text-5xl font-black text-white mb-4">5+</div>
                  <div className="text-xl text-brand-100 font-bold uppercase tracking-[0.2em]">Vehicle Scale Reward</div>
                  <p className="text-brand-200/70 mt-4 italic" style={{ color: '#ccd1de' }}>"Optimizing performance for Zimbabwe's growing logistics companies."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alvary Universal App Sync Section & Companion Integration Portal */}
      <section id="app-sync" className="py-24 bg-slate-950 border-t border-b border-slate-900 relative overflow-hidden">
        {/* Decorative Grid Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35" />
        <div className="absolute top-0 left-12 w-96 h-96 bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-12 right-12 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-400 font-black uppercase tracking-widest text-xs bg-brand-950/85 px-4 py-2 rounded-full border border-brand-800/80 mb-5 inline-block">
              ⚡ LIVE TELMETRY SYNC HUB
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white font-sans tracking-tight leading-tight">
              Website & <span className="text-brand-500">Mobile App Integration</span>
            </h2>
            <p className="text-slate-400 text-lg mt-4 leading-relaxed">
              Experience total hardware synchronization. Fire virtual commands from our online dispatch portal on the left, and watch the companion mobile app mirror the status instantaneously in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-7xl mx-auto">
            
            {/* Left Module: Web Dispatch Portal Mockup */}
            <div className="lg:col-span-7 bg-slate-900/90 backdrop-blur-xl rounded-[2.5rem] border border-slate-800 p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-600/20 text-brand-400 flex items-center justify-center border border-brand-500/20">
                      <Laptop size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-black tracking-widest text-brand-500">Fleet Control Portal</h4>
                      <h3 className="text-lg font-extrabold text-white">Alvary Central Web Console</h3>
                    </div>
                  </div>
                  <div className="inline-flex self-start sm:self-auto items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Secure Link
                  </div>
                </div>

                {/* Simulated Vehicle Settings */}
                <div className="bg-slate-950/60 rounded-2xl p-6 border border-slate-850 mb-8 space-y-6">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" /> Web-Mobile Pairing Properties
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-wider">Vehicle Plate Number</label>
                      <input 
                        type="text" 
                        value={syncPlate} 
                        onChange={(e) => {
                          setSyncPlate(e.target.value.toUpperCase());
                          setPairingToken(`ALV-${e.target.value.toUpperCase()}-SYNC`);
                        }}
                        placeholder="e.g. AEG-9904"
                        className="w-full bg-slate-900 border border-slate-800 text-white font-mono font-bold tracking-widest rounded-xl px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-colors uppercase"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-wider">Vehicle Model & Label</label>
                      <select 
                        value={simulatedVehicle}
                        onChange={(e) => setSimulatedVehicle(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 text-white font-bold rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors"
                      >
                        <option value="Toyota Hilux GD6">Toyota Hilux GD6 (Harare)</option>
                        <option value="Mazda Axela Sport">Mazda Axela (Bulawayo)</option>
                        <option value="Honda Fit Shuttle">Honda Fit (Gweru Taxi)</option>
                        <option value="Mercedes Benz GLE">Mercedes GL E-Class (Mutare)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900">
                    <div className="text-xs text-slate-400 leading-relaxed text-center sm:text-left">
                      Edit details above to observe active state changes instantly mapped in the phone app mockup.
                    </div>
                    <button 
                      onClick={() => {
                        setShowPairingQR(!showPairingQR);
                        setShowPairingSuccess(false);
                      }}
                      className="w-full sm:w-auto bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-850 font-bold px-4 py-2.5 rounded-xl transition-all text-xs flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                    >
                      <Radio size={14} className="text-brand-500" />
                      {showPairingQR ? "Hide Pairing Code" : "Show Sync QR Code"}
                    </button>
                  </div>

                  {/* Dynamic QR Pairing Code Section */}
                  <AnimatePresence>
                    {showPairingQR && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 flex flex-col md:flex-row items-center gap-6 mt-4">
                          <div className="bg-white p-3 rounded-2xl flex-shrink-0 border-4 border-slate-700 shadow-xl">
                            {/* Stylized CSS QR Code Vector */}
                            <div className="w-24 h-24 relative flex flex-wrap p-1 bg-white select-none">
                              {/* QR Corners */}
                              <div className="absolute top-1 left-1 w-6 h-6 border-4 border-slate-900 bg-transparent rounded-xs flex items-center justify-center">
                                <div className="w-1 h-1 bg-slate-900" />
                              </div>
                              <div className="absolute top-1 right-1 w-6 h-6 border-4 border-slate-900 bg-transparent rounded-xs flex items-center justify-center">
                                <div className="w-1 h-1 bg-slate-900" />
                              </div>
                              <div className="absolute bottom-1 left-1 w-6 h-6 border-4 border-slate-900 bg-transparent rounded-xs flex items-center justify-center">
                                <div className="w-1 h-1 bg-slate-900" />
                              </div>
                              {/* QR Fill Elements */}
                              <div className="w-full h-full flex flex-wrap opacity-85 justify-center mt-2.5 ml-1.5 gap-0.5">
                                <span className="bg-slate-900 w-2 h-2 rounded-2xs" />
                                <span className="bg-slate-900 w-1 h-2 rounded-2xs" />
                                <span className="bg-slate-900 w-3 h-1" />
                                <span className="bg-slate-900 w-2 h-1.5 rounded-2xs" />
                                <span className="bg-slate-900 w-1.5 h-2" />
                                <span className="bg-slate-900 w-1 h-1" />
                                <span className="bg-slate-950 w-2 h-2.5 rounded-2xs" />
                                <span className="bg-slate-900 w-1.5 h-1.5" />
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2 text-center md:text-left flex-1">
                            <span className="text-[9px] font-black uppercase bg-brand-500/10 text-brand-400 px-2.5 py-1 rounded-md border border-brand-500/20 inline-block tracking-wider">
                              INTEGRATION TOKENS
                            </span>
                            <h5 className="font-bold text-sm text-white">Applet Dashboard Association</h5>
                            <p className="text-xs text-slate-400 leading-relaxed">
                              Scan this encrypted credential QR code inside the companion mobile app to pair your tracking account with the fleet telemetry server database instantly.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-4">
                              <span className="font-mono bg-slate-950 border border-slate-800 px-3 py-1.5 rounded text-xs text-brand-404 text-brand-300 font-bold tracking-widest select-all">
                                {pairingToken}
                              </span>
                              <button 
                                onClick={() => {
                                  setShowPairingSuccess(true);
                                  setMockNotification({
                                    title: "🔗 APP SYNCED SUCCESSFULLY",
                                    body: `The companion mobile account has established a persistent websocket session with ${simulatedVehicle} [${syncPlate}].`,
                                    type: 'success'
                                  });
                                  setTimeout(() => setShowPairingQR(false), 2000);
                                }}
                                className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                              >
                                <Check size={12} strokeWidth={3} />
                                Simulate QR Scan
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Real-Time Commands Console */}
                <div className="space-y-6 mt-8">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Dispatch Terminal Operations
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* ACC Ignition Trigger */}
                    <button 
                      onClick={() => {
                        const nextState = !isEngineOn;
                        setIsEngineOn(nextState);
                        if (!nextState) setSimulatedSpeed(0);
                        setMockNotification({
                          title: nextState ? "🔑 ENGINE IGNITION INITIATED" : "🔌 IGNITION FEED SUSPENDED",
                          body: nextState ? `ACC telemetry active on ${simulatedVehicle}. Live speed reporting unlocked.` : `ACC disabled. Hardware logged 'sleep status' after 10-minutes engine idle shutdown.`,
                          type: nextState ? 'success' : 'info'
                        });
                      }}
                      className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all hover:scale-[1.01] hover:shadow-lg cursor-pointer ${
                        isEngineOn 
                          ? 'bg-slate-950/80 border-slate-800 hover:border-slate-750' 
                          : 'bg-brand-950/15 border-brand-800/30 hover:border-brand-800/40'
                      }`}
                    >
                      <div className={`p-3 rounded-xl border flex-shrink-0 ${
                        isEngineOn 
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                          : 'bg-amber-500/10 border-amber-500/20 text-amber-500'
                      }`}>
                        <Zap size={18} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider">Remote ACC Signal</span>
                        <div className="font-bold text-white text-sm flex items-center gap-1.5">
                          Toggle ACC State {isEngineOn ? '🟢' : '⚪'}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          ACC status: <span className="font-bold">{isEngineOn ? "Engine Running" : "Engine Switched Off"}</span>. Signals cloud node.
                        </p>
                      </div>
                    </button>

                    {/* Remote Engine Cutoff / Safety Relays */}
                    <button 
                      onClick={() => {
                        const nextState = !isFuelRelayLocked;
                        setIsFuelRelayLocked(nextState);
                        setMockNotification({
                          title: nextState ? "🚨 ENGINE IMMOBILIZED" : "✅ SAFETY DE-ACTIVATED",
                          body: nextState ? `Solenoid fuel relay triggered for ${simulatedVehicle}! Internal fuel injection pathway locked successfully.` : `Relay released. Fuel pump flow normal. Vehicle may now crank safely.`,
                          type: nextState ? 'danger' : 'success'
                        });
                      }}
                      className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all hover:scale-[1.01] hover:shadow-lg cursor-pointer ${
                        isFuelRelayLocked 
                          ? 'bg-rose-950/20 border-rose-800/30 hover:border-rose-800/50' 
                          : 'bg-slate-950/80 border-slate-800 hover:border-slate-750'
                      }`}
                    >
                      <div className={`p-3 rounded-xl border flex-shrink-0 ${
                        isFuelRelayLocked 
                          ? 'bg-rose-500/20 border-rose-500/35 text-rose-400 animate-pulse' 
                          : 'bg-slate-850 border-slate-800 text-slate-400'
                      }`}>
                        {isFuelRelayLocked ? <Lock size={18} /> : <Unlock size={18} />}
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider">Safety Core Relay</span>
                        <div className="font-bold text-white text-sm">
                          {isFuelRelayLocked ? "Unlock Fuel Relay" : "Remote Lock Fuel Relay"}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Pump circuit: <span className="font-bold text-brand-400">{isFuelRelayLocked ? "FUEL FEED ISOLATED" : "FLOW ENABLED"}</span>.
                        </p>
                      </div>
                    </button>

                    {/* Over-speed safety tracking */}
                    <button 
                      onClick={() => {
                        if (!isEngineOn) {
                          setMockNotification({
                            title: "⚠️ ACC Inactive",
                            body: "Ignition must be toggled ON to register moving speed thresholds.",
                            type: 'info'
                          });
                          return;
                        }
                        const nextSpeed = simulatedSpeed === 138 ? 0 : 138;
                        setSimulatedSpeed(nextSpeed);
                        if (nextSpeed > 100) {
                          setMockNotification({
                            title: "🚨 LIMIT VIOLATION RE-FETCHED",
                            body: `Over-speeding alert dispatched to companion app: ${simulatedVehicle} cruising at ${nextSpeed} km/h along Harare Highway!`,
                            type: 'danger'
                          });
                        } else {
                          setMockNotification({
                            title: "✅ Normal Highway Speeds",
                            body: "Velocity levels returned back to safe local constraints.",
                            type: 'success'
                          });
                        }
                      }}
                      className="flex items-start gap-4 p-5 rounded-2xl border border-slate-800 text-left transition-all hover:scale-[1.01] hover:shadow-lg bg-slate-950/80 hover:border-slate-750 cursor-pointer"
                    >
                      <div className={`p-3 rounded-xl border flex-shrink-0 ${
                        simulatedSpeed > 100 
                          ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' 
                          : 'bg-slate-850 border-slate-800 text-slate-400'
                      }`}>
                        <Activity size={18} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider">Hardware Telematics</span>
                        <div className="font-bold text-white text-sm">
                          {simulatedSpeed > 100 ? "Reset Normal Speed" : "Simulate Speed Trigger (138 km/h)"}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Moving speed: <span className="font-bold text-white">{simulatedSpeed} km/h</span>. Reports real-time.
                        </p>
                      </div>
                    </button>

                    {/* Vibration anti-temper simulated alert */}
                    <button 
                      onClick={() => {
                        setMockNotification({
                          title: "🚨 SEVERE ANTI-TEMPER VIBRATION",
                          body: `High-frequency movement report on ${simulatedVehicle} received with ignition OFF. Potential towing or door tampering.`,
                          type: 'danger'
                        });
                      }}
                      className="flex items-start gap-4 p-5 rounded-2xl border border-slate-800 text-left transition-all hover:scale-[1.01] hover:shadow-lg bg-slate-950/80 hover:border-slate-750 cursor-pointer"
                    >
                      <div className="p-3 rounded-xl border flex-shrink-0 bg-slate-850 border-slate-800 text-slate-400">
                        <AlertTriangle size={18} className="text-amber-500 animate-pulse" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider">G-Sensor Shield</span>
                        <div className="font-bold text-white text-sm">
                          Simulate Alarm / Tow Alert
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Force-tests the high-sensitivity 3D accelerometer inside the tracking unit.
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs text-center sm:text-left">
                <div>
                  🌐 Real-time synchronized using our lightweight tracking socket gateway.
                </div>
                <div className="flex gap-2">
                  <span className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-850 text-[10px] uppercase font-bold tracking-widest text-slate-400 select-all">
                    Gateway: PORT 3000
                  </span>
                </div>
              </div>
            </div>

            {/* Right Module: Sleek Dynamic iOS Smartphone App Simulation mockup */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 via-transparent to-emerald-500/10 rounded-[3rem] blur-3xl pointer-events-none" />
              
              {/* Smartphone Case Frame Wrapper */}
              <div className="relative mx-auto w-full max-w-[340px] md:max-w-[360px] aspect-[9/18.5] bg-slate-900 rounded-[3.2rem] p-[9px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-4 border-slate-800/80 hover:border-slate-750 transition-colors">
                
                {/* Hardware Details: Side buttons mock */}
                <div className="absolute -left-[5px] top-28 w-[3px] h-10 bg-slate-800 rounded-l" />
                <div className="absolute -left-[5px] top-40 w-[3px] h-14 bg-slate-800 rounded-l" />
                <div className="absolute -left-[5px] top-56 w-[3px] h-14 bg-slate-800 rounded-l" />
                <div className="absolute -right-[5px] top-36 w-[3px] h-18 bg-slate-800 rounded-r" />

                {/* Smartphone Operating Screen */}
                <div className="w-full h-full bg-slate-950 rounded-[2.8rem] relative overflow-hidden text-slate-100 flex flex-col justify-between selection-none">
                  
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-30" />

                  {/* Operational Status bar */}
                  <div className="p-4 pt-6 pb-2 grid grid-cols-3 items-center relative z-40 bg-slate-950/20 text-white select-none">
                    <div className="text-[11px] font-bold tracking-tight">08:42</div>
                    <div className="justify-self-center flex items-center justify-center">
                      {/* Interactive dynamic island pill notch */}
                      <div className="w-24 h-4 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center text-[7px] text-slate-500 font-black uppercase tracking-wider">
                        Alvary Air
                      </div>
                    </div>
                    <div className="justify-self-end flex items-center gap-1 text-xs">
                      <span className="text-[8px] font-black tracking-widest text-[#ccd1de]">LTE</span>
                      <Wifi size={10} className="text-[#ccd1de]" />
                      <div className="w-5 h-2.5 border border-white/20 rounded-xs p-0.5 flex items-center bg-white/5">
                        <div className="h-full w-4/5 bg-emerald-500 rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Alert Dropdowns */}
                  <AnimatePresence>
                    {mockNotification && (
                      <motion.div 
                        initial={{ opacity: 0, y: -50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.95 }}
                        className="absolute top-[52px] left-3 right-3 z-50 overflow-hidden"
                      >
                        <div className={`p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] border flex gap-3 text-left ${
                          mockNotification.type === 'danger' 
                            ? 'bg-rose-950/95 border-rose-800/80 text-rose-100'
                            : mockNotification.type === 'success'
                            ? 'bg-emerald-950/95 border-emerald-800/80 text-emerald-100'
                            : 'bg-slate-900/95 border-slate-700/80 text-slate-100'
                        }`}>
                          <div className={`p-1.5 rounded-lg flex-shrink-0 flex items-center justify-center ${
                            mockNotification.type === 'danger'
                              ? 'bg-rose-500/20 text-rose-400'
                              : mockNotification.type === 'success'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-brand-500/20 text-brand-400'
                          }`}>
                            <AlertTriangle size={14} className="animate-pulse" />
                          </div>
                          <div className="space-y-1 flex-1">
                            <div className="text-[10px] font-black uppercase leading-tight tracking-wider text-white">
                              {mockNotification.title}
                            </div>
                            <p className="text-[10px] leading-relaxed text-slate-200">
                              {mockNotification.body}
                            </p>
                            <button 
                              onClick={() => setMockNotification(null)}
                              className="text-[9px] font-bold uppercase text-brand-400 tracking-widest hover:opacity-85 pt-1.5 block cursor-pointer"
                            >
                              Acknowledge Alert ×
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Onscreen live GPS map and logs view */}
                  <div className="flex-1 relative bg-slate-950 flex flex-col overflow-hidden">
                    
                    {/* Simulated vector road grid map */}
                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute inset-0 bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] bg-[size:18px_18px]" />
                      <div className="absolute top-24 left-1/3 w-32 h-32 rounded-full border border-slate-800/70" />
                      <div className="absolute top-12 left-12 w-44 h-32 border-l border-b border-dashed border-slate-850" />
                      <div className="absolute bottom-20 right-8 w-44 h-24 border-r border-t border-dashed border-slate-850" />
                    </div>

                    {/* Live Marker Pulse pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                      <div className="relative">
                        <span className="absolute inline-flex h-12 w-12 rounded-full bg-brand-500/30 opacity-40 animate-ping -left-4 -top-4" />
                        <div className="w-4.5 h-4.5 bg-brand-600 rounded-full border-2 border-white shadow-xl flex items-center justify-center relative z-10">
                          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        </div>
                      </div>
                      <span className="bg-slate-900/90 border border-slate-800 text-[9px] font-bold px-2 py-0.5 rounded-md text-slate-300 mt-2 tracking-wide font-mono shadow-md backdrop-blur-xs select-none">
                        {syncPlate}
                      </span>
                    </div>

                    {/* Companion Title Header */}
                    <div className="p-3.5 relative z-10 flex justify-between items-center bg-gradient-to-b from-slate-950 to-transparent select-none">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-md bg-brand-600 flex items-center justify-center text-[7px] text-white font-black">A</div>
                        <span className="text-[9px] font-black tracking-widest text-[#4f46e5] uppercase">ALVARY MOBILE</span>
                      </div>
                      <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[8px] font-black px-2 py-0.5 rounded-full tracking-wider uppercase">
                        ONLINE
                      </div>
                    </div>

                    {/* Synced App Widget panel */}
                    <div className="mt-auto p-3 relative z-10">
                      <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl p-4.5 border border-slate-800 shadow-2xl relative">
                        <div className="flex justify-between items-start mb-3.5 gap-2">
                          <div className="truncate">
                            <span className="text-[8px] font-bold uppercase text-brand-400 tracking-wider">SECURE TRANSMISSION</span>
                            <h4 className="text-sm font-extrabold text-white leading-tight truncate">{simulatedVehicle}</h4>
                            <span className="font-mono text-xs font-bold text-slate-400">{syncPlate}</span>
                          </div>
                          <div className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider shrink-0 flex items-center gap-1 border ${
                            isEngineOn 
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                              : 'bg-slate-800 text-slate-500 border-slate-700'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${isEngineOn ? 'bg-emerald-500' : 'bg-slate-600'}`} />
                            {isEngineOn ? "ACC ON" : "ACC OFF"}
                          </div>
                        </div>

                        {/* Telemetry diagnostics */}
                        <div className="grid grid-cols-2 gap-2 mb-3.5 border-t border-slate-800 pt-3 select-none">
                          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-850">
                            <span className="text-[8px] text-slate-400 font-extrabold uppercase tracking-wide block">Speedometer</span>
                            <span className="text-sm font-black text-white font-mono tracking-wide">{simulatedSpeed}</span>
                            <span className="text-[9px] text-slate-500 font-bold"> km/h</span>
                          </div>
                          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-850">
                            <span className="text-[8px] text-slate-400 font-extrabold uppercase tracking-wide block">G-Sensor Shield</span>
                            <span className={`text-xs font-black block truncate ${simulatedSpeed > 100 ? 'text-rose-400 animate-pulse font-extrabold' : 'text-slate-200'}`}>
                              {simulatedSpeed > 100 ? '⚠️ High (0.8g)' : '🟢 Safe (1.0g)'}
                            </span>
                            <span className="text-[7px] text-slate-500 block truncate leading-none mt-0.5">3D accelerometry</span>
                          </div>
                        </div>

                        {/* Relay state readout */}
                        <div className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                          isFuelRelayLocked 
                            ? 'bg-rose-950/20 border-rose-900/40 text-rose-300' 
                            : 'bg-emerald-500/5 border-emerald-500/10 text-emerald-300'
                        }`}>
                          <div className="flex items-center gap-2">
                            {isFuelRelayLocked ? <Lock size={12} className="text-rose-400 animate-pulse" /> : <Unlock size={12} className="text-emerald-400" />}
                            <span className="font-extrabold uppercase text-[9px] tracking-wider truncate">
                              Immobilizer: {isFuelRelayLocked ? "LOCK ENGAGED" : "UNLOCKED"}
                            </span>
                          </div>
                          <span className={`text-[9px] font-black uppercase ${
                            isFuelRelayLocked ? 'text-rose-400' : 'text-emerald-400'
                          }`}>
                            {isFuelRelayLocked ? "SOLENOID ON" : "READY"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Simulated App footer */}
                  <div className="p-3 bg-slate-950 border-t border-slate-900/50 flex items-center justify-between gap-1 text-[8px] text-slate-500 font-mono select-none">
                    <span>📱 Client Core v2.8</span>
                    <span>🇿🇼 Alvary Telematics Corp</span>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Dedicated Download Badge Panel */}
          <div className="bg-slate-900/60 rounded-[2.5rem] border border-slate-800 p-8 md:p-12 mt-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4 max-w-xl text-center md:text-left">
              <h3 className="text-2xl font-black text-white">Get the Alvary Companion Mobile App</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Connect your physical trackers with the mobile app today. Supports customizable overspeeding threshold alerts, historical reports playbacks, silent anti-theft geofencing, and remote starter motor immobilization directly using your fingers.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                {/* Google Play Store Badge Vector Link */}
                <a 
                  href="https://play.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-slate-950 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all text-white px-5 py-2.5 rounded-xl flex items-center gap-3 w-44"
                >
                  <svg className="w-5 h-5 text-white/90" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,5.277L14.785,12L3,18.723V5.277 M15.75,12.551L19.43,10.428C19.782,10.223 20,9.851 20,9.45C20,9.851 19.782,8.677 19.43,8.472L3.71,0.134C3.25,-0.082 2.71,-0.016 2.302,0.301L14.785,12L15.75,12.551M2.302,23.699C2.71,24.016 3.25,24.082 3.71,23.866L19.43,15.528C19.782,15.322 20,14.951 20,14.55C20,14.149 19.782,13.777 19.43,13.571L15.75,11.448L12.44,14.758L2.302,23.699Z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] text-slate-500 uppercase font-black leading-none tracking-widest">GET IT ON</span>
                    <span className="text-xs font-black text-slate-100 mt-0.5 leading-none">Google Play</span>
                  </div>
                </a>

                {/* App Store Badge Vector Link */}
                <a 
                  href="https://apple.com/app-store" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-slate-950 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all text-white px-5 py-2.5 rounded-xl flex items-center gap-3 w-44"
                >
                  <svg className="w-5 h-5 text-white/90" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5 C17.88,20.74 17,21.95 15.66,21.97 C14.32,22 13.89,21.18 12.37,21.18 C10.84,21.18 10.37,21.95 9.1,22 C7.79,22.05 6.8,20.68 5.96,19.48 C4.25,17 2.94,12.45 4.7,9.39 C5.57,7.87 7.13,6.91 8.82,6.88 C10.1,6.86 11.32,7.75 12.11,7.75 C12.89,7.75 14.37,6.68 15.92,6.84 C16.57,6.87 18.39,7.1 19.56,8.82 C19.47,8.88 17.39,10.1 17.41,12.63 C17.44,15.65 20.06,16.66 20.1,16.67 C20.08,16.74 19.67,18.11 18.71,19.5 M15.97,4.17 C16.63,3.37 17.07,2.28 16.95,1 C16,1.04 14.9,1.6 14.24,2.38 C13.68,3.02 13.19,4.14 13.34,5.4 C14.39,5.48 15.42,4.88 15.97,4.17 Z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] text-slate-500 uppercase font-black leading-none tracking-widest">Download on the</span>
                    <span className="text-xs font-black text-slate-100 mt-0.5 leading-none">App Store</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="h-px w-full md:h-16 md:w-px bg-slate-800 flex-shrink-0" />

            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left flex-shrink-0">
              {/* Scan Badge visual QR code */}
              <div className="bg-white p-3 rounded-2xl flex-shrink-0 border border-slate-700 shadow-lg">
                <div className="w-16 h-16 relative flex flex-wrap p-0.5 bg-white select-none">
                  <div className="absolute top-0.5 left-0.5 w-4.5 h-4.5 border-3 border-slate-900 flex items-center justify-center">
                    <div className="w-1 h-1 bg-slate-900" />
                  </div>
                  <div className="absolute top-0.5 right-0.5 w-4.5 h-4.5 border-3 border-slate-900 flex items-center justify-center">
                    <div className="w-1 h-1 bg-slate-900" />
                  </div>
                  <div className="absolute bottom-0.5 left-0.5 w-4.5 h-4.5 border-3 border-slate-900 flex items-center justify-center">
                    <div className="w-1 h-1 bg-slate-900" />
                  </div>
                  <div className="w-full h-full flex flex-wrap opacity-75 pt-1M ml-1.5 gap-0.5 mt-1.5">
                    <span className="bg-slate-900 w-1.5 h-1.5 rounded-2xs" />
                    <span className="bg-slate-900 w-1 h-1 rounded-2xs" />
                    <span className="bg-slate-950 w-2 h-1" />
                    <span className="bg-slate-900 w-1.5 h-1.5" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-black bg-slate-950 border border-slate-850 px-2 py-0.5 rounded text-brand-400 inline-block tracking-widest leading-none">
                  Pair Instantly
                </span>
                <h4 className="font-bold text-white text-sm">Scan to Setup Sync</h4>
                <p className="text-slate-400 text-xs leading-relaxed max-w-[210px]">
                  Scan to auto-pair with secure smartphone repositories immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">The Alvary Advantage</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Why Hundreds of Zimbabweans Trust Us</h3>
            <p className="text-slate-600 text-lg">We combine cutting-edge GPS technology with a deep understanding of local security needs to provide unmatched protection.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { 
                title: "Professional Installation", 
                desc: "Expert technicians ensure discreet and secure fitting of all hardware without affecting your vehicle's warranty.",
                icon: <Shield className="text-brand-600" />
              },
              { 
                title: "Reliable Systems", 
                desc: "Our tracking hardware is tested for the toughest conditions, ensuring 99.9% uptime and precision.",
                icon: <Activity className="text-brand-600" />
              },
              { 
                title: "Fast Local Support", 
                desc: "Based in Harare, our team is always ready for maintenance, recovery assistance, and expert consultation.",
                icon: <Zap className="text-brand-600" />
              },
              { 
                title: "Affordable Pricing", 
                desc: "We offer the best value-for-money packages in Zimbabwe, with no hidden costs and transparent service.",
                icon: <CreditCard className="text-brand-600" />
              }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all h-full"
              >
                <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  {p.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{p.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Showcase Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Showcase</h2>
              <h3 className="text-4xl font-bold text-slate-900 leading-tight">Precision in Every Environment</h3>
              <p className="text-slate-600 mt-4">Whether on the open highway or in our professional installation bays, your vehicle is our priority.</p>
            </div>
            <button onClick={() => scrollToSection('contact')} className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-all flex items-center gap-2">
              Secure Your Vehicle <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800", video: "https://assets.mixkit.co/videos/preview/mixkit-car-driving-on-a-highway-at-sunset-41484-large.mp4", label: "Highway Patrol", type: "On the Road" },
              { img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800", label: "Modern Garage", type: "Installation Bay" },
              { img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800", video: "https://assets.mixkit.co/videos/preview/mixkit-cargo-truck-driving-on-highway-41452-large.mp4", label: "Long Haul Fleet", type: "Fleet Management" },
              { img: ShowcaseImg4, video: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-cars-on-a-highway-41487-large.mp4", label: "Precision Service", type: "Maintenance" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-[2rem] overflow-hidden aspect-[4/5]"
              >
                {item.video ? (
                  <video 
                    src={item.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    poster={item.img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <img 
                    src={item.img} 
                    alt={item.label} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-2">{item.type}</p>
                  <h4 className="text-xl font-bold">{item.label}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071823991-b38407887719?auto=format&fit=crop&q=80&w=800" 
                  alt="Our Team" 
                  className="w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-50 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-50 rounded-full blur-3xl opacity-60" />
              
              <div className="absolute bottom-10 right-10 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-slate-100">
                <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center text-white">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Founded by</p>
                  <p className="font-bold text-slate-900">Tafadzwa Jimu</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">About Alvary Technologies</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Securing Zimbabwe's Roads with Advanced Technology</h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Alvary Technologies is a leading vehicle tracking and fleet management company based in Zimbabwe. Our mission is to provide peace of mind through reliable, professional, and affordable security systems.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Zap size={18} className="text-brand-600" /> Mission
                  </h4>
                  <p className="text-slate-500 text-sm">To empower every vehicle owner in Zimbabwe with world-class tracking technology.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <History size={18} className="text-brand-600" /> Vision
                  </h4>
                  <p className="text-slate-500 text-sm">To become the gold standard for fleet management and vehicle security in Southern Africa.</p>
                </div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-brand-600">
                <p className="italic text-slate-700">"We don't just sell tracking devices; we provide the peace of mind that your assets are protected every second of the day."</p>
                <p className="font-bold mt-4 text-brand-900">— Tafadzwa Jimu, CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-brand-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-900/40 rounded-full blur-3xl -ml-40 -mb-40" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Protect Your Vehicle Today.</h3>
              <p className="text-brand-100 text-xl mb-12">Join hundreds of satisfied customers who trust Alvary Technologies for their security.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-brand-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-50 shadow-2xl shadow-black/10 transition-all flex items-center justify-center gap-2"
                >
                  Get Started Now <ArrowRight size={24} />
                </button>
                <a 
                  href="https://wa.me/263781899027" 
                  className="bg-brand-950 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-black transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={24} /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog / Updates Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Latest Updates</h2>
              <h3 className="text-3xl font-bold text-slate-900">Security Tips & Stories</h3>
            </div>
            <button className="hidden md:flex items-center gap-2 text-brand-600 font-bold">
              View All Posts <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { date: "May 10, 2026", title: "Top 5 Ways to Prevent Vehicle Hijacking in Zimbabwe", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800" },
              { date: "May 08, 2026", title: "How Fleet Management Reduced Fuel Costs by 20%", img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800" },
              { date: "May 05, 2026", title: "The Evolution of GPS Technology in 2026", img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden mb-6 aspect-video">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <p className="text-brand-600 font-bold text-xs uppercase mb-2">{post.date}</p>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{post.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Frequently Asked Questions</h2>
            <h3 className="text-4xl font-bold text-slate-900 leading-tight">Everything You Need to Know</h3>
          </div>
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
            <FAQItem 
              question="How accurate is the GPS tracking system?" 
              answer="Our GPS tracking system utilizes advanced satellite technology combined with cellular networks, providing extreme accuracy. Under optimal conditions, location data is precise within 2.5 to 5 meters. You'll see real-time updates every few seconds directly on your dashboard." 
            />
            <FAQItem 
              question="What are the ongoing subscription costs?" 
              answer="We offer flexible subscription plans based on your specific needs, whether you are managing a single vehicle or an entire fleet. Subscriptions cover cellular data, cloud hosting, and continuous software updates. Contact our sales team for a custom quote that perfectly matches your scale and requirements." 
            />
            <FAQItem 
              question="Is the tracking hardware durable?" 
              answer="Absolutely. Our hardware is built to withstand rigorous conditions. Units are encased in industrial-grade, weather-resistant materials designed to handle extreme temperatures, dust, and moisture. Rest assured, your devices will perform reliably whether on a smooth highway or rugged terrain." 
            />
            <FAQItem 
              question="Can I easily transfer a tracker to another vehicle?" 
              answer="Yes, our hardwired and plug-and-play models can both be transferred between vehicles. While OBD-II plug-and-play devices can be swapped in minutes by anyone, we recommend one of our certified technicians to help transfer hardwired units to ensure proper installation." 
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Ready to Secure Your Assets?</h3>
              <p className="text-slate-600 mb-12 text-lg">Our team is available for consultations and site visits. Drop us a message or call.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">Call Us</p>
                    <p className="text-lg font-bold text-slate-900 leading-tight">+263 781 899 027<br />+263 777 212 910</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">Email Us</p>
                    <p className="text-lg font-bold text-slate-900">sales@alvarytechnologies.co.zw</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">Location</p>
                    <p className="text-xl font-bold text-slate-900 line-clamp-2 md:line-clamp-none">12454 Chivhima Building, Dzivaresekwa Extension, Harare</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="bg-slate-50 p-10 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h4 className="text-2xl font-bold mb-8">Quick Inquiry</h4>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 uppercase tracking-widest">Your Name</label>
                    <input type="text" placeholder="Tafadzwa..." className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 uppercase tracking-widest">Phone Number</label>
                    <input type="tel" placeholder="+263..." className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-600 uppercase tracking-widest">Vehicle Type</label>
                    <select className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all">
                      <option>Personal Car</option>
                      <option>Delivery Van / Truck</option>
                      <option>Motorcycle</option>
                      <option>Heavy Machinery</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-600 uppercase tracking-widest">Message (Optional)</label>
                    <textarea rows={4} placeholder="I'm interested in..." className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button className="w-full md:w-auto bg-brand-600 text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-brand-700 shadow-xl shadow-brand-600/20 transition-all">
                      Send Inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="mb-4">
                <Logo light />
              </div>
              <p className="text-brand-500 font-bold italic text-xs mb-6 uppercase tracking-wider">Driven by Precision, Powered by Innovation</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Protecting individuals and businesses through advanced GPS tracking and fleet management systems across Zimbabwe.
              </p>
              <div className="flex gap-4">
                {/* Social icons would go here */}
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-lg mb-8">Services</h5>
              <ul className="space-y-4 text-slate-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-brand-500 transition-colors">Individual Tracking</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-brand-500 transition-colors">Fleet Management</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-brand-500 transition-colors">Anti-Theft Systems</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-brand-500 transition-colors">Asset Recovery</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-8">Explore</h5>
              <ul className="space-y-4 text-slate-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-brand-500 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('why-us')} className="hover:text-brand-500 transition-colors">Why Use Us</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-brand-500 transition-colors">How it Works</button></li>
                <li><button className="hover:text-brand-500 transition-colors">Blog & Tips</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-8">Contact</h5>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3"><Phone size={16} className="mt-1" /> <div>+263 781 899 027<br />+263 777 212 910</div></li>
                <li className="flex items-center gap-3"><Mail size={16} /> sales@alvarytechnologies.co.zw</li>
                <li className="flex items-start gap-3 text-sm leading-tight"><MapPin size={16} className="mt-1 flex-shrink-0" /> 12454 Chivhima Building, Dzivaresekwa Extension, Harare</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Alvary Technologies. All rights reserved.</p>
            <div className="flex gap-8">
              <button onClick={() => setShowPrivacyPolicy(true)} className="hover:text-white transition-colors cursor-pointer font-medium">Privacy Policy</button>
              <button onClick={() => setShowTermsOfService(true)} className="hover:text-white transition-colors cursor-pointer font-medium">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/263781899027" 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-whatsapp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {showCookieConsent && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[60]"
          >
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-50 p-3 rounded-xl text-brand-600">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Cookie Consent</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => handleCookieAction('accept')}
                  className="flex-1 bg-brand-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-brand-700 transition-colors"
                >
                  Accept All
                </button>
                <button 
                  onClick={() => handleCookieAction('reject')}
                  className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors"
                >
                  Reject
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacyPolicy && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrivacyPolicy(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-100 relative z-10 overflow-hidden"
            >
              <div className="p-8 border-b border-slate-100 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 text-brand-600 mb-1">
                    <Shield size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">Privacy Compliance</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Privacy Policy</h3>
                </div>
                <button 
                  onClick={() => setShowPrivacyPolicy(false)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="overflow-y-auto p-8 border-b border-slate-100 text-slate-600 space-y-6 text-sm leading-relaxed custom-scrollbar max-h-[50vh]">
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">1. Introduction</h4>
                  <p>Welcome to Alvary Technologies. We respect your privacy and are committed to protecting your personal, vehicle, and real-time location data. This Privacy Policy describes how we collect, process, secure, and share your information when you use our vehicle tracking hardware, mobile apps, and fleet portals.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">2. Information We Collect</h4>
                  <p>To provide high-quality GPS tracking and security, we collect the following types of information:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Account registration info:</strong> Representative name, company details, phone number, email address, physical location.</li>
                    <li><strong>Vehicle information:</strong> Fleet size, vehicle brand, registration numbers, engine capacity, fuel capacity.</li>
                    <li><strong>Real-time Telemetry Data:</strong> Constant coordinate positioning (latitude, longitude, altitude), speed logs, distance tracked, engine diagnostics (OBD-II), fuel sensor metrics, driving patterns, acceleration spikes, and geofence entries/exits.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">3. How We Use and Process Data</h4>
                  <p>Your telemetry and account data are processed directly to:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Provide 24/7 web and mobile app interfaces to view vehicle statuses.</li>
                    <li>Power anti-theft engines, geofence alarm systems, and auto-alerts.</li>
                    <li>Execute recovery telemetry in the event of an emergency or hijacking incident.</li>
                    <li>Calculate vehicle mileage and design analytical fuel usage optimization charts.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">4. Third-Party Sharing & Disclosure</h4>
                  <p>Alvary Technologies does not sell, rent, or trade your personal or telemetry data to third parties. Under strict conditions, we may share information with:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Certified vehicle recovery agents, dispatchers, or the Republic of Zimbabwe Police Service during emergency tracking requests initiated directly by you.</li>
                    <li>Regulatory bodies or legal authorities if legally required to do so under Zimbabwean cybersecurity legislation.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">5. Data Retention & Safeguards</h4>
                  <p>We leverage advanced high-integrity database encryption protocols to safeguard location coordinates from unauthorized interception. Raw tracking logs are retained securely on our clouds for up to 12 months for review, unless you explicitly request early archiving or deletion.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">6. Contact and Updates</h4>
                  <p>We may update this policy periodically to align with localized regulations and our technological innovations. For key privacy inquiries, system access controls, or coordinate removal requests, email us at <a href="mailto:sales@alvarytechnologies.co.zw" className="text-brand-600 font-medium hover:underline">sales@alvarytechnologies.co.zw</a>.</p>
                </div>
              </div>

              <div className="p-6 bg-slate-50 flex justify-end">
                <button 
                  onClick={() => setShowPrivacyPolicy(false)}
                  className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-xl shadow-brand-600/15 cursor-pointer animate-none"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Terms of Service Modal */}
      <AnimatePresence>
        {showTermsOfService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTermsOfService(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-100 relative z-10 overflow-hidden"
            >
              <div className="p-8 border-b border-slate-100 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 text-brand-600 mb-1">
                    <Shield size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">Binding Agreement</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Terms of Service</h3>
                </div>
                <button 
                  onClick={() => setShowTermsOfService(false)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="overflow-y-auto p-8 border-b border-slate-100 text-slate-600 space-y-6 text-sm leading-relaxed custom-scrollbar max-h-[50vh]">
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">1. Acceptance of Terms</h4>
                  <p>By purchasing Alvary Technologies hardware trackers, scheduling physical technician installations, or accessing our live digital maps, you confirm that you agree to be bound by these Terms of Service. If you disagree, do not use our services.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">2. Scope of Service</h4>
                  <p>Alvary Technologies provisions remote fleet monitoring diagnostics, geofencing intelligence, hardwired satellite position hardware, and localized recovery aids. Service accessibility is contingent on continuous network uptime and system integrations.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">3. Legal Authorization to Track</h4>
                  <p>You warrant that you possess full, legal authorization and relevant consent to install trackers on, and monitor the positioning of, any fleet assets or personal vehicles added to your account portfolio. Secretly tracking vehicles belonging to third-parties without their prior direct consent stands as a direct breach of system rules and localized laws, in which you hold sole responsibility.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">4. Subscriptions, Payments & Sim-Cards</h4>
                  <p>Remote tracking requires active Cellular SIM operations and cloud platform hosting. Accounts are charged depending on chosen tiers. Neglecting due subscription invoices beyond 14 grace days will lead to automated SIM service interruptions and asset offline statuses. Reactivation charges may apply.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">5. Hardware Integrity & 12-Month Guarantee</h4>
                  <p>Our hardwired GPS trackers carry a comprehensive 12-month manufacturing warranty from the installation date. This warranty is rendered void if the device shell is physically dismantled, disconnected, or tampered with by an uncertified technician.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">6. Limitation of Liability</h4>
                  <p>GPS tracking systems depend on global satellite reception, correct electrical connection, and localized GSM connectivity. Services are offered "as is". Alvary Technologies is not strictly liable for physical asset loss, recovery gaps, or business down-times caused by regional network dead-zones or equipment sabotage.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">7. Regulatory Framework</h4>
                  <p>These terms and conditions are strictly regulated under the jurisdiction laws of the Republic of Zimbabwe. Legal inquiries should be raised via sales channel correspondence.</p>
                </div>
              </div>

              <div className="p-6 bg-slate-50 flex justify-end">
                <button 
                  onClick={() => setShowTermsOfService(false)}
                  className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-xl shadow-brand-600/15 cursor-pointer animate-none"
                >
                  I Agree
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Help Button */}
      <button
        onClick={() => {
          setShowHelpModal(true);
          setMobileView('list');
        }}
        className="fixed bottom-[96px] right-6 z-50 flex items-center justify-center w-[60px] h-[60px] bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-2xl transition-transform hover:scale-110 cursor-pointer group border border-brand-500/20"
        title="Quick Help & Troubleshooting"
      >
        <HelpCircle size={28} className="text-white group-hover:rotate-12 transition-transform" />
      </button>

      {/* Help Modal */}
      <AnimatePresence>
        {showHelpModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowHelpModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-100 relative z-10 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
                <div>
                  <div className="flex items-center gap-2 text-brand-600 mb-1">
                    <HelpCircle size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">Self-Service Troubleshooter</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Alvary Support Center</h3>
                </div>
                <button 
                  onClick={() => setShowHelpModal(false)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Core Content */}
              <div className="flex-1 overflow-hidden flex flex-col md:flex-row min-h-[400px]">
                
                {/* Desktop Sidebar / Mobile List view */}
                <div className={`w-full md:w-1/3 border-r border-slate-100 bg-slate-50/30 overflow-y-auto p-4 md:p-6 select-none ${
                  mobileView === 'detail' ? 'hidden md:block' : 'block'
                }`}>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 mb-3">Diagnostic Topics</h4>
                  <div className="space-y-2">
                    {HELP_TOPICS.map((topic) => {
                      const isActive = selectedTopicId === topic.id;
                      return (
                        <button
                          key={topic.id}
                          onClick={() => {
                            setSelectedTopicId(topic.id);
                            setMobileView('detail');
                          }}
                          className={`w-full text-left p-3.5 rounded-2xl flex items-start gap-3 transition-all cursor-pointer ${
                            isActive 
                              ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/15 font-semibold' 
                              : 'hover:bg-slate-100 text-slate-700'
                          }`}
                        >
                          <div className={`p-2 rounded-xl flex-shrink-0 ${isActive ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-600'}`}>
                            {getTopicIcon(topic.iconName, "w-5 h-5")}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold leading-tight truncate">{topic.title}</div>
                            <div className={`text-[11px] mt-0.5 line-clamp-1 ${isActive ? 'text-brand-100' : 'text-slate-400'}`}>
                              {topic.shortDesc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Desktop Detail / Mobile Detail view */}
                <div className={`flex-1 overflow-y-auto p-6 md:p-8 flex flex-col ${
                  mobileView === 'list' ? 'hidden md:flex' : 'flex'
                }`}>
                  {/* Mobile Back Button */}
                  <div className="md:hidden mb-6">
                    <button 
                      onClick={() => setMobileView('list')}
                      className="flex items-center gap-2 text-brand-600 font-bold text-sm tracking-wide cursor-pointer"
                    >
                      <ArrowLeft size={16} /> Back to Topics
                    </button>
                  </div>

                  {(() => {
                    const currentTopic = HELP_TOPICS.find(t => t.id === selectedTopicId);
                    if (!currentTopic) return null;
                    return (
                      <div className="space-y-6 flex-1">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] uppercase font-black bg-brand-50 text-brand-700 px-2.5 py-1 rounded-md tracking-wider">
                              {currentTopic.category}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold text-slate-900">{currentTopic.title}</h4>
                          <p className="text-sm text-slate-500 mt-2">{currentTopic.shortDesc}</p>
                        </div>

                        {/* Steps List */}
                        <div className="space-y-4">
                          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Step-by-Step Instructions</h5>
                          <div className="space-y-3">
                            {currentTopic.steps.map((step, idx) => (
                              <div key={idx} className="flex gap-4 items-start p-4 hover:bg-slate-50/50 rounded-2xl transition-all border border-slate-100">
                                <div className="w-7 h-7 rounded-full bg-brand-50 text-brand-600 font-black text-xs flex items-center justify-center flex-shrink-0 border border-brand-100">
                                  {idx + 1}
                                </div>
                                <div className="space-y-1 flex-1">
                                  <div className="text-sm font-bold text-slate-900 leading-tight">{step.text}</div>
                                  {step.details && (
                                    <p className="text-xs text-slate-500 leading-relaxed">{step.details}</p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Copyable command */}
                        {currentTopic.commandToCopy && (
                          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/60">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 flex items-center gap-1.5">
                                <Info size={12} className="text-slate-400" /> WhatsApp / SMS Command
                              </span>
                              <span className="text-[10px] text-slate-400 italic">Send directly to your device SIM</span>
                            </div>
                            <div className="bg-slate-900 text-slate-100 p-3.5 rounded-xl font-mono text-sm flex justify-between items-center overflow-x-auto shadow-inner border border-slate-800">
                              <span className="select-all tracking-wider font-semibold">{currentTopic.commandToCopy}</span>
                              <button
                                onClick={() => handleCopyCommand(currentTopic.commandToCopy!)}
                                className={`ml-4 p-2 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                                  copiedText === currentTopic.commandToCopy
                                    ? 'bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30'
                                    : 'bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white border border-white/5'
                                }`}
                              >
                                {copiedText === currentTopic.commandToCopy ? (
                                  <>
                                    <Check size={14} />
                                    <span className="text-xs font-semibold">Copied</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy size={14} />
                                    <span className="text-xs font-semibold">Copy</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Recommendation alert box */}
                        {currentTopic.recommendation && (
                          <div className="bg-amber-50/40 rounded-2xl p-4 border border-amber-100 flex gap-3 text-amber-900 text-xs">
                            <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5 animate-pulse" />
                            <div>
                              <span className="font-extrabold block text-amber-800 mb-0.5 uppercase tracking-wide text-[10px]">Technical Note</span>
                              {currentTopic.recommendation}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                <div className="text-slate-400 text-xs text-center sm:text-left flex items-center gap-1">
                  💡 Stuck? Our Harare-based support agents are live 24/7.
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <a 
                    href="https://wa.me/263781899027?text=Hi%20Alvary%2C%20I%20need%20help%20with%20my%20GPS%20tracking%20device."
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-600/10 flex items-center gap-1.5 justify-center text-sm cursor-pointer"
                  >
                    <MessageCircle size={16} /> Live Chat
                  </a>
                  <button 
                    onClick={() => setShowHelpModal(false)}
                    className="flex-1 sm:flex-none bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold px-5 py-2.5 rounded-xl transition-colors text-sm cursor-pointer"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
