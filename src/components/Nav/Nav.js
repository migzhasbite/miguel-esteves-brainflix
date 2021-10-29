import searchIcon from "../../assets/icons/search.svg";
import "../Nav/Nav.scss";
import Avatar from "../Avatar/Avatar";

export default function Nav() {
	return (
		<nav className="navbar">
			<div className="navbar__container">
				<i src={searchIcon} class="navbar__icon"></i>
				<input
					// src={search}
					className="navbar__input"
					type="text"
					placeholder="Search"
				></input>
				<Avatar />
			</div>
		</nav>
	);
}
