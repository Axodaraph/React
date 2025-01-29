import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./services/facts"
import { useCatImage } from "./hooks/useCatImage"




export function App () {
    const [fact, setFact] = useState()
    const {imageUrl} = useCatImage({fact})

    
//efecto para recuperar la cita al cargar la pagina
    useEffect(() => {

        getRandomFact().then(newFact => setFact(newFact))

    }, [])

    

    const handleClick = async () => {
       const newFact = await getRandomFact()
       setFact(newFact)
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