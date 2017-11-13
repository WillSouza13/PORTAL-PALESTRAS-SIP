const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//Startar caminhos
app.set('views', '.public/view/html');

app.use(express.static(path.join(__dirname, 'public/view/html')));
app.use(express.static(path.join(__dirname, 'public/view')));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Render da HOMEPAGE:
app.get('/', function(req, res) {
	res.render('index.html');
});

//Rotas:
app.get('/api/formulario_criacao_palestra.html', function(req, res){
	res.sendFile(__dirname + '/public/VIEW/html/formulario_criacao_palestra.html');
	return;
});

app.get('/api/gestao.html', function(req, res){
	res.sendFile(__dirname + '/public/VIEW/html/gestao.html');
	return;
});

app.get('/api/listas_palestras.html', function(req, res){
	res.sendFile(__dirname + '/public/VIEW/html/listas_palestras.html');
	return;
});

app.get('/api/consulta_palestras_cards.html', function(req, res){
	res.sendFile(__dirname + '/public/VIEW/html/consulta_palestras_cards.html');
	return;
});

app.get('/api/matricula_palestras.html', function(req, res){
	res.sendFile(__dirname + '/public/VIEW/html/matricula_palestras.html');
	return;
});

app.get('/api/index.html', function(req, res){
	res.sendFile(__dirname + '/public/VIEW/html/index.html');
	return;
});

app.post('/api/teste', function(req, res) {
	let json = JSON.parse(fs.readFileSync('Teste.json'));
	json.push(req.body);
	
	fs.writeFileSync('Teste.json', JSON.stringify(json));
	
	res.status(200)
		.send('SALVO COM SUCESSO!!!');
});

app.post('/api/login', function(req, res) {
	let json = JSON.parse(fs.readFileSync('public/Login.json'));
//	json.push(req.body);
	
	for (var i = 0; i < json.length; ++	i) {
		var Usuario = json[i];
		if (Usuario.cpf === req.body.cpf && Usuario.senha === req.body.senha) {
			if(Usuario.cpf == "Admin" && Usuario.senha == "Admin") 
			{
				res.sendFile(__dirname + '/public/VIEW/html/gestao.html');
				return;
			}
			else
			{
				res.sendFile(__dirname + '/public/VIEW/html/consulta_palestras_cards.html');
				return;
			}
		}
		else
		{
			console.log();
		}
	}
});


app.post('/api/cadastraPalestra', function(req, res) {
	
	let json = JSON.parse(fs.readFileSync('public/Palestras.json'));
	json.push(req.body);
	req.body
	fs.writeFileSync('public/Palestras.json', JSON.stringify(json));

});

app.post('/api/cadastroUsuario', function(req, res) {
	let json = JSON.parse(fs.readFileSync('public/Login.json'));
	json.push(req.body);
	req.body
	fs.writeFileSync('public/Login.json', JSON.stringify(json));

	res.sendFile(__dirname + '/public/VIEW/html/matricula_palestras.html');
	return;
});


//Server
app.listen(8080, function() {
	console.log('Servidor está funcionando em http://localhost:8080');
});
