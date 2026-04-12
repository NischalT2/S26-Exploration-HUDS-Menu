"use client";
import { useState } from "react";

export default function Home () {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  return(
    <div className="w-auto m-4 text-black">
      <div>
        <div className="text-2xl font-bold">Count: {count}</div>
          <button onClick={() => {setCount(count + 1)}}
          className="bg-blue-500 cursor-pointer border rounded p-2 hover:bg-blue-200">
                    Increment
          </button>
          <button onClick={() => {setCount(count - 1)}}
                  className="bg-blue-500 cursor-pointer border rounded p-2 hover:bg-blue-200">Decrement</button>
      </div>
      <div>
        <button onClick={() => {setOpen(true)}} className="bg-blue-500 cursor-pointer border rounded p-2 hover:bg-blue-200">
          Open
        </button>
        {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white p-6 w-2/3 h-2/3">
              <p>Hello</p>
              <button onClick={() => {setOpen(false)}} className="border bg-red-500 text-white p-2 rounded cursor-pointer hover:bg-red-200">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}