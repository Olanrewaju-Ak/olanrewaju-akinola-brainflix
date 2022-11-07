import "./styles/App.scss";
import Header from "./components/header/Header";
import { useState } from "react";
import { getVideos } from "./utility/utility";
import { getVideoDescription } from "./utility/utility";
import NextVideo from "./components/next-video/NextVideo";
import VideoDisplayInfo from "./components/video-display-Info/VideoDisplayInfo";
import VideoCard from "./components/video-card/VideoCard";
import VideoDisplay from "./components/video-display/VideoDisplay";
import VideoDescription from "./components/video-description/VideoDescription";
import CommentBlock from "./components/comment-block/CommentBlock";
import CommentForm from "./components/comment-form/CommentForm";
import CommentCard from "./components/comment-card/CommentCard";

const App = () => {
	const [videoId, setVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");

	const [videos, setVideos] = useState(getVideos(videoId));
	const [videoDescription, setVideoDescription] = useState(getVideoDescription(videoId));

	const handleClick = (clickEvent, videoIdClickedOn) => {
		console.log(clickEvent, videoIdClickedOn);
		setVideoId(videoIdClickedOn);
		setVideos(getVideos(videoIdClickedOn));
		setVideoDescription(getVideoDescription(videoIdClickedOn));
	};

	return (
		<>
			<Header />
			<VideoDisplay videoDetails={videoDescription} />
			<div className="app-content">
				<div className="app-content__left">
					<VideoDisplayInfo>
						<VideoDescription videoDetails={videoDescription} />
					</VideoDisplayInfo>
					<CommentBlock>
						<CommentForm />
						<CommentCard comments={videoDescription.comments} />
					</CommentBlock>
				</div>
				<div className="app-content__right">
					<NextVideo>
						<VideoCard videos={videos} onClick={handleClick} />
					</NextVideo>
				</div>
			</div>
		</>
	);
};

export default App;
