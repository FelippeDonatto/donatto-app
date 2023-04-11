
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'

import Link from 'next/link'

interface CardportifolioProps {
  title: string
  href: string
}

export function CardPortifolio({ title, href }: CardportifolioProps) {
  return (
    <div className="w-[300px] bg-gray-900 p-6 rounded">
      <Heading size="xs" className="text-center mb-4">
        {title}
      </Heading>

      <div className="flex gap-2">
        <Button>
          <Link
            href={href}
            target="_blank"
          >
            Preview
          </Link>
        </Button>
      </div>
    </div>
  )
}
