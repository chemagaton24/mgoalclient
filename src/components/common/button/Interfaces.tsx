export interface ButtonProps {
    children: React.ReactNode
    buttonStyle: 'default' | 'dark'
    buttonStatus?: 'active' | 'maintenance' | 'disabled'
    icon?: 'play-yellow'
    width?: 'expand' | 200 | 120
    height?: 40 | 32 | 24
    onClick?: () => void
}