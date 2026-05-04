"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignupNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="flex h-[58px] items-center justify-between bg-[#f3f3f3] px-6">
        <Link href="/">
            <h1 className="font-serif text-[28px] font-semibold text-[#A51C30]">
            Harvard
            </h1>
        </Link>
  
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center bg-[#A51C30] cursor-pointer"
        >
            <div className="space-y-1">
                <div className="h-[3px] w-6 bg-white" />
                <div className="h-[3px] w-6 bg-white" />
                <div className="h-[3px] w-6 bg-white" />
            </div>
        </button>

        {isOpen && (
                <div className="absolute top-12 right-0 w-48 bg-[#A51C30] rounded-lg shadow-lg">
                    <Link href="/">
                        <p className = 'text-xl font-bold p-4 text-white cursor-pointer hover:bg-white hover:text-[#A51C30]'>Home</p>
                    </Link>
                    <p className = 'text-xl font-bold p-4 text-white cursor-pointer hover:bg-white hover:text-[#A51C30]'>About</p>
                    <p className = 'text-xl font-bold p-4 text-white cursor-pointer hover:bg-white hover:text-[#A51C30]'>Contact</p>
                </div>
            )}
      </div>
    );
}