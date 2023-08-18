import { useContext } from "react";
import { CartContext } from "../context/Bag";

export function useCart() {
    const context = useContext(CartContext);
    return context;
}