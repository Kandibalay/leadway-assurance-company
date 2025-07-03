import React from 'react'
import Leadership from '../components/about/Leadership'
import CoreValues from '../components/about/CoreValues'
import Download from '../components/home/Download'
import Companies from '../components/home/Companies'

const About = () => {
  return (
    <div>
      <CoreValues />
      <Leadership />
      <Download />
      <Companies />
    </div>
  )
}

export default About