'use client';

import {
  ArrowRight, Shield, Zap, Search, ChevronDown,
  Building2, Landmark, Coins, PieChart,
  ShieldCheck, Headphones, Menu, X, MapPin,
  Download, Briefcase, HeartHandshake, Users,
  User, CreditCard, Wallet, Phone, Star,
  CheckCircle2, ChevronLeft, ChevronRight, TrendingUp,
  Calculator, Clock, BadgeCheck, Globe2, Bell, CreditCard as CreditCardIcon, MapPin as MapPinIcon, Headset
} from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

/* ─────────────────────────── DATA ─────────────────────────── */

const navItems = [
  {
    name: 'Savings',
    items: ['Recurring Deposits', 'Fixed Deposits', 'Prime Wealth Gain', 'Student Savings Plan'],
  },
  {
    name: 'Investments',
    items: ['Mutual Funds', 'PMS & AIF', 'Demat Account', 'Elite Wealth Gain', 'Elite Wealth Gain Plus'],
  },
  {
    name: 'Insurance',
    items: ['Life Insurance', 'Health Insurance', 'General Insurance'],
  },
  { name: 'About Us', items: ['Company Overview', 'Mission & Vision', 'Branch Network', 'Careers'] },
];

const heroSlides = [
  {
    tag: '✦ Sarathi Germinate Nidhi Limited',
    headline: 'We Rise By\nRising Others',
    highlight: 'Rising Others',
    sub: 'Savings · Investments · Insurance · Loans — your complete financial partner across Tamil Nadu.',
    cta: 'Explore Plans',
    ctaSecondary: 'Our Branches',
    image: 'https://images.pexels.com/photos/10958528/pexels-photo-10958528.jpeg',
    badge: 'Nidhi Company · Est. 2020',
  },
  {
    tag: '✦ Fixed Deposits & Savings Plans',
    headline: 'Let Your Money Grow\nwith Safety',
    highlight: 'with Safety',
    sub: 'Earn up to 12% p.a. with our Elite Wealth Gain plans. Transparent returns, no hidden charges.',
    cta: 'View FD Plans',
    ctaSecondary: 'Calculate Returns',
    image: 'https://images.pexels.com/photos/7260884/pexels-photo-7260884.jpeg',
    badge: 'Up to 12% p.a.',
  },
  {
    tag: '✦ Discipline · Dedication · Determination',
    headline: 'We Value You\n& Your Money',
    highlight: '& Your Money',
    sub: 'Registered & regulated under the RBA. Your trust is the foundation of everything we do.',
    cta: 'Meet Our Team',
    ctaSecondary: 'Company Overview',
    image: 'https://images.pexels.com/photos/6627897/pexels-photo-6627897.jpeg',
    badge: 'RBA Registered',
  },
];

const quickServices = [
  { icon: Landmark,  name: 'Recurring Deposit', grad: 'from-orange-500 to-orange-400', bg: 'bg-orange-50', text: 'text-orange-700' },
  { icon: Coins,     name: 'Fixed Deposit',      grad: 'from-sky-500 to-sky-400',       bg: 'bg-sky-50',    text: 'text-sky-700' },
  { icon: Wallet,    name: 'Life Insurance',     grad: 'from-emerald-500 to-emerald-400', bg: 'bg-emerald-50', text: 'text-emerald-700' },
  { icon: ShieldCheck,name:'Health Insurance',   grad: 'from-rose-500 to-rose-400',       bg: 'bg-rose-50',    text: 'text-rose-700' },
  { icon: PieChart,  name: 'Mutual Funds',       grad: 'from-blue-500 to-blue-400',       bg: 'bg-blue-50',    text: 'text-blue-700' },
  { icon: TrendingUp,name: 'PMS & AIF',          grad: 'from-indigo-500 to-indigo-400', bg: 'bg-indigo-50', text: 'text-indigo-700' },
  { icon: Briefcase, name: 'Demat Account',      grad: 'from-purple-500 to-purple-400', bg: 'bg-purple-50', text: 'text-purple-700' },
  { icon: Building2, name: 'General Insurance',  grad: 'from-amber-500 to-amber-400',   bg: 'bg-amber-50',  text: 'text-amber-700' },
];

