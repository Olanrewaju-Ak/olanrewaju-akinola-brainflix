import "./CommentCard.scss";

function CommentCard({ comments }) {
	return (
		<section className="comments-list">
			{comments.map((comment) => (
				<div className="comment-item" key={comment.id}>
					<div className="comment-item__img"></div>
					<div className="comment-item__info-wrap">
						<div className="comment-item__info">
							<span className="comment-item__name">{comment.name}</span>
							<span className="comment-item__date">
								{new Date(comment.timestamp).toLocaleDateString()}
							</span>
						</div>
						<p className="comment-item__user-comment">{comment.comment}</p>
					</div>
				</div>
			))}
		</section>
	);
}

export default CommentCard;
