import "./UploadPage.scss";
import UploadIcon from "../../assets/icons/upload.svg";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";

const UploadPage = () => {
	return (
		<section className="upload-page">
			<h1 className="upload-page__title">Upload Video</h1>
			<form action="" className="upload-form">
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
					<button className="btn__upload ">
						<img src={UploadIcon} alt="upload icon" className="icon__upload" />
						PUBLISH
					</button>
					<button className=" btn__upload--borderless">CANCEL</button>
				</div>
			</form>
		</section>
	);
};

export default UploadPage;
