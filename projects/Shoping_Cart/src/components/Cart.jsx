import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import './Cart.css'

export function Cart () {
    const cartCheckboxId = useId()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId} >
            <CartIcon/>
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />
            <aside className="cart">
                <ul>
                    <li>
                        <img src="https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png" alt="aji" />
                        <div>
                            <strong>AJI</strong> - $12
                        </div>

                        <footer>
                            <small>QTy: 1</small>
                            <button>+</button>
                        </footer>
                    </li>

                </ul>

                <button>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}