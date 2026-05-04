"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex w-full items-center justify-between bg-[#A51C30] px-4 py-2 text-white">
            <Link href="/">
                <span className = 'text-xl font-bold'>Harvard</span>
            </Link>
            <div onClick={() => setIsOpen(!isOpen)} className="flex h-7 w-7 cursor-pointer flex-col items-center justify-center gap-1 bg-white">
                <div className="h-0.5 w-5 bg-black"></div>
                <div className="h-0.5 w-5 bg-black"></div>
                <div className="h-0.5 w-5 bg-black"></div>
            </div>

            {isOpen && (
                <div className="absolute top-12 right-0 w-48 rounded-lg bg-[#A51C30] shadow-lg">
                    <Link href="/signup">
                        <p className = 'cursor-pointer p-4 text-xl font-bold text-white hover:bg-white hover:text-[#A51C30]'>Sign Up</p>
                    </Link>
                    <p className = 'cursor-pointer p-4 text-xl font-bold text-white hover:bg-white hover:text-[#A51C30]'>About</p>
                    <p className = 'cursor-pointer p-4 text-xl font-bold text-white hover:bg-white hover:text-[#A51C30]'>Contact</p>
                </div>
            )}
        </div>
    )
}
