import Link from 'next/link'
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

import styled from '@emotion/styled'
import tw from 'twin.macro'

export const LinkButton = styled.a(
  tw`
  no-underline
  cursor-pointer
  bg-no-repeat
  bg-gradient-to-r
  from-primary-500
  to-primary-500
  [background-position:0_100%]
  [background-size:100%_0.2em]
  hover:[background-size:100%_100%]
  hover:text-white
  focus:[background-size:100%_100%]
  motion-safe:transition-all
  motion-safe:duration-300
  dark:from-primary-500
  dark:to-primary-500`
)

const CustomLink = ({
  href,
  ...rest
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href} legacyBehavior>
        <LinkButton {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <LinkButton href={href} {...rest} />
  }

  return <LinkButton target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
