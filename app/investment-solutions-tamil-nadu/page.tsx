'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, HeartPulse, GraduationCap, TrendingUp, 
  PiggyBank, Wallet, CheckCircle2, ChevronDown, 
  Phone, MessageCircle, ArrowRight, Shield, HeartHandshake,
  Check, Info, X, Clock, Star, Facebook, Twitter, Linkedin, Instagram, PhoneCall, Menu,
  Layers, Compass, FileText, Sparkles, Activity, Headset, RefreshCw, Briefcase, Landmark, LineChart, Repeat, PieChart, Target
} from 'lucide-react';
import ContactPopup from '../../components/ContactPopup';

export default function InvestmentSolutionsPage() {
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

    const whyChooseSgnl = [
    { icon: Layers, title: "Compare Multiple Investment Options", desc: "Explore mutual funds, SIPs, bonds, and other eligible investment solutions across participating partners instead of being limited to a single provider." },
    { icon: Compass, title: "Guidance Based on Your Goals", desc: "Understand available investment options based on your financial goals, risk comfort, investment horizon, and investment amount." },
    { icon: FileText, title: "Clear Comparison of Risk & Costs", desc: "Get a clearer view of applicable fees, risks, lock-in periods, liquidity, and other important product terms before investing." },
    { icon: Sparkles, title: "Simple & Transparent Process", desc: "Receive support with documentation, KYC, application procedures, and account setup as applicable." },
    { icon: Headset, title: "Dedicated Investment Support", desc: "Get assistance with investment-related queries, reviews, and other applicable service requirements throughout your investment journey." }
  ];

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
      text: "Wealth Creation Potential — Explore investment options designed for long-term wealth creation, with returns depending on the product and market conditions.",
      icon: LineChart,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      text: "Disciplined Investing — SIPs help you invest a fixed amount regularly and build a consistent investing habit.",
      icon: Repeat,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      text: "Diversification — Spread investments across different asset classes and sectors instead of depending on a single investment.",
      icon: PieChart,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      text: "Tax-Saving Options — Explore options such as ELSS that may offer tax benefits, subject to applicable rules and eligibility.",
      icon: Landmark,
      iconColor: "text-cyan-500",
      bgColor: "bg-cyan-50"
    },
    {
      text: "Goal-Based Investing — Choose investment options based on goals such as wealth creation, children's education, retirement, or other financial priorities.",
      icon: Target,
      iconColor: "text-rose-500",
      bgColor: "bg-rose-50"
    },
    {
      text: "Flexible Investment Horizons — Explore investment options suitable for short-term, medium-term, and long-term financial objectives.",
      icon: Layers,
      iconColor: "text-violet-500",
      bgColor: "bg-violet-50"
    }
  ];

  const plansOffered = [
    {
      title: "Mutual Funds — SIP & Lumpsum",
      icon: TrendingUp,
      color: "bg-emerald-500 text-white",
      image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=800",
      desc: "Explore equity, debt, and hybrid mutual funds based on your investment goals and risk comfort. You can invest through a lump sum or regular SIP contributions."
    },
    {
      title: "Systematic Investment Plan — SIP",
      icon: RefreshCw,
      color: "bg-sky-500 text-white",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
      desc: "Invest a fixed amount regularly in mutual funds and build a disciplined long-term investing habit. Both first-time and experienced investors can consider SIPs based on their financial goals."
    },
    {
      title: "Portfolio Management Services — PMS",
      icon: Briefcase,
      color: "bg-indigo-500 text-white",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      desc: "PMS provides professionally managed investment portfolios designed around an investor's objectives and risk profile. It is generally suited to investors seeking personalised portfolio management and is subject to applicable SEBI requirements. Minimum investment: ₹50 Lakhs, as per applicable SEBI norms."
    },
    {
      title: "ELSS Tax-Saving Investment",
      icon: ShieldCheck,
      color: "bg-rose-500 text-white",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
      desc: "Equity Linked Savings Schemes (ELSS) are market-linked equity mutual funds that may qualify for tax deductions under Section 80C, subject to applicable tax rules and eligibility. ELSS investments have a three-year lock-in period."
    },
    {
      title: "Bonds & Fixed-Income Investments",
      icon: Landmark,
      color: "bg-amber-500 text-white",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
      desc: "Government and corporate bonds can provide fixed-income exposure as part of a diversified portfolio. Returns, risks, liquidity, and other terms vary by instrument and issuer."
    }
  ];

  const whyChooseSgnl = [
    { icon: Layers, title: "Compare Multiple Investment Options", desc: "Explore mutual funds, SIPs, bonds, and other eligible investment solutions across participating partners instead of being limited to a single provider." },
    { icon: Compass, title: "Guidance Based on Your Goals", desc: "Understand available investment options based on your financial goals, risk comfort, investment horizon, and investment amount." },
    { icon: FileText, title: "Clear Comparison of Risk & Costs", desc: "Get a clearer view of applicable fees, risks, lock-in periods, liquidity, and other important product terms before investing." },
    { icon: Sparkles, title: "Simple & Transparent Process", desc: "Receive support with documentation, KYC, application procedures, and account setup as applicable." },
    { icon: Headset, title: "Dedicated Investment Support", desc: "Get assistance with investment-related queries, reviews, and other applicable service requirements throughout your investment journey." }
  ];

  const faqs = [
    { q: "What is an investment solution and why do I need one?", a: "An investment solution is a financial product or strategy designed to help you work towards specific financial goals. Mutual funds, SIPs, bonds, ELSS, and NPS are examples of investment options. The suitable choice depends on your goals, risk comfort, investment horizon, and financial situation." },
    { q: "Is SIP better than a lump sum investment for building wealth?", a: "Neither option is universally better. An SIP allows you to invest a fixed amount regularly, while a lump sum involves investing an available amount at once. The suitable approach depends on your financial position, investment goals, risk comfort, investment horizon, and market conditions." },
    { q: "What is the difference between mutual funds and PMS?", a: "A mutual fund pools money from multiple investors and invests it according to the fund's stated objective. PMS provides portfolio management for individual clients and can offer more personalised portfolio construction. PMS is subject to applicable eligibility and minimum investment requirements." },
    { q: "Which mutual funds offer the best returns through SGNL?", a: "There is no single mutual fund that is guaranteed to provide the best returns. Performance depends on factors such as fund category, market conditions, investment horizon, and risk level. SGNL helps you compare available options and understand their risks and features before investing." },
    { q: "Can I get tax benefits on my investments?", a: "Certain investment products may offer tax benefits, subject to applicable tax rules and eligibility. ELSS may qualify for deductions under Section 80C, while NPS contributions are covered under applicable provisions of Section 80CCD." },
    { q: "What happens if I need to withdraw my investment early?", a: "Withdrawal rules depend on the investment product. Many mutual funds allow redemption, although applicable exit loads, taxes, or other conditions may apply. ELSS has a three-year lock-in period, while bonds and other products may have their own maturity, liquidity, or exit conditions. SGNL helps you understand these terms before you invest." },
    { q: "Is investment risk-free?", a: "No investment is completely risk-free. Market-linked products such as equity mutual funds and ELSS can fluctuate in value. The level and type of risk varies across investment products, so understanding your risk comfort and investment horizon is important before investing." }
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
              <Shield className="w-4 h-4" /> Compare Investment Options Plans in Tamil Nadu
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100">
              Protect Your Family's Health — <span className="text-sky-400">Compare Insurance Plans</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed text-justify md:text-left reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
              A medical emergency can bring unexpected expenses at any time. SGNL helps you compare health insurance options from participating insurers such as Star Health, Niva Bupa, HDFC ERGO, Care Health, and Manipal Cigna, so you can explore coverage based on your family's healthcare needs and budget.
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
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400" /> 15+ IRDAI-Approved Insurers</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400" /> Free Investment Consultation</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400" /> Dedicated Investment Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DO YOU NEED INVESTMENT SOLUTION */}
      <section className="pt-20 lg:pt-28 pb-10 lg:pb-12 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 mb-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#001D3D] leading-[1.15]">
              Why Do You Need an Investment Solution?
            </h2>
          </div>
          {/* Description */}
          <div className="reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100 mb-12 text-center">
            <p className="text-slate-900 font-medium text-[17px] leading-relaxed max-w-4xl mx-auto text-justify md:text-center">
              A regular savings account can help manage everyday financial needs, but long-term goals may require a broader investment approach. Investment solutions allow you to explore different asset classes based on your financial objectives, risk comfort, and investment timeline.
            </p>
          </div>
          {/* Tick Points — larger cards, centered, equal height */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
            {whyNeedInsurance.map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center gap-4 bg-white px-7 py-8 rounded-3xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:border-sky-300 hover:bg-sky-50/50 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] transition-all duration-300 cursor-pointer h-full min-h-[160px]">
                <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center shrink-0`}>
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} strokeWidth={2.5} />
                </div>
                <p className="font-bold text-[#001D3D] text-[15px] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT SOLUTIONS WE OFFER */}
      <section className="pt-10 lg:pt-12 pb-20 lg:pb-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-6 lg:mb-8 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-black text-[#001D3D] mb-4">Investment Solutions We Offer in Tamil Nadu</h2>
            <p className="text-slate-600 text-lg truncate whitespace-normal lg:whitespace-nowrap">Explore options based on your savings goal, preferred tenure, liquidity needs, and eligibility.</p>
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
            <h2 className="text-3xl md:text-4xl font-black text-[#001D3D] mb-6">Why Choose <span className="text-sky-500">SGNL</span> for Investment Solutions?</h2>
            <p className="text-slate-600 text-lg">Choosing health insurance can be complicated when every insurer offers different coverage, premiums, waiting periods, and policy conditions. SGNL helps simplify the comparison process.</p>
          </div>
            
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
            {whyChooseSgnl.map((item, i) => (
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
            <h2 className="text-3xl font-black text-[#001D3D] mb-6">Our Trusted Investment Partners</h2>
            <p className="text-slate-600 text-lg mb-10">We work with participating investment partners and SEBI-registered mutual fund houses, allowing customers to explore and compare different investment options.</p>

            <h3 className="text-xl font-bold text-sky-500 mb-4">SEBI-Registered Fund Houses</h3>
            <div className="relative w-full flex overflow-hidden py-4 group">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
              <div className="flex gap-4 lg:gap-8 items-center w-max animate-marquee group-hover:[animation-play-state:paused] opacity-80 hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '35s' }}>
                {[...['HDFC Mutual Fund', 'ICICI Prudential Mutual Fund', 'SBI Mutual Fund', 'Axis Mutual Fund', 'Kotak Mutual Fund', 'Nippon India Mutual Fund', 'Bajaj Finserv Mutual Fund', 'Aditya Birla Sun Life Mutual Fund', 'Franklin Templeton'], ...['HDFC Mutual Fund', 'ICICI Prudential Mutual Fund', 'SBI Mutual Fund', 'Axis Mutual Fund', 'Kotak Mutual Fund', 'Nippon India Mutual Fund', 'Bajaj Finserv Mutual Fund', 'Aditya Birla Sun Life Mutual Fund', 'Franklin Templeton']].map((partner, i) => (
                  <div key={i} className="shrink-0 px-6 py-3 bg-white rounded-xl border border-slate-200 font-black text-slate-700 text-xl tracking-tight hover:border-sky-500 hover:text-sky-500 hover:shadow-lg transition-all cursor-default">
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold text-sky-500 mb-4 mt-8">PFRDA-Regulated Pension Scheme</h3>
            <div className="flex justify-center">
              <div className="shrink-0 px-6 py-3 bg-white rounded-xl border border-slate-200 font-black text-slate-700 text-xl tracking-tight hover:border-sky-500 hover:text-sky-500 hover:shadow-lg transition-all cursor-default">
                National Pension System (NPS)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-10 lg:py-12 bg-[#001D3D] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl mx-auto">
            <div className="reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 bg-white/5 rounded-3xl p-2 md:p-8 lg:p-10 border border-white/10">
              <h2 className="text-3xl font-black text-white mb-8 text-center md:text-left">How It Works</h2>
              <div className="ml-4 flex flex-col gap-8">
                {[
                  { step: 1, title: "Share Your Investment Goal", desc: "Tell us about your investment objective, approximate investment amount, timeline, and priorities." },
                  { step: 2, title: "Explore Suitable Options", desc: "We help you explore relevant mutual funds, SIPs, bonds, and other investment options based on your requirements." },
                  { step: 3, title: "Understand Before You Invest", desc: "Review important details such as risk, fees, lock-in periods, liquidity, and applicable terms before making your decision." },
                  { step: 4, title: "Complete the Process", desc: "Once you select an option, we assist with documentation, KYC, and account setup as applicable." },
                  { step: 5, title: "Stay Supported", desc: "We remain available for investment-related queries, reviews, and other applicable support requirements." }
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
                Medical emergencies can happen unexpectedly. Having suitable health insurance can help you prepare for eligible healthcare expenses and protect your family from unnecessary financial pressure. Whether you're looking to protect yourself, your children, your parents, or your entire family, SGNL can help you explore available health insurance options.
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
