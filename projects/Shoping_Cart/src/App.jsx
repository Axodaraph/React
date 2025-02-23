import {products as initialProducts} from './mocks/Product.json'
import { Products } from "./components/Product"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './Hooks/useFilters.js'



function App() {
  const { filteredProducts} = useFilters()
  const filtredProducts = filteredProducts(initialProducts)


    return (
    <>
    <Header />
    <Products products={filtredProducts} />
    {IS_DEVELOPMENT && <Footer />} 
    </>
  )
}

export default App
