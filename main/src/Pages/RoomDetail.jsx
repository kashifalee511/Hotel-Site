import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from "../assets/assets";

export default function RoomDetail() {
    const {id} = useParams()
    const [room,setRoom]=useState(null)
    const [mainImage,setMainImage]=useState(null)

    useEffect(() => {
      const room =  roomsDummyData.find(room => room._id === id)
      room && setRoom(room)
      room && setMainImage(room.images[0])
    }, [id])

  return room && (

       <div>
        <div  id='bg' className='flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 xl:px-32
     text-white bg-[url("./src/assets/hotrl.jpg")] bg-no-repeat bg-center  bg-cover h-[70vh]'>
      <h1 className='text-white'>Room Details</h1>
      <p>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
      
    </div>
    <div className='flex md:flex-row  flex-col mt-10 items-start md:items-center px-4 gap-2'>
      <h2 className='text-start text-white '>{room.name} <span className='text-sm'>({room.roomType})</span></h2>
      <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-600 rounded-full'>20% Off</p>
    </div>
    <div className='flex px-4 mb-5 items-center mt-1 gap-1 text-white '>
      <img src={assets.locationIcon} alt="" />
      <span>{room.hotel.address}</span>
    </div>
    <div className='flex py-10 flex-col lg:flex-row mt-6 gap-6'>
      <div className='lg:w-1/2 w-full px-4'>
      <img src={mainImage} alt=""
      className='rounded-xl w-full shadow-lg object-cover' />
    </div>
    <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full px-4'>
      {room.images.length > 1 && room.images.map((image,index)=>(
        <img onClick={()=>setMainImage(image)}
        key={index} src={image} alt="" 
        className={`w-full rounded-xl shadow-lg object-cover cursor-pointer ${mainImage === image && 'outline-2 outline-orange-500'}`}/>
      ))}
    </div>
    </div> 
    <div className='flex flex-col md:flex-row mb-5  md:justify-between mt-10'> 
      <div className='px-4'>
        <h2 className='text-start md:text-4xl text-white'>{room.description}</h2>
        <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
          {room.amenities.map((item,index)=>(
            <div key={index} className='flex items-center gap-3 px-3 py-2 rounded-lg bg-white text-black'>
              <img src={facilityIcons[item]} alt={item} />
              <p className='text-xs'>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <p className='text-2xl font-medium px-4 text-white'>${room.pricePerNight}/Night</p>
    </div >
    <div className='px-4'>
      <form className='flex flex-col  md:items-center md:flex-row justify-between bg-white p-6 rounded-xl mx-auto mt-16 mx-w-6xl'>
      <div className='flex flex-col gap-5 flex-wrap md:flex-row items-start'>

          <div className='flex flex-col'>
            <label htmlFor="CheckInDate" className='text-start font-medium'>Check In </label>
            <input type="date" id="CheckinDate" required className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' placeholder='Check in' />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="CheckOutDate" className='text-start font-medium'>Check Out </label>
            <input type="date" id="CheckinDate" className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required placeholder='Check in' />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="guest" className='text-start font-medium'>Guest </label>
            <input type="number" id="guest" className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' placeholder='0' required/>
          </div>
          
      </div>
      

      

      <button type='Submit' className='bg-black hover:bg-black-dull active:scale-95 transition-all text-white rounded-md
      max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-3 cursor-pointer text-base'>
        Book Now
      </button>
    </form>
    <div className='mt-25 mb-20 space-y-4'>
            {roomCommonData.map((spec,index)=>(
              <div key={index} className='flex items-start gap-2'>
                <img src={spec.icon} alt="" className='w-6.5'/>
                <div>
                  <p className='text-start text-base text-white'>{spec.title}</p>
                  <p className='text-gray-200 text-start'>{spec.description}</p>
                </div>
              </div>
            ))}
          </div>
    </div>
</div>
    
  )
}
