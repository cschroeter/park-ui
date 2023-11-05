import { Link, type LinkProps } from './ui'

export default function (props: LinkProps) {
  return <Link {...props} className="not-prose" />
}
