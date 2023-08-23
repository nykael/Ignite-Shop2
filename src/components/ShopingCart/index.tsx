import { ButtonExit, Card, CartContainer, CartDescription, CartImage, CartView, ContentCardItems, EmptyCart } from "./styles";
import Image from "next/image";
import { AiOutlineFullscreenExit } from 'react-icons/ai'
import { useCart } from "@/src/hooks/useCart";
import { CartContextDataProps } from "@/src/context/Bag";
import { CalculateTotalQuantity } from "@/src/utils/CalculateTotalQuantity";
import { useState } from "react";
import axios from "axios";

interface CartProps {
  toggledCard: () => void ;
  isOpen: boolean
}



export function ShoppingCart({toggledCard, isOpen} : CartProps) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
    const {cart, dispatch} = useCart()

    
    function handleRemoveShirt(item: CartContextDataProps ) {
        console.log(item)

        dispatch({type: 'REMOVE_FROM_CART', payload: item })
    }


    async function handleBuyProduct() {
        setIsCreatingCheckoutSession(true)

        await axios.post('/api/checkout', cart.map(item => {
            return {
                price: item.defaultPriceId,
                quantity: item.quantity
            };
        })).then((response) => {
            const { checkoutUrl } = response.data
 
             window.location.href = checkoutUrl
         }).catch((error) => {
           alert('Falha ao redirecionar ao checkout')
           setIsCreatingCheckoutSession(false)
        })
    }

    function handlePrice(){
        return cart.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[^\d.,]/g, '').replace(',', '.')); // Convertendo a string para número de ponto flutuante
            return total + price * item.quantity;
        }, 0);
    }

    return (
        <CartContainer isOpen={isOpen}>
            <ButtonExit>
                <div onClick={toggledCard}>
                     <AiOutlineFullscreenExit size={24}  />
                </div>
            </ButtonExit>

            <h1>Sacola de compras</h1>
            {   
                cart.length !== 0 ?

                <div >
                   <ContentCardItems >
                   { cart.map((cartItem) => (
                            <CartView key={cartItem.id} >
                            <CartImage>
                                <Image src={cartItem.imageUrl} alt="" width={120} height={110} />
                            </CartImage>
                            
                            <Card>
                                <samp>{cartItem.name}</samp>

                                <div>
                                  <strong>{cartItem.price}</strong>
                                  <strong>Quantidade: {cartItem.quantity}</strong>
                                </div>

                                <p onClick={() => handleRemoveShirt(cartItem)}>
                                    Remover
                                </p>
                            </Card>
                            </CartView>
                        ))}
                    </ContentCardItems>

                    <CartDescription>
                          <div>
                              <h4>Quantidade</h4>
                              <h3>  
                                {CalculateTotalQuantity(cart)} itens
                              </h3>
                           </div>

                           <div>
                             <h2>Valor Total</h2>
                             <h1>R$ {handlePrice().toFixed(2)}</h1>
                           </div>

                            <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
                                Finalizar Compra
                            </button>
                    </CartDescription>
                </div>
                :
                <EmptyCart>
                    <p>Opa, Sua sacola de compras está vazia, que tal adicionar algo ?</p>
                </EmptyCart>
            }
        </CartContainer>
    )
}