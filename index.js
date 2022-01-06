let express = require('express');
let app = express();
let port = 3000;
const path  = require("path");

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine", "ejs");

//A variável data contém o array de objetos de data.json
const data = require(__dirname + "/public/json/data.json");

app.get('/', (req, res) => {
	res.render("pages/index", {
		data: data
	});
});

app.get('/sobre', (req, res) =>{
	res.render("pages/sobre");
});

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`)
	console.log('Para derrubar o servidor: ctrl + c');
})
