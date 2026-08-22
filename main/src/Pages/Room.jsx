import React from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router'

export default function Room() {
  const navigate = useNavigate()
  return (
    <div>
      <div  id='bg' className='flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 xl:px-32
     text-white bg-[url("./src/assets/rooms001.jpg")] bg-no-repeat bg-center  bg-cover h-[80vh]'>
      <h1 className='text-white'>Hotel Rooms</h1>
      <p>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
    </div>
    <div>
      <div className='px-10 w-2/3'>
      {roomsDummyData.map((room)=>(
      <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
        <img onClick={()=>{navigate(`/rooms/${room._id}`);scrollTo(0,0)}}
        src={room.images[0]} 
        alt="" title='View Room Details' 
        className='max-h-65 shadow-lg md:w-1/2 rounded-xl object-cover cursor-pointer' />
        <div className='md:w-1/2 flex flex-col gap-2'>
          <p className='text-gray-300 text-start'>{room.hotel.city}</p>
          <h2 onClick={()=>{navigate(`/rooms/${room._id}`);scrollTo(0,0)}}
           className='text-white text-start'>{room.name}</h2>
          <p className='text-gray-300 text-start'>{room.description}</p>
          <div className='flex items-center'>
          <img src={assets.starIconFilled} alt="" />400 + Reviews
          </div>
          <div className='flex items-center text-gray-300 text-sm gap-1 mt-2'>
            <img src={assets.locationIcon} alt="location icon" />
            <span>{room.hotel.address}</span>
          </div>
          <div className='flex flex-wrap mt-3 mb-6 gap-4 items-center'>
            {room.amenities.map((item)=>(
              <div className='bg-white text-black flex px-4 py-2 rounded-lg items-center gap-2 '>
                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                <p className='text-xs'>{item}</p>
              </div>
            ))}
          </div>
          <p className='text-white font-medium text-start text-xl'>{room.pricePerNight}/Night</p>
        </div>
      </div>
    ))}
    </div>
    </div>
    
    </div>
  )
}
