import React from "react";
import "./VideoDisplay.scss";

const VideoDisplay = ({ videoDetails }) => {
	const { image, title, ...rest } = videoDetails;
	return (
		<section className="video-display">
			<video className="video-display__video" controls poster={videoDetails.image}></video>
		</section>
	);
};

export default VideoDisplay;
