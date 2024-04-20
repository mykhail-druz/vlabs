'use client'
import React, { ReactNode } from 'react'
import { Swiper } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

interface SliderProps {
  children?: ReactNode
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  return (
    <Swiper
      freeMode={true}
      spaceBetween={50}
      slidesPerView={4}
      direction="horizontal"
      modules={[FreeMode]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{ width: '100%' }}
    >
      {children}
    </Swiper>
  )
}
export default Slider
