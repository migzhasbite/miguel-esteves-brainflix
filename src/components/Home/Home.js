import React, { Component } from "react";
import Header from "../Header/Header";
import VideosList from "../VideosList/VideosList";
import Main from "../Main/Main";
import Comments from "../Comments/Comments";
import data from "../../data/video-details.json";

export default class Home extends Component {
	state = {
		mainHeroVideo: data[0],
		videoList: data,
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
		this.setState(
			{
				mainHeroVideo: this.state.mainHeroVideo + 1,
			},
			() => {
				console.log(this.state.mainHeroVideo);
			}
		);
		console.log("this button was clicked");
	};
	render() {
		// console.log(this.state);
		return (
			<div>
				<Header />
				<Main mainHeroVideo={this.state.mainHeroVideo} />
				<Comments comments={this.state.mainHeroVideo} />
				<VideosList
					videoList={this.state.videoList}
					handleVideoClick={this.handleVideoClick}
				/>
			</div>
		);
	}
}
