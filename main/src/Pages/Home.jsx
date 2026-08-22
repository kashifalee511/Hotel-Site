import React from 'react'
import Hero from '../Component/Hero'
import Feature from '../Component/Feature'
import ExclusiveOffer from '../Component/ExclusiveOffer'
import Testonomial from '../Component/Testonomial'
import NewsLetter from '../Component/NewsLetter'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Feature/>
      <ExclusiveOffer/>
      <Testonomial/>
      <NewsLetter/>
    </div>
  )
}
