import { Spacer, Title } from '@/components'
import styles from './page.module.scss'
import { Footer, Header } from '@/sections'
import Image from 'next/image'

// interface ImageData {
//   url: string
//   width: number
//   height: number
// }

interface ParagraphData {
  children: {
    type: string
    text: string
  }[]
  type: string
}

// interface CaseStudyData {

//   id: number
//   attributes: {
//     title: string
//     description: string
//     createdAt: string
//     updatedAt: string
//     publishedAt: string
//     link: string
//     alt: string
//     slug: string
//     paragraphs: ParagraphData[]
//     image: {
//       data: {
//         attributes: ImageData
//       }
//     }
//   }
// }
interface CaseStudyPostProps {
  params: { slug: string }
}

const CaseStudyPost = async ({ params }: CaseStudyPostProps) => {
  const { slug } = params

  async function getData() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/caseStudiesSlug?slug=${slug}`
    )
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  const data = await getData()

  const imagePath = data
    ? data.res.data?.attributes.image.data.attributes
    : null
  return (
    <>
      <Header />
      <Spacer height={{ mobile: '4vw' }} />
      <main className={styles.caseStudyPostContent}>
        <Title
          className={styles.caseStudyPostTitle}
          label="How we got 100k followers"
        />
        <Spacer height={{ mobile: '2vw' }} />
        {data.res.data?.attributes && (
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imagePath?.url}`}
            width={imagePath?.width}
            height={imagePath?.height}
            alt={data.res.data?.attributes.alt}
            className={styles.caseStudyPostCoverImage}
          />
        )}
        <Spacer height={{ mobile: '3vw' }} />
        {data.res.data?.attributes.paragraphs.map(
          (sectionData: ParagraphData, sectionIndex: number) => {
            return (
              <div key={sectionIndex}>
                <Spacer height={{ mobile: '0.5vw' }} />
                {sectionData.children.map(
                  (paragraphData, paragraphIndex: number) => {
                    return (
                      <div key={paragraphIndex}>
                        <p className={styles.paragraph}>
                          {paragraphData.text}
                        </p>
                        {paragraphIndex !==
                        sectionData.children.length - 1 ? (
                          <Spacer height={{ mobile: '1vw' }} />
                        ) : null}
                      </div>
                    )
                  }
                )}
                {sectionIndex !== sectionData.children.length - 1 ? (
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
