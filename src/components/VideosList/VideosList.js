import React from "react";
// import { v4 as uuidv4 } from "uuid";
import "./VideosList.scss";
import { Link } from "react-router-dom";

export default function VideosList(props) {
	return (
		<div className="video-list__container">
			<h2 className="video-list__heading">NEXT VIDEOS</h2>
			{props.videoList
				.filter((filteredVideo) => filteredVideo.id !== props.mainHeroVideo.id)
				.map((nextVideo) => (
					<div key={nextVideo.id} className="video-list">
						<Link to={`/videos/${nextVideo.id}`}>
							<img
								className="video-list__image"
								src={nextVideo.image}
								alt={nextVideo.title}
							/>
						</Link>
						<div className="video-list--info">
							<p className="video-list--title">{nextVideo.title}</p>
							<p className="video-list--channel">{nextVideo.channel}</p>
						</div>
					</div>
				))}
		</div>
	);
}
