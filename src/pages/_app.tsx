import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'


import { Container } from '../styles/pages/app'
import { Heade } from '../components/Header'
import { BagContextProvider } from '../context/Bag'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <BagContextProvider>
        <Heade />
        <Component {...pageProps} />
      </BagContextProvider>
    </Container>
  )
}
