'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2, User, Mail, Phone, Briefcase, MapPin, MessageSquare, Send } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-[#001D3D]/80 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      
      {/* Popup Container */}
      <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/20 text-white hover:bg-white/40 hover:scale-110 rounded-full transition-all backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-12 text-center flex flex-col items-center justify-center min-h-[500px] bg-gradient-to-b from-sky-50 to-white">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/20 animate-bounce">
              <CheckCircle2 className="w-12 h-12 text-emerald-500" />
            </div>
            <h3 className="text-3xl font-black text-[#001D3D] mb-4">Submitted Successfully!</h3>
            <p className="text-slate-600 font-medium mb-10 text-lg max-w-sm">
              Thank you for reaching out! Our team will review your request and get back to you shortly.
            </p>
            <button 
              onClick={handleClose}
              className="bg-[#001D3D] text-white px-10 py-4 rounded-xl font-black tracking-widest uppercase text-sm hover:bg-sky-500 transition-all shadow-xl hover:shadow-sky-500/20 hover:-translate-y-1"
            >
              Back to site
            </button>
          </div>
        ) : (
          <div className="flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#001D3D] to-sky-700 p-8 text-white relative overflow-hidden shrink-0">
              <div className="relative z-10">
                <h3 className="text-2xl font-black tracking-tight mb-2 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-sky-400" />
                  Get a Free Quote
                </h3>
                <p className="text-sky-100 text-sm font-medium opacity-90">Fill out the form below and our experts will be in touch.</p>
              </div>
              {/* Decorative background shapes */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            {/* Form */}
            <div className="p-6 md:p-8 overflow-y-auto bg-slate-50/50 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:bg-gradient-to-b [&::-webkit-scrollbar-thumb]:from-sky-400 [&::-webkit-scrollbar-thumb]:to-[#001D3D] [&::-webkit-scrollbar-thumb]:rounded-full">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[11px] font-black text-[#001D3D] uppercase tracking-wider mb-2">Full Name *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className={`w-5 h-5 ${errors.name ? 'text-red-400' : 'text-slate-400'}`} />
                    </div>
                    <input 
                      type="text" 
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-white hover:border-sky-200'} focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all font-semibold text-[#001D3D]`}
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 font-bold flex items-center gap-1"><X className="w-3 h-3"/> {errors.name}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-black text-[#001D3D] uppercase tracking-wider mb-2">Email Address *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className={`w-5 h-5 ${errors.email ? 'text-red-400' : 'text-slate-400'}`} />
                    </div>
                    <input 
                      type="email" 
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-white hover:border-sky-200'} focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all font-semibold text-[#001D3D]`}
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1.5 font-bold flex items-center gap-1"><X className="w-3 h-3"/> {errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-black text-[#001D3D] uppercase tracking-wider mb-2">Primary Mobile *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className={`w-5 h-5 ${errors.primaryMobile ? 'text-red-400' : 'text-slate-400'}`} />
                      </div>
                      <input 
                        type="tel" 
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 ${errors.primaryMobile ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-white hover:border-sky-200'} focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all font-semibold text-[#001D3D]`}
                        placeholder="10-digit number"
                        maxLength={10}
                        value={formData.primaryMobile}
                        onChange={(e) => setFormData({...formData, primaryMobile: e.target.value.replace(/\D/g, '')})}
                      />
                    </div>
                    {errors.primaryMobile && <p className="text-red-500 text-xs mt-1.5 font-bold flex items-center gap-1"><X className="w-3 h-3"/> {errors.primaryMobile}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-[#001D3D] uppercase tracking-wider mb-2">Service *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Briefcase className={`w-5 h-5 ${errors.service ? 'text-red-400' : 'text-slate-400'}`} />
                      </div>
                      <select 
                        className={`w-full pl-11 pr-10 py-3.5 rounded-xl border-2 ${errors.service ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-white hover:border-sky-200'} focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all appearance-none font-semibold text-[#001D3D]`}
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option value="" disabled>Select a service</option>
                        {services.map(s => (
                          <option key={s} value={s}>{s}</option>
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
                  <label className="block text-[11px] font-black text-[#001D3D] uppercase tracking-wider mb-2">District *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MapPin className={`w-5 h-5 ${errors.district ? 'text-red-400' : 'text-slate-400'}`} />
                    </div>
                    <select 
                      className={`w-full pl-11 pr-10 py-3.5 rounded-xl border-2 ${errors.district ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-white hover:border-sky-200'} focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all appearance-none font-semibold text-[#001D3D]`}
                      value={formData.district}
                      onChange={(e) => setFormData({...formData, district: e.target.value})}
                    >
                      <option value="" disabled>Select your district (Tamil Nadu)</option>
                      {tnDistricts.map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                  {errors.district && <p className="text-red-500 text-xs mt-1.5 font-bold flex items-center gap-1"><X className="w-3 h-3"/> {errors.district}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-black text-[#001D3D] uppercase tracking-wider mb-2">Message</label>
                  <div className="relative">
                    <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                      <MessageSquare className="w-5 h-5 text-slate-400" />
                    </div>
                    <textarea 
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white hover:border-sky-200 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all resize-none font-semibold text-[#001D3D]"
                      placeholder="How can we help you?"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-4.5 rounded-xl font-black tracking-widest uppercase text-[13px] hover:from-sky-400 hover:to-sky-500 transition-all shadow-lg hover:shadow-sky-500/40 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1 h-14"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
