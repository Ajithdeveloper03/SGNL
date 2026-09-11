'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, HeartPulse, GraduationCap, TrendingUp, 
  PiggyBank, Wallet, CheckCircle2, ChevronDown, 
  Phone, MessageCircle, ArrowRight, Shield, HeartHandshake,
  Check, Info, X, Clock, Star, Facebook, Twitter, Linkedin, Instagram, PhoneCall, Menu,
  Layers, Compass, FileText, Sparkles, Activity, Headset,
  Car, Home, Briefcase, Plane, AlertCircle
} from 'lucide-react';
import ContactPopup from '../../components/ContactPopup';

export default function GeneralInsurancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);

    // Scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused && scrollContainerRef.current) {
      interval = setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollTop, scrollHeight } = scrollContainerRef.current;
          // Reset to 0 when we reach exactly halfway (the duplicate set)
          if (scrollTop >= scrollHeight / 2) {
            scrollContainerRef.current.scrollTop = 1;
          } else {
            scrollContainerRef.current.scrollTop += 1;
          }
        }
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whyNeedInsurance = [
    "Repair or replacement cost for your vehicle after an accident",
    "Third-party liability cover, mandatory by law for every vehicle owner",
    "Protection for your home and shop against fire, burglary, and storm damage",
    "Cover for flood and cyclone-related property loss, common across Tamil Nadu",
    "Medical and cancellation cover for domestic and international trips",
    "Cashless repairs at network garages, so you don't pay large sums upfront"
  ];

  const plansOffered = [
    {
      title: "Motor Insurance (Car & Two-Wheeler)",
      icon: Car,
      color: "bg-emerald-500 text-white",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
      desc: "Covers own-damage repair costs after an accident, theft, or fire. It also includes the mandatory third-party liability cover for both cars and two-wheelers. Optional add-ons such as zero depreciation and engine protection may provide additional protection, subject to the selected policy's terms and conditions, whether you're navigating Chennai traffic or a highway trip to Madurai."
    },
    {
      title: "Home Insurance",
      icon: Home,
      color: "bg-sky-500 text-white",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      desc: "Comprehensive protection for your house structure and household contents against fire, theft, cyclone, and flood damage."
    },
    {
      title: "Shop & Commercial Property Insurance",
      icon: Briefcase,
      color: "bg-rose-500 text-white",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      desc: "Covers your shop, office, warehouse, or factory building and stock against fire, explosion, short-circuit, theft, and natural calamities. The right cover can help reduce the financial impact of unexpected property damage or stock losses on your business."
    },
    {
      title: "Travel Insurance",
      icon: Plane,
      color: "bg-indigo-500 text-white",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
      desc: "Covers trip cancellations, lost baggage, passport loss, and emergency medical treatment abroad. A delayed flight or a missed connection, at home or overseas, stays a minor hassle instead of a major expense."
    },
    {
      title: "Personal Accident Insurance",
      icon: AlertCircle,
      color: "bg-orange-500 text-white",
      image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=800",
      desc: "May provide a lump-sum benefit for covered accidental death or disability, with benefits depending on the selected policy and terms."
    }
  ];

  const comparisonData = [
    { feature: "Policy Options", traditional: "Plans from a single insurer", sgnl: "Choose from 15+ insurers' policies" },
    { feature: "Premium Payment", traditional: "Options may vary by insurer", sgnl: "Flexible payment options, based on the selected plan" },
    { feature: "Policy Coverage", traditional: "Coverage options vary by plan", sgnl: "Coverage options based on your family's needs" },
    { feature: "Child Education Benefit", traditional: "May vary by policy", sgnl: "Child-focused planning options available" },
    { feature: "Retirement Benefit", traditional: "May require a separate solution", sgnl: "Retirement-focused solutions available" },
    { feature: "Tax Benefit", traditional: "Benefits depend on applicable rules", sgnl: "Tax benefits under applicable rules" },
    { feature: "Claim Support", traditional: "Support depends on the provider", sgnl: "We assist you through the claim process" },
    { feature: "Policy Renewal", traditional: "Renewal support may vary", sgnl: "Active support for policy renewals" },
  ];

  const worthItPoints = [
    "Affordable premiums that fit your budget",
    "Flexible monthly or yearly payment options",
    "Long-term savings and wealth-building opportunities",
    "Protection and investment, combined in one plan",
    "Support for your child's education and your own retirement",
    "Planning built around your goals, not a one-size-fits-all template",
    "Guidance from a team that actually listens"
  ];

  const faqs = [
    { q: "What is general insurance and why do I need it?", a: "General insurance covers non-life risks — your vehicle, home, shop, and travel plans — against accidents, fire, theft, and other unforeseen events. A sudden loss stays manageable instead of becoming a financial setback." },
    { q: "Is motor insurance mandatory in Tamil Nadu?", a: "Yes, third-party motor insurance is legally mandatory for every vehicle owner in Tamil Nadu and across India. A comprehensive policy additionally covers damage to your own vehicle." },
    { q: "What is cashless claim settlement in motor insurance?", a: "Cashless claim settlement allows the insurer to settle an eligible repair claim directly with a network garage, subject to the policy terms and applicable deductibles." },
    { q: "Which general insurance companies can I choose from through SGNL?", a: "You get access to 10+ trusted insurers — including ICICI Lombard, Bajaj Allianz, Tata AIG, HDFC ERGO, and SBI General Insurance — compared side by side, so you're not limited to a single company's plans." },
    { q: "Can I insure my home and shop under one policy?", a: "Some property insurance products may allow coverage for multiple properties or risks under a single policy, depending on the insurer and policy terms. SGNL can help you compare suitable options based on your requirements." },
    { q: "What is a no-claim bonus in motor insurance?", a: "A no-claim bonus is a discount on your premium for every year you don't make a claim. It builds up over consecutive claim-free years and can lower your renewal cost significantly." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-[#001D3D]">
      
      {/* ══════════ HEADER SECTION ══════════ */}
      <div className="w-full relative z-50 flex flex-col shadow-sm">
        {/* TOP BAR */}
        <div className="bg-[#001D3D] h-10 w-full hidden lg:flex items-center justify-center text-[10px] xl:text-[11px] font-bold text-white tracking-widest uppercase relative">
          <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between h-full px-4 lg:px-8">
            
            {/* Left Section */}
            <div className="flex items-center h-full">
              {/* Blue slant */}
              <div className="bg-sky-500 h-full flex items-center px-6 relative z-10 cursor-pointer">
                <a href="mailto:support@sgnl.com" className="hover:text-white/80 transition-colors">
                  SUPPORT@SGNL.COM
                </a>
                <div className="absolute top-0 -right-4 w-8 h-full bg-sky-500 transform skew-x-[30deg] -z-10" />
              </div>

              <div className="flex items-center pl-10 pr-8 h-full border-r border-white/20">
                <div className="flex items-center gap-2 text-white/90">
                  <Clock className="w-4 h-4 text-sky-500" /> [Mon - Sat 8:00 AM - 6:00 PM]
                </div>
              </div>
            </div>

            {/* Center GET A QUOTE */}
            <div className="flex-1 flex justify-start items-center h-full gap-4 whitespace-nowrap normal-case tracking-normal pl-8 pr-8 border-r border-white/20">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-[10px] text-white font-black tracking-wider uppercase">
                <Star className="w-3 h-3 text-sky-400 fill-sky-400" /> TRUSTED NIDHI
              </div>
              <span className="text-white font-bold text-[13px]">
                Leading Nidhi Company in Tamil Nadu
              </span>
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="flex items-center text-white font-black text-[13px] hover:text-sky-400 transition-colors group"
              >
                <span className="border-b-2 border-white group-hover:border-sky-400 pb-0.5">Get A Quote</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Section */}
            <div className="flex items-center h-full">
              <div className="flex items-center gap-5 px-8 h-full text-white">
                <Link href="#" className="hover:text-sky-500 transition-colors">
                  <Facebook className="w-4 h-4 fill-current" />
                </Link>
                <Link href="#" className="hover:text-sky-500 transition-colors">
                  <Twitter className="w-4 h-4 fill-current" />
                </Link>
                <Link href="#" className="hover:text-sky-500 transition-colors">
                  <Linkedin className="w-4 h-4 fill-current" />
                </Link>
                <Link href="#" className="hover:text-sky-500 transition-colors">
                  <Instagram className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* MAIN NAVBAR */}
        <header className="bg-white w-full flex items-center justify-center border-b border-gray-100">
          <div className="max-w-[1400px] w-full mx-auto h-[85px] flex items-center justify-between px-4 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-center justify-center shrink-0">
              <img src="/sgnl/logo.png" alt="SGNL Logo" className="w-[85px] h-[85px] object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-[15px] font-black text-[#001D3D] h-full ml-auto mr-8">
              <Link href="/" className="hover:text-sky-500 transition-colors h-full flex items-center">Home</Link>

              <Link href="/about-us" className="hover:text-sky-500 transition-colors h-full flex items-center">
                About Us
              </Link>

              {/* Services */}
              <div className="relative h-full flex items-center" onMouseEnter={() => setActiveDropdown('Services')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`flex items-center gap-1.5 transition-colors h-full ${activeDropdown === 'Services' ? 'text-sky-500' : 'hover:text-sky-500'}`}>
                  Services <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Services' ? 'rotate-180 text-sky-500' : 'text-gray-400'}`} />
                </button>
                {activeDropdown === 'Services' && (
                  <div className="absolute top-[75px] left-1/2 -translate-x-1/2 bg-white rounded-[24px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] py-6 w-[240px] flex flex-col gap-1 z-50">
                    {['Life Insurance', 'Health Insurance', 'General Insurance', 'High-Interest Savings', 'Investment Solutions'].map(item => (
                      <Link key={item} href={item === 'Life Insurance' ? '/services/life-insurance' : item === 'Health Insurance' ? '/health-insurance-tamil-nadu' : item === 'General Insurance' ? '/general-insurance-tamil-nadu' : item === 'High-Interest Savings' ? '/high-interest-savings-plans-tamil-nadu' : item === 'Investment Solutions' ? '/investment-solutions-tamil-nadu' : '#'} className="px-8 py-2.5 text-[14px] font-bold text-[#475569] hover:text-sky-500 transition-colors">{item}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Schemes */}
              <div className="relative h-full flex items-center" onMouseEnter={() => setActiveDropdown('Schemes')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`flex items-center gap-1.5 transition-colors h-full ${activeDropdown === 'Schemes' ? 'text-sky-500' : 'hover:text-sky-500'}`}>
                  Schemes <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Schemes' ? 'rotate-180 text-sky-500' : 'text-gray-400'}`} />
                </button>
                {activeDropdown === 'Schemes' && (
                  <div className="absolute top-[75px] left-1/2 -translate-x-1/2 bg-white rounded-[24px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] py-6 w-[260px] flex flex-col gap-1 z-50">
                    {['Short Term Plans', 'Long Term Plans'].map(item => (
                      <Link key={item} href="#" className="px-8 py-2.5 text-[14px] font-bold text-[#475569] hover:text-sky-500 transition-colors">{item}</Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="#" className="hover:text-sky-500 transition-colors h-full flex items-center">
                Get In Touch
              </Link>
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center h-full">
              <div 
                onClick={() => setIsPopupOpen(true)}
                className="flex items-center gap-2 px-6 xl:px-8 h-full bg-sky-500 text-white hover:bg-[#001D3D] transition-colors cursor-pointer group"
              >
                <PhoneCall className="w-9 h-9 p-[2px] text-white stroke-[1.5] group-hover:scale-110 transition-transform" />
                <div className="flex flex-col justify-center">
                  <span className="text-[11px] font-bold tracking-widest text-white/80 uppercase mb-0.5">Call Anytime</span>
                  <span className="text-[19px] font-black text-white tracking-tight">+1 9812310000</span>
                </div>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="flex items-center text-[#001D3D] font-black text-[13px] hover:text-sky-500 transition-colors group px-2"
              >
                <span className="border-b-2 border-[#001D3D] group-hover:border-sky-500 pb-0.5 whitespace-nowrap">Get A Quote</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
              <button 
                className={`flex items-center justify-center transition-colors ${mobileOpen ? 'w-10 h-10 rounded-xl border border-gray-200 text-[#001D3D] hover:bg-gray-50' : 'p-2 text-[#001D3D]'}`} 
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-5 h-5" strokeWidth={2.5} /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-[85px] left-0 w-full bg-white shadow-2xl py-2 px-6 flex flex-col z-50">
            <Link href="/" className="w-full py-5 cursor-pointer">
              <span className="text-[#001D3D] font-black text-[15px]">Home</span>
            </Link>
            <Link href="/about-us" className="w-full py-5 cursor-pointer border-t border-gray-100">
              <span className="text-[#001D3D] font-black text-[15px]">About Us</span>
            </Link>
            {[
              { name: 'Services', links: ['Life Insurance', 'Health Insurance', 'General Insurance', 'High-Interest Savings', 'Investment Solutions'] },
              { name: 'Schemes', links: ['Short Term Plans', 'Long Term Plans'] }
            ].map((item) => (
              <div key={item.name} className="w-full flex flex-col">
                <div 
                  className="w-full flex items-center justify-between py-5 cursor-pointer border-t border-gray-100"
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                >
                  <span className={`font-black text-[15px] ${activeDropdown === item.name ? 'text-sky-500' : 'text-[#001D3D]'}`}>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180 text-sky-500' : 'text-[#001D3D]'}`} strokeWidth={2.5} />
                </div>
                
                {activeDropdown === item.name && (
                  <div className="flex flex-col gap-4 pb-5 pl-4">
                    {item.links.map(link => (
                      <Link key={link} href={link === 'Life Insurance' ? '/services/life-insurance' : link === 'Health Insurance' ? '/health-insurance-tamil-nadu' : link === 'General Insurance' ? '/general-insurance-tamil-nadu' : link === 'High-Interest Savings' ? '/high-interest-savings-plans-tamil-nadu' : link === 'Investment Solutions' ? '/investment-solutions-tamil-nadu' : '#'} className="text-[#475569] font-bold text-[14px] hover:text-sky-500 transition-colors">
                        {link}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="#" className="w-full py-5 cursor-pointer border-t border-gray-100 mb-2">
              <span className="text-[#001D3D] font-black text-[15px]">Get In Touch</span>
            </Link>
          </div>
        )}
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full pt-8 pb-16 lg:pt-10 lg:pb-24 overflow-hidden bg-[#001D3D] text-white">
        {/* Background Image - Clear on the right side */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-right lg:bg-center"></div>
        
        {/* Mobile Gradient (Dark everywhere for text readability) */}
        <div className="absolute inset-0 bg-[#001D3D]/80 lg:hidden"></div>
        
        {/* Desktop Gradient (Solid dark left, fading to transparent right) */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#001D3D] from-40% via-[#001D3D]/80 via-60% to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#001D3D]/50 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-6 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 backdrop-blur-sm">
              <Shield className="w-4 h-4" /> Compare General Insurance Plans in Tamil Nadu
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100">
              Protect What Matters Most — <span className="text-sky-400">Compare General Insurance Plans in Tamil Nadu</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed text-justify md:text-left reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
              Accidents, fire, theft, and travel mishaps arrive without warning. SGNL helps you compare general insurance plans in Tamil Nadu from trusted insurers — helping you manage unexpected repair and loss-related expenses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-300">
              <button className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-lg font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white hover:bg-sky-50 text-[#001D3D] border border-transparent hover:border-sky-200 px-6 py-3 rounded-lg font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/5">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-300 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-400">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400" /> 10+ IRDAI-Regulated Insurers</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400" /> 100% Free Consultation</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400" /> Dedicated Claims & Support Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DO YOU NEED LIFE INSURANCE */}
      <section className="pt-20 lg:pt-28 pb-10 lg:pb-12 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left: Heading & Paragraph */}
            <div className="flex flex-col justify-center reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 py-4 h-full">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black mb-6 text-[#001D3D] leading-[1.15]">
                Why Do You Need General Insurance?
              </h2>
              <p className="text-slate-900 font-medium text-[17px] leading-relaxed text-justify md:text-left">
                Road accidents, monsoon flooding, fire, theft, and flight disruptions are everyday risks behind a vehicle, a home, or a small business in Tamil Nadu. General insurance can help cover eligible repair, replacement, or rebuilding costs, subject to the policy's terms, limits and exclusions. It also covers the liability you may owe to others, so one bad incident doesn't wipe out what you've built.
              </p>
            </div>
            
            {/* Right: Tick points */}
            <div className="flex flex-col justify-center reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100 h-full w-full">
              <div className="grid sm:grid-cols-2 gap-4">
                {whyNeedInsurance.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white px-5 py-4 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-sky-300 hover:bg-sky-50/50 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] transition-all duration-300 cursor-pointer h-full">
                    <Check className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" strokeWidth={3} />
                    <p className="font-bold text-[#001D3D] text-[13.5px] leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFE INSURANCE PLANS WE OFFER */}
      <section className="pt-10 lg:pt-12 pb-20 lg:pb-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-6 lg:mb-8 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-black text-[#001D3D] mb-4">General Insurance Plans We Offer in Tamil Nadu</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {plansOffered.map((plan, i) => (
              <div key={i} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] max-w-[500px] relative group h-[260px] rounded-[32px] overflow-hidden reveal-on-scroll opacity-0 translate-y-12 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer" style={{ transitionDelay: `${i * 100}ms` }}>
                {/* Background Image */}
                <img src={plan.image} alt={plan.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                {/* Default state overlay (gradient to make bottom text readable) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D]/90 via-[#001D3D]/20 to-transparent opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-500"></div>

                {/* Hover state dark overlay */}
                <div className="absolute inset-0 bg-[#001D3D]/80 backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Number indicator (like in reference image "01", "02") */}
                <div className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 font-bold text-xs backdrop-blur-md z-10">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end z-20">
                  
                  {/* Default State: Icon + Heading at bottom */}
                  <div className="transform translate-y-0 md:group-hover:-translate-y-8 opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-all duration-500 absolute bottom-5 left-5 right-5">
                    <div className="flex items-center justify-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${plan.color} flex items-center justify-center shrink-0 shadow-lg`}>
                        <plan.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg md:text-xl font-black text-white leading-tight text-center">{plan.title}</h3>
                    </div>
                  </div>

                  {/* Hover State: Icon + Heading + Description sliding up */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 p-5 md:p-6 flex flex-col justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${plan.color} flex items-center justify-center shrink-0 shadow-lg`}>
                        <plan.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg md:text-xl font-black text-sky-500 leading-tight text-center">{plan.title}</h3>
                    </div>
                    <div className="w-8 h-1 bg-sky-500 rounded-full mb-4 mx-auto"></div>
                    <p className="text-slate-200 text-[13px] md:text-[14px] leading-relaxed line-clamp-4 text-justify">
                      {plan.desc}
                    </p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SGNL */}
      <section className="pt-10 pb-20 lg:pt-16 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-black text-[#001D3D] mb-6">Why Choose <span className="text-sky-500">SGNL</span> for General Insurance?</h2>
            <p className="text-slate-600 text-lg">Compare More. Choose With Confidence. Stay Supported.</p>
          </div>
            
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
            {[
              { icon: Layers, title: "Compare Multiple Insurers", desc: "Explore general insurance options from multiple leading insurers instead of being limited to one provider." },
              { icon: Compass, title: "Guidance Based on Your Needs", desc: "Get help comparing options based on your vehicle, property, business, travel or personal protection requirements." },
              { icon: FileText, title: "Simple & Transparent Process", desc: "Understand key policy features, coverage, exclusions and applicable terms before you choose." },
              { icon: Headset, title: "Support Beyond Purchase", desc: "Get assistance with policy-related queries, renewals and claim-process guidance when required." },
              { icon: ShieldCheck, title: "Multiple Protection Options", desc: "Explore motor, home, commercial property, travel and personal accident insurance through one platform." }
            ].map((item, i) => (
              <div key={i} className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-sky-500/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover:bg-sky-500 group-hover:border-sky-500 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-sky-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-[18px] md:text-[19px] font-black text-[#001D3D] leading-tight">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* TRUSTED PARTNERS */}
      <section className="py-8 lg:py-10 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700">
            <h2 className="text-3xl font-black text-[#001D3D] mb-6">Our Trusted General Insurance Partners</h2>
            <p className="text-slate-600 text-lg mb-10">We're not tied to just one company — and that's a good thing for you. SGNL works with leading general insurers regulated by IRDAI , so we can help you explore and compare suitable plans from multiple insurers.</p>
            
            <div className="relative w-full flex overflow-hidden py-4 group">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

              <div className="flex gap-4 lg:gap-8 items-center w-max animate-marquee group-hover:[animation-play-state:paused] opacity-80 hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '30s' }}>
                {[...['ICICI Lombard General Insurance', 'Bajaj Allianz General Insurance', 'Tata AIG General Insurance', 'HDFC ERGO General Insurance', 'SBI General Insurance', 'Royal Sundaram General Insurance', 'Digit Insurance', 'New India Assurance', 'United India Insurance', 'Chola MS General Insurance'], ...['ICICI Lombard General Insurance', 'Bajaj Allianz General Insurance', 'Tata AIG General Insurance', 'HDFC ERGO General Insurance', 'SBI General Insurance', 'Royal Sundaram General Insurance', 'Digit Insurance', 'New India Assurance', 'United India Insurance', 'Chola MS General Insurance']].map((partner, i) => (
                  <div key={i} className="shrink-0 px-6 py-3 bg-white rounded-xl border border-slate-200 font-black text-slate-700 text-xl tracking-tight hover:border-sky-500 hover:text-sky-500 hover:shadow-lg transition-all cursor-default">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-10 lg:py-12 bg-[#001D3D] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust and How it Works */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 bg-white/5 rounded-3xl p-2 md:p-8 lg:p-10 border border-white/10 flex flex-col">
              <h2 className="text-3xl font-black text-white mb-6">Key Benefits of <span className="text-sky-400">General Insurance</span></h2>
              <p className="text-slate-300 text-[15px] mb-8 leading-relaxed">*Starting premiums vary by vehicle type, property value, city, and the insurer you choose — confirm current pricing with the client before publishing an exact figure.</p>
              <div className="relative group/scroll flex-1 min-h-[300px]">
                <div 
                  className="grid gap-6 absolute inset-0 overflow-y-auto pr-10 custom-scrollbar"
                  ref={scrollContainerRef}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {(() => {
                    const items = [
                      { title: "Protection Against Unexpected Losses", desc: "Financial protection for covered vehicle, property, travel and personal accident risks." },
                      { title: "Third-Party Liability Protection", desc: "Motor insurance can provide cover for eligible third-party liabilities, subject to policy terms." },
                      { title: "Cashless Repairs at Network Garages", desc: "Eligible motor claims may be settled through network garages, subject to insurer terms and applicable deductibles." },
                      { title: "Optional Add-On Covers", desc: "Choose additional protection such as zero depreciation, engine protection and roadside assistance, where available." },
                      { title: "Protection for Property & Business Assets", desc: "Cover options may help protect eligible buildings, contents, stock and other insured assets against covered risks." },
                      { title: "Travel & Personal Protection", desc: "Travel and personal accident policies can provide benefits for covered medical emergencies, trip-related losses and accidental events." }
                    ];
                    return [...items, ...items];
                  })().map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white">{item.title}</h4>
                        <p className="text-slate-300 mt-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200 bg-white/5 rounded-3xl p-2 md:p-8 lg:p-10 border border-white/10">
              <h2 className="text-3xl font-black text-white mb-8 text-center md:text-left">How It Works</h2>
              <div className="ml-4 flex flex-col gap-8">
                {[
                  { step: 1, title: "Tell us about yourself", desc: "Your vehicle, property, or the coverage you're looking for." },
                  { step: 2, title: "We compare plans for you", desc: "Across 10+ insurers, so you don't have to do the legwork." },
                  { step: 3, title: "You choose, we handle the rest", desc: "Paperwork, documentation, all sorted for you." },
                  { step: 4, title: "Stay covered, stay supported", desc: "We're here for claims, renewals, and everything in between." }
                ].map((item, i, arr) => (
                  <div key={i} className="relative pl-8">
                    {i !== arr.length - 1 && (
                      <div className="absolute left-0 top-8 bottom-[-2rem] w-[2px] bg-sky-500/30 -translate-x-1/2"></div>
                    )}
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm ring-4 ring-[#001D3D] -translate-x-1/2">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-lg text-white">{item.title}</h4>
                    <p className="text-slate-300 mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-black text-[#001D3D] mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Got questions? We've got answers to help you make the right choice.</p>
          </div>

          <div className="space-y-4 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'bg-white shadow-lg border-sky-200 ring-1 ring-sky-100' : 'bg-white border-slate-200 hover:border-sky-300'}`}
              >
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between px-6 py-2 text-left cursor-pointer"
                >
                  <span className={`font-bold text-[14px] leading-[1.4] md:text-lg md:leading-normal line-clamp-2 md:line-clamp-none transition-colors duration-300 pr-4 md:pr-8 ${openFaq === i ? 'text-sky-600' : 'text-[#001D3D]'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-sky-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-2 pt-0 text-slate-600 text-[13.5px] md:text-base leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA BANNER ══════════ */}
      <section className="py-16 bg-sky-500 relative">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 0%, transparent 80%)' }} />
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          
          {/* Desktop Character Illustration */}
          <div className="hidden lg:block absolute -top-[186px] right-24 w-44 z-20 pointer-events-none drop-shadow-2xl">
            <img src="/sgnl/person 2.png" alt="Character" className="w-full h-auto object-contain" />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-none tracking-tight mb-2">
                Stay Protected, Stay Prepared
              </h2>
              <p className="text-lg text-white/90 leading-snug font-medium">
                Accidents and emergencies don't wait for the right time, and neither should your protection. Whether it's your vehicle, your home, your business, or your next trip, we're here to help you find the right general insurance plan in Tamil Nadu — without the confusion.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center shrink-0 w-full lg:w-auto mt-24 sm:mt-0">
              <div className="relative w-full sm:w-auto">
                {/* Mobile Character Illustration */}
                <div className="lg:hidden absolute bottom-[calc(100%-10px)] right-4 w-36 z-20 pointer-events-none drop-shadow-2xl">
                  <img src="/sgnl/person 2.png" alt="Character" className="w-full h-auto object-contain" />
                </div>
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full sm:w-auto bg-[#001D3D] text-white px-8 py-5 rounded-2xl font-black tracking-widest uppercase text-sm hover:bg-slate-900 transition-all shadow-xl flex items-center justify-center gap-2 hover:-translate-y-1 relative z-30"
                >
                  Discover More
                </button>
              </div>
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="w-full sm:w-auto bg-white text-[#001D3D] px-8 py-5 rounded-2xl font-black tracking-widest uppercase text-sm hover:bg-slate-50 transition-all flex items-center justify-center shadow-lg hover:-translate-y-1 relative z-30"
              >
                Start Your Financial Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="relative pt-28 pb-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/sgnl/footer 1.png')" }}>
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-[#001D3D]/80" />
        <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
          {/* Top grid */}
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-10 lg:gap-8 pb-12 border-b border-white/10">
            {/* Brand */}
            <div className="w-full lg:w-auto lg:max-w-[280px] space-y-5">
              <Link href="/" className="flex items-center gap-3">
                <img src="/sgnl/logo.png" alt="SGNL Logo" className="h-20 w-auto object-contain bg-white rounded-2xl p-2" />
              </Link>
              <p className="text-white text-base leading-relaxed max-w-[280px]">
                A trusted Nidhi Company dedicated to empowering communities through ethical savings, low-interest loans, and transparent financial services.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' }
                ].map((social, i) => (
                  <Link key={i} href={social.href} className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 hover:bg-sky-500 hover:border-sky-500 flex items-center justify-center text-white hover:text-white transition-all">
                    <social.icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { head: 'Our Schemes', links: ['Prime Wealth Gain', 'Vikas Money Savings', 'Ecocial Savings Plan', 'Elite Wealth Gain'] },
              { head: 'Services', links: ['High-Interest Savings Plans', 'Investment Solutions', 'Life Insurance', 'Health Insurance', 'General Insurance'] },
              { head: 'Company', links: ['Home', 'About Us', 'Services', 'Schemes', 'Get In Touch'] },
            ].map(col => (
              <div key={col.head} className="w-[45%] sm:w-auto shrink-0">
                <p className="text-white font-black text-sm uppercase tracking-widest mb-6">{col.head}</p>
                <ul className="space-y-4">
                  {col.links.map(l => (
                    <li key={l}><Link href={l === 'Life Insurance' ? '/services/life-insurance' : l === 'Health Insurance' ? '/health-insurance-tamil-nadu' : l === 'General Insurance' ? '/general-insurance-tamil-nadu' : l === 'High-Interest Savings Plans' ? '/high-interest-savings-plans-tamil-nadu' : l === 'About Us' ? '/about-us' : '#'} className="text-white text-[15px] hover:text-sky-500 font-medium transition-colors">{l}</Link></li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Head Quarters */}
            <div className="w-full sm:w-auto lg:max-w-[280px] space-y-8">
              <div>
                <p className="text-white font-black text-sm uppercase tracking-widest mb-6">Head Quarters</p>
                <div className="text-white/80 text-[15px] leading-relaxed space-y-4">
                  <p>No 37, 1st floor, Yesotha plaza,<br/>inner ring road, Sivam Nagar,<br/>Hosur, TAMIL NADU - 635126</p>
                  <div className="space-y-1">
                    <p className="hover:text-sky-500 transition-colors cursor-pointer">info@sgsgnl.com</p>
                    <p className="hover:text-sky-500 transition-colors cursor-pointer">+91-85249-17170</p>
                    <p>Mon - Sat: 9am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex justify-center items-center gap-4 text-center">
            <p className="text-white text-[13px] md:text-sm font-bold uppercase tracking-wider">
              © 2026 Sarathi Germinate Nidhi Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
