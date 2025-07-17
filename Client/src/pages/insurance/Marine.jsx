import React from 'react'
import Hero from '../../components/marine/Hero'
import MarineProduct from '../../components/marine/MarineProduct'
import Process from '../../components/marine/Process'
import Download from '../../components/home/Download'
import Companies from '../../components/home/Companies'

const Marine = () => {
  return (
    <>
      <Hero/> 
      <MarineProduct/>
      <Process/>
      <Download /> 
      <Companies />
    </>
  )
}

export default Marine