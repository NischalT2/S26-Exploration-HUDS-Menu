"use client";
import {useState} from 'react';
import Modal from "./Components/modal";

export default function Home(){
    const [count, setCount] = useState(0);
    const [open, setIsOpen] = useState(false);

    return(
        <div className="m-4 text-black">
            <div>   
                <div>Count: {count}</div>
                <button onClick={() => {setCount(count + 1)}}
                className="rounded cursor-pointer bg-blue-500 text-white p-2 hover:bg-blue-600">Increment</button>
            </div>
            <div>
                <button onClick={() => setIsOpen(!open)} className="rounded cursor-pointer bg-green-500 text-white p-2 hover:bg-green-600">Open</button>

            </div>
        
            {open && <Modal open={open} setIsOpen={setIsOpen}/>}
        </div>
    )
}