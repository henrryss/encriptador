
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

btnEncriptar.onclick = encriptarTexto;

