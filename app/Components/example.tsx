export default function DiningHall(){
    return (
        <div className = "flex flex-col text-black p-16"> 
        {/*flex col = vertically aligned*/}
            <div className = "flex flex-row gap-10 border-black rounded-xl gap-10 p-6 justify-between">
                <input className="border w-3/4"></input>
                <button className="border p-4"></button>
            </div>
            <div className = "flex flex-row">
                <div className = "mt-5 flex flex-col">
                    <h1 className="font-bold text-3xl">Website</h1>
                    <div className = "flex flex-row gap-5">
                        <button className = "border rounded p-2">Buy</button>
                        <button className = "border rounded p-2">Sell</button>
                        <div className = "w-full border-t border-red"></div>
                    </div>
                </div>
                <img src = "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2F5a61391879ebaa3e785458fb668802d8aab17346-1364x1364.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1080&q=75" 
                className="rounded-full w-100 h-100 object-cover"></img>
            </div>

        </div>
    )
}


