
let btnEncriptar = document.querySelector("#btnEncriptar");
let btnDescencriptar = document.querySelector("#btnDescencriptar");
let btnCopiar = document.querySelector("#Copiar");
let cuadroTexto = document.querySelector("#textarea");

function encriptarTexto(){
	//obtener el texto
	texto = document.querySelector("#textarea").value;
	if (texto.length > 0) { //verifica si el texto esta vacío
	//ocultar la imagen y los mensajes
	document.querySelector(".sin-respuesta").style.display = "none";
	//mostrar el textarea resultado y el boton copiar
	document.querySelector("#txtDescencriptado").style.display = "block";
	location.href ="#txtDescencriptado";
	document.querySelector(".btnCopiar").style.display = "block";
	//encriptar el texto
	textoEncriptado =texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");	 
	document.querySelector("#txtDescencriptado").innerHTML= textoEncriptado;

	}
}

function desencriptarTexto(){
	//obtener el texto
	texto = document.querySelector("#textarea").value;
	if (texto.length > 0) { //verifica si el texto esta vacío
	//desencriptar el texto
	textoDesencriptado =texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
	//ocultar la imagen y los mensajes
	document.querySelector(".sin-respuesta").style.display = "none";
	//mostrar el textarea resultado y el boton copiar
	document.querySelector("#txtDescencriptado").style.display = "block";
	document.querySelector("#txtDescencriptado").innerHTML= textoDesencriptado;
	document.querySelector(".btnCopiar").style.display = "block";
	}	 
}

function ocultarImagen(){
	if (cuadroTexto.value.length === 0) { //verifica que el cuadro de texto esta vacío
		//ocultar textarea resultado y el boton copiar
		document.querySelector("#txtDescencriptado").style.display = "none";
		document.querySelector(".btnCopiar").style.display = "none";
		//mostrar la imagen del muñeco y los mensajes
		document.querySelector(".sin-respuesta").style.display = "block";
	}
}

function copiarAlPortapapeles(){
	//obtnemos el texto del resultado
	textoCopiado = document.querySelector("#txtDescencriptado").value;
	//usamos la funcion navigator para copiar al portapapeles
	navigator.clipboard.writeText(textoCopiado).then(()=>{alert("Texto copiado al portapapeles")}).catch(err => {alert("Error al copiar al portapapeles")});
}

cuadroTexto.oninput = ocultarImagen; // en caso no haya texto escrito se mostrara la imagen sin resultados
btnEncriptar.onclick = encriptarTexto;
btnDescencriptar.onclick = desencriptarTexto;
btnCopiar.onclick = copiarAlPortapapeles;

