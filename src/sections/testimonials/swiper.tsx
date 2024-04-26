'use client'
import React from 'react'
import { Pagination } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
import { CardDataReviews } from './inteface'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './testimonials.module.scss'
import Image from 'next/image'
import { staticImageLinks } from '@/assets'

export const SwiperReviews = ({
  data,
}: {
  data: CardDataReviews
}) => {
  return (
    <>
      {data && (
        <Swiper
          modules={[Pagination]}
          spaceBetween={120}
          slidesPerView={3}
          freeMode={true}
          pagination={{ clickable: true }}
          style={{
            minHeight: '550px',
          }}
          className={styles.swiper}
          breakpoints={{
            400: {
              spaceBetween: 40,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 80,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 120,
              slidesPerView: 3,
            },
          }}
        >
          {data.res.data.map((cardData, cardIndex: number) => {
            const path = cardData.attributes
            const imgPath = path.icon.data.attributes.url

            return (
              <SwiperSlide
                className={` ${styles.testimonialsCardItem}`}
                key={cardIndex}
              >
                <h1 className={styles.testimonialsCardHeaderText}>
                  “
                </h1>

                <div className={styles.testimonialsCardProfileImage}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imgPath}`}
                    width={100}
                    height={100}
                    alt={path.alt}
                  />
                </div>

                <div className={styles.testimonialsCardStarsImage}>
                  <Image
                    src={
                      staticImageLinks.TESTIMONIALS_CARD_STARS_IMAGE
                    }
                    width={100}
                    height={100}
                    alt="testimonials-card-stars-image"
                  />
                </div>

                <div className={styles.testimonialsCardTitleSection}>
                  <div className={styles.testimonialsCardTitle}>
                    <h1>
                      {path.name}:{path.position}
                    </h1>
                  </div>

                  <div className={styles.testimonialsCardHeading}>
                    <h2>{path.location}</h2>
                  </div>
                </div>

                <div className={styles.testimonialsCardParagraph}>
                  <p>{path.review}</p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}
    </>
  )
}
