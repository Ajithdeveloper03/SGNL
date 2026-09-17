'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Building2, Users, ShieldCheck, Target, HeartHandshake,
  Clock, Star, Facebook, Twitter, Linkedin, Instagram, PhoneCall, Menu,
  ChevronDown, ArrowRight, X, CheckCircle2, Shield, TrendingUp, HandCoins,
  FileText, BarChart, CalendarCheck, HelpCircle, ChevronUp, MapPin, Sparkles
} from 'lucide-react';
import ContactPopup from '../../components/ContactPopup';

export default function ShortTermPlansPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const plans = [
    {
      title: "Prime Wealth Gain",
      desc: "A recurring deposit plan created for employees and homemakers, offering a convenient and affordable way to save toward short-term financial goals.",
      icon: Building2,
      bgImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Conventional Growth Plan",
      desc: "A savings plan with no fixed tenure, allowing members to benefit from daily gains and stay flexible with how long they choose to save.",
      icon: TrendingUp,
      bgImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Ecocial Savings Plan",
      desc: "An economical, budget-friendly savings option with a flexible payment method, designed for members who want an easy and affordable way to save.",
      icon: HandCoins,
      bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Students Saving Plan",
      desc: "A savings plan created specifically for students, giving them an early start on building savings habits and financial confidence for the future.",
      icon: Target,
      bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Elite Money Back",
      desc: "A fixed deposit account offering guaranteed monthly returns at a competitive interest rate, suited for members who want predictable short-term income.",
      icon: ShieldCheck,
      bgImage: "https://images.unsplash.com/photo-1580519542036-ed47f3e42d9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const whyChoose = [
    { title: "Competitive Interest Rates", desc: "Competitive interest rates on select fixed deposit and recurring deposit plans, subject to applicable terms.", icon: TrendingUp },
    { title: "Flexible Tenure Options", desc: "Flexible tenure options, including plans with no fixed lock-in period.", icon: CalendarCheck },
    { title: "Budget-Friendly", desc: "Budget-friendly entry points designed for employees, homemakers, and students alike.", icon: HandCoins },
    { title: "Guaranteed Monthly Returns", desc: "Guaranteed monthly returns available on select plans like Elite Money Back.", icon: ShieldCheck },
    { title: "Dedicated Support", desc: "Dedicated support from SGNL's team to help you choose a plan suited to your short-term goals.", icon: Users }
  ];

  const whoCanInvest = [
    "Employees and homemakers looking for a convenient recurring deposit option like Prime Wealth Gain.",
    "Students wanting to start building savings habits early with the Students Saving Plan.",
    "Budget-conscious savers who prefer flexible, low-commitment options like the Ecocial Savings Plan.",
    "Members seeking daily-gain flexibility with no fixed tenure, through the Conventional Growth Plan."
  ];

  const faqs = [
    {
      q: "What is a short-term investment plan at SGNL?",
      a: "SGNL's short-term plans are savings and deposit options — such as recurring deposits, fixed deposits, and flexible-tenure savings plans — designed for members looking for quicker returns compared to long-term investments."
    },
    {
      q: "Which SGNL short-term plan offers guaranteed returns?",
      a: "Elite Money Back is a fixed deposit account that offers guaranteed monthly returns, according to the applicable plan terms."
    },
    {
      q: "Is there a plan with no fixed tenure?",
      a: "Yes. The Conventional Growth Plan lets members benefit from daily gains without committing to a fixed tenure."
    },
    {
      q: "Are there short-term plans designed for students?",
      a: "Yes. The Students Saving Plan is created specifically to help students start saving early, subject to plan eligibility."
    },
    {
      q: "Who is the Prime Wealth Gain plan best suited for?",
      a: "Prime Wealth Gain is a recurring deposit plan designed for employees and homemakers looking for a convenient, affordable way to save regularly."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-[#001D3D] overflow-x-hidden">
      
      {/* ══════════ HEADER SECTION ══════════ */}
      <div className="w-full relative z-50 flex flex-col shadow-sm">
        {/* TOP BAR */}
        <div className="bg-[#001D3D] h-10 w-full hidden lg:flex items-center justify-center text-[10px] xl:text-[11px] font-bold text-white tracking-widest uppercase relative">
          <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between h-full px-4 lg:px-8">
            <div className="flex items-center h-full">
              <div className="bg-sky-500 h-full flex items-center px-6 relative z-10 cursor-pointer">
                <a href="mailto:support@sgnl.com" className="hover:text-white/80 transition-colors">SUPPORT@SGNL.COM</a>
                <div className="absolute top-0 -right-4 w-8 h-full bg-sky-500 transform skew-x-[30deg] -z-10" />
              </div>
              <div className="flex items-center pl-10 pr-8 h-full border-r border-white/20">
                <div className="flex items-center gap-2 text-white/90">
                  <Clock className="w-4 h-4 text-sky-500" /> [Mon - Sat 8:00 AM - 6:00 PM]
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-start items-center h-full gap-4 whitespace-nowrap normal-case tracking-normal pl-8 pr-8 border-r border-white/20">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-[10px] text-white font-black tracking-wider uppercase">
                <Star className="w-3 h-3 text-sky-400 fill-sky-400" /> TRUSTED NIDHI
              </div>
              <span className="text-white font-bold text-[13px]">Leading Nidhi Company in Tamil Nadu</span>
              <button onClick={() => setIsPopupOpen(true)} className="flex items-center text-white font-black text-[13px] hover:text-sky-400 transition-colors group">
                <span className="border-b-2 border-white group-hover:border-sky-400 pb-0.5">Get A Quote</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex items-center h-full">
              <div className="flex items-center gap-5 px-8 h-full text-white">
                <Link href="#" className="hover:text-sky-500 transition-colors"><Facebook className="w-4 h-4 fill-current" /></Link>
                <Link href="#" className="hover:text-sky-500 transition-colors"><Twitter className="w-4 h-4 fill-current" /></Link>
                <Link href="#" className="hover:text-sky-500 transition-colors"><Linkedin className="w-4 h-4 fill-current" /></Link>
                <Link href="#" className="hover:text-sky-500 transition-colors"><Instagram className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <header className="bg-white w-full flex items-center justify-center border-b border-gray-100">
          <div className="max-w-[1400px] w-full mx-auto h-[85px] flex items-center justify-between px-4 lg:px-8">
            <Link href="/" className="flex flex-col items-center justify-center shrink-0">
              <img src="/sgnl/logo.png" alt="SGNL Logo" className="w-[85px] h-[85px] object-contain" />
            </Link>

            <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-[15px] font-black text-[#001D3D] h-full ml-auto mr-8">
              <Link href="/" className="hover:text-sky-500 transition-colors h-full flex items-center">Home</Link>
              <Link href="/about-us" className="hover:text-sky-500 transition-colors h-full flex items-center">About Us</Link>

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

              <div className="relative h-full flex items-center" onMouseEnter={() => setActiveDropdown('Schemes')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`flex items-center gap-1.5 transition-colors h-full ${activeDropdown === 'Schemes' ? 'text-sky-500' : 'hover:text-sky-500'}`}>
                  Schemes <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Schemes' ? 'rotate-180 text-sky-500' : 'text-gray-400'}`} />
                </button>
                {activeDropdown === 'Schemes' && (
                  <div className="absolute top-[75px] left-1/2 -translate-x-1/2 bg-white rounded-[24px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] py-6 w-[260px] flex flex-col gap-1 z-50">
                    {['Short Term Plans', 'Long Term Plans'].map(item => (
                      <Link key={item} href={item === 'Long Term Plans' ? '/long-term-plans' : item === 'Short Term Plans' ? '/short-term-plans' : '#'} className={`px-8 py-2.5 text-[14px] font-bold ${item === 'Short Term Plans' ? 'text-sky-500' : 'text-[#475569] hover:text-sky-500'} transition-colors`}>{item}</Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/get-in-touch" className="hover:text-sky-500 transition-colors h-full flex items-center">Get In Touch</Link>
            </nav>

            <div className="hidden lg:flex items-center h-full">
              <div onClick={() => setIsPopupOpen(true)} className="flex items-center gap-2 px-6 xl:px-8 h-full bg-sky-500 text-white hover:bg-[#001D3D] transition-colors cursor-pointer group">
                <PhoneCall className="w-9 h-9 p-[2px] text-white stroke-[1.5] group-hover:scale-110 transition-transform" />
                <div className="flex flex-col justify-center">
                  <span className="text-[11px] font-bold tracking-widest text-white/80 uppercase mb-0.5">Call Anytime</span>
                  <span className="text-[19px] font-black text-white tracking-tight">+1 9812310000</span>
                </div>
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <button onClick={() => setIsPopupOpen(true)} className="flex items-center text-[#001D3D] font-black text-[13px] hover:text-sky-500 transition-colors group px-2">
                <span className="border-b-2 border-[#001D3D] group-hover:border-sky-500 pb-0.5 whitespace-nowrap">Get A Quote</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
              <button className={`flex items-center justify-center transition-colors ${mobileOpen ? 'w-10 h-10 rounded-xl border border-gray-200 text-[#001D3D] hover:bg-gray-50' : 'p-2 text-[#001D3D]'}`} onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X className="w-5 h-5" strokeWidth={2.5} /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </header>

        {mobileOpen && (
          <div className="lg:hidden absolute top-[85px] left-0 w-full bg-white shadow-2xl py-2 px-6 flex flex-col z-50">
            <Link href="/" className="w-full py-5 cursor-pointer"><span className="text-[#001D3D] font-black text-[15px]">Home</span></Link>
            <Link href="/about-us" className="w-full py-5 cursor-pointer border-t border-gray-100"><span className="text-[#001D3D] hover:text-sky-500 font-black text-[15px]">About Us</span></Link>
            {[
              { name: 'Services', links: ['Life Insurance', 'Health Insurance', 'General Insurance', 'High-Interest Savings', 'Investment Solutions'] },
              { name: 'Schemes', links: ['Short Term Plans', 'Long Term Plans'] }
            ].map((item) => (
              <div key={item.name} className="w-full flex flex-col">
                <div className="w-full flex items-center justify-between py-5 cursor-pointer border-t border-gray-100" onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}>
                  <span className={`font-black text-[15px] ${activeDropdown === item.name || (item.name === 'Schemes') ? 'text-sky-500' : 'text-[#001D3D]'}`}>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180 text-sky-500' : 'text-[#001D3D]'}`} strokeWidth={2.5} />
                </div>
                {activeDropdown === item.name && (
                  <div className="flex flex-col gap-4 pb-5 pl-4">
                    {item.links.map(link => (
                      <Link key={link} href={link === 'Life Insurance' ? '/services/life-insurance' : link === 'Health Insurance' ? '/health-insurance-tamil-nadu' : link === 'General Insurance' ? '/general-insurance-tamil-nadu' : link === 'High-Interest Savings' ? '/high-interest-savings-plans-tamil-nadu' : link === 'Investment Solutions' ? '/investment-solutions-tamil-nadu' : link === 'Long Term Plans' ? '/long-term-plans' : link === 'Short Term Plans' ? '/short-term-plans' : '#'} className={`font-bold text-[14px] ${link === 'Short Term Plans' ? 'text-sky-500' : 'text-[#475569] hover:text-sky-500'} transition-colors`}>{link}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/get-in-touch" className="w-full py-5 cursor-pointer border-t border-gray-100 mb-2"><span className="text-[#001D3D] font-black text-[15px]">Get In Touch</span></Link>
          </div>
        )}
      </div>

      {/* ══════════ HERO SECTION ══════════ */}
      <section className="relative w-full pt-8 pb-16 lg:pt-10 lg:pb-24 bg-[#001D3D] overflow-hidden flex items-center select-none text-white">
        {/* Background Image - Clear on the right side */}
        <div className="absolute inset-0 bg-cover bg-right lg:bg-center opacity-40 lg:opacity-100" style={{ backgroundImage: "url('/sgnl/Short%20Term%20Plans.png')" }}></div>
        
        {/* Mobile Gradient (Dark everywhere for text readability) */}
        <div className="absolute inset-0 bg-[#001D3D]/80 lg:hidden"></div>
        
        {/* Desktop Gradient (Solid dark left, fading to transparent right) */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#001D3D] from-45% via-[#001D3D]/80 via-55% to-transparent to-70%"></div>

        <div className="max-w-[1400px] w-full mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#001D3D]/50 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" /> Secure Your Future
            </div>
            <h1 className="text-3xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-4">
              Short-Term Investment Plans in Tamil Nadu
            </h1>
            <p className="text-justify md:text-left text-lg lg:text-xl text-slate-300 leading-relaxed mb-6 max-w-2xl font-medium">
              SGNL's short-term investment plans are built for quick, flexible savings — with easy EMI options and plans designed to fit different budgets, incomes, and lifestyles. Whether you're an employee, a homemaker, a student, or someone looking for daily-gain savings with no fixed tenure, SGNL offers a short-term option to match your pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-sky-500 text-white px-8 py-5 rounded-2xl font-black tracking-widest uppercase text-sm hover:bg-sky-400 transition-all shadow-xl hover:shadow-sky-500/20 flex items-center justify-center gap-2 group"
              >
                Explore Plans
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-2xl font-black tracking-widest uppercase text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2 group"
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ OUR LONG-TERM PLANS ══════════ */}
      <section className="pt-20 lg:pt-28 pb-12 lg:pb-16 relative bg-slate-50 -mt-10 rounded-t-[40px] z-30">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-[#001D3D] mb-4">Our Key Plans</h2>
            <p className="text-lg text-slate-600">Explore SGNL's short-term investment options tailored for your financial flexibility.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] p-8 lg:p-10 rounded-[32px] shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col justify-between border border-white/10 min-h-[380px]"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${plan.bgImage}')` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D] via-[#001D3D]/80 to-[#001D3D]/60 group-hover:via-[#001D3D]/90 transition-colors duration-500" />
                
                <div className="relative z-10 mb-8">
                  <div className="w-16 h-16 bg-sky-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-sky-500/20 group-hover:-translate-y-1 transition-transform">
                    <plan.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-sky-400 transition-colors">{plan.title}</h3>
                  <p className="text-justify md:text-left text-slate-300 leading-relaxed text-lg group-hover:text-white transition-colors">{plan.desc}</p>
                </div>
                <div className="relative z-10 mt-4">
                  <button onClick={() => setIsPopupOpen(true)} className="flex items-center text-sky-400 font-bold uppercase tracking-wider text-sm hover:text-white transition-colors group/btn">
                    Know More <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-[#001D3D] rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="absolute inset-0 bg-sky-500/10 pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">More Plans</h3>
              <p className="text-justify md:text-left text-slate-300 leading-relaxed text-lg">
                Looking for a short-term plan that fits your income and goals? SGNL's team can walk you through additional plans, applicable interest rates, and flexible tenure options. Connect with our team to find the right fit.
              </p>
            </div>
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="w-full md:w-auto bg-sky-500 text-white px-8 py-5 rounded-2xl font-black tracking-widest uppercase text-sm hover:bg-sky-400 transition-all shadow-xl hover:-translate-y-1 shrink-0 relative z-10"
            >
              Connect with our team
            </button>
          </div>
        </div>
      </section>

      {/* ══════════ WHY CHOOSE ══════════ */}
      <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-[#001D3D] mb-4">Why Choose SGNL's Short-Term Plans?</h2>
            <p className="text-lg text-slate-600">Discover the benefits of securing your financial future with us.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {whyChoose.map((feature, i) => (
              <div key={i} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] group p-8 rounded-3xl border border-gray-100 hover:border-sky-500 hover:shadow-2xl transition-all hover:-translate-y-1 bg-slate-50 hover:bg-white relative overflow-hidden">
                <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-sky-500 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors shadow-sm">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#001D3D] mb-3">{feature.title}</h3>
                <p className="text-justify md:text-left text-slate-600 leading-relaxed group-hover:text-slate-700">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center flex justify-center">
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="bg-sky-500 text-white px-8 py-4 rounded-xl font-black tracking-widest uppercase text-[13px] hover:bg-[#001D3D] transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-2 group"
            >
              Start Investing Today <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════ WHO CAN INVEST ══════════ */}
      <section className="py-12 lg:py-16 bg-[#001D3D] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">Who Can Invest</h2>
              <p className="text-lg text-sky-400 font-bold mb-8">
                SGNL's short-term plans are designed for a wide range of savers, including:
              </p>
              <div className="space-y-6 mb-8">
                {whoCanInvest.map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-sky-500" />
                    </div>
                    <p className="text-justify md:text-left text-slate-300 leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-justify md:text-left text-slate-200">
                Eligibility and documentation requirements may vary by plan — connect with SGNL's team to confirm what applies to your chosen option.
              </p>
              
              <div className="mt-10 md:mt-12">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="bg-white text-[#001D3D] px-8 py-4 rounded-xl font-black tracking-widest uppercase text-[13px] hover:bg-sky-500 hover:text-white transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-2 group"
                >
                  Check Eligibility <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-sky-500/20 absolute -inset-10 blur-3xl" />
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Who Can Invest" className="relative z-10 w-full aspect-[4/3] lg:aspect-[1.1] rounded-[40px] shadow-2xl border-4 border-white/10 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ HOW TO GET STARTED ══════════ */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-black text-[#001D3D] mb-4">How to Get Started</h2>
            <p className="text-lg text-slate-600">A simple, transparent process to begin your investment journey.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Connect", desc: "Connect with SGNL's team to discuss your savings goals and preferred plan type.", icon: PhoneCall },
              { title: "Choose", desc: "Choose a short-term plan — recurring deposit, fixed deposit, or a flexible no-tenure option.", icon: Target },
              { title: "Document", desc: "Complete the required documentation, as applicable to the selected plan.", icon: FileText },
              { title: "Invest", desc: "Start saving and track your returns based on the plan's applicable terms.", icon: TrendingUp }
            ].map((step, i) => (
              <div key={i} className="relative group">
                {i !== 3 && <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gray-200 z-0">
                  <div className="w-full h-full bg-sky-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white border-8 border-slate-50 shadow-xl flex items-center justify-center text-sky-500 font-black text-2xl mb-6 relative group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-100 transition-all duration-300">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#001D3D] mb-3">{step.title}</h3>
                  <p className="text-justify md:text-center text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center flex justify-center">
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="bg-[#001D3D] text-white px-8 py-4 rounded-xl font-black tracking-widest uppercase text-[13px] hover:bg-sky-500 transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-2 group"
            >
              Contact Our Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════ FAQS ══════════ */}
      <section className="py-16 lg:py-24 relative bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600 mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#001D3D] tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Find answers to common questions about our long-term plans.</p>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'shadow-lg border-sky-200 bg-sky-50/30' : 'hover:border-slate-300 bg-white'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 px-4 md:px-5 lg:py-4 lg:px-6 text-left cursor-pointer"
                >
                  <span className={`font-bold text-[14px] leading-[1.3] md:text-base lg:text-lg pr-3 md:pr-6 transition-colors duration-300 ${openFaq === i ? 'text-sky-600' : 'text-[#001D3D]'}`}>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-sky-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="text-justify md:text-left px-5 pb-4 lg:px-6 lg:pb-5 pt-0 text-slate-600 text-sm lg:text-base leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA BANNER ══════════ */}
      <section className="py-2 bg-sky-500 relative z-20">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 0%, transparent 80%)' }} />
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 py-8 lg:py-10">
            <div className="text-center lg:text-left max-w-3xl">
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">Ready to Start?</h2>
              <p className="text-xl text-white/90 font-bold mb-4">
                Take the Next Step Towards Smarter Financial Planning
              </p>
              <p className="text-white/80 text-lg">
                Explore our savings and investment schemes or connect with a branch near you.<br/>Visit us at: <strong>Hosur | Chennai | Coimbatore</strong>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center shrink-0 w-full lg:w-auto mt-24 sm:mt-0">
              <div className="relative w-full sm:w-auto">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full sm:w-auto bg-white text-[#001D3D] px-8 py-5 rounded-2xl font-black tracking-widest uppercase text-sm hover:bg-slate-50 transition-all flex items-center justify-center shadow-lg hover:-translate-y-1 relative z-30"
                >
                  Contact Us
                </button>
              </div>
              <div className="relative w-full sm:w-auto">
                <div className="hidden lg:block absolute bottom-[calc(100%-10px)] left-1/2 -translate-x-1/2 w-64 z-20 pointer-events-none drop-shadow-2xl">
                  <img src="/sgnl/person 2.png" alt="Character" className="w-full h-auto object-contain object-bottom" />
                </div>
                <div className="lg:hidden absolute bottom-[calc(100%-24px)] right-4 w-36 z-20 pointer-events-none drop-shadow-2xl">
                  <img src="/sgnl/person 2.png" alt="Character" className="w-full h-auto object-contain" />
                </div>
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full sm:w-auto bg-[#001D3D] text-white px-8 py-5 rounded-2xl font-black tracking-widest uppercase text-sm hover:bg-slate-900 transition-all shadow-xl flex items-center justify-center gap-2 hover:-translate-y-1 relative z-30"
                >
                  Explore Our Schemes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="relative pt-28 pb-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/sgnl/footer 1.png')" }}>
        <div className="absolute inset-0 bg-[#001D3D]/80" />
        <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-10 lg:gap-8 pb-12 border-b border-white/10">
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

            {[
              { head: 'Our Schemes', links: ['Prime Wealth Gain', 'Vikas Money Savings', 'Ecocial Savings Plan', 'Elite Wealth Gain'] },
              { head: 'Services', links: ['High-Interest Savings Plans', 'Investment Solutions', 'Life Insurance', 'Health Insurance', 'General Insurance'] },
              { head: 'Company', links: ['Home', 'About Us', 'Services', 'Schemes', 'Get In Touch'] },
            ].map(col => (
              <div key={col.head} className="w-[45%] sm:w-auto shrink-0">
                <p className="text-white font-black text-sm uppercase tracking-widest mb-6">{col.head}</p>
                <ul className="space-y-4">
                  {col.links.map(l => (
                    <li key={l}><Link href={l === 'Life Insurance' ? '/services/life-insurance' : l === 'Health Insurance' ? '/health-insurance-tamil-nadu' : l === 'General Insurance' ? '/general-insurance-tamil-nadu' : l === 'High-Interest Savings Plans' ? '/high-interest-savings-plans-tamil-nadu' : l === 'Investment Solutions' ? '/investment-solutions-tamil-nadu' : l === 'About Us' ? '/about-us' : l === 'Get In Touch' ? '/get-in-touch' : '#'} className="text-white text-[15px] hover:text-sky-500 font-medium transition-colors">{l}</Link></li>
                  ))}
                </ul>
              </div>
            ))}

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
