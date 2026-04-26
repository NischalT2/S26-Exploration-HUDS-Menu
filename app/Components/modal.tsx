import React from "react";

interface ModalProps {
    open: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;



export default function modal({open, setIsOpen}: ModalProps){

    return(
        <div className="fixed inset-0 bg-black/50">
            <div className = "bg-white w-2/3 h-2/3">
                <p>Hello</p>
                <button onClick={() => setIsOpen(!open)}>Close</button>
            

            </div>

        </div>
    )
}