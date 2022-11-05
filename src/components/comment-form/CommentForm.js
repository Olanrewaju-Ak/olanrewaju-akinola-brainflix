import React from "react";
import "./CommentForm.scss";
import AddCommentIcon from "../../assets/icons/add_comment.svg";

const CommentForm = () => {
	return (
		<section className="comment-form">
			<div className="comment-form__layout">
				<div className="user-avatar"></div>
				<form action="" id="comment-form" className="form">
					<div className="form__div">
						<label htmlFor="comment" className="form-field__label">
							JOIN THE CONVERSATION
						</label>
						<textarea
							className="form-field__input"
							name="user-comment"
							id="comment"
							cols="40"
							rows="5"
							placeholder="Add a new comment"
						></textarea>
					</div>
					<div className="btn-container">
						<button className="btn">
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
