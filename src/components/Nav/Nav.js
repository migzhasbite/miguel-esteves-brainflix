import searchIcon from "../../assets/icons/search.svg";
import "../Nav/Nav.scss";
// import Avatar from "../Avatar/Avatar";

export default function Nav() {
	return (
		<nav className="navbar">
			{/* <div className="navbar__container"> */}
			<img src={searchIcon} class="navbar__icon"></img>
			<input
				// src={search}
				className="navbar__input"
				type="text"
				placeholder="Search"
			></input>
			{/* </div> */}
		</nav>
	);
}
