import React from 'react'
import Hero from '../Hero/Hero'
import MessageSection from '../MessageSection/MessageSection'
import MissionSection from '../MissionSection/MissionSection'
import Newsletter from '../Newsletter/Newsletter'
const Home = () => {
  return (
    <>
      <Hero/>
      <MessageSection/>
      {/* <MissionSection/> */}
      <Newsletter/>
      
    </>
  )
}

export default Home