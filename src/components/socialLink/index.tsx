import Image from 'next/image'
import { LinkSocial } from './LinkSocial'

import github from '/public/icons/github.png'
import instagram from '/public/icons/instagram.png'
import whatsapp from '/public/icons/whatsapp.png'
import linkedin from '/public/icons/linkedin.png'

export function SocialLinks() {
  return (
    <div className="flex items-center flex-col w-6">
      <div className="border border-gray-800 h-96"></div>

      <div>
        <ul className="flex flex-col items-center justify-center gap-4 mt-4">
          <LinkSocial href="https://github.com/felippedonatto">
            <Image src={github} alt="" width={24} height={24} />
          </LinkSocial>

          <LinkSocial href="https://www.instagram.com/donattodev/">
            <Image src={instagram} alt="" width={24} height={24} />
          </LinkSocial>

          <LinkSocial href="https://wa.me/message/EVND3KQTJJOTL1">
            <Image src={whatsapp} alt="" width={24} height={24} />
          </LinkSocial>

          <LinkSocial href="https://www.linkedin.com/in/felippe-donatto-oliveira-7212a4121/">
            <Image src={linkedin} alt="" width={24} height={24} />
          </LinkSocial>
        </ul>
      </div>

      <div className="border border-gray-800 h-24 mt-4"></div>
    </div>
  )
}
