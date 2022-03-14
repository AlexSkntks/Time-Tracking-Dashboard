const express = require('express');

const router = express.Router();

//A variável data contém o array de objetos de data.json
const data = require("../public/json/data.json");
const path  = require("path");

router.use(express.static(path.join(__dirname,"views")));

router.get("/", async (req, res) => {
	res.render("pages/index", {
		data: data
	});
});

module.exports = router;