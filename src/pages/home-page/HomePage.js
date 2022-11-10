import React from "react";
import "./HomePage.scss";
import { useState, useEffect } from "react";
import NextVideo from "../../components/next-video/NextVideo.js";
import VideoDisplayInfo from "../../components/video-display-Info/VideoDisplayInfo";
import VideoCard from "../../components/video-card/VideoCard";
import VideoDisplay from "../../components/video-display/VideoDisplay";
import VideoDescription from "../../components/video-description/VideoDescription";
import CommentBlock from "../../components/comment-block/CommentBlock";
import CommentForm from "../../components/comment-form/CommentForm";
import CommentCard from "../../components/comment-card/CommentCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getVideos } from "../../utility/utility.js";

const URL = "https://project-2-api.herokuapp.com/videos?api_key=";
const API_KEY = "4baecaa9-4473-40d5-82a1-fe4fe0bf846d";

const HomePage = () => {
	const [videoId, setVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
	const [videos, setVideos] = useState([]);
	const [videoDescription, setVideoDescription] = useState([]);

	useEffect(() => {
		// console.log("useEffect ran");
		const fetchVideos = async () => {
			try {
				const { data } = await axios.get(`${URL}${API_KEY}`);
				const detailResponse = await axios.get(
					`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=${API_KEY}`,
				);

				// console.log(data);
				const videoFilter = getVideos(videoId, data);
				setVideos(videoFilter, data);
				setVideoId(detailResponse.data.id);
				setVideoDescription(detailResponse.data);
			} catch (error) {
				console.log("Error", error);
			}
		};
		fetchVideos();
	}, []);

	const params = useParams();
	console.log(params);

	return (
		<>
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
						<VideoCard videos={videos} />
					</NextVideo>
				</div>
			</div>
		</>
	);
};

export default HomePage;
