import React from "react";
import data from "../../data/video-details.json";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";
import "../Main/Main.scss";

export default function Main() {
	return (
		<div className="main__container">
			<h1 className="main__heading">{data[0].title}</h1>
			<div className="main__container--info">
				{/* <div className="hero__container--info--column"> */}
				<div className="main__container--info--left">
					<p>By {data[0].channel}</p>
					<p>{new Date(data[0].timestamp).toLocaleDateString("en-US")}</p>
				</div>
				<div className="main__container--info--right">
					<div className="main__container__section--column">
						<img src={views} />
						<p>{data[0].views}</p>
					</div>
					<div className="main__container__section--column">
						<img src={likes} />
						<p>{data[0].likes}</p>
					</div>
					{/* </div> */}
				</div>
			</div>
			<article className="main__container__section--paragraph">
				<p className="main__container__section--paragraph-text">
					{data[0].description}
				</p>
			</article>
		</div>
	);
}
