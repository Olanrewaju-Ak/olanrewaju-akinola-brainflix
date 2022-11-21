import "./UploadPage.scss";
import UploadIcon from "../../assets/icons/publish.svg";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BACK_END = "http://localhost:8080/videos/";

const UploadPage = () => {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const newVideo = {
			title: event.target.title.value,
			description: event.target.description.value
		};
		axios
			.post(`${BACK_END}`, newVideo)
			.then(() => navigate("/upload/success"))
			.then(setTimeout(() => navigate("/"), 1500));
		event.target.reset();
	};
	return (
		<section className="upload-page">
			<h1 className="upload-page__title">Upload Video</h1>
			<form action="" className="upload-form" onSubmit={handleSubmit}>
				<div className="upload-form__layout">
					<div className="upload-form__thumbnail">
						<p className="upload-form__thumbnail-title">VIDEO THUMBNAIL</p>
						<img
							src={UploadImage}
							alt="video-thumbnail"
							className="upload-form__thumbnail-img"
						/>
					</div>
					<div className="upload-form__sections">
						<div className="upload-form__div">
							<label htmlFor="comment" className="upload-form__label">
								TITLE YOUR VIDEO
							</label>
							<textarea
								className="upload-form__input"
								name="title"
								id="comment"
								placeholder="Add a title to your video"
							></textarea>
						</div>
						<div className="upload-form__div">
							<label htmlFor="comment" className="upload-form__label">
								ADD A VIDEO DESCRIPTION
							</label>
							<textarea
								className="upload-form__input--long"
								name="description"
								id="comment"
								placeholder="Add a description to your video"
							></textarea>
						</div>
					</div>
				</div>
				<div className="buttons">
					{/* <Link to={"/upload/success"}> */}
					<button className="btn__upload ">
						<img src={UploadIcon} alt="upload icon" className="icon__upload" />
						PUBLISH
					</button>
					{/* </Link> */}
					<button className=" btn__upload--borderless">CANCEL</button>
				</div>
			</form>
		</section>
	);
};

export default UploadPage;
