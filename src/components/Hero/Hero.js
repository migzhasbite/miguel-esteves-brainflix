import React, { Component } from "react";
import "../Hero/Hero.scss";
import playIcon from "../../assets/icons/play.svg";
import fullScreen from "../../assets/icons/fullscreen.svg";
import volumeUp from "../../assets/icons/volume_up.svg";
import volumeOff from "../../assets/icons/volume_off.svg";

export default function Hero(props) {
	return (
		<section className="hero">
			<div className="hero__wrapper">
				<video
					className="hero--media"
					controls
					poster={props.heroVideo.image}
				></video>
				<div className="hero__wrapper--icons">
					<img className="icons--play" src={playIcon} alt="play" />
					<img
						className="icons--fullscreen"
						src={fullScreen}
						alt="fullscreen"
					/>
					<img className="icons--volume-up" src={volumeUp} alt="volume-up" />
					<img className="icons--volume-up" src={volumeOff} alt="volume-off" />
				</div>
			</div>
		</section>
	);
}
