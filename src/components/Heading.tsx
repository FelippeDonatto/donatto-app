import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface HeadingProps {
  size?: 'xs' |'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Heading({
  size = 'lg',
  children,
  asChild,
  className
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={clsx(
        'text-white font-bold leading-tight',
        {
          'text-lg': size === 'xs',
          'text-4xl': size === 'sm',
          'text-5xl': size === 'md',
          'text-6xl': size === 'lg'
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}
