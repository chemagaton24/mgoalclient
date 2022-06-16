import UpperAreaSlogan from "../components/containers/upper-area-slogan"
import LiveCasinoCard from "../components/cards/sportsbook-livecasino"
import PromoBanner from "../components/promo-banners"

const Livecasino = () => {
    const listItemLabels = [
        {
            label: "30+ Tables",
            icon: "odds"
        }, {
            label: "Live 24 Hours",
            icon: "live-events"
        }, {
            label: "HD Video",
            icon: "soccer"
        }, {
            label: "Instant Payouts",
            icon: "pile-coins"
        }, {
            label: "Daily Rebates",
            icon: "promotion"
        }
    ]

    return (
        <>
            <UpperAreaSlogan
                slogan="AN AUTHENTIC LIVE DEALER EXPERIENCE ONLINE!"
                listItemLabels={listItemLabels}
            />
            <section className="padded">
                <div className="inner-box">
                    <div className="row row-1 flex flex-jc-b flex-col-expand g-col-16 m-b-48 mq-1023-g-col-8 mq-767-unflex">
                        <div className="col col-1 mq-767-m-b-16"><LiveCasinoCard type="livecasino" provider="laliga-room" /></div>
                        <div className="col col-2"><LiveCasinoCard type="livecasino" provider="club88-europe" /></div>
                    </div>
                    <div className="row row-2 ">
                        <PromoBanner template="b" provider="m-goal" tagline="100% WELCOME BONUS UP TO 0.8% DAILY REBATES" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Livecasino