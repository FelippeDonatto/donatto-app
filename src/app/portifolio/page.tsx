import Image from 'next/image'
import { CardPortifolio } from '@/components/portifolio'

import boraCodar01 from '/public/portifolio/boraCodar01.png'
import boraCodar02 from '/public/portifolio/boraCodar02.png'

export default function Portifolio() {
  return (
    <div className="flex justify-start gap-4 w-full max-w-6xl mx-auto max-md:justify-center max-md:-mt-40">
      <div>
        <Image src={boraCodar01} alt="" width={300} className="rounded mb-4" />
        <CardPortifolio
          title="Play de Musica"
          href="https://play-music-next.vercel.app/"
        />
      </div>

      <div>
        <Image src={boraCodar02} alt="" width={300} className="rounded mb-4" />
        <CardPortifolio
          title="Card Produto"
          href="https://play-music-next.vercel.app/"
        />
      </div>
    </div>
  )
}
