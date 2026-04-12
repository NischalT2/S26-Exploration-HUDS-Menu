export default function Navbar() {
  return (
   
      <div className="bg-[#A41034] h-[44px] flex items-center justify-between">
        <div className="text-white text-[24px] font-serif tracking-wider leading-100% pl-[16px]" style={{ fontFamily: 'Inria Serif, serif' }}>
          <b>Harvard</b>
        </div>

        <div className="bg-white w-1/2 h-1/2 rounded-full flex items-left">
         <div className="text-black text-[8px] font-serif tracking-wider leading-100% pl-[10px] p-[6px]" style={{ fontFamily: 'Inria Serif, serif' }}>
          What do you want to eat today?
        </div>
        </div>


        <div className="flex flex-col justify-center pr-[16px]">
          <div className ="w-[24px] h-[24px] bg-white justify-center items-center flex flex-col">
            <div className="w-4 h-0.5 bg-black mb-1"></div>
            <div className="w-4 h-0.5 bg-black mb-1"></div>
            <div className="w-4 h-0.5 bg-black"></div>
          </div>
        </div>
   );
}