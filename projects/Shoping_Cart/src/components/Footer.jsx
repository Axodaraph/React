import { useCart } from '../Hooks/useCart'
import { useFilters } from '../Hooks/useFilters'
import './Footer.css'

export function Footer () {
    const {filters} = useFilters()
    const { cart } = useCart()

    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
            {
                JSON.stringify(cart, null, 2)
            }
            {/* <h4>React technical test</h4>
            <span>darielnotion@gmail.com</span>
            <h5>Shoping cart using useContext and useReducer</h5> */}
        </footer>
    )
}