import React from "react";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";
import "../Header/Header.scss";
import logo from "../../assets/icons/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar";

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__container--top">
					<img className="header--logo" src={logo} alt="BrainFlix-logo"></img>
					<Nav />
					<div className="header__container">
						<Button />
					</div>
				</div>
				<Avatar />
			</div>
		</header>
	);
}

export default Header;
