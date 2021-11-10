import { Link } from "react-router-dom";
import image from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";

export default function UploadPage() {
	return (
		<main className="upload">
			<h1 className="upload__heading">Upload Video</h1>
			<div className="upload__container">
				<div className="upload__wrapper">
					<p className="upload__subheading">Video Thumbnail</p>
					<img
						src={image}
						className="upload__image"
						alt="Upload-video-preview"
					/>
				</div>
				<div className="upload__input">
					<p className="upload__subheading">Title your video</p>
					<input
						type="text"
						className="input upload__input--title"
						placeholder="Add a title to your video"
					/>
					<p className="upload__subheading">Add a video description</p>
					<input
						type="textarea"
						className="input upload__input--description"
						placeholder="Add a description to your video"
					/>
				</div>
			</div>
			<div className="upload__button--container">
				<button className="button button--publish">Publish</button>
				<Link to="/" className="upload--cancel">
					<p className="upload--cancel--text">Cancel</p>
				</Link>
			</div>
		</main>
	);
}
