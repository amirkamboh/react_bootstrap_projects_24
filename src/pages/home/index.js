import React from 'react'
import Herosections from './Components/herosections'
import Latestblog from './Components/latestblog'
import Ads from './Components/ads'
import Latestpost from './Components/latestpost'
import Buttion from './Components/buttion'

const Home = () => {
  return (
    <>
      <Herosections />
      <Latestpost />
      <Latestblog />
      <Buttion />
      <Ads />
    </>
  )
}

export default Home;

