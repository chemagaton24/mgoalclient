import QuickTransferLogo from '../../assets/images/logos/quick-transfer-blue-pale.svg'
import QuickPayLogo from '../../assets/images/logos/quick-pay-blue-pale.svg'
import P2pcnLogo from '../../assets/images/logos/p2pcn-blue-pale.svg'
import OpusGamingLogo from '../../assets/images/logos/opus-gaming-blue-pale.svg'
import SabaSportsLogo from '../../assets/images/logos/saba-sports-blue-pale.svg'
import PragmaticPlayLogo from '../../assets/images/logos/pragmatic-play-blue-pale.svg'
import HabaneroLogo from '../../assets/images/logos/habanero-blue-pale.svg'
import GALogo from '../../assets/images/logos/ga-blue-pale.svg'
import ItechLogo from '../../assets/images/logos/itech-blue-pale.svg'
import { CONSTANTS } from "./constants"
import { NavLink } from 'react-router-dom'
import "./index.css"

const Index = () => {
	return (
		<footer className="footer dark-theme mq-767-ta-center">
			<div className="row row-1">
				<div className="inner-box">
					<div className="row row-1 flex flex-wrap flex-jc-b g-8 mq-767-unflex m-b-24">
						<div className="col col-1  mq-767-m-b-16">
							<div className="available-payments flex flex-inline flex-jc-s mq-767-unflex g-8">
								<div className="ws-nowrap mq-767-m-b-8">{CONSTANTS.availablePayments.label}:</div>
								<ul className="flex flex-wrap flex-inline flex-jc-s g-8">
									{CONSTANTS.availablePayments.logoItems.map((item, key) => {
										const { file, alt } = item
										return (<li key={key}>
											<img src={file} alt={alt} />
										</li>)
									})}
								</ul>
							</div>
						</div>
						<div className="col col-2">
							<nav className="menu-footer">
								<ul className="flex flex-wrap flex-inline flex-jc-c mq-767-g-row-4">
									{CONSTANTS.footerMenuItems.map((item, key) => {
										const { name, linkTo } = item
										return (
											<li key={key}><NavLink to={linkTo}><span className="text">{name}</span></NavLink></li>
										)
									})}
								</ul>
							</nav>
						</div>
					</div>
					<div className="row row-2">
						<div className="providers">
							<ul className="flex flex-inline flex-wrap flex-jc-c g-col-24 g-row-16">
								{CONSTANTS.providers.logoItems.map((item, key) => {
									const { file, alt } = item
									return (<li key={key}>
										<img src={file} alt={alt} />
									</li>)
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="row row-2">
				<div className="inner-box h-100">
					<div className="flex flex-jc-b mq-767-unflex">
						<div className="col col-1 mq-767-m-b-8">
							<div className="other-providers">
								<ul className="flex flex-inline flex-jc-s g-16">
									{CONSTANTS.otherProviders.logoItems.map((item, key) => {
										const { file, alt } = item
										return (<li key={key}>
											<img src={file} alt={alt} />
										</li>)
									})}
								</ul>
							</div>
						</div>
						<div className="col col-2">
							<div className="copyright">{CONSTANTS.copyrightText}</div>
						</div>
					</div>
				</div>
			</div>
		</footer >
	)
}

export default Index
