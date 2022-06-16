import { useRef, useState, useEffect, createContext } from "react"
import { useQuery, gql } from "@apollo/client"
import ListCards from "../list-cards"
import StreamPlayer from "../live-stream-player"
import useMediaQuery from "../../library/useMediaQuery"
import "./index.css"

interface LiveStreamSecModProps {
    headingText: string
}

interface StreamPlayerProps {
    competition: string
    teamA: string
    teamB: string
    vidSrc: string
    status: string
}

export const StreamCtx = createContext<{ handleClick: (competition: string, teamA: string, teamB: string, status: string, vidSrc: string) => void }>({
    handleClick: () => { }
})

const QUERY = gql`
{
    livestream {
        title
        date
        thumbnail
        competition
        videos {
            title
            embed
        }
    }
}
`

const Index = (props: LiveStreamSecModProps) => {
    const { headingText } = props
    const streamPlayerContRef = useRef<HTMLDivElement>(null)
    const [listCardsHeight, setListCardsHeight] = useState<number>(0)
    const [streamPlayer, setStreamPlayer] = useState<StreamPlayerProps | null>(null)
    
    const queryResult = useQuery(QUERY)
    const { loading, error, data } = queryResult

    const handleClick = (competition: string, teamA: string, teamB: string, vidSrc: string, status: string) => {
        setStreamPlayer({ competition, teamA, teamB, vidSrc, status })
    }

    useEffect(() => {
        if (!loading && !error && data) {
            const { title, competition, videos } = data.livestream[0]
            const teams = title.split(' - ')
            let videoURL = videos[0].embed.split("src='")
            videoURL = videoURL[1].split("&")
            videoURL = videoURL[0]
            setStreamPlayer({ competition, teamA: teams[0], teamB: teams[1], vidSrc: videoURL, status: videos[0].title })
        }
    }, [data])

    const matches = useMediaQuery('(min-width: 768px)')
    useEffect(() => {
        if (matches) {
            const resizeObserver = new ResizeObserver(entries => {
                setListCardsHeight(entries[0].contentRect.height)
            })

            resizeObserver.observe(streamPlayerContRef.current as Element)
        } else {
            setListCardsHeight(300)
        }
    }, [matches])

    return (
        <StreamCtx.Provider value={{ handleClick }}>
            <div className="live-stream-sec-mod">
                <h3 className="section-title m-b-40">{headingText}</h3>
                <div className="flex flex-jc-b flex-col-expand g-col-16 mq-767-unflex">
                    <div className="col col-1 mq-767-m-b-16" ref={streamPlayerContRef}>
                        {(loading || error || !streamPlayer) && <StreamPlayer loading={true} />}
                        {(!loading && !error && streamPlayer) &&
                            <StreamPlayer
                                competition={streamPlayer.competition}
                                teamA={streamPlayer.teamA}
                                teamB={streamPlayer.teamB}
                                status={streamPlayer.status}
                                vidSrc={streamPlayer.vidSrc}
                            />
                        }
                    </div>
                    <div className="col col-2">
                        <ListCards height={listCardsHeight} queryResult={queryResult} />
                    </div>
                </div>
            </div>
        </StreamCtx.Provider>
    )
}

export default Index