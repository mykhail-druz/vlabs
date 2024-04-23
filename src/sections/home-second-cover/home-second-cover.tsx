import { staticImageLinks } from '@/assets'
import styles from './home-second-cover.module.scss'
import Image from 'next/image'
import { MotionDiv } from '@/components'

const HomeSecondCover = () => {
  return (
    <section>
      <div className={styles.homeContent}>
        <div className={styles.circle}></div>
        <div className={styles.homeGridContainer}>
          <MotionDiv
            className={`${styles.homeGridItem} ${styles.homeCoverImage}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            observeInView={true}
          >
            <Image
              src={staticImageLinks.HOME_SECOND_COVER_IMAGE}
              width={100}
              height={100}
              alt="home-cover-image-one"
            />
          </MotionDiv>
          <MotionDiv
            className={`${styles.gridItem} ${styles.homeTitle}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.25 }}
            observeInView={true}
          >
            <h1>
              Captivating brand narratives, engaging creative &{' '}
              <span>market-moving ideas</span>
            </h1>
          </MotionDiv>
          <MotionDiv
            className={`${styles.gridItem} ${styles.homeParagraph}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.25 }}
            observeInView={true}
          >
            <p>
              V Labs is a creative marketing agency that helps
              ambitious founders and teams to achieve their goals
              digital media. Through a seamless blend of creative
              content marketing, brand development and data-led
              strategy, we&#39;ll identify opportunities and drive
              meaningful engagement for your business
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

export default HomeSecondCover
