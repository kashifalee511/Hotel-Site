import React from 'react'
import { Link } from 'react-router'
import { assets } from '../assets/assets'

export default function HotelCard({room,index}) {
  return (
    <Link to={'/room/' + room._id} onClick={()=>scrollTo(0,0)} key={room._id} className='relative max-w-70 rounded-xl w-full 
    overflow-hidden bg-white text-gray-500/90'>
        <img src={room.images[0]} alt="" />
       {index % 2 == 0 && <p className='px-3 py-1 top-3 left-3 absolute text-xs bg-white text-gray-800 font-medium rounded-full'>Best Seller</p>}
        <div className='p-4 pt-5'>
            <div className='flex items-center justify-between'>
                <p className='font-playfair font-medium text-xl text-gray-800'>{room.hotel.name}</p>
            <div className='flex items-center gap-1'>
                <img src={assets.starIconFilled} alt="" />4.5
            </div>
            </div>
            <div className='flex items-center gap-1'>
                <span className='text-start'>{room.hotel.address}</span>
                <img src={assets.locationIcon} alt="" />4.5
            </div>
            <div className='flex items-center justify-between mt-4'>
                <p><span className='text-xl text-gray-800'>${room.pricePerNight}</span>/Night</p>
                <button className='px-4 py-2 font-medium border border-gray-400 rounded hover:bg-gray-100 transition-all cursor-pointer text-sm'>Book Now</button>
            </div>
        </div>
    </Link>
  )
}
