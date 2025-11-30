import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import fetch from 'node-fetch'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.post('/verify', async (req, res) => {
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

app.listen(3000, () => console.log('Server running on port 3000'))
