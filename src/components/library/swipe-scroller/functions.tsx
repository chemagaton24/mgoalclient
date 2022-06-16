export const getScrollBarThickness = (direction: 'x' | 'y',ref: HTMLDivElement):number => {
    if(direction === 'x') {
        return ref!.offsetHeight - ref!.clientHeight
    } else {
        return ref!.offsetWidth - ref!.clientWidth
    }
}

export const getPercent = (a:number, b:number) => {
    return (a / b) * 100
}

export const getScrollBarLength = (direction: 'x' | 'y', swipeController: HTMLDivElement, swipeInner: HTMLDivElement) => {
    const swipeInnerLength = swipeInner![(direction === 'x') ? 'clientWidth' : 'clientHeight']
    const swipeScrollerLength = swipeController![(direction === 'x') ? 'clientWidth' : 'clientHeight']
    const percentage = getPercent(swipeScrollerLength, swipeInnerLength)
    return swipeScrollerLength * percentage / 100
}

export const getScrollBarPos = (e:Event, direction: 'x' | 'y', swipeInner: HTMLDivElement, swipeBar: HTMLDivElement) => {
    const target = e.target  as HTMLElement
    const targetScrollDir = target[(direction === 'x') ? 'scrollLeft': 'scrollTop']
    const innerLength = swipeInner![(direction === 'x') ? 'clientWidth': 'clientHeight']
    const targetLength = target[(direction === 'x') ? 'clientWidth': 'clientHeight']
    const percentage = getPercent(targetScrollDir, innerLength - targetLength)
    const swipeBarWH = swipeBar![(direction === 'x') ? 'clientWidth': 'clientHeight']
    return Math.floor(((targetLength - swipeBarWH) * percentage) / 100)
}

export const getMargin = (direction: 'x' | 'y', swipeScroller: HTMLDivElement, swipeController: HTMLDivElement) => {
    // const padding = (direction === 'x') ? 'padding-bottom' : 'padding-right'
    // const swipeScrollerPadding = parseInt(window.getComputedStyle(swipeScroller as Element, null).getPropertyValue(padding), 10)
    return getScrollBarThickness(direction, swipeController)
}