import { Spacer, Title } from '@/components'
import styles from './portfolio.module.scss'
import Image from 'next/image'
import { staticImageLinks } from '@/assets'

interface CardData {
  id: number
  attributes: {
    title: string
    alt: string
    createdAt: string
    updatedAt: string
    publishedAt: string
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
}

const Portfolio = async () => {
  const fetchData = async () => {
    const requestOptions = {
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${process.env.API_PORTFOLIO_TOKEN}`,
        'Cache-Control': 'no-cache',
      },
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/portfolios?populate=*`,
      requestOptions
    )
    const data = await response.json()
    return data
  }
  const portfolioData = await fetchData()

  return (
    <section>
      <div className={styles.portfolioContent}>
        <Title
          className={styles.portfolioTitle}
          label="See our work"
        />

        <Spacer height={{ mobile: '3vh' }} />

        <div className={styles.portfolioCardSlider}>
          {portfolioData.data.map(
            (cardData: CardData, cardIndex: number) => {
              const videoPath =
                cardData.attributes.video.data.attributes

              return (
                <div className={styles.portfolioCard} key={cardIndex}>
                  <div
                    className={styles.portfolioCardCoverImageElement}
                  >
                    {videoPath.ext === '.mp4' ? (
                      <video
                        width={videoPath.width}
                        height={videoPath.height}
                        controls
                        preload="none"
                      >
                        <source
                          src={
                            'http://localhost:1337/uploads/672_Countdown_10_seconds_preview_138542a32e.mp4'
                          }
                          type="video/mp4"
                        />
                        {/* <track
                      src="/path/to/captions.vtt"
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    /> */}
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
                </div>
              )
            }
          )}
        </div>

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
