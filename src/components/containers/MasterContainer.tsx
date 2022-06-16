import Header from "../header"
import Footer from "../footer"

interface MasterContainerProps {
    children: React.ReactNode
}

const MasterContainer = (props: MasterContainerProps) => {
    const { children } = props

    return (
        <>
            <Header />
            <div className="main">{children}</div>
            <Footer />
        </>
    )
}

export default MasterContainer