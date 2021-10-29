import React, { Component } from "react";
import videos from "../../data/video-details.json";
import Video from "../Video/Video";

export default class VideosList extends Component {
	render() {
		return (
			<div className="container">
				{this.props.videos.map((video) => {
					return <Video key={video.title} video={video} />;
				})}
			</div>
		);
	}
}

// class VideosList extends Component {
// 	// state= {
// 	//     commentsChanged: 0,
// 	//enter more video data
// 	// };
// 	handleClick = () => {
// 		console.log("this button was clicked");
// 		this.setState({ commentsChanged: this.state.commentsChanged + 1 }, () => {
// 			console.log(this.state.commentsChanged);
// 		});
// 	};
// 	render() {
// 		return;

// 		<Videos key={videos.title} />;
// 	}
// }
// export default VideosList;
