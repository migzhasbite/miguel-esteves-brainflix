const express = require("express");
const router = express.Router();
const fs = require("fs");

// data and functions that were only needed by the videos routes was moved here
let videoData = [];

//function to read videos data
const getVideoData = () => {
	fs.readFile("./data/videos.json", (err, data) => {
		if (err) {
			console.log(err);
			return;
		}
		videoData = JSON.parse(data);
	});
};

//return video data
getVideoData();

router.get("/", (req, res) => {
	// console.log(req.query);
	const { id } = req.query;
	console.log(videoData);
	let videos = videoData;
	if (id) {
		videos = videos.filter((video) => {
			console.log(video.id);
			return video.id === id;
		});
	}
	res.json(videos);
});

router.get("/:id", (req, res) => {
	console.log(req.params.id);
	const { id } = req.params;
	let videos = videoData;
	const video = videoData.find((video) => {
		return video.id === id;
	});
	if (video) {
		res.json(videos.filter((video) => video.id === req.params.id));
	} else {
		res.status(404).send("Cannot find video.");
	}
});

module.exports = router;
