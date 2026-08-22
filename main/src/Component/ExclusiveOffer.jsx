import React from 'react'
import { assets, exclusiveOffers } from '../assets/assets'

export default function ExclusiveOffer() {
  return (
   <div>
     <div className='lg:flex justify-between px-5'>
      <div className='px-4 py-10'>
        <h1 className='lg:text-start'>Exclusive Offer</h1>
      <p>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
      </div> 
        <button className= 'text-white  '>View All Offer</button>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-12 pb-10 px-10'>
      {exclusiveOffers.map((item)=>(
        <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:p1-18 
        px-4 rounded-xl text-white bg-no-repeat bg-center bg-cover ' style={{backgroundImage: `url(${item.image})`}}>
          <p className='px-3 py-1 absolute top-4 text-xs bg-white text-gray-800 font-medium rounded-full'>{item.priceOff}%Off</p>
          <div>
            <p className='text-start font-medium text-2xl font-playfair'>{item.title}</p>
            <p className='text-start'>{item.description}</p>
            <p className='text-start text-xs text-white/70 mt-3 '>Expire {item.expiryDate}</p>
          </div >
          <button className='flex items-center gap-2 font-medium cursor-pointer mt-14 mb-5'>View All Offer
            <img src={assets.arrowIcon} alt="" className='transition-all invert group-hover:translate-x-1' />
          </button>
        </div>
      ))}
    </div>
   </div>
  )
}
