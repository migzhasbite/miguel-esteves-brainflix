import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import VideoUpload from "./pages/VideoUpload";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/upload" component={VideoUpload} />
						<Route path="/videos/:id" component={Home} />
					</Switch>
				</Router>
			</div>
		);
	}
}
