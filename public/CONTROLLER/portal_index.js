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
function ShowCadastro(divid)
{
	var elemento = document.getElementById(divid);
	elemento.className=elemento.className.replace('hide', 'show');

//    document.getElementById(divid).style.display = "none"; // ou "block"
}
