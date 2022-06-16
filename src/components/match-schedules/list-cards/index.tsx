import Card from "../cards"
import SwipeScroller from "../../library/swipe-scroller"
import { CONSTANTS } from "../constants"
import "./index.css"

const Index = () => {
    return (
        <div className="match-schedules-list-cards">
            <SwipeScroller scrollBarVisible="hover-only" direction="x">
                <ul className="ul-elem flex flex-inline flex-jc-s g-8">
                    {CONSTANTS.cardItems.map((item, key) => {
                        const { leagueName, time, teamA, teamB, score1, score2, score3, status } = item
                        return (
                            <li key={key}>
                                <Card
                                    leagueName={leagueName}
                                    time={time}
                                    nameTeamA={teamA.name}
                                    iconTeamA={teamA.icon}
                                    nameTeamB={teamB.name}
                                    iconTeamB={teamB.icon}
                                    score1={score1}
                                    score2={score2}
                                    score3={score3}
                                    status={status}
                                />
                            </li>
                        )
                    })}
                </ul>
            </SwipeScroller>
        </div>
    )
}

export default Index