'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';

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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      
      {/* Popup Container */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-[#001D3D] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
            <CheckCircle2 className="w-20 h-20 text-emerald-500 mb-6" />
            <h3 className="text-2xl font-black text-[#001D3D] mb-3">Submitted Successfully</h3>
            <p className="text-slate-500 font-medium mb-8">
              Thank you for reaching out! Our team will get back to you shortly.
            </p>
            <button 
              onClick={handleClose}
              className="bg-[#001D3D] text-white px-8 py-3 rounded-xl font-black tracking-widest uppercase text-sm hover:bg-sky-500 transition-all shadow-md"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-6 md:p-8 max-h-[90vh] overflow-y-auto hide-scrollbars">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-[#001D3D] tracking-tight">Get a Free Quote</h3>
              <p className="text-sm text-slate-500 mt-1 font-medium">Fill out the form below and we'll be in touch.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">Full Name *</label>
                <input 
                  type="text" 
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:outline-none focus:border-sky-500 focus:bg-white transition-all`}
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">Email Address *</label>
                <input 
                  type="email" 
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:outline-none focus:border-sky-500 focus:bg-white transition-all`}
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">Primary Mobile *</label>
                  <input 
                    type="tel" 
                    className={`w-full px-4 py-3 rounded-xl border ${errors.primaryMobile ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:outline-none focus:border-sky-500 focus:bg-white transition-all`}
                    placeholder="10-digit number"
                    maxLength={10}
                    value={formData.primaryMobile}
                    onChange={(e) => setFormData({...formData, primaryMobile: e.target.value.replace(/\D/g, '')})}
                  />
                  {errors.primaryMobile && <p className="text-red-500 text-xs mt-1 font-bold">{errors.primaryMobile}</p>}
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">Service *</label>
                  <select 
                    className={`w-full px-4 py-3 rounded-xl border ${errors.service ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:outline-none focus:border-sky-500 focus:bg-white transition-all appearance-none`}
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1 font-bold">{errors.service}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">District *</label>
                <select 
                  className={`w-full px-4 py-3 rounded-xl border ${errors.district ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:outline-none focus:border-sky-500 focus:bg-white transition-all appearance-none`}
                  value={formData.district}
                  onChange={(e) => setFormData({...formData, district: e.target.value})}
                >
                  <option value="" disabled>Select your district (Tamil Nadu)</option>
                  {tnDistricts.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                {errors.district && <p className="text-red-500 text-xs mt-1 font-bold">{errors.district}</p>}
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">Message</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-sky-500 focus:bg-white transition-all resize-none"
                  placeholder="How can we help you?"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#001D3D] text-white py-4 rounded-xl font-black tracking-widest uppercase text-sm hover:bg-sky-500 transition-all shadow-xl hover:shadow-sky-500/30 flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : 'Submit Request'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
