import { MotionDiv, Spacer, Title } from '@/components'
import styles from './process.module.scss'
import Image from 'next/image'
import { staticImageLinks } from '@/assets'

interface ProcessCardDataElement {
  image: string
  imageAlt: string
  cardGridLayoutClassName: string
  title: string
  paragraph: string
}

const processCardData: Array<ProcessCardDataElement> = [
  {
    image: staticImageLinks.PROCESS_CARD_ONE_IMAGE,
    imageAlt: 'process-card-one-image',
    cardGridLayoutClassName:
      styles.processCardGridContainerTabletLayoutOne,
    title: 'Access',
    paragraph:
      'First, we take a long hard look at the data, the competitive landscape and your marketing output to date, including any goals and milestones you hope to achieve.',
  },
  {
    image: staticImageLinks.PROCESS_CARD_TWO_IMAGE,
    imageAlt: 'process-card-two-image',
    cardGridLayoutClassName:
      styles.processCardGridContainerTabletLayoutTwo,
    title: 'Plan',
    paragraph:
      'We then work out the best way to achieve those goals and milestones, V Labs on a range of digital marketing services and our collective years of expertise.',
  },
  {
    image: staticImageLinks.PROCESS_CARD_THREE_IMAGE,
    imageAlt: 'process-card-three-image',
    cardGridLayoutClassName:
      styles.processCardGridContainerTabletLayoutOne,
    title: 'Execute',
    paragraph:
      "Working closely with your team, we'll configure the best way to work and set things in motion, keeping communication close and consistent along the way.",
  },
  {
    image: staticImageLinks.PROCESS_CARD_FOUR_IMAGE,
    imageAlt: 'process-card-four-image',
    cardGridLayoutClassName:
      styles.processCardGridContainerTabletLayoutTwo,
    title: 'Iterate',
    paragraph:
      'To ensure we stay on track, V Labs will keep a watchful eye on the data, iterating and improving throughout the campaign lifecycle so we get the best results.',
  },
]

const Process = () => {
  return (
    <section>
      <div className={styles.processContent}>
        <div className={styles.circle_1}></div>
        <div className={styles.circle_2}></div>
        <MotionDiv
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          observeInView={true}
        >
          <Title
            className={styles.processTitle}
            label="Our simple and transparent process"
          />
        </MotionDiv>
        <Spacer height={{ mobile: '2.5vh' }} />

        <div className={styles.processCardGridContainerGroup}>
          {processCardData.map((cardData, cardIndex) => {
            return (
              <MotionDiv
                className={`${styles.processCardGridContainer} ${cardData.cardGridLayoutClassName}`}
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
                <div
                  className={`${styles.processCardGridItem} ${styles.processCardImage}`}
                >
                  <Image
                    src={cardData.image}
                    width={100}
                    height={100}
                    alt={cardData.imageAlt}
                  />
                </div>

                <div
                  className={`${styles.processCardGridItem} ${styles.processCardTitle}`}
                >
                  <h1>{cardData.title}</h1>
                </div>

                <div
                  className={`${styles.processCardGridItem} ${styles.processCardParagraph}`}
                >
                  <p>{cardData.paragraph}</p>
                </div>
              </MotionDiv>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Process
