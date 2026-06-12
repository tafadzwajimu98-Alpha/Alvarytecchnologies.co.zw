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
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ShowcaseImg4 from './assets/images/regenerated_image_1778503906343.jpg';
import HowItWorksImg from './assets/images/regenerated_image_1778504127387.jpg';
import LogoIcon from './assets/images/regenerated_image_1778504701095.jpg';

// Types
type SectionId = 'home' | 'services' | 'about' | 'pricing' | 'contact' | 'how-it-works';

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

  // Quick Help state variables
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState('device-reset');
  const [mobileView, setMobileView] = useState<'list' | 'detail'>('list');
  const [copiedText, setCopiedText] = useState<string | null>(null);

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
            {['Home', 'Services', 'Why Us', 'About', 'Contact'].map((item) => (
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
              {['Home', 'Services', 'Why Us', 'About', 'Contact'].map((item) => (
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img 
            src={HERO_IMAGE} 
            alt="Vehicle Tracking" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
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
          <div className="bg-white rounded-[3rem] border border-brand-100 shadow-xl overflow-hidden flex flex-col lg:row items-stretch">
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
            <div className="lg:w-1/2 relative bg-brand-900 min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=2070" 
                alt="Fleet Monitoring" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
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
              { img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800", label: "Highway Patrol", type: "On the Road" },
              { img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800", label: "Modern Garage", type: "Installation Bay" },
              { img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800", label: "Long Haul Fleet", type: "Fleet Management" },
              { img: ShowcaseImg4, label: "Precision Service", type: "Maintenance" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-[2rem] overflow-hidden aspect-[4/5]"
              >
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
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
