import { MotionDiv, Spacer, Title } from '@/components'
import styles from './testimonials.module.scss'
import 'swiper/css/pagination'
import { SwiperReviews } from './swiper'

const Testimonials = async () => {
  async function getData() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/reviews`
    )
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  const data = await getData()

  return (
    <section id="testimonials">
      <div className={styles.testimonialsContent}>
        <MotionDiv
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          observeInView={true}
        >
          <Title
            className={styles.testimonialsTitle}
            label="See what clients say about us"
          />
        </MotionDiv>
        <Spacer height={{ mobile: '3vh' }} />

        <MotionDiv
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          observeInView={true}
          className={styles.testimonialsCardGroup}
        >
          <SwiperReviews data={data} />
        </MotionDiv>
        <Spacer height={{ mobile: '3vh' }} />
      </div>
    </section>
  )
}

export default Testimonials
