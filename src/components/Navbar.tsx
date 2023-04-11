import Link from 'next/link'
import { Logo } from './Logo'

export function Navbar() {
  return (
    <nav className="flex justify-between px-32 items-center w-full h-[10vh] max-md:px-12">
      <Link href="/">
        <Logo />
      </Link>

      <ul className="inline-flex gap-8 text-gray-400 max-md:hidden">
        <Link href="/">
          <li>Home</li>
        </Link>

        <Link href="/portifolio">
          <li>Portifolio</li>
        </Link>
      </ul>

      <ul className="md:hidden">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </li>
      </ul>
    </nav>
  )
}
