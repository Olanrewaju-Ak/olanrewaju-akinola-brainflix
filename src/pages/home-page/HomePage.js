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
// import { getVideos } from "../../utility/utility.js";

const URL = "https://project-2-api.herokuapp.com/videos/";
const API_KEY = "?api_key=4baecaa9-4473-40d5-82a1-fe4fe0bf846d";

const HomePage = () => {
	const [videoId, setVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState({});

	const getAllVideos = async (videoId) => {
		const { data } = await axios.get(`${URL}${API_KEY}`);
		// console.log(data);
		const dataFilter = data.filter((video) => video.id !== videoId);
		console.log(dataFilter);
		setVideos(dataFilter);
	};

	const getSelectedVideo = async (videoId) => {
		const { data } = await axios.get(`${URL}${videoId}${API_KEY}`);
		console.log(data);
		setSelectedVideo(data);
	};

	useEffect(() => {
		// console.log("useEffect ran");
		try {
			getAllVideos(videoId);
			getSelectedVideo(videoId);
		} catch (error) {
			console.log("Error:", error);
		}
	}, []);

	const params = useParams();
	// console.log(params);

	useEffect(() => {
		console.log("params useeffect");
		if (Object.keys(params).length !== 0) {
			try {
				getAllVideos(params.videoId);
				getSelectedVideo(params.videoId);
				// console.log("Second useEffect ran", getSelectedVideo(params.videoId));
				setVideoId(params.videoId);
			} catch (error) {
				console.log("Error:", error);
			}
		}
	}, [params]);

	// console.log(selectedVideo);

	return (
		<>
			{selectedVideo && <VideoDisplay videoDetails={selectedVideo} />}
			<div className="app-content">
				<div className="app-content__left">
					<VideoDisplayInfo>
						{selectedVideo && <VideoDescription videoDetails={selectedVideo} />}
					</VideoDisplayInfo>
					<CommentBlock>
						<CommentForm />
						{selectedVideo && <CommentCard comments={selectedVideo.comments} />}
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
