import React, { Component } from "react";
import Form from "./Form/Form";

export default function Comments(props) {
	// console.log(props.userComments);
	return (
		<div className="comments__container">
			<p className="comments--counter"></p>
			<Form />
			<div className="user-comment__container">
				{/* {props.userComments.comments.map((comment) => {
					return (
						<div>
							<div className="user-comment__image"></div>
							<div className="user-comment__description">
								<div className="user-comment__container--name-date">
									<p className="user-comment--name">{comment.name}</p>
									<p className="user-comment--date">
										{
											(comment.timestamp = new Date(
												comment.timestamp
											).toLocaleDateString("en-US"))
										}
									</p>
								</div>
								<p className="user-comment">{comment.comment}</p>
							</div>
						</div>
					);
				})} */}
			</div>
		</div>
	);
}
//{/* // state = { */
// 	// userComment: commentData,
// };
// render(){
// return (
// 	<div className="user-comment__container">
// 		{this.state.userComment.reverse().map((comment)=> (

// 			<div className="user-comment__image"></div>
// 			<div className="user-comment__description">
// 		<div className="user-comment__container--name-date">
// 			<p className="user-comment--name">{props.name}</p>
// 			<p className="user-comment--date">{props.date}</p>
// 		</div>
// 		<p className="user-comment">{props.comments.comment}</p>
// 	</div>
// 		))}
// </div>
// );
// }
