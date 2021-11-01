import React from "react";
import logo from "../../assets/icons/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";

export default function Header() {
	return (
		<div className="header__container">
			<a href="./index.html">
				<img className="header__logo" alt="BrainFlix-logo" src={logo} />
			</a>
			<nav className="header__nav">
				<input
					className="header__nav--search"
					type="text"
					placeholder="Search"
				></input>
				<img className="header__avatar" alt="Mohan-muruge" src={avatar} />
			</nav>
			<button className="header__button" type="submit">
				UPLOAD
			</button>
		</div>
	);
}
