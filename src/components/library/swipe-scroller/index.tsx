import { useEffect, useRef, useState } from "react";
import { ScrollXProps, ScrollYProps } from "./interfaces"
import { getMargin, getScrollBarLength, getScrollBarPos } from "./functions"
import "./index.css";

const Index = (props: ScrollXProps | ScrollYProps) => {
    const { children, direction, scrollBarVisible } = props
    const swipeScrollerRef = useRef<HTMLDivElement>(null)
    const swipeControllerRef = useRef<HTMLDivElement>(null)
    const swipeInnerRef = useRef<HTMLDivElement>(null)
    const scrollBarRef = useRef<HTMLDivElement>(null)
    const [margin, setMargin] = useState<number>(0)
    const [scrollbarLength, setScrollbarLength] = useState<number>(0)
    const [scrollBarPos, setScrollbarPos] = useState<number>(0)
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
    const [oldScrollBarPos, setOldScrollBarPos] = useState<number>(0)
    const [oldMousePos, setOldMousePos] = useState<number>(0)
    const [isLeftClick, setIsLeftClick] = useState<boolean>(false)

    const swipeControllerStyles = {
        marginBottom: (direction === 'x') ? (margin * -1) : '',
        marginRight: (direction === 'y') ? (margin * -1) : '',
        height: (direction === 'y') ? props.height : '',
    }

    const scrollbarStyles = {
        width: (direction === 'x') ? (scrollbarLength) : '',
        height: (direction === 'y') ? (scrollbarLength) : '',
        left: (direction === 'x') ? (scrollBarPos) : '',
        top: (direction === 'y') ? (scrollBarPos) : '',
    }

    const handleScrollControllerEvent = (e: Event) => {
        const swipeInner = swipeInnerRef.current
        const scrollBar = scrollBarRef.current
        setScrollbarPos(getScrollBarPos(e, direction, swipeInner!, scrollBar!))
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.button === 0) {
            setIsLeftClick(true)
        } else {
            setIsLeftClick(false)
        }

        if (isLeftClick) {
            const swipeController = swipeControllerRef.current
            setOldScrollBarPos(swipeController![(direction === 'x') ? 'scrollLeft' : 'scrollTop'])
            setOldMousePos(e[(direction === 'x') ? 'clientX' : 'clientY'])
            setIsMouseDown(true)
        }
    }

    const handleMouseUp = () => {
        setIsMouseDown(false)
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isMouseDown && isLeftClick) {
            const swipeController = swipeControllerRef.current
            const mousePos = e[(direction === 'x') ? 'clientX' : 'clientY']
            const calc = ((mousePos - oldMousePos) + oldScrollBarPos)
            if (direction === 'x') {
                swipeController?.scrollTo(calc, 0)
            } else {
                swipeController?.scrollTo(0, calc)
            }
        }
    }

    const swipeScrollerClassList = [
        'swipe-scroller',
        `scroll-${direction}`,
        `scrollbar-visibility-${(scrollBarVisible) ? scrollBarVisible : 'always'}`,
        `swipe-mousedown-${(isMouseDown) && true}`
    ]

    useEffect(() => {
        const swipeScroller = swipeScrollerRef.current
        const swipeController = swipeControllerRef.current
        const swipeInner = swipeInnerRef.current

        const observer = new ResizeObserver(() => {
            setMargin(getMargin(direction, swipeScroller!, swipeController!))
            setScrollbarLength(getScrollBarLength(direction, swipeController!, swipeInner!))
        })
        observer.observe(swipeInner as Element)
        observer.observe(swipeScroller as Element)

        swipeController?.addEventListener('scroll', handleScrollControllerEvent)
    }, [])

    return (
        <div className={swipeScrollerClassList.join(" ")} ref={swipeScrollerRef}>
            <div className="swipe-controller"
                ref={swipeControllerRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={swipeControllerStyles}
            >
                <div className="swipe-inner" ref={swipeInnerRef}>
                    {children}
                </div>
            </div>
            {scrollBarVisible !== 'hide' && <div className="swipe-scrollbar" ref={scrollBarRef} style={scrollbarStyles}></div>}
        </div >
    )
}

export default Index