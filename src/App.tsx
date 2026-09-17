import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, Menu, X, Download, ShieldCheck, Activity, Droplet, 
  ChevronRight, ChevronLeft, CheckCircle2, Award, Headset, Settings,
  MessageSquare, Facebook, PhoneCall, Mail, Gauge, 
  Video, Siren, Key, Target, Star, Quote, Crosshair, ArrowUpRight, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  { name: "VEHICLE TRACKING", icon: <MapPin size={28} strokeWidth={1.5} /> },
  { name: "FUEL MONITORING", icon: <Droplet size={28} strokeWidth={1.5} /> },
  { name: "SOUNDING ALARMS", icon: <Siren size={28} strokeWidth={1.5} /> },
  { name: "SPEED LIMITERS", icon: <Gauge size={28} strokeWidth={1.5} /> },
  { name: "MDVR", icon: <Video size={28} strokeWidth={1.5} /> },
  { name: "PANIC BUTTONS", icon: <ShieldCheck size={28} strokeWidth={1.5} /> },
  { name: "IDENTITY TAGS", icon: <Key size={28} strokeWidth={1.5} /> },
  { name: "MORE SOLUTIONS", icon: <Settings size={28} strokeWidth={1.5} /> }
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
    name: "David M.", role: "Logistics Director", company: "TransAfric Freight", rating: 5
  },
  {
    quote: "The ultrasonic fuel sensors paid for themselves in the first month. We've eliminated fuel theft and optimized our routes thanks to their comprehensive platform. Highly recommend their professional installation team.",
    name: "Sarah K.", role: "Operations Manager", company: "Elite Haulage", rating: 5
  },
  {
    quote: "Professional installation and rock-solid reliability. When we needed central locks and remote immobilization, Alvary delivered a flawless security system for our entire fleet. Outstanding customer service.",
    name: "Michael T.", role: "Fleet Supervisor", company: "City Transit Corp", rating: 5
  }
];

const CONTACTS = [
  { icon: <MessageSquare size={24} />, title: "WhatsApp", desc: "Instant messaging", link: "https://wa.me/263781899027", cta: "Chat Now" },
  { icon: <Facebook size={24} />, title: "Messenger", desc: "Chat via Facebook", link: "#", cta: "Message" },
  { icon: <PhoneCall size={24} />, title: "Phone Call", desc: "Direct voice support", link: "tel:+263781899027", cta: "Call Us" },
  { icon: <Mail size={24} />, title: "Feedback", desc: "Send us an email", link: "mailto:info@alvary.co.zw", cta: "Email Us" }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  return (
    <div className="min-h-screen bg-[#0A192F] font-sans text-white overflow-x-hidden selection:bg-white selection:text-[#0A192F]">
      
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#0A192F]/90 backdrop-blur-md border-[#233554] py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('home')}>
            <div className="bg-white text-[#0A192F] p-2 relative rounded-sm group-hover:bg-[#E6F1FF] text-[#0A192F] transition-colors">
              <MapPin size={24} strokeWidth={2} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#0A192F] rounded-full mt-1"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight leading-none text-white uppercase">
                Alvary
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] leading-none mt-1 text-blue-100 uppercase">
                Technologies
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {['Home', 'About', 'Solutions', 'Products'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-xs font-mono uppercase tracking-widest text-blue-100 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-mono text-blue-50">
              <Phone size={14} className="text-white" />
              +263 781 899 027
            </div>
            <button className="bg-white hover:bg-white text-[#0A192F] px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
              <Download size={14} /> App
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0A192F] pt-28 px-6 pb-6 lg:hidden flex flex-col border-b border-[#233554]"
          >
            <div className="flex flex-col gap-6 text-2xl font-black uppercase tracking-tighter text-white mb-10">
              {['Home', 'About', 'Solutions', 'Products'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-left hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-auto space-y-6">
              <div className="flex items-center gap-3 text-white font-mono">
                <Phone size={18} className="text-white" />
                +263 781 899 027
              </div>
              <button className="w-full bg-white text-[#0A192F] py-4 rounded-sm font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                <Download size={18} /> Download App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 bg-[#0A192F] overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex-grow flex flex-col justify-center">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-[#112240] border border-[#233554] px-3 py-1.5 text-[10px] font-mono text-blue-100 uppercase tracking-widest mb-8"
            >
              <Crosshair size={12} className="text-white" /> System Active // Telematics
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] uppercase mb-8"
            >
              Driven by <span className="text-white">Precision.</span><br/>
              Powered by <span className="text-blue-200">Innovation.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-blue-100 font-light max-w-2xl leading-relaxed mb-10"
            >
              Enhance efficiency, safety, and security in your transportation operations with our cutting-edge GPS technology and comprehensive fleet management tools.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-white text-[#0A192F] hover:bg-[#E6F1FF] px-8 py-4 font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-3 rounded-sm">
                Get a Quote <ArrowUpRight size={16} />
              </button>
              <button onClick={() => scrollTo('solutions')} className="bg-[#112240] hover:bg-[#233554] border border-[#233554] text-white px-8 py-4 font-bold text-xs uppercase tracking-widest transition-colors rounded-sm">
                Explore Solutions
              </button>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="w-full border-t border-[#233554] bg-[#0A192F] mt-16 relative z-10">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800 border-x border-[#233554]">
              {STATS.map((stat, i) => (
                <div key={i} className="py-8 px-4 flex flex-col items-center justify-center text-center group hover:bg-[#112240] transition-colors">
                  <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-[9px] font-mono text-white uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white text-[#0A192F] border-y border-blue-50">
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
                <div className="w-12 h-[2px] bg-white text-[#0A192F]"></div>
                <h2 className="text-xs font-mono text-white uppercase tracking-widest">About Alvary Technologies</h2>
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
              <div className="flex items-center gap-4 border-l-4 border-white pl-6 py-2">
                <div>
                  <div className="font-black text-xl">Industry Leaders</div>
                  <div className="text-sm text-blue-200 font-mono mt-1">Advanced Security & Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-[#0A192F] text-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <h2 className="text-xs font-mono text-white uppercase tracking-widest mb-4">Core Solutions</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-2xl leading-none">
              Complete control & visibility
            </h3>
          </div>

          <div className="space-y-6">
            {SOLUTIONS.map((sol, i) => (
              <div key={sol.id} className="group relative bg-[#112240] border border-[#233554] p-6 md:p-12 hover:border-white transition-colors overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                    <div className="text-5xl font-black text-[#0A192F] mb-6 font-mono">{sol.id}</div>
                    <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">{sol.title}</h4>
                    <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-md">
                      {sol.desc}
                    </p>
                    <ul className="space-y-4 mb-8">
                      {sol.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-blue-50 font-medium">
                          <CheckCircle2 size={20} className="text-white flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="text-xs font-mono text-white uppercase tracking-widest flex items-center gap-2 group-hover:text-blue-100">
                      View Specifications <ArrowRight size={14} />
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
      <section id="products" className="py-24 bg-[#112240] border-t border-[#233554]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-xs font-mono text-white uppercase tracking-widest mb-4">Hardware & Software</h2>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                Product Suite
              </h3>
            </div>
            <button className="bg-white hover:bg-white text-[#0A192F] px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
              View All Catalog <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#233554] border border-[#233554]">
            {PRODUCTS.map((prod, i) => (
              <div key={i} className="bg-[#0A192F] hover:bg-[#112240] transition-colors p-8 flex flex-col items-center justify-center text-center gap-6 group cursor-pointer aspect-square">
                <div className="text-blue-200 group-hover:text-white transition-colors">
                  {prod.icon}
                </div>
                <h5 className="font-bold text-xs uppercase tracking-widest">{prod.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Alvary Advantage */}
      <section className="py-24 bg-white text-[#0A192F] text-[#0A192F] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-mono text-[#0A192F] uppercase tracking-widest text-xs mb-4 font-bold">The Alvary Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Why Industry Leaders Choose Us</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0A192F] border border-[#0A192F]">
            {ADVANTAGES.map((adv, i) => (
              <div key={i} className="bg-[#112240] p-8 border border-[#233554] hover:bg-orange-400 transition-colors">
                <div className="w-16 h-16 bg-white text-[#0A192F] flex items-center justify-center mb-6">
                  {adv.icon}
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-4">{adv.title}</h4>
                <p className="text-[#0A192F] font-medium leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white text-[#0A192F] border-b border-blue-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-xs font-mono text-white uppercase tracking-widest mb-4">Client Success</h2>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Trusted By</h3>
            </div>
            <div className="hidden md:flex gap-2">
              <button onClick={prevTestimonial} className="w-12 h-12 bg-white text-[#0A192F] flex items-center justify-center hover:bg-white text-[#0A192F] transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextTestimonial} className="w-12 h-12 bg-white text-[#0A192F] flex items-center justify-center hover:bg-white text-[#0A192F] transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="bg-white border-4 border-[#0A192F] p-8 md:p-16 relative">
            <Quote className="absolute top-8 right-8 text-white w-24 h-24 z-0" />
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
                      <Star key={i} className="w-5 h-5 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-2xl md:text-4xl font-black tracking-tight leading-tight mb-8">
                    "{TESTIMONIALS[activeTestimonial].quote}"
                  </p>
                  <div>
                    <div className="font-bold text-[#0A192F] text-xl uppercase tracking-tight">{TESTIMONIALS[activeTestimonial].name}</div>
                    <div className="text-white text-xs font-mono uppercase tracking-widest mt-2">
                      {TESTIMONIALS[activeTestimonial].role} // {TESTIMONIALS[activeTestimonial].company}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          <div className="flex md:hidden gap-2 mt-8">
            <button onClick={prevTestimonial} className="flex-1 h-12 bg-white text-[#0A192F] flex items-center justify-center hover:bg-white text-[#0A192F] transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextTestimonial} className="flex-1 h-12 bg-white text-[#0A192F] flex items-center justify-center hover:bg-white text-[#0A192F] transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0A192F] text-white text-center border-b border-[#233554]">
        <div className="container mx-auto px-6 max-w-4xl">
          <Crosshair size={48} className="text-white mx-auto mb-8" />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            Transform your<br/>fleet management
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            End-to-end vehicle tracking and fleet management technology designed to optimize your operations, reduce costs, and enhance security.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#0A192F] hover:bg-[#E6F1FF] px-8 py-5 text-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-3">
              Request Consultation <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Connect / Contact Grid */}
      <section className="py-12 bg-[#112240] border-b border-[#233554]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#233554] border border-[#233554]">
            {CONTACTS.map((contact, i) => (
              <a key={i} href={contact.link} target="_blank" rel="noreferrer" className="bg-[#0A192F] p-8 hover:bg-[#112240] transition-colors group flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#112240] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <h4 className="font-bold text-lg uppercase tracking-widest mb-2">{contact.title}</h4>
                <p className="text-blue-200 text-sm mb-6">{contact.desc}</p>
                <span className="text-xs font-mono text-white uppercase tracking-widest mt-auto">{contact.cta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A192F] py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#233554] text-white p-2 relative rounded-sm">
                  <MapPin size={24} strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tight leading-none text-white uppercase">Alvary</span>
                  <span className="text-[9px] font-mono tracking-[0.2em] leading-none mt-1 text-blue-200 uppercase">Technologies</span>
                </div>
              </div>
              <p className="text-sm text-blue-100 leading-relaxed font-medium">
                Your trusted partner in vehicle telematics solutions. Delivering cutting-edge GPS tracking and fleet management across Southern Africa.
              </p>
            </div>

            <div>
              <h5 className="text-white font-black mb-6 tracking-widest uppercase text-sm">Quick Links</h5>
              <ul className="space-y-4 text-sm font-medium text-blue-100">
                <li><button onClick={() => scrollTo('home')} className="hover:text-white transition-colors uppercase tracking-wider">Home</button></li>
                <li><button onClick={() => scrollTo('about')} className="hover:text-white transition-colors uppercase tracking-wider">About Us</button></li>
                <li><button onClick={() => scrollTo('solutions')} className="hover:text-white transition-colors uppercase tracking-wider">Solutions</button></li>
                <li><button onClick={() => scrollTo('products')} className="hover:text-white transition-colors uppercase tracking-wider">Products</button></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-black mb-6 tracking-widest uppercase text-sm">Contact Details</h5>
              <ul className="space-y-4 text-sm font-medium text-blue-100">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-white flex-shrink-0 mt-1" />
                  <span>12454 Chivhima Building Dzivaresekwa Extension, Harare</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-white flex-shrink-0 mt-1" />
                  <div>
                    <span className="block text-blue-200 font-mono text-[10px] uppercase tracking-widest mb-1">Operations</span>
                    <a href="tel:+263781899027" className="hover:text-white text-white">+263 781 899 027</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Headset size={16} className="text-white flex-shrink-0 mt-1" />
                  <div>
                    <span className="block text-blue-200 font-mono text-[10px] uppercase tracking-widest mb-1">Customer Care</span>
                    <a href="tel:+263777212910" className="hover:text-white text-white">+263 777 212 910</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-white flex-shrink-0" />
                  <a href="mailto:info@alvary.co.zw" className="hover:text-white">info@alvary.co.zw</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-black mb-6 tracking-widest uppercase text-sm">Legal</h5>
              <ul className="space-y-4 text-sm font-medium text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-900 text-sm font-mono text-[#0A192F] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="uppercase tracking-widest">© 2026 Alvary Technologies.</p>
            <p className="uppercase tracking-widest">All rights reserved.</p>
          </div>
        </div>

        {/* Floating Action Button */}
        <a 
          href="https://wa.me/263781899027" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-6 right-6 bg-white text-[#0A192F] p-4 rounded-sm shadow-2xl hover:bg-[#E6F1FF] text-[#0A192F] transition-all hover:-translate-y-1 z-50 group flex items-center justify-center border border-blue-100"
        >
          <MessageSquare size={24} />
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#112240] border border-[#233554] text-white text-[10px] font-mono uppercase tracking-widest py-2 px-3 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
            System Support Online
          </div>
        </a>
      </footer>
    </div>
  );
}
