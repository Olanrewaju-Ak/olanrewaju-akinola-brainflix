import VideoCard from "../video-card/VideoCard";
import "./NextVideo.scss";

const NextVideo = ({ children }) => {
	return <aside className="nextvideo">{children}</aside>;
};

export default NextVideo;
