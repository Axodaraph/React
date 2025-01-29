import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    console.log('efectt ', { enabled })

    const handleMove = (event) => {
      const {clientX, clientY} = event
      console.log('handleMove', {clientX, clientY})
      setPosition({ x: clientX, y: clientY})
    }
    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }

    //cleanup
    //-> cuando el componente se desmonta
    //-> cuando cambian las dependencias, antes de
    //  ejecutar el efecto de nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
    
  }, [enabled])

  //change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    //[] -> solo se ejecuta una vez se monta el componente
    //[enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
    //undefined -> se ejecuta cada vez que se renderiza el componente

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <main>
    <div
    style={{
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid #fff',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -25,
      top: -25,
      width: 50,
      height: 50,
      transform: `translate(${position.x}px, ${position.y}px)`
    }}></div>
    <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
  )
}

export default App
