let numero, letra;
let letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

numero = window.prompt("Introduce el numero del dni", numero);
letra = window.prompt("Introduce la letra del dni", letra);

if(numero > 99999999) {
    console.log("El numero proporcionado no es valido");
} else {
    let posicion = numero%23;
    let letraNueva = letras[posicion];
    if(letraNueva === letra) {
        console.log("El numero y la letra son correctos");
    } else {
        console.log("El numero o la letra no son correctos");
    }
}