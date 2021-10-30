import "./Form.scss";
import avatar from "../../../assets/images/Mohan-muruge.jpg";

function Form() {
	return (
		<div>
			<section class="form">
				<div class="form__container">
					<div class="form__container--left">
						<div className="avatar__wrapper">
							<img src={avatar} className="form__avatar"></img>
						</div>
					</div>

					<div class="form__container--right">
						<form id="form" class="form__wrapper" name="comment-form">
							{" "}
							<label class="form__subtitle" for="userComment">
								JOIN THE CONVERSATION
							</label>
							<textarea
								class="form__text--content"
								id="userComment"
								name="userComment"
								placeholder="Add new commment"
							></textarea>
							<div class="form__button__wrapper">
								<button onClick="submit" className="button"></button>;
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Form;
