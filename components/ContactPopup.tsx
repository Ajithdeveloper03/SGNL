'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2, User, Mail, Phone, Briefcase, MapPin, MessageSquare, Send, ShieldCheck, Lock, TrendingUp, Users, Building2 } from 'lucide-react';

const tnDistricts = [
  'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 
  'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 
  'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 
  'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 
  'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 
  'Tirupattur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 
  'Viluppuram', 'Virudhunagar'
];

const services = [
  'Savings Accounts', 'Investment Solutions', 'Life Insurance', 'Health Insurance', 'General Insurance', 'Loan Services'
];

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    primaryMobile: '',
    service: '',
    district: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.primaryMobile.trim()) {
      newErrors.primaryMobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.primaryMobile)) {
      newErrors.primaryMobile = 'Must be exactly 10 digits';
    }

    if (!formData.service) newErrors.service = 'Please select a service';

    if (!formData.district) newErrors.district = 'Please select a district';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('/sgnl/contact.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            source: 'Contact Popup Form',
          }),
        });

        if (response.ok) {
          setIsSuccess(true);
        } else {
          console.error('Failed to send email');
          alert('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleClose = () => {
    // Reset state on close
    setTimeout(() => {
      setFormData({ name: '', email: '', primaryMobile: '', service: '', district: '', message: '' });
      setErrors({});
      setIsSuccess(false);
    }, 300); // slight delay for smooth unmount feel
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-[#001D3D]/90 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />
      
      {/* Popup Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row max-h-[95vh]">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 p-2 bg-slate-100/80 text-slate-500 hover:bg-slate-200 hover:text-red-500 rounded-full transition-all backdrop-blur-md border border-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-12 w-full text-center flex flex-col items-center justify-center min-h-[500px] bg-gradient-to-b from-slate-50 to-white">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/20 animate-bounce">
              <CheckCircle2 className="w-12 h-12 text-emerald-500" />
            </div>
            <h3 className="text-3xl font-black text-[#001D3D] mb-4">Request Received!</h3>
            <p className="text-slate-600 font-medium mb-10 text-lg max-w-sm">
              Thank you for trusting SGNL. A dedicated wealth advisor will contact you shortly to discuss your plans.
            </p>
            <button 
              onClick={handleClose}
              className="bg-[#001D3D] text-white px-10 py-4 rounded-xl font-black tracking-widest uppercase text-sm hover:bg-sky-500 hover:text-white transition-all shadow-xl hover:-translate-y-1"
            >
              Back to site
            </button>
          </div>
        ) : (
          <>
            {/* Left Column (Branding & Trust - Hidden on Mobile) */}
            <div className="hidden md:flex flex-col w-2/5 bg-gradient-to-br from-[#001D3D] via-[#012a52] to-[#001D3D] p-10 text-white relative overflow-hidden shrink-0">
               {/* Pattern overlay */}
               <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
               
               <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <img src="/sgnl/logo.png" alt="SGNL Logo" className="h-16 w-auto bg-white p-2 rounded-xl mb-8 shadow-lg" />
                    <h3 className="text-3xl font-black leading-[1.15] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">
                      Premium Wealth Solutions
                    </h3>
                    <p className="text-sky-100/80 text-[15px] leading-relaxed mb-8">
                      Partner with Tamil Nadu's leading Nidhi company for secure, high-yield investment options tailored to your goals.
                    </p>
                    
                    <div className="space-y-5">
                      <div className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 group-hover:border-sky-500/50 transition-colors">
                          <ShieldCheck className="w-4 h-4 text-sky-400" />
                        </div>
                        <span className="text-[15px] font-semibold text-white/90">Bank-Grade Security</span>
                      </div>
                      <div className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 group-hover:border-sky-500/50 transition-colors">
                          <TrendingUp className="w-4 h-4 text-sky-400" />
                        </div>
                        <span className="text-[15px] font-semibold text-white/90">High-Interest Returns</span>
                      </div>
                      <div className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 group-hover:border-sky-500/50 transition-colors">
                          <Users className="w-4 h-4 text-sky-400" />
                        </div>
                        <span className="text-[15px] font-semibold text-white/90">Trusted by Thousands</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-white/10">
                     <div className="flex items-center gap-4 text-white/80 group">
                       <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                         <Phone className="w-5 h-5 text-sky-400" />
                       </div>
                       <div>
                         <p className="text-[11px] uppercase tracking-widest font-bold text-sky-400/80 mb-0.5">Need Help?</p>
                         <p className="font-black text-lg tracking-wide text-white group-hover:text-sky-400 transition-colors">+91-85249-17170</p>
                       </div>
                     </div>
                  </div>
               </div>
               
               {/* Decorative Shapes */}
               <div className="absolute -bottom-24 -left-24 w-64 h-64 border-[30px] border-white/5 rounded-full blur-sm pointer-events-none"></div>
               <div className="absolute top-10 -right-20 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Right Column (Form) */}
            <div className="w-full md:w-3/5 flex flex-col max-h-[95vh] bg-slate-50 relative">
               
               {/* Form Header (Scrollable with content on mobile, fixed on desktop visual) */}
               <div className="p-6 md:p-10 pb-0 shrink-0">
                 {/* Mobile Header */}
                 <div className="md:hidden mb-6 flex items-center gap-4 border-b border-slate-200 pb-6">
                    <div className="w-12 h-12 bg-[#001D3D] rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                       <Building2 className="w-6 h-6 text-sky-400" />
                    </div>
                    <div>
                      <h3 className="font-black text-[#001D3D] text-xl leading-tight">Request Quote</h3>
                      <p className="text-xs font-bold text-sky-600 uppercase tracking-widest">Premium Service</p>
                    </div>
                 </div>
                 
                 {/* Desktop Form Title */}
                 <div className="hidden md:flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                   <div>
                     <h2 className="text-2xl font-black text-[#001D3D] tracking-tight">Submit Request</h2>
                     <p className="text-sm font-semibold text-slate-500 mt-1">Fill out the details below to proceed.</p>
                   </div>
                   <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[11px] font-black uppercase tracking-widest border border-emerald-200 shadow-sm">
                      <Lock className="w-3 h-3" /> Secure
                   </div>
                 </div>
               </div>

               {/* Form Content (Scrollable) */}
               <div className="p-6 md:p-10 pt-4 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">
                 <form onSubmit={handleSubmit} className="space-y-5">
                   
                   <div>
                     <label className="block text-[11px] font-black text-[#001D3D] uppercase tracking-wider mb-2">Full Name <span className="text-red-500">*</span></label>
                     <div className="relative">
                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                         <User className={`w-5 h-5 ${errors.name ? 'text-red-400' : 'text-slate-400'}`} />
                       </div>
                       <input 
                         type="text" 
                         className={`w-full pl-11 pr-4 py-3.5 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white hover:border-sky-400'} focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all font-semibold text-[#001D3D] placeholder:text-slate-400 shadow-sm`}
                         placeholder="Enter your full name"
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                       />
                     </div>
                     {errors.name && <p className="text-red-500 text-xs mt-1.5 font-bold flex items-center gap-1"><X className="w-3 h-3"/> {errors.name}</p>}
                   </div>

                   <div>
                     <label className="block text-[11px] font-black text-[#001D3D] uppercase tracking-wider mb-2">Email Address <span className="text-red-500">*</span></label>
                     <div className="relative">
                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                         <Mail className={`w-5 h-5 ${errors.email ? 'text-red-400' : 'text-slate-400'}`} />
                       </div>
                       <input 
                         type="email" 
                         className={`w-full pl-11 pr-4 py-3.5 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white hover:border-sky-400'} focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all font-semibold text-[#001D3D] placeholder:text-slate-400 shadow-sm`}
                         placeholder="name@example.com"
                         value={formData.email}
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                       />
                     </div>
                     {errors.email && <p className="text-red-500 text-xs mt-1.5 font-bold flex items-center gap-1"><X className="w-3 h-3"/> {errors.email}</p>}
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                     <div>
                       <label className="block text-[11px] font-black text-[#001D3D] uppercase tracking-wider mb-2">Mobile Number <span className="text-red-500">*</span></label>
                       <div className="relative">
                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                           <Phone className={`w-5 h-5 ${errors.primaryMobile ? 'text-red-400' : 'text-slate-400'}`} />
                         </div>
                         <input 
                           type="tel" 
                           className={`w-full pl-11 pr-4 py-3.5 rounded-xl border ${errors.primaryMobile ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white hover:border-sky-400'} focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all font-semibold text-[#001D3D] placeholder:text-slate-400 shadow-sm`}
                           placeholder="10-digit number"
                           maxLength={10}
                           value={formData.primaryMobile}
                           onChange={(e) => setFormData({...formData, primaryMobile: e.target.value.replace(/\D/g, '')})}
                         />
                       </div>
                       {errors.primaryMobile && <p className="text-red-500 text-xs mt-1.5 font-bold flex items-center gap-1"><X className="w-3 h-3"/> {errors.primaryMobile}</p>}
                     </div>
                     <div>
                       <label className="block text-[11px] font-black text-[#001D3D] uppercase tracking-wider mb-2">Service <span className="text-red-500">*</span></label>
                       <div className="relative">
                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                           <Briefcase className={`w-5 h-5 ${errors.service ? 'text-red-400' : 'text-slate-400'}`} />
                         </div>
                         <select 
                           className={`w-full pl-11 pr-10 py-3.5 rounded-xl border ${errors.service ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white hover:border-sky-400'} focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all appearance-none font-semibold ${formData.service ? 'text-[#001D3D]' : 'text-slate-400'} shadow-sm`}
                           value={formData.service}
                           onChange={(e) => setFormData({...formData, service: e.target.value})}
                         >
                           <option value="" disabled>Select a service</option>
                           {services.map(s => (
                             <option key={s} value={s} className="text-[#001D3D]">{s}</option>
                           ))}
                         </select>
                         <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                           <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                         </div>
                       </div>
                       {errors.service && <p className="text-red-500 text-xs mt-1.5 font-bold flex items-center gap-1"><X className="w-3 h-3"/> {errors.service}</p>}
                     </div>
                   </div>

                   <div>
                     <label className="block text-[11px] font-black text-[#001D3D] uppercase tracking-wider mb-2">District <span className="text-red-500">*</span></label>
                     <div className="relative">
                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                         <MapPin className={`w-5 h-5 ${errors.district ? 'text-red-400' : 'text-slate-400'}`} />
                       </div>
                       <select 
                         className={`w-full pl-11 pr-10 py-3.5 rounded-xl border ${errors.district ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white hover:border-sky-400'} focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all appearance-none font-semibold ${formData.district ? 'text-[#001D3D]' : 'text-slate-400'} shadow-sm`}
                         value={formData.district}
                         onChange={(e) => setFormData({...formData, district: e.target.value})}
                       >
                         <option value="" disabled>Select your district</option>
                         {tnDistricts.map(d => (
                           <option key={d} value={d} className="text-[#001D3D]">{d}</option>
                         ))}
                       </select>
                       <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                         <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                       </div>
                     </div>
                     {errors.district && <p className="text-red-500 text-xs mt-1.5 font-bold flex items-center gap-1"><X className="w-3 h-3"/> {errors.district}</p>}
                   </div>

                   <div>
                     <label className="block text-[11px] font-black text-[#001D3D] uppercase tracking-wider mb-2">Message <span className="text-slate-400 normal-case font-semibold tracking-normal">(Optional)</span></label>
                     <div className="relative">
                       <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                         <MessageSquare className="w-5 h-5 text-slate-400" />
                       </div>
                       <textarea 
                         className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 bg-white hover:border-sky-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all resize-none font-semibold text-[#001D3D] placeholder:text-slate-400 shadow-sm"
                         placeholder="How can we assist you today?"
                         rows={3}
                         value={formData.message}
                         onChange={(e) => setFormData({...formData, message: e.target.value})}
                       />
                     </div>
                   </div>

                   <div className="pt-4">
                     <button 
                       type="submit"
                       disabled={isSubmitting}
                       className="w-full bg-[#001D3D] text-white py-4.5 rounded-xl font-black tracking-widest uppercase text-[13px] hover:bg-sky-500 hover:text-white transition-all shadow-xl hover:shadow-sky-500/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-1 h-14 group border border-transparent hover:border-sky-400"
                     >
                       {isSubmitting ? (
                         <>
                           <Loader2 className="w-5 h-5 animate-spin" />
                           Processing...
                         </>
                       ) : (
                         <>
                           Submit Request
                           <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                         </>
                       )}
                     </button>
                   </div>
                 </form>
               </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
