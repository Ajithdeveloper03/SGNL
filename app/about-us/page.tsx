'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Building2, Users, ShieldCheck, Target, HeartHandshake,
  Clock, Star, Facebook, Twitter, Linkedin, Instagram, PhoneCall, Menu,
  ChevronDown, ArrowRight, X, Briefcase, CheckCircle2, MapPin, Sparkles
} from 'lucide-react';
import ContactPopup from '../../components/ContactPopup';

export default function AboutUsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const missionPillars = [
    { title: "Accessible Financial Services for Every Household", desc: "Bringing low-interest gold loans and personal loans to salaried employees, small business owners, and families across Tamil Nadu." },
    { title: "Transparent Fixed Deposit & Savings Schemes", desc: "Offering clear, honest fixed deposit and recurring savings plans with no hidden terms, so members always know where their money stands." },
    { title: "Trust Through Regulatory Compliance", desc: "Operating as an RBI-guideline-compliant Nidhi company, ensuring every scheme is safe, accountable, and member-first." },
    { title: "Long-Term Financial Partnership", desc: "Supporting members beyond onboarding, from their first savings account to long-term investment and insurance planning." }
  ];

  const visionPillars = [
    { title: "Becoming Tamil Nadu's Most Trusted Nidhi Company", desc: "Earning long-term trust through transparency, fair pricing, and full RBI-guideline compliance." },
    { title: "Reaching More Families and Small Businesses", desc: "Expanding access to safe savings, fair loans, and simple financial guidance across Tamil Nadu." },
    { title: "Growing Without Losing the Personal Touch", desc: "Scaling our services while keeping every member's experience simple and trustworthy." },
    { title: "Making Digital Saving and Borrowing Simple", desc: "Building easy, secure digital tools so members can save, borrow, and track their money anytime." }
  ];

  const differentiators = [
    { icon: MapPin, title: "Local Roots, Growing Reach", desc: "Serving 500+ members through our offices in Hosur, Chennai, and Coimbatore." },
    { icon: Clock, title: "Nearly a Decade of Experience", desc: "Operating since 2017, with our approach built around transparency and member-focused financial solutions." },
    { icon: ShieldCheck, title: "RBI-Regulated & Compliant", desc: "Our schemes and operations follow applicable regulatory and compliance requirements, including relevant Reserve Bank of India guidelines." },
    { icon: Briefcase, title: "Solutions Shaped Around You", desc: "We offer savings accounts, fixed deposits, investment plans, and insurance solutions designed around different life stages and financial priorities." },
    { icon: HeartHandshake, title: "A Team That Listens", desc: "Our advisors take the time to understand your financial priorities and requirements before helping you explore suitable options." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-[#001D3D]">
      
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
              <Link href="/about-us" className="text-sky-500 transition-colors h-full flex items-center">About Us</Link>

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
                      <Link key={item} href="#" className="px-8 py-2.5 text-[14px] font-bold text-[#475569] hover:text-sky-500 transition-colors">{item}</Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="#" className="hover:text-sky-500 transition-colors h-full flex items-center">Get In Touch</Link>
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
            <Link href="/about-us" className="w-full py-5 cursor-pointer border-t border-gray-100"><span className="text-sky-500 font-black text-[15px]">About Us</span></Link>
            {[
              { name: 'Services', links: ['Life Insurance', 'Health Insurance', 'General Insurance', 'High-Interest Savings', 'Investment Solutions'] },
              { name: 'Schemes', links: ['Short Term Plans', 'Long Term Plans'] }
            ].map((item) => (
              <div key={item.name} className="w-full flex flex-col">
                <div className="w-full flex items-center justify-between py-5 cursor-pointer border-t border-gray-100" onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}>
                  <span className={`font-black text-[15px] ${activeDropdown === item.name ? 'text-sky-500' : 'text-[#001D3D]'}`}>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180 text-sky-500' : 'text-[#001D3D]'}`} strokeWidth={2.5} />
                </div>
                {activeDropdown === item.name && (
                  <div className="flex flex-col gap-4 pb-5 pl-4">
                    {item.links.map(link => (
                      <Link key={link} href={link === 'Life Insurance' ? '/services/life-insurance' : link === 'Health Insurance' ? '/health-insurance-tamil-nadu' : link === 'General Insurance' ? '/general-insurance-tamil-nadu' : link === 'High-Interest Savings' ? '/high-interest-savings-plans-tamil-nadu' : link === 'Investment Solutions' ? '/investment-solutions-tamil-nadu' : '#'} className="text-[#475569] font-bold text-[14px] hover:text-sky-500 transition-colors">{link}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="#" className="w-full py-5 cursor-pointer border-t border-gray-100 mb-2"><span className="text-[#001D3D] font-black text-[15px]">Get In Touch</span></Link>
          </div>
        )}
      </div>

      {/* ══════════ HERO SLIDER ══════════ */}
      <section className="relative w-full pt-8 pb-16 lg:pt-10 lg:pb-24 bg-[#001D3D] overflow-hidden flex items-center select-none text-white">
        {/* Background Image - Clear on the right side */}
        <div className="absolute inset-0 bg-cover bg-right lg:bg-center opacity-40 lg:opacity-100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80')" }}></div>
        
        {/* Mobile Gradient (Dark everywhere for text readability) */}
        <div className="absolute inset-0 bg-[#001D3D]/80 lg:hidden"></div>
        
        {/* Desktop Gradient (Solid dark left, fading to transparent right) */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#001D3D] from-35% via-[#001D3D]/80 via-45% to-transparent to-60%"></div>

        <div className="max-w-[1400px] w-full mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#001D3D]/50 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
              <Building2 className="w-4 h-4" />
              <span>About SGNL</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
              Building Financial Confidence Through <span className="text-sky-400">Smarter Choices</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-8">
              Sarathi Germinate Nidhi Limited (SGNL) is a Tamil Nadu-based Nidhi company founded in 2017, built on a simple purpose — helping people take charge of their financial future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setIsPopupOpen(true)} className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-lg font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20">
                Explore Our Schemes <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => setIsPopupOpen(true)} className="bg-white hover:bg-sky-50 text-[#001D3D] border border-transparent hover:border-sky-200 px-6 py-3 rounded-lg font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/5">
                <PhoneCall className="w-4 h-4" /> Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ INTRO & STORY ══════════ */}
      <section className="py-20 lg:py-28 relative bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-100 to-white rounded-3xl -z-10 transform -rotate-3" />
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" alt="SGNL Team" className="rounded-3xl shadow-2xl object-cover h-[500px] w-full" />
              <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-500">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-[#001D3D]">500+</h4>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Happy Members</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-black text-[#001D3D] mb-6">From a Single Vision to a Growing Financial Partner</h2>
                <div className="space-y-6 text-[17px] text-slate-600 leading-relaxed">
                  <p>
                    What began in 2017 as a small, member-focused Nidhi company has grown into a dependable financial partner for families and businesses across Tamil Nadu.
                  </p>
                  <p>
                    From individual savers to growing organizations, we design financial solutions around real-life needs rather than one-size-fits-all approaches. Today, SGNL has grown into a network of 500+ members across our offices in Hosur, Chennai, and Coimbatore.
                  </p>
                  <p>
                    At SGNL, that journey is rooted in a simple belief — when people save confidently, invest wisely, and plan, stronger families build stronger communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SARATHI GROUPS ══════════ */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="rounded-[32px] border border-sky-200/60 bg-white overflow-hidden flex flex-col lg:flex-row relative shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            
            {/* Left Image Side */}
            <div className="lg:w-2/5 relative min-h-[350px] lg:min-h-[500px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center"></div>
              {/* Gradient to fade into white on the right (desktop) or bottom (mobile) */}
              <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-white/40 to-white"></div>
            </div>

            {/* Right Content Side */}
            <div className="lg:w-3/5 p-8 lg:p-16 xl:px-20 flex flex-col justify-center items-center text-center bg-white relative z-10">
              
              {/* Faint background icon matching the reference style */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-50 opacity-60 z-0 select-none pointer-events-none">
                <Building2 className="w-[300px] h-[300px]" strokeWidth={1} />
              </div>

              <div className="relative z-10 max-w-2xl">
                <h3 className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-4">Part of Sarathi Groups</h3>
                <h2 className="text-3xl lg:text-[42px] font-black text-[#001D3D] mb-8 leading-[1.15]">
                  From Banking to Builders, Health to Education — <br/>
                  <span className="text-sky-500">One Promise to Uplift Lives</span>
                </h2>
                
                <p className="text-[17px] text-slate-600 font-medium leading-relaxed mb-6">
                  SGNL is part of Sarathi Groups (SG), a Hosur-based business conglomerate spanning six sectors — banking and financial services, education, healthcare, construction, enterprise training, and social welfare.
                </p>
                <p className="text-[17px] text-slate-600 font-medium leading-relaxed">
                  Built on the core values of <strong>Discipline, Dedication, and Determination</strong>, SG has grown from a single vision into a multi-sector group committed to sustainable and ethical growth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════ MISSION ══════════ */}
      <section className="py-20 lg:py-28 bg-[#001D3D] relative text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-500/20 text-sky-400 mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-black mb-6">Our Mission</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Our mission at Sarathi Germinate Nidhi Limited (SGNL) is to make trusted, transparent, and affordable financial services — including low-interest gold loans, personal loans, fixed deposit schemes, and disciplined savings plans — accessible to every family and small business across Tamil Nadu.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              We believe financial growth should be simple, not stressful. As a registered Nidhi company operating in line with RBI guidelines, SGNL is committed to helping members save smarter, borrow responsibly, and plan confidently for their future — one transparent transaction at a time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionPillars.map((pillar, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold mb-6">{i + 1}</div>
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ VISION ══════════ */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-100 text-sky-500 mb-6">
              <Sparkles className="w-8 h-8" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-[#001D3D] mb-6">Our Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Our vision is to become Tamil Nadu's most trusted Nidhi company, helping every family and small business save, borrow, and build long-term financial security through simple, transparent, and accessible services.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Since 2020, SGNL has worked to make saving, borrowing, and financial planning easier for people across Tamil Nadu. As we grow, we aim to reach more families and small businesses — combining honest, trust-based service with easy-to-use digital tools, so every member can plan their future with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {visionPillars.map((pillar, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-sky-500 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#001D3D] mb-2">{pillar.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHAT SETS SGNL APART ══════════ */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-[#001D3D] mb-4">What Sets SGNL Apart</h2>
            <p className="text-lg text-slate-600">Built Around Trust, Transparency & Your Financial Goals</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {differentiators.map((diff, i) => (
              <div key={i} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-14 h-14 bg-sky-50 text-sky-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <diff.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#001D3D] mb-4">{diff.title}</h3>
                <p className="text-slate-600 leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHO WE SERVE ══════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1">
              <h2 className="text-3xl lg:text-4xl font-black text-[#001D3D] mb-8">Who We Serve</h2>
              <h3 className="text-xl font-bold text-sky-500 mb-6">Financial Solutions for Different Stages of Life</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Whether you're a salaried professional saving towards a home, a small business owner planning your next stage of growth, or a family preparing for the future, SGNL aims to meet you where you are.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our approach is simple: understand your priorities first, then help you explore suitable financial solutions.
              </p>
              <p className="text-xl font-bold text-[#001D3D]">
                We believe financial planning should be about finding the right approach for your needs — not simply pushing a product.
              </p>
            </div>
            <div className="order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-bl from-sky-50 to-white rounded-3xl -z-10 transform rotate-3" />
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" alt="Who We Serve" className="rounded-3xl shadow-2xl object-cover h-[500px] w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA SECTION ══════════ */}
      <section className="py-20 bg-sky-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">Ready to Start?</h2>
          <p className="text-xl text-white/90 font-medium mb-10">Take the Next Step Towards Smarter Financial Planning</p>
          <p className="text-white mb-8 text-lg">Explore our savings and investment schemes or connect with a branch near you.<br/>Visit us at: <strong>Hosur | Chennai | Coimbatore</strong></p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setIsPopupOpen(true)} className="bg-white text-[#001D3D] px-8 py-4 rounded-2xl font-black tracking-widest uppercase text-sm hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1">
              Explore Our Schemes
            </button>
            <button onClick={() => setIsPopupOpen(true)} className="bg-[#001D3D] text-white px-8 py-4 rounded-2xl font-black tracking-widest uppercase text-sm hover:bg-slate-900 transition-all shadow-xl hover:-translate-y-1">
              Contact Us
            </button>
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
                    <li key={l}><Link href={l === 'Life Insurance' ? '/services/life-insurance' : l === 'Health Insurance' ? '/health-insurance-tamil-nadu' : l === 'General Insurance' ? '/general-insurance-tamil-nadu' : l === 'High-Interest Savings Plans' ? '/high-interest-savings-plans-tamil-nadu' : l === 'About Us' ? '/about-us' : '#'} className="text-white text-[15px] hover:text-sky-500 font-medium transition-colors">{l}</Link></li>
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
