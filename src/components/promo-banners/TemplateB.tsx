import Button from "../common/button"
import { BannerPromoProps } from "./Interfaces"
import { ButtonProps } from "../common/button/Interfaces"
import { useEffect, useState } from 'react'

const TemplateA = (props: Pick<BannerPromoProps, 'provider' | 'tagline'>) => {
    const { provider, tagline } = props

    const [device, setDevice] = useState<string>()
    const [btnWidth, setBtnWidth] = useState<ButtonProps["width"]>()
    const [btnHeight, setBtnHeight] = useState<ButtonProps["height"]>()

    useEffect(() => {
        const checkWidth = () => {
            if (window.matchMedia("(max-width: 767px)").matches) {
                setDevice('(max-width: 767px)')
                setBtnHeight(24)
            } else if (window.matchMedia("(max-width: 1023px)").matches) {
                setDevice('(max-width: 1023px)')
            } else if (window.matchMedia("(min-width: 1024px)").matches) {
                setDevice('(min-width: 1024px)')
                setBtnWidth(200)
                setBtnHeight(32)
            } else if (window.matchMedia("(min-width: 1401px)").matches) {
                setDevice('(min-width: 1401px)')
                setBtnWidth(200)
                setBtnHeight(40)
            }
        }
        checkWidth()
        window.addEventListener("resize", checkWidth)
        return () => window.removeEventListener("resize", checkWidth)
    }, [device])

    return (
        <>
            {device !== "(max-width: 767px)" &&
                <div className="flex flex-jc-b h-100 g-40 mq-1400-g-32">
                    <div className="col col-1">
                        {(device === "(min-width: 1401px)" || device === "(min-width: 1024px)") &&
                            <div className="flex flex flex-jc-s g-32 mq-1400-g-16">
                                <div className="col col-1 flex-mw-unset">
                                    <img src={require(`../../assets/images/logos/${provider}-white.svg`)} alt={provider} className="logo" />
                                </div>
                                <div className="col col-1">
                                    <div className="tagline">{tagline}</div>
                                </div>
                            </div>
                        }
                        {device === "(max-width: 1023px)" &&
                            <>
                                <div className="row row-1 m-b-8">
                                    <img src={require(`../../assets/images/logos/${provider}-white.svg`)} alt={provider} className="logo" />
                                </div>
                                <div className="row row-2">
                                    <div className="tagline">{tagline}</div>
                                </div>
                            </>
                        }
                    </div>
                    <div className="col col-2 flex-mw-unset">
                        <Button buttonStyle="default" width={btnWidth} height={btnHeight} >JOIN NOW</Button>
                    </div>
                </div>
            }
            {device === "(max-width: 767px)" &&
                <div className="flex flex-wrap flex-col-expand flex-ac-c h-100 ta-center">
                    <div className="row row-1 m-b-4">
                        <img src={require(`../../assets/images/logos/${provider}-white.svg`)} alt={provider} className="logo" />
                    </div>
                    <div className="row row-2 m-b-8">
                        <div className="tagline">{tagline}</div>
                    </div>
                    <div className="row row-3">
                        <Button buttonStyle="default" width={btnWidth} height={btnHeight} >JOIN NOW</Button>
                    </div>
                </div>
            }
        </>
    )
}

export default TemplateA