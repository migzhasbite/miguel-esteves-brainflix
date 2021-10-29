import React from "react";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";
import "../Header/Header.scss";
import logo from "../../assets/icons/BrainFlix-logo.svg";

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<img className="header--logo" src={logo} alt="BrainFlix-logo"></img>
				<Nav />
				<Button />
			</div>
		</header>
	);
}

export default Header;
