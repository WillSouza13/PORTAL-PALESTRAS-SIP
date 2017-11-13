function mudarCor(){
	document.getElementById("button-standard").style.backgroundColor = "#000";
}	
function TelaPalestra(){
	location.href="VIEW/FORMS/FORMULARIO_CRIACAO_USUARIO.html";
}

function validar(){
	alert('teste');
}

 function ViewCadastro(){
	var y = document.getElementById("txtHiddenUname");
	y.type= "text";
}
function desfocamodal()
{
	document.getElementById("modal").className = "background-modal-desfocado";
}
function focamodal()
{
	document.getElementById("modal").className = "background-modal";
}

