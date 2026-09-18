import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Search, ShieldCheck, Clock, Award, 
  MessageSquare, Phone, ChevronRight, Check, Wrench, Download, 
  Layers, Cpu, FileText, Zap
} from 'lucide-react';
import { CATALOG_CATEGORIES, CATALOG_PRODUCTS } from '../data/catalogData';
import { CatalogProduct } from '../types';
import { useTheme } from '../context/ThemeContext';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: string;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({ 
  isOpen, 
  onClose,
  selectedCategory = 'all'
}) => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProductModal, setActiveProductModal] = useState<CatalogProduct | null>(null);

  // Sync category if prop changes
  useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
    }
  }, [selectedCategory]);

  // Lock body scroll when open
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

  // Filter products
  const filteredProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter((product) => {
      const matchesCategory = 
        activeCategory === 'all' || product.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.model.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.features.some(f => f.toLowerCase().includes(query)) ||
        product.specs.some(s => s.value.toLowerCase().includes(query) || s.label.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`relative w-full max-w-7xl max-h-[92vh] shadow-2xl flex flex-col z-10 overflow-hidden ${
            isDark 
              ? 'bg-[#0A192F] border-2 border-[#233554] text-white' 
              : 'bg-white border border-slate-200 text-[#0A192F]'
          }`}
        >
          {/* Header Bar */}
          <div className={`p-6 md:p-8 border-b flex flex-col md:flex-row md:items-center justify-between gap-6 ${
            isDark ? 'bg-[#0A192F] border-[#233554]' : 'bg-white border-slate-200'
          }`}>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-[10px] font-mono uppercase tracking-[0.25em] px-2.5 py-1 border ${
                  isDark ? 'bg-[#112240] border-[#233554] text-blue-200' : 'bg-slate-100 border-slate-300 text-slate-700'
                }`}>
                  Hardware & Telematics Catalog
                </span>
                <span className={`text-[10px] font-mono uppercase tracking-widest ${isDark ? 'text-white' : 'text-[#0A192F] font-bold'}`}>
                  Alvary Technologies 2026
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                Equipment & Solutions Catalog
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/263781899027?text=Hi%20Alvary%20Technologies,%20please%20send%20me%20the%20full%20PDF%20hardware%20catalog%20and%20price%20list."
                target="_blank"
                rel="noreferrer"
                className={`hidden sm:inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest border px-4 py-3 transition-colors ${
                  isDark 
                    ? 'border-[#233554] hover:border-white bg-[#112240] text-blue-100 hover:text-white' 
                    : 'border-slate-300 hover:border-[#0A192F] bg-slate-100 text-slate-800 hover:text-black font-semibold'
                }`}
              >
                <Download size={14} /> Request PDF Specsheet
              </a>
              <button
                onClick={onClose}
                aria-label="Close catalog"
                className={`w-11 h-11 border flex items-center justify-center transition-colors ${
                  isDark 
                    ? 'bg-[#112240] border-[#233554] hover:border-white text-white' 
                    : 'bg-white border-slate-300 hover:border-black text-slate-800'
                }`}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className={`p-4 md:px-8 border-b flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 ${
            isDark ? 'bg-[#112240] border-[#233554]' : 'bg-slate-50 border-slate-200'
          }`}>
            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
              {CATALOG_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs font-mono uppercase tracking-widest px-4 py-2.5 whitespace-nowrap transition-all border ${
                    activeCategory === cat.id
                      ? (isDark 
                          ? 'bg-white text-[#0A192F] border-white font-bold shadow-sm' 
                          : 'bg-[#0A192F] text-white border-[#0A192F] font-bold shadow-sm')
                      : (isDark 
                          ? 'bg-[#0A192F] text-blue-100 border-[#233554] hover:border-blue-200' 
                          : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500')
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="relative min-w-[260px] lg:w-72">
              <Search size={15} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                isDark ? 'text-blue-200' : 'text-slate-400'
              }`} />
              <input
                type="text"
                placeholder="Search model, specs, feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full text-xs pl-10 pr-4 py-2.5 focus:outline-none transition-colors font-sans border ${
                  isDark 
                    ? 'bg-[#0A192F] border-[#233554] text-white placeholder:text-blue-200 focus:border-white' 
                    : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#0A192F]'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs ${
                    isDark ? 'text-blue-200 hover:text-white' : 'text-slate-500 hover:text-black'
                  }`}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className={`px-6 md:px-8 py-2.5 border-b flex items-center justify-between text-xs font-mono ${
            isDark ? 'bg-[#0A192F] border-[#233554] text-blue-200' : 'bg-slate-100 border-slate-200 text-slate-600'
          }`}>
            <span>
              Showing <strong className={isDark ? 'text-white' : 'text-[#0A192F]'}>{filteredProducts.length}</strong> verified equipment models
            </span>
            <span className="hidden sm:inline">
              Guaranteed 24/48h on-site physical fitment across Zimbabwe
            </span>
          </div>

          {/* Product Grid Area (Scrollable) */}
          <div className={`flex-1 overflow-y-auto p-6 md:p-8 space-y-6 ${
            isDark 
              ? 'bg-[#0A192F] scrollbar-thin scrollbar-thumb-[#233554] scrollbar-track-[#0A192F]' 
              : 'bg-slate-50 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100'
          }`}>
            {/* OBD Highlight Banner when OBD category is selected */}
            {activeCategory === 'obd' && (
              <div className={`border-2 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                isDark ? 'bg-[#112240] border-white/40' : 'bg-white border-[#0A192F]/40 shadow-sm'
              }`}>
                <div className="flex items-start gap-3.5">
                  <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold ${
                    isDark ? 'bg-white text-[#0A192F]' : 'bg-[#0A192F] text-white'
                  }`}>
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-black uppercase tracking-wider flex items-center gap-2 flex-wrap ${
                      isDark ? 'text-white' : 'text-[#0A192F]'
                    }`}>
                      OBD-II Plug & Play Telematics Architecture
                      <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 border ${
                        isDark 
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                          : 'bg-emerald-50 text-emerald-700 border-emerald-300 font-bold'
                      }`}>
                        Zero Wire Splicing
                      </span>
                    </h4>
                    <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-blue-100' : 'text-slate-600'}`}>
                      Inserts directly into standard 16-pin vehicle diagnostic ports in 10 seconds. Preserves vehicle manufacturer warranties while delivering real-time CAN-bus engine diagnostics and immediate disconnect tamper alerts.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 border ${
                    isDark ? 'text-blue-200 bg-[#0A192F] border-[#233554]' : 'text-slate-700 bg-slate-100 border-slate-300 font-medium'
                  }`}>
                    10-Sec Fitment
                  </span>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 border ${
                    isDark ? 'text-blue-200 bg-[#0A192F] border-[#233554]' : 'text-slate-700 bg-slate-100 border-slate-300 font-medium'
                  }`}>
                    Anti-Unplug Alert
                  </span>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 border ${
                    isDark ? 'text-blue-200 bg-[#0A192F] border-[#233554]' : 'text-slate-700 bg-slate-100 border-slate-300 font-medium'
                  }`}>
                    Warranty Preserved
                  </span>
                </div>
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center justify-center">
                <div className={`w-16 h-16 border flex items-center justify-center mb-4 ${
                  isDark ? 'bg-[#112240] border-[#233554] text-blue-200' : 'bg-slate-100 border-slate-300 text-slate-500'
                }`}>
                  <Cpu size={28} />
                </div>
                <h3 className={`text-xl font-bold uppercase tracking-tight mb-2 ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>No Matching Equipment Found</h3>
                <p className={`text-sm max-w-md mb-6 ${isDark ? 'text-blue-100' : 'text-slate-600'}`}>
                  We couldn't find hardware matching your search terms. Check your spelling or browse all catalog categories.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                    isDark ? 'bg-white text-[#0A192F]' : 'bg-[#0A192F] text-white'
                  }`}
                >
                  Reset Catalog Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`border transition-all flex flex-col justify-between group ${
                      isDark 
                        ? 'bg-[#112240] border-[#233554] hover:border-white' 
                        : 'bg-white border-slate-200 hover:border-[#0A192F] shadow-sm'
                    }`}
                  >
                    {/* Top Content */}
                    <div className="p-6 md:p-7">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 border ${
                              isDark ? 'bg-[#0A192F] text-blue-100 border-[#233554]' : 'bg-slate-100 text-slate-700 border-slate-300 font-semibold'
                            }`}>
                              {product.model}
                            </span>
                            {product.badge && (
                              <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 font-bold ${
                                isDark ? 'bg-white text-[#0A192F]' : 'bg-[#0A192F] text-white'
                              }`}>
                                {product.badge}
                              </span>
                            )}
                          </div>
                          <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tight transition-colors leading-tight flex items-center flex-wrap gap-2 ${
                            isDark ? 'text-white group-hover:text-blue-100' : 'text-[#0A192F]'
                          }`}>
                            <span>{product.name}</span>
                            {product.category === 'obd' && (
                              <span className={`inline-flex items-center gap-1 text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 align-middle ${
                                isDark ? 'bg-white text-[#0A192F]' : 'bg-[#0A192F] text-white'
                              }`}>
                                <Zap size={10} className={isDark ? 'fill-[#0A192F]' : 'fill-white'} /> OBD-II
                              </span>
                            )}
                          </h3>
                        </div>
                        <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 border whitespace-nowrap ${
                          isDark ? 'text-blue-200 bg-[#0A192F] border-[#233554]' : 'text-slate-600 bg-slate-100 border-slate-200 font-bold'
                        }`}>
                          {product.categoryLabel}
                        </span>
                      </div>

                      <p className={`text-xs md:text-sm font-medium leading-relaxed mb-6 ${
                        isDark ? 'text-blue-100' : 'text-slate-600'
                      }`}>
                        {product.description}
                      </p>

                      {/* Technical Specs Bento Grid */}
                      <div className={`grid grid-cols-2 gap-2 p-3 border mb-6 ${
                        isDark ? 'bg-[#0A192F] border-[#233554]' : 'bg-slate-50 border-slate-200'
                      }`}>
                        {product.specs.slice(0, 4).map((spec, sIdx) => (
                          <div key={sIdx} className="text-xs">
                            <span className={`block font-mono text-[9px] uppercase tracking-wider ${
                              isDark ? 'text-blue-200' : 'text-slate-500 font-bold'
                            }`}>
                              {spec.label}
                            </span>
                            <span className={`font-bold text-[11px] leading-tight ${
                              isDark ? 'text-white' : 'text-[#0A192F]'
                            }`}>
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Features Bullet List */}
                      <div>
                        <div className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${
                          isDark ? 'text-blue-200' : 'text-slate-500 font-bold'
                        }`}>
                          Key Capabilities:
                        </div>
                        <ul className="space-y-1.5">
                          {product.features.map((feat, fIdx) => (
                            <li key={fIdx} className={`flex items-start gap-2 text-xs ${
                              isDark ? 'text-blue-50' : 'text-slate-700'
                            }`}>
                              <Check size={14} className={`mt-0.5 flex-shrink-0 ${
                                isDark ? 'text-white' : 'text-emerald-600'
                              }`} />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Info & Actions */}
                    <div className={`px-6 py-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isDark ? 'bg-[#0A192F] border-[#233554]' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className={`flex items-center gap-4 text-xs font-mono ${
                        isDark ? 'text-blue-200' : 'text-slate-600'
                      }`}>
                        <span className="flex items-center gap-1.5 font-medium">
                          <Wrench size={13} className={isDark ? 'text-white' : 'text-[#0A192F]'} /> {product.installTime} fitment
                        </span>
                        <span className="flex items-center gap-1.5 font-medium">
                          <Award size={13} className={isDark ? 'text-white' : 'text-[#0A192F]'} /> {product.warranty}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveProductModal(product)}
                          className={`px-3 py-2 text-[11px] font-mono uppercase tracking-widest border transition-colors flex items-center gap-1.5 ${
                            isDark 
                              ? 'border-[#233554] hover:border-white text-blue-100 hover:text-white' 
                              : 'border-slate-300 hover:border-[#0A192F] text-slate-700 hover:text-black font-semibold'
                          }`}
                        >
                          <FileText size={13} /> Full Specs
                        </button>
                        <a
                          href={`https://wa.me/263781899027?text=${encodeURIComponent(
                            `Hi Alvary Technologies, I am interested in inquiring about the ${product.name} (${product.model}) for our vehicles. Please provide quote and installation details.`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                            isDark 
                              ? 'bg-white text-[#0A192F] hover:bg-[#E6F1FF]' 
                              : 'bg-[#0A192F] text-white hover:bg-[#112240]'
                          }`}
                        >
                          <MessageSquare size={13} /> Inquire
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className={`p-4 md:px-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
            isDark ? 'bg-[#112240] border-[#233554] text-blue-200' : 'bg-white border-slate-200 text-slate-600'
          }`}>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className={isDark ? 'text-blue-100' : 'text-slate-700 font-medium'}>
                All hardware in stock at Harare operations facility
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+263781899027" className={`flex items-center gap-1.5 font-bold ${isDark ? 'hover:text-white text-white' : 'hover:text-black text-[#0A192F]'}`}>
                <Phone size={13} /> +263 781 899 027
              </a>
              <span className={isDark ? 'text-[#233554]' : 'text-slate-300'}>|</span>
              <a href="mailto:alvarytechnologies@gmail.com" className={`font-bold ${isDark ? 'hover:text-white text-white' : 'hover:text-black text-[#0A192F]'}`}>
                alvarytechnologies@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Full Specifications Deep Dive Popup */}
        <AnimatePresence>
          {activeProductModal && (
            <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm ${
              isDark ? 'bg-[#000814]/90' : 'bg-slate-900/60'
            }`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`relative w-full max-w-2xl border-2 p-6 md:p-8 shadow-2xl ${
                  isDark ? 'bg-[#0A192F] border-white text-white' : 'bg-white border-[#0A192F] text-[#0A192F]'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border mb-2 inline-block ${
                      isDark ? 'bg-[#112240] border-[#233554] text-blue-200' : 'bg-slate-100 border-slate-300 text-slate-700 font-semibold'
                    }`}>
                      {activeProductModal.model} // {activeProductModal.categoryLabel}
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tight">
                      {activeProductModal.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveProductModal(null)}
                    aria-label="Close specifications"
                    className={`p-1 ${isDark ? 'text-blue-200 hover:text-white' : 'text-slate-500 hover:text-black'}`}
                  >
                    <X size={20} />
                  </button>
                </div>

                <p className={`text-sm leading-relaxed mb-6 font-medium ${isDark ? 'text-blue-100' : 'text-slate-600'}`}>
                  {activeProductModal.description}
                </p>

                <div className="mb-6">
                  <h4 className={`text-xs font-mono uppercase tracking-widest mb-3 ${isDark ? 'text-white' : 'text-[#0A192F] font-bold'}`}>
                    Technical Specifications
                  </h4>
                  <div className={`border divide-y ${
                    isDark 
                      ? 'border-[#233554] divide-[#233554] bg-[#112240]' 
                      : 'border-slate-200 divide-slate-200 bg-slate-50'
                  }`}>
                    {activeProductModal.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 text-xs">
                        <span className={`font-mono uppercase ${isDark ? 'text-blue-200' : 'text-slate-500 font-bold'}`}>{spec.label}</span>
                        <span className={`font-bold text-right ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>{spec.value}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between p-3 text-xs">
                      <span className={`font-mono uppercase ${isDark ? 'text-blue-200' : 'text-slate-500 font-bold'}`}>Standard Installation</span>
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>{activeProductModal.installTime}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 text-xs">
                      <span className={`font-mono uppercase ${isDark ? 'text-blue-200' : 'text-slate-500 font-bold'}`}>Warranty Guarantee</span>
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>{activeProductModal.warranty}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    onClick={() => setActiveProductModal(null)}
                    className={`px-4 py-2.5 text-xs font-mono uppercase tracking-widest border transition-colors ${
                      isDark 
                        ? 'border-[#233554] hover:border-white text-blue-100 hover:text-white' 
                        : 'border-slate-300 hover:border-[#0A192F] text-slate-700 hover:text-black font-semibold'
                    }`}
                  >
                    Close Specs
                  </button>
                  <a
                    href={`https://wa.me/263781899027?text=${encodeURIComponent(
                      `Hello, I would like to book an installation for ${activeProductModal.name} (${activeProductModal.model}).`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 ${
                      isDark 
                        ? 'bg-white text-[#0A192F] hover:bg-[#E6F1FF]' 
                        : 'bg-[#0A192F] text-white hover:bg-[#112240]'
                    }`}
                  >
                    <MessageSquare size={14} /> Book Fitment
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};
