import React from "react"
import Card from "../cards"
import SwipeScroller from "../../library/swipe-scroller"
import "./index.css"

interface ListCardsProps {
	height: number
	queryResult: any
}

const Index = (props: ListCardsProps) => {
	const { height, queryResult } = props
	const { loading, error, data } = queryResult

	return (
		<div className="live-stream-list-cards">
			<SwipeScroller direction="y" height={height}>
				<ul className="flex flex-wrap flex-col-expand g-row-16 mq-1023-g-row-8">
					{(loading || error) && Array(5).fill(<Card loading={true} />).map((item, key) => <li key={key}>{item}</li>)}
					{data &&
						data.livestream.map((item: typeof data, key: number) => {
							const { title, competition, thumbnail, videos } = item
							const teams = title.split(' - ')
							let videoURL = videos[0].embed.split("src='")
							videoURL = videoURL[1].split("&")
							videoURL = videoURL[0]

							return (
								<li key={key}>
									<Card
										teamA={teams[0]}
										teamB={teams[1]}
										competition={competition}
										cover={thumbnail}
										videoURL={videoURL}
										status={videos[0].title}
									/>
								</li>
							)
						})
					}
				</ul>
			</SwipeScroller>
		</div>
	)
}

export default React.memo(Index)