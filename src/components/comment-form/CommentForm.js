import React from "react";
import "./CommentForm.scss";
import AddCommentIcon from "../../assets/icons/add_comment.svg";

const CommentForm = () => {
	return (
		<section className="commentsForm">
			<div className="commentForm-layout">
				<div className="user-avatar"></div>
				<form action="" id="commentForm" className="form">
					<div className="form__div">
						<label htmlFor="comment" className="form-field__label">
							Join the Conversation
						</label>
						<textarea
							className="form-field__input"
							name="userComment"
							id="comment"
							cols="30"
							rows="10"
							placeholder="Add a new comment"
						></textarea>
					</div>
					<div className="btn-container">
						<button className="btn">
							<img src={AddCommentIcon} alt="add-comment icon" />
							COMMENT
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default CommentForm;
