import "./index.css"

type CardProps = {
    leagueName: string;
    time: string,
    nameTeamA: string,
    iconTeamA: string,
    nameTeamB: string,
    iconTeamB: string,
    score1: string,
    score2: string,
    score3: string,
    status: string
}
const Index = (props: CardProps) => {
    const { leagueName, time, nameTeamA, iconTeamA, nameTeamB, iconTeamB, score1, score2, score3, status } = props
    return (
        <div className="card card-match-schedule">
            <div className="inner grid">
                <div className="row row-1 flex flex-jc-b">
                    <div className="col col-1 league-name"><strong>{leagueName}</strong></div>
                    <div className="col col-2 time flex flex-s g-4">
                        <strong>{time}</strong>
                        <div className="tag tag-type-a free">{status}</div>
                    </div>
                </div>
                <div className="row row-2 flex flex-jc-s flex-h-100p flex-col-expand">
                    <div>
                        <div className="row row-1 flex flex-jc-s g-8 m-b-8">
                            <div className="col col-1"><img src={iconTeamA} alt={nameTeamA} className="team-icon" /></div>
                            <div className="col col-2"><strong className="team">{nameTeamA}</strong></div>
                        </div>
                        <div className="row row-2 flex flex-jc-s g-8">
                            <div className="col col-1"><img src={iconTeamB} alt={nameTeamB} className="team-icon" /></div>
                            <div className="col col-2"><strong className="team">{nameTeamB}</strong></div>
                        </div>
                    </div>
                </div>
                <div className="row row-3 flex flex-jc-b flex-col-expand g-4">
                    <div className="col col-1 odds-box flex flex-jc-b"><span>1</span><strong>{score1}</strong></div>
                    <div className="col col-2 odds-box flex flex-jc-b"><span>X</span><strong>{score2}</strong></div>
                    <div className="col col-3 odds-box flex flex-jc-b"><span>2</span><strong>{score3}</strong></div>
                </div>
            </div>
        </div>
    )
}

export default Index