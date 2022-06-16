import MasterContainer from "../components/containers/MasterContainer"
import NewsCard from "../components/news/cards"
// import ComponentsShowcase from "../components/components-demo"

const Showcase = () => {
    return (
        <MasterContainer>
            <section className="padded gray-theme">
                <div className="inner-box">
                    <NewsCard
                        template="c"
                        loading={true}
                    />
                    <NewsCard
                        template="c"
                        size="small"
                        title="zxc"
                        category="Soccer"
                        categorySlug="soccer"
                        datePublished="02-02-2022"
                        cover="https://msportsid.com/public/article/cover/1655156711FVKYp2ZXEAMHpAi.jpg"
                    />
                </div>
            </section>
        </MasterContainer>
    )
}

export default Showcase