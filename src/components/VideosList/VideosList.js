import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./VideosList.scss";
import { Link } from "react-router-dom";

export default function VideosList(props) {
	console.log(props);

	return (
		<div className="video-list__container">
			<h2 className="video-list__heading">NEXT VIDEOS</h2>
			{props.videoList.map((video) => {
				return (
					<div key={uuidv4()} className="video-list">
						<Link to={`/videos/${video.id}`}>
							<img
								className="video-list__image"
								src={video.image}
								alt={video.title}
								onClick={(event) => props.handleVideoClick(event, video.id)}
							/>
						</Link>
						<div className="video-list--info">
							<p className="video-list--title">{video.title}</p>
							<p className="video-list--channel">{video.channel}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
// search for a video by its URL
// const foundVideo = video.find((video)=> {
// return( video.id ===props.match.params.id;

// 	)
// })
//If no url does not exist
// if (!foundVideo) {
// 	return <Redirect to ="/videos" />;}

//linking to a video from id
//<sectionclassName=="planets">
// {planets.map((planet)=>{return(<Link key={planet.id} to={props.match.path +`/${planet.id}`}></Link>)})}
