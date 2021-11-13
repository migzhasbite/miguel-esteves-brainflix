import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/UploadPage/UploadPage.scss";

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
		if (!title && !description && !image) {
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
					console.log("Check handle submit function.", err);
				});
		}
	};
	render() {
		return (
			<main className="upload">
				<h1 className="upload__heading">Upload Video</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="upload__container">
						<div className="upload__wrapper">
							<label className="upload__subheading">Video Thumbnail</label>
							<img
								src={this.state.image}
								className="upload__image"
								alt="Upload-video-preview"
							/>
							<input
								// required
								className="upload__file"
								type="file"
								name="image"
								method="POST"
								placeholder={this.state.image}
								onChange={this.handleChange}
							/>
						</div>
						<div className="upload__input">
							<label className="upload__subheading">Title your video</label>
							<input
								// required
								className="input upload__input--title"
								type="text"
								name="title"
								placeholder="Add a title to your video"
								onChange={this.handleChange}
							/>
							<p className="upload__subheading">Add a video description</p>
							<input
								// required
								className="input upload__input--description"
								type="textarea"
								name="description"
								placeholder="Add a description to your video"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="upload__button--container">
						<button className="button button--publish" type="submit">
							Publish
						</button>
						<Link to="/" className="upload--cancel">
							<p className="upload--cancel--text">Cancel</p>
						</Link>
					</div>
				</form>
			</main>
		);
	}
}
