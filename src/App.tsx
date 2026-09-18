import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, Menu, X, Download, ShieldCheck, Activity, Droplet, 
  ChevronRight, ChevronLeft, ChevronDown, CheckCircle2, Award, Headset, Settings,
  MessageSquare, Facebook, PhoneCall, Mail, Gauge, 
  Video, Siren, Key, Target, Star, Quote, Crosshair, ArrowUpRight, ArrowRight, HelpCircle, Cookie, Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CatalogModal } from './components/CatalogModal';
import { QuoteSheet } from './components/QuoteSheet';
import { SolutionDetailsModal } from './components/SolutionDetailsModal';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { useTheme } from './context/ThemeContext';
import { ThemeSwitcher } from './components/ThemeSwitcher';

// --- DATA ---
const STATS = [
  { value: '200+', label: 'Vehicles Tracked' },
  { value: '3+', label: 'Years Experience' },
  { value: '24/7', label: 'Online Support' },
  { value: '24/48h', label: 'Physical Support' }
];

const SOLUTIONS = [
  {
    id: '01',
    title: 'Vehicle Tracking',
    desc: 'Our GPS and Satellite tracking system ensures you can monitor the real-time location, speed, and route history of your vehicles. Set geofences, receive movement alerts, and keep your fleet on the right track.',
    features: ['Real-time GPS location monitoring', 'Route history & playback', 'Geofencing & speed alerts'],
    img: '/src/assets/images/vehicle_tracking_dashboard_1789645419632.jpg'
  },
  {
    id: '02',
    title: 'Fuel Monitoring',
    desc: 'Gain complete visibility into your fuel usage. Our advanced sensors detect fuel levels, track consumption trends, and alert you to unusual activity such as theft or leakage.',
    features: ['Real-time fuel level tracking', 'Fuel theft detection', 'Consumption analytics reports'],
    img: '/src/assets/images/fuel_ultrasonic_sensor_installation_1789645375285.jpg'
  },
  {
    id: '03',
    title: 'Security Systems',
    desc: 'Protect your fleet with multi-layered security. Receive instant alerts for unauthorized movement, activate remote immobilization, and ensure driver verification.',
    features: ['Real-time security alerts', 'Remote immobilization', 'Central locks and alarms', 'Driver identification tags'],
    img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800'
  }
];

const PRODUCTS = [
  { name: "OBD TRACKERS", category: "obd", count: "Plug & Play", icon: <Zap size={28} strokeWidth={1.5} /> },
  { name: "VEHICLE TRACKING", category: "tracking", count: "3 Models", icon: <MapPin size={28} strokeWidth={1.5} /> },
  { name: "FUEL MONITORING", category: "fuel", count: "2 Sensors", icon: <Droplet size={28} strokeWidth={1.5} /> },
  { name: "SPEED LIMITERS", category: "safety", count: "SABS Compliant", icon: <Gauge size={28} strokeWidth={1.5} /> },
  { name: "SOUNDING ALARMS", category: "security", count: "Alarms & Locks", icon: <Siren size={28} strokeWidth={1.5} /> },
  { name: "MDVR CAMERAS", category: "safety", count: "AI 4-Channel", icon: <Video size={28} strokeWidth={1.5} /> },
  { name: "PANIC BUTTONS", category: "security", count: "Covert SOS", icon: <ShieldCheck size={28} strokeWidth={1.5} /> },
  { name: "IDENTITY TAGS", category: "security", count: "RFID Immobilizer", icon: <Key size={28} strokeWidth={1.5} /> }
];

const ADVANTAGES = [
  { icon: <Award size={32} strokeWidth={1.5} />, title: "Industry Experience", desc: "Over 3 years of proven expertise in vehicle telematics solutions across Southern Africa." },
  { icon: <Activity size={32} strokeWidth={1.5} />, title: "Cutting-Edge Innovation", desc: "Continuously advancing our technology to stay ahead of industry trends." },
  { icon: <Headset size={32} strokeWidth={1.5} />, title: "24/7 Expert Support", desc: "Round-the-clock customer service and technical assistance whenever you need it." },
  { icon: <Target size={32} strokeWidth={1.5} />, title: "Tailored Solutions", desc: "Customizable solutions designed to meet your unique business requirements." }
];

const TESTIMONIALS = [
  {
    quote: "Alvary Technologies completely transformed how we manage our logistics. Their GPS tracking is incredibly precise, and the 24/7 support gives us total peace of mind. We've seen a massive increase in operational efficiency.",
    name: "T. Kapuka", role: "Founder", company: "Twn-Kay Logistics", rating: 5,
    contactLink: "https://wa.me/263781899027?text=Hi%2C%20I%20saw%20T.%20Kapuka%27s%20review%20(Founder%20at%20Twn-Kay%20Logistics)%20on%20Alvary%20Technologies%20and%20would%20like%20to%20connect%20with%20them%20personally%20to%20ask%20about%20your%20services."
  },
  {
    quote: "The vehicle security and real-time tracking give us total assurance whenever our production and crew vehicles are on the road. Alvary delivered rock-solid reliability and rapid customer service.",
    name: "S. Nkosi", role: "C.E.O", company: "StanyLife Visuals", rating: 5,
    contactLink: "https://wa.me/263781899027?text=Hi%2C%20I%20saw%20S.%20Nkosi%27s%20review%20(C.E.O%20at%20StanyLife%20Visuals)%20on%20Alvary%20Technologies%20and%20would%20like%20to%20connect%20with%20them%20personally%20to%20ask%20about%20your%20services."
  },
  {
    quote: "The ultrasonic fuel sensors paid for themselves in the first month. We've eliminated fuel theft, optimized our distribution routes, and gained complete fleet visibility across all operations.",
    name: "T. Tafireyi", role: "Head of Operations", company: "TS BrandsZim", rating: 5,
    contactLink: "https://wa.me/263781899027?text=Hi%2C%20I%20saw%20T.%20Tafireyi%27s%20review%20(Head%20of%20Operations%20at%20TS%20BrandsZim)%20on%20Alvary%20Technologies%20and%20would%20like%20to%20connect%20with%20them%20personally%20to%20ask%20about%20your%20services."
  }
];


