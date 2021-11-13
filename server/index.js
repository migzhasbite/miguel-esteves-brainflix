const express = require("express");
const path = require("path");
const cors = require("cors");
const videosRoutes = require("./routes/videosRoutes");
const axios = require("axios");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const port = process.env.PORT || process.argv[2] || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/videos", videosRoutes);
app.use(morgan("dev"));
app.use((req, res, next) => {
	console.log(req.headers);
	if (
		req.method === "POST" &&
		req.headers["content-type"] !== "application/json"
	) {
		res
			.status(400)
			.send("Please send application/json content-type with POST requests.");
	} else {
		next();
	}
});

app.listen(port, () => {
	console.log(`Server Started on http://localhost:${port}`);
	console.log("Press CTRL + C to stop server");
});
