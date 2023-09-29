import { type MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
  },
  sitemap: 'https://park-ui.com/sitemap.xml',
})

export default robots
