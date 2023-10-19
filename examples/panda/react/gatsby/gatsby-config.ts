import type { GatsbyConfig } from 'gatsby'
import path from 'path'

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '~': path.resolve(__dirname, 'src'),
          'styled-system': path.resolve(__dirname, 'styled-system'),
        },
        extensions: [],
      },
    },
  ],
}

export default config
