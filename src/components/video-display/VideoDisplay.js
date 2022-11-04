import React from "react";
import "./VideoDisplay.scss";

const VideoDisplay = ({ videoDetails }) => {
	const { image, title, ...rest } = videoDetails;
	return (
		<section className="videoDisplay">
			<video
				src=""
				className="videoDisplay__video"
				controls
				poster={videoDetails.image}
			></video>
		</section>
	);
};

export default VideoDisplay;
