import "./CommentCard.scss";

function CommentCard({ comments }) {
	return (
		<section className="commentsList">
			{comments.map((comment) => (
				<div className="commentItem" key={comment.id}>
					<div className="commentItem__img"></div>
					<div className="commentItem__infoWrap">
						<div className="commentsItem__info">
							<span className="commentItem__name">{comment.name}</span>
							<span className="commentItem__date">{comment.timestamp}</span>
						</div>
						<p className="commentItem__userComment">{comment.comment}</p>
					</div>
				</div>
			))}
		</section>
	);
}

export default CommentCard;
