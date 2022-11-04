import "./CommentBlock.scss";
// import CommentForm from "../comment-form/CommentForm";
// import CommentCard from "../comment-card/CommentCard";

const CommentBlock = ({ children }) => {
	return <section className="commentBlock">{children}</section>;
};

export default CommentBlock;
