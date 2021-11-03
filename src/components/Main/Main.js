import React from "react";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";
import "./Main.scss";

export default function Main(props) {
	console.log(props);
	return (
		<main className="main">
			<div className="main__hero-video">
				<video
					src={props.mainHeroVideo.video}
					type="video/mp4"
					className="main__hero-video--image"
					controls
					poster={props.mainHeroVideo.image}
				></video>
			</div>
			<div className="main__container">
				<h1 className="main__heading">{props.mainHeroVideo.title}</h1>
				<div className="main__container--info">
					<div className="main__container--info--left">
						<div className="main__container--info--column">
							<p className="main--channel">{`By ${props.mainHeroVideo.channel}`}</p>
							<p className="main--date">
								{new Date(props.mainHeroVideo.timestamp).toLocaleDateString(
									"en-US"
								)}
							</p>
						</div>
						<div className="main__container--info--right">
							<div className="main__container--info--column">
								<img
									className="main__container--icons"
									src={views}
									alt="views icon"
								/>
								<p className="main--views">{props.mainHeroVideo.views}</p>
							</div>
							<div className="main__container--info--column">
								<img
									className="main__container--icons"
									src={likes}
									alt="likes icon"
									onClick={() => {
										props.handleLikes(Number(likes));
									}}
								/>
								<p className="main--likes">{props.mainHeroVideo.likes}</p>
							</div>
						</div>
					</div>
				</div>
				<p className="main--paragraph">{props.mainHeroVideo.description}</p>
			</div>
		</main>
	);
}
