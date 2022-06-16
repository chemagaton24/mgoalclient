import "./index.css"
import TemplateA from "./TemplateA"
import TemplateB from "./TemplateB"
import TemplateC from "./TemplateC"

interface AllProps {
    loading?: never
    title: string
    category: string
    categorySlug: string
    datePublished: string
    cover: string
}

interface CardABProps extends AllProps {
    template: 'a' | 'b'
    content: string
}

interface CardCProps extends AllProps {
    template: 'c'
    size: 'small' | 'large'
}

interface LoadingProps {
    loading: true
    template: 'a' | 'b' | 'c'
}

const formatDate = (date: string) => {
    const dateStamp = new Date(date).getTime();
    const res = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(dateStamp);
    return res;
}

const index = (props: LoadingProps | (CardABProps | CardCProps)) => {
    if (!props.loading) {
        var datePublished = formatDate(props.datePublished)
    }

    const classList = [
        'card card-news',
        `card-type-${props.template}`,
        (!props.loading && props.template === 'c') ? `size-${props.size}` : ''
    ]
    return (
        <div className={classList.join(" ")}>
            {(props.loading && props.template === 'a') &&
                <TemplateA loading={true} />
            }
            {(!props.loading && props.template === 'a') &&
                <TemplateA
                    title={props.title}
                    content={props.content}
                    category={props.category}
                    categorySlug={props.categorySlug}
                    datePublished={datePublished!}
                    cover={props.cover}
                />
            }
            {(props.loading && props.template === 'b') &&
                <TemplateB loading={true} />
            }
            {(!props.loading && props.template === 'b') &&
                <TemplateB
                    title={props.title}
                    content={props.content}
                    category={props.category}
                    categorySlug={props.categorySlug}
                    datePublished={datePublished!}
                    cover={props.cover}
                />
            }
            {(props.loading && props.template === 'c') &&
                <TemplateC loading={true} />
            }
            {(!props.loading && props.template === 'c') &&
                <TemplateC
                    title={props.title}
                    category={props.category}
                    categorySlug={props.categorySlug}
                    datePublished={datePublished!}
                    cover={props.cover}
                />
            }
        </div>
    )
}

export default index