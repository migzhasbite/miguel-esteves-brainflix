import React, { Component } from "react";
import Header from "../Header/Header";
import VideosList from "../VideosList/VideosList";
import Main from "../Main/Main";
import Comments from "../Comments/Comments";
import data from "../../data/video-details.json";
import {
	BrowserRouter,
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";

export default class Home extends Component {
	state = {
		mainHeroVideo: data[0],
		videoList: data,
		likes: data[0],
	};

	handleVideoClick = (event, id) => {
		// console.log(event, id);
		const currentVid = this.state.videoList.find((video) => video.id === id);
		console.log(currentVid);

		this.setState({
			mainHeroVideo: currentVid,
			videoList: data.filter((video) => currentVid.id !== video.id),
		});
	};

	handleLikes = () => {
		const likesQty = Number(this.state.likes);
		this.setState({
			likes: likesQty + 1,
		});
		console.log("this button was clicked");
	};
	render() {
		// console.log(this.state);
		return (
			<div>
				<Main
					mainHeroVideo={this.state.mainHeroVideo}
					handleLikes={this.handleLikes}
				/>
				<Comments comments={this.state.mainHeroVideo} />
				<VideosList
					videoList={this.state.videoList}
					handleVideoClick={this.handleVideoClick}
				/>
			</div>
		);
	}
}
