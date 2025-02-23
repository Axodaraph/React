import { useFilters } from '../Hooks/useFilters'
import './Footer.css'

export function Footer () {
    const {filters} = useFilters()

    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
            {/* <h4>React technical test</h4>
            <span>darielnotion@gmail.com</span>
            <h5>Shoping cart using useContext and useReducer</h5> */}
        </footer>
    )
}