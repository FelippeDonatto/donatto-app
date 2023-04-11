import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkSocialProps {
  href: string
  children: ReactNode
}

export function LinkSocial({ href, children }: LinkSocialProps) {
  return (
    <Link href={href} target="_blank">
      <li className="flex gap-4">{children}</li>
    </Link>
  )
}
