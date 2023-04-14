import Image from 'next/image'
import felippe from '/public/felippe.png'
import Link from 'next/link'

export function Header() {
  return (
    <Link href="/" className="mt-24">
      <Image
        src={felippe}
        alt="Foto de Felippe Donatto - Desenvolvedor Web"
        width={112}
        className="border-4 border-gray-400 rounded-full"
      />

      <span className=" mt-2 font-bold tracking-widest">@donattodev</span>
    </Link>
  )
}
