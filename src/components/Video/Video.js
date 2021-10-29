import "./Video.scss";
import videos from "../../data/video-details.json";
import likes from "../../assets/icons/likes.svg";

export default function Video(props) {
	return (
		<article>
			<section className="book">
				<img
					className="book__image"
					src={props.video.image}
					alt={props.video.title}
				/>
				<div className="book__info">
					<div className="book__details">
						<h3>{props.video.title}</h3>
						<p>by {props.video.author}</p>
					</div>
					<figure className="book__likes">
						<img className="book__likes--icon" src={likes} alt="likes" />
						<span>{props.video.upvotes}</span>
					</figure>
				</div>
			</section>
		</article>
	);
}

// export default function Videos() {
// 	// const { title, channel, image } = videos;
// 	console.log(videos[0].title);
// 	return (
// 		<div className="video">
// 			<img
// 				className="video__image"
// 				alt={videos[0].title}
// 				src={videos[0].image}
// 			/>

// 			<h3>{videos[0].title}</h3>
// 			<h3>{videos[0].channel}</h3>
// 		</div>
// 	);
// }
