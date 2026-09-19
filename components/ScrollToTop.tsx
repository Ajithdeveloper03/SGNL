'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      
      setScrollProgress(scroll);

      // Toggle visibility
      if (totalScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <div 
      className={`fixed bottom-8 right-8 z-[999] transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      }`}
    >
      <div 
        className="relative flex items-center justify-center cursor-pointer group" 
        onClick={scrollToTop}
      >
        {/* SVG Progress Ring */}
        <svg className="w-[60px] h-[60px] transform -rotate-90 drop-shadow-md" viewBox="0 0 60 60">
          {/* Background Track */}
          <circle 
            cx="30" cy="30" r={radius} 
            className="stroke-slate-200"
            strokeWidth="3" 
            fill="none" 
          />
          {/* Progress Indicator */}
          <circle 
            cx="30" cy="30" r={radius} 
            className="stroke-[#001D3D] transition-all duration-150 ease-out"
            strokeWidth="3" 
            fill="none" 
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Inner Button */}
        <button
          type="button"
          className="absolute inset-0 m-auto w-11 h-11 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-[0_5px_20px_rgba(14,165,233,0.4)] group-hover:bg-[#001D3D] transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
