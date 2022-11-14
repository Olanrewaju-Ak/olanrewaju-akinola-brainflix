import React from "react";
import { Link } from "react-router-dom";
import "./SuccessPage.scss";

const SuccessPage = () => {
	return (
		<section className="upload-success">
			<div>
				<h2 className="upload-success__text">Upload Successful !!!!</h2>
				<Link to={"/"}>
					<button className="btn--accent">GO HOME</button>
				</Link>
			</div>
		</section>
	);
};

export default SuccessPage;
