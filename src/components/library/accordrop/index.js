import { createContext, useContext, useRef, useEffect } from "react"
import "./index.css"

const ContChildrenRefRefCtx = createContext()

// const contPadMarTotal = (ref, styleTarget) => {
//     let total = window.getComputedStyle(ref, null).getPropertyValue(styleTarget).split(' ')
//     total.map((item, key) => {
//         total[key] = parseInt(item)
//     })

//     return total.reduce((a, b) => a + b, 0)
// }

export const ADContainer = (props) => {
    const { children } = props
    const contRef = useRef()
    const parentRef = useRef()
    const childRef = useRef()
    const innerRef = useRef()

    const handleChildMEnter = () => {
        contRef.current.classList.add('active')

        const height = innerRef.current.clientHeight
        childRef.current.style.height = `${height}px`
    }

    const handleChildMLeave = () => {
        contRef.current.classList.remove('active')
        childRef.current.style.height = `${childRef.current.clientHeight}px`
        setTimeout(function () {
            childRef.current.style.height = `0px`
        })
    }

    useEffect(() => {
        childRef.current.addEventListener('transitionend', function () {
            if (contRef.current.classList.contains('active')) {
                childRef.current.style.height = 'unset'
            } else {
                childRef.current.style.height = ''
            }
        })
    }, [])

    return (
        <div className="ad-container"
            ref={contRef}
            onMouseEnter={handleChildMEnter}
            onMouseLeave={handleChildMLeave}
        >
            <ContChildrenRefRefCtx.Provider value={{ parentRef, childRef, innerRef }}>
                {children}
            </ContChildrenRefRefCtx.Provider>
        </div>
    )
}

export const ADParent = (props) => {
    const { children } = props
    const ChildRefProv = useContext(ContChildrenRefRefCtx)
    const { parentRef } = ChildRefProv

    return (
        <div className="ad-parent" ref={parentRef}>
            {children}
        </div>
    )
}

export const ADChild = (props) => {
    const { children } = props
    const ChildRefProv = useContext(ContChildrenRefRefCtx)
    const { childRef, innerRef } = ChildRefProv
    
    return (
        <div className="ad-child" ref={childRef}>
            <div className="ad-inner" ref={innerRef}>
                {children}
            </div>
        </div>
    )
}

const Index = (props) => {
    const { children } = props

    return (
        <div className="accordrop">
            {children}
        </div>
    )
}

export default Index