import React, { Component } from "react";
import UploadPage from "../components/UploadPage/UploadPage";
import data from "../data/video-details.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Video = (props) => {
	console.log(props);
	const videoId = props.match.params.id;

	const video = props.videos.find((video) => {
		return video.id === Number(videoId);
	});
};
export default class VideoUpload extends Component {
	state = {
		videos: data,
	};
	render() {
		// console.log(this.state);
		return (
			<>
				<UploadPage />
			</>
		);
	}
}
