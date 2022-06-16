import React from "react"
import Button from "../../common/button"
import "./index.css"

interface LoadingProps {
    loading: true
}

interface LiveStreamPlayerProps {
    loading?: never
    vidSrc: string
    competition: string
    teamA: string
    teamB: string
    status: string
}

interface PromoBets {
    provider: 'm-sports' | 'saba-sports'
}

const PromoBets = (props: PromoBets) => {
    const { provider } = props

    return (
        <div className="sports-bets flex flex-jc-b flex-col-expand g-col-8 mq-1023-unflex">
            <div className="col col-1 mq-1023-m-b-8 mq-1023-ta-center">
                <img src={require(`../../../assets/images/logos/${provider}-dark.svg`)} className="logo" alt={provider} />
            </div>
            <div className="col col-2 flex-mw-unset ta-right">
                <Button buttonStyle="default" width="expand" height={24}>BET NOW</Button>
            </div>
        </div>
    )
}

const Index = (props: LiveStreamPlayerProps | LoadingProps) => {
    return (
        <div className="live-stream-player">
            <div className="row row-1 m-b-16">
                <div className="competition-info row row-1 flex flex-jc-b g-col-8">
                    <div className="col col-1 flex-grow">
                        <div className={`competition m-b-4 ${props.loading ? 'box-loading ' : ''}`}>
                            {!props.loading && props.competition}
                        </div>
                        <div className={`versus ${props.loading ? 'box-loading ' : ''}`}>
                            {!props.loading && <>{props.teamA} vs {props.teamB}</>}
                        </div>
                    </div>
                    <div className="col col-2 flex-mw-unset">
                        <div className={`tag ${props.loading ? 'box-loading ' : props.status}`}>
                            {!props.loading && props.status}
                        </div>
                    </div>
                </div>
                <div className="row row-2">
                    <div className="iframe-box">
                        {!props.loading &&
                            <iframe src={`${props.vidSrc}&autoplay=1&mute=1`} title="videoplayer" ></iframe>
                        }
                    </div>
                </div>
            </div>
            <div className="sports-bets-area row row-2 flex flex-jc-b flex-col-expand g-col-16 mq-1023-ungap-col">
                <div className="col col-1">
                    <PromoBets provider="m-sports" />
                </div>
                <div className="col col-2">
                    <PromoBets provider="saba-sports" />
                </div>
            </div>
        </div>
    )
}

export default React.memo(Index)