'use client';

import React from 'react';
import { Star, MapPin, Clock, ArrowRight, Mountain } from 'lucide-react';
import { Adventure } from '../data/adventures';
import Link from 'next/link';
import { useSearch } from './SearchContext';

interface AdventureCardProps {
  adventure: Adventure;
}

const AdventureCard: React.FC<AdventureCardProps> = ({ adventure }) => {
  const { currency } = useSearch();
  const price = currency === 'INR' 
    ? (adventure.priceInr || adventure.price) 
    : (adventure.priceUsd || adventure.price);

  return (
    <Link 
      href={`/adventures/${adventure.id}`} 
      className="block group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 border border-gray-100/50"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={adventure.image}
          alt={adventure.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C]/80 via-[#1A2B3C]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
        
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
          <span className="bg-[#D4A373] text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-[7px] sm:text-[7.5px] md:text-[8px] font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] shadow-2xl backdrop-blur-md">
            Featured
          </span>
        </div>
        
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/90 backdrop-blur-md text-[#1A2B3C] px-2.5 sm:px-3 md:px-3.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl flex items-center gap-1.5 sm:gap-2 shadow-xl border border-white/20">
          <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#D4A373] text-[#D4A373]" />
          <span className="text-[10px] sm:text-[11px] font-black">{adventure.rating.toFixed(1)}</span>
        </div>

        <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 space-y-3 sm:space-y-4">
           <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 text-white/90 bg-white/10 backdrop-blur-md w-fit px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.25 md:py-1.5 rounded-full border border-white/20 max-w-full">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4A373] flex-shrink-0" />
            <span className="text-[7.5px] sm:text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] truncate">{adventure.location.split(',')[1]?.trim() || adventure.location}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 md:p-8 xl:p-10 space-y-5 xl:space-y-8">
        <h3 className="font-serif-luxury text-[#1A2B3C] text-base sm:text-lg md:text-xl leading-[1.3] tracking-tight group-hover:text-[#D4A373] transition-colors duration-500 min-h-[2.75rem] md:min-h-[3rem] xl:min-h-[3.5rem] line-clamp-3">
          {adventure.title}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 xl:gap-6 border-b border-gray-100 pb-5 xl:pb-10">
          <div className="flex items-center gap-2 md:gap-3 xl:gap-4">
            <div className="w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10 rounded-xl md:rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#1A2B3C]/5 transition-colors flex-shrink-0">
              <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 xl:w-4 xl:h-4 text-[#D4A373]" />
            </div>
            <div className="min-w-0">
              <p className="text-[7px] md:text-[7.5px] xl:text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5 xl:mb-1">Duration</p>
              <p className="text-[9px] md:text-[9.5px] xl:text-[10px] font-black text-[#1A2B3C] uppercase tracking-[0.1em] truncate">{adventure.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3 xl:gap-4">
            <div className="w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10 rounded-xl md:rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#1A2B3C]/5 transition-colors flex-shrink-0">
              <Mountain className="w-3 h-3 md:w-3.5 md:h-3.5 xl:w-4 xl:h-4 text-[#D4A373]" />
            </div>
            <div className="min-w-0">
              <p className="text-[7px] md:text-[7.5px] xl:text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5 xl:mb-1">Type</p>
              <p className="text-[9px] md:text-[9.5px] xl:text-[10px] font-black text-[#1A2B3C] uppercase tracking-[0.1em] truncate">Expedition</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 xl:space-y-5">
          <div className="min-w-0">
            <p className="text-[9px] xl:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 xl:mb-1.5">Starting From</p>
            <span className="text-base sm:text-lg md:text-xl xl:text-2xl font-serif-luxury text-[#1A2B3C] tracking-tighter whitespace-nowrap truncate block">{price}</span>
          </div>
          <div className="flex justify-end">
            <div className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 bg-[#1A2B3C] rounded-[1.25rem] md:rounded-2xl flex items-center justify-center text-white hover:bg-[#D4A373] transition-all duration-500 group-hover:scale-105 shadow-lg xl:shadow-2xl shadow-[#1A2B3C]/15 xl:shadow-[#1A2B3C]/20 group-hover:shadow-[#D4A373]/25 xl:group-hover:shadow-[#D4A373]/30 relative overflow-hidden">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 relative z-10" />
              <div className="absolute inset-0 bg-[#D4A373] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AdventureCard;
