let cadena = "";

cadena = window.prompt("Introduce una cadena de texto", cadena);

console.log(esPalindromo(cadena));

function esPalindromo(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/ /g, "");//Borra los espacios
    let textoLength = texto.length;
    let mitadTexto = textoLength/2;

    for(let i = 0; i < mitadTexto; i++){
        if( !(texto.charAt(i) === texto.charAt(textoLength-i-1)) ) {
            return "No es un palíndromo";
        }
    }

    return "Es un palíndromo";
}