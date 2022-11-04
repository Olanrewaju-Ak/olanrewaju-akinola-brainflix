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

	return (
		<>
			<Header />
			<VideoDisplay videoDetails={videoDescription} />
			<VideoDisplayInfo>
				<VideoDescription videoDetails={videoDescription} />
			</VideoDisplayInfo>
			<CommentBlock>
				<CommentForm />
				<CommentCard comments={videoDescription.comments} />
			</CommentBlock>
			<NextVideo>
				<VideoCard videos={videos} />
			</NextVideo>
		</>
	);
};

export default App;
