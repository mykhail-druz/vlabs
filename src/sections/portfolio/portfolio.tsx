import { Spacer, Title } from '@/components'
import styles from './portfolio.module.scss'
import Image from 'next/image'
import { staticImageLinks } from '@/assets'
import React from 'react'
import { MotionDiv } from '@/components'
import { SwiperProgfolio } from './swiper'

const Portfolio = async () => {
  async function getData() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/portfolio`
    )
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  const data = await getData()

  return (
    <section id="portfolio">
      <div className={styles.portfolioContent}>
        <div className={styles.circle_1}></div>
        <MotionDiv
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          observeInView={true}
        >
          <Title
            className={styles.portfolioTitle}
            label="See our work"
          />
        </MotionDiv>
        <Spacer height={{ mobile: '3vh' }} />

        {/* <div > */}

        <SwiperProgfolio data={data} />
        {/* </div> */}

        <Spacer height={{ mobile: '5vh' }} />

        <MotionDiv
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          observeInView={true}
          className={styles.portfolioSocialMediaRedirectElement}
        >
          <a href="#">
            <p>Our Social media says more</p>
            <Image
              src={staticImageLinks.RIGHT_ARROW_ICON}
              width={100}
              height={100}
              alt="portfolio-social-media-arrow-icon"
            />
          </a>
        </MotionDiv>
      </div>
    </section>
  )
}

export default Portfolio
