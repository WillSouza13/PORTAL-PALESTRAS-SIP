function mudar()
{
	

	var obj_1 = JSON.parse('[{"nome_palestrante":"Joao",'
						 +'"titulo_palestra":"html",'
						 +'"area_conhecimento":"web",'
						 +'"num_participantes_max":"Sim",'
						 +'"data_palestra":"2017-11-09"},'
						 +'{"nome_palestrante":"Pedro",'
						 +'"titulo_palestra":"Data Base",'
						 +'"area_conhecimento":"Banco de dados",'
						 +'"num_participantes_max":"Sim",'
						 +'"data_palestra":"2017-11-11"}]');
	
	for (var i = 0; i < obj_1.length; ++	i) 
	{
		document.getElementById("tabela_no" + (i + 1)).style = "";

		document.getElementById("nome_palestrante" + (i + 1)).innerHTML = obj_1[i].nome_palestrante;
		document.getElementById("titulo_palestra" + (i + 1)).innerHTML = obj_1[i].titulo_palestra;
		document.getElementById("area_conhecimento" + (i + 1)).innerHTML = obj_1[i].area_conhecimento;
		document.getElementById("num_participantes_max" + (i + 1)).innerHTML = obj_1[i].num_participantes_max;
		document.getElementById("data_palestra" + (i + 1)).innerHTML = obj_1[i].data_palestra;
	}
}
function limpa()
{
	var obj_1 = JSON.parse('[{"nome_palestrante":"Joao",'
	+'"titulo_palestra":"html",'
	+'"area_conhecimento":"web",'
	+'"num_participantes_max":"7",'
	+'"data_palestra":"2017-11-09"},'
	+'{"nome_palestrante":"Pedro",'
	+'"titulo_palestra":"Data Base",'
	+'"area_conhecimento":"Banco de dados",'
	+'"num_participantes_max":"33",'
	+'"data_palestra":"2017-11-11"}]');
	
	for (var i = 0; i < obj_1.length; ++	i) 
	{

		document.getElementById("nome_palestrante" + (i + 1)).innerHTML = "";
		document.getElementById("titulo_palestra" + (i + 1)).innerHTML = "";
		document.getElementById("area_conhecimento" + (i + 1)).innerHTML = "";
		document.getElementById("num_participantes_max" + (i + 1)).innerHTML = "";
		document.getElementById("data_palestra" + (i + 1)).innerHTML = "";
	}
}