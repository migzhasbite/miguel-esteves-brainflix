import React, { Component } from "react";
import "../Hero/Hero.scss";
import Videos from "../Video/Video";
import playIcon from "../../assets/icons/play.svg";
import fullScreen from "../../assets/icons/fullscreen.svg";
import volumeUp from "../../assets/icons/volume_up.svg";
import volumeOff from "../../assets/icons/volume_off.svg";
import data from "../../data/video-details.json";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

export default class Hero extends Component {
	render() {
		return (
			<section className="hero">
				<div className="hero__wrapper">
					<img className="hero__wrapper--media" src={data[0].image} alt="" />
					<div className="hero__wrapper--icons">
						<img className="icons--play" src={playIcon} alt="play" />
						<img
							className="icons--fullscreen"
							src={fullScreen}
							alt="fullscreen"
						/>
						<img className="icons--volume-up" src={volumeUp} alt="volume-up" />
						<img
							className="icons--volume-up"
							src={volumeOff}
							alt="volume-off"
						/>
					</div>
				</div>
			</section>
		);
	}
}
