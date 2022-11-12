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
		// console.log(dataFilter);
		setVideos(dataFilter);
	};

	const getSelectedVideo = async (videoId) => {
		const { data } = await axios.get(`${URL}${videoId}${API_KEY}`);
		// console.log(data);
		setSelectedVideo(data);
	};

	// Adding a user Comment event Listener
	const [formValue, changeFormValue] = useState("");

	const commentObj = {
		comment: formValue
	};

	const clearError = (form, formInput, userInputError) => {
		form.removeChild(userInputError);
		userInputError.classList.remove("form-field__input--error");
		formInput.classList.remove("form-field__input--error");
	};

	const showError = () => {
		const form = document.querySelector(".comments-form");
		const userInputError = document.createElement("p");
		userInputError.textContent = "Please fill in a comment.!!!";
		userInputError.classList.add("form-field__input-text--error");
		const formInput = document.getElementById("comment");
		formInput.classList.add("form-field__input--error");
		form.appendChild(userInputError);

		setTimeout(() => clearError(form, formInput, userInputError), 4000);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		console.log("comment was clicked");
		const userComment = formValue;
		if (!userComment) {
			showError();
			alert("error");
			return;
		}
		event.target.reset();
		console.log(commentObj);
	};

	// const postComment = () => {};

	useEffect(() => {
		try {
			getAllVideos(videoId);
			getSelectedVideo(videoId);
		} catch (error) {
			// console.log("Error:", error);
		}
	}, []);

	const params = useParams();
	// console.log(params);

	useEffect(() => {
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
						<CommentForm
							inputValue={formValue}
							onInputValueChange={changeFormValue}
							onSubmit={handleFormSubmit}
						/>
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
