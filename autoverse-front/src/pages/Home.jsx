import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import FeatureSection from '../components/sections/FeatureSection'
import CTASection from '../components/sections/CtaSection'
import StatSection from '../components/sections/StatSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FeatureSection/>
      <CTASection />
      <StatSection/>
    </div>
  )
}

export default Home
