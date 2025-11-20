import React from 'react'

function Marquee({accept}) {
  return (
    <div className="w-full flex gap-30 py-5 whitespace-nowrap">
        {accept.map((item,index)=><img className="w-24 shrink-0"src={accept[index]}></img>)}
        {accept.map((item,index)=><img className="w-24 shrink-0"src={accept[index]}></img>)}
    </div>
  )
}

export default Marquee