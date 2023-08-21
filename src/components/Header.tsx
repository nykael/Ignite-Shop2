import { Bag, Header as Heading } from "../styles/pages/app";
import Image from "next/image";

import BagSvg from '../assets/bag.png'

import LogoImg from'../assets/logo.svg'
import { useCart } from "../hooks/useCart";
import { CartContextDataProps } from "../context/Bag";

interface HeaderProps {
  toggleCard: () => void
}

export function Header({toggleCard} : HeaderProps) {
  const {cart} = useCart()

    console.log('AQUIEEEE =>', cart)
    const calculateTotalQuantity = (cart: CartContextDataProps[]): number => {
      return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <Heading>
        <Image src={LogoImg.src} alt=""  width={200} height={130}/>
        <Bag onClick={toggleCard}>
          <Image  
            src={BagSvg} 
            alt="" 
            width={24} 
            height={24}
          />
         { 
          cart.length !== 0 &&
          (<div>
            <p>
              {
              calculateTotalQuantity(cart)
              }
            </p>
          </div>)
         }
        </Bag>
      </Heading>
    )
}