import { Component } from "react";
import mockApi from "../../data/video-details.json";

class VideoDetails extends Component {
	state = { video: null };
	componentDidMount() {
		const videoId = this.props.match.params.videoId;
		console.log(videoId);

		// mockApi.get
	}
}
