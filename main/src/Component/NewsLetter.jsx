import React from 'react'

export default function NewsLetter() {
  return (
    <div className='px-4 md:px-6 lg:px-24 py-10'>
      <div className='bg-blue-950 rounded-xl py-10'>
        <h1 className='text-white'>Subscribe</h1>
        <p className='pb-5 mt-3 text-white '>Join our newsletter and be the first to discover new destinations<br/> exclusive offers, and travel inspiration.</p>
       <div className='flex justify-between px-20'>
         <input type="text" placeholder='Type Here' className='w-[60vw] border border-gray-200 px-2'/>
         <button className='bg-white text-black px-5 py-2 rounded '>Send</button>
       </div>
      </div>
    </div>
  )
}
