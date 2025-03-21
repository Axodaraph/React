import { BUTTONS, EVENT } from './constant/const.js'
export function navigate (href) {
    globalThis.history.pushState({},'', href)
    // crear un evento personalizado
    const navigationEvent = new Event(EVENT.PUSHSTATE)
    globalThis.dispatchEvent(navigationEvent)
  }

export function Link ({target, to, ...props}){
    const handleClick = (event) => {
        //para evitar la recarga por defecto
        

        const isMainEvent = event.button === BUTTONS.primary //primary click
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent){
            event.preventDefault() 
            navigate(to)
            globalThis.scrollTo(0, 0)
        }

       
    }

    return <a onClick={handleClick} href={to} target={target}  {...props}></a>
}