const express = require("express");
const path = require("path");
const cors = require("cors");
const videosRoutes = require("./routes/videosRoutes");
const { default: axios } = require("axios");
const morgan = require("morgan");
// require("dotenv").config();

const app = express();
const port = 8080;
// const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/videos", videosRoutes);
app.use(morgan("dev"));

app.listen(port, () => {
	console.log(`Server Started on http://localhost:${port}`);
	console.log("Press CTRL + C to stop server");
});
