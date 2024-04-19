import { Spacer, Title } from '@/components'
import styles from './testimonials.module.scss'
import Image from 'next/image'
import { staticImageLinks } from '@/assets'

interface TestimonialsCardDataElement {
  image: string
  imageAlt: string
  className: string
  title: string
  titleHeading: string
  paragraph: string
}

const testimonialsCardData: Array<TestimonialsCardDataElement> = [
  {
    image: staticImageLinks.TESTIMONIALS_CARD_ONE_IMAGE,
    imageAlt: 'testimonials-card-one-image',
    className: styles.testimonialsCardItemOne,
    title: 'Velocity: Director content',
    titleHeading: 'Brooklyn heights',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    image: staticImageLinks.TESTIMONIALS_CARD_TWO_IMAGE,
    imageAlt: 'testimonials-card-two-image',
    className: styles.testimonialsCardItemTwo,
    title: 'Josh:CEO',
    titleHeading: 'Central perk',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    image: staticImageLinks.TESTIMONIALS_CARD_THREE_IMAGE,
    imageAlt: 'testimonials-card-three-image',
    className: styles.testimonialsCardItemThree,
    title: 'Valeria: Founder',
    titleHeading: 'The book club',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
]

const Testimonials = () => {
  return (
    <section>
      <div className={styles.testimonialsContent}>
        <Title
          className={styles.testimonialsTitle}
          label="See what clients say about us"
        />

        <Spacer height={{ mobile: '3vh' }} />

        <div className={styles.testimonialsCardGroup}>
          {testimonialsCardData.map((cardData, cardIndex) => {
            return (
              <div
                className={`${styles.testimonialsCardItem} ${cardData.className}`}
                key={cardIndex}
              >
                <h1 className={styles.testimonialsCardHeaderText}>
                  “
                </h1>

                <div className={styles.testimonialsCardProfileImage}>
                  <Image
                    src={cardData.image}
                    width={100}
                    height={100}
                    alt={cardData.imageAlt}
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
                    <h1>{cardData.title}</h1>
                  </div>

                  <div className={styles.testimonialsCardHeading}>
                    <h2>{cardData.titleHeading}</h2>
                  </div>
                </div>

                <div className={styles.testimonialsCardParagraph}>
                  <p>{cardData.paragraph}</p>
                </div>
              </div>
            )
          })}
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
