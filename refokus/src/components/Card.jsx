import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({width,start,para,hover1,hover2,text1}) {
  return (
    
        <div className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[25rem] flex flex-col justify-between ${!start&&text1} ${start?hover2:hover1}`}>
            <div className="w-full">
                <div className="flex items-center justify-between">
                    {start===true?<h5>Get in Touch</h5>:<h5>Up Next: Culture</h5>}
                    <IoIosArrowRoundForward />
                </div>
                {start===true?<h3 className="text-2xl mt-10 leading-none font-semibold">Let's get to it together.</h3>:<h3 className="text-xl mt-10 leading-none font-semibold">Who we are.</h3>}
            </div>
            <div className="down">
                {start&&(<><h1 className="text-6xl mb-2 font-semibold">start a project</h1>
                <button className="px-3 py-2 mt-2 border-1 border-zinc-200 rounded-full">Contact us</button></>)}
                {para&&(<p className="text-sm font-md mt-4 text-zinc-700">Explore what drives our team.</p>)}
            </div>
        </div>
    
  )
}

export default Card