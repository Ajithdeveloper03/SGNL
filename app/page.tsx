'use client';

import {
  ArrowRight, Shield, Zap, Search, ChevronDown,
  Building2, Landmark, Coins, PieChart,
  ShieldCheck, Headphones, Menu, X, MapPin,
  Download, Briefcase, HeartHandshake, Users,
  User, CreditCard, Wallet, Phone, Star,
  CheckCircle2, ChevronLeft, ChevronRight, TrendingUp,
  Calculator, Clock, BadgeCheck, Globe2, Bell, Headset
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
    headline: 'Empowering your finances,\none smart step at a time.',
    highlight: 'one smart step at a time.',
    sub: 'Savings · Investments · Insurance · Loans — your complete financial partner across Tamil Nadu.',
    cta: 'Explore Plans',
    ctaSecondary: 'Our Branches',
    image: 'https://images.pexels.com/photos/10958528/pexels-photo-10958528.jpeg',
    badge: 'Nidhi Company · Est. 2020',
  },
  {
    tag: '✦ Fixed Deposits & Savings Plans',
    headline: 'Make your next move\nyour smartest move.',
    highlight: 'your smartest move.',
    sub: 'Earn up to 12% p.a. with our Elite Wealth Gain plans. Transparent returns, no hidden charges.',
    cta: 'View FD Plans',
    ctaSecondary: 'Calculate Returns',
    image: 'https://images.pexels.com/photos/7260884/pexels-photo-7260884.jpeg',
    badge: 'Up to 12% p.a.',
  },
];

const quickServices = [
  { icon: Landmark, name: 'Recurring Deposit', grad: 'from-orange-500 to-orange-400', bg: 'bg-orange-50', text: 'text-orange-700' },
  { icon: Coins, name: 'Fixed Deposit', grad: 'from-sky-500 to-sky-400', bg: 'bg-sky-50', text: 'text-sky-700' },
  { icon: Wallet, name: 'Life Insurance', grad: 'from-emerald-500 to-emerald-400', bg: 'bg-emerald-50', text: 'text-emerald-700' },
  { icon: ShieldCheck, name: 'Health Insurance', grad: 'from-rose-500 to-rose-400', bg: 'bg-rose-50', text: 'text-rose-700' },
  { icon: PieChart, name: 'Mutual Funds', grad: 'from-blue-500 to-blue-400', bg: 'bg-blue-50', text: 'text-blue-700' },
  { icon: TrendingUp, name: 'PMS & AIF', grad: 'from-indigo-500 to-indigo-400', bg: 'bg-indigo-50', text: 'text-indigo-700' },
  { icon: Briefcase, name: 'Demat Account', grad: 'from-purple-500 to-purple-400', bg: 'bg-purple-50', text: 'text-purple-700' },
  { icon: Building2, name: 'General Insurance', grad: 'from-amber-500 to-amber-400', bg: 'bg-amber-50', text: 'text-amber-700' },
];

const whyChooseUsData = [
  { icon: ShieldCheck, name: 'Regulated & Trusted', desc: 'We operate under the guidelines of the Reserve Bank of India (RBI), ensuring full compliance, safety, and accountability.', grad: 'from-sky-500 to-sky-400', bg: 'bg-sky-50', text: 'text-sky-700' },
  { icon: HeartHandshake, name: 'Customer-Centric Approach', desc: 'Your goals are our priority. We offer tailored financial solutions that match your unique needs — no one-size-fits-all advice.', grad: 'from-emerald-500 to-emerald-400', bg: 'bg-emerald-50', text: 'text-emerald-700' },
  { icon: TrendingUp, name: 'Competitive Interest Rates', desc: 'Maximize your savings and grow your wealth with our high-return Fixed Deposits and investment options.', grad: 'from-violet-500 to-violet-400', bg: 'bg-violet-50', text: 'text-violet-700' },
  { icon: Zap, name: 'Simple & Transparent', desc: 'We make banking clear and understandable — no jargon, no hidden terms, just honest financial support.', grad: 'from-orange-500 to-orange-400', bg: 'bg-orange-50', text: 'text-orange-700' },
  { icon: BadgeCheck, name: 'Integrity & Professionalism', desc: 'Our team is committed to ethical practices, professional service, and long-term client relationships built on trust.', grad: 'from-rose-500 to-rose-400', bg: 'bg-rose-50', text: 'text-rose-700' },
];

