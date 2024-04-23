import sgMail from '@sendgrid/mail'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`)
  const body = await req.json()
  const { email, name, message } = body
  const content = {
    to: email,
    from: `${process.env.EMAIL}`,
    subject: `${process.env.SUBJECT_IN_FORM}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Message:</strong> ${message}`,
  }

  sgMail
    .send(content)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
  return NextResponse.json({ res })
}
