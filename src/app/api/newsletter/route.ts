import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Get environment variables
    const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL
    const webhookToken = process.env.NEWSLETTER_WEBHOOK_TOKEN

    if (!webhookUrl || !webhookToken) {
      console.error('Missing webhook configuration')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // Call the webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${webhookToken}`,
      },
      body: JSON.stringify({
        email,
        timestamp: new Date().toISOString(),
        source: 'COIN Website Newsletter Signup'
      }),
    })

    if (!webhookResponse.ok) {
      console.error('Webhook call failed:', webhookResponse.status, webhookResponse.statusText)
      return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Successfully subscribed to newsletter' })

  } catch (error) {
    console.error('Newsletter API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
