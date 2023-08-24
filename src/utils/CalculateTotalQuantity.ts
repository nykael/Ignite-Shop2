interface CartContextDataProps {
    id?: string;
    name?: string;
    imageUrl?: string;
    price?: string;
    description?: string;
    defaultPriceId?: string;
    quantity: number;
}



export const CalculateTotalQuantity = (cart: CartContextDataProps[]) => {
    return cart.reduce((total, item) => total + item.quantity, 0);

}