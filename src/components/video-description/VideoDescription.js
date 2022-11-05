import "./VideoDescription.scss";
import ViewsIcon from "../../assets/icons/views.svg";
import LikesIcon from "../../assets/icons/likes.svg";

const VideoDescription = ({ videoDetails }) => {
	const { title, channel, image, description, views, likes, timestamp, comment, ...rest } =
		videoDetails;

	return (
		<>
			<div className="videoInfo__title">
				<h1 className="videoInfo__title-text">{videoDetails.title}</h1>
			</div>
			<div className="videoInfo__misc">
				<div className="videoInfo__origin">
					<p className="videoInfo__origin-text">By {videoDetails.channel}</p>
					<p className="videoInfo__origin-text--light">
						{new Date(videoDetails.timestamp).toLocaleDateString()}
					</p>
				</div>
				<div className="videoInfo__icons">
					<div className="viewsIcon">
						<img className="viewsIcon__img" src={ViewsIcon} alt="views-icon" />
						<p className="viewsIcon__text">{videoDetails.views}</p>
					</div>
					<div className="likesIcon">
						<img className="likesIcon__img" src={LikesIcon} alt="likes-icon" />
						<p className="likesIcon__text">{videoDetails.likes}</p>
					</div>
				</div>
			</div>
			<div className="videoInfo__description">
				<p className="videoInfo__descriptionText">{videoDetails.description}</p>
			</div>
			{videoDetails.comments.length > 0 ? (
				<p className="videoInfo__commentsTotal">{videoDetails.comments.length} Comments</p>
			) : (
				<p className="videoInfo__commentsTotal">No Comments</p>
			)}
		</>
	);
};

export default VideoDescription;
