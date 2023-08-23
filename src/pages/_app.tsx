import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'


import { Container } from '../styles/pages/app'
import { Header } from '../components/Header'
import { BagContextProvider } from '../context/Bag'
import { ShoppingCart } from '../components/ShopingCart'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { HeaderSuccess } from '../components/HeaderSuccess'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [openCart, setOpenCart] = useState(false)
  const router = useRouter();

  console.log(router.pathname)
  
  const toggleCard = () => {
    setOpenCart(!openCart)
  }


  if (router.pathname === `/success`) {
    return (
      <Container>
      <BagContextProvider>
        <HeaderSuccess />
        <Component {...pageProps} />
      </BagContextProvider>
    </Container>
    );
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
