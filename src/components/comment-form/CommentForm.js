import React from "react";
import "./CommentForm.scss";
import AddCommentIcon from "../../assets/icons/add_comment.svg";

const CommentForm = ({ handleCommentSubmit }) => {
	return (
		<section className="comments-form">
			<div className="comments-form__layout">
				<div className="user-avatar"></div>
				<form
					action=""
					id="comment-form"
					className="form"
					onSubmit={(event) => handleCommentSubmit(event)}
				>
					<div className="form__div">
						<label htmlFor="name" className="form-field__label">
							NAME
						</label>
						<input
							name="name"
							type="text"
							id="name"
							placeholder="Enter your name"
							className="form-field__input--name"
						/>
					</div>
					<div className="form__div">
						<label htmlFor="comment" className="form-field__label">
							JOIN THE CONVERSATION
						</label>
						<textarea
							className="form-field__input"
							id="comment"
							name="comment"
							placeholder="Add a new comment"
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
