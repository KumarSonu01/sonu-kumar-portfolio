import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Logo({ showFullName = true, onClick }) {
  return (
    <Link 
      to="/" 
      onClick={onClick}
      className="group flex items-center gap-2.5 focus:outline-none"
    >
      <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#8B5CF6]">
        <span className="font-serif italic text-xl">S</span>
      </div>
      <div className="flex flex-col">
        <span className="font-serif font-bold text-lg tracking-tight text-gray-900 group-hover:text-purple-600 transition-colors flex items-center gap-1.5">
          {showFullName ? "Sonu Kumar" : "Sonu"}
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping"></span>
        </span>
        <span className="text-[10px] tracking-wider uppercase font-semibold text-gray-400 -mt-0.5">
          Developer Portfolio
        </span>
      </div>
    </Link>
  );
}
