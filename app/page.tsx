"use client";
import { useState } from 'react';
import Modal from "./components/Modal"

export default function Home () {
  const [count, setCount] = useState(0);
  const [open, setIsOpen] = useState(false);

  return(
    <div className="m-4 text-black">
      <div>
        <div>Count: {count}</div>
        <button onClick={() => {setCount(count + 1)}} 
        className="border p-2 bg-blue-500 rounded cursor-pointer hover:bg-blue-200">Increment</button>
        <button onClick={() => {setCount(count - 1)}} 
        className="border p-2 bg-red-500 rounded cursor-pointer hover:bg-red-200 ml-5">Decrement</button>
      </div>
      <div>
        <button onClick={() => {setIsOpen(!open)}} 
        className="border p-2 bg-blue-500 rounded cursor-pointer hover:bg-blue-200">Open</button>
      </div>

      {open && (
        <Modal open={open} setIsOpen={setIsOpen}></Modal>
      )}

    </div>
  )
}