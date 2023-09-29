import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  await fetch(process.env.SLACK_WEBHOOK_URL as string, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  })

  return NextResponse.json({ ok: 'true' })
}
