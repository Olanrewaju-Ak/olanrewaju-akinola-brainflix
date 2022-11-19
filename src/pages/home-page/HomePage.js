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

const BACK_END = "http://localhost:8080/videos/";
// const API_KEY = "?api_key=4baecaa9-4473-40d5-82a1-fe4fe0bf846d";
let defaultV = "84e96018-4022-434e-80bf-000ce4cd12b8";

const HomePage = () => {
	const [videoId, setVideoId] = useState(defaultV);
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState({});

	const getAllVideos = async (videoId) => {
		const { data } = await axios.get(`${BACK_END}`);
		const dataFilter = data.filter((video) => video.id !== videoId);

		setVideos(dataFilter);
	};

	const getSelectedVideo = async (videoId) => {
		const { data } = await axios.get(`${BACK_END}${videoId}`);

		setSelectedVideo(data);
	};

	useEffect(() => {
		try {
			getAllVideos(videoId);
			getSelectedVideo(videoId);
		} catch (error) {}
	}, []);

	useEffect(() => {
		getSelectedVideo(videoId);
	}, [videoId]);

	const params = useParams();

	useEffect(() => {
		if (Object.keys(params).length !== 0) {
			try {
				getAllVideos(params.videoId);
				setVideoId(params.videoId);
			} catch (error) {}
		} else {
			setVideoId(defaultV);
		}
	}, [params]);

	return (
		<>
			{selectedVideo && <VideoDisplay videoDetails={selectedVideo} />}
			<div className="home-content">
				<div className="home-content__left">
					<VideoDisplayInfo>
						{selectedVideo && <VideoDescription videoDetails={selectedVideo} />}
					</VideoDisplayInfo>
					<CommentBlock>
						<CommentForm />
						{selectedVideo && <CommentCard comments={selectedVideo.comments} />}
					</CommentBlock>
				</div>
				<div className="home-content__right">
					<NextVideo>
						<VideoCard videos={videos} />
					</NextVideo>
				</div>
			</div>
		</>
	);
};

export default HomePage;
