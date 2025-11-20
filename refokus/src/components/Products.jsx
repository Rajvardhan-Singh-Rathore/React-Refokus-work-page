import React, { useState } from 'react'
import Product from './Product';
import { motion,useScroll} from "motion/react"
function Products() {
  const products = [
        {title:"arqitel",desc:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",case:false},
        {title:"TTR",desc:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",case:false},
        {title:"YIR 2022",desc:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",case:false},
        {title:"Yahoo!",desc:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",case:true},
        {title:"Rainfall",desc:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",case:true}
    ];
  const [pos,setPos]=useState(0);
  function mouseover(idx){
    setPos(idx*18);
  }
  return (
    <div className="mt-30 relative">
        {products.map((item,idx)=><Product info={products} idx={idx} mouseover={mouseover}></Product>)}
    <div className="w-full h-full absolute top-0 pointer-events-none">
      <motion.div initial={{y:pos}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.6}} animate={{y:pos+'rem'}} className="window w-[26rem] h-[18rem] bg-sky-100 absolute left-[24%] rounded-3xl overflow-hidden">
        <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:0.6}}animate={{y:-pos+'rem'}} className="window w-full h-full bg-sky-200 rounded-lg overflow-hidden"><video autoPlay muted loop class="rounded-md" width="full"><source src="https://refocus-clone-aman.vercel.app/assets/arqitel-D3jJRwFT.mp4" type="video/mp4"/></video></motion.div>
        <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:0.6}}animate={{y:-pos+'rem'}} className="window w-full h-full bg-sky-300"><video autoPlay muted loop class="rounded-md" width="full"><source src="https://refocus-clone-aman.vercel.app/assets/rainfall-BZC7HG1T.mp4" type="video/mp4"/></video></motion.div>
        <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:0.6}}animate={{y:-pos+'rem'}} className="window w-full h-full bg-sky-400"><video autoPlay muted loop class="rounded-md" width="full"><source src="https://refocus-clone-aman.vercel.app/assets/yir-BzJiRbqx.mp4" type="video/mp4"/></video></motion.div>
        <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:0.6}}animate={{y:-pos+'rem'}} className="window w-full h-full bg-sky-500"><video autoPlay muted loop class="rounded-md" width="full"><source src="https://refocus-clone-aman.vercel.app/assets/yahoo-D7WzLbum.mp4" type="video/mp4"/></video></motion.div>
        <motion.div transition={{ease:[0.76, 0, 0.24, 1],duration:0.6}}animate={{y:-pos+'rem'}} className="window w-full h-full bg-sky-600"><video autoPlay muted loop class="rounded-md" width="full"><source src="https://refocus-clone-aman.vercel.app/assets/ttr-CUQdDHBj.mp4" type="video/mp4"/></video></motion.div>
      </motion.div>
    </div>
    </div>
  )
}

export default Products