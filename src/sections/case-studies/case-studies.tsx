import { Spacer, Title } from '@/components'
import styles from './case-studies.module.scss'
import Link from 'next/link'
import urlPathnames from '@/urlPathnames'

interface CaseStudiesPostElement {
  redirectPath: string
  heading: string
  paragraph: string
}

const caseStudiesPostData: Array<CaseStudiesPostElement> = [
  {
    redirectPath: `${urlPathnames.CASE_STUDY_POST}/1`,
    heading: 'How we got 100k followers',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  /* Second post item will be removed during the Sanity data retrieval implementation for the case study posts */
  {
    redirectPath: `${urlPathnames.CASE_STUDY_POST}/2`,
    heading: 'How we got 100k followers',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
]

const CaseStudies = () => {
  return (
    <section>
      <div className={styles.caseStudiesContent}>
        <Title
          className={styles.caseStudiesTitle}
          label="Recent case studies"
        />

        <Spacer height={{ mobile: '3vh' }} />

        <div className={styles.caseStudiesPostsGroup}>
          {caseStudiesPostData.map((postData, postIndex) => {
            return (
              <Link
                href={postData.redirectPath}
                className={styles.caseStudiesPostItem}
                key={postIndex}
              >
                <div className={styles.caseStudiesPostCoverImage} />

                <div className={styles.caseStudiesPostTitle}>
                  <h1>{postData.heading}</h1>
                </div>

                <div className={styles.caseStudiesPostParagraph}>
                  <p>{postData.paragraph}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
