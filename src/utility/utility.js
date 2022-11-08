import videos from "../data/videos.json";
import videoDetails from "../data/video-details.json";

//functions to retrieve data unto the page

export const getVideos = (videoId) => {
	return videos.filter((video) => video.id !== videoId);
};

export const getVideoDescription = (videoId) => {
	return videoDetails.find((video) => video.id === videoId);
};
