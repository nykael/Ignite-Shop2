
import { CartContextDataProps } from "../context/Bag";
import { CART_STORAGE } from "./storageCartConfig";

export async function storageCartSave(cart: CartContextDataProps []) {
    try {
        localStorage.setItem(CART_STORAGE, JSON.stringify(cart));
        
    } catch (error) {
        console.error('Error saving cart to AsyncStorage:', error)
    }

}

export async function storageGetCart() {
    try {
        const storage = localStorage.getItem(CART_STORAGE);
        const cart: CartContextDataProps [] = storage ? JSON.parse(storage) : [];
        return cart;
    } catch (error) {
        console.error('Error getting cart from AsyncStorage:', error);
        return [];
    }
}

export async function storageRemoveCart() {
    try {
        localStorage.removeItem(CART_STORAGE);
        
    } catch (error) {
        console.error('Error removing cart from AsyncStorage:', error);
    }
}