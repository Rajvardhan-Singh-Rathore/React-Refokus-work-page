import React from 'react'

function Footer() {
  const navis = ["Privacy Policy","work","profile","Terms"];
  const navis2 = ["Social","instagram","facebook","LinkedIn"];
  const navis3 = ["Buisness","Home","work","careers","contacts"];
  return (
    <div className="w-full p-5 px-50">
        <div className="w-max-screen-xl mx-auto flex items-center justify-between h-52 py-30">
            <div className="flex flex-col justify-center">
                <h1 className="text-[9rem] leading-none font-semibold tracking-tight">refokus.</h1>
                <div className="flex gap-14 translate-y-9">{navis.map((elem,index)=><p className="text-zinc-600">{elem}</p>)}</div>
            </div>
            <div className="w-[40%] flex gap-10 pb-23">
                <div className="text-zinc-600 translate-y-12">{navis2.map((elem,index)=>index===0?<p className="mb-5">{elem}</p>:<p className="mt-1">{elem}</p>)}</div>
                <div className="translate-y-12">{navis3.map((elem,index)=>index===0?<p className="mb-5 text-zinc-600">{elem}</p>:<p className="text-zinc-300">{elem}</p>)}</div>
                <div className="translate-y-14 pt-10 text-zinc-200 whitespace-nowrap leading-none">
                    <p>Refokus is a plannering digital</p>
                    <p className="ml-3 mt-1">agency driven by design.</p>
                    <p className="ml-5 mt-1">rajvardhan singh rathore</p>
                    <img className="w-40 mt-5 ml-10" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer