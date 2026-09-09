'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, HeartPulse, GraduationCap, TrendingUp, 
  PiggyBank, Wallet, CheckCircle2, ChevronDown, 
  Phone, MessageCircle, ArrowRight, Shield, HeartHandshake,
  Check, Info, X, Clock, Star, Facebook, Twitter, Linkedin, Instagram, PhoneCall, Menu
} from 'lucide-react';
import ContactPopup from '../../../components/ContactPopup';

export default function LifeInsurancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whyNeedInsurance = [
    "Financial security for your family, no matter what happens",
    "Protection against life's uncertainties",
    "Long-term savings and wealth creation",
    "Tax benefits under applicable rules",
    "A dedicated fund for your child's education and future",
    "Retirement income planning through suitable insurance solutions"
  ];

  const plansOffered = [
    {
      title: "Family Life Protection",
      icon: ShieldCheck,
      color: "bg-emerald-500 text-white",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
      desc: "Your family shouldn't have to compromise on their lifestyle if you're not around. This plan gives them a guaranteed payout to cover daily expenses, loans, and other essentials — so they can stay financially secure even in your absence."
    },
    {
      title: "Child Education",
      icon: GraduationCap,
      color: "bg-sky-500 text-white",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
      desc: "Every parent dreams big for their child — good education, a strong career, a happy wedding. This plan helps you build that fund steadily over the years, so those dreams never have to wait on your bank balance."
    },
    {
      title: "Wealth Creation",
      icon: TrendingUp,
      color: "bg-indigo-500 text-white",
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800",
      desc: "Why let your money sit idle when it can grow? These plans combine the safety of life insurance with the benefits of disciplined, long-term investing — helping you build real wealth over time."
    },
    {
      title: "Retirement Planning",
      icon: PiggyBank,
      color: "bg-orange-500 text-white",
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800",
      desc: "After years of hard work, you deserve to relax without worrying about money. Our retirement solutions are designed to help you plan for a more financially secure and independent future."
    },
    {
      title: "Monthly Income",
      icon: Wallet,
      color: "bg-rose-500 text-white",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      desc: "Want an extra income stream without extra effort? These plans are designed to give you regular monthly payouts, adding a cushion of comfort to your everyday life."
    },
    {
      title: "Health & Illness Cover",
      icon: HeartPulse,
      color: "bg-teal-500 text-white",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
      desc: "Medical emergencies can wipe out savings in an instant. This acts as a financial shield, providing a lump-sum payout upon diagnosis of covered critical illnesses, letting you focus on recovery."
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
    { q: "What is the best age to buy life insurance?", a: "There is no single ideal age for everyone. Buying life insurance earlier can often mean lower premiums and longer coverage, depending on your age, health and policy terms." },
    { q: "How much life insurance coverage do I actually need?", a: "Coverage needs depend on your income, liabilities, lifestyle, dependants and long-term financial goals. A qualified advisor can help you estimate a suitable amount." },
    { q: "What's the difference between term insurance and a savings-linked plan?", a: "Term insurance is pure protection — low cost, high cover, but no payout if nothing happens to you. Savings-linked plans cost a bit more but combine life cover with an investment return, so you get something back at maturity too." },
    { q: "Can I save on tax with a life insurance policy?", a: "Life insurance premiums and benefits may receive tax treatment under applicable Indian income-tax provisions, subject to prevailing rules and eligibility conditions." },
    { q: "Which insurance companies can I choose from through SGNL?", a: "You get access to 15+ trusted insurers — including SBI Life, HDFC Life, ICICI Prudential, and Tata AIA — so you're not stuck with just one option." },
    { q: "Can life insurance help with my child's education planning?", a: "Definitely. Our child future planning policies are built specifically to grow a dedicated fund over the years, covering education, career, and even wedding expenses down the line." },
    { q: "Is SGNL a trustworthy platform for insurance?", a: "We maintain a transparent process with clear documentation, applicable charges and dedicated end-to-end support for documentation and claims." }
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
                    {['High-Interest Savings', 'Investment Solutions', 'Life Insurance', 'Health Insurance', 'General Insurance'].map(item => (
                      <Link key={item} href={item === 'Life Insurance' ? '/services/life-insurance' : '#'} className="px-8 py-2.5 text-[14px] font-bold text-[#475569] hover:text-sky-500 transition-colors">{item}</Link>
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
              { name: 'Services', links: ['High-Interest Savings', 'Investment Solutions', 'Life Insurance', 'Health Insurance', 'General Insurance'] },
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
                      <Link key={link} href={link === 'Life Insurance' ? '/services/life-insurance' : '#'} className="text-[#475569] font-bold text-[14px] hover:text-sky-500 transition-colors">
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
              <Shield className="w-4 h-4" /> Compare Life Insurance Plans from 15+ Leading Insurers in Tamil Nadu
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100">
              Protect Your Family’s Tomorrow, <span className="text-sky-400">Starting Today</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
              Life is unpredictable, but your family's future doesn't have to be. SGNL helps you compare and choose the right life insurance plan from leading life insurers in India — SBI Life, HDFC Life, ICICI Prudential, Tata AIA, and Max Life Insurance — so your loved ones are always taken care of.
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
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400" /> 100% Free Consultation</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400" /> Dedicated Claims & Support Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DO YOU NEED LIFE INSURANCE */}
      <section className="pt-20 lg:pt-28 pb-10 lg:pb-12 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left: Paragraph Content */}
            <div className="lg:col-span-4 flex flex-col justify-center reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 h-full py-4">
              <h4 className="text-sky-500 font-black text-sm tracking-widest uppercase mb-4">
                Why Choose Us
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black mb-6 text-[#001D3D] leading-[1.15]">
                Why Do You Need Life Insurance?
              </h2>
              <p className="text-slate-900 font-medium text-[17px] leading-relaxed">
                Life insurance is one of the simplest ways to make sure your family never has to worry about money if something happens to you. It covers everyday expenses, pending loans, and your children's education, while also helping you build long-term savings. Many plans also come with tax benefits, so you're not just protecting your family — you're growing your wealth at the same time.
              </p>
            </div>
            
            {/* Center: Image */}
            <div className="lg:col-span-4 relative reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100 min-h-[350px]">
              <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl absolute inset-0">
                <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" alt="Happy family outdoors" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-12 -left-4 sm:-left-8 z-20 bg-white p-3 px-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Coverage</p>
                  <p className="text-[15px] font-black text-[#001D3D] leading-none mt-1">₹1 Crore+</p>
                </div>
              </div>
            </div>
            
            {/* Right: Tick mark points */}
            <div className="lg:col-span-4 flex flex-col justify-center gap-3 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200 h-full">
              {whyNeedInsurance.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-sky-300 hover:bg-sky-50/50 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] transition-all duration-300 cursor-pointer">
                  <Check className="w-5 h-5 text-sky-500 shrink-0" strokeWidth={3} />
                  <p className="font-bold text-[#001D3D] text-[13.5px] leading-snug">{item}</p>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* LIFE INSURANCE PLANS WE OFFER */}
      <section className="pt-10 lg:pt-12 pb-20 lg:pb-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-6 lg:mb-8 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-black text-[#001D3D] mb-4">Life Insurance Plans We Offer</h2>
            <p className="text-slate-600 text-lg truncate whitespace-normal lg:whitespace-nowrap">Comprehensive solutions designed to protect your family's future and grow your wealth at every stage of life.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {plansOffered.map((plan, i) => (
              <div key={i} className="relative group h-[260px] rounded-[32px] overflow-hidden reveal-on-scroll opacity-0 translate-y-12 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer" style={{ transitionDelay: `${i * 100}ms` }}>
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

      {/* WHY CHOOSE SGNL / COMPARISON */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-black text-[#001D3D] mb-6">Why Choose <span className="text-sky-500">SGNL</span> for Life Insurance?</h2>
            <p className="text-slate-600 text-lg">Compare your options and see how SGNL makes insurance planning simpler, more transparent, and highly personalized for your needs.</p>
          </div>
            
          <div className="bg-white rounded-3xl p-6 md:p-10 text-[#001D3D] shadow-2xl reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border border-slate-200 font-bold text-slate-500 w-1/4">Feature</th>
                    <th className="py-3 px-4 border border-slate-200 font-bold text-slate-500 w-1/4">Traditional Approach</th>
                    <th className="py-3 px-4 border border-slate-200 font-black text-sky-600 w-1/2 bg-sky-50">SGNL</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="group hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 border border-slate-200 font-semibold text-sm md:text-base">{row.feature}</td>
                      <td className="py-3 px-4 border border-slate-200 text-sm md:text-base text-slate-500">{row.traditional}</td>
                      <td className="py-3 px-4 border border-slate-200 text-sm md:text-base font-bold text-sky-700 bg-sky-50/50 group-hover:bg-sky-100 transition-colors">{row.sgnl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </section>

      {/* TRUSTED PARTNERS & HOW IT WORKS */}
      <section className="py-20 lg:py-28 bg-[#001D3D] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Partners */}
          <div className="text-center max-w-4xl mx-auto mb-20 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700">
            <h2 className="text-3xl font-black text-white mb-6">Our Trusted Life Insurance Partners</h2>
            <p className="text-slate-300 text-lg mb-10">We're not tied to just one company — and that's a good thing for you. SGNL works with leading, IRDAI-approved life insurers, so we can help you explore and compare suitable plans from multiple insurers.</p>
            
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8 items-center opacity-80 hover:opacity-100 transition-all duration-500">
              {['SBI Life', 'HDFC Life', 'Max Life Insurance', 'Tata AIA Life', 'ICICI Prudential', 'Bajaj Allianz Life'].map((partner, i) => (
                <div key={i} className="px-6 py-3 bg-white/5 rounded-xl border border-white/10 font-black text-white text-xl tracking-tight hover:border-sky-400 hover:text-sky-400 transition-all cursor-default">
                  {partner}
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-6">All brand names and logos belong to their respective companies. SGNL is an authorized advisor for these insurance products.</p>
          </div>

          <div className="border-t border-white/10 my-20"></div>

          {/* Trust and How it Works */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700">
              <h2 className="text-3xl font-black text-white mb-8">Why Customers <span className="text-sky-400">Trust SGNL</span></h2>
              <div className="grid gap-6">
                {[
                  { title: "Honest guidance", desc: "We recommend what fits you, not what pays us the most." },
                  { title: "Plans tailored to you", desc: "No generic packages, just what actually works for your family." },
                  { title: "Transparent process", desc: "Clear terms, no hidden surprises." },
                  { title: "Multiple protection options", desc: "Life, health, and general insurance, all under one roof." },
                  { title: "A dedicated support team", desc: "That's there when it matters — not just during sign-up." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-slate-300 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200 bg-white/5 rounded-3xl p-8 lg:p-10 border border-white/10">
              <h2 className="text-3xl font-black text-white mb-8">How It Works</h2>
              <div className="relative border-l-2 border-sky-500/30 ml-4 space-y-8">
                {[
                  { step: 1, title: "Tell us about yourself", desc: "Your age, income, and what you're hoping to secure for your family." },
                  { step: 2, title: "We compare plans for you", desc: "Across 15+ insurers, so you don't have to do the legwork." },
                  { step: 3, title: "You choose, we handle the rest", desc: "Paperwork, documentation, all sorted for you." },
                  { step: 4, title: "Stay covered, stay supported", desc: "We're here for claims, renewals, and everything in between." }
                ].map((item, i) => (
                  <div key={i} className="relative pl-8">
                    <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm ring-4 ring-[#001D3D]">
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
      <section className="py-20 lg:py-28 bg-slate-50">
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
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
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
                  <div className="px-6 pb-6 pt-0 text-slate-600 text-base leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / FOOTER OVERLAY */}
      <section className="py-20 lg:py-28 relative bg-sky-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-800 opacity-90"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700">Plan Today for a <span className="text-sky-200">Secure Tomorrow</span></h2>
          <p className="text-xl text-sky-100 mb-10 leading-relaxed reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100">
            Life doesn't wait, and neither should your family's financial security. Whether it's protecting your loved ones, saving for your child's future, or planning for retirement, we're here to help you find the right plan — without the confusion.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
            <button className="bg-white text-sky-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-black/10">
              Get a Free Quote
            </button>
            <button className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/20">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm font-semibold text-sky-100 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-300">
            <div className="flex items-center gap-2 bg-sky-900/30 px-4 py-2 rounded-full">
              <Phone className="w-4 h-4" /> Call: [Add phone number]
            </div>
            <div className="flex items-center gap-2 bg-sky-900/30 px-4 py-2 rounded-full">
              <Info className="w-4 h-4" /> Visit: [Add unified website link]
            </div>
            <div className="flex items-center gap-2 bg-sky-900/30 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4" /> Serving families across Tamil Nadu
            </div>
          </div>
        </div>
      </section>

      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
