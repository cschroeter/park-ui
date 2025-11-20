import type { NextRequest } from 'next/server'

const { FIGMA_KIT_URL, LEMON_SQUEEZY_API_KEY } = process.env

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)
  const orderId = searchParams.get('order_id')

  if (!orderId) {
    return Response.redirect('https://legacy.park-ui.com')
  }

  try {
    const response = await fetch(`https://api.lemonsqueezy.com/v1/orders/${orderId}`, {
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        Authorization: `Bearer ${LEMON_SQUEEZY_API_KEY}`,
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    const isValid = data.data?.attributes?.refunded === false

    return Response.redirect(isValid ? FIGMA_KIT_URL : 'https://legacy.park-ui.com')
  } catch (error) {
    return Response.redirect('https://legacy.park-ui.com')
  }
}
