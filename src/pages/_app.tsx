import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import LogoImg from'../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={LogoImg.src} alt=""  width={200} height={130}/>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
