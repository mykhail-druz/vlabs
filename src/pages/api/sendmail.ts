import sgMail from '@sendgrid/mail'

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
} else {
  console.error('SENDGRID_API_KEY is not defined')
  process.exit(1)
}

export default async (req, res) => {
  try {
    const body = JSON.parse(req.body)

    if (!body.email || !body.name || !body.message) {
      console.error('Missing required fields', body)
      return res
        .status(400)
        .json({ error: 'Missing required fields' })
    }

    const message = `
      Email: ${body.email}\r\n
      Name: ${body.name}\r\n
      Message: ${body.message}
    `

    const data = {
      to: 'dda3127@gmail.com',
      from: 'dda3127@gmail.com',
      subject: 'New web form message',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    }

    await sgMail.send(data)
    res.status(200).json({ status: 'Ok' })
  } catch (error) {
    console.error('Error sending email:', error)
    if (error.response) {
      console.error(error.response.body)
    }
    res.status(500).json({ error: 'Error sending email' })
  }
}
