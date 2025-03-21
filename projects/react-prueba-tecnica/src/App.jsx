import './App.css'
import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatImage"




export function App () {
    const {fact, refreshRandomFact} = useCatFact()
    const {imageUrl} = useCatImage({fact})

    const handleClick = async () => {
       refreshRandomFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}></img>}
            </section>
            <button onClick={handleClick}>Get new fact</button>
        </main>
        
    )
}