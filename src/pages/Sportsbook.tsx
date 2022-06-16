import UpperAreaSlogan from "../components/containers/upper-area-slogan"
import SportsBookCard from "../components/cards/sportsbook-livecasino"
import PromoBanner from "../components/promo-banners"

const Sportsbook = () => {
    const listItemLabels = [
        {
            label: "Best Odds",
            icon: "odds"
        }, {
            label: "Live Events",
            icon: "live-events"
        }, {
            label: "Wide Selection",
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
                slogan="EXPERIENCE SPORTS IN A WHOLE NEW AND EXCITING WAY!"
                listItemLabels={listItemLabels}
            />
            <section className="padded">
                <div className="inner-box">
                    <div className="row row-1 flex flex-jc-b flex-col-expand g-col-16 m-b-48 mq-1023-g-col-8 mq-767-unflex">
                        <div className="col col-1 mq-767-m-b-16"><SportsBookCard type="sportsbook" provider="m-sports" /></div>
                        <div className="col col-2"><SportsBookCard type="sportsbook" provider="saba-sports" /></div>
                    </div>
                    <div className="row row-2 ">
                        <PromoBanner template="b" provider="m-goal" tagline="100% WELCOME BONUS UP TO 0.8% DAILY REBATES" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sportsbook