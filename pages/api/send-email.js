import { sendEmail } from '../../lib/email'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, html } = req.body

    try {
      await sendEmail({ email, subject, html })
      res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
