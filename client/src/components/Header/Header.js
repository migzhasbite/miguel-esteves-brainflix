import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";

export default function Header() {
	return (
		<header className="header__container">
			<div className="header__container--left">
				<div className="link header">
					<Link to="/">
						<img className="header__logo" alt="BrainFlix-logo" src={logo} />
					</Link>
				</div>
			</div>
			<div className="header__container--right">
				<nav className="header__nav header">
					<input
						className="input input--search"
						type="search"
						placeholder="Search"
					></input>
				</nav>
				<img
					className="header--avatar avatar"
					alt="Mohan-muruge"
					src={avatar}
				/>
				<Link to="/upload" className="link header">
					<button className="button button--upload" type="submit">
						UPLOAD
					</button>
				</Link>
			</div>
		</header>
	);
}
