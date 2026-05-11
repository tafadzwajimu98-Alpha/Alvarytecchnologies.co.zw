/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
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
  Zap
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

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

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
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
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
    </div>
  );
}
