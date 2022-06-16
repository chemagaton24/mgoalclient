import { useQuery, gql } from "@apollo/client"
import NewsCard from "../cards"
import PromoBanner from "../../promo-banners"
import "./index.css"
const QUERY = gql`
{
    articles(take: 12) {
        title
        published_at
        cover
        body
        domain
        category {
            name
            slug
        }
    }
}
`

const NewsList = () => {
    const { loading, error, data } = useQuery(QUERY)

    return (
        <ul className="article-list grid grid-temp-col-a-a mq-767-grid-temp-col-a g-col-16 g-row-32 mq-1023-g-row-16">
            {(loading || error || !data) &&
                Array(4).fill(
                    <NewsCard template="b" loading={true} />
                ).map((item, key) => {
                    return (
                        <li key={key}>{item}</li>
                    )
                })
            }
            {(!loading && !error && data) &&
                data.articles.map((item: typeof data, key: number) => {
                    const { title, published_at, cover, body, domain, category } = item
                    return (
                        <>
                            {(key === data.articles.length / 2) &&
                                <li key={key+'-banner'} className="banner"><PromoBanner template="b" provider="m-goal" tagline="100% WELCOME BONUS UP TO 0.8% DAILY REBATES" /></li>
                            }
                            <li key={key}>
                                <NewsCard
                                    template="b"
                                    title={title}
                                    category={category.name}
                                    categorySlug={category.slug}
                                    content={body}
                                    cover={`${domain}/${cover}`}
                                    datePublished={published_at}
                                />
                            </li>
                        </>
                    )
                })
            }
        </ul>
    )
}

export default NewsList