import { Spacer, Title } from '@/components'
import styles from './case-studies.module.scss'
import Link from 'next/link'
import Image from 'next/image'

interface CardData {
  id: number
  attributes: {
    title: string
    link: string
    alt: string
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    image: {
      data: {
        id: number
        attributes: {
          name: string
          alternativeText: string
          caption: string
          width: number
          height: number
          formats: {
            thumbnail: {
              name: string
              hash: string
              ext: string
              mime: string
              path: string
              width: number
              height: number
              size: number
              sizeInBytes: number
              url: string
            }
          }
          hash: string
          ext: string
          mime: string
          size: number
          url: string
          previewUrl: string
          provider: string
          provider_metadata: string
          createdAt: string
          updatedAt: string
        }
      }
    }
  }
}

const CaseStudies = async () => {
  const fetchData = async () => {
    const requestOptions = {
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${process.env.API_PORTFOLIO_TOKEN}`,
        'Cache-Control': 'no-cache',
      },
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/case-studies?populate=*`,
      requestOptions
    )
    const data = await response.json()
    return data
  }
  const caseStudiesData = await fetchData()
  const caseStudiesList = caseStudiesData

  return (
    <section>
      <div className={styles.caseStudiesContent}>
        <Title
          className={styles.caseStudiesTitle}
          label="Recent case studies"
        />

        <Spacer height={{ mobile: '3vh' }} />

        <div className={styles.caseStudiesPostsGroup}>
          {caseStudiesList.data.map(
            (postData: CardData, postIndex: number) => {
              const path = postData.attributes
              const title = path.title
              const description = path.description
              const link = path.link
              const imgPath = path.image.data.attributes
              return (
                <Link
                  href={link}
                  className={styles.caseStudiesPostItem}
                  key={postIndex}
                >
                  <div className={styles.circle_1}></div>
                  <div className={styles.circle_2}></div>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imgPath.url}`}
                    width={imgPath.width}
                    height={imgPath.height}
                    alt={path.alt}
                    className={styles.caseStudiesPostCoverImage}
                  />

                  <div className={styles.caseStudiesPostTitle}>
                    <h1>{title}</h1>
                  </div>

                  <div className={styles.caseStudiesPostParagraph}>
                    <p>{description}</p>
                  </div>
                </Link>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
