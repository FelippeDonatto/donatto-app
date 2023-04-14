import { Header } from '@/components/Header'
import '../styles/globals.css'
import { Roboto } from 'next/font/google'

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
      <body className="bg-app bg-cover bg-no-repeat bg-gray-950 text-gray-100 w-full h-screen max-md:px-4">
        <main className="flex justify-center items-center w-full">
          <Header />
        </main>
        <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto mt-10 max-md:mt-2">
          {children}
        </div>
      </body>
    </html>
  )
}
