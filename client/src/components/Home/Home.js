import React, { Component } from "react";
import VideosList from "../VideosList/VideosList";
import Main from "../Main/Main";
import Comments from "../Comments/Comments";
import axios from "axios";

const apiURL = `https://project-2-api.herokuapp.com`;
const apiKey = "19101c60-2242-4bdf-aece-78dde14fbe01";

class Home extends Component {
	state = {
		mainHeroVideo: null,
		videoList: [],
		isLoading: true,
	};
	//create component in the virtual DOM
	componentDidMount() {
		axios
			//call axios
			.get(`${apiURL}/videos?api_key=${apiKey}`)
			//retrieve axios response
			.then((response) => {
				//set state for the class Home
				const apiData = response.data;
				this.setState({ videoList: apiData });
				//taking first object to default to first video, setting as default on the landing page
				return axios
					.get(`${apiURL}/videos/${apiData[0].id}?api_key=${apiKey}`)
					.then((response) => {
						this.setState({ mainHeroVideo: response.data }, () => {
							this.setState({ isLoading: false });
						});
					})
					.catch((err) => console.log(err));
			})
			.catch((error) => {});
	}
	componentDidUpdate(prevProps) {
		//comparing id values from props previous and once other video is selected
		if (prevProps.match.params.id !== this.props.match.params.id) {
			axios
				.get(`${apiURL}/videos/${this.props.match.params.id}?api_key=${apiKey}`)
				.then((newVideo) => {
					//filter out video
					const selectedVideo = this.state.videoList.filter((video) => {
						//apply condition to determine matching id
						return video.id !== this.props.match.params.id;
					});
					console.log(selectedVideo);
					//set state
					this.setState({
						mainHeroVideo: newVideo.data,
						videosList: selectedVideo,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

	render() {
		//safety net, if call is taking a while, until its no longer true, then will render data on second return
		if (!this.state.mainHeroVideo) {
			return <div className="loading">Loading...</div>;
		}
		return (
			<div>
				<Main mainHeroVideo={this.state.mainHeroVideo} />
				<Comments comments={this.state.mainHeroVideo} />
				<VideosList
					videoList={this.state.videoList}
					mainHeroVideo={this.state.mainHeroVideo}
				/>
			</div>
		);
	}
}
export default Home;
