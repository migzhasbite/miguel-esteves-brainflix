import React from "react";
import "./VideosList.scss";
import { Link } from "react-router-dom";

export default function VideosList({ paramsId, videoList }) {
	if (paramsId.match.params.id === undefined) {
		paramsId.match.params.id = videoList[0].id;
	}
	return (
		<div className="video-list__container">
			<h2 className="video-list__heading">NEXT VIDEOS</h2>
			{videoList
				.filter(
					(filteredVideo) => filteredVideo.id !== paramsId.match.params.id
				)
				.map(({ id, image, title, channel }) => (
					<div key={id} className="video-list">
						<Link to={`/videos/${id}`}>
							<img className="video-list__image" src={image} alt={title} />
						</Link>
						<div className="video-list--info">
							<p className="video-list--title">{title}</p>
							<p className="video-list--channel">{channel}</p>
						</div>
					</div>
				))}
		</div>
	);
}
