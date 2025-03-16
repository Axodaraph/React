import { Children, useEffect, useState } from "react"
import { EVENT } from "./constant/const"
import {match} from 'path-to-regexp'

export function Router ({children, routes=[], defaultComponent: DefacultComponent = () => <h1>404</h1> }) {
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

    let routeParams = {}

    //agregar las rutas que vinene del children routes component
    const routesFromChildren = Children.map(children, ({props, type}) => {
      const { name } = type
      console.log({props, type})
      const isRoute = name === 'Route'

      return isRoute? props : null
    })

    console.log(routesFromChildren)
    const routesToUse = routes.concat(routesFromChildren)
  
    const Page = routesToUse.find(({path}) => {
      if (path === currentPath) return true

      //hemos usado path-to-regexp
      //para poder deterctar rutas dinamicas 
      const matcherUrl = match(path, {decode: decodeURIComponent})
      const matched = matcherUrl(currentPath)
      if (!matched) return false

      // /search/:query
      //guardar los parametris de la url que eran dinamicos
      routeParams = matched.params // {query: 'javascript'} // /search/javascript
      return true
    })?.Component



  
    return Page ? <Page routeParams={routeParams}/> : <DefacultComponent routeParams={routeParams} />
  }