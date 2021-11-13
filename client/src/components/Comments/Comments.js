import React from "react";
import "./Comments.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

export default function Comments({ comments, id }) {
	return (
		<div key={id} className="comments">
			<div className="comments--qty">
				<p>{`${comments.comments.length} Comments`}</p>
			</div>
			<div className="form__container">
				<div className="form__container--left">
					<div className="avatar__wrapper">
						<img src={avatar} className="form__avatar" alt="Mohan-muruge"></img>
					</div>
				</div>

				<div className="form__container--right">
					<form id="form" className="form__wrapper" name="comment-form">
						<label className="form__subheading" for="userComment">
							JOIN THE CONVERSATION
						</label>
						<div className="form__input--container">
							<textarea
								className="input input--form"
								id="userComment"
								name="userComment"
								placeholder="Add new commment"
							></textarea>
							<button onClick="submit" className="button button--comment">
								COMMENT
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className="comments--display">
				{comments.comments.reverse().map(({ name, timestamp, comment }) => {
					return (
						<div className="comments__container">
							<figure className="avatar avatar--empty"></figure>

							<div key={id}>
								<div className="comments--info">
									<p className="comments--name">{name}</p>
									<p className="comments--date">
										{
											(timestamp = new Date(timestamp).toLocaleDateString(
												"en-US"
											))
										}
									</p>
								</div>
								<p className="comments--comment">{comment}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
