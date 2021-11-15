import React from "react";
import "./VideosList.scss";
import { Link } from "react-router-dom";

export default function VideosList(props) {
	if (props.paramsId.match.params.id === undefined) {
		props.paramsId.match.params.id = props.videoList[0].id;
	}
	return (
		<section className="video-list">
			<h2 className="video-list__heading">NEXT VIDEOS</h2>
			<div className="video-list__container">
				{props.videoList
					.filter(
						(filteredVideo) =>
							filteredVideo.id !== props.paramsId.match.params.id
					)
					.map(({ id, image, title, channel }) => (
						<Link to={`/videos/${id}`}>
							<div key={id} className="video-list__card">
								<img className="video-list__image" src={image} alt={title} />
								<div className="video-list--info">
									<p className="video-list--title">{title}</p>
									<p className="video-list--channel">{channel}</p>
								</div>
							</div>
						</Link>
					))}
			</div>
		</section>
	);
}
