import "../Form/Form.scss";
import Button from "../Button/Button";

function Form() {
	return (
		<div>
			<section class="form">
				<h2 class="form__heading">Join the Conversation</h2>
				<div class="form__container">
					<div class="form__container--left">
						<figure class="form__avatar"></figure>
					</div>

					<div class="form__container--right">
						<form id="form" class="form__wrapper" name="comment-form">
							<label class="form__subtitle" for="userName">
								NAME
							</label>
							<input
								class="form__text--name"
								type="text"
								id="userName"
								name="userName"
								placeholder="Enter your name"
							/>
							<label class="form__subtitle" for="userComment">
								COMMENT
							</label>
							<textarea
								class="form__text--content"
								id="userComment"
								name="userComment"
								placeholder="Add new commment"
							></textarea>
							<div class="form__button__wrapper">
								<button class="form__button" type="submit">
									COMMENT
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
			{/* <section className="comments"></section> */}
		</div>
	);
}

export default Form;
