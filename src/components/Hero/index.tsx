import React from 'react'
import Carousel from 'react-multi-carousel'
import HeroItem from './Hero-Item'

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
      <HeroItem
        src="/assets/hero-1.png"
        title="DRÖNJÖNS"
        description="Kursi sederhana untuk semua umur"
        price="IDR 230.000"
      />
      <HeroItem
        src="/assets/hero-2.png"
        title="TROLLBERGET"
        description="Penyangga berdiri/duduk aktif, glose hitam"
        price="IDR 1.299.000"
      />
      <HeroItem
        src="/assets/hero-3.png"
        title="MALSKÄR / LOBERGET"
        description="Kursi putar + bantalan, putih/abu-abu tua"
        price="IDR 709.000"
      />
    </Carousel>
  )
}

export default HeroComponent
