'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Building2, Users, ShieldCheck, Target, HeartHandshake,
  Clock, Star, Facebook, Twitter, Linkedin, Instagram, PhoneCall, Menu,
  ChevronDown, ArrowRight, X, Briefcase, CheckCircle2, MapPin, Sparkles, Mail, Send
} from 'lucide-react';
import ContactPopup from '../../components/ContactPopup';

export default function GetInTouchPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', altPhone: '', email: '', service: '', message: '' });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
    alert("Thank you for getting in touch! We will contact you soon.");
    setFormData({ name: '', phone: '', altPhone: '', email: '', service: '', message: '' });
  };

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
                      <Link key={item} href={item === 'Long Term Plans' ? '/long-term-plans' : item === 'Short Term Plans' ? '/short-term-plans' : '#'} className="px-8 py-2.5 text-[14px] font-bold text-[#475569] hover:text-sky-500 transition-colors">{item}</Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/get-in-touch" className="text-sky-500 transition-colors h-full flex items-center">Get In Touch</Link>
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
                  <span className={`font-black text-[15px] ${activeDropdown === item.name ? 'text-sky-500' : 'text-[#001D3D]'}`}>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180 text-sky-500' : 'text-[#001D3D]'}`} strokeWidth={2.5} />
                </div>
                {activeDropdown === item.name && (
                  <div className="flex flex-col gap-4 pb-5 pl-4">
                    {item.links.map(link => (
                      <Link key={link} href={link === 'Life Insurance' ? '/services/life-insurance' : link === 'Health Insurance' ? '/health-insurance-tamil-nadu' : link === 'General Insurance' ? '/general-insurance-tamil-nadu' : link === 'High-Interest Savings' ? '/high-interest-savings-plans-tamil-nadu' : link === 'Investment Solutions' ? '/investment-solutions-tamil-nadu' : link === 'Long Term Plans' ? '/long-term-plans' : link === 'Short Term Plans' ? '/short-term-plans' : '#'} className="font-bold text-[14px] text-[#475569] hover:text-sky-500 transition-colors">{link}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/get-in-touch" className="w-full py-5 cursor-pointer border-t border-gray-100 mb-2"><span className="text-sky-500 font-black text-[15px]">Get In Touch</span></Link>
          </div>
        )}
      </div>

      {/* ══════════ HERO BANNER ══════════ */}
      <section className="relative w-full pt-16 pb-20 lg:pt-20 lg:pb-32 bg-[#001D3D] overflow-hidden flex items-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#001D3D] to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-4 lg:px-8 relative z-20 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm mx-auto lg:mx-0">
            <Mail className="w-4 h-4" /> Reach Out To Us
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Get In <span className="text-sky-500">Touch</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
            Have questions about our savings schemes, loans, or insurance plans? Our team is here to help you make informed financial decisions.
          </p>
        </div>
      </section>

      {/* ══════════ CONTACT DETAILS & FORM SECTION ══════════ */}
      <section className="py-16 lg:py-24 bg-white relative -mt-10 rounded-t-[40px] z-30">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Side: Contact Details */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#001D3D] mb-6">Let's Connect</h2>
              <p className="text-lg text-slate-600 mb-10">
                Whether you want to open a savings account or inquire about our services, we're ready to assist you every step of the way.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-sm shrink-0">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#001D3D] mb-2">Head Quarters</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      No 37, 1st floor, Yesotha plaza,<br/>inner ring road, Sivam Nagar,<br/>Hosur, TAMIL NADU - 635126
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-sm shrink-0">
                    <PhoneCall className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#001D3D] mb-2">Phone</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      <a href="tel:+918524917170" className="hover:text-sky-500 transition-colors">+91-85249-17170</a><br/>
                      <span className="text-sm text-slate-500">Mon - Sat: 9am - 5pm</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-sm shrink-0">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#001D3D] mb-2">Email</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      <a href="mailto:info@sgsgnl.com" className="hover:text-sky-500 transition-colors">info@sgsgnl.com</a><br/>
                      <a href="mailto:support@sgsgnl.com" className="hover:text-sky-500 transition-colors">support@sgsgnl.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-[#001D3D] rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 rounded-bl-full pointer-events-none" />
                <h3 className="text-white text-xl font-black mb-3 relative z-10">Visit Our Branch</h3>
                <p className="text-white/80 font-medium relative z-10">
                  Our financial advisors are available for in-person consultations during business hours. Drop by for personalized assistance.
                </p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-slate-50 p-8 lg:p-12 rounded-[40px] shadow-sm border border-gray-100">
              <h2 className="text-2xl lg:text-3xl font-black text-[#001D3D] mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#001D3D] mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white px-5 py-4 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all outline-none text-slate-700 font-medium"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-[#001D3D] mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white px-5 py-4 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all outline-none text-slate-700 font-medium"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="altPhone" className="block text-sm font-bold text-[#001D3D] mb-2">Alternative Number (Optional)</label>
                    <input 
                      type="tel" 
                      id="altPhone" 
                      value={formData.altPhone}
                      onChange={(e) => setFormData({...formData, altPhone: e.target.value})}
                      className="w-full bg-white px-5 py-4 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all outline-none text-slate-700 font-medium"
                      placeholder="Enter alternative number"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#001D3D] mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white px-5 py-4 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all outline-none text-slate-700 font-medium"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-[#001D3D] mb-2">Interested Service</label>
                    <div className="relative">
                      <select 
                        id="service" 
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full bg-white px-5 py-4 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all outline-none text-slate-700 font-medium appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="Short Term Plans">Short Term Plans</option>
                        <option value="Long Term Plans">Long Term Plans</option>
                        <option value="Life Insurance">Life Insurance</option>
                        <option value="Health Insurance">Health Insurance</option>
                        <option value="General Insurance">General Insurance</option>
                        <option value="High-Interest Savings">High-Interest Savings</option>
                        <option value="Investment Solutions">Investment Solutions</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#001D3D] mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white px-5 py-4 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all outline-none text-slate-700 font-medium resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-sky-500 text-white px-8 py-5 rounded-2xl font-black tracking-widest uppercase text-sm hover:bg-[#001D3D] transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group"
                >
                  Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════ MAP SECTION ══════════ */}
      <section className="w-full h-[500px] relative bg-slate-200 border-t border-b border-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15580.490196877017!2d77.81845185!3d12.7483861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac16e8b4e6d421%3A0xe96c4620f4c84a56!2sHosur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714578165682!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale-[0.2] contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        ></iframe>
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
                    <li key={l}><Link href={l === 'Life Insurance' ? '/services/life-insurance' : l === 'Health Insurance' ? '/health-insurance-tamil-nadu' : l === 'General Insurance' ? '/general-insurance-tamil-nadu' : l === 'High-Interest Savings Plans' ? '/high-interest-savings-plans-tamil-nadu' : l === 'About Us' ? '/about-us' : l === 'Get In Touch' ? '/get-in-touch' : '#'} className="text-white text-[15px] hover:text-sky-500 font-medium transition-colors">{l}</Link></li>
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
