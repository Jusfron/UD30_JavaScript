let numero;
numero = window.prompt("Introduce el numero", numero);

if(esImpar(numero)) { 
    console.log("El numero es impar");
} else {
    console.log("El numero es par");
}

function esImpar(x) { //Devuelve 0 si es par y 1 si es impar
    return x & 1;    //Ej.   1101 & 0001 ==> 0001 ///   1100 & 0001 ==> 0000
}