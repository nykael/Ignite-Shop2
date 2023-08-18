import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'


import { Container } from '../styles/pages/app'
import { Heade } from '../components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Heade />
      <Component {...pageProps} />
    </Container>
  )
}
