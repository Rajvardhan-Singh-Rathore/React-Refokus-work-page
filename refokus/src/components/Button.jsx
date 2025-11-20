import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
function Button({value = "Get Started"}) {
  return (
    <div>
        <button className="px-4 py-2 bg-zinc-100 flex items-center gap-3 rounded-full text-black text-regular">{value}<span className="mt-1"><BsArrowReturnRight /></span></button>
    </div>
  )
}

export default Button