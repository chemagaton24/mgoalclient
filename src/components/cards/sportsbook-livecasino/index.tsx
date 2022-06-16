import "./index.css"
import Button from "../../common/button2"

type SportsbookType = {
    type: 'sportsbook'
    provider: 'm-sports' | 'saba-sports'
}

type LivecasinoType = {
    type: 'livecasino'
    provider: 'laliga-room' | 'club88-europe'
}

const index = (props: SportsbookType | LivecasinoType) => {
    const { type, provider } = props

    return (
        <div className="card card-sb-lc ta-center">
            <img src={require(`../../../assets/images/cards/${type}/${provider}.png`)} className="cover" />
            <Button buttonStyle="default" height={{ default: 48, mq1400: 32, mq1023: 24 }} >PLAY NOW</Button>
        </div>
    )
}

export default index