'use client'
import { Spacer, Title } from '@/components'
import styles from './portfolio.module.scss'
import Image from 'next/image'
import { staticImageLinks } from '@/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'
import React, { useEffect, useState } from 'react'
import { FreeMode } from 'swiper/modules'
import { myHeaders } from '@/lib/fetch'

interface CardData {
  data: {
    id: number
    attributes: {
      title: string
      alt: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      preloadMedia: {
        data: {
          id: number
          attributes: {
            name: string
            alternativeText: string
            caption: string
            width: number
            height: number
            url: string
            formats: {
              thumbnail: {
                name: string
                hash: string
                ext: string
                mime: string
                path: string
                width: number
                height: number
                size: number
                sizeInBytes: number
                url: string
              }
            }
          }
        }
      }
      video: {
        data: {
          id: number
          attributes: {
            name: string
            alternativeText: string
            caption: string
            width: number
            height: number
            formats: {
              thumbnail: {
                name: string
                hash: string
                ext: string
                mime: string
                path: string
                width: number
                height: number
                size: number
                sizeInBytes: number
                url: string
              }
            }

            hash: string
            ext: string
            mime: string
            size: number
            url: string
            previewUrl: string
            provider: string
            provider_metadata: string
            createdAt: string
            updatedAt: string
          }
        }
      }
    }
  }[]
}

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState<CardData>()

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      next: { revalidate: 10 },
      headers: myHeaders,
    }
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/portfolios?populate=*`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setPortfolioData(result)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <section id="portfolio">
      <div className={styles.portfolioContent}>
        <div className={styles.circle_1}></div>
        <Title
          className={styles.portfolioTitle}
          label="See our work"
        />

        <Spacer height={{ mobile: '3vh' }} />

        {/* <div > */}

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
          {portfolioData &&
            portfolioData.data.map((cardData, cardIndex: number) => {
              const videoPath =
                cardData.attributes.video.data.attributes
              const preloadPath =
                cardData.attributes.preloadMedia.data.attributes

              return (
                <SwiperSlide
                  className={`${styles.portfolioCard}`}
                  key={cardIndex}
                >
                  <div
                    className={styles.portfolioCardCoverImageElement}
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
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${videoPath.url}`}
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
                  </div>

                  <h1 className={styles.portfolioCardHeading}>
                    {cardData.attributes.title}
                  </h1>
                </SwiperSlide>
              )
            })}
        </Swiper>
        {/* </div> */}

        <Spacer height={{ mobile: '5vh' }} />

        <div className={styles.portfolioSocialMediaRedirectElement}>
          <a href="#">
            <p>Our Social media says more</p>
            <Image
              src={staticImageLinks.RIGHT_ARROW_ICON}
              width={100}
              height={100}
              alt="portfolio-social-media-arrow-icon"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
