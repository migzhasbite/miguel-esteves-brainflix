import React, { Component } from "react";
import "../VideosList/VideosList.scss";

function VideosList(props) {
	// render() {
	return (
		<>
			<h1 className="video-list__heading">Next Videos</h1>
			{props.videoList.map((video) => {
				return (
					<div key={video.title} className="video-list__container">
						<img
							src={video.image}
							className="video-list__image"
							alt={video.title}
						/>
						<p
							className="video-list--info"
							onClick={props.handleVideoClick}
						></p>
						{video.title},{video.channel},
					</div>
					// 	image={video.image}
					// 	title={video.title}
					// 	channel={video.channel}
					// 	handleVideoClick={this.handleVideoClick}
				);
			})}
		</>
	);
}

export default VideosList;

// class VideosList extends Component {
// 	// state= {
// 	//     videosList: 0,
// 	//enter more video data
// 	// };
// 	handleClick = () => {
// 		console.log("this button was clicked");
// 		this.setState({ videosList: this.state.commentsChanged + 1 }, () => {
// 			console.log(this.state.commentsChanged);
// 		});
// 	};
// 	render() {
// 		return;

// 		<Videos key={videos.title} />;
// 	}
// }
// export default VideosList;

// 	key={video.title}
// 	image={video.image}
// 	title={video.title}
// 	channel={video.channel}
// 	handleVideoClick={this.handleVideoClick}
