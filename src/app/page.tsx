import Image from 'next/image'

import felippe from '/public/felippe.png'
import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { Heading } from '@/components/Heading'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="w-full max-w-[420px]">
        <Heading className="mb-6 max-md:text-center">
          Web developer <br />
          <span className="text-brand-500">Donatto Dev</span>
        </Heading>

        <Text className="block max-md:text-center">
          Desenvolvedor web de sistemas, sites pessoais e aplicações web. Venha
          conhecer meu trabalho e agende uma reunião.
        </Text>

        <div className="flex gap-4 mt-6">
          <Button>
            <Link href="https://wa.me/message/EVND3KQTJJOTL1" target="_blank">
              Agende sua reunião
            </Link>
          </Button>
          <Button>
            <Link href="/portifolio">Conheça meu trabalho</Link>
          </Button>
        </div>
      </div>

      <Image src={felippe} alt="" />
    </>
  )
}
