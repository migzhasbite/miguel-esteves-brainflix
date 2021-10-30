import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Comments from "./components/Comments/Comments";
import VideosList from "./components/VideosList/VideosList";
import data from "./data/video-details.json";
import React, { Component } from "react";

export default class App extends Component {
	state = {
		heroVideo: data[0],
		videoList: data,
		handleLikes: data,
		userComments: data,
	};
	//event handler function
	handleVideoClick = (event, id) => {
		console.log(event, id);
		// event.preventDefault();
		//find all videos from the array to compare videos
		const selectVideo = this.state.videoList.find((video) => id === video.id);
		this.setState({
			heroVideo: selectVideo,
			videoList: data.filter((video) => selectVideo.id !== video.id),
		});
		console.log(selectVideo);
	};
	handleLikes = () => {
		console.log("This button was clicked");
		this.setState({ handleLikes: this.state.handleLikes + 1 }, () => {
			console.log(this.state.handleLikes);
		});
	};
	render() {
		return (
			<div className="App">
				<Header />
				<Hero heroVideo={this.state.heroVideo} />
				<Main handleLikes={this.state.handleLikes} />
				<Comments userComments={this.state.userComments} />
				<VideosList
					videoList={this.state.videoList}
					handleClick={this.handleVideoClick}
				/>
			</div>
		);
	}
}

// //boiler plate
// // class based component for state based components boiler plate
// // anything that needs to be modified or dynamic, requires class based components
// export default App;

// export default class App extends Component {
// // set state before render
// state = {

// //key value pairs of object 'state'
// commentsChanged: 0,
// };
// //retrieve data from API
// };
//	//declare function
// handleClick = ()=> {
//	//clg('this was clicked');
// //method setState
//this.setState({commentsChanged: this.state.commentsChanged + 1}),
// console.log(this.state.commentsChanged) //comment later
// //second arg to set state
//() => {
// console.log(this.state.commentsChanged);
// }

// }

// //render onto screen
// 	render() {
// 		return (
// //Apply JSX
// <button onClick={this.handleClick}>Comment</button>
// // <p>Comments: {this.state.commentsChanged}
// <Counter
// 		);
// 	}
// }
// const sortedVideos = videos.sort((a, b) => {
// 	return b.upvotes - a.upvotes;

// });

//add push.state logic
// state = {
// 	livesChanged: 0,
// 	books: sortedVideos,
//   };
//   handleButtonClick = () => {
// 	console.log("This button was clicked");
// 	this.setState({ livesChanged: this.state.livesChanged + 1 }, () => {
// 	  console.log(this.state.livesChanged);
// 	});
//   };
