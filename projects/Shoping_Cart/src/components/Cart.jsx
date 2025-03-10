import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import './Cart.css'
import { useCart } from "../Hooks/useCart.js";

function CartItem ({imagen, price, nombre, quantity, addToCart}) {
    return (
        <li>
            <img src={imagen} alt={nombre} />
            <div>
                <strong>{nombre}</strong> - ${price}
            </div>

            <footer>
                <small>QTy: {quantity}</small>
                <button onClick={addToCart}>+</button>                 
            </footer>
        </li>
    )
}

export function Cart () {
    const cartCheckboxId = useId()
    const {cart, clearCart, addToCart} = useCart()

    return (
        <>
                 <label className="cart-button" htmlFor={cartCheckboxId} >
            <CartIcon/>
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />
            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem key={product._id}
                        addToCart={() => addToCart(product)}
                        {...product}
                        />
                    ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}