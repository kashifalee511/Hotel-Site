import React from 'react'
import HotelCard from './HotelCard'
import { roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router'


export default function Feature() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center  md:px-10 lg:px-4 py-20'>
        <div className='py-5 '>
            <h1 className='text-white'>Featured Destination</h1>
            <p>Discover our handpicked selection of exceptional properties around the<br/> world  offering unparalleled luxury and unforgettable experiences.</p>
        </div>
      <div className='flex flex-wrap items-center gap-5 justify-center mt-20'>
        {roomsDummyData.slice(0,4).map((room,index)=>(
            <HotelCard key={room._id} room={room} index={index}/>
        ))}
      </div>
      <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}}
        className='my-16 px-4 py-2 text-sm font-medium border text-black border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
        View All Destinaton
      </button>
    </div>
  )
}
