import { useFilters } from '../Hooks/useFilters';
import './Filters.css';
import {  useId } from 'react';

export function Filters () {
    const {filters, setFilters} = useFilters()
   /*  const [minPrice, setMinPrice] = useState(0) //estado local */
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        // hay algo raro en este evento, demasiadas props
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">

            <div>
                <label htmlFor={minPriceFilterId}>Precio Mínimo</label>
                <input type="range" id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice} 
                value={filters.minPrice}/>
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todo</option>
                    <option value="beauty">Productos de Belleza</option>
                    <option value="groceries">comida</option>
                    <option value="furniture">Comodidad</option>
                    <option value="fragrances">Fragancias</option>
                </select>
            </div>
        </section>
    )
}