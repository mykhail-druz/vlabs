import Image from 'next/image'
import styles from './home-first-cover.module.scss'
import { staticImageLinks } from '@/assets'
import { Button, MotionDiv } from '@/components'

const HomeFirstCover = () => {
  return (
    <section id="home">
      <div className={styles.homeContent}>
        <div className={styles.circle}></div>
        <div className={styles.homeGridContainer}>
          <MotionDiv
            className={`${styles.homeGridItem} ${styles.homeCoverImage}`}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Image
              src={staticImageLinks.HOME_FIRST_COVER_IMAGE}
              width={100}
              height={100}
              alt="home-cover-image-one"
            />
          </MotionDiv>

          <MotionDiv
            className={`${styles.gridItem} ${styles.homeTitle}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1>
              Results driven, <span>Creative led marketing</span> for
              ambitious brands
            </h1>
          </MotionDiv>

          <MotionDiv
            className={`${styles.gridItem} ${styles.homeParagraph}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <p>
              if you are ready to grow awareness, drive
              <br className={`${styles.br}`} /> revenue and crush your
              <br />
              market, then it&apos;s time to...
            </p>
          </MotionDiv>

          <MotionDiv
            className={`${styles.gridItem} ${styles.homeContactButton}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
          >
            <Button
              label="Let's talk"
              position="HOME_FIRST_SECTION"
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

export default HomeFirstCover
