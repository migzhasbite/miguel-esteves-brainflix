import React from "react";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";
import "../Main/Main.scss";

export default function Main(props) {
	console.log(props);
	return (
		<div className="main__container">
			<h1 className="main__heading">{props.handleLikes.title}</h1>
			<div className="main__container--info">
				<div className="main__container--info--left">
					<p>By {props.handleLikes.channel}</p>
					<p>
						{new Date(props.handleLikes.timestamp).toLocaleDateString("en-US")}
					</p>
				</div>
				<div className="main__container--info--right">
					<div className="main__container__section--column">
						<img src={views} alt="views icon" />
						<p>{props.handleLikes.views}</p>
					</div>
					<div className="main__container__section--column">
						<img src={likes} alt="likes icon" />
						<p>{props.handleLikes.likes}</p>
					</div>
				</div>
			</div>
			<article className="main__container__section--paragraph">
				<p className="main__container__section--paragraph-text">
					{props.handleLikes.description}
				</p>
			</article>
		</div>
	);
}
