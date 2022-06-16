import ListCards from "../list-cards"
import Button from "../../common/button"
import MSportsLogo from "../../../assets/images/logos/m-sports-dark.svg"
import useMediaQuery from "../../library/useMediaQuery"
import "./index.css"

interface MatchSchedSecModProps {
    headingText: string
}

const Index = (props: MatchSchedSecModProps) => {
    const { headingText } = props

    return (
        <div className="match-schedule-sec-mod">
            <div className="row row-1 flex flex-jc-b g-col-8 m-b-40 mq-1023-m-b-24">
                <div className="col col-1"><h3 className="section-title">{headingText}</h3></div>
                {useMediaQuery('(min-width: 1023px)') &&
                    <div className="col col-2">
                        <div className="powered-by flex flex-s flex-inline g-col-16">
                            <div className="col col-1">Powered by</div>
                            <div className="col col-2"><img src={MSportsLogo} className="logo" alt="MSports" /></div>
                            <div className="col col-3"><Button buttonStyle="default" height={32}>BET NOW</Button></div>
                        </div>
                    </div>
                }
            </div>
            <div className="row row-2 mq-1023-m-b-24"><ListCards /></div>
            {useMediaQuery('(max-width: 1023px)') &&
                <div className="row row-3 mq-1023-ta-center">
                    <div className="powered-by flex flex-s flex-inline g-col-8">
                        <div className="col col-1">Powered by</div>
                        <div className="col col-2"><img src={MSportsLogo} className="logo" alt="MSports" /></div>
                        <div className="col col-3"><Button buttonStyle="default" height={24}>BET NOW</Button></div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Index