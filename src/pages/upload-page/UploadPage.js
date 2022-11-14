import "./UploadPage.scss";
import UploadIcon from "../../assets/icons/publish.svg";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

const UploadPage = () => {
	const handleFormSubmit = (event) => {
		event.preventDefault();
		console.log("publish was clicked");
	};

	return (
		<section className="upload-page">
			<h1 className="upload-page__title">Upload Video</h1>
			<form action="" className="upload-form" onSubmit={handleFormSubmit}>
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
								name="user-comment"
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
								name="user-comment"
								id="comment"
								placeholder="Add a description to your video"
							></textarea>
						</div>
					</div>
				</div>
				<div className="buttons">
					<Link to={"/upload/success"}>
						<button className="btn__upload ">
							<img src={UploadIcon} alt="upload icon" className="icon__upload" />
							PUBLISH
						</button>
					</Link>
					<button className=" btn__upload--borderless">CANCEL</button>
				</div>
			</form>
		</section>
	);
};

export default UploadPage;
