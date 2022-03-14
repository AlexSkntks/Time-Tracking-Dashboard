let express = require('express');

let product = require('./api/resource');

let app = express();

const path  = require("path");

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine", "ejs");

app.use(product);

app.listen(3000, () => {
	console.log("Server is running at port 3000");
})
