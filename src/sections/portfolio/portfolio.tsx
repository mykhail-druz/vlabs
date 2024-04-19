import { Spacer, Title } from '@/components'
import styles from './portfolio.module.scss'
import Image from 'next/image'
import { staticImageLinks } from '@/assets'

interface PortfolioCardDataElement {
  image: string
  imageAlt: string
  heading: string
}

const portfolioCardData: Array<PortfolioCardDataElement> = [
  {
    image: staticImageLinks.PORTFOLIO_CARD_ONE_IMAGE,
    imageAlt: 'portfolio-card-one-image',
    heading:
      "META and Google Ad for drive more participation for '2024 Come & try day campaign",
  },
  {
    image: staticImageLinks.PORTFOLIO_CARD_TWO_IMAGE,
    imageAlt: 'portfolio-card-two-image',
    heading:
      'Creating engaging social media reels from using long conversations',
  },
  {
    image: staticImageLinks.PORTFOLIO_CARD_THREE_IMAGE,
    imageAlt: 'portfolio-card-Three-image',
    heading:
      '2d animated AD for digital marketing. We created this add for iCan Mall.',
  },
  {
    image: staticImageLinks.PORTFOLIO_CARD_ONE_IMAGE,
    imageAlt: 'portfolio-card-one-image',
    heading:
      "META and Google Ad for drive more participation for '2024 Come & try day campaign",
  },
]

const Portfolio = () => {
  return (
    <section>
      <div className={styles.portfolioContent}>
        <Title
          className={styles.portfolioTitle}
          label="See our work"
        />

        <Spacer height={{ mobile: '3vh' }} />

        <div className={styles.portfolioCardSlider}>
          {portfolioCardData.map((cardData, cardIndex) => {
            return (
              <div className={styles.portfolioCard} key={cardIndex}>
                <div
                  className={styles.portfolioCardCoverImageElement}
                >
                  <Image
                    src={cardData.image}
                    width={418}
                    height={311}
                    alt={cardData.imageAlt}
                    className={styles.portfolioCardCoverImage}
                  />

                  <Image
                    src={staticImageLinks.PORTFOLIO_CARD_PLAYER_IMAGE}
                    width={100}
                    height={100}
                    alt="portfolio-card-player-image"
                    className={styles.portfolioCardPlayerImage}
                  />
                </div>

                <h1 className={styles.portfolioCardHeading}>
                  {cardData.heading}
                </h1>
              </div>
            )
          })}
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
