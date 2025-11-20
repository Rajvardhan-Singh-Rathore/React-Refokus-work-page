import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className="w-full py-20 px-50">
        <div className="max-w-screen-xl mx-auto flex gap-2 -mt-20">
            <Card width={"basis-1/3"} start={false} para={true} hover1={"hover:bg-[url('https://startupful.io/image-proxy?url=https%3A%2F%2Fdyqqilhexbdksxumpfpu.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fstartupful-images%2Fui_images%2F01JAS0Q7GT82MB0PQJVMWYJV8Y.jpeg')]"} text1={"hover:text-zinc-900"}></Card>
            <Card width={"basis-2/3"} start={true} para={false} hover2={"hover:bg-[url('https://startupful.io/image-proxy?url=https%3A%2F%2Fdyqqilhexbdksxumpfpu.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fstartupful-images%2Fui_images%2F01JBG4V9VYT1KZFNR1PZTW2HCH.png')]"}></Card>
        </div>
    </div>
  )
}

export default Cards
 