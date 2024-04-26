import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const searchParams = new URLSearchParams(url.searchParams)
  const slug = searchParams.get('slug')
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/case-studies/${slug}?populate=*`
    const requestOptions = {
      method: 'GET',
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
      },
    }
    const response = await fetch(apiUrl, requestOptions)
    const data = await response.json()
    return NextResponse.json({ res: data }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
