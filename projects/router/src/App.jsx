import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstante'

function navigate (href) {
  globalThis.history.pushState({},'', href)
  // crear un evento personalizado
  const navigationEvent = new Event(NAVIGATION_EVENT)
  globalThis.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
      <button href="/about"> Ir sobre nosotros</button>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://avatars.githubusercontent.com/u/124849807?v=4" alt="foto de dariel" />
        <p>Hola, me llamo Dariel Moya Pérez y estoy creando un clon de React Router</p>
      </div>
      <button onClick={() => navigate('./about')}>Ir a la home</button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(globalThis.location.pathname)

  useEffect(()=>{
    const onLocationChange = () => {
      setCurrentPath(globalThis.location.pathname)
    }
    globalThis.addEventListener(NAVIGATION_EVENT, onlanguagechange)

    return () => {
      globalThis.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  },[])
  return (
    <main>
      {currentPath === '/' && <HomePage/>}
      {currentPath === '/about' && <AboutPage/>}
    </main>
  )
}

export default App
