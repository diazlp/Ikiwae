import React from 'react'
import HeroComponent from '../../Hero'
import FeaturedComponent from '../../Featured'

const MainLayout: React.FC = () => {
  return (
    <div className="container main-section">
      <HeroComponent />
      <FeaturedComponent />
    </div>
  )
}

export default MainLayout
