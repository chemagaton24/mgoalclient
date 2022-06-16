import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./assets/css/default.css"
import GraphQLProvider from "./graphql"
import MasterContainer from "./components/containers/MasterContainer"
import Home from "./pages/home"
import News from "./pages/News"
import Sportsbook from "./pages/Sportsbook"
import Livecasino from "./pages/Livecasino"
import Demo from "./pages/Demo"

const App = () => {
	return (
		<GraphQLProvider>
			<Router basename="/mgoalclient">
				<MasterContainer>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/news" element={<News />} />
						<Route path="/sportsbook" element={<Sportsbook />} />
						<Route path="/livecasino" element={<Livecasino />} />
						<Route path="/Demo" element={<Demo />} />
					</Routes>
				</MasterContainer>
			</Router>
		</GraphQLProvider>
	)
}

export default React.memo(App)