import "./index.css"
import MainLogo from "../../assets/images/logos/m-goal-white.svg"
import MainMenu from "./MainMenu"

const Index = () => {
    return (
        <header className="header dark-theme">
            <div className="row row-1">
                <div className="inner-box">
                    <div className="flex flex-jc-b">
                        <div className="col col-1">
                            <img src={MainLogo} alt="mgoal" className="logo" />
                        </div>
                        <div className="col col-2">

                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-2">
                <div className="inner-box">
                    <div className="flex flex-jc-b">
                        <div className="col col-1"><MainMenu /></div>
                        <div className="col col-2"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Index