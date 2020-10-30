//se crea la funcion
var palabras = prompt("dame una palabras: ");
checado(palabras);
function checado(cadena) {
	if(cadena == cadena.toUpperCase()) {
		alert(" está formada sólo por mayúsculas");
	}
	else if(cadena == cadena.toLowerCase()) {
		alert(" está formada sólo por minúsculas");
	}
	else {
		alert("está formada por mayúsculas y minúsculas");
	}
}