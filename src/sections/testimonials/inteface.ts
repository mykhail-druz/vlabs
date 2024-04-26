export interface CardDataReviews {
  res: {
    data: {
      id: number
      attributes: {
        name: string
        position: string
        location: string
        review: string
        title: string
        link: string
        alt: string
        description: string
        createdAt: string
        updatedAt: string
        publishedAt: string
        icon: {
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
}
