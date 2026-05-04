"use client";
 
interface MenuItemModalProps {
  onClose: () => void;
}
 
export default function MenuItemModal({ onClose }: MenuItemModalProps) {
  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" // inset pins the div to cover the screen regardless of scroll position
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
 
        {/* ── Dish title ── */}
        {/* PLACEHOLDER: Replace with dynamic dish name prop */}
        <h2 className="text-2xl font-bold text-black mb-4 pr-8">
          Ginger Jasmine Rice with Toasted Sesame Oil
        </h2>
 
        {/* ── Dietary icons ── */}
        <div className="flex items-center gap-6 mb-6">
          {/*
           * PLACEHOLDER: Replace each placeholder <div> with an <Image> component.
           * Example:
           *   <Image src="/icons/vegetarian.svg" alt="Vegetarian" width={44} height={44} />
           * Place the icon files in your /public/icons/ directory.
           */}
 
          {/* PLACEHOLDER: Vegetarian icon */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-11 h-11 rounded-full border-2 border-[#2e7d4f] flex items-center justify-center text-[#2e7d4f] text-[10px] font-bold tracking-tight">
              VGN
            </div>
            <span className="text-xs text-gray-700">Vegetarian</span>
          </div>
 
          {/* PLACEHOLDER: Vegan icon */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-11 h-11 rounded-full border-2 border-[#2e7d4f] flex items-center justify-center text-[#2e7d4f] text-sm font-bold">
              V
            </div>
            <span className="text-xs text-gray-700">Vegan</span>
          </div>
 
          {/* PLACEHOLDER: Halal icon */}
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
 
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            NUTRITION FACTS BOX
            Layout mirrors the official USDA dual-column label
            as rendered on foodpro.huds.harvard.edu
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="border-2 border-black text-black font-['Arial',sans-serif] text-sm mb-6">
 
          {/* ── Header ── */}
          <div className="px-2 pt-1 pb-0 border-b-8 border-black">
            <p className="text-4xl font-extrabold leading-none">Nutrition Facts</p>
            <p className="text-xs mt-1">1 servings per container</p>
            <div className="flex justify-between items-baseline border-t border-black mt-1 pt-0.5 pb-1">
              <span className="text-sm font-bold">Serving size</span>
              <span className="text-sm font-bold">1 SLICE</span>
            </div>
          </div>
 
          {/* ── Calories row ── */}
          <div className="px-2 py-1 flex justify-between items-center border-b-4 border-black">
            <span className="text-sm">Calories per serving</span>
            <span className="text-5xl font-extrabold leading-none">143</span>
          </div>
 
          {/* ── Two-column nutrient table ── */}
          <div className="flex border-b-4 border-black">
 
            {/* Left nutrient column */}
            <div className="flex-1 border-r border-black">
              {/* Column header */}
              <div className="flex justify-between px-2 py-0.5 border-b border-black text-[10px]">
                <span>Amount/serving</span>
                <span>% Daily Value*</span>
              </div>
 
              {/* Total Fat */}
              <div className="flex justify-between px-2 py-0.5 border-b border-black">
                <span><span className="font-bold">Total Fat</span> 6.4g</span>
                <span className="font-bold">8%</span>
              </div>
              {/* Saturated Fat (indented) */}
              <div className="flex justify-between pl-5 pr-2 py-0.5 border-b border-black">
                <span>Saturated Fat 1.2g</span>
                <span className="font-bold">5%</span>
              </div>
              {/* Trans Fat (indented, italic) */}
              <div className="flex justify-between pl-5 pr-2 py-0.5 border-b border-black">
                <span><span className="italic">Trans</span> Fat 0g</span>
                <span></span>
              </div>
              {/* Cholesterol */}
              <div className="flex justify-between px-2 py-0.5 border-b border-black">
                <span><span className="font-bold">Cholesterol</span> 31.8mg</span>
                <span className="font-bold">11%</span>
              </div>
              {/* Sodium */}
              <div className="flex justify-between px-2 py-0.5">
                <span><span className="font-bold">Sodium</span> 111.4mg</span>
                <span className="font-bold">5%</span>
              </div>
            </div>
 
            {/* Right nutrient column */}
            <div className="flex-1 border-r border-black">
              {/* Column header */}
              <div className="flex justify-between px-2 py-0.5 border-b border-black text-[10px]">
                <span>Amount/serving</span>
                <span>% Daily Value*</span>
              </div>
 
              {/* Total Carbohydrate */}
              <div className="flex justify-between px-2 py-0.5 border-b border-black">
                <span><span className="font-bold">Total Carbohydrate.</span> 19.9g</span>
                <span className="font-bold">7%</span>
              </div>
              {/* Dietary Fiber (indented) */}
              <div className="flex justify-between pl-5 pr-2 py-0.5 border-b border-black">
                <span>Dietary Fiber 0g</span>
                <span className="font-bold">0%</span>
              </div>
              {/* Total Sugars (indented) */}
              <div className="flex justify-between pl-5 pr-2 py-0.5 border-b border-black">
                <span>Total Sugars 11.1g</span>
                <span></span>
              </div>
              {/* Includes Added Sugars (double-indented) */}
              <div className="flex justify-between pl-8 pr-2 py-0.5 border-b border-black">
                <span>Includes 0g Added Sugars</span>
                <span className="font-bold">0%</span>
              </div>
              {/* Protein */}
              <div className="flex justify-between px-2 py-0.5">
                <span><span className="font-bold">Protein</span> 1.6g</span>
                <span></span>
              </div>
            </div>
 
            {/* Footnote column (right side, narrow) */}
            <div className="w-32 px-1.5 py-1 text-[9px] leading-tight text-gray-700 shrink-0">
              * The % Daily Value (DV) tells you how much a nutrient in a serving of
              food contributes to a daily diet. 2,000 calories a day is used for
              general nutrition advice.
            </div>
          </div>
 
          {/* ── Micronutrient summary grid ── */}
          <div className="px-2 py-1.5 grid grid-cols-4 gap-x-2 gap-y-0.5 text-[10px]">
            {/* Column 1 — no bullet */}
            <div className="flex flex-col gap-0.5">
              <span>Fat 6.4g&nbsp;<strong>8%</strong></span>
              <span>Protein 1.6g&nbsp;<strong>3%</strong></span>
              <span>Total Sugars 11.1g&nbsp;<strong>45%</strong></span>
              <span>Vitamin D - mcg 0mcg&nbsp;<strong>0%</strong></span>
            </div>
            {/* Column 2 — bulleted */}
            <div className="flex flex-col gap-0.5">
              <span>• Cholesterol 31.8mg&nbsp;&nbsp;<strong>11%</strong></span>
              <span>• Saturated Fat 1.2g&nbsp;&nbsp;<strong>5%</strong></span>
              <span>• Calories 143.2kcal&nbsp;&nbsp;<strong>7%</strong></span>
              <span>• Added Sugar g</span>
            </div>
            {/* Column 3 — bulleted */}
            <div className="flex flex-col gap-0.5">
              <span>• Sodium 111.4mg&nbsp;&nbsp;<strong>5%</strong></span>
              <span>• Trans Fatty Acid 0g</span>
              <span>• Iron 0.3mg&nbsp;&nbsp;<strong>2%</strong></span>
            </div>
            {/* Column 4 — bulleted */}
            <div className="flex flex-col gap-0.5">
              <span>• Carbohydrates 19.9g&nbsp;&nbsp;<strong>7%</strong></span>
              <span>• Dietary Fiber 0g&nbsp;&nbsp;<strong>0%</strong></span>
              <span>• Potassium 0mg&nbsp;&nbsp;<strong>0%</strong></span>
            </div>
          </div>
        </div>
        {/* ── End Nutrition Facts Box ── */}
 
        {/* ── Ingredients ── */}
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-bold text-black whitespace-nowrap">Ingredients</h3>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        {/* PLACEHOLDER: Replace with dynamic ingredients string */}
        <p className="text-sm text-gray-800 leading-relaxed">
          INGREDIENTS: Apple Caramel Muffin Loaf Batter (Bleached Wheat Flour, Sugar,
          Eggs, Soybean Oil, Diced Apples, Water, Caramel Streusel (contains: Sugar,
          Wheat Flour (Niacin, Iron, Thiamin Mononitrate, Riboflavin, Folic Acid), Corn
          Starch, Palm Oil, Natural/Artificial Flavor, Caramel Color), Modified Food
          Starch, Whey Protein, Dairy Whey, Leavening (Baking Soda, Sodium Aluminum
          Phosphate), Mono and Diglycerides, Spice, Salt, Guar Gum, Xantham Gum, Beta
          Carotene for Color, Enzyme. THIS PRODUCT IS MANUFACTURED ON EQUIPMENT EXPOSED
          TO ALMOND, COCONUT, PECAN, PISTACHIO, SOY AND WALNUT PRODUCTS.)
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