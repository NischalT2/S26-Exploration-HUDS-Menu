interface ModalProps{
    open: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({open, setIsOpen}: ModalProps){

    return (
        <div onClick={()=>{setIsOpen(!open)}} className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white w-2/3 h-2/3 ">
                <p>Hello</p>
                <button onClick={()=>{setIsOpen(!open)}} className="border p-2 bg-blue-500 rounded cursor-pointer hover:bg-blue-200">Close</button>
            </div>

        </div>
    )
}