const trustFeatures = [
  { icon: ShieldCheck, label: 'RBA Registered',   desc: 'Regulated Nidhi Company under RBA Norms', color: 'bg-sky-100 text-sky-700 border-sky-200' },
  { icon: Headphones,  label: 'Customer First',   desc: 'Transparent service with ethical practices at every step', color: 'bg-sky-100 text-sky-700 border-sky-200' },
  { icon: Zap,         label: 'Quick Settlement', desc: 'Maturity & loan disbursals processed in 7–15 working days', color: 'bg-rose-100 text-rose-700 border-rose-200' },
  { icon: BadgeCheck,  label: '5 Active Branches',desc: 'Hosur · Chennai · Coimbatore · Trichy · Madurai', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
];

const loanProducts = [
  {
    title: 'Prime Wealth Gain',
    rate: '12.5% returns',
    maxAmt: '1-Year Plan',
    tenure: 'Min ₹1,000/month',
    desc: 'Invest monthly and grow your savings — ₹1,000/mo becomes ₹13,500 at maturity in just 12 months.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600&h=400',
    tag: 'Most Popular',
    tagColor: 'bg-sky-500',
  },
  {
    title: 'Elite Wealth Gain',
    rate: '12% p.a.',
    maxAmt: '₹30K – 1 Crore',
    tenure: '6 Months – 5 Years',
    desc: 'Term deposit plan with monthly interest payouts. ₹1 Lakh earns ₹1,000 every month, ₹1.12 Lakh at maturity.',
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=600&h=400',
    tag: 'High Returns',
    tagColor: 'bg-emerald-600',
  },
  {
    title: 'Vikas Money Savings',
    rate: '12.5% + Bonus',
    maxAmt: '3 or 5-Year Plan',
    tenure: 'Monthly / Quarterly',
    desc: 'Long-term savings with a bonus of ₹250–₹300/year per ₹1,000 premium. Flexible payment frequency.',
    image: 'https://images.pexels.com/photos/31513716/pexels-photo-31513716.jpeg',
    tag: 'With Bonus',
    tagColor: 'bg-blue-600',
  },
];

const promoBanners = [
  {
    label: 'Savings Plan',
    title: 'Student Savings\nPlan',
    sub: '₹500/mo → ₹3,250 in 6 months',
    cta: 'Start Saving',
    bg: 'bg-sky-500',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400&h=500',
  },
  {
    label: 'Elite Wealth Gain Plus',
    title: 'Earn 15% p.a.\nGuaranteed',
    sub: '₹50,000 → ₹57,500 in 1 year',
    cta: 'Invest Now',
    bg: 'bg-[#001D3D]',
    img: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=400&h=500',
  },
  {
    label: 'Ecocial Savings Plan',
    title: 'Pay Less,\nEarn More',
    sub: '₹5,000 investment → ₹65,000',
    cta: 'Know More',
    bg: 'bg-emerald-700',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400&h=500',
  },
  {
    label: 'Liability to Asset',
    title: 'Turn Your Loan\nInto Income',
    sub: 'Monthly returns to offset your EMI',
    cta: 'Learn More',
    bg: 'bg-indigo-700',
    img: 'https://images.unsplash.com/photo-1573163281530-5be9c89b9978?auto=format&fit=crop&q=80&w=400&h=500',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Small Business Owner, Chennai',
    text: 'The gold loan process was incredibly smooth. I got the money in my account within 2 hours! SGNL has been a lifesaver for my business.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=80&h=80',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Retired Teacher, Coimbatore',
    text: 'I have been investing in their Fixed Deposits for 3 years. The returns are excellent and the staff is always helpful and transparent.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80&h=80',
    rating: 5,
  },
  {
    name: 'Lakshmi Devi',
    role: 'Women Entrepreneur, Madurai',
    text: 'The women\'s loan scheme helped me start my tailoring unit. The team guided me through every step with patience and professionalism.',
    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=80&h=80',
    rating: 5,
  },
  {
    name: 'Anand Selvam',
    role: 'Farmer, Trichy',
    text: 'Applied for a personal loan online and it got approved within the same day. Interest rates are the best I have found in my area.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80&h=80',
    rating: 5,
  },
];

const branches = [
  { city: 'Hosur',      addr: 'Active Branch', img: 'https://img.staticmb.com/mbcontent/images/crop/uploads/2022/12/hosur-tamil-nadu_0_1200.jpg.webp' },
  { city: 'Chennai',    addr: 'Active Branch', img: 'https://media.assettype.com/outlooktraveller/2025-09-08/b9f3c0e9/Discover-Chennai-Studio-A-12-1.jpg' },
  { city: 'Coimbatore',      addr: 'Active Branch', img: 'https://s3.india.com/wp-content/uploads/2025/07/Coimbatore-seasonal-guide.jpg?impolicy=Medium_Widthonly&w=350&h=263' },
  { city: 'Trichy',     addr: 'Active Branch', img: 'https://www.iimtrichy.ac.in/yuva/assets/images/istockphoto-1326914115-612x612.jpg' },
  { city: 'Madurai',    addr: 'Active Branch', img: 'https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Madurai_tv_destination_img_1_l_542_967.jpg' },
];

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export default function Home() {
  const [isScrolled,      setIsScrolled]      = useState(false);
  const [mobileOpen,      setMobileOpen]       = useState(false);
  const [currentSlide,    setCurrentSlide]     = useState(0);
  const [testimonialIdx,  setTestimonialIdx]   = useState(0);
  const [isAnimating,     setIsAnimating]      = useState(false);
  const [activeDropdown,  setActiveDropdown]   = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /* scroll & Intersection Observer */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  /* Slider Logic */
  const schemesCarouselRef = useRef<HTMLDivElement>(null);
  const scrollSchemes = (direction: 'left' | 'right') => {
    if (schemesCarouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 420;
      schemesCarouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  /* hero auto-play */
  const startTimer = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(s => (s + 1) % heroSlides.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startTimer]);

  useEffect(() => {
    console.log("SGNL Slider - Active Slide:", currentSlide);
  }, [currentSlide]);

  const goSlide = (idx: number) => {
    if (isAnimating) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsAnimating(true);
    setCurrentSlide(idx);
    setTimeout(() => setIsAnimating(false), 600);
    startTimer();
  };
  const prevSlide = () => goSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => goSlide((currentSlide + 1) % heroSlides.length);

  const slide = heroSlides[currentSlide];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">

      {/* ══════════ TOP HEADER{/* NEW HEADER - Matching Image Design */}
      <header className="bg-[#0056b3] relative z-50 shadow-lg">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-[72px]">
            
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <div className="bg-white rounded-lg p-2">
                  <Building2 className="w-8 h-8 text-[#0056b3]" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-white font-bold text-xl leading-tight">SGNL</h1>
                  <p className="text-white/80 text-xs">Financial Services</p>
                </div>
              </Link>
            </div>

            {/* Action Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="bg-[#dc3545] text-white px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-[#c82333] transition-colors shadow-md">
                <User className="w-4 h-4" />
                My Account
              </button>
              <button className="bg-[#dc3545] text-white px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-[#c82333] transition-colors shadow-md">
                <CreditCardIcon className="w-4 h-4" />
                Pre-Approved Loan
              </button>
              <button className="bg-[#dc3545] text-white px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-[#c82333] transition-colors shadow-md">
                <Wallet className="w-4 h-4" />
                Make Payment
              </button>
              <button className="bg-[#dc3545] text-white px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-[#c82333] transition-colors shadow-md">
                <MapPinIcon className="w-4 h-4" />
                Branch Locator
              </button>
              <button className="bg-[#dc3545] text-white px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-[#c82333] transition-colors shadow-md">
                <Zap className="w-4 h-4" />
                Xpress Services
              </button>
              <button className="bg-[#dc3545] text-white px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-[#c82333] transition-colors shadow-md">
                <Headset className="w-4 h-4" />
                Customer Support
              </button>
            </div>

            {/* Right Section - Notifications and Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Notification Bell */}
              <button className="relative bg-white/10 backdrop-blur-sm p-2.5 rounded-lg hover:bg-white/20 transition-colors">
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">3</span>
              </button>
              
              {/* Mobile Menu Toggle */}
              <button className="lg:hidden bg-white/10 backdrop-blur-sm p-2.5 rounded-lg hover:bg-white/20 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X className="w-6 h-6 text-white"/> : <Menu className="w-6 h-6 text-white"/>}
              </button>
            </div>
          </div>

          {/* Mobile Action Buttons */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-white/20 bg-[#0056b3]/95 py-4 px-2">
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-[#dc3545] text-white px-3 py-2.5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold hover:bg-[#c82333] transition-colors shadow-md">
                  <User className="w-4 h-4" />
                  My Account
                </button>
                <button className="bg-[#dc3545] text-white px-3 py-2.5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold hover:bg-[#c82333] transition-colors shadow-md">
                  <CreditCardIcon className="w-4 h-4" />
                  Pre-Approved
                </button>
                <button className="bg-[#dc3545] text-white px-3 py-2.5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold hover:bg-[#c82333] transition-colors shadow-md">
                  <Wallet className="w-4 h-4" />
                  Make Payment
                </button>
                <button className="bg-[#dc3545] text-white px-3 py-2.5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold hover:bg-[#c82333] transition-colors shadow-md">
                  <MapPinIcon className="w-4 h-4" />
                  Branch Locator
                </button>
                <button className="bg-[#dc3545] text-white px-3 py-2.5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold hover:bg-[#c82333] transition-colors shadow-md">
                  <Zap className="w-4 h-4" />
                  Xpress Services
                </button>
                <button className="bg-[#dc3545] text-white px-3 py-2.5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold hover:bg-[#c82333] transition-colors shadow-md">
                  <Headset className="w-4 h-4" />
                  Customer Support
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ══════════ HERO SLIDER ══════════ */}
      <section className="relative w-full h-[calc(100vh-70px)] lg:h-[calc(100vh-130px)] min-h-[500px] max-h-[850px] bg-[#001D3D] overflow-hidden flex items-center select-none">
        {/* Background Images — all stacked, opacity-controlled */}
        {heroSlides.map((s, i) => (
          <div key={i} className={`absolute top-0 right-0 w-full lg:w-[65%] h-full transition-opacity duration-1000 ease-in-out ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={s.image} alt={s.headline} className="w-full h-full object-cover lg:object-[center_right]" />
          </div>
        ))}

        {/* Navy Overlay Base */}
        <div className="absolute top-0 left-0 w-full lg:w-[60%] h-full bg-[#001D3D] hidden lg:block" style={{ clipPath: "ellipse(100% 120% at 0% 50%)", zIndex: 1 }} />
        <div className="absolute top-0 left-0 w-full h-full bg-[#001D3D]/85 lg:hidden" style={{ zIndex: 1 }} />
        
        {/* Lighter Cyan Sweep */}
        <div className="absolute top-0 left-0 w-full lg:w-[68%] h-full bg-sky-900/50 mix-blend-multiply hidden lg:block" style={{ clipPath: "ellipse(100% 100% at 0% 50%)", zIndex: 2 }} />

        {/* Content Container */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 w-full relative flex h-full items-center" style={{ zIndex: 10 }}>
          
          {/* Vertical Dots Navigation */}
          <div className="hidden lg:flex flex-col gap-8 justify-center mr-12 xl:mr-16 items-center border-l-2 border-white/10 pl-6 h-[70%]">
            <button onClick={prevSlide} className="text-white/30 hover:text-sky-500 transition-colors">
              <ChevronLeft className="w-5 h-5 rotate-90" />
            </button>
            <div className="flex flex-col gap-5">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => goSlide(i)} className={`w-3 h-3 rounded-full border-[3px] transition-all duration-300 ${i === currentSlide ? 'border-sky-500 bg-sky-500 scale-125' : 'border-white/20 bg-white/10 hover:border-sky-500'}`} />
              ))}
            </div>
            <button onClick={nextSlide} className="text-white/30 hover:text-sky-500 transition-colors">
              <ChevronRight className="w-5 h-5 rotate-90" />
            </button>
          </div>

          {/* Hero Typography — keyed for transition */}
          <div className="max-w-2xl mt-8 lg:mt-0 px-2 sm:px-4">
            <div key={`tag-${currentSlide}`} className="flex flex-wrap items-center gap-4 mb-6 lg:mb-8 animate-fade-in-up">
              <div className="bg-sky-500 text-white text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] px-4 py-2 relative shadow-[0_10px_20px_rgba(14,165,233,0.3)]">
                {slide.tag}
                <div className="absolute right-[-14px] top-0 border-y-[16px] border-l-[14px] border-y-transparent border-l-sky-500 h-full" />
              </div>
              <p className="text-white/80 font-bold text-sm md:text-base tracking-wide ml-1 drop-shadow-md">{slide.badge}</p>
            </div>

            <h1 key={`head-${currentSlide}`} className="text-[32px] sm:text-[42px] md:text-5xl lg:text-[68px] xl:text-[78px] font-black text-white leading-[1.08] tracking-tight drop-shadow-2xl mb-5 lg:mb-8 animate-fade-in-up [animation-delay:200ms] whitespace-pre-line">
              {slide.headline}
            </h1>

            <p key={`sub-${currentSlide}`} className="text-white/70 font-medium text-sm md:text-base lg:text-lg leading-relaxed mb-8 lg:mb-10 max-w-xl animate-fade-in-up [animation-delay:400ms]">
              {slide.sub}
            </p>
            
            <div key={`cta-${currentSlide}`} className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:600ms]">
              <button className="bg-sky-500 text-white px-8 lg:px-10 py-4 lg:py-5 font-black flex items-center justify-center gap-3 hover:bg-white hover:text-[#001D3D] transition-all shadow-xl shadow-sky-500/30 text-[12px] md:text-[14px] uppercase tracking-wider rounded-sm">
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5"/> {slide.cta}
              </button>
              <button className="border-2 border-white/30 text-white px-6 lg:px-8 py-4 lg:py-5 font-black flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/50 transition-all text-[12px] md:text-[14px] uppercase tracking-wider rounded-sm">
                {slide.ctaSecondary}
              </button>
            </div>
            
            {/* Mobile dots */}
            <div className="flex lg:hidden gap-3 mt-8">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => goSlide(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-sky-500 w-8' : 'bg-white/30'}`} />
              ))}
            </div>
          </div>

          {/* Floating Online Services Widget */}
          <div className="hidden xl:flex absolute bottom-6 right-8 w-[300px] bg-white shadow-xl flex-col shadow-black/10 rounded-sm overflow-hidden">
            <div className="bg-sky-500 text-white font-black text-center py-4 text-[13px] uppercase tracking-[0.2em] relative">
              Top Schemes
              <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-sky-500" />
            </div>
            <div className="flex flex-col">
              {['Prime Wealth Gain', 'Vikas Money Savings', 'Elite Wealth Gain'].map(os => (
                <button key={os} className="flex items-center justify-between px-6 py-4 border-b border-slate-100 hover:bg-slate-50 text-[#001D3D] font-black text-[14px] transition-colors group">
                  {os}
                  <div className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-sky-500 group-hover:bg-sky-50 transition-all">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-500" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-6 left-4 lg:left-8 text-white/40 font-black text-xs tracking-widest" style={{ zIndex: 10 }}>
          <span className="text-white text-lg">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="mx-2">/</span>
          <span>{String(heroSlides.length).padStart(2, '0')}</span>
        </div>
      </section>

      {/* ══════════ CTA PROMO STRIP ══════════ */}
      {/* <section className="bg-white py-6 lg:py-8 border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { title: 'Fixed Deposit', sub: 'Up to 12% p.a.', img: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=400&h=250', color: 'from-sky-500/80' },
              { title: 'Personal Loan', sub: 'Funds up to ₹5 Lakh', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400&h=250', color: 'from-[#001D3D]/80' },
              { title: 'Gold Loan', sub: 'Instant Disbursement', img: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=400&h=250', color: 'from-amber-600/80' },
              { title: 'Life Insurance', sub: '₹1 Cr Cover @ ₹500/mo', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400&h=250', color: 'from-emerald-600/80' },
            ].map((cta, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden h-[140px] sm:h-[160px] lg:h-[180px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500">
                <img src={cta.img} alt={cta.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${cta.color} via-black/30 to-transparent`} />
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 lg:p-6">
                  <h3 className="text-white font-black text-lg sm:text-xl lg:text-2xl leading-tight tracking-tight drop-shadow-lg">{cta.title}</h3>
                  <p className="text-white/80 font-bold text-xs sm:text-sm mt-1 drop-shadow-md">{cta.sub}</p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══════════ OUR SERVICES GRID (ELEGANT) ══════════ */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 text-center mb-16 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[800ms] ease-out">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600 mb-4">Banking & Investments</p>
          <h2 className="text-4xl lg:text-5xl font-black text-[#001D3D] tracking-tight">Our Premium Services</h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out delay-100">
            {quickServices.map((svc, i) => (
              <Link key={svc.name} href="#" className="group relative flex flex-col items-center p-8 lg:p-12 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:shadow-xl hover:shadow-sky-500/5 overflow-hidden">
                {/* Colorful Gradient Background (Light) */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${svc.grad} opacity-[0.08]`} />
                <div className={`absolute inset-0 ${svc.bg} opacity-30 group-hover:opacity-0 transition-opacity duration-500`} />
                
                {/* Decorative Abstract Shape */}
                <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br ${svc.grad} opacity-[0.1] group-hover:scale-150 transition-transform duration-700`} />
                
                <div className={`relative w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br ${svc.grad} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <svc.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                </div>
                
                <h3 className={`relative text-xl lg:text-2xl font-black text-[#001D3D] text-center mb-4 tracking-tight group-hover:scale-105 transition-transform duration-300`}>{svc.name}</h3>
                
                <div className="relative flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-sky-600 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Subtle Bottom Border Accent */}
                <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${svc.grad} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BEAUTIFUL SCHEMES CAROUSEL ══════════ */}
      <section className="bg-slate-50 py-20 lg:py-28 border-b border-slate-100 shadow-sm overflow-hidden relative" style={{scrollBehavior: 'smooth'}}>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[800ms] ease-out">
          <div>
             <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600 mb-4 flex items-center gap-2">
               <Star className="w-4 h-4" /> Exclusive Schemes
             </p>
             <h2 className="text-4xl lg:text-5xl font-black text-[#001D3D] tracking-tight">Tailored For Your Future</h2>
          </div>
          <div className="flex gap-4">
             <button onClick={() => scrollSchemes('left')} className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all text-slate-400 bg-white z-20 cursor-pointer">
               <ChevronLeft className="w-6 h-6" />
             </button>
             <button onClick={() => scrollSchemes('right')} className="w-12 h-12 rounded-full border-2 border-[#001D3D] bg-[#001D3D] flex items-center justify-center hover:border-[#001D3D] hover:bg-transparent hover:text-[#001D3D] text-white transition-all z-20 cursor-pointer">
               <ChevronRight className="w-6 h-6" />
             </button>
          </div>
        </div>
        
        {/* Carousel Track */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out delay-100">
          <div ref={schemesCarouselRef} className="flex overflow-x-auto gap-6 lg:gap-8 pb-12 pt-4 snap-x snap-mandatory hide-scrollbars scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              { name: 'Prime Wealth Gain', cat: 'Investment', img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800' },
              { name: 'Students Savings Plan', cat: 'Education', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800' },
              { name: 'Vikas Money Savings', cat: 'Savings', img: 'https://images.pexels.com/photos/31513716/pexels-photo-31513716.jpeg' },
              { name: 'Ecocial Savings Plan', cat: 'Growth', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800' },
              { name: 'Elite Wealth Gain', cat: 'Wealth', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800' },
            ].map((scheme, i) => (
              <div key={scheme.name} className="relative group w-[280px] h-[340px] md:w-[320px] md:h-[380px] lg:w-[380px] lg:h-[420px] rounded-[2rem] overflow-hidden snap-center shrink-0 cursor-pointer shadow-md border border-slate-200 bg-white">
                <img src={scheme.img} alt={scheme.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1000ms] ease-out" />
                
                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D] via-[#001D3D]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-sky-500 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(14,165,233,0.3)] mb-4 lg:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-black text-2xl lg:text-3xl text-white drop-shadow-lg mb-3 leading-tight font-sans tracking-tight">{scheme.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sky-400 font-black text-[10px] lg:text-[11px] uppercase tracking-widest bg-sky-500/10 px-3 py-1.5 rounded-full border border-sky-400/20 backdrop-blur-md relative overflow-hidden">
                      {scheme.cat}
                      <span className="absolute inset-0 bg-white/20 w-[100%] -translate-x-[150%] skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TRUST FEATURES ══════════ */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#001D3D]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D] via-[#001D3D]/80 to-transparent" />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[800ms] ease-out">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-500 mb-4">Our Guarantee</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">Why SGNL is the Right Choice</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out delay-100">
            {trustFeatures.map((f, i) => (
              <div key={i} className={`flex flex-col items-center text-center p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="w-20 h-20 rounded-3xl bg-sky-500 flex items-center justify-center mb-6 shadow-lg border border-sky-400">
                  <f.icon className="w-10 h-10 text-[#001D3D]" />
                </div>
                <p className="font-black text-xl lg:text-2xl text-white leading-tight mb-3 tracking-tight">{f.label}</p>
                <p className="text-base font-medium text-white/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ OUR CONCEPTS ══════════ */}
      
      {/* ══════════ OUR SOLUTIONS (ENHANCED PREMIUM) ══════════ */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
        
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[800ms] ease-out">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600 mb-4 bg-sky-50 w-fit px-4 py-1.5 rounded-full">Our Superstar Products</p>
              <h2 className="text-4xl lg:text-6xl font-black text-[#001D3D] tracking-tight leading-[1.1]">The Smarter Way to <span className="text-sky-500">Grow Your Wealth</span></h2>
            </div>
            <Link href="#" className="flex items-center gap-3 text-lg font-black text-[#001D3D] hover:text-sky-600 transition-all group pb-2 border-b-2 border-transparent hover:border-sky-500">
              Explore All Products <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out delay-100">
            {loanProducts.map((p, i) => (
              <div key={i} className="group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-700 flex flex-col h-full hover:-translate-y-3">
                {/* Header with Float Image */}
                <div className="relative h-64 overflow-hidden rounded-t-[2.5rem]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D]/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Tag */}
                  <div className={`absolute top-6 left-6 px-5 py-2 ${p.tagColor} text-white text-[11px] font-black rounded-full uppercase tracking-widest shadow-xl flex items-center gap-2`}>
                    <Star className="w-3.5 h-3.5 fill-current" /> {p.tag}
                  </div>
                  
                  {/* Rate Badge */}
                  <div className="absolute bottom-6 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg">
                    <p className="text-[#001D3D] font-black text-2xl lg:text-3xl tracking-tight">{p.rate}</p>
                    <p className="text-slate-500 font-bold text-[10px] uppercase tracking-wider">Estimated Returns</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  <h3 className="text-2xl lg:text-3xl font-black text-[#001D3D] mb-4 tracking-tight group-hover:text-sky-600 transition-colors">{p.title}</h3>
                  <p className="text-base text-slate-500 leading-relaxed mb-8 flex-1 font-medium">{p.desc}</p>

                  <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 group-hover:bg-sky-50 group-hover:border-sky-100 transition-colors">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                      <p className="text-[#001D3D] font-black text-sm">{p.tenure || 'Flexible'}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Min Investment</p>
                      <p className="text-[#001D3D] font-black text-sm">{p.maxAmt}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <button className="flex-1 bg-[#001D3D] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-sky-500 transition-all shadow-lg hover:shadow-sky-500/30 flex items-center justify-center gap-2">
                       Apply Now <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="flex-[0.7] border-2 border-slate-100 text-[#001D3D] py-5 rounded-2xl font-black text-sm uppercase tracking-wider hover:border-sky-500 hover:text-sky-600 transition-all">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ══════════ BRANCH NETWORK ══════════ */}
      <section className="py-24 lg:py-32 bg-[#001D3D] relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #F59E0B 0%, transparent 40%)' }} />

        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-500 mb-4">Our Network</p>
              <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">Our Branches Across Tamil Nadu</h2>
            </div>
            <div className="md:text-right">
              <p className="text-sm text-white/50 font-bold uppercase tracking-wider mb-3">Expanding Soon</p>
              <p className="text-sm text-[#001D3D] font-black bg-white px-8 py-4 rounded-2xl shadow-xl inline-block border-[3px] border-sky-500 tracking-wide">
                Vellore · Salem · Tirupur · Erode
              </p>
            </div>
          </div>

          {/* Interactive Expanding Gallery */}
          <div className="flex flex-col lg:flex-row gap-4 h-[800px] lg:h-[650px] w-full">
            {branches.map((b, i) => (
              <div 
                key={i} 
                className="relative rounded-[2.5rem] overflow-hidden group flex-1 hover:flex-[3] transition-all duration-700 ease-in-out cursor-pointer border border-white/5 shadow-xl"
              >
                {/* Background Image */}
                <img 
                  src={b.img} 
                  alt={b.city} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out opacity-60 group-hover:opacity-100" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#001D3D]/50 to-transparent group-hover:via-transparent transition-all duration-700" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full flex flex-col justify-end h-full">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out flex flex-col gap-4">
                    <div className="w-16 h-16 bg-sky-500 rounded-3xl flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 delay-100 border-2 border-white/20">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-white text-3xl lg:text-5xl tracking-tight mb-2 whitespace-nowrap drop-shadow-lg">
                        {b.city}
                      </h3>
                      <div className="h-0 overflow-hidden group-hover:h-8 transition-all duration-500 ease-out delay-150">
                        <p className="text-sky-400 font-black text-sm lg:text-base uppercase tracking-[0.25em] drop-shadow-md">
                          {b.addr}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COMPANY OVERVIEW ══════════ */}

      {/* ══════════ EMI CALCULATOR CTA ══════════ */}
      <section className="py-14 bg-sky-500">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-black text-[#001D3D] leading-tight">Calculate Your EMI in Seconds</h2>
              <p className="text-[#001D3D]/70 mt-2 font-medium text-sm max-w-md">
                Find out your monthly instalment amount with our free online EMI calculator before you apply.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="flex items-center gap-2 px-8 py-4 bg-[#001D3D] text-white font-black rounded-xl hover:bg-slate-800 transition-all text-sm shadow-xl">
                <Calculator className="w-5 h-5" /> EMI Calculator
              </button>
              <button className="flex items-center gap-2 px-8 py-4 border-2 border-[#001D3D] text-[#001D3D] font-black rounded-xl hover:bg-[#001D3D] hover:text-white transition-all text-sm">
                <Phone className="w-5 h-5" /> Call Us Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="py-24 lg:py-32 relative bg-slate-50 overflow-hidden">
        {/* Decorative Image background in a corner */}
        <div className="absolute top-0 right-0 w-1/3 h-full mix-blend-multiply opacity-30 pointer-events-none hidden lg:block">
           <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover rounded-bl-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            
            <div className="lg:w-1/3 space-y-8">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600 mb-4">Testimonials</p>
                <h2 className="text-4xl lg:text-5xl font-black text-[#001D3D] leading-tight">What Our Members Say</h2>
              </div>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">Join thousands of satisfied members who have secured their financial future with Sarathi Germinate Nidhi Limited. Your trust is our greatest asset.</p>
              <button className="px-8 py-4 bg-white border-2 border-slate-200 text-[#001D3D] font-black rounded-xl hover:border-sky-500 hover:text-sky-600 transition-colors shadow-sm">
                Read All Reviews
              </button>
            </div>

            {/* Testimonial cards */}
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-100 shadow-lg shadow-slate-200/30 rounded-[2.5rem] p-8 sm:p-10 flex flex-col gap-6 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex gap-1">
                    {Array(t.rating).fill(0).map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-sky-400 text-sky-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed flex-1 text-lg">"{t.text}"</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-4 border-sky-50 shadow-sm" />
                    <div>
                      <p className="font-black text-[#001D3D] text-[17px]">{t.name}</p>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════ DOWNLOAD APP ══════════ */}
      

      {/* ══════════ PARTNERS ══════════ */}
      

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-[#001D3D] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Top grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-5">
              <Link href="/" className="flex items-center gap-3">
                <img src="logo.png" alt="SGNL Logo" className="h-20 w-auto object-contain bg-white rounded-2xl p-2" />
              </Link>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                A trusted Nidhi Company dedicated to empowering communities through ethical savings, low-interest loans, and transparent financial services.
              </p>
              <div className="flex items-center gap-3">
                {['f', 'in', 'tw', 'ig'].map(s => (
                  <Link key={s} href="#" className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 hover:bg-sky-500 hover:border-sky-500 flex items-center justify-center text-white/50 hover:text-white text-xs font-black transition-all">
                    {s}
                  </Link>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { head: 'Our Schemes', links: ['Prime Wealth Gain', 'Student Savings Plan', 'Vikas Money Savings', 'Ecocial Savings Plan', 'Elite Wealth Gain'] },
              { head: 'Services',    links: ['Recurring Deposits', 'Fixed Deposits', 'Life Insurance', 'Mutual Funds', 'Demat Account'] },
              { head: 'Company',     links: ['About Us', 'Our Branches', 'Fair Practice Code', 'Contact Us'] },
            ].map(col => (
              <div key={col.head}>
                <p className="text-white font-black text-xs uppercase tracking-widest mb-5">{col.head}</p>
                <ul className="space-y-3">
                  {col.links.map(l => (
                    <li key={l}><Link href="#" className="text-white/50 text-sm hover:text-sky-400 font-medium transition-colors">{l}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs font-bold uppercase tracking-wider">
              © 2026 Sarathi Germinate Nidhi Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-[11px] font-bold uppercase tracking-wider text-white/30">
              {['Privacy Policy', 'Terms of Service', 'Fair Practice Code', 'Sitemap'].map(l => (
                <Link key={l} href="#" className="hover:text-sky-400 transition-colors">{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
