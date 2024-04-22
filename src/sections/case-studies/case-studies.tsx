'use client'
import { Spacer, Title } from '@/components'
import styles from './case-studies.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { myHeaders } from '@/lib/fetch'
import { useEffect, useState } from 'react'

interface CardData {
  data: {
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
  }[]
}

const CaseStudies = () => {
  const [caseStudiesData, setCaseStudiesData] = useState<CardData>()

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      next: { revalidate: 10 },
      headers: myHeaders,
    }
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/case-studies?populate=*`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCaseStudiesData(result)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <section id="case-studies">
      <div className={styles.caseStudiesContent}>
        <Title
          className={styles.caseStudiesTitle}
          label="Recent case studies"
        />

        <Spacer height={{ mobile: '3vh' }} />

        <div className={styles.caseStudiesPostsGroup}>
          {caseStudiesData &&
            caseStudiesData.data.map(
              (postData, postIndex: number) => {
                const path = postData.attributes
                const title = path.title
                const description = path.description

                const imgPath = path.image.data.attributes

                return (
                  <Link
                    href={`/case-studies/${postData.id}`}
                    className={styles.caseStudiesPostItem}
                    key={postIndex}
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
