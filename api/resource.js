const express = require('express');
const ejs = require('ejs');
const router = express.Router();

//A variável data contém o array de objetos de data.json
const path  = require("path");
router.use(express.static(path.join(__dirname,"views")));

const data = require(__dirname + "/../public/json/data.json");

router.get("/", async (req, res) => {
	res.render("pages/index", {
		data: data
	});
});

module.exports = router;