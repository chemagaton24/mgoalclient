import Button from "../common/button"
import { BannerPromoProps } from "./Interfaces"
import { useEffect, useState } from 'react'

const TemplateA = (props: Pick<BannerPromoProps, 'provider' | 'tagline'>) => {
    const { provider, tagline } = props
    const [device, setDevice] = useState<string>()

    useEffect(() => {
        const checkWidth = () => {
            if (window.matchMedia("(min-width: 1024px)").matches) {
                setDevice('(min-width: 1024px)')
            } else if (window.matchMedia("(max-width: 1023px)").matches) {
                setDevice('(max-width: 1023px)')
            }
        }
        checkWidth()
        window.addEventListener("resize", checkWidth)
        return () => window.removeEventListener("resize", checkWidth)
    }, [])

    return (
        <>
            {device === "(min-width: 1024px)" &&
                <div className="flex flex-jc-b h-100 g-16">
                    <div className="col col-1">
                        <div className="row row-1 m-b-4 mq-1400-m-b-8">
                            <div className="logo"><img src={require(`../../assets/images/logos/${provider}-white.svg`)} alt={provider} /></div>
                        </div>
                        <div className="row row-2">
                            <div className="tagline">{tagline}</div>
                        </div>
                    </div>
                    <div className="col col-2 flex-mw-unset">
                        <Button buttonStyle="default">JOIN NOW</Button>
                    </div>
                </div>
            }
            {device === "(max-width: 1023px)" &&
                <>
                    <div className="flex flex-wrap flex-col-expand h-100 flex-ac-c">
                        <div className="row row-1 m-b-4 mq-1400-m-b-8 logo">
                            <img src={require(`../../assets/images/logos/${provider}-white.svg`)} alt={provider} />
                        </div>
                        <div className="row row-2 tagline">
                            {tagline}
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default TemplateA