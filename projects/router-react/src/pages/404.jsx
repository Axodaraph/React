
import {Link} from '../Link.jsx'

export default function Page404 () {
    return (
        <article style={{
            display: "flex", flexDirection: "column" , alignItems: "center", justifyContent: "center"
        }}>
            <h1>404</h1>
            <p>Page not Found</p>
            <Link to='/'>Volver a la Home</Link>
        </article>
    )
}