import "./Video.scss";
// import videos from "../../data/video-details.json";
// import likes from "../../assets/icons/likes.svg";
import play from "../../assets/icons/play.svg";
import fullScreen from "../../assets/icons/fullscreen.svg";
import volumeUp from "../../assets/icons/volume_up.svg";
import volumeOff from "../../assets/icons/volume_off.svg";

export default function Video(props) {
	console.log(props);
	return (
		<div className="video__container">
			<video
				className="video__media"
				src={props.videoList.video}
				image={props.videoList.image}
			></video>
			{/* props.handleVideoClick(event, props.id); }} > */}
			<div className="video__controls">
				<div className="video__controls__wrapper">
					<img src={play} alt="play" className="video__icon" />
				</div>
				<div className="video__controls__wrapper">
					<div className="video--slider"></div>
					<p className="video__length">{props.videoList.duration}</p>
				</div>
				<div className="video__controls__wrapper">
					<img src={fullScreen} alt="" />
					<img src={volumeUp} alt="" />
				</div>
			</div>
		</div>
	);
}

// {/* // export default function Videos()  */}
// {
// // 	// const { title, channel, image } = videos;
// // 	console.log(videos[0].title);
// // 	return (
// // 		<div className="video">
// // 			<img
// // 				className="video__image"
// // 				alt={videos[0].title}
// // 				src={videos[0].image}
// // 			/>

// // 			<h3>{videos[0].title}</h3>
// // 			<h3>{videos[0].channel}</h3>
// // 		</div>
// // 	);
// // }

// // {
// /* <div className = "video__container"
// 			src={props.data.video}
// 			alt={props.data.title}
// 			/>
// 			<div className="video__controls">
// 			<div className="video__controls__wrapper">
// 			<img src={play} alt="play" className="video__icon" />
// 			</div>
// 			<div className="video__controls__wrapper">
// 			<div className="video--slider"></div>
// 			<p className="video__length">{props.data.duration}</p>

// 			<h3>{props.video.title}</h3>
// 			<p>by {props.video.author}</p>
// 			</div>
// 			<figure className="book__likes">
// 			<img className="book__likes--icon" src={likes} alt="likes" />
// 			<span>{props.video.upvotes}</span>
// 			</figure>
// 			</div>
// 			</section>
// 			</article> */
// // }
