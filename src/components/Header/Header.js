import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";

export default function Header() {
	return (
		<div className="header__container">
			<Link to="/">
				<img className="header__logo" alt="BrainFlix-logo" src={logo} />
			</Link>
			<nav className="header__nav">
				<input
					className="header__nav--search"
					type="search"
					placeholder="Search"
				></input>
				<img className="avatar avatar--empty" alt="Mohan-muruge" src={avatar} />
			</nav>
			<Link to="/upload">
				<button className="button button--upload" type="submit">
					UPLOAD
				</button>
			</Link>
		</div>
	);
}
