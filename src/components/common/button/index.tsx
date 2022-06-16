import { ButtonProps } from "./Interfaces"
import "./index.css"

const index = (props: ButtonProps) => {
    const { children, buttonStyle, icon, buttonStatus, width, height, onClick } = props

    const classList = [
        'btn',
        `btn-style-${buttonStyle}`,
        width && `w-${width}`,
        height && `h-${height}`,
        (buttonStatus) && `btn-status-${buttonStatus}`
    ]

    return (
        <button
            className={classList.join(" ")}
            disabled={(buttonStatus === 'maintenance' || buttonStatus === 'disabled') && true}
            onClick={onClick}
        >
            <span className={icon ? 'flex flex-inline g-col-4' : ''}>
                {icon === 'play-yellow' && <i className="icon icon-play yellow s-16"></i>}
                <span>{children}</span>
            </span>
        </button>
    )
}

export default index