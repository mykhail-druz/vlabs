import { staticImageLinks } from '@/assets'
import styles from './home-second-cover.module.scss'
import Image from 'next/image'

const HomeSecondCover = () => {
  return (
    <section>
      <div className={styles.homeContent}>
        <div className={styles.homeGridContainer}>
          <div
            className={`${styles.homeGridItem} ${styles.homeCoverImage}`}
          >
            <Image
              src={staticImageLinks.HOME_SECOND_COVER_IMAGE}
              width={100}
              height={100}
              alt="home-cover-image-one"
            />
          </div>
          <div className={`${styles.gridItem} ${styles.homeTitle}`}>
            <h1>
              Captivating brand narratives, engaging creative &{' '}
              <span>market-moving ideas</span>
            </h1>
          </div>
          <div
            className={`${styles.gridItem} ${styles.homeParagraph}`}
          >
            <p>
              V Labs is a creative marketing agency that helps
              ambitious founders and teams to achieve their goals
              digital media. Through a seamless blend of creative
              content marketing, brand development and data-led
              strategy, we&#39;ll identify opportunities and drive
              meaningful engagement for your business
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSecondCover
