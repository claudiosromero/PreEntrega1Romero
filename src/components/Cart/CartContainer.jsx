import React from "react";
import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
    const { cart, clearCart, deleteProductById, getTotalPrice } = useContext(CartContext)
    
    let total = getTotalPrice()
    
    return <div>
        <Cart total={total} cart={cart} clearCart={clearCart} deleteProductById={deleteProductById} />
    </div>;
};

export default CartContainer;
