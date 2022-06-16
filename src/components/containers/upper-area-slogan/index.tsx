import "./index.css"

interface ListItemLabelsProps {
    label: string
    icon: string
}

interface UpperAreaSloganProps {
    slogan: string
    listItemLabels: ListItemLabelsProps[]
}

const Index = (props: UpperAreaSloganProps) => {
    const { slogan, listItemLabels } = props

    return (
        <div className="upper-area-slogan ta-center dark-theme">
            <div className="inner-box">
                <div className="inner">
                    <h2 className="m-b-32 mq-767-m-b-24">{slogan}</h2>
                    <ul className="list-item-labels flex flex-inline g-col-16 mq-767-g-col-unset">
                        {listItemLabels.map((item, key) => {
                            const { label, icon } = item
                            return (
                                <li key={key}>
                                    <div className="row row-1 m-b-8 mq-767-m-b-unset"><i className={`icon icon-${icon} gray-white s-32 mq-767-s-24`}></i></div>
                                    <div className="row row-2 ws-nowrap">{label}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Index