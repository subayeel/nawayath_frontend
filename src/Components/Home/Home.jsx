import React from 'react'
import Hero from '../Hero/Hero'
import InfoSection from '../InfoSection/InfoSection'
import MessageSection from '../MessageSection/MessageSection'
import MissionSection from '../MissionSection/MissionSection'
import Newsletter from '../Newsletter/Newsletter'
import { heroSectionData } from '../../Data/heroSectionData'
const Home = () => {
  return (
    <>
      {/* <Hero/> */}
      <InfoSection {...heroSectionData}/>
      <MessageSection/>
      {/* <MissionSection/> */}
      <Newsletter/>
      
    </>
  )
}

export default Home