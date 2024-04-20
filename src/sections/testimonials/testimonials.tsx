import { Spacer, Title } from '@/components'
import styles from './testimonials.module.scss'
import Image from 'next/image'
import { staticImageLinks } from '@/assets'

interface CardData {
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
}

const Testimonials = async () => {
  const fetchData = async () => {
    const requestOptions = {
      method: 'GET',
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${process.env.API_PORTFOLIO_TOKEN}`,
        'Cache-Control': 'no-cache',
      },
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/reviews?populate=*`,
      requestOptions
    )
    const data = await response.json()
    return data
  }
  const testimonialsData = await fetchData()

  return (
    <section>
      <div className={styles.testimonialsContent}>
        <Title
          className={styles.testimonialsTitle}
          label="See what clients say about us"
        />

        <Spacer height={{ mobile: '3vh' }} />

        <div className={styles.testimonialsCardGroup}>
          {testimonialsData.data.map(
            (cardData: CardData, cardIndex: number) => {
              const path = cardData.attributes

              const imgPath = path.icon.data.attributes.url
              return (
                <div
                  className={`${styles.testimonialsCardItem}`}
                  key={cardIndex}
                >
                  <h1 className={styles.testimonialsCardHeaderText}>
                    “
                  </h1>

                  <div
                    className={styles.testimonialsCardProfileImage}
                  >
                    <Image
                      src={`http://localhost:1337${imgPath}`}
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

                  <div
                    className={styles.testimonialsCardTitleSection}
                  >
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
                </div>
              )
            }
          )}
        </div>

        <Spacer height={{ mobile: '3vh' }} />

        <div className={styles.testimonialsCardGroupDotsIcon}>
          <Image
            src={staticImageLinks.SLIDER_PAGINATION_DOTS_ICON}
            width={100}
            height={100}
            alt="slider-pagination-dots-icon"
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
