import "./UploadPage.scss";
import UploadIcon from "../../assets/icons/upload.svg";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";

const UploadPage = () => {
	return (
		<>
			<h1>Upload Video</h1>
			<form action="" className="upload-form">
				<div>
					<div className="upload-form__video-thumbnail">
						<p>VIDEO THUMBNAIL</p>
						<img src={UploadImage} alt="video-thumbnail" />
					</div>
					<div className="upload-form__input-sections">
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
								JOIN THE CONVERSATION
							</label>
							<textarea
								className="upload-form__input"
								name="user-comment"
								id="comment"
								placeholder="Add a description to your video"
							></textarea>
						</div>
					</div>
				</div>
				<div className="buttons">
					<button className="btn btn__form">
						<img
							src={UploadIcon}
							alt="add-comment icon"
							className="icon__add-comment"
						/>
						PUBLISH
					</button>
					<button className="btn btn__form--borderless">CANCEL</button>
				</div>
			</form>
		</>
	);
};

export default UploadPage;
