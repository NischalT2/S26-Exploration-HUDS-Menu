export default function Annenberg(){
    return(
        <div className = "h-screen bg-white flex flex-col">
            <div className = "text-white font-semibold width-full font-serif text-4xl justify-between bg-red-900 p-4">
                Harvard
            </div>
            {/*The first box with berg pics*/}
            <div className = " rounded-4xl h-45 mx-20 my-9 width-full">
                <img src = "https://thumbnails.thecrimson.com/photos/2017/10/05/195827_1324710.jpg.2000x1333_q95_crop-smart_upscale.jpg"
                className = " rounded-4xl w-full h-full object-cover object-[50%_60%]"></img>
                <div className = " rounded-2xl bg-white relative bottom-12 left-5 w-40 h-8 flex items-center justify-center">
                    <div className = "text-black font-serif text-xl">Annenberg</div>   
                </div>
            </div>
            {/*The second box with menus*/}
            <div className = " rounded-2xl h-screen mx-20 bg-red-900">
                <div className = "flex flex-col gap-4 p-4">
                    <div className = "flex items-center">
                        <div className = "flex-1 flex gap-2">
                            <div className = "text-center rounded-full bg-white w-20 h-8 px-3 py-1 font-serif">Dinner</div>
                            <div className = "text-center rounded-full bg-white w-20 h-8 px-3 py-1 font-serif">Daily</div>
                            <div className = "text-center rounded-full bg-white w-20 h-8 px-3 py-1 font-serif">Date</div>
                        </div>  
                        <div className = "text-white text-center font-serif text-xl">Sun, April 5, 2026</div>
                        <div className = "flex-1 flex justify-end">
                            <div className = "text-center rounded-full bg-white w-20 h-8 px-3 py-1 font-serif">Filter</div>
                        </div>
                    </div>
                </div>
                <div className = "flex items-center my-4">
                    <div className = "flex-1 flex text-white text-xl font-serif px-5">Entrees</div>
                    <div className = " h-px w-full bg-white/50 mx-5"></div>
                </div>
                <div className = " flex flex-wrap rounded-2xl bg-white flex-1 mx-4 h-60 justify-between gap-4 p-4">
                    {/*smaller boxes*/}
                    <div className = "flex items-center justify-center rounded-xl bg-gray-300 w-100 h-15 m-3 font-serif">Coconut Chicken</div>
                    <div className = "flex items-center justify-center rounded-xl bg-gray-300 w-100 h-15 m-3 font-serif">Grilled Salmon</div>
                    <div className = "flex items-center justify-center rounded-xl bg-gray-300 w-100 h-15 m-3 font-serif">Leftovers From Breakfast</div>
                    <div className = "flex items-center justify-center rounded-xl bg-gray-300 w-100 h-15 m-3 font-serif">Random</div>
                    <div className = "flex items-center justify-center rounded-xl bg-gray-300 w-100 h-15 m-3 font-serif">Ew</div>
                    <div className = "flex items-center justify-center rounded-xl bg-gray-300 w-100 h-15 m-3 font-serif">Nah</div>

                </div>
                <div className = "flex items-center my-4">
                    <div className = "flex-1 flex text-white text-xl font-serif px-5">Desserts</div>
                    <div className = " h-px w-full bg-white/50 mx-5"></div>
                </div>
                <div className = " flex flex-wrap rounded-2xl bg-white flex-1 mx-4 h-60 justify-between gap-4 p-4">
                    {/*smaller boxes*/}
                    <div className = "flex items-center justify-center rounded-xl bg-gray-300 w-100 h-15 m-3 font-serif">CHEESECAKE</div>
                    <div className = "flex items-center justify-center rounded-xl bg-gray-300 w-100 h-15 m-3 font-serif">BANANA PUDDING</div>
                    <div className = "flex items-center justify-center rounded-xl bg-gray-300 w-100 h-15 m-3 font-serif">Ice Cream</div>
                    <div className = "flex items-center justify-center rounded-xl bg-gray-300 w-100 h-15 m-3 font-serif">Tiramisu</div>
                    <div className = "flex items-center justify-center rounded-xl bg-gray-300 w-100 h-15 m-3 font-serif">Mango Rice Pudding</div>
                    <div className = "flex items-center justify-center rounded-xl bg-gray-300 w-100 h-15 m-3 font-serif">IDK</div>
                </div>
                


            </div>
        </div>
    )
}