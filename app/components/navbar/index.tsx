"use client";

import Link from "next/link";
import { useState } from "react";

const menuPill =
  "mb-2 flex w-full cursor-pointer items-center justify-center rounded-full bg-[#A41034] py-2 text-center text-[12px] text-white";
const actionBtn =
  "w-full cursor-pointer rounded-full bg-[#A41034] py-2 text-[12px] text-white";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative flex h-[58px] items-center justify-between bg-[#A41034] px-6">
      <Link href="/">
        <p className="text-white text-[24px] font-serif tracking-wider leading-100% pl-[16px]" style={{ fontFamily: 'Inria Serif, serif' }}>
            <b>Harvard</b>
        </p>
      </Link>

      <div>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What do you want to eat today?"
          className="w-[400px] rounded-full bg-white px-4 py-2 text-[12px] text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#A41034]"
        />
      </div>

      <div className="flex flex-col justify-center pr-[16px]">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Open menu"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-[24px] w-[24px] flex-col items-center justify-center bg-white cursor-pointer"
        >
          <div className="mb-1 h-0.5 w-4 bg-black" />
          <div className="mb-1 h-0.5 w-4 bg-black" />
          <div className="h-0.5 w-4 bg-black" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-full z-10 mt-2 w-[180px] rounded-[10px] bg-white p-3 text-black shadow-lg">
          <Link href="/signup" className={menuPill}>
            Sign In
          </Link>
          <Link href="/houses" className={menuPill}>
            Houses
          </Link>
          <div className="flex flex-col space-y-2">
            <Link href="/favorites">
              <button type="button" className={actionBtn}>
                Food Favorites
              </button>
            </Link>
            <button type="button" className={actionBtn}>
              Macro Tracker
            </button>
            <button type="button" className={actionBtn}>
              Reels
            </button>
            <button type="button" className={actionBtn}>
              View Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
