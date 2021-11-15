import React, { Component } from "react";
import axios from "axios";
import Upload from "../components/Upload/Upload";

const apiURL = process.env.REACT_APP_API_URL;

export default class VideoUpload extends Component {
	state = {
		title: "",
		description: "",
		image: `${apiURL}/images/Upload-video-preview.jpg`,
	};
	handleChange = ({ target }) => {
		this.setState({ [target.name]: target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const { title, description, image } = this.state;
		if (!title || !description || !image) {
			alert("All fields required. Please try again.");
		} else {
			axios
				.post(`${apiURL}/videos`, {
					title,
					description,
					image,
				})
				.then(() => {
					this.props.history.push("/");
					alert("Thanks for your submission!");
				})
				.catch((err) => {
					console.log("Check handleSubmit. ", err);
				});
		}
	};
	render() {
		return (
			<div>
				<Upload
					state={this.state}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}
