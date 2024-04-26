'use client'
import React from 'react'
import { FreeMode } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
import { CardDataPotrfolio } from './interface'
import Image from 'next/image'
import { staticImageLinks } from '@/assets'
import { MotionDiv } from '@/components'
import styles from './portfolio.module.scss'
import 'swiper/css'
import 'swiper/css/free-mode'

export const SwiperProgfolio = ({
  data,
}: {
  data: CardDataPotrfolio
}) => {
  return (
    <>
      {data && (
        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          breakpoints={{
            400: {
              spaceBetween: 40,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 80,
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 120,
              slidesPerView: 4,
            },
          }}
        >
          {data &&
            data.res.data.map((cardData, cardIndex: number) => {
              const videoPath =
                cardData.attributes.video.data.attributes
              const preloadPath =
                cardData.attributes.preloadMedia.data.attributes

              return (
                <SwiperSlide
                  className={`${styles.portfolioCard}`}
                  key={cardIndex}
                >
                  <MotionDiv
                    className={styles.portfolioCardCoverImageElement}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: 'easeOut',
                      delay: 0.3 * cardIndex,
                    }}
                    observeInView={true}
                  >
                    {videoPath.ext === '.mp4' ? (
                      <video
                        width={'420'}
                        height={'310'}
                        className={styles.video}
                        controls
                        preload="none"
                        poster={`${process.env.NEXT_PUBLIC_STRAPI_URL}${preloadPath.url}`}
                      >
                        <source
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${videoPath.url}`}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <>
                        <Image
                          src={`${process.env.STRAPI_URL}${videoPath.url}`}
                          width={videoPath.width}
                          height={videoPath.height}
                          alt={cardData.attributes.alt}
                          className={styles.portfolioCardCoverImage}
                        />
                        <Image
                          src={
                            staticImageLinks.PORTFOLIO_CARD_PLAYER_IMAGE
                          }
                          width={100}
                          height={100}
                          alt="portfolio-card-player-image"
                          className={styles.portfolioCardPlayerImage}
                        />
                      </>
                    )}
                  </MotionDiv>
                  <MotionDiv
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: 'easeOut',
                      delay: 0.3 * cardIndex,
                    }}
                    observeInView={true}
                  >
                    <h1 className={styles.portfolioCardHeading}>
                      {cardData.attributes.title}
                    </h1>
                  </MotionDiv>
                </SwiperSlide>
              )
            })}
        </Swiper>
      )}
    </>
  )
}
