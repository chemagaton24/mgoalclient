import { NavLink } from "react-router-dom"
import { CONSTANTS } from "./constants"
import SwipeScroller from "../library/swipe-scroller"

const MainMenu = () => {
    return (
        <nav className="main-menu">
            <SwipeScroller direction="x" scrollBarVisible="hide">
                <ul className="flex flex-jc-s g-16">
                    {CONSTANTS.mainMenuItems.map((item, key) => {
                        const { name, linkTo } = item

                        return (<li key={key}><NavLink to={linkTo}><span className="text">{name}</span></NavLink></li>)
                    })}
                </ul>
            </SwipeScroller>
        </nav>
    )
}

export default MainMenu