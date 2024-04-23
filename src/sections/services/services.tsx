import Image from 'next/image'
import styles from './services.module.scss'
import { staticImageLinks } from '@/assets'
import { MotionDiv, Spacer, Title } from '@/components'
import { ReactElement } from 'react'

interface ServicesCardDataElement {
  image: string
  imageAlt: string
  className: string
  title: ReactElement
  paragraph: ReactElement
}

const servicesCardData: Array<ServicesCardDataElement> = [
  {
    image: staticImageLinks.SERVICES_CARD_ONE_IMAGE,
    imageAlt: 'services-card-one-image',
    className: styles.servicesCardOne,
    title: (
      <h1>
        Social Media
        <br />
        Content Marketing
      </h1>
    ),
    paragraph: (
      <p>
        Market your business and build
        <br />
        a story around your branch by
        <br />
        targeting highly-engaged
        <br />
        audiences using creative
        <br />
        content strategies & trends.
      </p>
    ),
  },
  {
    image: staticImageLinks.SERVICES_CARD_TWO_IMAGE,
    imageAlt: 'services-card-two-image',
    className: styles.servicesCardTwo,
    title: <h1>Google & META Ads</h1>,
    paragraph: (
      <p>
        We take your advertising
        <br />
        campaigns to the next level.
        <br />
        Still one of the most effective
        <br />
        ways of attracting new
        <br />
        customers for all kinds of
        <br />
        businesses, quickly.
      </p>
    ),
  },
  {
    image: staticImageLinks.SERVICES_CARD_THREE_IMAGE,
    imageAlt: 'services-card-three-image',
    className: styles.servicesCardThree,
    title: (
      <h1>
        Social Media /
        <br />
        Content Marketing
      </h1>
    ),
    paragraph: (
      <p>
        Establish consistency across
        <br />
        your entire brand, from
        <br />
        graphics to web development
        <br />
        and everything in between.
      </p>
    ),
  },
]

const Services = () => {
  return (
    <section id="services">
      <div className={styles.servicesContent}>
        <div className={styles.circle}></div>
        <MotionDiv
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          observeInView={true}
        >
          <Title
            className={styles.servicesTitle}
            label="How can we help you"
          />
        </MotionDiv>
        <Spacer height={{ mobile: '3vh' }} />

        <div className={styles.servicesCardGridContainer}>
          {servicesCardData.map((cardData, cardIndex) => {
            return (
              <MotionDiv
                className={`${styles.servicesCardGridItem} ${cardData.className}`}
                key={cardIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 0.3 * cardIndex,
                }}
                observeInView={true}
              >
                <div className={styles.servicesCardImage}>
                  <Image
                    src={cardData.image}
                    width={100}
                    height={100}
                    alt={cardData.imageAlt}
                  />
                </div>

                <Spacer height={{ mobile: '1.5vh' }} />

                <div className={styles.servicesCardTitle}>
                  {cardData.title}
                </div>

                <Spacer height={{ mobile: '2vh' }} />

                <div className={styles.servicesCardParagraph}>
                  {cardData.paragraph}
                </div>
              </MotionDiv>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
