'use client';

import React, { useState } from 'react';
import { 
  Shield, HeartPulse, CheckCircle2, TrendingUp, Users, PhoneCall, ArrowRight, 
  Activity, Stethoscope, Banknote, ShieldCheck, Building2, Clock, HeartHandshake,
  ChevronDown, Menu, X, Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';
import Link from 'next/link';
import ContactPopup from '../../../components/ContactPopup';

export default function LifeInsurancePage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      
      {/* ══════════ HEADER ══════════ */}
      <header className="bg-white w-full flex items-center justify-center border-b border-gray-100 z-50 relative">
        <div className="max-w-[1400px] w-full mx-auto h-[85px] flex items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center justify-center shrink-0">
            <img src="/sgnl/logo.png" alt="SGNL Logo" className="w-[85px] h-[85px] object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-[15px] font-black text-[#001D3D] h-full ml-auto mr-8">
            <Link href="/" className="hover:text-sky-500 transition-colors h-full flex items-center">Home</Link>

            {/* Services */}
            <div className="relative h-full flex items-center" onMouseEnter={() => setActiveDropdown('Services')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className={`flex items-center gap-1.5 transition-colors h-full ${activeDropdown === 'Services' ? 'text-sky-500' : 'hover:text-sky-500'}`}>
                Services <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Services' ? 'rotate-180 text-sky-500' : 'text-gray-400'}`} />
              </button>
              {activeDropdown === 'Services' && (
                <div className="absolute top-[75px] left-1/2 -translate-x-1/2 bg-white rounded-[24px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] py-6 w-[240px] flex flex-col gap-1 z-50">
                  {['High-Interest Savings Plans', 'Investment Solutions', 'Life Insurance', 'Health Insurance', 'General Insurance', 'Loan Services'].map(item => (
                    <Link key={item} href={item === 'Life Insurance' || item === 'Health Insurance' ? '/services/life-insurance' : '#'} className="px-8 py-2.5 text-[14px] font-bold text-[#475569] hover:text-sky-500 transition-colors">{item}</Link>
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
                  {['Prime Wealth Gain', 'Elite Wealth Gain', 'Vikas Money Savings', 'Ecocial Savings Plan'].map(item => (
                    <Link key={item} href="#" className="px-8 py-2.5 text-[14px] font-bold text-[#475569] hover:text-sky-500 transition-colors">{item}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* About & Branches & Contact */}
            <Link href="#" className="hover:text-sky-500 transition-colors h-full flex items-center">About</Link>
            <Link href="#" className="hover:text-sky-500 transition-colors h-full flex items-center">Branches</Link>
            <Link href="#" className="hover:text-sky-500 transition-colors h-full flex items-center">Get In Touch</Link>
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
          {[
            { name: 'Services', links: ['High-Interest Savings Plans', 'Investment Solutions', 'Life Insurance', 'Health Insurance', 'General Insurance', 'Loan Services'] },
            { name: 'Schemes', links: ['Prime Wealth Gain', 'Elite Wealth Gain', 'Vikas Money Savings', 'Ecocial Savings Plan'] }
          ].map((item) => (
            <div key={item.name} className="w-full flex flex-col">
              <div 
                className="w-full flex items-center justify-between py-5 cursor-pointer"
                onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
              >
                <span className={`font-black text-[15px] ${activeDropdown === item.name ? 'text-sky-500' : 'text-[#001D3D]'}`}>{item.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180 text-sky-500' : 'text-[#001D3D]'}`} strokeWidth={2.5} />
              </div>
              
              {activeDropdown === item.name && (
                <div className="flex flex-col gap-4 pb-5 pl-4">
                  {item.links.map(link => (
                    <Link key={link} href={link === 'Life Insurance' || link === 'Health Insurance' ? '/services/life-insurance' : '#'} className="text-[#475569] font-bold text-[14px] hover:text-sky-500 transition-colors">
                      {link}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="#" className="w-full py-5 cursor-pointer"><span className="text-[#001D3D] font-black text-[15px]">About</span></Link>
          <Link href="#" className="w-full py-5 cursor-pointer"><span className="text-[#001D3D] font-black text-[15px]">Branches</span></Link>
          <Link href="#" className="w-full py-5 cursor-pointer mb-2"><span className="text-[#001D3D] font-black text-[15px]">Get In Touch</span></Link>
        </div>
      )}

      {/* ══════════ PAGE CONTENT ══════════ */}
      <main className="flex-1 w-full bg-white flex flex-col">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-12 py-16 sm:py-24 overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001D3D] to-[#00152D] -z-10"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-sm font-medium tracking-wider">SARATHI GIZMO-CAPITAL NIDHI LIMITED</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Your Family's <span className="text-[#F59E0B]">Health Protection</span> Starts Here
              </h1>
              
              <p className="text-lg text-white/80 leading-relaxed max-w-xl font-medium">
                Medical emergencies can happen anytime. With Health Insurance Plans, protect your loved ones from unexpected hospital expenses and enjoy peace of mind with affordable yearly premiums.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="#plans" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#F59E0B] text-[#001D3D] font-black hover:bg-[#F59E0B]/90 transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                  Explore Plans
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button onClick={() => setIsPopupOpen(true)} className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 text-white font-bold border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm">
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Contact an Expert
                </button>
              </div>
            </div>
            
            {/* Hero Images & Floating Cards */}
            <div className="relative hidden lg:block h-[500px] animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[2.5rem] border border-white/10 backdrop-blur-md p-10 shadow-2xl flex flex-col justify-between">
                <div className="space-y-4">
                   <div className="w-16 h-16 rounded-2xl bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] mb-6">
                      <HeartPulse className="w-8 h-8" />
                   </div>
                   <h3 className="text-3xl font-black text-white tracking-tight">Family Health Plan</h3>
                   <p className="text-white/70 font-medium text-lg">2 Adults + 2 Children</p>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-white/70 text-sm mb-1 uppercase tracking-wider font-bold">Health Coverage</div>
                    <div className="text-4xl font-black text-white">₹5 Lakh</div>
                  </div>
                  
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-white/70 text-sm mb-1 uppercase tracking-wider font-bold">Starting From</div>
                      <div className="text-3xl font-black text-[#F59E0B]">₹6,550 <span className="text-sm font-bold text-white/50">/ Year</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Health Insurance & Premium Benefits */}
        <section className="py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-[#001D3D] mb-4 tracking-tight">Why Choose Health Insurance?</h2>
              <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">Comprehensive protection designed to secure your financial future against rising medical costs.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Features */}
              {[
                { icon: Activity, title: "Cashless Hospital Treatment", desc: "Get admitted and treated without worrying about arranging funds immediately." },
                { icon: Banknote, title: "Covers Major Medical Expenses", desc: "From pre-hospitalization to post-surgery care, everything is covered." },
                { icon: Shield, title: "Financial Protection", desc: "Secure your family's savings from being drained during emergencies." },
                { icon: TrendingUp, title: "Tax Benefits Available", desc: "Save on income tax under section 80D of the Income Tax Act." },
                { icon: Stethoscope, title: "Health Check-Ups", desc: "Annual complimentary preventive health check-ups and wellness benefits." },
                { icon: HeartHandshake, title: "Peace of Mind", desc: "Focus on recovery rather than worrying about the hospital bills." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-500 mb-6 group-hover:scale-110 group-hover:bg-[#001D3D] group-hover:text-white transition-all duration-300">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-[#001D3D] mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Coverages */}
        <section className="py-24 px-4 sm:px-6 lg:px-12 bg-white relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-600 mb-6 border border-sky-100">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-black tracking-widest uppercase">Extensive Protection</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#001D3D] mb-8 leading-tight tracking-tight">Common Coverages in Health Plans</h2>
              
              <div className="space-y-8">
                {[
                  { title: "Hospitalization Expenses", desc: "Covers hospital bills, room rent, ICU charges, doctor fees, medicines, and treatments." },
                  { title: "Pre & Post Hospitalization", desc: "Medical expenses before and after hospitalization are completely covered." },
                  { title: "Family Floater Coverage", desc: "One health plan can protect your entire family under a single policy." },
                  { title: "No Claim Bonus", desc: "Get increased sum insured for every claim-free year." },
                  { title: "Organ Donor Expenses", desc: "Comprehensive coverage for organ donor-related medical expenses." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="mt-1 shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B]">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-[#001D3D] mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-sky-50 rounded-[3rem] -z-10 transform translate-x-6 translate-y-6"></div>
              <div className="bg-[#001D3D] text-white p-10 sm:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                   <Shield className="w-64 h-64 text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black mb-10 relative z-10 tracking-tight">Why Choose Us?</h3>
                <ul className="space-y-6 relative z-10">
                  {[
                    "Affordable Premiums",
                    "Wide Network Hospital Support",
                    "Fast Claim Assistance",
                    "Family Protection Plans",
                    "Trusted Insurance Guidance",
                    "Customized Solutions for Every Need"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg sm:text-xl font-bold text-white/90">
                      <CheckCircle2 className="w-7 h-7 text-[#F59E0B] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Available Plans & Channel Partners */}
        <section id="plans" className="py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 relative z-10 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-[#001D3D] mb-4 tracking-tight">Our Channel Partners</h2>
              <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">We partner with India's top insurance providers to bring you the best plans tailored to your needs.</p>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center text-center">
                {[
                  "SBI Life", "HDFC Life", "Max Life", "Tata AIA", "ICICI Prudential",
                  "Star Health", "Niva Bupa", "ManipalCigna", "Digit", "Care Health",
                  "HDFC ERGO", "SBI General", "Royal Sundaram", "ICICI Lombard", "Tata AIG"
                ].map((partner, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-slate-100 hover:border-sky-200 bg-slate-50 hover:bg-sky-50 transition-all duration-300 font-black text-slate-400 hover:text-sky-600 flex items-center justify-center h-24">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-20 bg-[#001D3D] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
               <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>
               
               <div className="relative z-10 mb-10 md:mb-0 md:mr-10 text-center md:text-left max-w-2xl">
                 <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">Protecting your health, securing your future.</h3>
                 <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed">SGNL – Simple Solutions, Stronger Finances. Get in touch with our experts today for customized insurance solutions.</p>
               </div>
               
               <div className="relative z-10 flex-shrink-0">
                  <button onClick={() => setIsPopupOpen(true)} className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-sky-500 text-white font-black text-lg hover:bg-sky-400 transition-all hover:scale-105 shadow-xl shadow-sky-500/30">
                    Contact Us Now
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </button>
               </div>
            </div>
          </div>
        </section>
        
        {/* Features bottom bar */}
        <section className="bg-white py-16 border-t border-slate-100 z-10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div className="flex flex-col items-center text-center">
                 <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center mb-5">
                   <Building2 className="w-8 h-8 text-sky-500" />
                 </div>
                 <h4 className="font-black text-[#001D3D] text-lg">Cashless Treatment</h4>
                 <p className="text-sm text-slate-500 font-medium mt-2">at Network Hospitals</p>
              </div>
              <div className="flex flex-col items-center text-center">
                 <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center mb-5">
                   <Banknote className="w-8 h-8 text-sky-500" />
                 </div>
                 <h4 className="font-black text-[#001D3D] text-lg">Affordable Premiums</h4>
                 <p className="text-sm text-slate-500 font-medium mt-2">Yearly payment options</p>
              </div>
              <div className="flex flex-col items-center text-center">
                 <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center mb-5">
                   <Users className="w-8 h-8 text-sky-500" />
                 </div>
                 <h4 className="font-black text-[#001D3D] text-lg">Family Floater</h4>
                 <p className="text-sm text-slate-500 font-medium mt-2">Comprehensive benefits</p>
              </div>
              <div className="flex flex-col items-center text-center">
                 <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center mb-5">
                   <Clock className="w-8 h-8 text-sky-500" />
                 </div>
                 <h4 className="font-black text-[#001D3D] text-lg">24x7 Support</h4>
                 <p className="text-sm text-slate-500 font-medium mt-2">When you need it most</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="relative pt-20 pb-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/sgnl/footer 1.png')" }}>
        <div className="absolute inset-0 bg-[#001D3D]/95" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="flex items-center gap-3">
                <img src="/sgnl/logo.png" alt="SGNL Logo" className="h-20 w-auto object-contain bg-white rounded-2xl p-2" />
              </Link>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm font-medium">
                A trusted Nidhi Company dedicated to empowering communities through ethical savings, low-interest loans, and transparent financial services.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' }
                ].map((social, i) => (
                  <Link key={i} href={social.href} className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-sky-500 hover:border-sky-500 flex items-center justify-center text-white hover:text-white transition-all">
                    <social.icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { head: 'Our Schemes', links: ['Prime Wealth Gain', 'Vikas Money Savings', 'Ecocial Savings Plan', 'Elite Wealth Gain'] },
              { head: 'Services', links: ['High-Interest Savings Plans', 'Investment Solutions', 'Life Insurance', 'Health Insurance', 'General Insurance', 'Loan Services'] },
              { head: 'Company', links: ['About Us', 'Our Branches', 'Home', 'Contact Us'] },
            ].map(col => (
              <div key={col.head}>
                <p className="text-white font-black text-xs uppercase tracking-widest mb-6">{col.head}</p>
                <ul className="space-y-4">
                  {col.links.map(l => (
                    <li key={l}>
                      <Link href={l === 'Life Insurance' || l === 'Health Insurance' ? '/services/life-insurance' : '#'} className="text-white/80 text-sm hover:text-sky-400 font-bold transition-colors">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 flex justify-center items-center gap-4 text-center">
            <p className="text-white/60 text-xs font-bold uppercase tracking-wider">
              © 2026 Sarathi Germinate Nidhi Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
