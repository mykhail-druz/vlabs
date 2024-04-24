'use client'
import { MotionDiv, Spacer, Title } from '@/components'
import styles from './testimonials.module.scss'
import Image from 'next/image'
import { staticImageLinks } from '@/assets'
import { useEffect, useState } from 'react'
import { NEXT_PUBLIC_STRAPI_API_KEY } from '@/lib/fetch'
import { Pagination } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'

interface CardData {
  data: {
    id: number
    attributes: {
      name: string
      position: string
      location: string
      review: string
      title: string
      link: string
      alt: string
      description: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      icon: {
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

const Testimonials = () => {
  const [testimonialsData, setTestimonialData] = useState<CardData>()

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_STRAPI_API_KEY}`,
      },
    }
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/reviews?populate=*`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setTestimonialData(result)
      })
      .catch
      // (error) => console.error(error)
      ()
  }, [])

  return (
    <section id="testimonials">
      <div className={styles.testimonialsContent}>
        <MotionDiv
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          observeInView={true}
        >
          <Title
            className={styles.testimonialsTitle}
            label="See what clients say about us"
          />
        </MotionDiv>
        <Spacer height={{ mobile: '3vh' }} />

        <MotionDiv
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          observeInView={true}
          className={styles.testimonialsCardGroup}
        >
          {testimonialsData && (
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
              {testimonialsData.data.map(
                (cardData, cardIndex: number) => {
                  const path = cardData.attributes

                  const imgPath = path.icon.data.attributes.url
                  return (
                    <SwiperSlide
                      className={` ${styles.testimonialsCardItem}`}
                      key={cardIndex}
                    >
                      <h1
                        className={styles.testimonialsCardHeaderText}
                      >
                        “
                      </h1>

                      <div
                        className={
                          styles.testimonialsCardProfileImage
                        }
                      >
                        <Image
                          src={`http://localhost:1337${imgPath}`}
                          width={100}
                          height={100}
                          alt={path.alt}
                        />
                      </div>

                      <div
                        className={styles.testimonialsCardStarsImage}
                      >
                        <Image
                          src={
                            staticImageLinks.TESTIMONIALS_CARD_STARS_IMAGE
                          }
                          width={100}
                          height={100}
                          alt="testimonials-card-stars-image"
                        />
                      </div>

                      <div
                        className={
                          styles.testimonialsCardTitleSection
                        }
                      >
                        <div className={styles.testimonialsCardTitle}>
                          <h1>
                            {path.name}:{path.position}
                          </h1>
                        </div>

                        <div
                          className={styles.testimonialsCardHeading}
                        >
                          <h2>{path.location}</h2>
                        </div>
                      </div>

                      <div
                        className={styles.testimonialsCardParagraph}
                      >
                        <p>{path.review}</p>
                      </div>
                    </SwiperSlide>
                  )
                }
              )}
            </Swiper>
          )}
        </MotionDiv>

        <Spacer height={{ mobile: '3vh' }} />

        <div className={styles.testimonialsCardGroupDotsIcon}>
          {/* <Image
            src={staticImageLinks.SLIDER_PAGINATION_DOTS_ICON}
            width={100}
            height={100}
            alt="slider-pagination-dots-icon"
          /> */}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
