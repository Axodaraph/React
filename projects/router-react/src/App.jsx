import './App.css'
import  HomePage  from './pages/HomePage.jsx'
import  AboutPage  from './pages/AboutPage.jsx' 
import { Router } from './Router.jsx'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'
import { Route } from './pages/Route.jsx'

const routes = [{
    path: '/search/:query',
    Component: SearchPage
  }
]





function App() {
  
  return (
    <main>
      <Router routes={routes}  defaultComponent={Page404}>
        <Route path='/' Component={HomePage} ></Route>
        <Route path='/about' Component={AboutPage} ></Route>
      </Router>
    </main>
  )
}

export default App
