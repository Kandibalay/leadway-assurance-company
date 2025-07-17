import React from 'react'
import Hero from '../../components/marine cargo/Hero'
import Achievement from '../../components/marine cargo/Achievement'
import Offer from '../../components/marine cargo/Offer'
import Plans from '../../components/marine cargo/Plans'
import Download from '../../components/home/Download'
import Companies from '../../components/home/Companies'



const MarineCargo = () => {
  return (
    <>
      <Hero/>
      <Offer/>
      <Achievement/>
      <Plans/>
      <Download />
      <Companies />
    </>
  )
}

export default MarineCargo