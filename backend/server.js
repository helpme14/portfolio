import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import fetch from 'node-fetch'
import { Resend } from 'resend'

dotenv.config()

const app = express()
const resend = new Resend(process.env.RESEND_API_KEY)

app.use(express.json())
app.use(cors())

app.post(['/verify', '/api/verify'], async (req, res) => {
  const token = req.body.token
  if (!token)
    return res.status(400).json({ success: false, message: 'Missing token' })

  const params = new URLSearchParams()
  params.append('secret', process.env.TURNSTILE_SECRET_KEY)
  params.append('response', token)

  try {
    const result = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        body: params,
      },
    )
    const data = await result.json()
    return res.json(data)
  } catch (err) {
    return res.status(500).json({ success: false, error: String(err) })
  }
})

// NEW: Email endpoint
app.post(['/send-email', '/api/send-email'], async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing fields' })
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL
  const toEmail = process.env.RESEND_TO_EMAIL

  if (!fromEmail || !toEmail) {
    return res
      .status(500)
      .json({ success: false, message: 'Email configuration missing' })
  }

  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return res.json({ success: true, data: response })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ success: false, error: String(error) })
  }
})

app.listen(3000, () => console.log('Server running on port 3000'))
