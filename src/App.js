import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Form from "./components/Form/Form";
// import VideosList from "./components/VideosList/VideosList";
import Comments from "./components/Comments/Comments";
import videos from "./data/video-details.json";
import React, { Component } from "react";

// const sortedVideos = videos.sort((a, b) => {
// 	return b.upvotes - a.upvotes;
// });
export default function App() {
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
	// render() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Main />
			{/* <VideosList /> */}
			<h2>3 comments</h2>
			<Form />
			<Comments />
		</div>
	);
	// }
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
