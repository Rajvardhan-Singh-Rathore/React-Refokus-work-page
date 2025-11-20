import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import Button from './Button';

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto px-1 border-b-1 border-zinc-700 flex items-center justify-between">
      <div className="nleft">
        <div className="nleft flex items-center gap-24">
          <div className="nleft1 text-xs w-17 h-17 flex items-center">
            <a href="/">
              <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="refokus logo" />
            </a>
          </div>
          <div className="nleft2 flex gap-13">
            {["home", "work" ,"culture" ,'' ,"news"].map((elem,idx)=>idx==3 ? <div className="w-[1px] bg-zinc-700"></div>:idx==1 ? <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded full mt-1 bg-[rgb(0,255,25)]"style={{boxShadow: "rgba(0, 255, 27) 0px 0px 0.55em"}}></div><a href="">{elem}</a></div>:<a href="">{elem}</a>)}
          </div>
        </div>
      </div>
      <Button></Button>
    </div>
  )
}

export default Navbar;