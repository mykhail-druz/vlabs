import { Spacer, Title } from '@/components'
import styles from './page.module.scss'
import { Footer, Header } from '@/sections'

interface CaseStudyPostDataElement {
  postSection: Array<{
    heading: string
    paragraphs: Array<string>
  }>
}

const caseStudyPostData: CaseStudyPostDataElement = {
  postSection: [
    {
      heading: 'Section One: How we got 100k followers',
      paragraphs: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      ],
    },
    {
      heading: 'Section Two: How we got 100k followers',
      paragraphs: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      ],
    },
  ],
}

const CaseStudyPost = () => {
  return (
    <>
      <Header />

      <Spacer height={{ mobile: '4vw' }} />

      <main className={styles.caseStudyPostContent}>
        <Title
          className={styles.caseStudyPostTitle}
          label="How we got 100k followers
"
        />

        <Spacer height={{ mobile: '2vw' }} />

        <div className={styles.caseStudyPostCoverImage} />

        <Spacer height={{ mobile: '3vw' }} />

        {caseStudyPostData.postSection.map(
          (sectionData, sectionIndex) => {
            return (
              <div key={sectionIndex}>
                <h1 className={styles.heading}>
                  {sectionData.heading}
                </h1>

                <Spacer height={{ mobile: '0.5vw' }} />

                {sectionData.paragraphs.map(
                  (paragraphData, paragraphIndex) => {
                    return (
                      <div key={paragraphIndex}>
                        <p className={styles.paragraph}>
                          {paragraphData}
                        </p>

                        {paragraphIndex !==
                        sectionData.paragraphs.length - 1 ? (
                          <Spacer height={{ mobile: '1vw' }} />
                        ) : null}
                      </div>
                    )
                  }
                )}

                {sectionIndex !==
                caseStudyPostData.postSection.length - 1 ? (
                  <Spacer height={{ mobile: '3vw' }} />
                ) : null}
              </div>
            )
          }
        )}
      </main>

      <Spacer height={{ mobile: '30vh' }} />

      <Footer />
    </>
  )
}

export default CaseStudyPost
