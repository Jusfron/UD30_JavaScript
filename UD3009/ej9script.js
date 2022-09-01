let cadena = "";

cadena = prompt("Escribe un texto", cadena);

console.log(esMayus(cadena));

function esMayus(texto) {
    if(texto === texto.toUpperCase()){
        return "El texto esta formado sólo por mayúsculas";
    } else if (texto === texto.toLowerCase()) {
        return "El texto esta formado sólo por minúsculas";
    } else {
        return "El texto esta formado por mayúsculas y minúsculas";
    }
}