import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/reviews?populate=*`
    const requestOptions = {
      method: 'GET',
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
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
