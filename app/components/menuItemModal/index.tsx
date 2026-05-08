"use client";

interface MenuItemModalProps {
  onClose: () => void;
  itemName: string;
  favoriteItems: string[];
  setFavoriteItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function MenuItemModal({
  onClose,
  itemName,
  favoriteItems,
  setFavoriteItems,
}: MenuItemModalProps) {
  const isFavorited = favoriteItems.includes(itemName);

  const toggleFavorite = () => {
    setFavoriteItems((prev) =>
      isFavorited ? prev.filter((i) => i !== itemName) : [...prev, itemName]
    );
  };

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      {/* Modal card */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl leading-none font-light"
          aria-label="Close"
        >
          ×
        </button>

        {/* ── Dish title + Favorite button ── */}
        <div className="flex items-start justify-between pr-8 mb-4">
          <h2 className="text-2xl font-bold text-black">
            {itemName}
          </h2>
          {/* Favorite button */}
          <button
            onClick={toggleFavorite}
            aria-label={isFavorited ? "Unfavorite" : "Favorite"}
            className="ml-4 mt-1 flex-shrink-0 flex flex-col items-center gap-1 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 -960 960 960"
              width="28px"
              fill={isFavorited ? "#A51C30" : "none"}
              stroke="#A51C30"
              strokeWidth={isFavorited ? "0" : "40"}
              className="transition-all group-hover:scale-110"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
            </svg>
            <span className="text-xs text-[#A51C30] font-medium">
              {isFavorited ? "Unfavorite" : "Favorite"}
            </span>
          </button>
        </div>

        {/* ── Dietary icons ── */}
        <div className="flex items-center gap-6 mb-6">
          <div className="flex flex-col items-center gap-1">
            <div className="w-11 h-11 rounded-full border-2 border-[#2e7d4f] flex items-center justify-center text-[#2e7d4f] text-[10px] font-bold tracking-tight">
              VGN
            </div>
            <span className="text-xs text-gray-700">Vegetarian</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-11 h-11 rounded-full border-2 border-[#2e7d4f] flex items-center justify-center text-[#2e7d4f] text-sm font-bold">
              V
            </div>
            <span className="text-xs text-gray-700">Vegan</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-11 h-11 rounded-full border-2 border-[#2e7d4f] flex items-center justify-center text-[#2e7d4f] text-[9px] font-bold text-center leading-tight">
              HALAL
            </div>
            <span className="text-xs text-gray-700">Halal</span>
          </div>
        </div>

        {/* ── Nutrition Information heading ── */}
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-xl font-bold text-black whitespace-nowrap">Nutrition Information</h3>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* ── Nutrition Facts Box ── */}
        <div className="border-2 border-black text-black font-['Arial',sans-serif] text-sm mb-6">
          <div className="px-2 pt-1 pb-0 border-b-8 border-black">
            <p className="text-4xl font-extrabold leading-none">Nutrition Facts</p>
            <p className="text-xs mt-1">1 servings per container</p>
            <div className="flex justify-between items-baseline border-t border-black mt-1 pt-0.5 pb-1">
              <span className="text-sm font-bold">Serving size</span>
              <span className="text-sm font-bold">1 SLICE</span>
            </div>
          </div>
          <div className="px-2 py-1 flex justify-between items-center border-b-4 border-black">
            <span className="text-sm">Calories per serving</span>
            <span className="text-5xl font-extrabold leading-none">143</span>
          </div>
          <div className="flex border-b-4 border-black">
            <div className="flex-1 border-r border-black">
              <div className="flex justify-between px-2 py-0.5 border-b border-black text-[10px]">
                <span>Amount/serving</span>
                <span>% Daily Value*</span>
              </div>
              <div className="flex justify-between px-2 py-0.5 border-b border-black">
                <span><span className="font-bold">Total Fat</span> 6.4g</span>
                <span className="font-bold">8%</span>
              </div>
              <div className="flex justify-between pl-5 pr-2 py-0.5 border-b border-black">
                <span>Saturated Fat 1.2g</span>
                <span className="font-bold">5%</span>
              </div>
              <div className="flex justify-between pl-5 pr-2 py-0.5 border-b border-black">
                <span><span className="italic">Trans</span> Fat 0g</span>
                <span></span>
              </div>
              <div className="flex justify-between px-2 py-0.5 border-b border-black">
                <span><span className="font-bold">Cholesterol</span> 31.8mg</span>
                <span className="font-bold">11%</span>
              </div>
              <div className="flex justify-between px-2 py-0.5">
                <span><span className="font-bold">Sodium</span> 111.4mg</span>
                <span className="font-bold">5%</span>
              </div>
            </div>
            <div className="flex-1 border-r border-black">
              <div className="flex justify-between px-2 py-0.5 border-b border-black text-[10px]">
                <span>Amount/serving</span>
                <span>% Daily Value*</span>
              </div>
              <div className="flex justify-between px-2 py-0.5 border-b border-black">
                <span><span className="font-bold">Total Carbohydrate.</span> 19.9g</span>
                <span className="font-bold">7%</span>
              </div>
              <div className="flex justify-between pl-5 pr-2 py-0.5 border-b border-black">
                <span>Dietary Fiber 0g</span>
                <span className="font-bold">0%</span>
              </div>
              <div className="flex justify-between pl-5 pr-2 py-0.5 border-b border-black">
                <span>Total Sugars 11.1g</span>
                <span></span>
              </div>
              <div className="flex justify-between pl-8 pr-2 py-0.5 border-b border-black">
                <span>Includes 0g Added Sugars</span>
                <span className="font-bold">0%</span>
              </div>
              <div className="flex justify-between px-2 py-0.5">
                <span><span className="font-bold">Protein</span> 1.6g</span>
                <span></span>
              </div>
            </div>
            <div className="w-32 px-1.5 py-1 text-[9px] leading-tight text-gray-700 flex-shrink-0">
              * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
            </div>
          </div>
          <div className="px-2 py-1.5 grid grid-cols-4 gap-x-2 gap-y-0.5 text-[10px]">
            <div className="flex flex-col gap-0.5">
              <span>Fat 6.4g&nbsp;<strong>8%</strong></span>
              <span>Protein 1.6g&nbsp;<strong>3%</strong></span>
              <span>Total Sugars 11.1g&nbsp;<strong>45%</strong></span>
              <span>Vitamin D - mcg 0mcg&nbsp;<strong>0%</strong></span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span>• Cholesterol 31.8mg&nbsp;&nbsp;<strong>11%</strong></span>
              <span>• Saturated Fat 1.2g&nbsp;&nbsp;<strong>5%</strong></span>
              <span>• Calories 143.2kcal&nbsp;&nbsp;<strong>7%</strong></span>
              <span>• Added Sugar g</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span>• Sodium 111.4mg&nbsp;&nbsp;<strong>5%</strong></span>
              <span>• Trans Fatty Acid 0g</span>
              <span>• Iron 0.3mg&nbsp;&nbsp;<strong>2%</strong></span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span>• Carbohydrates 19.9g&nbsp;&nbsp;<strong>7%</strong></span>
              <span>• Dietary Fiber 0g&nbsp;&nbsp;<strong>0%</strong></span>
              <span>• Potassium 0mg&nbsp;&nbsp;<strong>0%</strong></span>
            </div>
          </div>
        </div>

        {/* ── Ingredients ── */}
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-bold text-black whitespace-nowrap">Ingredients</h3>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <p className="text-sm text-gray-800 leading-relaxed">
          INGREDIENTS: Apple Caramel Muffin Loaf Batter (Bleached Wheat Flour, Sugar,
          Eggs, Soybean Oil, Diced Apples, Water, Caramel Streusel (contains: Sugar,
          Wheat Flour, Corn Starch, Palm Oil, Natural/Artificial Flavor, Caramel Color),
          Modified Food Starch, Whey Protein, Dairy Whey, Leavening (Baking Soda, Sodium
          Aluminum Phosphate), Mono and Diglycerides, Spice, Salt, Guar Gum, Xantham Gum,
          Beta Carotene for Color, Enzyme.)
        </p>
        <p className="text-sm text-gray-800 leading-relaxed mt-2">
          ALLERGENS: Milk, Eggs, Tree Nuts, Peanuts, Wheat, Soybeans, Gluten
        </p>
        <p className="text-sm text-gray-800 leading-relaxed mt-2">
          PRODUCT INFORMATION: Freshly baked in our kitchens, from batter made by Bake&apos;n
          Joy in N. Andover, MA.
        </p>
      </div>
    </div>
  );
}