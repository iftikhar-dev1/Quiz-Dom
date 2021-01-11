import { Switch, Route } from "react-router-dom"
import React, { useState } from "react"
import firebase from "./firebase/firebase"

// Stylesheet
import "./App.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// Components
import Home from "./screens/Home"
import OneTimeDashBoard from "./screens/OneTimeDashboard"
import CreateQuiz from "./screens/CreateQuiz"
import JoinQuiz from "./screens/JoinQuiz"
import UserDashboard from "./screens/UserDashboard"
import CreatedSuccesfully from "./screens/CreatedSuccesfully"

const App = () => {
	const [User, setUser] = useState({})

	return (
		<div className="App">
			{!firebase.auth().currentUser ? (
				<Home setUser={setUser} />
			) : (
				<Switch>
					<Route exact path="/">
						<OneTimeDashBoard user={User} />
					</Route>
					<Route path="/dashboard">
						<UserDashboard user={User} />
					</Route>
					<Route path="/create-quiz">
						<CreateQuiz user={User} />
					</Route>
					<Route path="/created-succesfully">
						<CreatedSuccesfully user={User} />
					</Route>
					<Route path="/join-quiz">
						<JoinQuiz user={User} />
					</Route>
				</Switch>
			)}
		</div>
	)
}

export default App
