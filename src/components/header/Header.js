import React from "react";
import "./Header.scss";
import LogoImage from "../../assets/Logo/BrainFlix-logo.svg";
import SearchIcon from "../../assets/icons/search.svg";
import UploadIcon from "../../assets/icons/upload.svg";

const Header = () => {
	return (
		<>
			<header className="header__container">
				<nav className="navigation ">
					<a href="brainflix.com" className="navigation__logo-link">
						<img src={LogoImage} alt="band-logo" className="navigation__logo-img" />
					</a>
					<div className="navigation__wrapper">
						<div className="navigation__wrapper-search">
							<form action="" className="navigation__form">
								<button className="icon__btn">
									<img
										className="icon__search-img"
										src={SearchIcon}
										alt="search-icon"
									/>
								</button>
								<input
									className="navigation__form-input"
									type="text"
									name="search"
									placeholder="Search"
								/>
							</form>
							<div className="navigation__avatar navigation__avatar--mobile"></div>
						</div>
						<button className="btn">
							<img className="icon__upload" src={UploadIcon} alt="upload-icon" />
							UPLOAD
						</button>
						<div className="navigation__avatar navigation__avatar--tablet"></div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
