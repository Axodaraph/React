import { useEffect, useState } from 'react'
import './App.css'
import { EVENT } from './constant/const.js'

import  HomePage  from './pages/HomePage.jsx'
import  AboutPage  from './pages/AboutPage.jsx' 

function App() {
  const [currentPath, setCurrentPath] = useState(globalThis.location.pathname)

  useEffect(()=>{
    const onLocationChange = () => {
      setCurrentPath(globalThis.location.pathname)
    }
    globalThis.addEventListener(EVENT.PUSHSTATE, onLocationChange)
    globalThis.addEventListener(EVENT.POPSTATE, onLocationChange)

    return () => {
      globalThis.removeEventListener(EVENT.PUSHSTATE, onLocationChange)
      globalThis.addEventListener(EVENT.POPSTATE, onLocationChange)
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
