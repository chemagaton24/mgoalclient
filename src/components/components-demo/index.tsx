import MatchSchedSectionModule from "../match-schedules/section-module"
import MatchSchedListCards from "../match-schedules/list-cards"
import PromoBanner from "../promo-banners"
import NewsCard from "../news/cards"
import AccorDrop, { ADParent, ADContainer, ADChild } from "../library/accordrop"

const Index = () => {
    return (
        <>
            <section>
                <MatchSchedSectionModule headingText="Match Schedules" />
            </section>
            <div className="inner-box">
                <section className="padded">
                    <h3 className="section-title m-b-40">Match Schedules</h3>
                    <MatchSchedListCards />
                </section>

                <section className="padded">
                    <h3 className="section-title m-b-40">Banners</h3>
                    <div className="row row-1 m-b-16">
                        <PromoBanner
                            provider="m-goal"
                            tagline="100% WELCOME BONUS UP TO 0.8% DAILY REBATES"
                            template="b"
                        />
                    </div>
                    <div className="row row-2 flex flex-b flex-col-expand g-16">
                        <div className="col col-1">
                            <PromoBanner
                                provider="m-sports"
                                tagline="MAKE SPORTS MORE EXCITING"
                                template="a"
                            />
                        </div>
                        <div className="col col-2">
                            <PromoBanner
                                provider="saba-sports"
                                tagline="EXPERIENCE SPORTS IN A NEW WAY"
                                template="a"
                            />
                        </div>
                    </div>
                </section>

                <section className="padded">
                    <h3 className="section-title m-b-40">Accordion Dropdown</h3>
                    <AccorDrop>
                        <ADContainer>
                            <ADParent><span>adparent2</span></ADParent>
                            <ADChild><span>adchild2<br />adchild2<br />adchild2<br />adchild2</span>
                                <ADContainer>
                                    <ADParent><span>adparent4</span></ADParent>
                                    <ADChild><span>adchild2<br />adchild2 adchild2<br />adchild2 adchild2<br />adchild2 adchild2<br />adchild2</span>
                                        <ADContainer>
                                            <ADParent><span>adparent4</span></ADParent>
                                            <ADChild><span>adchild2<br />adchild2</span></ADChild>
                                        </ADContainer>
                                        asdasdasdasd
                                    </ADChild>
                                </ADContainer>
                            </ADChild>
                        </ADContainer>
                        <ADContainer>
                            <ADParent><span>adparent3</span></ADParent>
                            <ADChild><span>adchild3</span></ADChild>
                        </ADContainer>
                    </AccorDrop>
                </section>

                {/* <section className="padded">
                <h3 className="section-title">News Cards</h3>
                <div className="flex flex-s g-16 m-b-32">
                    <div className="col col-1">
                        <NewsCard
                            template="a"
                            title="News headline better in lowercase and longer"
                            content="I have a hard stop in an hour and half.
                            Run it up the flagpole, ping the boss and circle back deploy
                            to production per my the boss and circle back deploy to proasda sdasdasda sdasd asxczxcxz"
                            category="Basketball"
                            datePublished="June 19, 2021"
                            imgSrc="https://phantom-marca.unidadeditorial.es/ea35368042436478251d4baeb253e6fc/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/30/16303038381974.jpg"
                        />
                    </div>
                    <div className="col col-2">
                        <NewsCard
                            template="a"
                            title="News headline better in lowercase and longer"
                            content="I have a hard stop in an hour and half.
                            Run it up the flagpole, ping the boss and circle back deploy
                            to production per my the boss and circle back deploy to proasdas dasdasda sdasda sxczxcxz"
                            category="Basketball"
                            datePublished="June 19, 2021"
                            imgSrc="https://phantom-marca.unidadeditorial.es/ea35368042436478251d4baeb253e6fc/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/30/16303038381974.jpg"
                        />
                    </div>
                    <div className="col col-2">
                        <NewsCard
                            template="a"
                            title="News headline better in lowercase and longer"
                            content="I have a hard stop in an hour and half.
                            Run it up the flagpole, ping the boss and circle back deploy
                            to production per my the boss and circle back deploy to proasdas dasdasda sdasda sxczxcxz"
                            category="Basketball"
                            datePublished="June 19, 2021"
                            imgSrc="https://phantom-marca.unidadeditorial.es/ea35368042436478251d4baeb253e6fc/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/30/16303038381974.jpg"
                        />
                    </div>
                    <div className="col col-2">
                        <NewsCard
                            template="a"
                            title="News headline better in lowercase and longer"
                            content="I have a hard stop in an hour and half.
                            Run it up the flagpole, ping the boss and circle back deploy
                            to production per my the boss and circle back deploy to proasdas dasdasda sdasda sxczxcxz"
                            category="Basketball"
                            datePublished="June 19, 2021"
                            imgSrc="https://phantom-marca.unidadeditorial.es/ea35368042436478251d4baeb253e6fc/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/30/16303038381974.jpg"
                        />
                    </div>
                </div>
                <div className="flex flex-b flex-col-expand g-16">
                    <div className="col col-1">
                        <NewsCard
                            template="b"
                            title="News headline better in lowercase and longer"
                            content="I have a hard stop in an hour and half.
                            Run it up the flagpole, ping the boss and circle back deploy
                            to production per my the boss and circle back deploy to proasda sdasdasda sdasd asxczxcxz"
                            category="Basketball"
                            datePublished="June 19, 2021"
                            imgSrc="https://phantom-marca.unidadeditorial.es/ea35368042436478251d4baeb253e6fc/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/30/16303038381974.jpg"
                        />
                    </div>
                    <div className="col col-2">
                        <NewsCard
                            template="b"
                            title="News headline better in lowercase and longer"
                            content="I have a hard stop in an hour and half.
                            Run it up the flagpole, ping the boss and circle back deploy
                            to production per my the boss and circle back deploy to proasdas dasdasda sdasda sxczxcxz"
                            category="Basketball"
                            datePublished="June 19, 2021"
                            imgSrc="https://phantom-marca.unidadeditorial.es/ea35368042436478251d4baeb253e6fc/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/30/16303038381974.jpg"
                        />
                    </div>
                </div>
            </section> */}
            </div>
        </>
    )
}

export default Index