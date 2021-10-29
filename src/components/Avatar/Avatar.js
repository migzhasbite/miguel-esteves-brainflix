import avatar from "../../assets/images/Mohan-muruge.jpg";
import "../Avatar/Avatar.scss";

export default function Avatar() {
	return (
		<div className="avatar__wrapper">
			<img src={avatar} className="avatar__image"></img>
		</div>
	);
}
