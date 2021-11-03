import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import VideoUpload from "./pages/VideoUpload";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import videoDetails from "./data/video-details.json";

export default class App extends Component {
	state = { video: null };

	//const apiURL = 'https://project-2-api.herokuapp.com'
	//const apiKey = '19101c60-2242-4bdf-aece-78dde14fbe01'

	render() {
		return (
			<div className="App">
				<Router>
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/upload" component={VideoUpload} />
					</Switch>
				</Router>
			</div>
		);
	}
}
