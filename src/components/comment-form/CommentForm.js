import React from "react";
import "./CommentForm.scss";
import AddCommentIcon from "../../assets/icons/add_comment.svg";

const CommentForm = (props) => {
	return (
		<section className="comments-form">
			<div className="comments-form__layout">
				<div className="user-avatar"></div>
				<form
					action=""
					id="comment-form"
					className="form"
					onSubmit={(e) => props.onSubmit(e)}
				>
					<div className="form__div">
						<label htmlFor="comment" className="form-field__label">
							JOIN THE CONVERSATION
						</label>
						<textarea
							className="form-field__input"
							value={props.inputValue}
							id="comment"
							placeholder="Add a new comment"
							onChange={(e) => props.onInputValueChange(e.target.value)}
						></textarea>
					</div>
					<div className="btn-container">
						<button className="btn btn__form">
							<img
								src={AddCommentIcon}
								alt="add-comment icon"
								className="icon__add-comment"
							/>
							COMMENT
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default CommentForm;
