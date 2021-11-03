import { Link } from "react-router-dom";

export default function UploadPage() {
	return (
		<div className="upload__container">
			<div>
				<h1 className="upload__heading">Upload Video</h1>
			</div>
			<div className="upload__wrapper">
				<p className="upload__subheading">Video Thumbnail</p>
				<img src="/" />
			</div>
			<div className="upload__container--input">
				<p className="upload__subheading">Title your video</p>
				<input
					type="text"
					className="input"
					placeholder="Add a title to your video"
				/>
				<p className="upload__subheading">Add a video description</p>
				<input
					type="textarea"
					className="input"
					placeholder="Add a description to your video"
				/>
			</div>
			<button className="button">Publish</button>
			<Link to="/">
				<p>Cancel</p>
			</Link>
		</div>
	);
}
