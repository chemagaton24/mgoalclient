import { useContext } from "react"
import { StreamCtx } from "../section-module"
import Button from "../../common/button"
import useMediaQuery from "../../library/useMediaQuery"
import "./index.css"

interface LoadingProps {
	loading: true
}

interface CardProps {
	loading?: never
	teamA: string
	teamB: string
	competition: string
	cover: string
	videoURL: string
	status: string
}

const Index = (props: LoadingProps | CardProps) => {
	const StreamCtxVal = useContext(StreamCtx)
	const { handleClick } = StreamCtxVal

	const playStream = () => {
		if (!props.loading) {
			handleClick(props.competition, props.teamA, props.teamB, props.videoURL, props.status )
		}
	}

	return (
		<div className="card card-live-stream" onClick={playStream}>
			<div className="inner flex flex-jc-b g-col-16 h-100">
				<div className="col col-1 h-100 flex-grow">
					<div className="flex flex-jc-s g-col-24 mq-1400-g-col-16 h-100">
						<div className="col col-1 h-100 flex-mw-unset">
							<div className={`thumbnail h-100 ${props.loading ? 'box-loading ' : ''}`}>
								{!props.loading && <div className="inner" style={{ backgroundImage: `url(${props.cover})` }}></div>}
							</div>
						</div>
						<div className="col col-2 flex-grow">
							<div className={`row row-1 m-b-4 competition ${props.loading ? 'box-loading ' : ''}`}>{!props.loading && props.competition}</div>
							<div className={`row row-2 versus ${props.loading ? 'box-loading ' : ''}`}>{!props.loading && <>{props.teamA} vs {props.teamB}</>}</div>
						</div>
					</div>
				</div>
				{useMediaQuery('(min-width: 1024px)') &&
					<div className="col col-2 flex-mw-unset">
						{!props.loading &&
							<Button buttonStyle="dark" icon="play-yellow" height={32}>PLAY STREAM</Button>
						}
					</div>
				}
			</div>
		</div>
	)
}

export default Index