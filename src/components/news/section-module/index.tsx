import { useState, useEffect } from "react"
import NewsCard from "../cards"
import PromoBanner from "../../promo-banners"
import useMediaQuery from "../../library/useMediaQuery"
import { useQuery, gql } from "@apollo/client"

interface SectionModuleProps {
    headingText: string
}

interface ArticleTypes {
    title: string
    published_at: string
    category: {
        name: string
        slug: string
    }
    cover: string
    body: string
    domain: string
}

const Index = (props: SectionModuleProps) => {
    const { headingText } = props

    const [article1, setArticle1] = useState<ArticleTypes | null>(null)
    const [article2, setArticle2] = useState<ArticleTypes | null>(null)
    const [articleList, setArticleList] = useState<ArticleTypes[]>([])

    const QUERY = gql`
    {
        articles(take: 6) {
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

    const { loading, error, data } = useQuery(QUERY)

    useEffect(() => {
        if (data) {
            setArticleList([])
            data.articles.map((item: ArticleTypes, key: number) => {
                if (key === 0) {
                    setArticle1(item)
                } else if (key === 1) {
                    setArticle2(item)
                } else {
                    setArticleList(
                        prev => [...prev, item]
                    );
                }
            })
        }
    }, [data])

    return (
        <div className="live-stream-sec-mod">
            <h3 className="section-title m-b-40">{headingText}</h3>
            {useMediaQuery('(min-width: 768px)') &&
                <>
                    <div className="row row-1 flex flex-jc-b flex-col-expand g-col-16 mq-1023-g-col-8 m-b-32 mq-1023-m-b-24">
                        <div className="col col-1">
                            {!article1 &&
                                <NewsCard
                                    loading={true}
                                    template="c"
                                />
                            }
                            {article1 &&
                                <NewsCard
                                    template="c"
                                    size="large"
                                    title={article1.title}
                                    datePublished={article1.published_at}
                                    category={article1.category.name}
                                    categorySlug={article1.category.slug}
                                    cover={`${article1.domain}/${article1.cover}`}
                                />
                            }
                        </div >
                        <div className="col col-2">
                            {!article2 &&
                                <NewsCard
                                    loading={true}
                                    template="c"
                                />
                            }
                            {article2 &&
                                <NewsCard
                                    template="c"
                                    size="large"
                                    title={article2.title}
                                    datePublished={article2.published_at}
                                    category={article2.category.name}
                                    categorySlug={article2.category.slug}
                                    cover={`${article2.domain}/${article2.cover}`}
                                />
                            }
                        </div>
                    </div >
                    <div className="row row-2 flex flex-jc-b flex-col-expand g-col-16 mq-1023-g-col-8 m-b-32 mq-1023-m-b-24">
                        <div className="col col-1">
                            <PromoBanner template="a" provider="m-sports" tagline="MAKE SPORTS MORE EXCITING" />
                        </div>
                        <div className="col col-2">
                            <PromoBanner template="a" provider="saba-sports" tagline="EXPERIENCE SPORTS IN A NEW WAY" />
                        </div>
                    </div>
                    <div className="row row-3">
                        <div className="flex flex-jc-b flex-col-expand flex-ai-s g-col-16 mq-1023-g-col-8">
                            {articleList.length === 0 &&
                                Array(4).fill(
                                    <NewsCard
                                        loading={true}
                                        template="a"
                                    />
                                ).map((item, key) => <div key={key} className={`col col-${key + 1}`}>{item}</div>)
                            }
                            {articleList &&
                                articleList.map((item, key) => {
                                    return (
                                        <div key={key} className={`col col-${key + 1}`}>
                                            <NewsCard
                                                template="a"
                                                category="Soccer"
                                                categorySlug="soccer"
                                                title={item.title}
                                                datePublished={item.published_at}
                                                cover={`${item.domain}/${item.cover}`}
                                                content={item.body}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </>
            }
            {
                useMediaQuery('(max-width: 767px)') &&
                <>
                    <div className="row row-1 m-b-24">
                        {!article1 &&
                            <NewsCard
                                loading={true}
                                template="c"
                            />
                        }
                        {article1 &&
                            <NewsCard
                                template="c"
                                size="large"
                                title={article1.title}
                                datePublished={article1.published_at}
                                category={article1.category.name}
                                categorySlug={article1.category.slug}
                                cover={`${article1.domain}/${article1.cover}`}
                            />
                        }
                    </div>
                    <div className="row row-2 m-b-24">
                        <PromoBanner template="a" provider="m-sports" tagline="MAKE SPORTS MORE EXCITING" />
                    </div>
                    <div className="row row-3 m-b-24">
                        <ul className="grid g-row-16">
                            {!articleList &&
                                Array(4).fill(
                                    <NewsCard
                                        loading={true}
                                        template="a"
                                    />
                                ).map((item, key) => <li key={key}>{item}</li>)
                            }
                            {articleList &&
                                articleList.map((item, key) => {
                                    return (
                                        <li key={key}>
                                            <NewsCard
                                                template="a"
                                                category="Soccer"
                                                categorySlug="soccer"
                                                title={item.title}
                                                datePublished={item.published_at}
                                                cover={`${item.domain}/${item.cover}`}
                                                content={item.body}
                                            />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="row row-4 m-b-24">
                        <PromoBanner template="b" provider="m-goal" tagline="100% WELCOME BONUS UP TO 0.8% DAILY REBATES" />
                    </div>
                </>
            }
        </div >
    )
}

export default Index