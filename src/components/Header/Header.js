import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";

export default function Header(props) {
	console.log(props);
	return (
		<div className="header__container">
			<Link to="/">
				<img className="header__logo" alt="BrainFlix-logo" src={logo} />
			</Link>
			<nav className="header__nav">
				<input
					className="header__nav--search"
					type="text"
					placeholder="Search"
				></input>
				<img className="header__avatar" alt="Mohan-muruge" src={avatar} />
			</nav>
			<Link to="/upload">
				<button className="header__button" type="submit">
					UPLOAD
				</button>
			</Link>
		</div>
	);
}
