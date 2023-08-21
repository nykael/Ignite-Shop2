import { CartContextDataProps } from "../context/Bag";


export const CalculateTotalQuantity = (cart: CartContextDataProps[]) => {
    return cart.reduce((total, item) => total + item.quantity, 0);

}