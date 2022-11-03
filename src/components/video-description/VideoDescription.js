import "./VideoDescription.scss";

const VideoDescription = ({ videoDetails }) => {
	const { title, channel, image, description, views, likes, timestamp, ...rest } = videoDetails;

	return (
		<section className="videoInfo">
			<div className="videoInfo__title">
				<h1 className="videoInfo__title-text">{videoDetails.title}</h1>
			</div>
			<div className="videoInfo__misc">
				<div>
					<p className="videoInfo__channel">{videoDetails.channel}</p>
					<p className="videoInfo__date">{videoDetails.timestamp}</p>
				</div>
				<div className="videoInfo__icons">
					<div className="viewsIcon">
						<img
							className="viewsIcon__img"
							src="../../assets/icons/views.svg"
							alt="views-icon"
						/>
						<p className="viewsIcon__text">{videoDetails.views}</p>
					</div>
					<div className="likesIcon">
						<img
							className="likesIcon__img"
							src="../../assets/icons/likes.svg.svg"
							alt="likes-icon"
						/>
						<p className="likesIcon__text">{videoDetails.likes}</p>
					</div>
				</div>
				<div className="videoInfo__description">
					<p className="videoInfo__description-text">{videoDetails.description}</p>
				</div>
			</div>
		</section>
	);
};

export default VideoDescription;
