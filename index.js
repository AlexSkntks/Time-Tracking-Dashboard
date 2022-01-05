let express = require('express');
let app = express();
let port = 3000;
const path  = require("path");

app.set("view engine", "ejs");

app.get('/', (req, res) => {
	res.render("pages/index");
})

app.use(express.static(path.join(__dirname,"public")))

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`)
	console.log('Para derrubar o servidor: ctrl + c');
})
