import "./Hero.scss";

export default function Hero({ mainHeroVideo }) {
	const { video, image, title } = mainHeroVideo;
	return (
		<div className="hero__wrapper">
			<video
				src={video}
				type="video/mp4"
				controls
				className="hero--image"
				poster={image}
				alt={title}
			></video>
		</div>
	);
}
