import React from 'react'
import Carousel from 'react-multi-carousel'
import HeroItem from './Hero-Item'
import { heroProduct } from '../../lib/constant'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
}

const HeroComponent: React.FC = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite
      autoPlay
      autoPlaySpeed={4700}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {heroProduct.map((hero, index) => (
        <HeroItem
          key={index}
          src={hero.src}
          title={hero.title}
          description={hero.description}
          price={hero.price}
        />
      ))}
    </Carousel>
  )
}

export default HeroComponent
