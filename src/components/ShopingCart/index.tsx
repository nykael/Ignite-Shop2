import { ButtonExit, Card, CartContainer, CartDescription, CartImage, CartView, ContentCardItems, EmptyCart } from "./styles";
import Image from "next/image";
import { AiOutlineFullscreenExit } from 'react-icons/ai'
import { useCart } from "@/src/hooks/useCart";
import { CartContextDataProps } from "@/src/context/Bag";

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

                cart.map((cart) => (
                    <div key={cart.id}>
                        <ContentCardItems >
                            <CartView >
                            <CartImage>
                                <Image src={cart.imageUrl} alt="" width={120} height={110} />
                            </CartImage>
                            
                            <Card>
                                <samp>{cart.name}</samp>
                                <strong>{cart.price}</strong>

                                <p onClick={() => handleRemoveShirt(cart)}>
                                    Remover
                                </p>
                            </Card>
                            </CartView>
                       </ContentCardItems>

                        <CartDescription>
                          <div>
                              <h4>Quantidade</h4>
                              <h3> itens</h3>
                           </div>

                           <div>
                             <h2>Valor Total</h2>
                             <h1>R$ 270,00</h1>
                           </div>

                            <button>
                                Finalizar Compra
                            </button>
                        </CartDescription>
                    </div>
                ))
              
                :

                <EmptyCart>
                    <p>Opa, Sua sacola de compras está vazia, que tal adicionar algo ?</p>
                </EmptyCart>
            }
        </CartContainer>
    )
}