import { useMDXComponent } from 'next-contentlayer/hooks'
import { sva } from 'styled-system/css'
import { Code } from '~/components/ui/code'
import { allChangelogs } from '~/contentlayer'

const markdown = sva({
  slots: ['article', 'h1', 'h2', 'h3', 'p', 'a', 'li', 'ul', 'code'],
  base: {
    article: {
      '& :first-child': {
        mt: '0',
      },
    },
    h1: {
      fontWeight: 'bold',
      mt: { base: '10', md: '12' },
      mb: { base: '4', md: '5' },
      textStyle: { base: '2xl', md: '3xl' },
    },
    h2: {
      fontWeight: 'bold',
      mt: { base: '8', md: '10' },
      mb: { base: '3', md: '4' },
      textStyle: { base: 'xl', md: '2xl' },
    },
    h3: {
      fontWeight: 'bold',
      mt: { base: '4', md: '6' },
      mb: { base: '2', md: '3' },
      textStyle: { base: 'lg', md: 'xl' },
    },
    p: {
      color: 'fg.muted',
      mb: { base: '3', md: '4' },
      lineHeight: 'relaxed',
    },
    ul: {
      color: 'fg.muted',
      mb: '4',
      ps: '2.5',
    },
    li: {
      lineHeight: 'relaxed',
      color: 'fg.muted',
      ps: '1',
      _marker: {
        content: "'–'",
      },
    },
    a: {
      textDecoration: 'underline',
    },
  },
})

export const Changelog = () => {
  const MDXComponent = useMDXComponent(allChangelogs[0]?.body.code ?? '')
  const { article, a, h1, h2, h3, p, li, ul, code } = markdown()
  return (
    <article className={article}>
      <MDXComponent
        components={{
          h1: (props) => <h1 className={h1} {...props} />,
          h2: (props) => <h2 className={h2} {...props} />,
          h3: (props) => <h3 className={h3} {...props} />,
          a: (props) => <a className={a} target="_blank" {...props} />,
          p: (props) => <p className={p} {...props} />,
          ul: (props) => <ul className={ul} {...props} />,
          li: (props) => <li className={li} {...props} />,
          code: (props: any) => <Code {...props} />,
        }}
      />
    </article>
  )
}
