import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './Hooks/useMovies'
import debounce from 'just-debounce-it'

function useSearch () {
  const [query, setQuery]= useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if(isFirstInput.current){
      isFirstInput.current = query === ''
      return
    }

    if(query === ''){
      setError('No se puede buscar una pelicula vacia')
    }

    if(query.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }
    if(query.length < 3){
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)

  }, [query])

  return {query, setQuery, error}
}
 
function App() { 
  const [sort, setSort ] = useState(false)
  const {query, setQuery, error} = useSearch()
  const { movies, getMovies, loading} = useMovies({query, sort})  
  
  const debouncedGetMovies = useCallback(
    debounce(query => {
      console.log('search', query)
      getMovies({ query })
    }, 1000)
    , [getMovies]
  ) 

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({query})
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setQuery(newSearch)
    debouncedGetMovies(newSearch)
  }

  


  return(
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} name='query'  placeholder='Avenger, Stat Wars, The Matrix ...' />
        <input type="checkbox" onChange={handleSort} checked={sort}/>
        <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{color: 'red'}} className='error'>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando ...</p> : <Movies movies={movies}/>
        }   
        
      </main>
      
    </div>
  )
}

export default App
