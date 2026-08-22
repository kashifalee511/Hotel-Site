import React from 'react'
import HotelCard from './HotelCard'
import { roomsDummyData } from '../assets/assets'

export default function Feature() {
  return (
    <div>
      <div className='flex flex-wrap items-center gap-6 justify-center mt-20'>
        {roomsDummyData.slice(0,4).map((room,index)=>(
            <HotelCard key={room._id} room={room} index={index}/>
        ))}
      </div>
    </div>
  )
}
