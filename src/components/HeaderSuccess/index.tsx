import { Bag, Header as Heading } from "./styles";
import Image from "next/image";

import BagSvg from '../../assets/bag.png'

import LogoImg from'../../assets/logo.svg'
import { useCart } from "../../hooks/useCart";
import { CalculateTotalQuantity } from "../../utils/CalculateTotalQuantity";

interface HeaderProps {
  toggleCard: () => void
}

export function HeaderSuccess() {

    return (
      <Heading>
        <Image src={LogoImg.src} alt=""  width={150} height={130}/>
      </Heading>
    )
}