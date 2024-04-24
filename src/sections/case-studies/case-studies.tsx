'use client'
import { MotionDiv, Spacer, Title } from '@/components'
import styles from './case-studies.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { NEXT_PUBLIC_STRAPI_API_KEY } from '@/lib/fetch'
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
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_STRAPI_API_KEY}`,
      },
    }
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/case-studies?populate=*`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCaseStudiesData(result)
      })
      .catch
      // (error) => console.error(error)
      ()
  }, [])

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
          {caseStudiesData &&
            caseStudiesData.data.map(
              (postData, postIndex: number) => {
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