const trustFeatures = [
  { icon: ShieldCheck, label: 'RBA Registered', desc: 'Regulated Nidhi Company under RBA Norms', color: 'bg-sky-100 text-sky-700 border-sky-200' },
  { icon: Headphones, label: 'Customer First', desc: 'Transparent service with ethical practices at every step', color: 'bg-sky-100 text-sky-700 border-sky-200' },
  { icon: Zap, label: 'Quick Settlement', desc: 'Maturity & loan disbursals processed in 7–15 working days', color: 'bg-rose-100 text-rose-700 border-rose-200' },
  { icon: BadgeCheck, label: '5 Active Branches', desc: 'Hosur · Chennai · Coimbatore · Trichy · Madurai', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
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
  { city: 'Hosur', addr: 'Active Branch', img: 'https://img.staticmb.com/mbcontent/images/crop/uploads/2022/12/hosur-tamil-nadu_0_1200.jpg.webp' },
  { city: 'Chennai', addr: 'Active Branch', img: 'https://media.assettype.com/outlooktraveller/2025-09-08/b9f3c0e9/Discover-Chennai-Studio-A-12-1.jpg' },
  { city: 'Coimbatore', addr: 'Active Branch', img: 'https://s3.india.com/wp-content/uploads/2025/07/Coimbatore-seasonal-guide.jpg?impolicy=Medium_Widthonly&w=350&h=263' },
  { city: 'Trichy', addr: 'Active Branch', img: 'https://www.iimtrichy.ac.in/yuva/assets/images/istockphoto-1326914115-612x612.jpg' },
  { city: 'Madurai', addr: 'Active Branch', img: 'https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Madurai_tv_destination_img_1_l_542_967.jpg' },
];

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
  const carouselDirection = useRef<'left' | 'right'>('right');

  const scrollSchemes = useCallback((direction: 'left' | 'right') => {
    if (schemesCarouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 420;
      schemesCarouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (schemesCarouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = schemesCarouselRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 10 && carouselDirection.current === 'right') {
          carouselDirection.current = 'left';
        } else if (scrollLeft <= 10 && carouselDirection.current === 'left') {
          carouselDirection.current = 'right';
        }

        scrollSchemes(carouselDirection.current);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [scrollSchemes]);

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

      {/* ══════════ HEADER SECTION ══════════ */}
      <div className="w-full relative z-50 flex flex-col shadow-sm">
        {/* TOP BAR */}
        <div className="bg-[#001D3D] h-10 w-full hidden lg:flex items-center justify-center text-[10px] xl:text-[11px] font-bold text-white tracking-widest uppercase">
          <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between h-full px-4 lg:px-8">
            <div className="flex items-center h-full">
              {/* Blue slant */}
              <div className="bg-sky-500 h-full flex items-center px-6 relative z-10 cursor-pointer">
                <User className="w-3.5 h-3.5 mr-2" />
                LOOKING: PERSONAL
                <ChevronDown className="w-3.5 h-3.5 ml-2" />
                <div className="absolute top-0 -right-4 w-8 h-full bg-sky-500 transform skew-x-[30deg] -z-10" />
              </div>

              <div className="flex items-center pl-10 pr-6 gap-6 h-full">
                <button className="flex items-center gap-2 hover:text-sky-500 transition-colors">
                  <ShieldCheck className="w-4 h-4" /> LOGIN <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="w-px h-4 bg-white/20 mx-2" />
                <a href="mailto:support@sgnl.com" className="flex items-center gap-2 hover:text-sky-500 transition-colors">
                  <Phone className="w-4 h-4" /> SUPPORT@SGNL.COM
                </a>
              </div>
            </div>

            <div className="flex items-center h-full">
              <div className="flex items-center gap-6 px-6">
                <Link href="#" className="hover:text-sky-500 transition-colors">CAREERS</Link>
                <Link href="#" className="hover:text-sky-500 transition-colors">FAQ'S</Link>
                <Link href="#" className="hover:text-sky-500 transition-colors">BUSINESS</Link>
                <Link href="#" className="hover:text-sky-500 transition-colors">REWARDS</Link>
              </div>
              <button className="flex items-center gap-2 px-6 h-full border-l border-white/20 hover:bg-white/5 transition-colors">
                <Globe2 className="w-4 h-4" /> IN - EN <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <header className="bg-white w-full flex items-center justify-center border-b border-gray-100">
          <div className="max-w-[1400px] w-full mx-auto h-[85px] flex items-center justify-between px-4 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-center justify-center shrink-0">
              <img src="/sarathi/logo.png" alt="SGNL Logo" className="w-[85px] h-[85px] object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-black text-[#001D3D] h-full ml-10">
              <Link href="/" className="text-sky-500 h-full flex items-center">Home</Link>

              {/* Services */}
              <div className="relative h-full flex items-center" onMouseEnter={() => setActiveDropdown('Services')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`flex items-center gap-1.5 transition-colors h-full ${activeDropdown === 'Services' ? 'text-sky-500' : 'hover:text-sky-500'}`}>
                  Services <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Services' ? 'rotate-180 text-sky-500' : 'text-gray-400'}`} />
                </button>
                {activeDropdown === 'Services' && (
                  <div className="absolute top-[75px] left-1/2 -translate-x-1/2 bg-white rounded-[24px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] py-6 w-[240px] flex flex-col gap-1 z-50">
                    {['Recurring Deposits', 'Fixed Deposits', 'Mutual Funds', 'Life Insurance', 'Health Insurance', 'Demat Account'].map(item => (
                      <Link key={item} href="#" className="px-8 py-2.5 text-[14px] font-bold text-[#475569] hover:text-sky-500 transition-colors">{item}</Link>
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
                    {['Prime Wealth Gain', 'Elite Wealth Gain', 'Vikas Money Savings', 'Ecocial Savings Plan', 'Student Savings Plan'].map(item => (
                      <Link key={item} href="#" className="px-8 py-2.5 text-[14px] font-bold text-[#475569] hover:text-sky-500 transition-colors">{item}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About */}
              <div className="relative h-full flex items-center" onMouseEnter={() => setActiveDropdown('About')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`flex items-center gap-1.5 transition-colors h-full ${activeDropdown === 'About' ? 'text-sky-500' : 'hover:text-sky-500'}`}>
                  About <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'About' ? 'rotate-180 text-sky-500' : 'text-gray-400'}`} />
                </button>
                {activeDropdown === 'About' && (
                  <div className="absolute top-[75px] left-1/2 -translate-x-1/2 bg-white rounded-[24px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] py-6 w-[240px] flex flex-col gap-1 z-50">
                    {['Company Overview', 'Mission & Vision', 'Leadership'].map(item => (
                      <Link key={item} href="#" className="px-8 py-2.5 text-[14px] font-bold text-[#475569] hover:text-sky-500 transition-colors">{item}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Branches */}
              <div className="relative h-full flex items-center" onMouseEnter={() => setActiveDropdown('Branches')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`flex items-center gap-1.5 transition-colors h-full ${activeDropdown === 'Branches' ? 'text-sky-500' : 'hover:text-sky-500'}`}>
                  Branches <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'Branches' ? 'rotate-180 text-sky-500' : 'text-gray-400'}`} />
                </button>
                {activeDropdown === 'Branches' && (
                  <div className="absolute top-[75px] left-1/2 -translate-x-1/2 bg-white rounded-[24px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] py-6 w-[200px] flex flex-col gap-1 z-50">
                    {['Hosur', 'Chennai', 'Coimbatore', 'Trichy', 'Madurai'].map(item => (
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
            <div className="hidden lg:flex items-center h-full ml-auto">
              <button className="flex items-center gap-2 text-[12px] font-black text-gray-400 hover:text-[#001D3D] uppercase tracking-widest transition-colors mr-8 xl:mr-10">
                <Search className="w-4 h-4" /> SEARCH
              </button>

              <div className="h-8 w-px bg-gray-200" />

              <button className="flex items-center gap-3 text-[15px] font-black text-[#001D3D] hover:text-sky-500 transition-colors ml-8 xl:ml-10 mr-8 xl:mr-10">
                <Headphones className="w-5 h-5 text-sky-500" /> Support
              </button>

              <button className="bg-sky-500 text-white h-full px-8 xl:px-12 text-[14px] font-black tracking-widest uppercase flex items-center gap-3 hover:bg-[#001D3D] transition-colors">
                <ArrowRight className="w-4 h-4" /> NEW ACCOUNT
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <button className="bg-sky-500 text-white px-5 py-2 rounded-xl text-sm font-black tracking-wider hover:bg-sky-600 transition-colors uppercase">
                Apply
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
              { name: 'Services', links: ['Recurring Deposits', 'Fixed Deposits', 'Mutual Funds', 'Life Insurance', 'Health Insurance', 'Demat Account'] },
              { name: 'Schemes', links: ['Prime Wealth Gain', 'Elite Wealth Gain', 'Vikas Money Savings', 'Ecocial Savings Plan', 'Student Savings Plan'] },
              { name: 'About', links: ['Company Overview', 'Mission & Vision', 'Leadership'] },
              { name: 'Branches', links: ['Hosur', 'Chennai', 'Coimbatore', 'Trichy', 'Madurai'] }
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
                      <Link key={link} href="#" className="text-[#475569] font-bold text-[14px] hover:text-sky-500 transition-colors">
                        {link}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="w-full py-5 cursor-pointer mb-2">
              <span className="text-[#001D3D] font-black text-[15px]">Get In Touch</span>
            </div>
          </div>
        )}
      </div>

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

            <h1 key={`head-${currentSlide}`} className="text-[24px] sm:text-[32px] md:text-4xl lg:text-[48px] xl:text-[56px] font-black text-white leading-[1.08] tracking-tight drop-shadow-2xl mb-5 lg:mb-8 animate-fade-in-up [animation-delay:200ms] whitespace-pre-line">
              {slide.headline}
            </h1>

            <p key={`sub-${currentSlide}`} className="text-white/70 font-medium text-sm md:text-base lg:text-lg leading-relaxed mb-8 lg:mb-10 max-w-xl animate-fade-in-up [animation-delay:400ms]">
              {slide.sub}
            </p>

            <div key={`cta-${currentSlide}`} className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:600ms]">
              <button className="bg-sky-500 text-white px-8 lg:px-10 py-4 lg:py-5 font-black flex items-center justify-center gap-3 hover:bg-white hover:text-[#001D3D] transition-all shadow-xl shadow-sky-500/30 text-[12px] md:text-[14px] uppercase tracking-wider rounded-sm">
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" /> {slide.cta}
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

      {/* ══════════ ABOUT US ══════════ */}
      <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
            
            {/* Image Side (Left Column) */}
            <div className="w-full lg:w-1/2 relative rounded-[32px] overflow-hidden min-h-[400px] lg:min-h-[unset] shadow-2xl reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[800ms] ease-out">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="About SGNL" className="absolute inset-0 w-full h-full object-cover" />
              
              {/* Dark Gradient Overlay matching reference */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-8 lg:p-12">
                <p className="text-white/80 text-[15px] leading-relaxed font-medium mb-5 max-w-lg">
                  At SGNL, we offer a wide range of customer-focused financial services, including:
                </p>
                <div className="flex flex-col items-center gap-4 max-w-lg mt-2">
                  <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-orange-500 font-black text-lg">✓</span>
                      <span className="font-bold text-[15px] lg:text-base text-white">Savings Accounts</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-orange-500 font-black text-lg">✓</span>
                      <span className="font-bold text-[15px] lg:text-base text-white">Investment Solutions</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500 font-black text-lg">✓</span>
                    <span className="font-bold text-[15px] lg:text-base text-white">High-Interest Fixed Deposits</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side (Right Column) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-4 lg:py-8 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out delay-100">
              
              <div className="mb-8">
                <span className="bg-slate-100 text-slate-500 text-[11px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-slate-200">
                  About Us
                </span>
              </div>
              
              <h3 className="text-2xl lg:text-[28px] font-black text-[#001D3D] leading-tight mb-4 tracking-tight">
                About Sarathi Germinate Nidhi Limited (SGNL)
              </h3>
              
              <p className="text-slate-600 text-lg leading-relaxed font-medium mb-6">
                Sarathi Germinate Nidhi Limited (SGNL) is a trusted name in the banking sector, committed to creating a safe, transparent, and growth-focused financial environment. Registered under the guidelines of the Reserve Bank of India (RBI), we aim to bridge the gap between investors and individuals seeking financial security and progress.
              </p>
              
              {/* Services list moved to image overlay */}
              
              <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10">
                Our solutions are designed to be simple, accessible, and tailored to your needs—whether you’re just getting started or planning for long-term financial growth. Driven by integrity, professionalism, and transparency, we make banking easy to understand and even easier to trust.
              </p>
              
              {/* Button-like element matching the "Learn More About Us" styling from reference */}
              <div className="bg-[#1E293B] text-white px-8 py-4 rounded-full w-max text-[13px] font-bold tracking-wide shadow-lg flex items-center gap-3 hover:bg-[#001D3D] transition-colors cursor-pointer">
                SGNL – Simple Solutions, Stronger Finances <ArrowRight className="w-4 h-4" />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WHY CHOOSE US GRID (ELEGANT) ══════════ */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 text-center mb-16 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[800ms] ease-out">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600 mb-4">Why Choose Us?</p>
          <h2 className="text-3xl lg:text-4xl font-black text-[#001D3D] tracking-tight max-w-4xl mx-auto leading-tight">
            At Sarathi Germinate Nidhi Limited (SGNL), we don’t just offer financial services — we build lasting financial confidence. Here’s why individuals and investors choose us:
          </h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out delay-100">
            {whyChooseUsData.map((svc, i) => (
              <div key={svc.name} className="group relative flex flex-col items-center p-6 lg:p-8 rounded-[2rem] bg-white border border-slate-100 transition-all duration-500 hover:shadow-xl hover:shadow-sky-500/5 overflow-hidden">
                {/* Colorful Gradient Background (Light) */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${svc.grad} opacity-[0.08]`} />
                <div className={`absolute inset-0 ${svc.bg} opacity-30 group-hover:opacity-0 transition-opacity duration-500`} />

                {/* Decorative Abstract Shape */}
                <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br ${svc.grad} opacity-[0.1] group-hover:scale-150 transition-transform duration-700`} />

                <div className={`relative w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${svc.grad} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <svc.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>

                <h3 className={`relative text-lg lg:text-xl font-black text-[#001D3D] text-center mb-3 tracking-tight group-hover:scale-105 transition-transform duration-300`}>{svc.name}</h3>

                <p className="relative text-slate-500 text-[13px] lg:text-sm text-center mb-0 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {svc.desc}
                </p>

                {/* Subtle Bottom Border Accent */}
                <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${svc.grad} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BEAUTIFUL SCHEMES CAROUSEL ══════════ */}
      <section className="bg-slate-50 py-20 lg:py-28 border-b border-slate-100 shadow-sm overflow-hidden relative" style={{ scrollBehavior: 'smooth' }}>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[800ms] ease-out">
          <div className="max-w-5xl">
            <p className="text-xs lg:text-sm font-black uppercase tracking-[0.25em] text-sky-600 mb-2 flex items-center gap-2">
              <Star className="w-4 h-4" /> What We’re Offering
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#001D3D] tracking-tight mb-2">Protection Built for You, Shaped by Your Choices</h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-4xl line-clamp-2">
              At SGNL, we believe financial security should be personal, flexible, and empowering. That’s why we offer a range of customizable financial products designed to fit your goals and lifestyle.
            </p>
          </div>
          <div className="flex gap-4 shrink-0 md:ml-auto">
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
              { name: 'High-Interest Savings Plans', cat: 'Savings', sub: 'Save smart with security and higher returns.', desc: 'Earn more with short-term and long-term savings options designed for flexibility, security, and high returns.', img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800' },
              { name: 'Investment Solutions', cat: 'Investment', sub: 'Build your financial future with guided investments.', desc: 'Let your money work for you with personalized investment plans aligned with your financial goals and risk preferences.', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800' },
              { name: 'Life Insurance', cat: 'Insurance', sub: 'Secure your loved ones’ future.', desc: 'Secure your family’s future with affordable, flexible life insurance policies offering long-term peace of mind.', img: 'https://images.pexels.com/photos/31513716/pexels-photo-31513716.jpeg' },
              { name: 'Health Insurance', cat: 'Health', sub: 'Protect your health, preserve your wealth.', desc: 'Protect yourself and your loved ones from unexpected medical expenses with comprehensive health coverage.', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800' },
              { name: 'General Insurance', cat: 'Insurance', sub: 'Safeguard your valuable assets.', desc: 'From vehicles to property, cover what matters most with trusted general insurance tailored to your lifestyle.', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800' },
              { name: 'Loan Services', cat: 'Loans', sub: 'Get the financial support you need—fast and fairly.', desc: 'Whether it’s for personal needs or business growth, we offer reliable and easy-to-access loans with competitive terms.', img: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=800' },
            ].map((scheme, i) => (
              <div key={scheme.name} className="relative group w-[280px] h-[340px] md:w-[320px] md:h-[380px] lg:w-[380px] lg:h-[420px] rounded-[2rem] overflow-hidden snap-center shrink-0 cursor-pointer shadow-md border border-slate-200 bg-white">
                <img src={scheme.img} alt={scheme.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1000ms] ease-out" />

                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D] via-[#001D3D]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-sky-500 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(14,165,233,0.3)] mb-4 lg:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-black text-2xl lg:text-3xl text-white drop-shadow-lg mb-2 leading-tight font-sans tracking-tight">{scheme.name}</h3>
                  <p className="text-white/90 font-bold text-[13px] md:text-[14px] mb-3 drop-shadow-md">{scheme.sub}</p>
                  
                  <div className="h-0 overflow-hidden group-hover:h-[80px] transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
                    <p className="text-white/70 text-[12px] md:text-[13px] leading-relaxed mb-4">{scheme.desc}</p>
                  </div>
                  
                  <div className="flex items-center justify-end gap-3">
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

      {/* ══════════ OUR WORK PROCESS ══════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden min-h-[900px] flex flex-col justify-center">
        
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#001D3D]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D] via-[#001D3D]/80 to-transparent" />
        </div>

        <div className="max-w-[1400px] w-full mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center">
          
          {/* Main Container for Desktop Layout matching reference */}
          <div className="relative w-full max-w-[1300px] mx-auto hidden lg:block h-[700px] xl:h-[750px] reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out mt-16">
            
            {/* Desktop Cards arranged in a staggered floating Arch matching reference image sizes */}
            <div className="absolute inset-0 w-full h-full z-10 pointer-events-none flex justify-between items-start">
              {[
                { step: '1', title: 'Understand Your Needs', desc: "We start by listening. Whether you're saving, investing, or protecting your future, we take time to understand your goals, challenges, and priorities.", offset: 'mt-[280px] xl:mt-[320px]', size: 'w-[210px] xl:w-[230px] min-h-[320px]' },
                { step: '2', title: 'Recommend Tailored Solutions', desc: "No one-size-fits-all here. Based on your needs, we provide clear, customized financial solutions — from high-interest savings to insurance and investment plans.", offset: 'mt-[50px] xl:mt-[70px]', size: 'w-[240px] xl:w-[250px] min-h-[280px]' },
                { step: '3', title: 'Simple & Transparent Onboarding', desc: "We make it easy. Our onboarding process is quick, secure, and hassle-free. We explain every step so you know exactly what you're signing up for.", offset: 'mt-[0px]', size: 'w-[270px] xl:w-[300px] min-h-[240px]' },
                { step: '4', title: 'Ongoing Support & Guidance', desc: "Our relationship doesn’t end after you sign up. We offer continuous support, regular check-ins, and transparent updates to help you stay on track with your financial goals.", offset: 'mt-[50px] xl:mt-[70px]', size: 'w-[240px] xl:w-[250px] min-h-[280px]' },
                { step: '5', title: 'Grow Together', desc: "Your growth is our mission. As your needs evolve, we’re here with smarter solutions, expert advice, and a long-term partnership that grows with you.", offset: 'mt-[280px] xl:mt-[320px]', size: 'w-[210px] xl:w-[230px] min-h-[320px]' }
              ].map((s, i) => (
                <div key={i} className={`${s.offset} ${s.size} relative z-10 pointer-events-auto flex flex-col justify-center bg-white rounded-[2.5rem] xl:rounded-[3rem] p-6 xl:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-slate-100 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(14,165,233,0.15)] transition-all duration-500 group cursor-default`}>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-black text-xl mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-500 shadow-sm border border-sky-100 shrink-0">
                    {s.step}
                  </div>
                  <h3 className="font-black text-[17px] xl:text-[18px] text-[#001D3D] mb-3 leading-tight tracking-tight group-hover:text-sky-600 transition-colors">{s.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed font-medium">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Center Content Area Matching Reference Image */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[10%] w-full max-w-[700px] flex flex-col items-center text-center z-20">
              <div className="bg-sky-500/10 border border-sky-400/20 px-5 py-2 rounded-full flex items-center gap-2 mb-6 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-sky-400" />
                <span className="text-sky-400 font-black text-xs tracking-widest uppercase">Our Work Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-white leading-[1.2] mb-6 tracking-tight max-w-xl">
                Committed to Putting You First, Every Step of the Way
              </h2>
              <p className="text-white/70 text-sm md:text-[15px] font-medium leading-relaxed mb-8 max-w-lg">
                At Sarathi Germinate Nidhi Limited (SGNL), we believe in making finance personal, transparent, and simple. Our step-by-step process is designed to ensure that you always feel informed, empowered, and supported — from the very first interaction.
              </p>
              
              <div className="group inline-flex items-center gap-4 bg-white text-[#001D3D] pl-8 pr-2 py-2 rounded-full font-bold text-[14px] tracking-wide shadow-xl hover:bg-sky-500 hover:text-white transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <span>More About Us</span>
                <div className="w-10 h-10 bg-[#001D3D] group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                  <ArrowRight className="w-5 h-5 text-white group-hover:text-sky-500 transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout (Visible only on lg<) */}
          <div className="lg:hidden mt-12 flex flex-col gap-6 relative w-full reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-center flex flex-col items-center mb-8">
              <div className="bg-sky-500/10 border border-sky-400/20 px-5 py-2 rounded-full flex items-center gap-2 mb-6 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-sky-400" />
                <span className="text-sky-400 font-black text-xs tracking-widest uppercase">Our Work Process</span>
              </div>
              <h2 className="text-3xl font-black text-white leading-[1.2] mb-4 tracking-tight">
                Committed to Putting You First
              </h2>
            </div>
            
            {[
                { step: '1', title: 'Understand Your Needs', desc: "We start by listening. Whether you're saving, investing, or protecting your future, we take time to understand your goals, challenges, and priorities." },
                { step: '2', title: 'Recommend Tailored Solutions', desc: "No one-size-fits-all here. Based on your needs, we provide clear, customized financial solutions — from high-interest savings to insurance and investment plans." },
                { step: '3', title: 'Simple & Transparent Onboarding', desc: "We make it easy. Our onboarding process is quick, secure, and hassle-free. We explain every step so you know exactly what you're signing up for." },
                { step: '4', title: 'Ongoing Support & Guidance', desc: "Our relationship doesn’t end after you sign up. We offer continuous support, regular check-ins, and transparent updates to help you stay on track with your financial goals." },
                { step: '5', title: 'Grow Together', desc: "Your growth is our mission. As your needs evolve, we’re here with smarter solutions, expert advice, and a long-term partnership that grows with you." }
              ].map((s, i) => (
                <div key={i} className="flex gap-4 sm:gap-6 relative z-10 w-full group">
                  <div className="bg-white rounded-[2rem] p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-slate-100 flex-1 hover:-translate-y-1 hover:border-sky-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-black text-xl mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-500 shadow-sm border border-sky-100 shrink-0">
                      {s.step}
                    </div>
                    <h3 className="font-black text-lg text-[#001D3D] mb-2 leading-tight tracking-tight group-hover:text-sky-600 transition-colors">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{s.desc}</p>
                  </div>
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
                <img src="/sarathi/logo.png" alt="SGNL Logo" className="h-20 w-auto object-contain bg-white rounded-2xl p-2" />
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
              { head: 'Services', links: ['Recurring Deposits', 'Fixed Deposits', 'Life Insurance', 'Mutual Funds', 'Demat Account'] },
              { head: 'Company', links: ['About Us', 'Our Branches', 'Fair Practice Code', 'Contact Us'] },
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
