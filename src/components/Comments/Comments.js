import Avatar from "../Avatar/Avatar";
import Counter from "../Counter/Counter";
import data from "../../data/video-details.json";

export default function Comments() {
	console.log(data.comments);
	return (
		<div className="comments__container--left">
			<h2 className="comments__counter">
				{data.comments} {data.comments}
			</h2>
			<div className="comments__container--avatar--wrapper">
				<img className=""></img>
			</div>
			<div className="comments__container">
				<div className="comments__container--content">
					<p className="comments--name"></p>
					<p className="comments--timestamp"></p>
					<p className="comments--comment"></p>
				</div>
			</div>
		</div>
	);
}
