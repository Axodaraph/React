import {products as initialProducts} from './mocks/Product.json'
import { Products } from "./components/Product"
import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function useFilters () {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })


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

function App() {
  const [products] = useState(initialProducts)
  const { filteredProducts, setFilters, filters} = useFilters()
  const filtredProducts = filteredProducts(products)


    return (
    <>
    <Header changeFilters={setFilters}/>
    <Products products={filtredProducts} />
    <Footer filters={filters}/>
    </>
  )
}

export default App
