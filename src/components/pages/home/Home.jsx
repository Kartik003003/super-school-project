import React from 'react'
import MyCarousel from '../casrousel/MyCarousel'
import Announcement from '../announcement/Announcement'
import Gallery from '../gallery/Gallery'
import TeamSection from '../ourteam/TeamSection'
import Sliderfeedback from '../feedback/Swiperfeedback'
const Home = () => {
  return (
    <div>
      <MyCarousel />
      <Announcement />
      <TeamSection />
      <Sliderfeedback />
      <Gallery />
    </div>
  )
}

export default Home
