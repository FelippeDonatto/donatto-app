import { Button } from '@/components/Button'
import Link from 'next/link'

export function GroupButtons() {
  return (
    <div className="mt-6 w-full max-w-[500px]">
      <Link href="https://github.com/felippedonatto" target="_blank">
        <Button>Acesse meu Github</Button>
      </Link>

      <Link href="/portifolio">
        <Button>Veja meu portifolio</Button>
      </Link>

      <Link
        href="https://api.whatsapp.com/message/EVND3KQTJJOTL1?autoload=1&app_absent=0"
        target="_blank"
      >
        <Button>Agende uma reunião</Button>
      </Link>
      <Link href="/blog">
        <Button>Blog</Button>
      </Link>
    </div>
  )
}
