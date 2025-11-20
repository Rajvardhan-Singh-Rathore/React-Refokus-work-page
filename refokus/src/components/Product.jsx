import React from 'react'
import Button from './Button'

function Product({info,idx,/**mouseover*/}) {
  return (
    <div className="w-full py-6 h-[18rem] relative overflow-hidden ">
      <div /**onMouseMove={()=>mouseover(idx)}*/className="absolute h-[160px] w-[90vw] -right-50 z-0"><video autoPlay muted loop class="rounded-md" width="full" height='full'><source src="https://www.shutterstock.com/shutterstock/videos/3533905673/preview/stock-footage-glowing-light-blue-and-royal-blue-gradient-flow-on-black-background-k-blurred-lights-flashes-on.webm" type="video/mp4"/></video></div>
        <div z-10 /**onMouseMove={()=>mouseover(idx)}*/ className="py-10 h-[216px] px-10 max-w-screen-xl mx-auto flex items-center justify-between">
            <h1 className="-translate-x-[30%] bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 
               bg-clip-text text-transparent z-10 text-5xl capitalize font-bold z-10 text-5xl capitalize font-md">{info[idx].title}</h1>
            <div className="z-10 w-1/3 mr-30">
                <p className="z-10 mb-6">{info[idx].desc}</p>
                <div z-10 className="flex gap-3">
                  <Button value="z-10 Live Project"></Button>
                  {info[idx].case&&<Button value="Case Study"></Button>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product