const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

let videoData = [];

const getVideoData = () => {
	fs.readFile("./data/video-details.json", (err, data) => {
		if (err) {
			console.log(err);
			return;
		}
		videoData = JSON.parse(data);
	});
};

getVideoData();

router.get("/", (req, res) => {
	res.json(videoData);
});

router.get("/:id", (req, res) => {
	const { id } = req.params;
	const video = videoData.find((video) => {
		return video.id === id;
	});
	if (video) {
		res.json(video);
	} else {
		res.status(404).send("Page not found.");
	}
});

router.post("/", (req, res) => {
	let videos = videoData;
	const { title, description, image } = req.body;
	if (!(title && description && image)) {
		res.status(400).send(`Please provide title and description.`);
	}
	const newVideo = {
		title,
		description,
		channel: "Miguel Esteves",
		image,
		views: "0",
		likes: "0",
		duration: "0:50",
		video: "https://project-2-api.herokuapp.com/stream",
		timestamp: new Date().getTime(),
		comments: [],
		id: uuidv4(),
	};
	console.log(newVideo);
	videos.push(newVideo);
	fs.writeFile("./data/video-details.json", JSON.stringify(videos), (err) => {
		if (err) {
			console.log(`Server encountered an unexpected condition that prevented
			it from uploading video.`);
			res.status(500).send(err);
		} else {
			console.log("Successfully created new video.");
			res.status(201).json(newVideo);
		}
	});
});

module.exports = router;
