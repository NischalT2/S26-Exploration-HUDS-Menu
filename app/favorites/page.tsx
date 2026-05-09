"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FavoritesPage() {
  const [favoriteItems, setFavoriteItems] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("favoriteItems");
    return stored ? (JSON.parse(stored) as string[]) : [];
  });

  // Write to localStorage whenever favoriteItems changes
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const removeItem = (item: string) => {
    setFavoriteItems((prev) => prev.filter((i) => i !== item));
  };

  return (
    <div className="bg-white min-h-screen pb-4">

      {/* Navbar */}
      <nav className="w-full bg-[#A51C30] px-6 py-4 flex items-center justify-between shadow-md">
        <Link href="/">
          <span className="text-white text-2xl font-bold tracking-wide cursor-pointer">
            Harvard
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/favorites" aria-label="Favorites">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
              className="hover:opacity-75 transition-opacity"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
            </svg>
          </Link>
          <button
            className="text-white focus:outline-none hover:opacity-75 transition-opacity"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Red block */}
      <div className="bg-[#A51C30] mx-4 mt-4 rounded-2xl p-6 min-h-[60vh]">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#ffffff">
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
          </svg>
          <h1 className="text-white text-2xl font-bold">My Favorites</h1>
          <div className="flex-1 h-px bg-white opacity-50"></div>
          <span className="text-white opacity-75 text-sm">{favoriteItems.length} item{favoriteItems.length !== 1 ? "s" : ""}</span>
        </div>

        {/* Empty state */}
        {favoriteItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="64px"
              viewBox="0 -960 960 960"
              width="64px"
              fill="none"
              stroke="#ffffff"
              strokeWidth="40"
              opacity="0.5"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
            </svg>
            <p className="text-white opacity-60 text-lg font-medium">No favorites yet</p>
            <p className="text-white opacity-40 text-sm text-center">
              Tap any food item and press the heart to save it here
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-4 grid grid-cols-2 gap-3">
            {favoriteItems.map((item) => (
              <div
                key={item}
                className="bg-[#f0e8e8] rounded-2xl px-4 py-3 flex items-center justify-between gap-2"
              >
                <span className="text-black text-sm font-medium flex-1">{item}</span>
                <button
                  onClick={() => removeItem(item)}
                  aria-label={`Remove ${item} from favorites`}
                  className="flex-shrink-0 hover:opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#A51C30">
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}