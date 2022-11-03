import React from "react";
import "./Header.scss";
import LogoImage from "../../assets/logo/BrainFlix-logo.svg";

const Header = () => {
	return (
		<>
			<header className="header__container">
				<nav className="navigation">
					<a href="brainflix.com" className="navigation__logo-link">
						<img src={LogoImage} alt="band-logo" className="navigation__logo-img" />
					</a>
					<div className="navigation__search">
						<div>
							<input
								className="navigation__search-input"
								type="text"
								name="search"
								placeholder="Search"
							/>
							<div className="navigation__avatar"></div>
						</div>
						<button></button>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
