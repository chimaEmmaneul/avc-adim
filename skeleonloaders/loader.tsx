"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function CircularLoaderCSS() {


  return (
    <div className=" relative flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a]">
      <div className="bg-black/40 absolute top-0 right-0 left-0 h-full w-full z-20 "></div>

      <div className="flex items-center ">
        <Image src="/img/inner.png" alt="outer image" width={50} height={50} className="flex self-center flex-shrink-0 animate-inner " />
        <Image src="/img/outer.png" alt="outer image" width={100} height={100} className="flex self-center flex-shrink-0 animate-outer " />
      </div>

    </div>
  )
}
