const express = require('express');
const ejs = require('ejs');
const router = express.Router();

var data = require(__dirname + '/../public/json/data.json');

router.get("/", async (req, res) => {
	try {
		res.render(__dirname + "/../views/pages/index", {
			data: data
		});
	} catch (error) {
		res.status(500);	
	}
	
});

module.exports = router;