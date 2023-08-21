import { Bag, Header as Heading } from "../styles/pages/app";
import Image from "next/image";

import BagSvg from '../assets/bag.png'

import LogoImg from'../assets/logo.svg'
import { useCart } from "../hooks/useCart";
import { CalculateTotalQuantity } from "../utils/CalculateTotalQuantity";

interface HeaderProps {
  toggleCard: () => void
}

export function Header({toggleCard} : HeaderProps) {
  const {cart} = useCart()

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
              CalculateTotalQuantity(cart)
              }
            </p>
          </div>)
         }
        </Bag>
      </Heading>
    )
}