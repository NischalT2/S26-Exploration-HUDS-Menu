"use client";
import { useState } from "react";
import FoodButton from "../foodButton";

export default function MenuCategory() {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="px-1">
      <div className="flex items-center gap-3 text-white px-3 mb-4">
        <div className="font-bold text-lg">Entrees</div>
        <div className="flex-1 h-px bg-white/70"></div>
        <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-white text-xs font-bold text-[#A51C30]">
           {isOpen ? "−" : "+"}
        </button>
      </div>

    {isOpen && (<div className='m-10 mt-5 rounded-3xl bg-white p-5 shadow-lg'>
        <div className='flex flex-wrap gap-x-30 gap-y-20'>
          <FoodButton label="Ginger Jasmine Rice with Toasted Sesame Oil" />
          <FoodButton label="Seasoned Bok Choy" />
          <FoodButton label="Steamed Broccoli" />
          <FoodButton label="Mapo-Inspired Vegan Tofu" />
          <FoodButton label="Vegetable Lo Mein" />
        </div>
      </div>)}
      
    </div>
  );
}
