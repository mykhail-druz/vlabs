// Ваш файл pages/case-studies/[case-id].tsx

import { Spacer, Title } from '@/components'
import styles from './page.module.scss'
import { Footer, Header } from '@/sections'
import { myHeaders } from '@/lib/fetch'
import Image from 'next/image'

interface ImageData {
  url: string
  width: number
  height: number
}

interface ParagraphData {
  children: {
    type: string
    text: string
  }[]
  type: string
}

interface CaseStudyData {
  id: number
  attributes: {
    title: string
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    link: string
    alt: string
    slug: string
    paragraphs: ParagraphData[]
    image: {
      data: {
        attributes: ImageData
      }
    }
  }
}
interface CaseStudyPostProps {
  params: { slug: string }
}
interface CaseStudyResponse {
  data: CaseStudyData
  meta: Record<string, never>
}

const CaseStudyPost = async ({ params }: CaseStudyPostProps) => {
  const { slug } = params
  const fetchData = async (): Promise<CaseStudyResponse> => {
    const requestOptions = {
      method: 'GET',
      next: { revalidate: 10 },
      headers: myHeaders,
    }
    const casesData = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/case-studies/${slug}?populate=*`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        return result
      })
      .catch((error) => console.error(error))
    return casesData
  }
  const fetchedData = await fetchData()
  const imagePath = fetchedData.data.attributes.image.data.attributes
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
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imagePath.url}`}
          width={imagePath.width}
          height={imagePath.height}
          alt={fetchedData.data.attributes.alt}
          className={styles.caseStudyPostCoverImage}
        />
        <Spacer height={{ mobile: '3vw' }} />
        {fetchedData.data.attributes.paragraphs.map(
          (sectionData, sectionIndex: number) => {
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
