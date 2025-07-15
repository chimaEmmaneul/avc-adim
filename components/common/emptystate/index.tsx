import Image from 'next/image';
import React from 'react'

const EmptyState = () => {
  return (
    <div className='flex items-center justify-center flex-1 w-full h-[26rem] text-center'>
      <div className='space-y-4'>
        <p className='text-2xl font-medium'>No data</p>
        <Image src={"/img/empty-box.png"} width={200} height={200} alt={"empty"} className='mt-6' />
      </div>
    </div>
  )
}

export default EmptyState;