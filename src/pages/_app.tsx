import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'


import { Container } from '../styles/pages/app'
import { Header } from '../components/Header'
import { BagContextProvider } from '../context/Bag'
import { ShoppingCart } from '../components/ShopingCart'
import { useState } from 'react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [openCart, setOpenCart] = useState(false)

  const toggleCard = () => {
    setOpenCart(!openCart)
  }

  return (
    <Container>
      <BagContextProvider>
        <ShoppingCart toggledCard={toggleCard} isOpen={openCart} />
        <Header toggleCard={toggleCard} />
        <Component {...pageProps} />
      </BagContextProvider>
    </Container>
  )
}