const FAQS = [
  {
    id: "geo-1",
    category: "Geofencing",
    question: "What is geofencing and how does it safeguard our vehicles?",
    answer: "Geofencing enables you to draw virtual boundaries on our digital map around designated areas—such as customer delivery hubs, authorized operating zones, depots, or prohibited high-risk zones. The moment any vehicle enters, departs, or idles inside a geofenced area, our system instantly triggers automated real-time security alerts."
  },
  {
    id: "geo-2",
    category: "Geofencing",
    question: "Can I receive instantaneous alerts if a vehicle exits its scheduled route or zone?",
    answer: "Yes, instantly. As soon as a perimeter breach or route deviation occurs, notifications are dispatched in real time via SMS, WhatsApp, mobile app push notifications, and web dashboard alerts. You can also configure automated remote engine immobilization for critical breach events."
  },
  {
    id: "install-1",
    category: "Installation",
    question: "How long does it take to install a GPS tracker or fuel sensor?",
    answer: "Standard GPS tracker installation typically takes between 45 to 90 minutes per vehicle. For advanced multi-component systems—including ultrasonic fuel sensors, panic switches, remote immobilizers, or MDVR cameras—installation usually takes 2 to 3 hours per vehicle."
  },
  {
    id: "install-2",
    category: "Installation",
    question: "Do you offer on-site mobile fitment or must vehicles be brought to a workshop?",
    answer: "We offer professional on-site mobile fitment across Harare and throughout Southern Africa with guaranteed 24 to 48 hours response time. Our certified mobile technicians come directly to your company yard, depot, or private premises, minimizing operational downtime."
  },
  {
    id: "install-3",
    category: "Installation & Warranty",
    question: "Will installing Alvary trackers or fuel monitoring void my vehicle's warranty?",
    answer: "No. Our technicians employ non-invasive, OEM-compliant wiring harnesses and ultrasonic non-drilling tank sensors where applicable. All installations preserve factory electrical integrity and uphold manufacturer warranty requirements."
  },
  {
    id: "geo-3",
    category: "Geofencing & Rules",
    question: "Can I set custom speed limits and working hours inside specific geofences?",
    answer: "Yes. Each geofence can carry its own operational parameters—such as a 20 km/h depot speed restriction, strict curfew departure prohibitions after hours, and idling thresholds to cut wasteful fuel consumption."
  }
];

