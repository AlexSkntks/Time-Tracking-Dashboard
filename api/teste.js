const express = require('express');

const hello = express.Router();

//A variável data contém o array de objetos de data.json
const data = require("../public/json/data.json");

hello.get("/hello", async (req, res) => {
	res.json({message: "Hello world"});
});

module.exports = hello;