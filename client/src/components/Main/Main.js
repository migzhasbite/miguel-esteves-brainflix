import React from "react";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./Main.scss";

export default function Main(props) {
	return (
		<main className="main">
			<div className="main__hero-video">
				<video
					src={props.mainHeroVideo.video}
					type="video/mp4"
					controls
					className="main__hero-video--image"
					poster={props.mainHeroVideo.image}
					alt={props.mainHeroVideo.title}
				></video>
			</div>
			<div className="main__container">
				<h1 className="main__heading">{props.mainHeroVideo.title}</h1>
				<div className="main__container--info">
					<div className="main__container--info--left">
						<p className="main--channel">{`By ${props.mainHeroVideo.channel}`}</p>
						<p className="main--date">
							{new Date(props.mainHeroVideo.timestamp).toLocaleDateString(
								"en-US"
							)}
						</p>
					</div>
					<div className="main__container--info--right">
						<div className="main__container--info--views">
							<img className="main--icons" src={viewsIcon} alt="views icon" />
							<p className="main--views">{props.mainHeroVideo.views}</p>
						</div>
						<div className="main__container--info--likes">
							<img className="main--icons" src={likesIcon} alt="likes icon" />
							<p className="main--likes">{props.mainHeroVideo.likes}</p>
						</div>
					</div>
				</div>
				<p className="main--paragraph">{props.mainHeroVideo.description}</p>
			</div>
		</main>
	);
}