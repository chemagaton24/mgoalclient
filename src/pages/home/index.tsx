import MatchSchedSectionModule from "../../components/match-schedules/section-module"
import LiveStreamSectionModule from "../../components/live-stream/section-module"
import NewsSectionModule from "../../components/news/section-module"
import PromoBanner from "../../components/promo-banners"

const Index = () => {
	return (
		<>
			<section className="white-theme">
				<div className="inner-box">
					<MatchSchedSectionModule headingText="Match Schedules" />
				</div>
			</section>
			<section className="gray-theme padded">
				<div className="inner-box">
					<LiveStreamSectionModule headingText="Live Stream" />
				</div>
			</section>
			<section className="white-theme padded">
				<div className="inner-box">
					<div className="row row-1 m-b-48">
						<NewsSectionModule headingText="Top News" />
					</div>
					<div className="row row-2">
						<PromoBanner template="b" provider="m-goal" tagline="100% WELCOME BONUS UP TO 0.8% DAILY REBATES" />
					</div>
				</div>
			</section>
		</>
	)
}

export default Index