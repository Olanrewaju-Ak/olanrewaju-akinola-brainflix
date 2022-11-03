import React from "react";
import "./VideoDisplayInfo.scss";
import VideoDescription from "../video-description/VideoDescription";

const VideoDisplayInfo = ({ children }) => {
	return <section className="videoinfo">{children}</section>;
};

export default VideoDisplayInfo;