const CONTACTS = [
  { icon: <MessageSquare size={24} />, title: "WhatsApp", desc: "Instant messaging", link: "https://wa.me/263781899027", cta: "Chat Now" },
  { icon: <Facebook size={24} />, title: "Facebook", desc: "Follow our page", link: "https://www.facebook.com/profile.php?id=61577787027984", cta: "Visit Page" },
  { icon: <PhoneCall size={24} />, title: "Phone Call", desc: "Direct voice support", link: "tel:+263781899027", cta: "Call Us" },
  { icon: <Mail size={24} />, title: "Feedback", desc: "Send us an email", link: "mailto:alvarytechnologies@gmail.com", cta: "Email Us" }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [catalogCategory, setCatalogCategory] = useState<string>('all');
  const [quoteSheetOpen, setQuoteSheetOpen] = useState(false);
  const [solutionModalOpen, setSolutionModalOpen] = useState(false);
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>('01');
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>('privacy');

  const openLegalModal = (doc: LegalDocType = 'privacy') => {
    setActiveLegalDoc(doc);
    setLegalModalOpen(true);
  };

  const openCatalog = (category: string = 'all') => {
    setCatalogCategory(category);
    setCatalogOpen(true);
  };

  const openSolutionDetails = (id: string) => {
    setSelectedSolutionId(id);
    setSolutionModalOpen(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    try {
      const consent = localStorage.getItem('alvary_cookie_consent');
      if (consent) {
        setCookieConsent(true);
      } else {
        const timer = setTimeout(() => setCookieConsent(false), 700);
        return () => clearTimeout(timer);
      }
    } catch {
      setCookieConsent(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    try {
      localStorage.setItem('alvary_cookie_consent', 'accepted');
    } catch {}
    setCookieConsent(true);
  };

  const handleDeclineCookies = () => {
    try {
      localStorage.setItem('alvary_cookie_consent', 'declined');
    } catch {}
    setCookieConsent(true);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const { theme, isDark } = useTheme();

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-200 ${
      isDark 
        ? 'bg-[#0A192F] text-white selection:bg-white selection:text-[#0A192F]' 
        : 'bg-[#F8FAFC] text-[#0A192F] selection:bg-[#0A192F] selection:text-white'
    }`}>
      
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? (isDark 
              ? 'bg-[#0A192F]/90 backdrop-blur-md border-[#233554] py-4' 
              : 'bg-white/95 backdrop-blur-md border-slate-200 shadow-xs py-4') 
          : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('home')}>
            <div className={`${
              isDark 
                ? 'bg-white text-[#0A192F] group-hover:bg-[#E6F1FF]' 
                : 'bg-[#0A192F] text-white group-hover:bg-[#112240]'
            } p-2 relative rounded-sm transition-colors`}>
              <MapPin size={24} strokeWidth={2} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-1.5 h-1.5 ${isDark ? 'bg-[#0A192F]' : 'bg-white'} rounded-full mt-1`}></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight leading-none uppercase ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>
                Alvary
              </span>
              <span className={`text-[9px] font-mono tracking-[0.2em] leading-none mt-1 uppercase ${isDark ? 'text-blue-100' : 'text-slate-600 font-bold'}`}>
                Technologies
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {['Home', 'About', 'Solutions', 'Products', 'FAQ'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                  isDark ? 'text-blue-100 hover:text-white' : 'text-slate-700 hover:text-[#0A192F] font-bold'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Contact, Theme Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Theme Mode Switcher */}
            <ThemeSwitcher variant="compact" />

            <div className={`flex items-center gap-2 text-sm font-mono ${isDark ? 'text-blue-50' : 'text-slate-800 font-bold'}`}>
              <Phone size={14} className={isDark ? 'text-white' : 'text-[#0A192F]'} />
              +263 781 899 027
            </div>
            <button className={`${
              isDark 
                ? 'bg-white hover:bg-white/90 text-[#0A192F]' 
                : 'bg-[#0A192F] hover:bg-[#112240] text-white'
            } px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 shadow-xs cursor-pointer`}>
              <Download size={14} /> App
            </button>
          </div>

          {/* Mobile Toggle with Theme Switcher */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeSwitcher variant="compact" />
            <button 
              className={`p-2 transition-colors ${isDark ? 'text-white' : 'text-[#0A192F]'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-40 pt-28 px-6 pb-6 lg:hidden flex flex-col border-b ${
              isDark ? 'bg-[#0A192F] text-white border-[#233554]' : 'bg-white text-[#0A192F] border-slate-200 shadow-2xl'
            }`}
          >
            {/* Theme Switcher Banner in Mobile Drawer */}
            <div className="mb-6">
              <ThemeSwitcher variant="expanded" />
            </div>

            <div className={`flex flex-col gap-6 text-2xl font-black uppercase tracking-tighter mb-10 ${
              isDark ? 'text-white' : 'text-[#0A192F]'
            }`}>
              {['Home', 'About', 'Solutions', 'Products', 'FAQ'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-left hover:opacity-75 transition-opacity"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-auto space-y-6">
              <div className={`flex items-center gap-3 font-mono ${isDark ? 'text-white' : 'text-slate-800 font-bold'}`}>
                <Phone size={18} className={isDark ? 'text-white' : 'text-[#0A192F]'} />
                +263 781 899 027
              </div>
              <button className={`w-full py-4 rounded-sm font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 ${
                isDark ? 'bg-white text-[#0A192F]' : 'bg-[#0A192F] text-white'
              }`}>
                <Download size={18} /> Download App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className={`relative min-h-screen flex flex-col justify-center pt-32 overflow-hidden ${
        isDark ? 'bg-[#0A192F]' : 'bg-[#F8FAFC]'
      }`}>
        {/* Technical Grid Background */}
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]' 
            : 'bg-[linear-gradient(to_right,#0f172a0d_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0d_1px,transparent_1px)]'
        } bg-[size:32px_32px]`}></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex-grow flex flex-col justify-center">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest mb-8 border ${
                isDark 
                  ? 'bg-[#112240] border-[#233554] text-blue-100' 
                  : 'bg-white border-slate-300 text-slate-800 shadow-xs'
              }`}
            >
              <Crosshair size={12} className={isDark ? 'text-white' : 'text-[#0A192F]'} /> System Active // Telematics
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-8 ${
                isDark ? 'text-white' : 'text-[#0A192F]'
              }`}
            >
              Driven by <span className={isDark ? 'text-white' : 'text-[#0A192F]'}>Precision.</span><br/>
              Powered by <span className={isDark ? 'text-blue-200' : 'text-blue-700'}>Innovation.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-10 ${
                isDark ? 'text-blue-100' : 'text-slate-700 font-normal'
              }`}
            >
              Enhance efficiency, safety, and security in your transportation operations with our cutting-edge GPS technology and comprehensive fleet management tools.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={() => setQuoteSheetOpen(true)}
                className={`${
                  isDark 
                    ? 'bg-white text-[#0A192F] hover:bg-blue-50 shadow-white/5' 
                    : 'bg-[#0A192F] text-white hover:bg-[#112240] shadow-slate-900/10'
                } active:scale-95 px-8 py-4 font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-3 rounded-xs shadow-xl group border border-transparent hover:border-white/80 cursor-pointer`}
                aria-label="Request Fleet Quote"
              >
                Get a Quote <ArrowUpRight size={16} className={`group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isDark ? 'text-[#0A192F]' : 'text-white'}`} />
              </button>
              <button 
                onClick={() => scrollTo('solutions')} 
                className={`${
                  isDark 
                    ? 'bg-[#112240] hover:bg-[#233554] border-[#233554] text-white' 
                    : 'bg-white hover:bg-slate-100 border-2 border-[#0A192F] text-[#0A192F]'
                } border px-8 py-4 font-bold text-xs uppercase tracking-widest transition-colors rounded-sm cursor-pointer`}
              >
                Explore Solutions
              </button>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={`w-full border-t mt-16 relative z-10 ${
          isDark ? 'border-[#233554] bg-[#0A192F]' : 'border-slate-300 bg-white shadow-xs'
        }`}>
          <div className="container mx-auto px-6 max-w-7xl">
            <div className={`grid grid-cols-2 md:grid-cols-4 divide-x border-x ${
              isDark ? 'divide-zinc-800 border-[#233554]' : 'divide-slate-200 border-slate-300'
            }`}>
              {STATS.map((stat, i) => (
                <div key={i} className={`py-8 px-4 flex flex-col items-center justify-center text-center group transition-colors ${
                  isDark ? 'hover:bg-[#112240]' : 'hover:bg-slate-50'
                }`}>
                  <div className={`text-3xl md:text-4xl font-black mb-2 group-hover:scale-110 transition-transform ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>{stat.value}</div>
                  <div className={`text-[9px] font-mono uppercase tracking-widest ${
                    isDark ? 'text-blue-100' : 'text-slate-600 font-bold'
                  }`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className={`py-24 border-y ${
        isDark ? 'bg-white text-[#0A192F] border-blue-50' : 'bg-white text-[#0A192F] border-slate-200 shadow-xs'
      }`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] bg-blue-100 relative z-10 border-4 border-[#0A192F] p-2">
                <img 
                  src="/src/assets/images/young_african_professional_1789644630499.jpg" 
                  alt="Professional" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-white text-[#0A192F] z-0 border-4 border-[#0A192F]"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#0A192F]"></div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-slate-700 font-bold">
                  About Alvary Technologies
                </h2>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.95]">
                Forefront of Vehicle Telematics
              </h3>
              <p className="text-lg text-[#0A192F] mb-6 leading-relaxed font-medium">
                Alvary Technologies delivers cutting-edge solutions that transform how businesses manage their fleets across Southern Africa and beyond. With over 3 years of expertise in GPS tracking and fleet management, we've built a reputation for reliability, innovation, and exceptional customer service.
              </p>
              <p className="text-lg text-[#0A192F] mb-10 leading-relaxed font-medium">
                Our mission is to enhance efficiency, safety, and security in the transportation industry through advanced technology and personalized support. Every fleet is unique, which is why we offer customizable solutions tailored to your specific operational needs.
              </p>
              <div className="flex items-center gap-4 border-l-4 border-[#0A192F] pl-6 py-2">
                <div>
                  <div className="font-black text-xl">Industry Leaders</div>
                  <div className="text-sm text-slate-600 font-mono mt-1">Advanced Security & Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className={`py-24 relative ${
        isDark ? 'bg-[#0A192F] text-white' : 'bg-[#F8FAFC] text-[#0A192F] border-t border-slate-200'
      }`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <h2 className={`text-xs font-mono uppercase tracking-widest mb-4 ${
              isDark ? 'text-blue-200' : 'text-slate-600 font-bold'
            }`}>Core Solutions</h2>
            <h3 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-2xl leading-none ${
              isDark ? 'text-white' : 'text-[#0A192F]'
            }`}>
              Complete control & visibility
            </h3>
          </div>

          <div className="space-y-6">
            {SOLUTIONS.map((sol) => (
              <div 
                key={sol.id} 
                className={`group relative border p-6 md:p-12 transition-colors overflow-hidden ${
                  isDark 
                    ? 'bg-[#112240] border-[#233554] hover:border-white text-white' 
                    : 'bg-white border-slate-300 hover:border-[#0A192F] text-[#0A192F] shadow-sm'
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                    <div className={`text-5xl font-black mb-6 font-mono ${
                      isDark ? 'text-blue-400/40' : 'text-slate-300'
                    }`}>{sol.id}</div>
                    <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">{sol.title}</h4>
                    <p className={`text-lg mb-8 leading-relaxed max-w-md ${
                      isDark ? 'text-blue-100' : 'text-slate-700 font-normal'
                    }`}>
                      {sol.desc}
                    </p>
                    <ul className="space-y-4 mb-8">
                      {sol.features.map((feat, idx) => (
                        <li key={idx} className={`flex items-start gap-3 font-medium ${
                          isDark ? 'text-blue-50' : 'text-slate-800'
                        }`}>
                          <CheckCircle2 size={20} className={`${isDark ? 'text-white' : 'text-[#0A192F]'} flex-shrink-0 mt-0.5`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => openSolutionDetails(sol.id)}
                      className={`inline-flex items-center gap-3 ${
                        isDark 
                          ? 'bg-white text-[#0A192F] hover:bg-blue-50 shadow-white/5' 
                          : 'bg-[#0A192F] text-white hover:bg-[#112240] shadow-slate-900/10'
                      } active:scale-95 px-6 py-3.5 font-bold text-xs uppercase tracking-widest transition-all rounded-xs shadow-lg group/btn cursor-pointer border border-transparent hover:border-white/80`}
                      aria-label={`View required details and specifications for ${sol.title}`}
                    >
                      <span>View Details Required & Specs</span>
                      <ArrowRight size={15} className={`group-hover/btn:translate-x-1 transition-transform ${isDark ? 'text-[#0A192F]' : 'text-white'}`} />
                    </button>
                  </div>
                  <div className="relative aspect-video lg:aspect-square bg-[#233554] border border-[#233554] overflow-hidden">
                    <img 
                      src={sol.img} 
                      alt={sol.title} 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 border-[12px] border-zinc-900/50"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className={`py-24 border-t ${
        isDark ? 'bg-[#112240] border-[#233554] text-white' : 'bg-slate-100/80 border-slate-300 text-[#0A192F]'
      }`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className={`text-xs font-mono uppercase tracking-widest mb-4 ${
                isDark ? 'text-blue-200' : 'text-slate-600 font-bold'
              }`}>Hardware & Software</h2>
              <h3 className={`text-3xl md:text-5xl font-black uppercase tracking-tighter ${
                isDark ? 'text-white' : 'text-[#0A192F]'
              }`}>
                Product Suite
              </h3>
            </div>
            <button 
              onClick={() => openCatalog('all')}
              className={`${
                isDark 
                  ? 'bg-white hover:bg-[#E6F1FF] text-[#0A192F]' 
                  : 'bg-[#0A192F] hover:bg-[#112240] text-white'
              } px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2.5 shadow-md active:scale-95 group rounded-xs cursor-pointer`}
              title="Open full telematics and hardware catalog"
            >
              <span>View All Catalog</span>
              <span className={`${
                isDark ? 'bg-[#0A192F] text-white group-hover:bg-[#112240]' : 'bg-white text-[#0A192F]'
              } text-[10px] font-mono px-2 py-0.5 rounded-xs font-bold transition-colors`}>
                10 Models
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-px ${
            isDark ? 'bg-[#233554] border-[#233554]' : 'bg-slate-300 border-slate-300'
          } border`}>
            {PRODUCTS.map((prod, i) => (
              <div 
                key={i} 
                onClick={() => openCatalog(prod.category)}
                className={`${
                  isDark 
                    ? 'bg-[#0A192F] hover:bg-[#112240] border-transparent hover:border-white text-white' 
                    : 'bg-white hover:bg-slate-50 border-transparent hover:border-[#0A192F] text-[#0A192F] shadow-xs'
                } transition-all p-7 flex flex-col items-center justify-center text-center gap-4 group cursor-pointer aspect-square border relative`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openCatalog(prod.category); }}
                title={`Click to view ${prod.name} specifications in catalog`}
              >
                <div className={`${
                  isDark ? 'text-blue-200 group-hover:text-white' : 'text-[#0A192F] group-hover:text-blue-700'
                } group-hover:scale-110 transition-all duration-300`}>
                  {prod.icon}
                </div>
                <div>
                  <h5 className={`font-bold text-xs uppercase tracking-widest ${
                    isDark ? 'text-white group-hover:text-blue-100' : 'text-[#0A192F] group-hover:text-blue-900'
                  }`}>{prod.name}</h5>
                  <span className={`text-[10px] font-mono mt-1 block uppercase tracking-wider ${
                    isDark ? 'text-blue-200 group-hover:text-white' : 'text-slate-600 group-hover:text-[#0A192F] font-bold'
                  }`}>{prod.count}</span>
                </div>
                <div className={`text-[9px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 ${
                  isDark ? 'text-blue-200' : 'text-[#0A192F] font-bold'
                }`}>
                  View Specs <ArrowRight size={10} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Alvary Advantage */}
      <section className={`py-24 border-t overflow-hidden ${
        isDark ? 'bg-white text-[#0A192F] border-blue-50' : 'bg-white text-[#0A192F] border-slate-200'
      }`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-mono text-slate-700 uppercase tracking-widest text-xs mb-4 font-bold">The Alvary Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Why Industry Leaders Choose Us</h3>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-px ${
            isDark ? 'bg-[#0A192F] border-[#0A192F]' : 'bg-slate-300 border-slate-300'
          } border`}>
            {ADVANTAGES.map((adv, i) => (
              <div 
                key={i} 
                className={`${
                  isDark 
                    ? 'bg-[#112240] border-[#233554] hover:bg-[#1b3262] text-white' 
                    : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-[#0A192F] text-[#0A192F] shadow-xs'
                } p-8 border transition-colors`}
              >
                <div className={`w-16 h-16 flex items-center justify-center mb-6 ${
                  isDark ? 'bg-white text-[#0A192F]' : 'bg-[#0A192F] text-white'
                }`}>
                  {adv.icon}
                </div>
                <h4 className={`text-xl font-black uppercase tracking-tight mb-4 ${
                  isDark ? 'text-white' : 'text-[#0A192F]'
                }`}>{adv.title}</h4>
                <p className={`font-medium leading-relaxed ${
                  isDark ? 'text-blue-100' : 'text-slate-700'
                }`}>
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Accordion Section */}
      <section id="faq" className={`py-24 border-t relative ${
        isDark ? 'bg-[#0A192F] text-white border-[#233554]' : 'bg-[#F8FAFC] text-[#0A192F] border-slate-200'
      }`}>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className={`inline-flex items-center gap-2 border px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-widest mb-4 rounded-xs ${
              isDark ? 'bg-[#112240] border-[#233554] text-blue-200' : 'bg-white border-slate-300 text-slate-800 shadow-xs'
            }`}>
              <HelpCircle size={14} className={isDark ? 'text-white' : 'text-[#0A192F]'} /> Customer Support & Guidance
            </div>
            <h2 className={`text-xs font-mono uppercase tracking-widest mb-3 ${
              isDark ? 'text-blue-200' : 'text-slate-600 font-bold'
            }`}>Frequently Asked Questions</h2>
            <h3 className={`text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight ${
              isDark ? 'text-white' : 'text-[#0A192F]'
            }`}>
              Geofencing & Installation Guide
            </h3>
            <p className={`text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-blue-100' : 'text-slate-700 font-medium'
            }`}>
              Find answers regarding our real-time geofence boundaries, automated alerts, professional fitment times, and mobile on-site service.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={faq.id}
                  className={`border transition-all duration-200 rounded-xs ${
                    isOpen 
                      ? (isDark ? 'border-white bg-[#112240]' : 'border-[#0A192F] bg-white shadow-sm') 
                      : (isDark ? 'border-[#233554] bg-[#0A192F] hover:border-blue-300' : 'border-slate-300 bg-white hover:border-slate-400 shadow-xs')
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 md:p-7 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pr-2">
                      <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border w-fit rounded-xs ${
                        isDark ? 'bg-[#233554] text-blue-100 border-[#233554]' : 'bg-slate-100 text-slate-700 border-slate-200 font-bold'
                      }`}>
                        {faq.category}
                      </span>
                      <h4 className={`text-lg md:text-xl font-bold uppercase tracking-tight leading-snug ${
                        isDark ? 'text-white' : 'text-[#0A192F]'
                      }`}>
                        {faq.question}
                      </h4>
                    </div>
                    <div className={`w-8 h-8 flex items-center justify-center border transition-transform duration-200 flex-shrink-0 rounded-xs ${
                      isOpen 
                        ? (isDark ? 'border-white bg-white text-[#0A192F] rotate-180' : 'border-[#0A192F] bg-[#0A192F] text-white rotate-180') 
                        : (isDark ? 'border-[#233554] text-white bg-[#112240]' : 'border-slate-300 text-[#0A192F] bg-slate-100')
                    }`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className={`px-6 pb-6 md:px-7 md:pb-7 pt-2 border-t text-base md:text-lg leading-relaxed font-normal ${
                          isDark ? 'border-[#233554] text-blue-100' : 'border-slate-200 text-slate-700'
                        }`}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Quick Contact Fitment Box */}
          <div className={`mt-12 p-8 border flex flex-col md:flex-row items-center justify-between gap-6 rounded-xs ${
            isDark ? 'bg-[#112240] border-[#233554] text-white' : 'bg-white border-2 border-[#0A192F] text-[#0A192F] shadow-sm'
          }`}>
            <div>
              <div className={`text-xs font-mono uppercase tracking-widest mb-1 ${
                isDark ? 'text-blue-200' : 'text-slate-600 font-bold'
              }`}>
                Need immediate mobile installation?
              </div>
              <h4 className={`text-lg font-bold uppercase tracking-tight ${
                isDark ? 'text-white' : 'text-[#0A192F]'
              }`}>
                Book our certified technicians within 24 to 48 hours.
              </h4>
            </div>
            <a 
              href="https://wa.me/263781899027" 
              target="_blank" 
              rel="noreferrer" 
              className={`${
                isDark 
                  ? 'bg-white text-[#0A192F] hover:bg-blue-50' 
                  : 'bg-[#0A192F] text-white hover:bg-[#112240]'
              } px-6 py-3.5 font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 whitespace-nowrap rounded-xs shadow-xs`}
            >
              <Phone size={14} /> Schedule Mobile Fitment
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-24 border-b ${
        isDark ? 'bg-white text-[#0A192F] border-blue-100' : 'bg-white text-[#0A192F] border-slate-200'
      }`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-xs font-mono text-slate-700 font-bold uppercase tracking-widest mb-4">Client Success</h2>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0A192F]">Trusted By</h3>
            </div>
            <div className="hidden md:flex gap-2">
              <button 
                onClick={prevTestimonial} 
                aria-label="Previous client testimonial"
                className="w-12 h-12 bg-white text-[#0A192F] border-2 border-[#0A192F] flex items-center justify-center hover:bg-[#0A192F] hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial} 
                aria-label="Next client testimonial"
                className="w-12 h-12 bg-white text-[#0A192F] border-2 border-[#0A192F] flex items-center justify-center hover:bg-[#0A192F] hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="bg-white border-4 border-[#0A192F] p-8 md:p-16 relative shadow-sm">
            <Quote className="absolute top-8 right-8 text-slate-100 w-24 h-24 z-0 pointer-events-none" />
            <div className="relative z-10 min-h-[200px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex gap-1 mb-8">
                    {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-2xl md:text-4xl font-black tracking-tight leading-tight mb-8 text-[#0A192F]">
                    "{TESTIMONIALS[activeTestimonial].quote}"
                    <span className="relative inline-block align-super ml-2 -translate-y-1.5 group/star">
                      <a
                        href={TESTIMONIALS[activeTestimonial].contactLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#0A192F] text-amber-400 hover:text-amber-300 hover:bg-[#112240] hover:scale-110 active:scale-95 transition-all shadow-md cursor-pointer border border-amber-400/50"
                        title={`Click to reach out and ask ${TESTIMONIALS[activeTestimonial].name} personally about Alvary Technologies`}
                        aria-label={`Ask ${TESTIMONIALS[activeTestimonial].name} personally about us`}
                      >
                        <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-amber-400 text-amber-400 group-hover/star:rotate-12 transition-transform" />
                      </a>
                      <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/star:flex flex-col items-center z-30 whitespace-nowrap">
                        <span className="bg-[#0A192F] text-white text-[11px] font-sans font-medium px-3 py-1.5 rounded-xs shadow-xl border border-[#233554] flex items-center gap-1.5">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>Ask <strong>{TESTIMONIALS[activeTestimonial].name}</strong> personally about us</span>
                        </span>
                        <span className="w-2 h-2 bg-[#0A192F] border-r border-b border-[#233554] rotate-45 -mt-1"></span>
                      </span>
                    </span>
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <div className="font-bold text-[#0A192F] text-xl uppercase tracking-tight">{TESTIMONIALS[activeTestimonial].name}</div>
                      <div className="text-gray-500 text-xs font-mono uppercase tracking-widest mt-1">
                        {TESTIMONIALS[activeTestimonial].role} // {TESTIMONIALS[activeTestimonial].company}
                      </div>
                    </div>
                    <a
                      href={TESTIMONIALS[activeTestimonial].contactLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0A192F] hover:text-blue-700 bg-gray-50 hover:bg-blue-50 border border-gray-200 px-3.5 py-2 rounded-xs transition-colors self-start sm:self-auto group/ref"
                    >
                      <Star size={13} className="fill-amber-400 text-amber-400 group-hover/ref:rotate-12 transition-transform" />
                      <span>Ask {TESTIMONIALS[activeTestimonial].name} Personally</span>
                      <ArrowUpRight size={13} className="group-hover/ref:translate-x-0.5 group-hover/ref:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          <div className="flex md:hidden gap-2 mt-8">
            <button 
              onClick={prevTestimonial} 
              aria-label="Previous client testimonial"
              className="flex-1 h-12 bg-white text-[#0A192F] border-2 border-[#0A192F] flex items-center justify-center hover:bg-[#0A192F] hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial} 
              aria-label="Next client testimonial"
              className="flex-1 h-12 bg-white text-[#0A192F] border-2 border-[#0A192F] flex items-center justify-center hover:bg-[#0A192F] hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 text-center border-b ${
        isDark ? 'bg-[#0A192F] text-white border-[#233554]' : 'bg-[#F8FAFC] text-[#0A192F] border-slate-300'
      }`}>
        <div className="container mx-auto px-6 max-w-4xl">
          <Crosshair size={48} className={`mx-auto mb-8 ${isDark ? 'text-white' : 'text-[#0A192F]'}`} />
          <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9] ${
            isDark ? 'text-white' : 'text-[#0A192F]'
          }`}>
            Transform your<br/>fleet management
          </h2>
          <p className={`text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-blue-100' : 'text-slate-700'
          }`}>
            End-to-end vehicle tracking and fleet management technology designed to optimize your operations, reduce costs, and enhance security.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setQuoteSheetOpen(true)}
              className={`${
                isDark 
                  ? 'bg-white text-[#0A192F] hover:bg-[#E6F1FF]' 
                  : 'bg-[#0A192F] text-white hover:bg-[#112240]'
              } px-8 py-5 text-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-3 shadow-md rounded-xs cursor-pointer`}
            >
              Request Consultation <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Connect / Contact Grid */}
      <section className={`py-12 border-b ${
        isDark ? 'bg-[#112240] border-[#233554] text-white' : 'bg-slate-100/80 border-slate-300 text-[#0A192F]'
      }`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-px ${
            isDark ? 'bg-[#233554] border-[#233554]' : 'bg-slate-300 border-slate-300'
          } border`}>
            {CONTACTS.map((contact, i) => (
              <a 
                key={i} 
                href={contact.link} 
                target="_blank" 
                rel="noreferrer" 
                className={`${
                  isDark 
                    ? 'bg-[#0A192F] hover:bg-[#112240] text-white' 
                    : 'bg-white hover:bg-slate-50 text-[#0A192F] shadow-xs'
                } p-8 transition-colors group flex flex-col items-center text-center`}
              >
                <div className={`w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                  isDark ? 'bg-[#112240] text-white' : 'bg-[#0A192F] text-white'
                }`}>
                  {contact.icon}
                </div>
                <h4 className={`font-bold text-lg uppercase tracking-widest mb-2 ${
                  isDark ? 'text-white' : 'text-[#0A192F]'
                }`}>{contact.title}</h4>
                <p className={`text-sm mb-6 ${
                  isDark ? 'text-blue-200' : 'text-slate-600 font-medium'
                }`}>{contact.desc}</p>
                <span className={`text-xs font-mono uppercase tracking-widest mt-auto font-bold ${
                  isDark ? 'text-white group-hover:text-blue-200' : 'text-[#0A192F] group-hover:text-blue-700'
                }`}>{contact.cta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-20 border-t ${
        isDark ? 'bg-[#0A192F] text-white border-[#233554]' : 'bg-white text-slate-700 border-slate-200 shadow-xs'
      }`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className={`${
                  isDark ? 'bg-[#233554] text-white' : 'bg-[#0A192F] text-white'
                } p-2 relative rounded-sm`}>
                  <MapPin size={24} strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className={`text-xl font-black tracking-tight leading-none uppercase ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>Alvary</span>
                  <span className={`text-[9px] font-mono tracking-[0.2em] leading-none mt-1 uppercase ${
                    isDark ? 'text-blue-200' : 'text-slate-600 font-bold'
                  }`}>Technologies</span>
                </div>
              </div>
              <p className={`text-sm leading-relaxed font-medium mb-4 ${
                isDark ? 'text-blue-100' : 'text-slate-600'
              }`}>
                Your trusted partner in vehicle telematics solutions. Delivering cutting-edge GPS tracking and fleet management across Southern Africa.
              </p>
              <a 
                href="https://www.facebook.com/profile.php?id=61577787027984" 
                target="_blank" 
                rel="noreferrer"
                className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-3 py-2 rounded-sm transition-colors border ${
                  isDark 
                    ? 'text-blue-200 hover:text-white border-[#233554] hover:border-white' 
                    : 'text-slate-700 hover:text-[#0A192F] border-slate-300 hover:border-[#0A192F]'
                }`}
              >
                <Facebook size={15} /> Facebook Page
              </a>
            </div>

            <div>
              <h5 className={`font-black mb-6 tracking-widest uppercase text-sm ${
                isDark ? 'text-white' : 'text-[#0A192F]'
              }`}>Quick Links</h5>
              <ul className={`space-y-4 text-sm font-medium ${
                isDark ? 'text-blue-100' : 'text-slate-600'
              }`}>
                <li><button onClick={() => scrollTo('home')} className={`${isDark ? 'hover:text-white' : 'hover:text-[#0A192F]'} transition-colors uppercase tracking-wider cursor-pointer`}>Home</button></li>
                <li><button onClick={() => scrollTo('about')} className={`${isDark ? 'hover:text-white' : 'hover:text-[#0A192F]'} transition-colors uppercase tracking-wider cursor-pointer`}>About Us</button></li>
                <li><button onClick={() => scrollTo('solutions')} className={`${isDark ? 'hover:text-white' : 'hover:text-[#0A192F]'} transition-colors uppercase tracking-wider cursor-pointer`}>Solutions</button></li>
                <li><button onClick={() => scrollTo('products')} className={`${isDark ? 'hover:text-white' : 'hover:text-[#0A192F]'} transition-colors uppercase tracking-wider cursor-pointer`}>Products</button></li>
                <li><button onClick={() => openCatalog('all')} className={`${isDark ? 'hover:text-white' : 'hover:text-[#0A192F]'} transition-colors uppercase tracking-wider text-left cursor-pointer`}>Equipment Catalog</button></li>
                <li><button onClick={() => scrollTo('faq')} className={`${isDark ? 'hover:text-white' : 'hover:text-[#0A192F]'} transition-colors uppercase tracking-wider cursor-pointer`}>FAQ</button></li>
              </ul>
            </div>

            <div>
              <h5 className={`font-black mb-6 tracking-widest uppercase text-sm ${
                isDark ? 'text-white' : 'text-[#0A192F]'
              }`}>Contact Details</h5>
              <ul className={`space-y-4 text-sm font-medium ${
                isDark ? 'text-blue-100' : 'text-slate-600'
              }`}>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className={`${isDark ? 'text-white' : 'text-[#0A192F]'} flex-shrink-0 mt-1`} />
                  <span>12454 Chivhima Building Dzivaresekwa Extension, Harare</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className={`${isDark ? 'text-white' : 'text-[#0A192F]'} flex-shrink-0 mt-1`} />
                  <div>
                    <span className={`block font-mono text-[10px] uppercase tracking-widest mb-1 ${
                      isDark ? 'text-blue-200' : 'text-slate-600 font-bold'
                    }`}>Operations</span>
                    <a href="tel:+263781899027" className={`${isDark ? 'text-white hover:text-blue-200' : 'text-[#0A192F] hover:text-blue-800 font-bold'}`}>+263 781 899 027</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Headset size={16} className={`${isDark ? 'text-white' : 'text-[#0A192F]'} flex-shrink-0 mt-1`} />
                  <div>
                    <span className={`block font-mono text-[10px] uppercase tracking-widest mb-1 ${
                      isDark ? 'text-blue-200' : 'text-slate-600 font-bold'
                    }`}>Customer Care</span>
                    <a href="tel:+263777212910" className={`${isDark ? 'text-white hover:text-blue-200' : 'text-[#0A192F] hover:text-blue-800 font-bold'}`}>+263 777 212 910</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className={`${isDark ? 'text-white' : 'text-[#0A192F]'} flex-shrink-0`} />
                  <a href="mailto:alvarytechnologies@gmail.com" className={`${isDark ? 'hover:text-white text-white' : 'hover:text-blue-800 text-[#0A192F] font-bold'}`}>alvarytechnologies@gmail.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className={`font-black mb-6 tracking-widest uppercase text-sm ${
                isDark ? 'text-white' : 'text-[#0A192F]'
              }`}>Legal</h5>
              <ul className={`space-y-4 text-sm font-medium ${
                isDark ? 'text-blue-100' : 'text-slate-600'
              }`}>
                <li>
                  <a 
                    href="#privacy" 
                    onClick={(e) => {
                      e.preventDefault();
                      openLegalModal('privacy');
                    }}
                    className={`${isDark ? 'hover:text-white' : 'hover:text-[#0A192F]'} transition-colors uppercase tracking-wider inline-flex items-center gap-1.5 group cursor-pointer`}
                    title="View Customer Privacy & Data Protection Policy"
                  >
                    <span>Privacy Policy</span>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#terms" 
                    onClick={(e) => {
                      e.preventDefault();
                      openLegalModal('terms');
                    }}
                    className={`${isDark ? 'hover:text-white' : 'hover:text-[#0A192F]'} transition-colors uppercase tracking-wider inline-flex items-center gap-1.5 group cursor-pointer`}
                    title="View Master Terms of Service & SLA"
                  >
                    <span>Terms of Service</span>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#cookies" 
                    onClick={(e) => {
                      e.preventDefault();
                      openLegalModal('cookies');
                    }}
                    className={`${isDark ? 'hover:text-white' : 'hover:text-[#0A192F]'} transition-colors uppercase tracking-wider inline-flex items-center gap-1.5 group cursor-pointer`}
                    title="View Cookie & Telematics Policy"
                  >
                    <span>Cookie Policy</span>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={`pt-8 border-t text-sm font-mono flex flex-col md:flex-row justify-between items-center gap-4 ${
            isDark ? 'border-[#233554] text-blue-200' : 'border-slate-200 text-slate-500'
          }`}>
            <p className="uppercase tracking-widest">© 2026 Alvary Technologies.</p>
            <p className="uppercase tracking-widest">All rights reserved.</p>
          </div>
        </div>

        {/* Minimal Cookie Consent Banner */}
        <AnimatePresence>
          {cookieConsent === false && (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`fixed bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 sm:right-auto sm:max-w-md z-50 p-5 shadow-2xl rounded-sm border backdrop-blur-md ${
                isDark 
                  ? 'bg-[#0A192F]/95 border-[#233554] text-white' 
                  : 'bg-white/95 border-slate-300 text-[#0A192F]'
              }`}
              role="dialog"
              aria-label="Cookie consent banner"
            >
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 flex items-center justify-center rounded-sm border ${
                    isDark ? 'bg-[#112240] border-[#233554] text-white' : 'bg-slate-100 border-slate-300 text-[#0A192F]'
                  }`}>
                    <Cookie size={15} />
                  </div>
                  <span className={`text-xs font-mono uppercase tracking-widest font-bold ${
                    isDark ? 'text-white' : 'text-[#0A192F]'
                  }`}>
                    Cookie Preferences
                  </span>
                </div>
                <button
                  onClick={handleDeclineCookies}
                  aria-label="Close cookie consent"
                  className={`p-1 transition-colors ${
                    isDark ? 'text-blue-200 hover:text-white' : 'text-slate-400 hover:text-slate-800'
                  }`}
                >
                  <X size={15} />
                </button>
              </div>

              <p className={`text-xs leading-relaxed font-medium mb-4 ${
                isDark ? 'text-blue-100' : 'text-slate-600'
              }`}>
                We utilize essential cookies and telemetry diagnostics to ensure secure fleet tracking access and optimize operational performance.
              </p>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleAcceptCookies}
                  className={`flex-1 text-[11px] font-bold uppercase tracking-widest py-2.5 px-4 transition-colors rounded-sm text-center cursor-pointer ${
                    isDark ? 'bg-white text-[#0A192F] hover:bg-[#E6F1FF]' : 'bg-[#0A192F] text-white hover:bg-[#112240]'
                  }`}
                >
                  Accept All
                </button>
                <button
                  onClick={handleDeclineCookies}
                  className={`flex-1 text-[11px] font-mono uppercase tracking-widest py-2.5 px-4 transition-colors rounded-sm text-center border cursor-pointer ${
                    isDark 
                      ? 'border-[#233554] hover:border-white text-blue-100 hover:text-white bg-[#112240]/60' 
                      : 'border-slate-300 hover:border-slate-800 text-slate-700 bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  Essential Only
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        <a 
          href="https://wa.me/263781899027" 
          target="_blank" 
          rel="noreferrer"
          className={`fixed bottom-6 right-6 p-4 rounded-sm shadow-2xl transition-all hover:-translate-y-1 z-50 group flex items-center justify-center border ${
            isDark 
              ? 'bg-white text-[#0A192F] hover:bg-[#E6F1FF] border-blue-100' 
              : 'bg-[#0A192F] text-white hover:bg-[#112240] border-[#0A192F]'
          }`}
          aria-label="Direct WhatsApp System Support"
        >
          <MessageSquare size={24} />
          <div className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 border text-[10px] font-mono uppercase tracking-widest py-2 px-3 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap ${
            isDark 
              ? 'bg-[#112240] border-[#233554] text-white' 
              : 'bg-[#0A192F] border-[#233554] text-white shadow-lg'
          }`}>
            System Support Online
          </div>
        </a>
      </footer>

      {/* Interactive Telematics Equipment Catalog */}
      <CatalogModal
        isOpen={catalogOpen}
        onClose={() => setCatalogOpen(false)}
        selectedCategory={catalogCategory}
      />

      {/* Fleet Quote Request Sheet */}
      <QuoteSheet
        isOpen={quoteSheetOpen}
        onClose={() => setQuoteSheetOpen(false)}
      />

      {/* Solution Details & Client Requirements Modal */}
      <SolutionDetailsModal
        isOpen={solutionModalOpen}
        onClose={() => setSolutionModalOpen(false)}
        selectedSolutionId={selectedSolutionId}
        onSelectSolution={(id) => setSelectedSolutionId(id)}
        onRequestQuote={(_solutionTitle) => {
          setSolutionModalOpen(false);
          setQuoteSheetOpen(true);
        }}
      />

      {/* Legal & Compliance Documentation Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialDoc={activeLegalDoc}
      />
    </div>
  );
}
