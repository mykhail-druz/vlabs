import styles from './explainer-videos.module.scss'
import { staticImageLinks } from '@/assets'
import { Button, Spacer, Title } from '@/components'
import { MotionDiv } from '@/components'

const ExplainerVideos = () => {
  return (
    <section>
      <div className={styles.explainerVideosContent}>
        <div className={styles.circle_1}></div>
        <div className={styles.circle_2}></div>
        <MotionDiv
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          observeInView={true}
        >
          <Title
            className={styles.explainerVideosTitle}
            label="Have you heard of Explainer Videos"
          />
        </MotionDiv>
        <Spacer height={{ mobile: '3vh' }} />

        <MotionDiv
          className={styles.explainerVideosPlayerModalButton}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          observeInView={true}
        >
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
        </MotionDiv>

        <Spacer height={{ mobile: '1.5vh' }} />

        <div className={styles.explainerVideosGridContainer}>
          <MotionDiv
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            observeInView={true}
            className={`${styles.explainerVideosGridItem} ${styles.explainerVideosHeading}`}
          >
            <h2>What are explainer videos</h2>
          </MotionDiv>

          <MotionDiv
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            observeInView={true}
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
          </MotionDiv>

          <MotionDiv
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            observeInView={true}
            className={`${styles.explainerVideosGridItem} ${styles.explainerVideosContactButton}`}
          >
            <Button
              label="Ready to chat?"
              position="EXPLAINER_VIDEOS_SECTION"
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

export default ExplainerVideos
