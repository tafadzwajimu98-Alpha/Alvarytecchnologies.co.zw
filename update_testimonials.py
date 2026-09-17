import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# 1. Update imports
content = content.replace(
    '''import { 
  MapPin, Phone, Menu, X, Download, ShieldCheck, Activity, Droplet, 
  ChevronRight, CheckCircle2, Award, Headset, Settings,
  MessageSquare, Facebook, PhoneCall, Mail, ArrowRight, Gauge, 
  Video, Siren, Key, Target, Map
} from 'lucide-react';''',
    '''import { 
  MapPin, Phone, Menu, X, Download, ShieldCheck, Activity, Droplet, 
  ChevronRight, ChevronLeft, CheckCircle2, Award, Headset, Settings,
  MessageSquare, Facebook, PhoneCall, Mail, ArrowRight, Gauge, 
  Video, Siren, Key, Target, Map, Star, Quote
} from 'lucide-react';'''
)

# 2. Add testimonials array and App component states
state_insertion = '''
const testimonials = [
  {
    quote: "Alvary Technologies completely transformed how we manage our logistics. Their GPS tracking is incredibly precise, and the 24/7 support gives us total peace of mind. We've seen a massive increase in operational efficiency.",
    name: "David M.",
    role: "Logistics Director",
    company: "TransAfric Freight",
    rating: 5
  },
  {
    quote: "The ultrasonic fuel sensors paid for themselves in the first month. We've eliminated fuel theft and optimized our routes thanks to their comprehensive platform. Highly recommend their professional installation team.",
    name: "Sarah K.",
    role: "Operations Manager",
    company: "Elite Haulage",
    rating: 5
  },
  {
    quote: "Professional installation and rock-solid reliability. When we needed central locks and remote immobilization, Alvary delivered a flawless security system for our entire fleet. Outstanding customer service.",
    name: "Michael T.",
    role: "Fleet Supervisor",
    company: "City Transit Corp",
    rating: 5
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
'''
content = content.replace(
    '''export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);''',
    state_insertion
)

# 3. Add testimonials section
testimonial_html = '''
      {/* Testimonials */}
      <section className="py-24 bg-slate-50 relative overflow-hidden" id="testimonials">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4">Client Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Trusted by Industry Leaders</h3>
            <p className="text-slate-600 text-lg">
              Hear what our partners have to say about the reliability and professional service delivered by Alvary Technologies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
              <Quote className="absolute top-8 left-8 text-blue-100 w-16 h-16 -z-0" />
              
              <div className="relative z-10 min-h-[220px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium mb-8">
                      "{testimonials[activeTestimonial].quote}"
                    </p>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">{testimonials[activeTestimonial].name}</div>
                      <div className="text-blue-600 text-sm font-bold tracking-wide uppercase mt-1">
                        {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="flex justify-center gap-4 mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeTestimonial === idx ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-200 hover:bg-blue-300'
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}'''

content = content.replace('      {/* CTA Section */}', testimonial_html)

with open('src/App.tsx', 'w') as f:
    f.write(content)
