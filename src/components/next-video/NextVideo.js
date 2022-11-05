import "./NextVideo.scss";

const NextVideo = ({ children }) => {
	return (
		<section className="next-video">
			<p className="next-video__header">NEXT VIDEOS</p>
			{children}
		</section>
	);
};

export default NextVideo;
