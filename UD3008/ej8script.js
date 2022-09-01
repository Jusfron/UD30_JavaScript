let numero;
numero = window.prompt("Introduce el numero", numero);


console.log(esPar(numero));


function esPar(x) { //Devuelve 0 si es par y 1 si es impar
    let impar = x & 1;    //Ej.   1101 & 0001 ==> 0001 ///   1100 & 0001 ==> 0000

    if(impar) {
        return "El numero es impar";
    } else {
        return "El numero es par";
    }
}