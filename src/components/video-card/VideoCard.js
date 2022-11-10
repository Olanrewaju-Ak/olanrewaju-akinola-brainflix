import "./VideoCard.scss";
import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ videos }) => {
	return (
		<>
			{videos.map((video) => (
				<Link to={`/${video.id}`} className="video__link">
					<section className="video-card" key={video.id}>
						<div className="video-card__poster">
							<img
								className="video-card__poster-image"
								src={video.image}
								alt={video.title}
							/>
						</div>
						<div className="video-card__description">
							<p className="video-card__description-title">{video.title}</p>
							<p className="video-card__description-channel">{video.channel}</p>
						</div>
					</section>
				</Link>
			))}
		</>
	);
};

export default VideoCard;
