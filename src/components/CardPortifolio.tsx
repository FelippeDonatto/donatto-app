import Image from 'next/image'
import { Button } from '@/components/Button'
import Link from 'next/link'

import boraCodar01 from '/public/portifolio/boracodar01.webp'
import boraCodar02 from '/public/portifolio/boracodar02.webp'
import devLink from '/public/portifolio/devLink.png'
import telaLogin from '/public/portifolio/tela-login.png'
import botoes from '/public/portifolio/botoes.png'
import chat from '/public/portifolio/chat.png'

export function CardPortifolio() {
  return (
    <>
      <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg w-full max-w-[300px] mx-auto">
        <Image src={boraCodar01} alt="" className="rounded-t-lg" />
        <hgroup>
          <h3 className="my-2 font-bold text-center uppercase">Play Music</h3>
        </hgroup>
        <Link href="https://play-music-next.vercel.app/" target="_blank">
          <Button>Veja mais</Button>
        </Link>
      </div>

      <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg w-full max-w-[300px] mx-auto">
        <Image src={boraCodar02} alt="" className="rounded-t-lg" />
        <hgroup>
          <h3 className="my-2 font-bold text-center uppercase">Card produto</h3>
        </hgroup>
        <Link href="https://card-produto-two.vercel.app/" target="_blank">
          <Button>Veja mais</Button>
        </Link>
      </div>

      <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg w-full max-w-[300px] mx-auto">
        <Image src={telaLogin} alt="" className="rounded-t-lg" />
        <hgroup>
          <h3 className="my-2 font-bold text-center uppercase">
            Tela de login
          </h3>
        </hgroup>
        <Link href="https://tela-login-next.vercel.app/" target="_blank">
          <Button>Veja mais</Button>
        </Link>
      </div>

      <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg w-full max-w-[300px] mx-auto">
        <Image src={devLink} alt="" className="rounded-t-lg" />
        <hgroup>
          <h3 className="my-2 font-bold text-center uppercase">Dev Link</h3>
        </hgroup>
        <Link href="https://dev-links-phi.vercel.app/" target="_blank">
          <Button>Veja mais</Button>
        </Link>
      </div>

      <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg w-full max-w-[300px] mx-auto">
        <Image src={botoes} alt="" className="rounded-t-lg" />
        <hgroup>
          <h3 className="my-2 font-bold text-center uppercase">
            Botões Action
          </h3>
        </hgroup>
        <Link href="https://botoes-action.vercel.app/" target="_blank">
          <Button>Veja mais</Button>
        </Link>
      </div>

      <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg w-full max-w-[300px] mx-auto">
        <Image src={chat} alt="" className="rounded-t-lg" />
        <hgroup>
          <h3 className="my-2 font-bold text-center uppercase">
            Chat Responsivo
          </h3>
        </hgroup>
        <Link href="https://chat-resposnivo.vercel.app/" target="_blank">
          <Button>Veja mais</Button>
        </Link>
      </div>
    </>
  )
}
