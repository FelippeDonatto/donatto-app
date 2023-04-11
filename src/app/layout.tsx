import '../styles/globals.css'
import { Roboto } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { SocialLinks } from '@/components/socialLink'

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const metadata = {
  title: 'Donatto Dev'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body className="bg-gray-950 text-gray-100 w-full h-screen">
        <div className="grid grid-cols-[80px_minmax(900px,_1fr)] max-md:grid-cols-1">
          <div className="flex items-center justify-center max-md:hidden">
            <SocialLinks />
          </div>

          <div>
            <div>
              <Navbar />
            </div>

            <div className="flex justify-center items-center w-full gap-44 h-[89vh] max-md:h-screen max-md:mt-24 max-md:flex-col max-md:gap-6">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
