
let btnEncriptar = document.querySelector("#btnEncriptar");
let btnDescencriptar = document.querySelector("#btnDescencriptar");
let btnCopiar = document.querySelector("#Copiar");
let cuadroTexto = document.querySelector("#textarea");

function encriptarTexto(){
	//obtener el texto
	texto = document.querySelector("#textarea").value;
	//ocultar la imagen y los mensajes
	document.querySelector(".sin-respuesta").style.display = "none";
	//mostrar el textarea resultado y el boton copiar
	document.querySelector("#txtDescencriptado").style.display = "block";
	document.querySelector(".btnCopiar").style.display = "block";
	//encriptar el texto
	textoEncriptado =texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");	 
	document.querySelector("#txtDescencriptado").innerHTML= textoEncriptado;
}

function desencriptarTexto(){
	//obtener el texto
	texto = document.querySelector("#textarea").value;
	//desencriptar el texto
	textoDesencriptado =texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
	//ocultar la imagen y los mensajes
	document.querySelector(".sin-respuesta").style.display = "none";
	//mostrar el textarea resultado y el boton copiar
	document.querySelector("#txtDescencriptado").style.display = "block";
	document.querySelector("#txtDescencriptado").innerHTML= textoDesencriptado;
	document.querySelector(".btnCopiar").style.display = "block";	 
}

btnEncriptar.onclick = encriptarTexto;
btnDescencriptar.onclick = desencriptarTexto;

