import videoDetails from "../data/video-details.json";

//functions to retrieve data unto the page

export const getVideos = (videoId, data) => {
	return data.filter((video) => video.id !== videoId);
};

export const getVideoDescription = (videoId) => {
	return videoDetails.find((video) => video.id === videoId);
};
