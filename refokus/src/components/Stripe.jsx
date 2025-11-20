import React from 'react'

function Stripe({val,index,number}) {
  return (
    <div className="w-[20%] px-10 py-5 border-t-1 border-b-1 border-r-1 border-t-zinc-800 border-r-zinc-600 border-b-zinc-500 flex items-center justify-between">
        <img src={val[index]}></img>
        <h1>{number[index]}</h1>
    </div>
  )
}

export default Stripe