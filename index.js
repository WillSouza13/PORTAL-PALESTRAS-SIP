const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('views', '.public/view/html');

app.use(express.static(path.join(__dirname, 'public/view/html')));
app.use(express.static(path.join(__dirname, 'public/view')));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/teste', function(req, res) {
	let json = JSON.parse(fs.readFileSync('Teste.json'));
	json.push(req.body);
	
	fs.writeFileSync('Teste.json', JSON.stringify(json));
	
	res.status(200)
		.send('SALVO COM SUCESSO!!!');
});

app.post('/api/login', function(req, res) {
	let json = JSON.parse(fs.readFileSync('PORTAL PALESTRAS SIP/public/Login.json'));
	json.push(req.body);
	
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
				res.sendFile('/temp/PORTAL PALESTRAS SIP/VIEW/FORMS/FORMULARIO_CONSULTA_PALESTRA.html');
				return;
			}
		}
		else
		{
			console.log("SENHA INCORRETA");
		}
	}

});


app.post('/api/cadastraPalestra', function(req, res) {
	
	let json = JSON.parse(fs.readFileSync('PORTAL PALESTRAS SIP/public/Palestras.json'));
	json.push(req.body);
	req.body
	fs.writeFileSync('PORTAL PALESTRAS SIP/public/Palestras.json', JSON.stringify(json));

});

app.post('/api/cadastroUsuario', function(req, res) {
	let json = JSON.parse(fs.readFileSync('PORTAL PALESTRAS SIP/public/Login.json'));
	json.push(req.body);
	req.body
	fs.writeFileSync('PORTAL PALESTRAS SIP/public/Login.json', JSON.stringify(json));

	res.sendFile(__dirname + '/public/VIEW/html/matricula_palestras.html');
	return;
});

function LeJson()
{
	var obj_1 = JSON.parse(fs.readFileSync('PORTAL PALESTRAS SIP/public/Palestras.json'));
	return obj_1;
}

app.listen(8080, function() {
	console.log('Servidor está funcionando em http://localhost:8080');
});
