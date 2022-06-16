import { BannerPromoProps } from "./Interfaces"
import TemplateA from "./TemplateA"
import TemplateB from "./TemplateB"
import "./index.css"

const Index = (props: BannerPromoProps) => {
    const { provider, tagline, template } = props

    const cardClassList = [
        `banner banner-promo dark-theme banner-template-${template} banner-provider-${provider}`
    ]

    return (
        <div className={cardClassList.join(" ")}
            style={{ backgroundImage: `url('${require(`../../assets/images/bg/promo-banners/sports/${provider}.jpg`)}')` }}
        >
            {template === 'a' && <TemplateA provider={provider} tagline={tagline} />}
            {template === 'b' && <TemplateB provider={provider} tagline={tagline} />}
        </div >
    )
}

export default Index