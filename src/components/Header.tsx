import { PiHandbagBold } from "react-icons/pi";
import { Bag, Header } from "../styles/pages/app";
import Image from "next/image";
import { theme } from "../styles";

import LogoImg from'../assets/logo.svg'
import { useState } from "react";
import { useCart } from "../hooks/useCart";

export function Heade() {
    const {colors} = theme
    const {cart} = useCart()

    console.log(cart)

    return (
        <Header>
        <Image src={LogoImg.src} alt=""  width={200} height={130}/>
        <Bag>
          <PiHandbagBold color={colors.gray500} />
         { 
          cart !== undefined &&
          (<div>
            <p>1</p>
          </div>)
         }
        </Bag>
      </Header>
    )
}