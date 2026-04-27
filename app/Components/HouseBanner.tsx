export default function HouseBanner() {
    return (
        <div className = "bg-white p-4">
            <div className = "rounded-4xl h-35 mx-20 my-9 w-full overflow-hidden">
                <div className = " grid grid-cols-3">
                    <img src = "https://thumbnails.thecrimson.com/photos/2017/10/05/195827_1324710.jpg.2000x1333_q95_crop-smart_upscale.jpg"
                    className = "w-full h-full object-cover object-[50%_60%]"></img>
                    <img src = "https://essroombook.fas.harvard.edu/lib/img/classrooms/images/annen1.jpg" className = "w-full h-full object-cover object-[20%_60%]"></img>
                    <img src = "https://media.gettyimages.com/id/594756110/photo/annenberg-hall-harvard-university.jpg?s=1024x1024&w=gi&k=20&c=AkotyDW265Pi94SjfacgrXzfufdf5lBBTLCpH0xdTmo=" className = "w-full h-full object-cover object-[50%_60%]"></img>
                </div>
                <div className = " rounded-2xl bg-white relative bottom-12 left-5 w-40 h-8 flex items-center justify-center">
                    <div className = "text-black font-serif text-xl">Annenberg</div>   
                </div>
            </div>
        </div>
    )
}