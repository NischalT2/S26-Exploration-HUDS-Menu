"use client";
import { useState} from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");
  const isSignedIn = false; 

  return(
        <div className="relative bg-[#A41034] h-[44px] flex items-center justify-between">
          <div className="text-white text-[24px] font-serif tracking-wider leading-100% pl-[16px]" style={{ fontFamily: 'Inria Serif, serif' }}>
            <b>Harvard</b>
          </div>

        <div>
          <input 
          value = {searchQuery}
          onChange = {(e) => setSearchQuery(e.target.value)}
          placeholder = "What do you want to eat today?" 
          className = "rounded-full px-3 py-1 text-black text-[12px] w-[200px] focus:outline-none focus:ring-2 focus:ring-[#A41034] focus:border-transparent"
          />
			  </div>


        <div className="flex flex-col justify-center pr-[16px]">
          <div onClick={() => setIsOpen(!isOpen)} className ="w-[24px] h-[24px] bg-white justify-center items-center flex flex-col">
            <div className="w-4 h-0.5 bg-black mb-1"></div>
            <div className="w-4 h-0.5 bg-black mb-1"></div>
            <div className="w-4 h-0.5 bg-black"></div>
          </div>
			</div>
		
			{isOpen && (
      <div className="absolute right-0 top-full mt-2 w-[180px] bg-white rounded-[10px] shadow-lg p-3 text-black z-10">
        {!isSignedIn ? (
                <>
                  <button className="w-full bg-[#A41034] text-white rounded-full py-2 text-[12px] mb-2">
                    Sign In
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-2">
                  <button className="w-full bg-[#A41034] text-white rounded-full py-2 text-[12px]">
                    Food Favorites 
                  </button>
                  <button className="w-full bg-[#A41034] text-white rounded-full py-2 text-[12px]">
                    Macro Tracker
                  </button>
                  <button className="w-full bg-[#A41034] text-white rounded-full py-2 text-[12px]">
                    Reels
                  </button>
                  <button className="w-full bg-[#A41034] text-white rounded-full py-2 text-[12px]">
                    View Profile
                  </button>
                </div>
              )}
      </div>
  )}

       

        </div>
    );
  }