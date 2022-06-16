interface SwipeScrollerProps {
    children: React.ReactNode
    scrollBarVisible?: 'always' | 'hide' | 'hover-only'
}

export interface ScrollXProps extends SwipeScrollerProps {
    direction: 'x'
}

export interface ScrollYProps extends SwipeScrollerProps {
    direction: 'y'
    height: number
}