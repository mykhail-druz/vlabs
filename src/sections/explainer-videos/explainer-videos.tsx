import styles from './explainer-videos.module.scss'
import { staticImageLinks } from '@/assets'
import { Button, Spacer, Title } from '@/components'

const ExplainerVideos = () => {
  return (
    <section>
      <div className={styles.explainerVideosContent}>
        <div className={styles.circle_1}></div>
        <div className={styles.circle_2}></div>
        <Title
          className={styles.explainerVideosTitle}
          label="Have you heard of Explainer Videos"
        />

        <Spacer height={{ mobile: '3vh' }} />

        <div className={styles.explainerVideosPlayerModalButton}>
          <video
            width={'100%'}
            height={450}
            controls
            controlsList=""
            preload="auto"
            className={styles.video}
            poster={staticImageLinks.EXPLAINER_VIDEOS_PLAYER_IMAGE}
          >
            <source
              width={'100%'}
              height={550}
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads/V_Labs_Explainer_3c8463eeaf.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <Spacer height={{ mobile: '1.5vh' }} />

        <div className={styles.explainerVideosGridContainer}>
          <div
            className={`${styles.explainerVideosGridItem} ${styles.explainerVideosHeading}`}
          >
            <h2>What are explainer videos</h2>
          </div>

          <div
            className={`${styles.explainerVideosGridItem} ${styles.explainerVideosParagraph}`}
          >
            <p>
              Imagine a short, snappy video that takes your complex
              ideas,
              <br />
              products, or services and turns them into an
              easy-to-digest visual
              <br />
              story. We use a mix of animation and sometimes a dash of
              live-
              <br />
              action magic to make your message not just clear by also
              <br />
              captivating.
            </p>
          </div>

          <div
            className={`${styles.explainerVideosGridItem} ${styles.explainerVideosContactButton}`}
          >
            <Button
              label="Ready to chat?"
              position="EXPLAINER_VIDEOS_SECTION"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExplainerVideos
