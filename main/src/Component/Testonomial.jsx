import React from 'react'
import { assets, testimonials } from '../assets/assets'

export default function Testonomial() {
  return (
    <div>
      <div className='py-4'>
        <h1 className='text-center text-white'>What Our Guest Says</h1>
        <p className='px-4 md:px-6 '>Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world.</p>
      </div>
       <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow max-w-xs">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-start font-medium text-xl text-black">{testimonial.name}</p>
                                <p className="text-gray-500 text-start">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                        <img key={index} className='py-1' src={assets.starIconFilled} alt="" />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-7 mb-4 text-start">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
    </div>
  )
}
