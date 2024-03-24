import React from 'react'
import HeroComponent from '../../Hero'
import FeaturedComponent from '../../Featured'
import ProductComponent from '../../Product'

const MainLayout: React.FC = () => {
  return (
    <div className="container main-section">
      <HeroComponent />
      <FeaturedComponent />
      <ProductComponent />
    </div>
  )
}

export default MainLayout
