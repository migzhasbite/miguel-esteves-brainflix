import { Link } from "react-router-dom";
import "./Upload.scss";

export default function Upload({ state, handleChange, handleSubmit }) {
	const { image } = state;

	return (
		<main className="upload">
			<h1 className="upload__heading">Upload Video</h1>
			<form onSubmit={handleSubmit}>
				<div className="upload__container">
					<div className="upload__wrapper">
						<label className="upload__subheading">Video Thumbnail</label>
						<img
							src={image}
							className="upload__image"
							alt="Upload-video-preview"
							onChange={handleChange}
						/>
						{/* <input
							// required
							className="upload__file"
							type="file"
							name="image"
							method="POST"
							placeholder={image}
						/> */}
					</div>
					<div className="upload__input">
						<label className="upload__subheading">Title your video</label>
						<input
							// required
							className="input input--upload"
							type="text"
							name="title"
							placeholder="Add a title to your video"
							onChange={handleChange}
						/>
						<p className="upload__subheading">Add a video description</p>
						<input
							// required
							className="input input--description"
							type="textarea"
							name="description"
							placeholder="Add a description to your video"
							onChange={handleChange}
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
