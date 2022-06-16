export interface ButtonProps {
    children: React.ReactNode
    buttonStyle: 'default' | 'dark'
    buttonStatus?: 'active' | 'maintenance' | 'disabled'
    icon?: 'play-yellow'
    width?:
    { default?: btnSizes['width'] } &
    { mq1400?: btnSizes['width'] } &
    { mq1023?: btnSizes['width'] } &
    { mq767?: btnSizes['width'] }
    height?:
    { default?: btnSizes['height'] } &
    { mq1400?: btnSizes['height'] } &
    { mq1023?: btnSizes['height'] } &
    { mq767?: btnSizes['height'] }
    onClick?: () => void
}

type btnSizes = {
    width: 'full' | 120 | 200 | 244,
    height: 24 | 32 | 40 | 48
}