import "./VideoCard.scss";
import React from "react";

const VideoCard = ({ videos, onClick }) => {
	return (
		<>
			{videos.map((video) => (
				<section
					className="videocard"
					key={video.id}
					onClick={(clickEvent) => {
						onClick(clickEvent, video.id);
					}}
				>
					<div className="videocard__poster">
						<img
							className="videocard__poster-image"
							src={video.image}
							alt={video.title}
						/>
					</div>
					<div className="videocard__description">
						<h2 className="videocard__description-title">{video.title}</h2>
						<p className="videocard__description-channel">{video.channel}</p>
					</div>
				</section>
			))}
		</>
	);
};

export default VideoCard;
