let numero, resultat = 1;

numero = window.prompt("Introdueix el numero", numero);

for(let i = 1; i < numero; i++) {
    resultat *= i+1;
}

console.log("El factorial es: "+resultat);