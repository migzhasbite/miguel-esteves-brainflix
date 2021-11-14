import React, { Component } from "react";
import VideosList from "../components/VideosList/VideosList";
import Main from "../components/Main/Main";
import Comments from "../components/Comments/Comments";
import Hero from "../components/Hero/Hero";
import "./Home.scss";
import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

class Home extends Component {
	state = {
		mainHeroVideo: null,
		videoList: [],
		isLoading: true,
	};
	componentDidMount() {
		const id = this.props.match.params.id;
		axios
			.get(`${apiURL}/videos`)
			.then(({ data }) => {
				const apiData = data;
				this.setState({ videoList: apiData });
				return apiData[0].id;
			})
			.then((res) => {
				const videoId = id ? id : res;
				axios
					.get(`${apiURL}/videos/${videoId}`)
					.then((response) => {
						this.setState({ mainHeroVideo: response.data }, () => {
							this.setState({ isLoading: false });
						});
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	}
	componentDidUpdate(prevProps) {
		const id = this.props.match.params.id;
		if (prevProps.match.params.id !== id) {
			axios
				.get(`${apiURL}/videos/${id}`)
				.then((newVideo) => {
					this.setState({
						mainHeroVideo: newVideo.data,
					});
				})
				.catch((err) => {
					console.log("Check the componentDidUpdate", err);
				});
		}
	}

	render() {
		if (!this.state.mainHeroVideo) {
			return <div className="loading">Loading...</div>;
		}
		return (
			<div>
				<Hero mainHeroVideo={this.state.mainHeroVideo} />
				<div className="container__flex--row">
					<div className="container__flex--column">
						<Main mainHeroVideo={this.state.mainHeroVideo} />
						<Comments comments={this.state.mainHeroVideo} />
					</div>
					<VideosList
						videoList={this.state.videoList}
						mainHeroVideo={this.state.mainHeroVideo}
						paramsId={this.props}
					/>
				</div>
			</div>
		);
	}
}
export default Home;
