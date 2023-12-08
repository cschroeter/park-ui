import { Link, type LinkProps } from '~/components/ui'

export default function (props: LinkProps) {
  return <Link {...props} className="not-prose" />
}
