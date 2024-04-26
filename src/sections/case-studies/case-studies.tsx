import { MotionDiv, Spacer, Title } from '@/components'
import styles from './case-studies.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { CardDataCaseStudies } from './interface'

const CaseStudies = async () => {
  async function getData() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/caseStudies`
    )
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  const data = await getData()

  return (
    <section id="case-studies">
      <div className={styles.caseStudiesContent}>
        <MotionDiv
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          observeInView={true}
        >
          <Title
            className={styles.caseStudiesTitle}
            label="Recent case studies"
          />
        </MotionDiv>
        <Spacer height={{ mobile: '3vh' }} />

        <div className={styles.caseStudiesPostsGroup}>
          {data &&
            data.res.data.map(
              (postData: CardDataCaseStudies, postIndex: number) => {
                const path = postData.attributes
                const title = path.title
                const description = path.description
                const imgPath = path.image.data.attributes

                return (
                  <MotionDiv
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    observeInView={true}
                    key={postIndex}
                  >
                    <Link
                      href={`/case-studies/${postData.id}`}
                      className={styles.caseStudiesPostItem}
                    >
                      {path.image && (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imgPath.url}`}
                          width={imgPath.width}
                          height={imgPath.height}
                          alt={path.alt}
                          className={styles.caseStudiesPostCoverImage}
                        />
                      )}
                      <div className={styles.caseStudiesPostTitle}>
                        <h1>{title}</h1>
                      </div>

                      <div
                        className={styles.caseStudiesPostParagraph}
                      >
                        <p>{description}</p>
                      </div>
                    </Link>
                  </MotionDiv>
                )
              }
            )}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
