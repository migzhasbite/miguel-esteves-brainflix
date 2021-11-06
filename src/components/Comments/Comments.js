import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Comments.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

export default function Comments({ comments, id }) {
	return (
		<div key={id} className="comments">
			<div className="comments--qty">
				<p>{`${comments.length} Comments`}</p>
			</div>
			<div className="form__container">
				<div className="form__container--left">
					<div className="avatar__wrapper">
						<img src={avatar} className="form__avatar" alt="Mohan-muruge"></img>
					</div>
				</div>

				<div className="form__container--right">
					<form id="form" className="form__wrapper" name="comment-form">
						<label className="form__subtitle" for="userComment">
							JOIN THE CONVERSATION
						</label>
						<textarea
							className="form__text--content"
							id="userComment"
							name="userComment"
							placeholder="Add new commment"
						></textarea>
						<button onClick="submit" className="form__button">
							COMMENT
						</button>
					</form>
				</div>
			</div>
			<div className="comments--display">
				{comments.comments.reverse().map((comment) => {
					return (
						<div className="comments__container">
							<figure className="avatar avatar--empty"></figure>

							<div key={uuidv4()}>
								<div className="comments--info">
									<p className="comments--name">{comment.name}</p>
									<p className="comments--date">
										{
											(comment.timestamp = new Date(
												comment.timestamp
											).toLocaleDateString("en-US"))
										}
									</p>
								</div>
								<p className="comments--comment">{comment.comment}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
