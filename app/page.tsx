import MenuCategory from "@/app/components/menuCategory";
import Navbar from "./components/navbar";

export default function Home() {
  return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className='flex flex-row w-10/11 h-40 rounded-3xl overflow-hidden justify-center mx-auto mt-5'>
        <img src='https://i.ytimg.com/vi/YtIF-CP5ycc/maxresdefault.jpg' className='object-cover w-1/3 h-full'></img>
        <img src='https://college.harvard.edu/sites/default/files/styles/max_800_x_985/public/2022-11/linderpix-Harvard-21210-web.jpg?itok=v2HDrwVm' className='object-cover h-full w-1/3'></img>
        <img src='https://d3e1m60ptf1oym.cloudfront.net/1a24fa9c-e118-11e3-8d91-f2b86e40979d/140429_HFC_002_xgaplus.jpg' className='object-cover h-full w-1/3'></img>
        </div>
        <div className='flex flex-col w-10/11 min-h-screen mb-8 mx-auto mt-5 rounded-2xl bg-[#A51C30]'>
        <div className='flex flex-row justify-between w-full px-4 py-5 gap-3'>
          <div className='flex flex-row gap-3'>
        <div className='flex flex-row bg-white text-gray-700 text-xs px-4 py-2 rounded-full w-15 h-7 items-center justify-center'>Dinner</div>
        <button type="button" className='flex bg-white text-gray-700 text-xs px-4 py-2 rounded-full w-15 h-7 items-center justify-center cursor-pointer'>Daily</button>
        <div className='flex flex-row bg-white text-gray-700 text-xs px-4 py-2 rounded-full w-15 h-7 items-center justify-center'>Date</div>
          </div>
        <div className='flex flex-row border text-white text-xs px-4 py-2 rounded-full w-15 h-7 items-center justify-center'>Filter</div>
        </div>
        <div className="flex flex-row justify-center items-center pb-6 text-white font-bold ">
              Sun, Mar 8, 2026
        </div>
        
        <MenuCategory />
        <MenuCategory />
        <MenuCategory />
        

        </div>
        
        
      </div>

      );
}
