import MatchSchedSectionModule from "../components/match-schedules/section-module"
import LiveStreamSectionModule from "../components/live-stream/section-module"
import NewsSectionModule from "../components/news/section-module"
import NewsList from "../components/news/article-list/NewsList"

const News = () => {
    return (
        <>
            <section className="gray-theme">
                <div className="inner-box">
                    <MatchSchedSectionModule headingText="Match Schedules" />
                </div>
            </section>
            <section className="white-theme padded">
                <div className="inner-box">
                    <NewsSectionModule headingText="News" />
                </div>
            </section>
            <section className="gray-theme padded">
                <div className="inner-box">
                    <LiveStreamSectionModule headingText="Live Stream" />
                </div>
            </section>
            <section className="white-theme padded">
                <div className="inner-box">
                    <NewsList />
                </div>
            </section>
        </>
    )
}

export default News