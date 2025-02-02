import './App.css'
import responseMovies from './mocks/wit_results.json'
import withoutResults from './mocks/no_results.json'

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  return(
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
      <form action="" className="form">
        <input placeholder='Avenger, Stat Wars, The Matrix ...' />
        <button type='submit'>Buscar</button>
      </form>
      </header>

      <main>
        {
          hasMovies ?(
            
          )
          : ( 
            
          )
        }
      </main>
      
    </div>
  )
}

export default App
