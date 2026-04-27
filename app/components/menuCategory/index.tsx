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
        <button  onClick={() => setIsOpen(!isOpen)} className="w-5 h-5 rounded-full bg-white text-red-700 flex items-center justify-center text-xs font-bold cursor-pointer">
           {isOpen ? "−" : "+"}
        </button>
      </div>

    {isOpen && (<div className='mt-5 bg-white rounded-3xl shadow-lg p-5 m-10 '>
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