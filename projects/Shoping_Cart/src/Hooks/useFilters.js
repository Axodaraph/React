import { useContext } from "react"
import { FiltersContext } from '../Context/filters.jsx'
export function useFilters () {
    const {filters, setFilters} = useContext(FiltersContext)
   
   
     // ESTO ES PARA JUNIORS
     const filteredProducts = (products) => {
       return products.filter(product => {
         return product.price >= filters.minPrice && 
         (filters.category === 'all' || product.category ===
         filters.category)
       })
     }
   
     return { filteredProducts, setFilters, filters }
   }