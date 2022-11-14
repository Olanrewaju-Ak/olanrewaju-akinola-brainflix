import "./VideoDescription.scss";
import ViewsIcon from "../../assets/icons/views.svg";
import LikesIcon from "../../assets/icons/likes.svg";

const VideoDescription = ({ videoDetails }) => {
	const { title, channel, image, description, views, likes, timestamp, comments, ...rest } =
		videoDetails;
	// console.log(videoDetails);

	return (
		<>
			<div className="videoInfo__title">
				<h1 className="videoInfo__title-text">{title}</h1>
				<div className="videoInfo__misc--tablet">
					<div className="videoInfo__origin">
						<p className="videoInfo__origin-text">By {channel}</p>
						<p className="videoInfo__origin-text--light">
							{new Date(videoDetails.timestamp).toLocaleDateString("en-US", {
								year: "numeric",
								month: "2-digit",
								day: "2-digit"
							})}
						</p>
					</div>
					<div className="videoInfo__icons">
						<div className="viewsIcon">
							<img className="viewsIcon__img" src={ViewsIcon} alt="views-icon" />
							<p className="viewsIcon__text">{views}</p>
						</div>
						<div className="likesIcon">
							<img className="likesIcon__img" src={LikesIcon} alt="likes-icon" />
							<p className="likesIcon__text">{likes}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="videoInfo__misc--mobile">
				<div className="videoInfo__origin">
					<p className="videoInfo__origin-text">By {channel}</p>
					<p className="videoInfo__origin-text--light">
						{new Date(videoDetails.timestamp).toLocaleDateString("en-US", {
							year: "numeric",
							month: "2-digit",
							day: "2-digit"
						})}
					</p>
				</div>
				<div className="videoInfo__icons">
					<div className="viewsIcon">
						<img className="viewsIcon__img" src={ViewsIcon} alt="views-icon" />
						<p className="viewsIcon__text">{views}</p>
					</div>
					<div className="likesIcon">
						<img className="likesIcon__img" src={LikesIcon} alt="likes-icon" />
						<p className="likesIcon__text">{likes}</p>
					</div>
				</div>
			</div>
			<div className="videoInfo__description">
				<p className="videoInfo__descriptionText">{description}</p>
			</div>
			{comments?.length > 0 ? (
				<p className="videoInfo__commentsTotal">{comments?.length} Comments</p>
			) : (
				<p className="videoInfo__commentsTotal">No Comments</p>
			)}
		</>
	);
};

export default VideoDescription;
