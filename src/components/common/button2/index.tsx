import { ButtonProps } from "./Interfaces"
import "./index.css"

const index = (props: ButtonProps) => {
    const { children, buttonStyle, icon, buttonStatus, width, height, onClick } = props

    const classList = [
        'btn',
        `btn-style-${buttonStyle}`,
        (width?.default) ? `w-${width.default}` : '',
        (width?.mq1400) ? `mq-1400-w-${width.mq1400}` : '',
        (width?.mq1023) ? `mq-1023-w-${width.mq1023}` : '',
        (width?.mq767) ? `mq-1400-w-${width.mq767}` : '',
        (height?.default) ? `h-${height.default}` : '',
        (height?.mq1400) ? `mq-1400-h-${height.mq1400}` : '',
        (height?.mq1023) ? `mq-1023-h-${height.mq1023}` : '',
        (height?.mq767) ? `mq-1400-h-${height.mq767}` : '',
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