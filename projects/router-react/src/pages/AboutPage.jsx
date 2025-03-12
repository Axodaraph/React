import { Link } from '../Link.jsx'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://avatars.githubusercontent.com/u/124849807?v=4" alt="foto de dariel" />
        <p>Hola, me llamo Dariel Moya Pérez y estoy creando un clon de React Router</p>
      </div>
      <Link to='/'>Ir a la home</Link>
    </>
  )
}