const express = require('express');

const router = express.Router();

//A variável data contém o array de objetos de data.json
const data = require("../public/json/data.json");

router.get("/", async (req, res) => {
	res.render("../views/pages/index", {
		data: data
	});
});

module.exports = router;