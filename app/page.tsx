"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import MenuItemModal from "@/app/components/menuItemModal";

export default function Home() {
  const [favoriteItems, setFavoriteItems] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("favoriteItems");
    return stored ? (JSON.parse(stored) as string[]) : [];
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const openModal = (itemName: string) => {
    setSelectedItem(itemName);
    setModalOpen(true);
  };

  // Write to localStorage whenever favoriteItems changes
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  return (
    <div className="bg-white min-h-screen pb-4">

      {/* Navbar */}
      <Navbar />

      {/* Image below navbar */}
      <div className="px-4 mt-4">
        <Image
          src="/huds_picture.jpg"
          alt="Annenberg Hall"
          width={1000}
          height={450}
          className="w-full aspect-[1000/360] object-cover rounded-2xl"
          priority
        />
      </div>

      {/* Red Block */}
      <div className="bg-[#A51C30] mx-4 mt-4 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button className="bg-white text-black text-sm px-3 py-1 rounded-full">Dinner</button>
            <button className="bg-white text-black text-sm px-3 py-1 rounded-full flex items-center gap-1">
              Daily
              <img src="/drop_down_icon.svg" alt="open daily menu" className="h-4 w-4" />
            </button>
            <button className="bg-white text-black text-sm px-3 py-1 rounded-full flex items-center gap-1">
              5/9/2026
              <img src="/calendar_icon.svg" alt="select date" className="h-4 w-4" />
            </button>
          </div>
          <button className="bg-white text-black text-sm px-3 py-1 rounded-full flex items-center gap-1">
            <img src="/filter_icon.svg" alt="filter" className="h-4 w-4" />
            Filter
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 mb-4">
          <button className="text-white text-xl">‹</button>
          <span className="text-white font-bold text-lg">Sat, May 9, 2026</span>
          <button className="text-white text-xl">›</button>
        </div>

        {/* Section: Entrees */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white font-bold">Entrees</span>
            <div className="flex-1 h-px bg-white opacity-50"></div>
            <button className="text-white text-xl">⊖</button>
          </div>
          <div className="bg-white rounded-2xl p-4 grid grid-cols-3 gap-2">
            {["Ginger Jasmine Rice with Toasted Sesame Oil", "Seasoned Bok Choy", "Steamed Broccoli", "Mapo-Inspired Vegan Tofu"].map((item) => (
              <button
                key={item}
                onClick={() => openModal(item)}
                className="bg-[#f0e8e8] text-black text-sm px-3 py-3 rounded-full text-center hover:bg-[#e0d0d0] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Section: Salad Bar */}
        <div className="mt-8 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white font-bold">Salad Bar</span>
            <div className="flex-1 h-px bg-white opacity-50"></div>
            <button className="text-white text-xl">⊖</button>
          </div>
          <div className="bg-white rounded-2xl p-4 grid grid-cols-3 gap-2">
            {["Caesar Salad", "Baby Arugula", "Cottage Cheese", "Quinoa Black Bean and Roast Corn Salad"].map((item, i) => (
              <button
                key={i}
                onClick={() => openModal(item)}
                className="bg-[#f0e8e8] text-black text-sm px-3 py-3 rounded-full text-center hover:bg-[#e0d0d0] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Section: Sides */}
        <div className="mt-8 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white font-bold">Sides</span>
            <div className="flex-1 h-px bg-white opacity-50"></div>
            <button className="text-white text-xl">⊖</button>
          </div>
          <div className="bg-white rounded-2xl p-4 grid grid-cols-3 gap-2">
            {["Roasted Sweet Potatoes", "Garlic Green Beans", "Wild Rice Pilaf", "Honey Cornbread"].map((item) => (
              <button
                key={item}
                onClick={() => openModal(item)}
                className="bg-[#f0e8e8] text-black text-sm px-3 py-3 rounded-full text-center hover:bg-[#e0d0d0] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Section: Desserts */}
        <div className="mt-8 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white font-bold">Desserts</span>
            <div className="flex-1 h-px bg-white opacity-50"></div>
            <button className="text-white text-xl">⊖</button>
          </div>
          <div className="bg-white rounded-2xl p-4 grid grid-cols-3 gap-2">
            {["Chocolate Chip Cookies", "Warm Apple Crisp", "Vanilla Soft Serve", "Fresh Fruit Salad"].map((item) => (
              <button
                key={item}
                onClick={() => openModal(item)}
                className="bg-[#f0e8e8] text-black text-sm px-3 py-3 rounded-full text-center hover:bg-[#e0d0d0] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <MenuItemModal
          onClose={() => setModalOpen(false)}
          itemName={selectedItem}
          favoriteItems={favoriteItems}
          setFavoriteItems={setFavoriteItems}
        />
      )}
    </div>
  );
}