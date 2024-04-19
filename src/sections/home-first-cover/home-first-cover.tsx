import Image from 'next/image'
import styles from './home-first-cover.module.scss'
import { staticImageLinks } from '@/assets'
import { Button } from '@/components'

const HomeFirstCover = () => {
  return (
    <section>
      <div className={styles.homeContent}>
        <div className={styles.homeGridContainer}>
          <div
            className={`${styles.homeGridItem} ${styles.homeCoverImage}`}
          >
            <Image
              src={staticImageLinks.HOME_FIRST_COVER_IMAGE}
              width={100}
              height={100}
              alt="home-cover-image-one"
            />
          </div>

          <div className={`${styles.gridItem} ${styles.homeTitle}`}>
            <h1>
              Results driven, <span>Creative led marketing</span> for
              ambitious brands
            </h1>
          </div>

          <div
            className={`${styles.gridItem} ${styles.homeParagraph}`}
          >
            <p>
              if you are ready to grow awareness, driven revenue and
              crush your market, then it&apos;s time to...
            </p>
          </div>

          <div
            className={`${styles.gridItem} ${styles.homeContactButton}`}
          >
            <Button
              label="Let's talk"
              position="HOME_FIRST_SECTION"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFirstCover
