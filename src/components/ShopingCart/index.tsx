import { ButtonExit, Card, CartContainer, CartDescription, CartImage, CartView, ContentCardItems, EmptyCart } from "./styles";
import Image from "next/image";
import { AiOutlineFullscreenExit } from 'react-icons/ai'
import { useCart } from "@/src/hooks/useCart";
import { CartContextDataProps } from "@/src/context/Bag";
import { CalculateTotalQuantity } from "@/src/utils/CalculateTotalQuantity";

interface CartProps {
  toggledCard: () => void ;
  isOpen: boolean
}



export function ShoppingCart({toggledCard, isOpen} : CartProps) {
    const {cart, dispatch} = useCart()
    
    function handleRemoveShirt(item: CartContextDataProps ) {
        console.log(item)

        dispatch({type: 'REMOVE_FROM_CART', payload: item })
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
                                <strong>{cartItem.price}</strong>

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

                            <button>
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