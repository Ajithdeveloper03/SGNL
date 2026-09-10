'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, HeartPulse, GraduationCap, TrendingUp, 
  PiggyBank, Wallet, CheckCircle2, ChevronDown, 
  Phone, MessageCircle, ArrowRight, Shield, HeartHandshake,
  Check, Info, X, Clock, Star, Facebook, Twitter, Linkedin, Instagram, PhoneCall, Menu,
  Layers, Compass, FileText, Sparkles, Activity, Headset, Banknote, LineChart, Landmark, Coins, Lock, RotateCw
} from 'lucide-react';
import ContactPopup from '../../components/ContactPopup';

export default function HighInterestSavingsPage() {
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
    {
      text: "Potentially better interest earnings compared with standard savings options, depending on the product",
      icon: TrendingUp,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      text: "Fixed deposit options with predetermined interest rates for the agreed tenure",
      icon: Lock,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      text: "Recurring deposit options that help build a disciplined monthly savings habit",
      icon: RotateCw,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      text: "Senior citizen deposit options with preferential rates where offered",
      icon: HeartHandshake,
      iconColor: "text-rose-500",
      bgColor: "bg-rose-50"
    },
    {
      text: "Flexible tenures ranging from short-term to long-term options",
      icon: Clock,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      text: "Different payout choices depending on the selected deposit product and institution",
      icon: Wallet,
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-50"
    }
  ];

  const plansOffered = [
    {
      title: "Fixed Deposit (FD)",
      icon: PiggyBank,
      color: "bg-emerald-500 text-white",
      image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=800",
      desc: "Invest a lump sum for a selected tenure and earn interest at the rate applicable when the deposit is booked, subject to the institution's terms. Depending on the product, interest may be paid periodically or at maturity."
    },
    {
      title: "Recurring Deposit (RD)",
      icon: Wallet,
      color: "bg-sky-500 text-white",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
      desc: "Save a fixed amount regularly over a chosen tenure and earn interest at the applicable RD rate. An RD can be useful for salaried individuals, professionals, and small business owners who want to build savings gradually without investing a large lump sum upfront."
    },
    {
      title: "High-Interest Savings Account",
      icon: Landmark,
      color: "bg-rose-500 text-white",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
      desc: "Some banks offer savings accounts with competitive interest rates while keeping your funds accessible. Interest rates, balance requirements, withdrawal conditions, and other features vary by account and institution."
    },
    {
      title: "Senior Citizen Savings Options",
      icon: HeartHandshake,
      color: "bg-indigo-500 text-white",
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800",
      desc: "Eligible senior citizens may have access to deposit products offering preferential interest rates or other benefits. Rates, eligibility, tenure, and payout options vary by institution and product."
    },
    {
      title: "Tax-Saving Fixed Deposit",
      icon: ShieldCheck,
      color: "bg-orange-500 text-white",
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800",
      desc: "A tax-saving FD generally comes with a 5-year lock-in period and may qualify for deduction under Section 80C, subject to applicable tax rules and eligibility. Interest earned is subject to applicable taxation."
    }
  ];


  const faqs = [
    { q: "What is a high interest savings plan and why do I need it?", a: "A high-interest savings plan generally refers to savings or deposit options that may offer competitive interest rates compared with standard savings options. These can include eligible fixed deposits, recurring deposits, and other savings products, depending on the institution." },
    { q: "Is the interest rate on a fixed deposit fixed?", a: "For a fixed-rate FD, the applicable interest rate is generally fixed according to the deposit terms at the time of booking and remains applicable for the agreed tenure, subject to the product's terms and conditions." },
    { q: "What is the difference between FD and RD?", a: "A Fixed Deposit (FD) involves investing a lump sum for a selected tenure, while a Recurring Deposit (RD) involves making regular deposits, usually monthly, over a selected period. The applicable interest rates and terms vary by institution." },
    { q: "Which banks offer competitive FD interest rates through SGNL?", a: "FD interest rates vary based on the institution, tenure, deposit amount, customer category, and applicable terms. SGNL helps you explore available options from participating banks and NBFCs so you can compare applicable rates and features before choosing." },
    { q: "Can senior citizens get preferential interest rates on fixed deposits?", a: "Many banks and financial institutions offer preferential interest rates to eligible senior citizens on selected deposit products. The additional rate, eligibility, and terms vary by institution and tenure." },
    { q: "What happens if I withdraw my FD before maturity?", a: "Many fixed deposits may allow premature withdrawal, but the applicable interest rate or penalty can vary depending on the institution and product. SGNL can help you understand the applicable premature withdrawal terms before you choose." },
    { q: "Is my fixed deposit investment protected?", a: "Bank deposits with DICGC-insured banks are covered for up to ₹5 lakh per depositor per bank, including principal and interest, subject to applicable DICGC rules. DICGC deposit insurance does not cover deposits accepted by NBFCs. For NBFC fixed deposits, investors should review the institution's credit ratings, financial information, and applicable terms before investing." }
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

              {/* About Us */}
              <div className="relative h-full flex items-center" onMouseEnter={() => setActiveDropdown('About')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`flex items-center gap-1.5 transition-colors h-full ${activeDropdown === 'About' ? 'text-sky-500' : 'hover:text-sky-500'}`}>
                  About Us <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'About' ? 'rotate-180 text-sky-500' : 'text-gray-400'}`} />
                </button>
                {activeDropdown === 'About' && (
                  <div className="absolute top-[75px] left-1/2 -translate-x-1/2 bg-white rounded-[24px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] py-6 w-[200px] flex flex-col gap-1 z-50">
                    {['Mission', 'Vision', 'Why Us'].map(item => (
                      <Link key={item} href="#" className="px-8 py-2.5 text-[14px] font-bold text-[#475569] hover:text-sky-500 transition-colors">{item}</Link>
                    ))}
                  </div>
                )}
              </div>

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
            {[
              { name: 'About Us', links: ['Mission', 'Vision', 'Why Us'] },
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
              <Shield className="w-4 h-4" /> Compare High Interest Savings Plans in Tamil Nadu
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-black leading-[1.15] mb-6 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100">
              Grow Your Savings With Confidence — <span className="text-sky-400">Compare High Interest Savings Plans in Tamil Nadu</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
              Looking for better ways to grow your savings? SGNL helps you compare savings and deposit options in Tamil Nadu from participating banks and NBFCs, including HDFC Bank, ICICI Bank, State Bank of India, Bajaj Finance, and Axis Bank. Explore options based on your savings goal, preferred tenure, liquidity needs, and eligibility.
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
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400" /> 10+ RBI-Regulated Banks & NBFCs</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400" /> 100% Free Consultation</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400" /> Dedicated Support Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DO YOU NEED HIGH INTEREST SAVINGS */}
      <section className="pt-20 lg:pt-28 pb-10 lg:pb-12 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 mb-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#001D3D] leading-[1.15]">
              Why Do You Need a High Interest Savings Plan?
            </h2>
          </div>
          {/* Description */}
          <div className="reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100 mb-10 text-center">
            <p className="text-slate-900 font-medium text-[17px] leading-relaxed max-w-4xl mx-auto">
              Keeping your money in a standard savings account may not always align with your financial goals. Savings and deposit products such as fixed deposits and recurring deposits can offer different interest rates, tenures, and payout options to help you plan your money more effectively. The right option depends on how much you want to save, how long you can keep the money invested, and how easily you may need to access it.
            </p>
          </div>
          {/* Tick Points */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
            {whyNeedInsurance.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white px-5 py-4 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-sky-300 hover:bg-sky-50/50 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] transition-all duration-300 cursor-pointer h-full">
                <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center shrink-0`}>
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} strokeWidth={2.5} />
                </div>
                <p className="font-bold text-[#001D3D] text-[14px] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE INSURANCE PLANS WE OFFER */}
      <section className="pt-10 lg:pt-12 pb-20 lg:pb-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-6 lg:mb-8 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-black text-[#001D3D] mb-4">High Interest Savings Plans in Tamil Nadu</h2>
            <p className="text-slate-600 text-lg truncate whitespace-normal lg:whitespace-nowrap">Explore options based on your savings goal, preferred tenure, liquidity needs, and eligibility.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {plansOffered.map((plan, i) => (
              <div key={i} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] max-w-[500px] relative group h-[260px] rounded-[32px] overflow-hidden reveal-on-scroll opacity-0 translate-y-12 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer" style={{ transitionDelay: `${i * 100}ms` }}>
                {/* Background Image */}
                <img src={plan.image} alt={plan.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                {/* Default state overlay (gradient to make bottom text readable) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D]/90 via-[#001D3D]/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>

                {/* Hover state dark overlay */}
                <div className="absolute inset-0 bg-[#001D3D]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Number indicator (like in reference image "01", "02") */}
                <div className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 font-bold text-xs backdrop-blur-md z-10">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end z-20">
                  
                  {/* Default State: Icon + Heading at bottom */}
                  <div className="transform translate-y-0 group-hover:-translate-y-8 group-hover:opacity-0 transition-all duration-500 absolute bottom-5 left-5 right-5">
                    <div className="flex items-center justify-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${plan.color} flex items-center justify-center shrink-0 shadow-lg`}>
                        <plan.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg md:text-xl font-black text-white leading-tight text-center">{plan.title}</h3>
                    </div>
                  </div>

                  {/* Hover State: Icon + Heading + Description sliding up */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 p-5 md:p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
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
            <h2 className="text-3xl md:text-4xl font-black text-[#001D3D] mb-6">Why Choose <span className="text-sky-500">SGNL</span> for High Interest Savings?</h2>
            <p className="text-slate-600 text-lg">Compare More. Save With Confidence. Stay Supported.</p>
          </div>
            
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
            {[
              { icon: Layers, title: "Compare Multiple Institutions", desc: "Explore FD, RD and other eligible savings options from participating banks and NBFCs." },
              { icon: Compass, title: "Guidance Based on Your Goals", desc: "Compare options based on your savings amount, preferred tenure, liquidity needs and financial goals." },
              { icon: FileText, title: "Clear Comparison of Rates & Terms", desc: "Understand applicable interest rates, tenure, payout options, premature withdrawal conditions and other key terms before choosing." },
              { icon: Sparkles, title: "Simple Application Support", desc: "Get assistance with documentation, KYC and the application process as applicable." },
              { icon: Headset, title: "Support Beyond Investment", desc: "Get assistance with renewals, maturity-related queries and other applicable requirements." }
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
            <h2 className="text-3xl font-black text-[#001D3D] mb-6">Our Banking, NBFC & Savings Scheme Partners</h2>
            <p className="text-slate-600 text-lg mb-10">SGNL works with participating banks and NBFCs, helping customers explore and compare available savings and deposit options across multiple institutions.</p>
            
            <h3 className="text-xl font-bold text-sky-500 mb-4 mt-8">Banks & NBFCs Regulated by RBI</h3>
            <div className="relative w-full flex overflow-hidden py-4 group">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
              <div className="flex gap-4 lg:gap-8 items-center w-max animate-marquee group-hover:[animation-play-state:paused] opacity-80 hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '30s' }}>
                {[...['HDFC Bank', 'ICICI Bank', 'State Bank of India', 'Axis Bank', 'Bajaj Finance', 'Kotak Mahindra Bank', 'IDFC FIRST Bank', 'Shriram Finance', 'Mahindra Finance'], ...['HDFC Bank', 'ICICI Bank', 'State Bank of India', 'Axis Bank', 'Bajaj Finance', 'Kotak Mahindra Bank', 'IDFC FIRST Bank', 'Shriram Finance', 'Mahindra Finance']].map((partner, i) => (
                  <div key={i} className="shrink-0 px-6 py-3 bg-white rounded-xl border border-slate-200 font-black text-slate-700 text-xl tracking-tight hover:border-sky-500 hover:text-sky-500 hover:shadow-lg transition-all cursor-default">
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold text-sky-500 mb-4 mt-8">Government-Backed Savings Scheme</h3>
            <div className="flex justify-center">
              <div className="shrink-0 px-6 py-3 bg-white rounded-xl border border-slate-200 font-black text-slate-700 text-xl tracking-tight hover:border-sky-500 hover:text-sky-500 hover:shadow-lg transition-all cursor-default">
                Post Office Savings Schemes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-10 lg:py-12 bg-[#001D3D] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl mx-auto reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200 bg-white/5 rounded-3xl p-8 lg:p-10 border border-white/10">
            <h2 className="text-3xl font-black text-white mb-8">How It Works</h2>
            <div className="ml-4 flex flex-col gap-8">
                {[
                  {
                  step: 1, title: "Tell Us Your Savings Goal", desc: "Share the amount you want to save, preferred tenure, liquidity needs, and what you want to achieve." },
                  { step: 2, title: "We Compare Available Options", desc: "We help you explore suitable savings and deposit options from participating institutions." },
                  { step: 3, title: "Choose the Option That Fits", desc: "Review the applicable interest rate, tenure, payout structure, withdrawal conditions, and other terms before making your decision." },
                  { step: 4, title: "Complete the Process", desc: "Get assistance with documentation, KYC, and account or deposit application requirements as applicable." },
                  { step: 5, title: "Stay Supported", desc: "Get support for renewals, maturity-related queries, and other applicable requirements after you choose your product." }
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
                  <span className={`font-bold text-lg transition-colors duration-300 pr-8 ${openFaq === i ? 'text-sky-600' : 'text-[#001D3D]'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-sky-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-2 pt-0 text-slate-600 text-base leading-relaxed">
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
                Save Smart. Plan With Confidence.
              </h2>
              <p className="text-lg text-white/90 leading-snug font-medium">
                Your savings should work toward your goals, whether you're building an emergency fund, planning for a major expense, preparing for retirement, or simply looking for a disciplined way to save.

SGNL helps you explore and compare available savings and deposit options in Tamil Nadu, with clear information and support throughout the process.
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
                    <li key={l}><Link href={l === 'Life Insurance' ? '/services/life-insurance' : l === 'Health Insurance' ? '/health-insurance-tamil-nadu' : l === 'General Insurance' ? '/general-insurance-tamil-nadu' : l === 'High-Interest Savings Plans' ? '/high-interest-savings-plans-tamil-nadu' : '#'} className="text-white text-[15px] hover:text-sky-500 font-medium transition-colors">{l}</Link></li>
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
